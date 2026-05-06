(function () {
    'use strict';

    // ─────────────────────────────────────────────
    // FOKUS — daily tasks & habits
    // ─────────────────────────────────────────────

    const STORAGE_KEY = 'fokus_data';
    const KANAL_KEY = 'kanal_data_v2';

    const STAGES = ['IDEE', 'SKRIPT', 'DREH', 'EDIT', 'GEPLANT', 'LIVE'];

    const REPURPOSE_ASSETS = [
        { id: 'longform', label: 'Long-Form (Do 18:00)' },
        { id: 'short_mo', label: 'Short Mo' },
        { id: 'short_mi', label: 'Short Mi' },
        { id: 'short_fr', label: 'Short Fr' },
        { id: 'linkedin', label: 'LinkedIn (Di)' },
        { id: 'newsletter', label: 'Newsletter (So)' },
        { id: 'ig_carousel', label: 'IG-Carousel' },
        { id: 'medium', label: 'Medium-Artikel' },
        { id: 'cta_check', label: 'CTA gesetzt' }
    ];

    function getDefaultPipeline() {
        return [
            { title: 'Wenn deine innere Stimme verstummt — was Stille wirklich bedeutet', pillar: 'Existenz & Sinn', stage: 'SKRIPT' },
            { title: 'Der Sinn deines Leidens — was Frankl wusste, das Selbsthilfe nicht versteht', pillar: 'Existenz & Sinn', stage: 'IDEE' },
            { title: 'Selbstreflexion, die wirklich wirkt', pillar: 'Psychologie im Alltag', stage: 'IDEE' },
            { title: '"Wer bin ich?" ist die falsche Frage', pillar: 'Existenz & Sinn', stage: 'IDEE' },
            { title: 'Disziplin ist nicht Willenskraft — was Verhaltenspsychologie wirklich weiß', pillar: 'Psychologie im Alltag', stage: 'IDEE' },
            { title: 'Vergebung ist nicht, was du denkst', pillar: 'Psychologie im Alltag', stage: 'IDEE' },
            { title: 'Wenn dein Selbst-Bild bricht — Identitätskrise und was wirklich hilft', pillar: 'Existenz & Sinn', stage: 'IDEE' },
            { title: 'Wie man wirklich gute Entscheidungen trifft', pillar: 'Psychologie im Alltag', stage: 'IDEE' }
        ];
    }

    function getDefaultKPIs() {
        return {
            yt_subs: '',
            yt_views: '',
            newsletter_subs: '',
            coaching_calls: '',
            revenue_eur: ''
        };
    }

    function getToday() {
        return new Date().toISOString().slice(0, 10);
    }

    function formatDate(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return d.toLocaleDateString('de-DE', options);
    }

    function loadFokus() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const data = JSON.parse(raw);
                if (data.date === getToday()) return data;
                return {
                    date: getToday(),
                    tasks: [
                        { text: '', done: false },
                        { text: '', done: false },
                        { text: '', done: false }
                    ],
                    habits: (data.habits || getDefaultHabits()).map(function (h) {
                        return { name: h.name, done: false };
                    })
                };
            }
        } catch (e) { /* ignore */ }
        return getDefaultFokus();
    }

    function getDefaultHabits() {
        return [
            { name: 'Training', done: false },
            { name: 'Lesen', done: false },
            { name: 'Wasser trinken', done: false },
            { name: 'Kein Social Media', done: false },
            { name: 'Früh aufstehen', done: false }
        ];
    }

    function getDefaultFokus() {
        return {
            date: getToday(),
            tasks: [
                { text: '', done: false },
                { text: '', done: false },
                { text: '', done: false }
            ],
            habits: getDefaultHabits()
        };
    }

    function saveFokus() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fokus));
    }

    function loadKanal() {
        try {
            const raw = localStorage.getItem(KANAL_KEY);
            if (raw) {
                const data = JSON.parse(raw);
                if (!data.pipeline || !data.repurpose || !data.kpis) {
                    return getDefaultKanal();
                }
                return data;
            }
        } catch (e) { /* ignore */ }
        return getDefaultKanal();
    }

    function getDefaultKanal() {
        const repurpose = {};
        REPURPOSE_ASSETS.forEach(function (a) { repurpose[a.id] = false; });
        return {
            pipeline: getDefaultPipeline(),
            repurpose: repurpose,
            kpis: getDefaultKPIs()
        };
    }

    function saveKanal() {
        localStorage.setItem(KANAL_KEY, JSON.stringify(kanal));
    }

    var fokus = loadFokus();
    var kanal = loadKanal();

    document.getElementById('date').textContent = formatDate(getToday());

    // ─────────────────────────────────────────────
    // Tabs
    // ─────────────────────────────────────────────

    document.querySelectorAll('.tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            const view = tab.dataset.view;
            document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
            document.querySelectorAll('.view').forEach(function (v) { v.classList.remove('active'); });
            tab.classList.add('active');
            document.getElementById('view-' + view).classList.add('active');
            document.getElementById('appTitle').textContent = view === 'kanal' ? 'KANAL' : 'FOKUS';
        });
    });

    // ─────────────────────────────────────────────
    // FOKUS rendering
    // ─────────────────────────────────────────────

    function renderTasks() {
        var container = document.getElementById('tasks');
        container.innerHTML = '';

        fokus.tasks.forEach(function (task, i) {
            var item = document.createElement('div');
            item.className = 'task-item';

            var num = document.createElement('span');
            num.className = 'task-number';
            num.textContent = i + 1;

            var input = document.createElement('input');
            input.type = 'text';
            input.className = 'task-input' + (task.done ? ' completed' : '');
            input.placeholder = 'Aufgabe eintragen ...';
            input.value = task.text;
            input.maxLength = 120;

            input.addEventListener('input', function () {
                fokus.tasks[i].text = this.value;
                saveFokus();
            });

            var check = document.createElement('div');
            check.className = 'task-check' + (task.done ? ' checked' : '');

            check.addEventListener('click', function () {
                if (fokus.tasks[i].text.trim() === '') return;
                fokus.tasks[i].done = !fokus.tasks[i].done;
                saveFokus();
                renderTasks();
                updateProgress();
            });

            item.appendChild(num);
            item.appendChild(input);
            item.appendChild(check);
            container.appendChild(item);
        });
    }

    function renderHabits() {
        var container = document.getElementById('habits');
        container.innerHTML = '';

        fokus.habits.forEach(function (habit, i) {
            var item = document.createElement('div');
            item.className = 'habit-item' + (habit.done ? ' completed' : '');

            var check = document.createElement('div');
            check.className = 'habit-check' + (habit.done ? ' checked' : '');

            var label = document.createElement('span');
            label.className = 'habit-label';
            label.textContent = habit.name;

            check.addEventListener('click', function (e) {
                e.stopPropagation();
                fokus.habits[i].done = !fokus.habits[i].done;
                saveFokus();
                renderHabits();
                updateProgress();
            });

            label.addEventListener('dblclick', function () {
                var input = document.createElement('input');
                input.type = 'text';
                input.className = 'habit-edit-input';
                input.value = habit.name;
                input.maxLength = 60;

                input.addEventListener('blur', function () {
                    var val = this.value.trim();
                    if (val) {
                        fokus.habits[i].name = val;
                        saveFokus();
                    }
                    renderHabits();
                });

                input.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter') this.blur();
                    if (e.key === 'Escape') {
                        this.value = habit.name;
                        this.blur();
                    }
                });

                label.replaceWith(input);
                input.focus();
                input.select();
            });

            item.appendChild(check);
            item.appendChild(label);
            container.appendChild(item);
        });
    }

    function updateProgress() {
        var tasksDone = fokus.tasks.filter(function (t) { return t.done; }).length;
        var habitsDone = fokus.habits.filter(function (h) { return h.done; }).length;
        var total = tasksDone + habitsDone;
        var max = 8;
        var pct = Math.round((total / max) * 100);
        document.getElementById('progressBar').style.width = pct + '%';
        document.getElementById('progressText').textContent = total + ' / ' + max + ' erledigt';
    }

    // ─────────────────────────────────────────────
    // KANAL rendering
    // ─────────────────────────────────────────────

    function getCurrentVideo() {
        // Pick the first non-LIVE pipeline item as the "current" focus
        for (var i = 0; i < kanal.pipeline.length; i++) {
            if (kanal.pipeline[i].stage !== 'LIVE') return { idx: i, video: kanal.pipeline[i] };
        }
        return null;
    }

    function renderCurrentVideo() {
        var container = document.getElementById('currentVideo');
        container.innerHTML = '';

        var current = getCurrentVideo();
        if (!current) {
            container.innerHTML = '<p class="vid-pillar">Pipeline leer &mdash; neue Themen einplanen</p>';
            return;
        }

        var title = document.createElement('div');
        title.className = 'vid-title';
        title.textContent = current.video.title;

        var pillar = document.createElement('div');
        pillar.className = 'vid-pillar';
        pillar.textContent = current.video.pillar;

        var stages = document.createElement('div');
        stages.className = 'vid-stages';

        STAGES.forEach(function (stage) {
            var btn = document.createElement('button');
            btn.className = 'stage-pill' + (stage === current.video.stage ? ' active' : '');
            btn.textContent = stage;
            btn.addEventListener('click', function () {
                kanal.pipeline[current.idx].stage = stage;
                if (stage === 'LIVE') {
                    // Reset repurpose for next video focus
                    Object.keys(kanal.repurpose).forEach(function (k) { kanal.repurpose[k] = false; });
                }
                saveKanal();
                renderKanal();
            });
            stages.appendChild(btn);
        });

        container.appendChild(title);
        container.appendChild(pillar);
        container.appendChild(stages);
    }

    function renderRepurpose() {
        var container = document.getElementById('repurpose');
        container.innerHTML = '';

        REPURPOSE_ASSETS.forEach(function (asset) {
            var done = !!kanal.repurpose[asset.id];
            var item = document.createElement('div');
            item.className = 'repurpose-item' + (done ? ' done' : '');

            var check = document.createElement('div');
            check.className = 'repurpose-check' + (done ? ' checked' : '');

            var label = document.createElement('span');
            label.className = 'repurpose-label';
            label.textContent = asset.label;

            item.addEventListener('click', function () {
                kanal.repurpose[asset.id] = !kanal.repurpose[asset.id];
                saveKanal();
                renderRepurpose();
            });

            item.appendChild(check);
            item.appendChild(label);
            container.appendChild(item);
        });
    }

    function renderPipeline() {
        var container = document.getElementById('pipeline');
        container.innerHTML = '';

        kanal.pipeline.forEach(function (vid, i) {
            var item = document.createElement('div');
            item.className = 'pipeline-item';

            var title = document.createElement('div');
            title.className = 'pipeline-title';
            title.textContent = (i + 1) + '. ' + vid.title;

            var stageBtn = document.createElement('button');
            stageBtn.className = 'pipeline-stage' + (vid.stage === 'LIVE' ? ' live' : '');
            stageBtn.textContent = vid.stage;
            stageBtn.title = 'Klick: nächste Stage';
            stageBtn.addEventListener('click', function () {
                var idx = STAGES.indexOf(vid.stage);
                kanal.pipeline[i].stage = STAGES[(idx + 1) % STAGES.length];
                saveKanal();
                renderKanal();
            });

            item.appendChild(title);
            item.appendChild(stageBtn);
            container.appendChild(item);
        });
    }

    var KPI_DEF = [
        { id: 'yt_subs', label: 'YT Subs', suffix: '' },
        { id: 'yt_views', label: 'Views (28d)', suffix: '' },
        { id: 'newsletter_subs', label: 'Newsletter', suffix: '' },
        { id: 'coaching_calls', label: 'Coaching-Calls', suffix: '' },
        { id: 'revenue_eur', label: 'Umsatz', suffix: '€' }
    ];

    function renderKPIs() {
        var container = document.getElementById('kpis');
        container.innerHTML = '';

        KPI_DEF.forEach(function (kpi) {
            var cell = document.createElement('div');
            cell.className = 'kpi-cell';

            var label = document.createElement('div');
            label.className = 'kpi-label';
            label.textContent = kpi.label;

            var inputWrap = document.createElement('div');
            var input = document.createElement('input');
            input.type = 'text';
            input.inputMode = 'numeric';
            input.className = 'kpi-input';
            input.placeholder = '—';
            input.value = kanal.kpis[kpi.id] || '';
            input.addEventListener('input', function () {
                kanal.kpis[kpi.id] = this.value;
                saveKanal();
                renderNorthstar();
            });
            inputWrap.appendChild(input);

            if (kpi.suffix) {
                var suf = document.createElement('span');
                suf.className = 'kpi-suffix';
                suf.textContent = kpi.suffix;
                inputWrap.appendChild(suf);
            }

            cell.appendChild(label);
            cell.appendChild(inputWrap);
            container.appendChild(cell);
        });
    }

    function renderNorthstar() {
        var target = 10000;
        var raw = (kanal.kpis.revenue_eur || '').toString().replace(/[^\d]/g, '');
        var current = parseInt(raw, 10) || 0;
        var pct = Math.min(100, Math.round((current / target) * 100));

        var container = document.getElementById('northstar');
        container.innerHTML =
            '<div class="northstar-amount">' + current.toLocaleString('de-DE') + ' €</div>' +
            '<div class="northstar-target">von 10.000 € / Monat</div>' +
            '<div class="northstar-bar"><div class="northstar-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="northstar-pct">' + pct + ' %</div>';
    }

    function renderKanal() {
        renderCurrentVideo();
        renderRepurpose();
        renderPipeline();
        renderKPIs();
        renderNorthstar();
    }

    // ─────────────────────────────────────────────
    // Init
    // ─────────────────────────────────────────────

    renderTasks();
    renderHabits();
    updateProgress();
    renderKanal();
})();
