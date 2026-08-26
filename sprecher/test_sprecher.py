"""Testet die Audio-Pipeline von SPRECHER gegen einen simulierten Sprachdienst.

Läuft ohne Internetverbindung — der Aufruf von edge-tts wird ersetzt.
Start:  python3 test_sprecher.py
"""
import asyncio
import json
import sys
import threading
import time
import urllib.request
from pathlib import Path
from http.server import ThreadingHTTPServer

sys.path.insert(0, str(Path(__file__).resolve().parent))
import server as s

# Ein echter MPEG-2 Layer III Frame: 24 kHz, 48 kbit/s, mono -> 144 Byte / 24 ms
FRAME = b"\xff\xf3\x64\xc4" + b"\x00" * 140

CALLS = []


async def fake_synth(text, voice, rate, pitch, attempts=3):
    CALLS.append((len(text), voice, rate, pitch))
    await asyncio.sleep(0.05)   # Netzlatenz simulieren
    # Dauer proportional zur Textlänge: 15 Zeichen pro Sekunde
    frames = max(1, round(len(text) / 15 / 0.024))
    return FRAME * frames


s.synth_chunk = fake_synth

PORT = 8793
srv = ThreadingHTTPServer(("127.0.0.1", PORT), s.Handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f"http://127.0.0.1:{PORT}"
opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))


def post(path, payload):
    req = urllib.request.Request(
        BASE + path,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
    )
    return json.load(opener.open(req))


def wait(job_id, timeout=60):
    deadline = time.time() + timeout
    while time.time() < deadline:
        status = json.load(opener.open(f"{BASE}/api/job/{job_id}"))
        if status["state"] in ("fertig", "fehler", "abgebrochen"):
            return status
        time.sleep(0.2)
    raise TimeoutError


ok = True


def check(label, condition, detail=""):
    global ok
    ok = ok and condition
    print(f"  {'OK ' if condition else 'FEHLER'}  {label}{'  ' + detail if detail else ''}")


# --- 1. Normaler Durchlauf ------------------------------------------------
absatz = (
    "Die Digitalisierung verändert die Soziale Arbeit grundlegend. "
    "Bereits 2019 zeigte eine Studie von Müller u. a., dass ca. 60 Prozent "
    "der Fachkräfte digitale Werkzeuge im Alltag einsetzen. "
) * 6
text = "\n\n".join([absatz] * 12)
print(f"\nTest 1 — Text mit {len(text):,} Zeichen")

job = post("/api/synthesize", {"text": text, "voice": "de-DE-ConradNeural", "speed": 1.15, "pitch": -3})
status = wait(job["id"])
check("Job abgeschlossen", status["state"] == "fertig", status.get("error") or "")
check("Alle Abschnitte gerendert", status["done"] == status["total"], f"{status['done']}/{status['total']}")
check("Tempo korrekt weitergereicht", all(c[2] == "+15%" for c in CALLS), CALLS[0][2])
check("Tonhöhe korrekt weitergereicht", all(c[3] == "-3Hz" for c in CALLS), CALLS[0][3])
check("Nicht abgeschnitten", status["truncated"] is False)
check("Dauer plausibel", 100 < status["seconds"] < 900, f"{status['seconds']} s")

audio = opener.open(f"{BASE}/api/audio/{job['id']}").read()
check("Audiogröße = Jobgröße", len(audio) == status["bytes"], f"{len(audio)} Byte")
check("Beginnt mit MP3-Frame", audio[:2] == b"\xff\xf3")
check("Länge ist Frame-Vielfaches", len(audio) % 144 == 0)
check("Dauer aus Bytes = gemeldete Dauer",
      abs(len(audio) / 6000 - status["seconds"]) < 0.1)

# --- 2. Range-Anfrage (Springen im Player) --------------------------------
req = urllib.request.Request(f"{BASE}/api/audio/{job['id']}", headers={"Range": "bytes=1000-1999"})
resp = opener.open(req)
part = resp.read()
check("Range liefert 206", resp.status == 206)
check("Range liefert 1000 Byte", len(part) == 1000)
check("Range-Header korrekt",
      resp.headers["Content-Range"] == f"bytes 1000-1999/{len(audio)}")
check("Accept-Ranges gesetzt", resp.headers["Accept-Ranges"] == "bytes")

# --- 3. Download-Header ----------------------------------------------------
resp = opener.open(f"{BASE}/api/audio/{job['id']}?download=1&name=Sprechertext%20Conrad.mp3")
check("Content-Disposition attachment",
      "attachment" in resp.headers.get("Content-Disposition", ""),
      resp.headers.get("Content-Disposition", ""))
check("Content-Type audio/mpeg", resp.headers["Content-Type"] == "audio/mpeg")

# --- 4. 30-Minuten-Kappung -------------------------------------------------
print("\nTest 2 — Kappung bei 30 Minuten")
s.CHARS_PER_SECOND = 100.0  # Schätzung austricksen, damit der Job startet
lang = "\n\n".join([absatz] * 90)  # ~ 60 Minuten simuliertes Audio
job2 = post("/api/synthesize", {"text": lang, "voice": "de-DE-ConradNeural", "speed": 1.0})
status2 = wait(job2["id"], timeout=120)
check("Job abgeschlossen", status2["state"] == "fertig", status2.get("error") or "")
check("Als gekürzt markiert", status2["truncated"] is True)
check("Exakt 30:00 Minuten", abs(status2["seconds"] - 1800) < 0.05, f"{status2['seconds']} s")
check("Kein angeschnittener Frame", status2["bytes"] % 144 == 0)
check("Vorzeitig gestoppt", status2["done"] < status2["total"], f"{status2['done']}/{status2['total']}")

# --- 5. Abbruch -------------------------------------------------------------
print("\nTest 3 — Abbruch")
job3 = post("/api/synthesize", {"text": lang, "voice": "de-AT-JonasNeural", "speed": 1.0})
time.sleep(0.25)
post(f"/api/cancel/{job3['id']}", {})
status3 = wait(job3["id"], timeout=60)
s.CHARS_PER_SECOND = 15.0
check("Als abgebrochen gemeldet", status3["state"] == "abgebrochen", status3["state"])

# --- 6. Hörprobe ------------------------------------------------------------
print("\nTest 4 — Hörprobe")
req = urllib.request.Request(
    BASE + "/api/preview",
    data=json.dumps({"voice": "en-US-AndrewMultilingualNeural", "speed": 0.9, "pitch": 5}).encode(),
    headers={"Content-Type": "application/json"},
)
resp = opener.open(req)
sample = resp.read()
check("Hörprobe liefert MP3", resp.headers["Content-Type"] == "audio/mpeg" and len(sample) > 0,
      f"{len(sample)} Byte")
check("Hörprobe nutzt gewählte Stimme", CALLS[-1][1] == "en-US-AndrewMultilingualNeural")
check("Hörprobe nutzt Tempo/Tonhöhe", CALLS[-1][2] == "-10%" and CALLS[-1][3] == "+5Hz",
      f"{CALLS[-1][2]} / {CALLS[-1][3]}")

srv.shutdown()
print("\n" + ("ALLE TESTS BESTANDEN" if ok else "TESTS FEHLGESCHLAGEN"))
sys.exit(0 if ok else 1)
