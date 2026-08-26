/* ------------------------------------------------------------------ */
/* SPRECHER — Oberflächenlogik                                         */
/* ------------------------------------------------------------------ */

(function () {
    'use strict';

    const SETTINGS_KEY = 'sprecher_settings';

    const el = (id) => document.getElementById(id);

    const ui = {
        text: el('text'),
        clearBtn: el('clearBtn'),
        meterFill: el('meterFill'),
        statsLine: el('statsLine'),
        lengthLine: el('lengthLine'),
        lengthHint: el('lengthHint'),
        voiceList: el('voiceList'),
        voiceBadge: el('voiceBadge'),
        voiceHint: el('voiceHint'),
        speed: el('speed'),
        speedOut: el('speedOut'),
        speedPresets: el('speedPresets'),
        pitch: el('pitch'),
        pitchOut: el('pitchOut'),
        generateBtn: el('generateBtn'),
        actionHint: el('actionHint'),
        progressPanel: el('progressPanel'),
        progressTitle: el('progressTitle'),
        progressFill: el('progressFill'),
        progressText: el('progressText'),
        cancelBtn: el('cancelBtn'),
        resultPanel: el('resultPanel'),
        resultBadge: el('resultBadge'),
        resultHint: el('resultHint'),
        downloadBtn: el('downloadBtn'),
        againBtn: el('againBtn'),
        playBtn: el('playBtn'),
        seek: el('seek'),
        seekFill: el('seekFill'),
        seekKnob: el('seekKnob'),
        timeCurrent: el('timeCurrent'),
        timeTotal: el('timeTotal'),
        toast: el('toast'),
        audio: el('audio'),
        previewAudio: el('previewAudio')
    };

    const config = {
        voices: [],
        maxMinutes: 30,
        charsPerSecond: 15,
        hardCharLimit: 120000
    };

    let selectedVoice = null;
    let activeJob = null;
    let pollTimer = null;
    let previewToken = 0;

    /* --- Hilfsfunktionen -------------------------------------------- */

    function formatTime(seconds) {
        if (!isFinite(seconds) || seconds < 0) seconds = 0;
        const total = Math.round(seconds);
        const m = Math.floor(total / 60);
        const s = total % 60;
        return `${m}:${String(s).padStart(2, '0')}`;
    }

    function formatDuration(seconds) {
        if (seconds < 60) return `${Math.round(seconds)} Sekunden`;
        return `${formatTime(seconds)} Minuten`;
    }

    function formatNumber(value) {
        return value.toLocaleString('de-DE');
    }

    let toastTimer = null;
    function toast(message, isError) {
        ui.toast.textContent = message;
        ui.toast.classList.toggle('error', Boolean(isError));
        ui.toast.hidden = false;
        requestAnimationFrame(() => ui.toast.classList.add('show'));
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            ui.toast.classList.remove('show');
            setTimeout(() => { ui.toast.hidden = true; }, 250);
        }, isError ? 7000 : 3500);
    }

    async function api(path, options) {
        const response = await fetch(path, options);
        const type = response.headers.get('Content-Type') || '';
        if (type.includes('application/json')) {
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Unbekannter Fehler');
            return data;
        }
        if (!response.ok) throw new Error(`Serverfehler ${response.status}`);
        return response;
    }

    /* --- Einstellungen ---------------------------------------------- */

    function loadSettings() {
        try {
            return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
        } catch (error) {
            return {};
        }
    }

    function saveSettings() {
        try {
            localStorage.setItem(SETTINGS_KEY, JSON.stringify({
                voice: selectedVoice ? selectedVoice.id : null,
                speed: ui.speed.value,
                pitch: ui.pitch.value,
                text: ui.text.value.slice(0, config.hardCharLimit)
            }));
        } catch (error) {
            /* Speicher voll oder gesperrt — nicht kritisch. */
        }
    }

    /* --- Stimmen ------------------------------------------------------ */

    function renderVoices() {
        ui.voiceList.innerHTML = '';
        config.voices.forEach((voice) => {
            const row = document.createElement('div');
            row.className = 'voice';
            row.dataset.id = voice.id;
            row.setAttribute('role', 'radio');
            row.tabIndex = 0;

            row.innerHTML = `
                <span class="voice-dot"></span>
                <span class="voice-info">
                    <span class="voice-title">
                        <span class="voice-name"></span>
                        <span class="voice-region"></span>
                    </span>
                    <span class="voice-desc"></span>
                </span>
                <button type="button" class="preview-btn" title="Stimme anhören">▶</button>
            `;
            row.querySelector('.voice-name').textContent = voice.name;
            row.querySelector('.voice-region').textContent = voice.region;
            row.querySelector('.voice-desc').textContent = voice.description;

            row.addEventListener('click', (event) => {
                if (event.target.closest('.preview-btn')) return;
                selectVoice(voice.id);
            });
            row.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectVoice(voice.id);
                }
            });
            row.querySelector('.preview-btn').addEventListener('click', (event) => {
                event.stopPropagation();
                playPreview(voice, event.currentTarget);
            });

            ui.voiceList.appendChild(row);
        });
    }

    function selectVoice(id) {
        selectedVoice = config.voices.find((voice) => voice.id === id) || config.voices[0];
        [...ui.voiceList.querySelectorAll('.voice')].forEach((row) => {
            const active = row.dataset.id === selectedVoice.id;
            row.classList.toggle('selected', active);
            row.setAttribute('aria-checked', String(active));
        });
        saveSettings();
    }

    async function playPreview(voice, button) {
        const token = ++previewToken;
        const buttons = [...document.querySelectorAll('.preview-btn')];
        buttons.forEach((item) => { item.disabled = true; });
        button.classList.add('busy');
        ui.previewAudio.pause();

        try {
            const response = await fetch('/api/preview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    voice: voice.id,
                    speed: Number(ui.speed.value),
                    pitch: Number(ui.pitch.value)
                })
            });
            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || `Serverfehler ${response.status}`);
            }
            const blob = await response.blob();
            if (token !== previewToken) return;
            ui.previewAudio.src = URL.createObjectURL(blob);
            await ui.previewAudio.play();
            selectVoice(voice.id);
        } catch (error) {
            toast(`Hörprobe fehlgeschlagen: ${error.message}`, true);
        } finally {
            if (token === previewToken) {
                buttons.forEach((item) => { item.disabled = false; });
            }
            button.classList.remove('busy');
        }
    }

    /* --- Textmaße ------------------------------------------------------ */

    function estimateSeconds() {
        const chars = ui.text.value.trim().length;
        const speed = Number(ui.speed.value) || 1;
        return chars / (config.charsPerSecond * speed);
    }

    function updateStats() {
        const value = ui.text.value;
        const chars = value.trim().length;
        const words = value.trim() ? value.trim().split(/\s+/).length : 0;
        const seconds = estimateSeconds();
        const limit = config.maxMinutes * 60;
        const ratio = Math.min(1, seconds / limit);

        ui.statsLine.textContent =
            `${formatNumber(chars)} Zeichen · ${formatNumber(words)} Wörter`;
        ui.lengthLine.textContent =
            `≈ ${formatTime(seconds)} von ${config.maxMinutes}:00 Min`;

        ui.meterFill.style.width = `${ratio * 100}%`;
        ui.meterFill.classList.toggle('warn', seconds > limit * 0.85 && seconds <= limit);
        ui.meterFill.classList.toggle('over', seconds > limit);

        ui.lengthLine.className =
            seconds > limit ? 'length-over'
                : seconds > limit * 0.85 ? 'length-warn'
                    : 'length-ok';

        const tooLong = seconds > limit;
        ui.generateBtn.disabled = chars === 0 || tooLong || Boolean(activeJob);

        if (tooLong) {
            const over = seconds - limit;
            ui.lengthHint.textContent =
                `Der Text liegt etwa ${formatDuration(over)} über dem Limit. `
                + 'Bitte kürzen oder das Tempo erhöhen.';
            ui.lengthHint.style.color = 'var(--danger)';
        } else {
            ui.lengthHint.textContent =
                'Die Längenangabe ist eine Schätzung und ändert sich mit dem Tempo.';
            ui.lengthHint.style.color = '';
        }
    }

    /* --- Regler --------------------------------------------------------- */

    function updateSpeedLabel() {
        const speed = Number(ui.speed.value);
        ui.speedOut.textContent = `${speed.toFixed(2).replace('.', ',')}×`;
        [...ui.speedPresets.querySelectorAll('button')].forEach((button) => {
            button.classList.toggle(
                'active',
                Math.abs(Number(button.dataset.speed) - speed) < 0.001
            );
        });
    }

    function updatePitchLabel() {
        const pitch = Number(ui.pitch.value);
        ui.pitchOut.textContent = pitch === 0 ? 'Standard' : `${pitch > 0 ? '+' : ''}${pitch} Hz`;
    }

    /* --- Erzeugung ------------------------------------------------------ */

    function setBusy(busy) {
        ui.generateBtn.disabled = busy;
        ui.generateBtn.textContent = busy ? 'Wird erzeugt …' : 'Audio erzeugen';
        if (!busy) updateStats();
    }

    async function generate() {
        if (activeJob) return;
        if (!selectedVoice) {
            toast('Es ist noch keine Stimme geladen.', true);
            return;
        }

        ui.resultPanel.hidden = true;
        ui.audio.pause();
        ui.progressPanel.hidden = false;
        ui.progressTitle.textContent = 'Audio wird erzeugt';
        ui.progressFill.classList.remove('failed');
        ui.progressFill.style.width = '2%';
        ui.progressText.classList.remove('error');
        ui.progressText.textContent = 'Text wird in Abschnitte zerlegt …';
        ui.cancelBtn.hidden = false;
        setBusy(true);

        try {
            const job = await api('/api/synthesize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: ui.text.value,
                    voice: selectedVoice.id,
                    speed: Number(ui.speed.value),
                    pitch: Number(ui.pitch.value)
                })
            });
            activeJob = job.id;
            ui.progressText.textContent = `Abschnitt 0 von ${job.chunks}`;
            poll();
        } catch (error) {
            failProgress(error.message);
        }
    }

    function poll() {
        clearTimeout(pollTimer);
        pollTimer = setTimeout(async () => {
            if (!activeJob) return;
            try {
                const status = await api(`/api/job/${activeJob}`);
                applyStatus(status);
            } catch (error) {
                failProgress(error.message);
            }
        }, 700);
    }

    function applyStatus(status) {
        if (status.state === 'fehler') {
            failProgress(status.error || 'Die Synthese ist fehlgeschlagen.');
            return;
        }
        if (status.state === 'abgebrochen') {
            activeJob = null;
            setBusy(false);
            ui.progressPanel.hidden = true;
            toast('Erzeugung abgebrochen.');
            return;
        }

        const ratio = status.total ? status.done / status.total : 0;
        ui.progressFill.style.width = `${Math.max(2, ratio * 100)}%`;
        ui.progressText.textContent =
            `Abschnitt ${status.done} von ${status.total}`
            + ` · ${formatDuration(status.seconds)} erzeugt`;

        if (status.state === 'fertig') {
            finishJob(status);
            return;
        }
        poll();
    }

    function finishJob(status) {
        const jobId = activeJob;
        activeJob = null;
        setBusy(false);
        ui.progressPanel.hidden = true;

        const stamp = new Date().toISOString().slice(0, 16).replace('T', '_').replace(':', '-');
        const filename = `Sprechertext_${status.voice.name}_${stamp}.mp3`;

        ui.audio.src = `/api/audio/${jobId}`;
        ui.downloadBtn.href =
            `/api/audio/${jobId}?download=1&name=${encodeURIComponent(filename)}`;
        ui.downloadBtn.setAttribute('download', filename);

        ui.resultBadge.textContent =
            `${formatTime(status.seconds)} Min · ${status.voice.name}`;
        ui.timeTotal.textContent = formatTime(status.seconds);
        ui.timeCurrent.textContent = '0:00';
        ui.seekFill.style.width = '0%';
        ui.seekKnob.style.left = '0%';

        const size = (status.bytes / (1024 * 1024)).toFixed(1).replace('.', ',');
        ui.resultHint.textContent = status.truncated
            ? `Die Aufnahme wurde bei ${config.maxMinutes}:00 Minuten abgeschnitten `
              + `— der Text war länger als das Limit. Dateigröße ${size} MB.`
            : `MP3, ${size} MB, erzeugt in ${formatDuration(status.elapsed)}.`;

        ui.resultPanel.hidden = false;
        ui.resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        toast('Audio ist fertig.');
    }

    function failProgress(message) {
        activeJob = null;
        clearTimeout(pollTimer);
        setBusy(false);
        ui.progressPanel.hidden = false;
        ui.progressTitle.textContent = 'Fehlgeschlagen';
        ui.progressFill.style.width = '100%';
        ui.progressFill.classList.add('failed');
        ui.progressText.classList.add('error');
        ui.progressText.textContent = message;
        ui.cancelBtn.hidden = true;
        toast(message, true);
    }

    async function cancelJob() {
        if (!activeJob) return;
        const id = activeJob;
        try {
            await api(`/api/cancel/${id}`, { method: 'POST' });
        } catch (error) {
            /* Läuft ohnehin aus. */
        }
    }

    /* --- Player ---------------------------------------------------------- */

    function setPlayIcon(playing) {
        ui.playBtn.innerHTML = playing
            ? '<span class="icon-pause"></span>'
            : '<span class="icon-play"></span>';
        ui.playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Abspielen');
    }

    function playerDuration() {
        // Bei zusammengesetzten MP3-Dateien meldet der Browser die Dauer erst
        // nach dem vollständigen Laden zuverlässig — bis dahin gilt die
        // servergemessene Länge aus dem Ergebnis-Badge.
        const native = ui.audio.duration;
        if (isFinite(native) && native > 0) return native;
        const parsed = ui.timeTotal.textContent.split(':');
        return Number(parsed[0]) * 60 + Number(parsed[1] || 0);
    }

    function seekToClientX(clientX) {
        const rect = ui.seek.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
        const duration = playerDuration();
        if (duration > 0) ui.audio.currentTime = ratio * duration;
    }

    function bindPlayer() {
        setPlayIcon(false);

        ui.playBtn.addEventListener('click', () => {
            if (ui.audio.paused) ui.audio.play().catch(() => {});
            else ui.audio.pause();
        });
        ui.audio.addEventListener('play', () => setPlayIcon(true));
        ui.audio.addEventListener('pause', () => setPlayIcon(false));
        ui.audio.addEventListener('ended', () => setPlayIcon(false));

        ui.audio.addEventListener('timeupdate', () => {
            const duration = playerDuration();
            const ratio = duration > 0 ? Math.min(1, ui.audio.currentTime / duration) : 0;
            ui.seekFill.style.width = `${ratio * 100}%`;
            ui.seekKnob.style.left = `${ratio * 100}%`;
            ui.timeCurrent.textContent = formatTime(ui.audio.currentTime);
        });
        ui.audio.addEventListener('loadedmetadata', () => {
            if (isFinite(ui.audio.duration) && ui.audio.duration > 0) {
                ui.timeTotal.textContent = formatTime(ui.audio.duration);
            }
        });

        let dragging = false;
        ui.seek.addEventListener('pointerdown', (event) => {
            dragging = true;
            ui.seek.setPointerCapture(event.pointerId);
            seekToClientX(event.clientX);
        });
        ui.seek.addEventListener('pointermove', (event) => {
            if (dragging) seekToClientX(event.clientX);
        });
        ui.seek.addEventListener('pointerup', (event) => {
            dragging = false;
            ui.seek.releasePointerCapture(event.pointerId);
        });
    }

    /* --- Start ------------------------------------------------------------ */

    async function init() {
        bindPlayer();

        const settings = loadSettings();
        if (settings.text) ui.text.value = settings.text;
        if (settings.speed) ui.speed.value = settings.speed;
        if (settings.pitch) ui.pitch.value = settings.pitch;
        updateSpeedLabel();
        updatePitchLabel();
        updateStats();

        ui.text.addEventListener('input', () => { updateStats(); saveSettings(); });
        ui.clearBtn.addEventListener('click', () => {
            ui.text.value = '';
            updateStats();
            saveSettings();
            ui.text.focus();
        });

        ui.speed.addEventListener('input', () => {
            updateSpeedLabel();
            updateStats();
            saveSettings();
        });
        ui.pitch.addEventListener('input', () => {
            updatePitchLabel();
            saveSettings();
        });
        ui.speedPresets.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (!button) return;
            ui.speed.value = button.dataset.speed;
            updateSpeedLabel();
            updateStats();
            saveSettings();
        });

        ui.generateBtn.addEventListener('click', generate);
        ui.cancelBtn.addEventListener('click', cancelJob);
        ui.againBtn.addEventListener('click', () => {
            ui.audio.pause();
            ui.resultPanel.hidden = true;
            ui.text.focus();
        });

        try {
            const data = await api('/api/voices');
            Object.assign(config, data);
            renderVoices();
            selectVoice(settings.voice || config.voices[0].id);
            ui.voiceBadge.textContent = `${config.voices.length} Stimmen`;
            ui.voiceHint.textContent = data.verified
                ? 'Alle Stimmen sind männlich. Über ▶ lässt sich jede Stimme kurz anhören.'
                : 'Stimmenliste konnte nicht geprüft werden — es wird die Standardauswahl '
                  + 'verwendet. Ohne Internetverbindung ist keine Synthese möglich.';
            updateStats();
        } catch (error) {
            ui.voiceList.innerHTML =
                '<p class="loading">Stimmen konnten nicht geladen werden.</p>';
            toast(`Stimmen konnten nicht geladen werden: ${error.message}`, true);
        }
    }

    document.addEventListener('DOMContentLoaded', init);
})();
