(function () {
    'use strict';

    const STORAGE_KEY = 'fokus_data';

    function getToday() {
        return new Date().toISOString().slice(0, 10);
    }

    function formatDate(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return d.toLocaleDateString('de-DE', options);
    }

    function loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const data = JSON.parse(raw);
                if (data.date === getToday()) {
                    return data;
                }
                // New day — keep habit names but reset checks and tasks
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
        } catch (e) {
            // ignore
        }
        return getDefaultData();
    }

    function getDefaultHabits() {
        return [
            { name: 'Training', done: false },
            { name: 'Lesen', done: false },
            { name: 'Wasser trinken', done: false },
            { name: 'Kein Social Media', done: false },
            { name: 'Fruh aufstehen', done: false }
        ];
    }

    function getDefaultData() {
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

    function saveData(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    var data = loadData();

    // Date
    document.getElementById('date').textContent = formatDate(getToday());

    // Tasks
    function renderTasks() {
        var container = document.getElementById('tasks');
        container.innerHTML = '';

        data.tasks.forEach(function (task, i) {
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
                data.tasks[i].text = this.value;
                saveData(data);
            });

            var check = document.createElement('div');
            check.className = 'task-check' + (task.done ? ' checked' : '');

            check.addEventListener('click', function () {
                if (data.tasks[i].text.trim() === '') return;
                data.tasks[i].done = !data.tasks[i].done;
                saveData(data);
                renderTasks();
                updateProgress();
            });

            item.appendChild(num);
            item.appendChild(input);
            item.appendChild(check);
            container.appendChild(item);
        });
    }

    // Habits
    function renderHabits() {
        var container = document.getElementById('habits');
        container.innerHTML = '';

        data.habits.forEach(function (habit, i) {
            var item = document.createElement('div');
            item.className = 'habit-item' + (habit.done ? ' completed' : '');

            var check = document.createElement('div');
            check.className = 'habit-check' + (habit.done ? ' checked' : '');

            var label = document.createElement('span');
            label.className = 'habit-label';
            label.textContent = habit.name;

            // Click on checkbox to toggle
            check.addEventListener('click', function (e) {
                e.stopPropagation();
                data.habits[i].done = !data.habits[i].done;
                saveData(data);
                renderHabits();
                updateProgress();
            });

            // Double click on label to edit
            label.addEventListener('dblclick', function () {
                var input = document.createElement('input');
                input.type = 'text';
                input.className = 'habit-edit-input';
                input.value = habit.name;
                input.maxLength = 60;

                input.addEventListener('blur', function () {
                    var val = this.value.trim();
                    if (val) {
                        data.habits[i].name = val;
                        saveData(data);
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

    // Progress
    function updateProgress() {
        var tasksDone = data.tasks.filter(function (t) { return t.done; }).length;
        var habitsDone = data.habits.filter(function (h) { return h.done; }).length;
        var total = tasksDone + habitsDone;
        var max = 8;
        var pct = Math.round((total / max) * 100);

        document.getElementById('progressBar').style.width = pct + '%';
        document.getElementById('progressText').textContent = total + ' / ' + max + ' erledigt';
    }

    renderTasks();
    renderHabits();
    updateProgress();
})();
