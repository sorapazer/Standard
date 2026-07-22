/* ============================================================
   Praxis Pazer — app logic
   Routing · date-aware pricing · booking · blog · videos
   ============================================================ */

/* ---------- PRICING (single source of truth) ----------
   Aktionspreis 30 € pro Sitzung bis 31.08.2026.
   Ab 01.09.2026 reguläre Preise: Erstgespräch 60 €, Folgesitzung 120 €.
   Ändern Sie nur diese Werte, alles andere passt sich automatisch an.       */
const PRICING = {
    promoEnd: new Date('2026-08-31T23:59:59'),
    promo: {
        erst:   { price: 30, label: 'Erstgespräch (probatorisch)' },
        folge:  { price: 30, label: 'Folgesitzung' }
    },
    regular: {
        erst:   { price: 60,  label: 'Erstgespräch (probatorisch)' },
        folge:  { price: 120, label: 'Folgesitzung' }
    }
};

function isPromoActive(d = new Date()) { return d <= PRICING.promoEnd; }
function currentPrices() { return isPromoActive() ? PRICING.promo : PRICING.regular; }
function fmtDate(d) { return d.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }); }

/* ---------- ROUTING ---------- */
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-links a');

function go(route) {
    views.forEach(v => v.classList.toggle('active', v.dataset.view === route));
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.route === route));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.hash !== '#' + route) history.replaceState(null, '', '#' + route);
    document.getElementById('navLinks').classList.remove('open');
}

document.addEventListener('click', e => {
    const link = e.target.closest('[data-route]');
    if (link) { e.preventDefault(); go(link.dataset.route); }
});

/* Mobile menu */
document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

/* ---------- HERO PROMO BANNER ---------- */
function renderHeroPromo() {
    const el = document.getElementById('heroPromo');
    const p = currentPrices();
    if (isPromoActive()) {
        el.innerHTML = `
            <div class="promo-label">Einführungsangebot · bis ${fmtDate(PRICING.promoEnd)}</div>
            <div class="promo-price">30 € pro Sitzung
                <s>statt ${PRICING.regular.folge.price} €</s></div>
            <div class="promo-sub">Für alle neuen Sitzungen bis Ende August. Danach reguläre Preise
                (Erstgespräch ${PRICING.regular.erst.price} €, Folgesitzung ${PRICING.regular.folge.price} €).</div>`;
    } else {
        el.innerHTML = `
            <div class="promo-label">Aktuelle Preise</div>
            <div class="promo-price">${p.folge.price} € pro Sitzung</div>
            <div class="promo-sub">Erstgespräch (probatorisch) ${p.erst.price} €.</div>`;
    }
}

/* ---------- THEMEN DATA ---------- */
const THEMEN = [
    { i: '🌧️', t: 'Depression', d: 'Antriebslosigkeit, Grübeln, innere Leere — wir finden gemeinsam wieder Halt und kleine Schritte nach vorn.' },
    { i: '🔥', t: 'Burnout & Erschöpfung', d: 'Wenn nichts mehr geht: Grenzen erkennen, Kräfte einteilen und den Weg zurück in ein tragfähiges Leben gehen.' },
    { i: '🫧', t: 'Ängste & Sorgen', d: 'Von diffuser Unruhe bis zu konkreten Ängsten — verstehen, was schützt, und Handlungsspielraum zurückgewinnen.' },
    { i: '🧭', t: 'Sinn & Orientierung', d: 'Lebensfragen, Neuorientierung, „Wie weiter?" — Klarheit für die nächste Etappe entwickeln.' },
    { i: '💬', t: 'Beziehung & Familie', d: 'Konflikte, Einsamkeit, Kommunikation — Muster erkennen und Beziehungen neu gestalten.' },
    { i: '🌱', t: 'Selbstwert & Stress', d: 'Innerer Druck, Perfektionismus, Selbstzweifel — freundlicher mit sich selbst werden.' }
];

function renderThemen(targetId, count) {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = THEMEN.slice(0, count || THEMEN.length).map(t => `
        <div class="card">
            <div class="ico">${t.i}</div>
            <h3>${t.t}</h3>
            <p>${t.d}</p>
        </div>`).join('');
}

/* ---------- BLOG DATA ---------- */
const BLOG = [
    { tag: 'Depression', c1: '#cfe4dc', c2: '#a9cdbf', title: 'Wenn der Morgen am schwersten ist',
      date: '12. Juli 2026', read: '4 Min.',
      body: `<p>Viele Menschen mit depressiven Phasen kennen es: Der Morgen fühlt sich an wie eine Wand. Der Körper ist schwer, die Gedanken kreisen, und der Tag scheint bereits verloren, bevor er beginnt.</p>
             <p>Das ist kein Versagen. Es ist ein bekanntes Muster — das sogenannte Morgentief. Statt gegen die Schwere anzukämpfen, hilft oft ein sehr kleiner erster Schritt: aufsetzen, ein Glas Wasser, das Fenster öffnen. Nicht mehr.</p>
             <p>In der Beratung schauen wir gemeinsam, welche Mini-Rituale für Sie tragen — und wie aus einem ersten Schritt nach und nach ein Weg wird.</p>` },
    { tag: 'Burnout', c1: '#e7ddd0', c2: '#d6c3a8', title: 'Die stille Erschöpfung erkennen',
      date: '28. Juni 2026', read: '5 Min.',
      body: `<p>Burnout kommt selten laut. Es schleicht sich ein: Man funktioniert noch, aber die Freude ist weg. Kleine Aufgaben fühlen sich riesig an, Erholung wirkt nicht mehr.</p>
             <p>Ein wichtiges Frühwarnzeichen ist der Verlust von Distanz — die Arbeit oder Sorge hört im Kopf nie auf. Wer das früh bemerkt, kann gegensteuern, bevor der Körper die Reißleine zieht.</p>
             <p>Gemeinsam finden wir heraus, wo Ihre Energie versickert und wie Sie wieder bewusst auftanken.</p>` },
    { tag: 'Alltag', c1: '#d3e0ec', c2: '#b3cbe0', title: 'Drei Fragen, die den Tag verändern',
      date: '9. Juni 2026', read: '3 Min.',
      body: `<p>Manchmal braucht es keine große Analyse, sondern eine kurze, ehrliche Pause. Diese drei Fragen können abends helfen:</p>
             <p><strong>1.</strong> Was hat mir heute gutgetan? <strong>2.</strong> Was hat mich Kraft gekostet? <strong>3.</strong> Was gönne ich mir morgen?</p>
             <p>Diese kleine Reflexion richtet den Blick weg vom reinen Funktionieren — hin zu dem, was Sie wirklich brauchen.</p>` },
    { tag: 'Glaube & Werte', c1: '#e2dcec', c2: '#c8bde0', title: 'Hoffnung als innerer Anker',
      date: '22. Mai 2026', read: '4 Min.',
      body: `<p>Für viele Menschen ist der Glaube eine Kraftquelle — gerade in dunklen Zeiten. Hoffnung ist dabei nicht das Wegschauen vom Schweren, sondern das Vertrauen, dass es nicht das letzte Wort behält.</p>
             <p>Auf Wunsch beziehe ich christliche Werte behutsam in die Beratung ein. Das geschieht immer respektvoll und freiwillig — als Angebot, nie als Bedingung.</p>` },
    { tag: 'Selbstwert', c1: '#d8e8df', c2: '#b6d3c2', title: 'Der freundliche innere Ton',
      date: '3. Mai 2026', read: '4 Min.',
      body: `<p>Wie sprechen Sie innerlich mit sich selbst? Bei vielen ist diese Stimme streng, ungeduldig, abwertend. Doch der Ton, in dem wir mit uns reden, prägt, wie wir uns fühlen.</p>
             <p>Eine einfache Übung: Formulieren Sie einen harten Selbstvorwurf so um, als würden Sie ihn einem guten Freund sagen. Der Unterschied ist oft verblüffend — und heilsam.</p>` },
    { tag: 'Stress', c1: '#ece0d8', c2: '#e0c5b3', title: 'Warum Pausen keine Belohnung sind',
      date: '18. April 2026', read: '3 Min.',
      body: `<p>Ein hartnäckiger Irrtum: „Pause gibt es erst, wenn alles fertig ist." Doch so wird die Pause zur Belohnung, die nie kommt — denn fertig ist man nie.</p>
             <p>Pausen sind kein Luxus, sondern Teil der Leistung. Wer regelmäßig kurz innehält, arbeitet konzentrierter und bleibt länger gesund. Planen Sie Pausen fest ein, so wie einen Termin.</p>` }
];

function renderBlog() {
    const el = document.getElementById('blogGrid');
    el.innerHTML = BLOG.map((b, idx) => `
        <button class="blog-card" data-blog="${idx}">
            <div class="blog-thumb" style="--c1:${b.c1};--c2:${b.c2}"></div>
            <div class="blog-body">
                <span class="blog-tag">${b.tag}</span>
                <h3>${b.title}</h3>
                <p>${b.body.replace(/<[^>]+>/g, '').slice(0, 90)}…</p>
                <div class="blog-meta">${b.date} · ${b.read} Lesezeit</div>
            </div>
        </button>`).join('');
}

/* Blog modal */
const modal = document.getElementById('blogModal');
document.getElementById('blogGrid').addEventListener('click', e => {
    const card = e.target.closest('[data-blog]');
    if (!card) return;
    const b = BLOG[card.dataset.blog];
    document.getElementById('modalBody').innerHTML = `
        <span class="blog-tag">${b.tag}</span>
        <h2>${b.title}</h2>
        <div class="m-meta">${b.date} · ${b.read} Lesezeit</div>
        ${b.body}`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
});
function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- VIDEOS ---------- */
const VIDEOS = [
    { c1: '#cfe4dc', c2: '#a9cdbf', title: 'Depression verstehen — in 6 Minuten', meta: 'Neu · 6:12' },
    { c1: '#e7ddd0', c2: '#d6c3a8', title: 'Burnout: die 5 leisen Warnzeichen', meta: '8:41' },
    { c1: '#d3e0ec', c2: '#b3cbe0', title: 'Eine Atemübung gegen akute Anspannung', meta: '4:03' },
    { c1: '#e2dcec', c2: '#c8bde0', title: 'Glaube & Psyche — kein Widerspruch', meta: '9:27' },
    { c1: '#d8e8df', c2: '#b6d3c2', title: 'Grübeln stoppen: 3 Techniken', meta: '5:55' },
    { c1: '#ece0d8', c2: '#e0c5b3', title: 'Wieder Freude finden — kleine Schritte', meta: '7:18' }
];
function renderVideos() {
    document.getElementById('videoGrid').innerHTML = VIDEOS.map(v => `
        <a class="video-card" href="https://www.youtube.com/" target="_blank" rel="noopener">
            <div class="video-thumb" style="--c1:${v.c1};--c2:${v.c2}"><div class="play"></div></div>
            <div class="video-body"><h3>${v.title}</h3><span>${v.meta}</span></div>
        </a>`).join('');
}

/* ---------- BOOKING ---------- */
const booking = { type: 'erst', date: null, time: null, online: false };

function renderTypeOptions() {
    const p = currentPrices();
    const promo = isPromoActive();
    const el = document.getElementById('typeOptions');
    const opt = (key) => {
        const cfg = p[key];
        const reg = PRICING.regular[key].price;
        const strike = promo && reg !== cfg.price ? `<s>${reg} €</s>` : '';
        return `<button class="type-opt ${booking.type === key ? 'sel' : ''}" data-type="${key}">
            <div class="t-name">${cfg.label}</div>
            <div class="t-price">${cfg.price} €${strike}</div>
            <div class="t-desc">${key === 'erst' ? 'Kennenlernen & erste Einordnung · 50 Min.' : 'Fortlaufende Begleitung · 50 Min.'}</div>
        </button>`;
    };
    el.innerHTML = opt('erst') + opt('folge');
}

function renderDates() {
    const el = document.getElementById('dateStrip');
    const days = [];
    const d = new Date();
    d.setHours(0,0,0,0);
    while (days.length < 12) {
        d.setDate(d.getDate() + 1);
        const dow = d.getDay();
        if (dow !== 0 && dow !== 6) days.push(new Date(d)); // Mo–Fr
    }
    if (!booking.date) booking.date = days[0];
    el.innerHTML = days.map(day => {
        const key = day.toISOString().slice(0,10);
        const sel = booking.date && booking.date.toISOString().slice(0,10) === key;
        return `<button class="date-chip ${sel ? 'sel' : ''}" data-date="${key}">
            <div class="dow">${day.toLocaleDateString('de-DE',{weekday:'short'})}</div>
            <div class="dnum">${day.getDate()}</div>
            <div class="dmon">${day.toLocaleDateString('de-DE',{month:'short'})}</div>
        </button>`;
    }).join('');
}

function renderTimes() {
    const slots = ['09:00','10:00','11:00','13:00','14:00','15:00','16:00','17:00'];
    document.getElementById('timeSlots').innerHTML = slots.map(s =>
        `<button class="slot ${booking.time === s ? 'sel' : ''}" data-time="${s}">${s}</button>`).join('');
}

function renderSummary() {
    const p = currentPrices();
    const cfg = p[booking.type];
    const promo = isPromoActive();
    const el = document.getElementById('bookingSummary');
    const dateStr = booking.date ? fmtDate(booking.date) : '—';
    const promoNote = promo
        ? `<div class="sum-promo">✦ Einführungspreis aktiv — gültig bis ${fmtDate(PRICING.promoEnd)}. Ab 1. September gelten wieder ${PRICING.regular.erst.price} € / ${PRICING.regular.folge.price} €.</div>`
        : '';
    el.innerHTML = `
        <h3>Ihre Buchung</h3>
        <div class="sum-row"><span>Sitzungsart</span><span>${cfg.label}</span></div>
        <div class="sum-row"><span>Format</span><span>${booking.online ? 'Online (Video)' : 'Vor Ort'}</span></div>
        <div class="sum-row"><span>Datum</span><span>${dateStr}</span></div>
        <div class="sum-row"><span>Uhrzeit</span><span>${booking.time || '—'}</span></div>
        ${promoNote}
        <div class="sum-row total"><span>Gesamt</span><span>${cfg.price} €</span></div>
        <a class="btn btn-primary" id="bookBtn">Termin anfragen</a>
        <p class="booking-msg" id="bookMsg"></p>`;
    document.getElementById('bookBtn').addEventListener('click', submitBooking);
}

function submitBooking() {
    const msg = document.getElementById('bookMsg');
    const name = document.getElementById('fName').value.trim();
    const email = document.getElementById('fEmail').value.trim();
    if (!booking.date || !booking.time) { msg.textContent = 'Bitte Tag und Uhrzeit wählen.'; return; }
    if (!name || !email) { msg.textContent = 'Bitte Name und E-Mail angeben.'; return; }

    const p = currentPrices();
    const cfg = p[booking.type];
    const subject = encodeURIComponent(`Terminanfrage — ${cfg.label} am ${fmtDate(booking.date)}`);
    const body = encodeURIComponent(
        `Hallo Praxis Pazer,\n\nich möchte einen Termin anfragen:\n\n` +
        `• Sitzungsart: ${cfg.label} (${cfg.price} €)\n` +
        `• Format: ${booking.online ? 'Online (Video)' : 'Vor Ort'}\n` +
        `• Datum: ${fmtDate(booking.date)}\n` +
        `• Uhrzeit: ${booking.time}\n\n` +
        `• Name: ${name}\n• E-Mail: ${email}\n` +
        `• Telefon: ${document.getElementById('fPhone').value.trim() || '—'}\n\n` +
        `Anliegen: ${document.getElementById('fNote').value.trim() || '—'}\n`
    );
    window.location.href = `mailto:kontakt@praxis-pazer.de?subject=${subject}&body=${body}`;
    msg.className = 'booking-msg ok';
    msg.textContent = '✓ Ihre Anfrage wird in Ihrem E-Mail-Programm geöffnet. Ich melde mich zeitnah!';
}

/* Booking interactions (delegated) */
document.querySelector('[data-view="termin"]').addEventListener('click', e => {
    const type = e.target.closest('[data-type]');
    const date = e.target.closest('[data-date]');
    const time = e.target.closest('[data-time]');
    if (type) { booking.type = type.dataset.type; renderTypeOptions(); renderSummary(); }
    if (date) { booking.date = new Date(date.dataset.date + 'T00:00:00'); renderDates(); renderSummary(); }
    if (time) { booking.time = time.dataset.time; renderTimes(); renderSummary(); }
});
document.getElementById('fOnline').addEventListener('change', e => { booking.online = e.target.checked; renderSummary(); });

/* ---------- CONTACT FORM ---------- */
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('contactHint').textContent = '✓ Vielen Dank! Ihre Nachricht ist bereit — ich melde mich zeitnah zurück.';
    e.target.reset();
});

/* ---------- INIT ---------- */
function init() {
    document.getElementById('year').textContent = '2026';
    renderHeroPromo();
    renderThemen('themenPreview', 3);
    renderThemen('themenFull');
    renderBlog();
    renderVideos();
    renderTypeOptions();
    renderDates();
    renderTimes();
    renderSummary();

    const start = (location.hash || '#start').slice(1);
    go(document.querySelector(`.view[data-view="${start}"]`) ? start : 'start');
}
init();
