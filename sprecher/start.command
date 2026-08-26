#!/usr/bin/env bash
#
# SPRECHER starten.
#
# Auf dem Mac lässt sich diese Datei im Finder doppelklicken; im Terminal
# funktioniert sie genauso:  ./start.command
#
# Beim ersten Start wird eine eigene Python-Umgebung im Ordner .venv angelegt
# und edge-tts hineininstalliert. Das System-Python bleibt unangetastet.

set -eo pipefail
cd "$(dirname "$0")"

if ! command -v python3 >/dev/null 2>&1; then
    echo
    echo "  Python 3 wurde nicht gefunden."
    echo "  Bitte einmalig installieren: https://www.python.org/downloads/"
    echo
    exit 1
fi

if [ ! -d .venv ]; then
    echo
    echo "  Erster Start — die Umgebung wird eingerichtet (dauert kurz) …"
    python3 -m venv .venv
fi

# shellcheck source=/dev/null
source .venv/bin/activate

if ! python3 -c "import edge_tts" >/dev/null 2>&1; then
    echo "  Installiere die benötigten Pakete …"
    python3 -m pip install --quiet --upgrade pip
    python3 -m pip install --quiet -r requirements.txt
fi

exec python3 server.py "$@"
