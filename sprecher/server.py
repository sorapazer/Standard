#!/usr/bin/env python3
"""
SPRECHER — lokaler Text-to-Speech-Server für lange Sprechertexte.

Nimmt einen vollständigen Vortrags-/Sprechertext entgegen und erzeugt daraus
eine zusammenhängende MP3-Datei (max. 30 Minuten) mit einer männlichen
deutschen Stimme. Geschwindigkeit, Tonhöhe und Sprecher sind einstellbar.

Start:
    pip install edge-tts
    python3 server.py

Danach öffnet sich http://127.0.0.1:8765 im Browser.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import mimetypes
import re
import sys
import threading
import time
import unicodedata
import uuid
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

try:
    import edge_tts
except ImportError:  # pragma: no cover - reine Startdiagnose
    sys.exit(
        "Das Paket 'edge-tts' fehlt.\n"
        "Bitte installieren mit:  pip install edge-tts\n"
    )

STATIC_DIR = Path(__file__).resolve().parent / "static"

# --------------------------------------------------------------------------
# Konstanten
# --------------------------------------------------------------------------

MAX_MINUTES = 30                 # harte Obergrenze für die fertige Audiodatei
MAX_SECONDS = MAX_MINUTES * 60

# edge-tts liefert konstant "audio-24khz-48kbitrate-mono-mp3":
# 48 kbit/s = 6000 Byte/s. Damit ist die Dauer exakt aus der Dateigröße ableitbar.
AUDIO_BYTES_PER_SEC = 6000

# Erfahrungswert für deutsche Neural-Stimmen bei Tempo 1,0 (nur für die Vorschau
# der Länge im Browser — die tatsächliche Dauer wird nach dem Rendern gemessen).
CHARS_PER_SECOND = 15.0

CHUNK_TARGET = 1600              # Zielgröße eines Abschnitts in Zeichen
CHUNK_MAX = 2600                 # ab hier wird ein Satz notfalls hart getrennt
HARD_CHAR_LIMIT = 120_000        # Schutz gegen versehentliche Riesen-Uploads

PREVIEW_TEXT = (
    "Guten Tag. Ich lese Ihnen Ihren Text vor – ruhig, deutlich und in "
    "gleichmäßigem Tempo. So klingt diese Stimme in einem längeren Vortrag."
)

JOB_TTL_SECONDS = 6 * 60 * 60    # fertige Jobs nach 6 Stunden verwerfen
MAX_KEPT_JOBS = 8

# --------------------------------------------------------------------------
# Stimmen — ausschließlich männlich, Deutsch bzw. mehrsprachig
# --------------------------------------------------------------------------

CURATED_VOICES = [
    {
        "id": "de-DE-ConradNeural",
        "name": "Conrad",
        "region": "Deutschland",
        "description": "Warm und sonor. Der Klassiker für wissenschaftliche Vorträge.",
    },
    {
        "id": "de-DE-FlorianMultilingualNeural",
        "name": "Florian",
        "region": "Deutschland",
        "description": "Sehr natürliche Betonung, trägt auch über lange Fließtexte.",
    },
    {
        "id": "de-DE-KillianNeural",
        "name": "Killian",
        "region": "Deutschland",
        "description": "Hell und wach, etwas jüngeres Timbre.",
    },
    {
        "id": "de-AT-JonasNeural",
        "name": "Jonas",
        "region": "Österreich",
        "description": "Ruhig und getragen, mit leichter österreichischer Färbung.",
    },
    {
        "id": "de-CH-JanNeural",
        "name": "Jan",
        "region": "Schweiz",
        "description": "Sachlich und nüchtern, dezent schweizerischer Einschlag.",
    },
    {
        "id": "en-US-AndrewMultilingualNeural",
        "name": "Andrew",
        "region": "Mehrsprachig",
        "description": "Tiefe, erzählende Stimme mit sauberer deutscher Aussprache.",
    },
    {
        "id": "en-US-BrianMultilingualNeural",
        "name": "Brian",
        "region": "Mehrsprachig",
        "description": "Freundlich und beweglich, gut für erklärende Passagen.",
    },
    {
        "id": "fr-FR-RemyMultilingualNeural",
        "name": "Rémy",
        "region": "Mehrsprachig",
        "description": "Markant und pointiert, setzt Argumente deutlich ab.",
    },
]

# Nachrücker, falls Microsoft eine der kuratierten Stimmen abschaltet.
FALLBACK_POOL = [
    {
        "id": "en-US-AdamMultilingualNeural",
        "name": "Adam",
        "region": "Mehrsprachig",
        "description": "Ruhiger Vortragston, gleichmäßiges Tempo.",
    },
    {
        "id": "it-IT-GiuseppeMultilingualNeural",
        "name": "Giuseppe",
        "region": "Mehrsprachig",
        "description": "Volle, dunkle Stimme mit deutlicher Artikulation.",
    },
    {
        "id": "en-GB-RyanNeural",
        "name": "Ryan",
        "region": "Mehrsprachig",
        "description": "Nüchtern und klar, sachlicher Duktus.",
    },
]

TARGET_VOICE_COUNT = 8


class VoiceCatalog:
    """Prüft die kuratierte Stimmenliste einmalig gegen den Live-Katalog."""

    def __init__(self) -> None:
        self._lock = threading.Lock()
        self._voices: list[dict] | None = None
        self._verified = False

    def get(self) -> tuple[list[dict], bool]:
        with self._lock:
            if self._voices is not None:
                return self._voices, self._verified
        voices, verified = self._build()
        with self._lock:
            # Ohne Netz nicht cachen — beim nächsten Aufruf erneut versuchen.
            if verified:
                self._voices = voices
                self._verified = True
        return voices, verified

    def _build(self) -> tuple[list[dict], bool]:
        try:
            available = asyncio.run(_list_remote_voices())
        except Exception:
            return list(CURATED_VOICES), False

        by_id = {v.get("ShortName"): v for v in available}
        chosen = [v for v in CURATED_VOICES if v["id"] in by_id]
        taken = {v["id"] for v in chosen}

        for spare in FALLBACK_POOL:
            if len(chosen) >= TARGET_VOICE_COUNT:
                break
            if spare["id"] in by_id and spare["id"] not in taken:
                chosen.append(spare)
                taken.add(spare["id"])

        # Immer noch zu wenig? Dann alles auffüllen, was männlich und deutsch ist.
        if len(chosen) < TARGET_VOICE_COUNT:
            for short_name, meta in sorted(by_id.items()):
                if len(chosen) >= TARGET_VOICE_COUNT:
                    break
                if short_name in taken or meta.get("Gender") != "Male":
                    continue
                if not short_name.startswith("de-"):
                    continue
                chosen.append(
                    {
                        "id": short_name,
                        "name": short_name.split("-")[-1].replace("Neural", ""),
                        "region": _region_label(short_name),
                        "description": "Weitere männliche deutsche Stimme.",
                    }
                )
                taken.add(short_name)

        return chosen, True


def _region_label(short_name: str) -> str:
    return {
        "de-DE": "Deutschland",
        "de-AT": "Österreich",
        "de-CH": "Schweiz",
    }.get(short_name[:5], "Mehrsprachig")


async def _list_remote_voices() -> list[dict]:
    return await asyncio.wait_for(edge_tts.list_voices(), timeout=20)


VOICE_CATALOG = VoiceCatalog()


# --------------------------------------------------------------------------
# Textzerlegung
# --------------------------------------------------------------------------

# Abkürzungen, nach denen ein Punkt *kein* Satzende ist.
ABBREVIATIONS = {
    "z", "b", "bzw", "ca", "usw", "usf", "vgl", "ebd", "ders", "dies", "dr",
    "prof", "hrsg", "nr", "bd", "abb", "tab", "evtl", "ggf", "inkl", "exkl",
    "max", "min", "mio", "mrd", "sog", "u", "a", "d", "h", "i", "e", "etc",
    "bspw", "insb", "jh", "jhd", "kap", "vs", "resp", "st", "s", "f", "ff",
    "ebda", "aufl", "bzgl", "ggfs", "o", "m", "w", "zit", "n", "vgl",
}

_SENTENCE_END = re.compile(r'([.!?…]+["»“”\'’\)\]]*)(\s+)')
_TRAILING_TOKEN = re.compile(r"([A-Za-zÄÖÜäöüß]{1,5})[\"»“”\'’\)\]]*\.$")
_SOFT_BREAK = re.compile(r"(?<=[;:,])\s+")


def normalize_text(raw: str) -> str:
    """Vereinheitlicht Zeilenenden, Unicode und Leerraum."""
    text = unicodedata.normalize("NFC", raw)
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = text.replace(" ", " ").replace("​", "")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r" *\n *", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def _is_abbreviation(head: str) -> bool:
    match = _TRAILING_TOKEN.search(head)
    if not match:
        return False
    return match.group(1).lower() in ABBREVIATIONS


def split_sentences(paragraph: str) -> list[str]:
    """Zerlegt einen Absatz in Sätze — konservativ.

    Ein zu selten gesetzter Schnitt kostet nichts (der Abschnitt wird nur
    länger), ein falsch gesetzter Schnitt erzeugt eine hörbare Pause mitten
    im Satz. Im Zweifel wird deshalb nicht getrennt.
    """
    sentences: list[str] = []
    start = 0
    for match in _SENTENCE_END.finditer(paragraph):
        end = match.end(1)
        head = paragraph[start:end]
        stripped = head.strip()
        if len(stripped) < 3:
            continue
        if _is_abbreviation(stripped):
            continue
        # "am 3. Januar", "Kapitel 2. Abschnitt" – nach Ziffern nie trennen.
        if re.search(r"\d[\"»“”\'’\)\]]*\.$", stripped):
            continue
        following = paragraph[match.end():match.end() + 1]
        if following and not (following.isupper() or following in "„\"»(–—"):
            continue
        sentences.append(stripped)
        start = match.end()
    tail = paragraph[start:].strip()
    if tail:
        sentences.append(tail)
    return sentences


def _split_long_sentence(sentence: str) -> list[str]:
    """Notfalltrennung überlanger Sätze an Kommata, sonst an Wortgrenzen."""
    pieces: list[str] = []
    buffer = ""
    for part in _SOFT_BREAK.split(sentence):
        candidate = f"{buffer} {part}".strip() if buffer else part
        if len(candidate) > CHUNK_TARGET and buffer:
            pieces.append(buffer)
            buffer = part
        else:
            buffer = candidate
    if buffer:
        pieces.append(buffer)

    result: list[str] = []
    for piece in pieces:
        while len(piece) > CHUNK_MAX:
            cut = piece.rfind(" ", 0, CHUNK_MAX)
            if cut <= 0:
                cut = CHUNK_MAX
            result.append(piece[:cut].strip())
            piece = piece[cut:].strip()
        if piece:
            result.append(piece)
    return result


def chunk_text(text: str) -> list[str]:
    """Teilt den Sprechertext in synthetisierbare Abschnitte.

    Absatzgrenzen beginnen immer einen neuen Abschnitt — dadurch entsteht an
    genau den Stellen eine kurze Atempause, an denen der Text sie vorsieht.
    """
    text = normalize_text(text)
    if not text:
        return []

    chunks: list[str] = []
    for paragraph in text.split("\n\n"):
        paragraph = paragraph.replace("\n", " ").strip()
        if not paragraph:
            continue
        buffer = ""
        for sentence in split_sentences(paragraph):
            for part in (
                [sentence] if len(sentence) <= CHUNK_MAX else _split_long_sentence(sentence)
            ):
                candidate = f"{buffer} {part}".strip() if buffer else part
                if buffer and len(candidate) > CHUNK_TARGET:
                    chunks.append(buffer)
                    buffer = part
                else:
                    buffer = candidate
        if buffer:
            chunks.append(buffer)
    return chunks


# --------------------------------------------------------------------------
# Sprachsynthese
# --------------------------------------------------------------------------


def rate_string(speed: float) -> str:
    percent = int(round((speed - 1.0) * 100))
    return f"{percent:+d}%"


def pitch_string(semitone_hz: int) -> str:
    return f"{int(semitone_hz):+d}Hz"


async def synth_chunk(text: str, voice: str, rate: str, pitch: str, attempts: int = 3) -> bytes:
    """Synthetisiert einen Abschnitt; bei Netzfehlern mit Wiederholung."""
    last_error: Exception | None = None
    for attempt in range(attempts):
        buffer = bytearray()
        try:
            communicate = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch)
            async for part in communicate.stream():
                if part["type"] == "audio":
                    buffer += part["data"]
            if not buffer:
                raise RuntimeError("Der Sprachdienst hat keine Audiodaten geliefert.")
            return bytes(buffer)
        except Exception as error:  # noqa: BLE001 – jeder Fehler ist ein Retry wert
            last_error = error
            if attempt < attempts - 1:
                await asyncio.sleep(1.5 * (attempt + 1))
    raise last_error if last_error else RuntimeError("Unbekannter Fehler")


# --------------------------------------------------------------------------
# Jobverwaltung
# --------------------------------------------------------------------------


class Job:
    def __init__(self, chunks: list[str], voice: dict, rate: str, pitch: str) -> None:
        self.id = uuid.uuid4().hex[:12]
        self.chunks = chunks
        self.voice = voice
        self.rate = rate
        self.pitch = pitch
        self.state = "wartet"          # wartet | laeuft | fertig | fehler | abgebrochen
        self.done = 0
        self.total = len(chunks)
        self.audio = bytearray()
        self.error: str | None = None
        self.truncated = False
        self.created = time.time()
        self.finished: float | None = None
        self.cancel = threading.Event()
        self.lock = threading.Lock()

    @property
    def seconds(self) -> float:
        return len(self.audio) / AUDIO_BYTES_PER_SEC

    def snapshot(self) -> dict:
        with self.lock:
            return {
                "id": self.id,
                "state": self.state,
                "done": self.done,
                "total": self.total,
                "seconds": round(self.seconds, 1),
                "bytes": len(self.audio),
                "error": self.error,
                "truncated": self.truncated,
                "voice": self.voice,
                "elapsed": round((self.finished or time.time()) - self.created, 1),
            }


JOBS: dict[str, Job] = {}
JOBS_LOCK = threading.Lock()


def register_job(job: Job) -> None:
    with JOBS_LOCK:
        JOBS[job.id] = job
        stale = [
            key
            for key, value in JOBS.items()
            if value.finished and time.time() - value.finished > JOB_TTL_SECONDS
        ]
        for key in stale:
            JOBS.pop(key, None)
        if len(JOBS) > MAX_KEPT_JOBS:
            for key, _ in sorted(JOBS.items(), key=lambda item: item[1].created)[
                : len(JOBS) - MAX_KEPT_JOBS
            ]:
                if JOBS[key].state in {"fertig", "fehler", "abgebrochen"}:
                    JOBS.pop(key, None)


def get_job(job_id: str) -> Job | None:
    with JOBS_LOCK:
        return JOBS.get(job_id)


async def run_job(job: Job) -> None:
    for index, chunk in enumerate(job.chunks):
        if job.cancel.is_set():
            with job.lock:
                job.state = "abgebrochen"
                job.finished = time.time()
            return
        audio = await synth_chunk(chunk, job.voice["id"], job.rate, job.pitch)
        with job.lock:
            remaining = MAX_SECONDS * AUDIO_BYTES_PER_SEC - len(job.audio)
            if remaining <= 0:
                job.truncated = True
                job.done = index
                break
            if len(audio) > remaining:
                # Auf exakt 30:00 Minuten kürzen (MP3-Frames sind 144 Byte groß).
                job.audio += audio[: remaining - (remaining % 144)]
                job.truncated = True
                job.done = index + 1
                break
            job.audio += audio
            job.done = index + 1
    with job.lock:
        job.state = "fertig"
        job.finished = time.time()


def start_job(job: Job) -> None:
    def worker() -> None:
        with job.lock:
            job.state = "laeuft"
        try:
            asyncio.run(run_job(job))
        except Exception as error:  # noqa: BLE001
            with job.lock:
                job.state = "fehler"
                job.error = describe_error(error)
                job.finished = time.time()

    threading.Thread(target=worker, name=f"sprecher-{job.id}", daemon=True).start()


def describe_error(error: Exception) -> str:
    text = str(error).strip() or error.__class__.__name__
    lowered = text.lower()
    if any(hint in lowered for hint in ("connect", "timeout", "ssl", "dns", "resolve", "proxy")):
        return (
            "Keine Verbindung zum Sprachdienst. Bitte Internetverbindung prüfen "
            f"(Details: {text})."
        )
    if "403" in text or "401" in text:
        return (
            "Der Sprachdienst hat die Anfrage abgelehnt. Meist hilft ein Update: "
            f"pip install -U edge-tts (Details: {text})."
        )
    return text


# --------------------------------------------------------------------------
# HTTP-Schicht
# --------------------------------------------------------------------------

SAFE_NAME = re.compile(r"[^A-Za-z0-9ÄÖÜäöüß._-]+")

# Der Browser bricht Verbindungen regelmäßig selbst ab: beim Springen im
# Player, beim Abbrechen eines Downloads oder beim Neuladen der Seite.
CLIENT_GONE = (BrokenPipeError, ConnectionResetError, ConnectionAbortedError)


def safe_filename(name: str) -> str:
    cleaned = SAFE_NAME.sub("_", name).strip("._") or "Sprechertext"
    if not cleaned.lower().endswith(".mp3"):
        cleaned += ".mp3"
    return cleaned[:120]


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "Sprecher/1.0"

    # -- Hilfsmethoden ----------------------------------------------------

    def log_message(self, fmt: str, *args) -> None:  # noqa: A003
        if self.path.startswith("/api/job/"):
            return  # Statusabfragen nicht mitloggen
        sys.stderr.write(f"  {self.address_string()}  {fmt % args}\n")

    def send_payload(self, status: int, body: bytes, content_type: str, extra: dict | None = None) -> None:
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for key, value in (extra or {}).items():
            self.send_header(key, value)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_payload(status, body, "application/json; charset=utf-8")

    def send_error_json(self, status: int, message: str) -> None:
        try:
            self.send_json(status, {"error": message})
        except CLIENT_GONE:
            pass

    def read_json(self) -> dict:
        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0:
            return {}
        if length > HARD_CHAR_LIMIT * 4 + 8192:
            raise ValueError("Die Anfrage ist zu groß.")
        raw = self.rfile.read(length)
        return json.loads(raw.decode("utf-8"))

    # -- Routen -----------------------------------------------------------

    def do_GET(self) -> None:  # noqa: N802
        parsed = urlparse(self.path)
        route = parsed.path
        query = parse_qs(parsed.query)
        try:
            if route == "/api/voices":
                self.route_voices()
            elif route.startswith("/api/job/"):
                self.route_job_status(route.rsplit("/", 1)[-1])
            elif route.startswith("/api/audio/"):
                self.route_audio(route.rsplit("/", 1)[-1], query)
            else:
                self.route_static(route)
        except CLIENT_GONE:
            self.close_connection = True
        except Exception as error:  # noqa: BLE001
            self.send_error_json(500, describe_error(error))

    def do_HEAD(self) -> None:  # noqa: N802
        self.do_GET()

    def do_POST(self) -> None:  # noqa: N802
        route = urlparse(self.path).path
        try:
            if route == "/api/synthesize":
                self.route_synthesize()
            elif route == "/api/preview":
                self.route_preview()
            elif route.startswith("/api/cancel/"):
                self.route_cancel(route.rsplit("/", 1)[-1])
            else:
                self.send_error_json(404, "Unbekannter Endpunkt.")
        except CLIENT_GONE:
            self.close_connection = True
        except ValueError as error:
            self.send_error_json(400, str(error))
        except Exception as error:  # noqa: BLE001
            self.send_error_json(500, describe_error(error))

    # -- Implementierungen ------------------------------------------------

    def route_static(self, route: str) -> None:
        relative = "index.html" if route in ("/", "") else route.lstrip("/")
        target = (STATIC_DIR / relative).resolve()
        if not str(target).startswith(str(STATIC_DIR)) or not target.is_file():
            self.send_payload(404, b"Nicht gefunden", "text/plain; charset=utf-8")
            return
        content_type = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        if content_type.startswith("text/") or content_type == "application/javascript":
            content_type += "; charset=utf-8"
        self.send_payload(200, target.read_bytes(), content_type)

    def route_voices(self) -> None:
        voices, verified = VOICE_CATALOG.get()
        self.send_json(
            200,
            {
                "voices": voices,
                "verified": verified,
                "maxMinutes": MAX_MINUTES,
                "charsPerSecond": CHARS_PER_SECOND,
                "hardCharLimit": HARD_CHAR_LIMIT,
            },
        )

    def _read_request(self) -> tuple[dict, dict]:
        payload = self.read_json()
        voices, _ = VOICE_CATALOG.get()
        voice_id = payload.get("voice") or voices[0]["id"]
        voice = next((item for item in voices if item["id"] == voice_id), None)
        if voice is None:
            raise ValueError("Diese Stimme steht nicht zur Verfügung.")
        return payload, voice

    def route_synthesize(self) -> None:
        payload, voice = self._read_request()
        text = normalize_text(str(payload.get("text") or ""))
        if not text:
            raise ValueError("Bitte zuerst einen Sprechertext einfügen.")
        if len(text) > HARD_CHAR_LIMIT:
            raise ValueError(
                f"Der Text ist mit {len(text):,} Zeichen zu lang "
                f"(Maximum {HARD_CHAR_LIMIT:,})."
            )

        speed = float(payload.get("speed") or 1.0)
        speed = min(2.0, max(0.5, speed))
        pitch = int(payload.get("pitch") or 0)
        pitch = min(20, max(-20, pitch))

        estimate = len(text) / (CHARS_PER_SECOND * speed)
        if estimate > MAX_SECONDS * 1.15:
            raise ValueError(
                f"Der Text ergibt geschätzt {estimate / 60:.0f} Minuten Audio und "
                f"überschreitet damit das Limit von {MAX_MINUTES} Minuten. "
                "Bitte kürzen oder das Tempo erhöhen."
            )

        chunks = chunk_text(text)
        if not chunks:
            raise ValueError("Im Text wurde kein sprechbarer Inhalt gefunden.")

        job = Job(chunks, voice, rate_string(speed), pitch_string(pitch))
        register_job(job)
        start_job(job)
        self.send_json(200, {"id": job.id, "chunks": job.total})

    def route_preview(self) -> None:
        payload, voice = self._read_request()
        speed = min(2.0, max(0.5, float(payload.get("speed") or 1.0)))
        pitch = min(20, max(-20, int(payload.get("pitch") or 0)))
        audio = asyncio.run(
            synth_chunk(
                PREVIEW_TEXT,
                voice["id"],
                rate_string(speed),
                pitch_string(pitch),
                attempts=2,
            )
        )
        self.send_payload(200, audio, "audio/mpeg")

    def route_job_status(self, job_id: str) -> None:
        job = get_job(job_id)
        if job is None:
            self.send_error_json(404, "Dieser Auftrag ist nicht mehr vorhanden.")
            return
        self.send_json(200, job.snapshot())

    def route_cancel(self, job_id: str) -> None:
        job = get_job(job_id)
        if job is None:
            self.send_error_json(404, "Dieser Auftrag ist nicht mehr vorhanden.")
            return
        job.cancel.set()
        self.send_json(200, job.snapshot())

    def route_audio(self, job_id: str, query: dict) -> None:
        job = get_job(job_id)
        if job is None:
            self.send_error_json(404, "Dieser Auftrag ist nicht mehr vorhanden.")
            return
        with job.lock:
            data = bytes(job.audio)
        if not data:
            self.send_error_json(409, "Es liegt noch keine Audiodatei vor.")
            return

        headers = {"Accept-Ranges": "bytes"}
        if query.get("download"):
            name = safe_filename(query.get("name", ["Sprechertext"])[0])
            headers["Content-Disposition"] = f'attachment; filename="{name}"'

        range_header = self.headers.get("Range")
        if range_header and range_header.startswith("bytes="):
            start, _, end = range_header[6:].partition("-")
            try:
                first = int(start) if start else 0
                last = int(end) if end else len(data) - 1
            except ValueError:
                first, last = 0, len(data) - 1
            first = max(0, first)
            last = min(last, len(data) - 1)
            if first > last:
                self.send_payload(416, b"", "audio/mpeg", {"Content-Range": f"bytes */{len(data)}"})
                return
            headers["Content-Range"] = f"bytes {first}-{last}/{len(data)}"
            self.send_payload(206, data[first : last + 1], "audio/mpeg", headers)
            return

        self.send_payload(200, data, "audio/mpeg", headers)


# --------------------------------------------------------------------------
# Start
# --------------------------------------------------------------------------


def main() -> None:
    parser = argparse.ArgumentParser(description="SPRECHER — Text-to-Speech für lange Vortragstexte")
    parser.add_argument("--host", default="127.0.0.1", help="Adresse (Standard: 127.0.0.1)")
    parser.add_argument("--port", type=int, default=8765, help="Port (Standard: 8765)")
    parser.add_argument("--no-browser", action="store_true", help="Browser nicht automatisch öffnen")
    args = parser.parse_args()

    # Stimmenliste im Hintergrund vorwärmen, damit die Oberfläche sofort lädt.
    threading.Thread(target=VOICE_CATALOG.get, name="voice-catalog", daemon=True).start()

    server = ThreadingHTTPServer((args.host, args.port), Handler)
    url = f"http://{args.host}:{args.port}"
    print(f"\n  SPRECHER läuft auf {url}")
    print("  Beenden mit Strg+C\n")

    if not args.no_browser:
        threading.Timer(1.0, lambda: webbrowser.open(url)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  Beendet.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
