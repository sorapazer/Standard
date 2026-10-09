(function () {
  "use strict";

  var ISP = window.ISP;
  var esc = ISP.esc;
  var I = window.I18N, T = ISP.T, EN = window.EN || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Daten ---------- */
  var KURSE = window.KURSE || [];
  var KURS = {}; KURSE.forEach(function (k) { KURS[k.id] = k; });
  var MOD = {};
  (window.KURS_MODULE || []).forEach(function (m) { MOD[m.kurs + ":" + m.id] = m; });
  var MOD_EN = {};
  (EN.kursModule || []).forEach(function (m) { MOD_EN[m.kurs + ":" + m.id] = m; });

  // Kurs in der aktuellen Sprache (Texte aus data/en/kurse.js, Zahlen und IDs aus data/kurse/kurse.js)
  function kv(k) { return I.lang === "en" && EN.kurse && EN.kurse[k.id] ? Object.assign({}, k, EN.kurse[k.id]) : k; }
  function moduleOf(k) {
    return k.module.map(function (id) { return (I.lang === "en" && MOD_EN[k.id + ":" + id]) || MOD[k.id + ":" + id]; }).filter(Boolean);
  }
  function lessonsOf(k) {
    var out = [];
    moduleOf(k).forEach(function (m) { m.lektionen.forEach(function (l) { out.push({ modul: m, lektion: l }); }); });
    return out;
  }
  function findLesson(k, lid) {
    var all = lessonsOf(k);
    for (var i = 0; i < all.length; i++) if (all[i].lektion.id === lid) return { item: all[i], index: i, all: all };
    return null;
  }
  function minutes(k) { return lessonsOf(k).reduce(function (s, x) { return s + (x.lektion.dauer || 0); }, 0); }
  function stepCount(k) { return lessonsOf(k).reduce(function (s, x) { return s + x.lektion.schritte.length; }, 0); }
  function euro(n) { return I.lang === "en" ? "€" + n.toLocaleString("en-GB") : n.toLocaleString("de-DE") + " €"; }
  function hours(min) { var h = Math.round(min / 6) / 10; return h.toLocaleString(I.locale()) + T(" Std.", " hrs"); }
  function weg(w) {
    if (I.lang !== "en") return w;
    return { "Gutschein, kostenfrei": "voucher, free of charge", "Gutschein": "voucher" }[w] || w;
  }
  function fmtDate(iso, fallback) {
    if (!iso) return fallback || "";
    return new Date(iso + "T12:00:00").toLocaleDateString(I.locale(), { day: "numeric", month: "long", year: "numeric" });
  }

  /* ---------- Speicher (lokal im Browser) ---------- */
  var KEY = "isp-akademie-v1";
  var mem = null;
  function load() {
    if (mem) return mem;
    try { mem = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { mem = null; }
    mem = mem || {};
    mem.zugang = mem.zugang || {}; mem.lektionen = mem.lektionen || {}; mem.pruefung = mem.pruefung || {};
    mem.zertifikate = mem.zertifikate || {}; mem.reflexion = mem.reflexion || {}; mem.position = mem.position || {};
    return mem;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) {} }
  function hasAccess(k) { return !!load().zugang[k.id]; }
  function isPreview(k, lid) { var all = lessonsOf(k); return all.length && all[0].lektion.id === lid; }
  function lessonDone(k, lid) { return !!load().lektionen[k.id + ":" + lid]; }
  function progress(k) {
    var all = lessonsOf(k); if (!all.length) return 0;
    return all.filter(function (x) { return lessonDone(k, x.lektion.id); }).length / all.length;
  }
  function nextLesson(k) {
    var all = lessonsOf(k);
    for (var i = 0; i < all.length; i++) if (!lessonDone(k, all[i].lektion.id)) return all[i];
    return null;
  }

  /* ---------- Hilfen ---------- */
  function inline(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  }
  function fmt(text) {
    return String(text || "").split(/\n\s*\n/).map(function (block) {
      var lines = block.split("\n");
      if (lines.every(function (l) { return /^\s*-\s+/.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + inline(l.replace(/^\s*-\s+/, "")) + "</li>"; }).join("") + "</ul>";
      }
      var out = "", list = [];
      lines.forEach(function (l) {
        if (/^\s*-\s+/.test(l)) list.push("<li>" + inline(l.replace(/^\s*-\s+/, "")) + "</li>");
        else { if (list.length) { out += "<ul>" + list.join("") + "</ul>"; list = []; } out += (out && !/<\/ul>$/.test(out) ? "<br>" : "") + inline(l); }
      });
      if (list.length) out += "<ul>" + list.join("") + "</ul>";
      return /^<ul>/.test(out) ? out : "<p>" + out + "</p>";
    }).join("");
  }
  function shuffle(arr, rnd) {
    var a = arr.slice(); rnd = rnd || Math.random;
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function seeded(seed) {
    var s = seed >>> 0 || 1;
    return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; };
  }
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function root() { return $("#ak-root"); }
  function show(html) { ISP.setView("akademie"); root().innerHTML = html; }
  function bar(p, label) {
    return '<div class="ak-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(p * 100) + '"' + (label ? ' aria-label="' + esc(label) + '"' : "") + '><span style="width:' + (p * 100).toFixed(1) + '%"></span></div>';
  }

  /* ---------- Katalog (Seite Weiterbildung) ---------- */
  function renderKatalog() {
    var el = $("#ak-katalog"); if (!el) return;
    el.innerHTML = KURSE.map(kv).map(function (k) {
      var mods = moduleOf(k), ls = lessonsOf(k), own = hasAccess(k), p = progress(k);
      var cert = load().zertifikate[k.id];
      return '<article class="program" id="prog-' + k.id + '"><div>' +
        '<span class="tag">' + esc(k.art) + " · " + k.ue + T(" Unterrichtseinheiten", " teaching units") + "</span>" +
        "<h2>" + esc(k.titel) + "</h2><p>" + esc(k.text) + "</p>" +
        '<div class="table-wrap"><table><thead><tr><th>' + T("Modul", "Module") + "</th><th>" + T("Inhalte", "Contents") + '</th><th class="num">' + T("Lektionen", "Lessons") + "</th></tr></thead><tbody>" +
        mods.map(function (m) { return "<tr><td>" + esc(m.id + " " + m.titel) + "</td><td>" + esc(m.beschreibung) + '</td><td class="num">' + m.lektionen.length + "</td></tr>"; }).join("") +
        '</tbody><tfoot><tr><td colspan="2">' + T("Abschlussprüfung mit ", "Final examination with ") + k.pruefungFragen + T(" Fragen, bestanden ab ", " questions, pass mark ") + Math.round(k.bestehen * 100) + ' %</td><td class="num">' + ls.length + "</td></tr></tfoot></table></div>" +
        "</div><aside>" +
        '<dl class="facts"><div><dt>' + T("Umfang", "Scope") + "</dt><dd>" + k.ue + T(" UE · ", " units · ") + mods.length + T(" Module · ", " modules · ") + ls.length + T(" Lektionen", " lessons") + "</dd></div>" +
        "<div><dt>" + T("Reine Lernzeit in Lektionen", "Study time in lessons") + "</dt><dd>" + hours(minutes(k)) + " · " + stepCount(k) + T(" Lernschritte", " learning steps") + "</dd></div>" +
        "<div><dt>" + T("Empfohlene Dauer", "Recommended duration") + "</dt><dd>" + esc(k.empfohleneDauer) + "</dd></div>" +
        "<div><dt>" + T("Zielgruppe", "Target group") + "</dt><dd>" + esc(k.zielgruppe) + "</dd></div>" +
        "<div><dt>" + T("Gebühr", "Fee") + "</dt><dd>" + euro(k.preis) + (k.raten ? " " + esc(k.raten) : "") + "</dd></div></dl>" +
        (own ? "<div>" + bar(p, T("Fortschritt", "Progress")) + '<p class="small muted" style="margin-top:6px">' + Math.round(p * 100) + T(" % abgeschlossen", " % completed") + (cert ? T(" · Zertifikat erworben", " · certificate earned") : "") + "</p></div>" : "") +
        '<a class="btn btn-primary" href="#kurs-' + k.id + '">' + (own ? T("Weiterlernen", "Continue learning") : T("Kurs ansehen und buchen", "View and book course")) + "</a>" +
        (own ? "" : '<a class="btn btn-ghost" href="#lektion-' + k.id + "-" + (ls[0] ? ls[0].lektion.id : "") + '">' + T("Erste Lektion kostenlos testen", "Try the first lesson for free") + "</a>") +
        "</aside></article>";
    }).join("");
  }

  /* ---------- Lernbereich ---------- */
  function renderLernbereich() {
    var own = KURSE.filter(hasAccess);
    var html = '<header class="page-head"><p class="eyebrow">' + T("Online-Akademie", "Online Academy") + "</p><h1>" + T("Mein Lernbereich", "My learning") + "</h1>" +
      '<p class="lead">' + (own.length ? T("Ihre freigeschalteten Kurse, Ihr Fortschritt und Ihre Zertifikate.", "Your unlocked courses, your progress and your certificates.") : T("Sie haben noch keinen Kurs freigeschaltet. Wählen Sie einen Kurs, buchen Sie ihn oder lösen Sie einen Gutscheincode ein.", "You have not unlocked a course yet. Choose a course, book it or redeem a voucher code.")) + "</p></header>";
    html += '<div class="ak-dash">';
    KURSE.map(kv).forEach(function (k) {
      var o = hasAccess(k), p = progress(k), n = nextLesson(k), c = load().zertifikate[k.id], ex = load().pruefung[k.id];
      html += '<article class="ak-card' + (o ? "" : " is-locked") + '"><span class="tag">' + esc(k.art) + "</span><h3>" + esc(k.titel) + "</h3>";
      if (o) {
        html += bar(p, T("Fortschritt", "Progress")) + '<p class="small muted">' + Math.round(p * 100) + T(" % der Lektionen abgeschlossen", " % of lessons completed") + (ex && ex.best != null ? T(" · Bestes Prüfungsergebnis ", " · best exam result ") + ex.best + " %" : "") + "</p>";
        if (c) html += '<a class="btn btn-primary" href="#zertifikat-' + k.id + '">' + T("Zertifikat ansehen", "View certificate") + "</a>";
        else if (n) html += '<a class="btn btn-primary" href="#lektion-' + k.id + "-" + n.lektion.id + '">' + T("Weiter: ", "Continue: ") + esc(n.lektion.titel) + "</a>";
        else html += '<a class="btn btn-primary" href="#pruefung-' + k.id + '">' + T("Zur Abschlussprüfung", "Go to the final exam") + "</a>";
        html += '<a href="#kurs-' + k.id + '">' + T("Kursübersicht", "Course overview") + "</a>";
      } else {
        html += '<p class="small muted">' + esc(k.text) + '</p><a class="btn btn-ghost" href="#kurs-' + k.id + '">' + T("Kurs ansehen", "View course") + "</a>";
      }
      html += "</article>";
    });
    html += "</div>";
    html += '<p class="small muted" style="margin-top:28px">' + T("Ihr Lernfortschritt wird in diesem Browser auf diesem Gerät gespeichert. Wenn Sie die Browserdaten löschen, geht der Fortschritt verloren.", "Your progress is stored in this browser on this device. If you clear your browser data, your progress will be lost.") + "</p>";
    show(html);
  }

  /* ---------- Kursseite ---------- */
  function renderKurs(k) {
    k = kv(k);
    var own = hasAccess(k), mods = moduleOf(k), all = lessonsOf(k), p = progress(k), n = nextLesson(k);
    var cert = load().zertifikate[k.id], ex = load().pruefung[k.id];
    var html = '<header class="page-head"><p class="eyebrow"><a href="#weiterbildung">' + T("Online-Akademie", "Online Academy") + "</a> · " + esc(k.art) + "</p><h1>" + esc(k.titel) + '</h1><p class="lead">' + esc(k.text) + "</p></header>";
    html += '<div class="ak-course">';
    html += '<div class="ak-course-main">';
    mods.forEach(function (m) {
      var done = m.lektionen.filter(function (l) { return lessonDone(k, l.id); }).length;
      html += '<section class="ak-module"><header><span class="mono muted">' + T("Modul ", "Module ") + esc(m.id) + " · " + done + "/" + m.lektionen.length + "</span><h2>" + esc(m.titel) + '</h2><p class="muted">' + esc(m.beschreibung) + "</p>";
      if (m.lernziele && m.lernziele.length) html += '<details class="ak-goals"><summary>' + T("Lernziele", "Learning objectives") + "</summary><div><ul>" + m.lernziele.map(function (z) { return "<li>" + esc(z) + "</li>"; }).join("") + "</ul></div></details>";
      html += '</header><ol class="ak-lessons">';
      m.lektionen.forEach(function (l) {
        var ok = own || isPreview(k, l.id), d = lessonDone(k, l.id);
        html += '<li class="' + (d ? "done" : "") + '"><span class="ak-state" aria-hidden="true">' + (d ? "✓" : ok ? "" : "🔒") + "</span>" +
          (ok ? '<a href="#lektion-' + k.id + "-" + l.id + '">' + esc(l.titel) + "</a>" : "<span>" + esc(l.titel) + "</span>") +
          '<span class="mono muted small">' + (l.dauer || "") + " min" + (isPreview(k, l.id) && !own ? T(" · frei", " · free") : "") + "</span></li>";
      });
      html += "</ol></section>";
    });
    var examOpen = own && !n;
    html += '<section class="ak-module"><header><span class="mono muted">' + T("Abschluss", "Completion") + "</span><h2>" + T("Abschlussprüfung und Zertifikat", "Final exam and certificate") + '</h2><p class="muted">' + k.pruefungFragen + T(" Fragen aus allen Modulen. Bestanden ab ", " questions from all modules. Pass mark: ") + Math.round(k.bestehen * 100) + T(" Prozent. Die Prüfung wird freigeschaltet, sobald alle Lektionen abgeschlossen sind.", " percent. The exam is unlocked once all lessons have been completed.") + "</p></header>" +
      '<div class="actions">' + (examOpen ? '<a class="btn btn-primary" href="#pruefung-' + k.id + '">' + (ex && ex.passed ? T("Prüfung erneut ablegen", "Retake the exam") : T("Prüfung starten", "Start the exam")) + "</a>" : '<span class="btn btn-ghost is-disabled" aria-disabled="true">🔒 ' + T("Prüfung noch gesperrt", "Exam still locked") + "</span>") +
      (cert ? '<a class="btn btn-ghost" href="#zertifikat-' + k.id + '">' + T("Zertifikat ansehen", "View certificate") + "</a>" : "") + "</div></section>";
    html += "</div>";

    html += '<aside class="ak-course-side">';
    if (own) {
      html += '<div class="panel"><p class="eyebrow">' + T("Ihr Fortschritt", "Your progress") + "</p>" + bar(p, T("Fortschritt", "Progress")) + '<p class="small">' + Math.round(p * 100) + " % · " + all.filter(function (x) { return lessonDone(k, x.lektion.id); }).length + T(" von ", " of ") + all.length + T(" Lektionen", " lessons") + "</p>" +
        (n ? '<a class="btn btn-primary" href="#lektion-' + k.id + "-" + n.lektion.id + '">' + (p ? T("Weiterlernen", "Continue learning") : T("Kurs beginnen", "Start course")) + "</a>" : '<a class="btn btn-primary" href="#pruefung-' + k.id + '">' + T("Zur Prüfung", "Go to the exam") + "</a>") +
        '<p class="small muted">' + T("Freigeschaltet am ", "Unlocked on ") + esc(fmtDate(load().zugang[k.id].iso, load().zugang[k.id].datum)) + (load().zugang[k.id].weg ? " · " + esc(weg(load().zugang[k.id].weg)) : "") + "</p></div>";
    } else {
      html += '<div class="panel ak-buy"><p class="eyebrow">' + T("Kurs freischalten", "Unlock course") + '</p><p class="ak-price">' + euro(k.preis) + "</p>" + (k.raten ? '<p class="small muted">' + esc(k.raten) + "</p>" : "") +
        '<ul class="ak-incl small"><li>' + all.length + T(" interaktive Lektionen in ", " interactive lessons in ") + mods.length + T(" Modulen", " modules") + "</li><li>" + stepCount(k) + T(" Lernschritte mit Übungen, Fällen und Gesprächssimulationen", " learning steps with exercises, cases and conversation simulations") + "</li><li>" + T("Abschlussprüfung mit beliebig vielen Versuchen", "Final exam with unlimited attempts") + "</li><li>" + T("Zertifikat des Instituts mit Zertifikatsnummer", "Institute certificate with certificate number") + "</li><li>" + T("Unbegrenzter Zugang", "Unlimited access") + "</li></ul>" +
        '<form id="ak-code-form" class="ak-code"><label for="ak-code">' + T("Gutschein- oder Freischaltcode", "Voucher or activation code") + '</label><div class="ak-code-row"><input id="ak-code" autocomplete="off" autocapitalize="characters" spellcheck="false"><button class="btn btn-primary" type="submit">' + T("Einlösen", "Redeem") + '</button></div><p class="small" id="ak-code-msg" aria-live="polite"></p></form>' +
        '<button type="button" class="btn btn-ghost" id="ak-book-open">' + T("Kurs kostenpflichtig buchen", "Book course (paid)") + "</button>" +
        '<form id="ak-book" class="ak-book" hidden novalidate>' +
        '<div class="field"><label for="b-name">' + T("Vor- und Nachname", "Full name") + '</label><input id="b-name" autocomplete="name"></div>' +
        '<div class="field"><label for="b-mail">' + T("E-Mail", "Email") + '</label><input id="b-mail" type="email" autocomplete="email"></div>' +
        '<div class="field"><label for="b-adr">' + T("Rechnungsanschrift", "Billing address") + '</label><textarea id="b-adr" rows="3" autocomplete="street-address"></textarea></div>' +
        '<div class="field"><label for="b-zahl">' + T("Zahlungsweise", "Payment method") + '</label><select id="b-zahl"><option>' + T("Einmalzahlung ", "Single payment ") + euro(k.preis) + "</option>" + (k.raten ? "<option>" + T("Ratenzahlung", "Installments") + " (" + esc(k.raten.replace(/^(oder|or) /, "")) + ")</option>" : "") + "</select></div>" +
        '<label class="check"><input type="checkbox" id="b-agb"> <span>' + T("Ich habe den rechtlichen Rahmen zur Kenntnis genommen: Das Zertifikat berechtigt nicht zur Ausübung der Heilkunde.", "I acknowledge the legal framework: the certificate does not entitle me to practice medicine or psychotherapy.") + "</span></label>" +
        '<p class="error" id="b-err" hidden></p><button class="btn btn-primary" type="submit">' + T("Buchungsanfrage erstellen", "Create booking request") + "</button>" +
        '<div id="b-out" hidden><p class="small">' + T("Senden Sie diesen Text an ", "Send this text to ") + '<strong class="mono">' + esc(ISP.KONTAKT) + "</strong>. " + T("Sie erhalten eine Rechnung und nach Zahlungseingang Ihren persönlichen Freischaltcode.", "You will receive an invoice and, after payment, your personal activation code.") + '</p><pre class="result" id="b-text"></pre><button type="button" class="btn btn-ghost" id="b-copy">' + T("Text kopieren", "Copy text") + "</button></div></form>" +
        "</div>";
      if (all[0]) html += '<div class="panel"><p class="eyebrow">' + T("Probelektion", "Trial lesson") + "</p><p>" + esc(all[0].lektion.titel) + '</p><a class="btn btn-ghost" href="#lektion-' + k.id + "-" + all[0].lektion.id + '">' + T("Kostenlos testen", "Try for free") + "</a></div>";
    }
    html += '<div class="panel"><p class="eyebrow">' + T("Auf einen Blick", "At a glance") + '</p><dl class="facts"><div><dt>' + T("Umfang", "Scope") + "</dt><dd>" + k.ue + T(" Unterrichtseinheiten", " teaching units") + "</dd></div><div><dt>" + T("Lernzeit in Lektionen", "Study time in lessons") + "</dt><dd>" + hours(minutes(k)) + "</dd></div><div><dt>" + T("Empfohlene Dauer", "Recommended duration") + "</dt><dd>" + esc(k.empfohleneDauer) + "</dd></div><div><dt>" + T("Abschluss", "Qualification") + "</dt><dd>" + T("Zertifikat des Instituts", "Institute certificate") + "</dd></div></dl></div>";
    html += "</aside></div>";
    show(html);

    if (!own) {
      $("#ak-code-form").addEventListener("submit", function (ev) {
        ev.preventDefault();
        var code = $("#ak-code").value.trim().toUpperCase(), msg = $("#ak-code-msg");
        var g = (window.GUTSCHEINE || {})[code];
        if (!code) { msg.className = "small error"; msg.textContent = T("Bitte geben Sie einen Code ein.", "Please enter a code."); return; }
        if (!g || g.kurse.indexOf(k.id) < 0) { msg.className = "small error"; msg.textContent = T("Dieser Code ist für diesen Kurs nicht gültig. Bitte prüfen Sie die Schreibweise.", "This code is not valid for this course. Please check the spelling."); return; }
        load().zugang[k.id] = { datum: new Date().toLocaleDateString("de-DE"), iso: new Date().toISOString().slice(0, 10), weg: g.rabatt >= 1 ? "Gutschein, kostenfrei" : "Gutschein" };
        save();
        msg.className = "small ak-ok"; msg.textContent = T("Gutschein eingelöst. Der Kurs ist freigeschaltet.", "Voucher redeemed. The course is now unlocked.");
        setTimeout(function () { renderKurs(k); }, 700);
      });
      $("#ak-book-open").addEventListener("click", function () { $("#ak-book").hidden = false; this.hidden = true; $("#b-name").focus(); });
      $("#ak-book").addEventListener("submit", function (ev) {
        ev.preventDefault();
        var e = [], name = $("#b-name").value.trim(), mail = $("#b-mail").value.trim(), adr = $("#b-adr").value.trim();
        if (!name) e.push(T("Bitte geben Sie Ihren Namen an.", "Please enter your name."));
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)) e.push(T("Bitte geben Sie eine gültige E-Mail-Adresse an.", "Please enter a valid email address."));
        if (!adr) e.push(T("Bitte geben Sie Ihre Rechnungsanschrift an.", "Please enter your billing address."));
        if (!$("#b-agb").checked) e.push(T("Bitte bestätigen Sie den Hinweis zum rechtlichen Rahmen.", "Please confirm the legal notice."));
        $("#b-err").hidden = !e.length; $("#b-err").textContent = e.join(" ");
        if (e.length) return;
        $("#b-text").textContent = I.lang === "en"
          ? "Subject: Online course booking – " + k.titel + "\n\nI hereby make a binding booking for the online course “" + k.titel + "”.\n\nName: " + name + "\nEmail: " + mail + "\nBilling address:\n" + adr + "\nPayment method: " + $("#b-zahl").value + "\n\nI acknowledge that the certificate does not entitle me to practice medicine or psychotherapy.\n\nKind regards,\n" + name
          : "Betreff: Buchung Online-Kurs – " + k.titel + "\n\nHiermit buche ich verbindlich den Online-Kurs „" + k.titel + "“.\n\nName: " + name + "\nE-Mail: " + mail + "\nRechnungsanschrift:\n" + adr + "\nZahlungsweise: " + $("#b-zahl").value + "\n\nDen Hinweis, dass das Zertifikat nicht zur Ausübung der Heilkunde berechtigt, habe ich zur Kenntnis genommen.\n\nMit freundlichen Grüßen\n" + name;
        $("#b-out").hidden = false;
      });
      $("#b-copy").addEventListener("click", function () { ISP.copyText($("#b-text").textContent, this, $("#b-text")); });
    }
  }

  /* ---------- Lektionsspieler ---------- */
  var player = null;

  function renderLektion(k, lid) {
    var f = findLesson(k, lid);
    if (!f) return false;
    if (!hasAccess(k) && !isPreview(k, lid)) { renderKurs(k); return true; }
    k = kv(k);
    var l = f.item.lektion, m = f.item.modul;
    var startAt = 0;
    var pos = load().position[k.id + ":" + lid];
    if (pos && !lessonDone(k, lid) && pos < l.schritte.length) startAt = pos;
    player = { k: k, l: l, m: m, f: f, i: startAt, max: startAt, first: 0, graded: 0, done: {} };
    for (var s = 0; s < startAt; s++) player.done[s] = true;
    show('<div class="ak-player">' +
      '<div class="ak-top"><a href="#kurs-' + k.id + '" class="small">← ' + esc(k.titel) + '</a><span class="mono muted small">' + T("Modul ", "Module ") + esc(m.id) + T(" · Lektion ", " · Lesson ") + (m.lektionen.indexOf(l) + 1) + T(" von ", " of ") + m.lektionen.length + "</span></div>" +
      '<h1 class="ak-ltitle">' + esc(l.titel) + "</h1>" +
      '<div class="ak-steps" id="ak-steps" aria-hidden="true"></div>' +
      '<div class="ak-stage" id="ak-stage" tabindex="-1"></div>' +
      '<div class="ak-nav"><button type="button" class="btn btn-ghost" id="ak-prev">' + T("Zurück", "Back") + '</button><span class="mono muted small" id="ak-count"></span><button type="button" class="btn btn-primary" id="ak-next">' + T("Weiter", "Next") + "</button></div>" +
      "</div>");
    $("#ak-prev").addEventListener("click", function () { if (player.i > 0) { player.i--; drawStep(); } });
    $("#ak-next").addEventListener("click", function () {
      if (!player.done[player.i]) { player.skipped = (player.skipped || 0) + 1; player.done[player.i] = "skip"; }
      if (player.i < player.l.schritte.length - 1) { player.i++; player.max = Math.max(player.max, player.i); load().position[k.id + ":" + lid] = player.i; save(); drawStep(); }
      else finishLesson();
    });
    drawStep();
    return true;
  }

  function drawStep() {
    var p = player, steps = p.l.schritte, step = steps[p.i];
    $("#ak-steps").innerHTML = steps.map(function (s, i) {
      return '<span class="' + (p.done[i] === "skip" ? "is-skip" : i < p.i || p.done[i] ? "is-done" : "") + (i === p.i ? " is-current" : "") + '"></span>';
    }).join("");
    $("#ak-count").textContent = T("Schritt ", "Step ") + (p.i + 1) + T(" von ", " of ") + steps.length;
    $("#ak-prev").disabled = p.i === 0;
    var stage = $("#ak-stage");
    stage.innerHTML = "";
    var r = RENDER[step.typ] || RENDER.text;
    r(step, stage, function (firstTry) {
      if (p.done[p.i] !== true) {
        if (p.done[p.i] === "skip") p.skipped--;
        p.done[p.i] = true;
        if (firstTry !== undefined) { p.graded++; if (firstTry) p.first++; }
      }
      updateNext();
    }, p.done[p.i] === true);
    updateNext();
    stage.focus({ preventScroll: true });
    var top = $(".ak-player"); if (top && top.getBoundingClientRect().top < 0) top.scrollIntoView({ block: "start" });
  }
  function updateNext() {
    var p = player, last = p.i === p.l.schritte.length - 1;
    var b = $("#ak-next");
    b.disabled = false;
    var open = p.done[p.i] !== true;
    b.textContent = last ? (open ? T("Überspringen und abschließen", "Skip and finish") : T("Lektion abschließen", "Finish lesson")) : (open ? T("Überspringen", "Skip") : T("Weiter", "Next"));
    b.classList.toggle("btn-primary", !open);
    b.classList.toggle("btn-ghost", open);
  }
  function finishLesson() {
    var p = player, k = p.k;
    load().lektionen[k.id + ":" + p.l.id] = { datum: new Date().toISOString().slice(0, 10) };
    delete load().position[k.id + ":" + p.l.id];
    save();
    var nxt = p.f.all[p.f.index + 1];
    var canNext = nxt && (hasAccess(k) || isPreview(k, nxt.lektion.id));
    var allDone = !nextLesson(k);
    var html = '<div class="ak-player ak-finish"><p class="eyebrow">' + T("Lektion abgeschlossen", "Lesson completed") + "</p><h1>" + esc(p.l.titel) + "</h1>";
    if (p.graded) html += '<p class="lead">' + p.first + T(" von ", " of ") + p.graded + T(" Aufgaben beim ersten Versuch gelöst.", " exercises solved at the first attempt.") + "</p>";
    if (p.skipped) html += '<p class="ak-skip-note">' + p.skipped + (p.skipped === 1 ? T(" Aufgabe übersprungen.", " exercise skipped.") : T(" Aufgaben übersprungen.", " exercises skipped.")) + T(" Sie können die Lektion jederzeit erneut öffnen und die Aufgaben nachholen.", " You can reopen the lesson at any time and complete them.") + "</p>";
    html += bar(progress(k), T("Kursfortschritt", "Course progress")) + '<p class="small muted">' + T("Kursfortschritt: ", "Course progress: ") + Math.round(progress(k) * 100) + " %</p><div class=\"actions\">";
    if (allDone && hasAccess(k)) html += '<a class="btn btn-primary" href="#pruefung-' + k.id + '">' + T("Alle Lektionen erledigt: zur Abschlussprüfung", "All lessons done: go to the final exam") + "</a>";
    else if (canNext) html += '<a class="btn btn-primary" href="#lektion-' + k.id + "-" + nxt.lektion.id + '">' + T("Nächste Lektion: ", "Next lesson: ") + esc(nxt.lektion.titel) + "</a>";
    else if (!hasAccess(k)) html += '<a class="btn btn-primary" href="#kurs-' + k.id + '">' + T("Kurs freischalten und weiterlernen", "Unlock the course to continue") + "</a>";
    html += '<a class="btn btn-ghost" href="#kurs-' + k.id + '">' + T("Zur Kursübersicht", "Course overview") + "</a></div></div>";
    show(html);
    window.scrollTo(0, 0);
  }

  /* Rückmeldung zu Aufgaben */
  function feedback(stage, ok, text, extra) {
    var fb = $(".ak-fb", stage);
    if (!fb) { fb = document.createElement("div"); fb.className = "ak-fb"; fb.setAttribute("aria-live", "polite"); stage.appendChild(fb); }
    fb.className = "ak-fb " + (ok ? "is-ok" : "is-bad");
    fb.innerHTML = '<p class="ak-fb-h">' + (ok ? T("Richtig.", "Correct.") : T("Noch nicht ganz.", "Not quite.")) + "</p>" + (text ? fmt(text) : "") + (extra || "");
    return fb;
  }
  /* Gemeinsames Muster: prüfen, bei Fehler erneut versuchen oder Lösung zeigen */
  function gradable(stage, opts) {
    var tries = 0;
    var actions = document.createElement("div"); actions.className = "actions ak-check";
    actions.innerHTML = '<button type="button" class="btn btn-primary" data-a="check">' + T("Prüfen", "Check") + "</button>";
    stage.appendChild(actions);
    function solved(firstTry, viaReveal) {
      opts.lock();
      actions.innerHTML = "";
      feedback(stage, !viaReveal, (viaReveal ? T("Die richtige Lösung ist jetzt markiert.", "The correct answer is now marked.") + "\n\n" : "") + (opts.explain || ""));
      if (viaReveal) $(".ak-fb", stage).className = "ak-fb is-info";
      opts.done(firstTry);
    }
    if (opts.already) { opts.reveal(); solved(undefined, true); $(".ak-fb", stage).className = "ak-fb is-info"; return; }
    actions.addEventListener("click", function (ev) {
      var a = ev.target.closest("button"); if (!a) return;
      if (a.dataset.a === "check") {
        if (!opts.ready()) { feedback(stage, false, opts.notReady || T("Bitte beantworten Sie die Aufgabe vollständig.", "Please complete the exercise.")); return; }
        tries++;
        if (opts.check()) { solved(tries === 1, false); }
        else {
          opts.markWrong && opts.markWrong();
          feedback(stage, false, T("Prüfen Sie Ihre Auswahl und versuchen Sie es erneut.", "Check your answer and try again."));
          if (!$('[data-a="reveal"]', actions)) actions.insertAdjacentHTML("beforeend", '<button type="button" class="btn btn-ghost" data-a="reveal">' + T("Lösung anzeigen", "Show answer") + "</button>");
        }
      } else if (a.dataset.a === "reveal") { opts.reveal(); solved(false, true); }
    });
  }

  var RENDER = {
    text: function (s, st, done) {
      st.innerHTML = '<div class="ak-text">' + (s.titel ? "<h2>" + esc(s.titel) + "</h2>" : "") + fmt(s.text) + "</div>";
      done();
    },
    merke: function (s, st, done) {
      st.innerHTML = '<figure class="ak-merke"><span class="eyebrow">' + T("Merke", "Key point") + "</span><blockquote>" + fmt(s.text) + "</blockquote>" + (s.quelle ? "<figcaption>" + esc(s.quelle) + "</figcaption>" : "") + "</figure>";
      done();
    },
    karten: function (s, st, done) {
      st.innerHTML = '<div class="ak-text"><h2>' + esc(s.titel || T("Lernkarten", "Flashcards")) + '</h2><p class="muted small">' + T("Tippen Sie auf eine Karte, um sie umzudrehen.", "Tap a card to turn it over.") + '</p></div><div class="ak-cards">' +
        s.karten.map(function (c, i) { return '<button type="button" class="ak-flip" data-i="' + i + '" aria-pressed="false"><span class="ak-front">' + inline(c.vorne) + '</span><span class="ak-back">' + inline(c.hinten) + "</span></button>"; }).join("") + "</div>";
      st.addEventListener("click", function (ev) {
        var b = ev.target.closest(".ak-flip"); if (!b) return;
        b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
      });
      done();
    },
    reflexion: function (s, st, done) {
      var key = player.k.id + ":" + player.l.id + ":" + player.i;
      st.innerHTML = '<div class="ak-text"><span class="eyebrow">' + T("Reflexion", "Reflection") + "</span><h2>" + esc(s.frage) + "</h2>" + (s.hinweis ? '<div class="muted">' + fmt(s.hinweis) + "</div>" : "") + "</div>" +
        '<div class="field"><label for="ak-refl">' + T("Ihre Notizen (werden nur in Ihrem Browser gespeichert)", "Your notes (stored only in your browser)") + '</label><textarea id="ak-refl" rows="6"></textarea></div>';
      var ta = $("#ak-refl", st); ta.value = load().reflexion[key] || "";
      ta.addEventListener("input", function () { load().reflexion[key] = ta.value; save(); });
      done();
    },
    mc: function (s, st, done, already) { choice(s, st, done, already, false); },
    fall: function (s, st, done, already) { choice(s, st, done, already, false); },
    multi: function (s, st, done, already) { choice(s, st, done, already, true); },
    truefalse: function (s, st, done, already) {
      var t = { frage: s.aussage, optionen: [T("Richtig", "True"), T("Falsch", "False")], richtig: s.richtig ? 0 : 1, erklaerung: s.erklaerung, _tf: true };
      choice(t, st, done, already, false);
    },
    luecke: function (s, st, done, already) {
      var gaps = [], html = "", re = /\{\{(.+?)\}\}/g, last = 0, mm;
      while ((mm = re.exec(s.text))) {
        html += esc(s.text.slice(last, mm.index));
        var opts = mm[1].split("|").map(function (x) { return x.trim(); });
        var gi = gaps.length; gaps.push(opts[0]);
        html += '<select class="ak-gap" data-i="' + gi + '" aria-label="' + T("Lücke ", "Gap ") + (gi + 1) + '"><option value="">…</option>' + shuffle(opts).map(function (o) { return "<option>" + esc(o) + "</option>"; }).join("") + "</select>";
        last = re.lastIndex;
      }
      html += esc(s.text.slice(last));
      st.innerHTML = '<div class="ak-text"><span class="eyebrow">' + T("Lückentext", "Fill in the gaps") + '</span><p class="ak-cloze">' + html + "</p></div>";
      var sels = $$(".ak-gap", st);
      gradable(st, {
        already: already, explain: s.erklaerung,
        ready: function () { return sels.every(function (x) { return x.value; }); },
        check: function () { return sels.every(function (x, i) { return x.value === gaps[i]; }); },
        markWrong: function () { sels.forEach(function (x, i) { x.classList.toggle("is-bad", x.value !== gaps[i]); }); },
        reveal: function () { sels.forEach(function (x, i) { $$("option", x).forEach(function (o) { if (o.textContent === gaps[i]) x.value = o.value; }); }); },
        lock: function () { sels.forEach(function (x) { x.disabled = true; x.classList.remove("is-bad"); x.classList.add("is-ok"); }); },
        done: done
      });
    },
    reihenfolge: function (s, st, done, already) {
      var order = s.elemente.map(function (_, i) { return i; });
      var cur = shuffle(order);
      for (var t = 0; t < 5 && cur.join() === order.join(); t++) cur = shuffle(order);
      st.innerHTML = '<div class="ak-text"><span class="eyebrow">' + T("Reihenfolge", "Sequence") + "</span><h2>" + esc(s.frage) + '</h2><p class="muted small">' + T("Ordnen Sie die Elemente mit den Pfeiltasten.", "Use the arrow buttons to put the items in order.") + '</p></div><ol class="ak-order"></ol>';
      var ol = $(".ak-order", st), locked = false;
      function draw() {
        ol.innerHTML = cur.map(function (idx, pos) {
          return '<li><span class="ak-ord-t">' + inline(s.elemente[idx]) + '</span><span class="ak-ord-b"><button type="button" data-m="-1" data-p="' + pos + '" aria-label="' + T("Nach oben", "Move up") + '"' + (pos === 0 || locked ? " disabled" : "") + '>↑</button><button type="button" data-m="1" data-p="' + pos + '" aria-label="' + T("Nach unten", "Move down") + '"' + (pos === cur.length - 1 || locked ? " disabled" : "") + ">↓</button></span></li>";
        }).join("");
      }
      ol.addEventListener("click", function (ev) {
        var b = ev.target.closest("button"); if (!b || locked) return;
        var p = +b.dataset.p, q = p + +b.dataset.m;
        var t = cur[p]; cur[p] = cur[q]; cur[q] = t; draw();
        var nb = $('button[data-p="' + q + '"][data-m="' + b.dataset.m + '"]', ol) || $('button[data-p="' + q + '"]', ol); if (nb) nb.focus();
      });
      draw();
      gradable(st, {
        already: already, explain: s.erklaerung,
        ready: function () { return true; },
        check: function () { return cur.join() === order.join(); },
        markWrong: function () { $$("li", ol).forEach(function (li, i) { li.classList.toggle("is-bad", cur[i] !== i); }); },
        reveal: function () { cur = order.slice(); draw(); },
        lock: function () { locked = true; draw(); $$("li", ol).forEach(function (li) { li.classList.add("is-ok"); }); },
        done: done
      });
    },
    zuordnen: function (s, st, done, already) {
      var seenR = {}, rights = shuffle(s.paare.map(function (p, i) { return i; }).filter(function (i) { var t = s.paare[i][1]; if (seenR[t]) return false; seenR[t] = true; return true; }));
      st.innerHTML = '<div class="ak-text"><span class="eyebrow">' + T("Zuordnung", "Matching") + "</span><h2>" + esc(s.frage) + '</h2></div><div class="ak-match">' +
        s.paare.map(function (p, i) {
          return '<div class="ak-match-row"><span class="ak-match-l">' + inline(p[0]) + '</span><select data-i="' + i + '" aria-label="' + T("Zuordnung für ", "Match for ") + esc(p[0]) + '"><option value="">' + T("Bitte wählen …", "Please choose …") + "</option>" +
            rights.map(function (r) { return '<option value="' + r + '">' + esc(s.paare[r][1]) + "</option>"; }).join("") + "</select></div>";
        }).join("") + "</div>";
      var sels = $$(".ak-match select", st);
      gradable(st, {
        already: already, explain: s.erklaerung,
        ready: function () { return sels.every(function (x) { return x.value !== ""; }); },
        check: function () { return sels.every(function (x) { return s.paare[+x.value][1] === s.paare[+x.dataset.i][1]; }); },
        markWrong: function () { sels.forEach(function (x) { x.classList.toggle("is-bad", s.paare[+x.value][1] !== s.paare[+x.dataset.i][1]); }); },
        reveal: function () { sels.forEach(function (x) { var want = s.paare[+x.dataset.i][1]; rights.forEach(function (r) { if (s.paare[r][1] === want) x.value = r; }); }); },
        lock: function () { sels.forEach(function (x) { x.disabled = true; x.classList.remove("is-bad"); x.classList.add("is-ok"); }); },
        done: done
      });
    },
    kategorien: function (s, st, done, already) {
      var items = shuffle(s.elemente.map(function (e, i) { return i; }));
      var pick = {};
      st.innerHTML = '<div class="ak-text"><span class="eyebrow">' + T("Einordnen", "Categorize") + "</span><h2>" + esc(s.frage) + '</h2></div><div class="ak-cat">' +
        items.map(function (i) {
          return '<div class="ak-cat-row" data-i="' + i + '"><span>' + inline(s.elemente[i].text) + '</span><span class="ak-cat-b" role="group">' +
            s.kategorien.map(function (c, ci) { return '<button type="button" class="chip" data-c="' + ci + '" aria-pressed="false">' + esc(c) + "</button>"; }).join("") + "</span></div>";
        }).join("") + "</div>";
      var locked = false;
      $(".ak-cat", st).addEventListener("click", function (ev) {
        var b = ev.target.closest("button"); if (!b || locked) return;
        var row = b.closest(".ak-cat-row"); pick[row.dataset.i] = +b.dataset.c;
        $$("button", row).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        row.classList.remove("is-bad");
      });
      gradable(st, {
        already: already, explain: s.erklaerung,
        ready: function () { return Object.keys(pick).length === s.elemente.length; },
        notReady: T("Bitte ordnen Sie jedes Element einer Kategorie zu.", "Please assign every item to a category."),
        check: function () { return s.elemente.every(function (e, i) { return pick[i] === e.kat; }); },
        markWrong: function () { $$(".ak-cat-row", st).forEach(function (r) { r.classList.toggle("is-bad", pick[r.dataset.i] !== s.elemente[r.dataset.i].kat); }); },
        reveal: function () { $$(".ak-cat-row", st).forEach(function (r) { var k = s.elemente[r.dataset.i].kat; pick[r.dataset.i] = k; $$("button", r).forEach(function (x) { x.setAttribute("aria-pressed", +x.dataset.c === k ? "true" : "false"); }); }); },
        lock: function () { locked = true; $$(".ak-cat-row", st).forEach(function (r) { r.classList.remove("is-bad"); r.classList.add("is-ok"); }); $$(".ak-cat button", st).forEach(function (x) { x.disabled = true; }); },
        done: done
      });
    },
    dialog: function (s, st, done, already) {
      st.innerHTML = '<div class="ak-text"><span class="eyebrow">' + T("Gesprächssimulation", "Conversation simulation") + "</span><h2>" + esc(s.titel) + '</h2><div class="muted">' + fmt(s.einleitung) + '</div></div><div class="ak-chat" aria-live="polite"></div>';
      var chat = $(".ak-chat", st), r = 0, firstAll = true;
      function bubble(cls, html) { var d = document.createElement("div"); d.className = "ak-bubble " + cls; d.innerHTML = html; chat.appendChild(d); return d; }
      function round() {
        var R = s.runden[r];
        bubble("is-client", '<span class="ak-who">' + T("Ratsuchende Person", "Client") + "</span>" + inline(R.klient));
        var box = document.createElement("div"); box.className = "ak-replies";
        box.innerHTML = '<p class="small muted">' + T("Wie antworten Sie?", "How do you respond?") + "</p>" + R.antworten.map(function (a, i) { return '<button type="button" class="ak-opt" data-i="' + i + '">' + inline(a.text) + "</button>"; }).join("");
        chat.appendChild(box);
        var wrong = false;
        box.addEventListener("click", function (ev) {
          var b = ev.target.closest(".ak-opt"); if (!b || b.disabled) return;
          var a = R.antworten[+b.dataset.i];
          var old = $(".ak-fb", box); if (old) old.remove();
          var fb = document.createElement("div"); fb.className = "ak-fb " + (a.gut ? "is-ok" : "is-bad");
          fb.innerHTML = '<p class="ak-fb-h">' + (a.gut ? T("Passende Antwort.", "Good response.") : T("Ungünstige Antwort.", "Unhelpful response.")) + "</p>" + fmt(a.feedback);
          box.appendChild(fb);
          if (!a.gut) { wrong = true; b.disabled = true; b.classList.add("is-bad"); return; }
          if (wrong) firstAll = false;
          $$(".ak-opt", box).forEach(function (x) { x.disabled = true; });
          b.classList.add("is-ok");
          var me = bubble("is-me", '<span class="ak-who">' + T("Sie", "You") + "</span>" + inline(a.text));
          box.parentNode.insertBefore(me, box.nextSibling);
          r++;
          if (r < s.runden.length) { var nb = document.createElement("button"); nb.type = "button"; nb.className = "btn btn-ghost ak-continue"; nb.textContent = T("Gespräch fortsetzen", "Continue the conversation"); chat.appendChild(nb); nb.addEventListener("click", function () { nb.remove(); round(); }); }
          else { bubble("is-end", T("Ende der Simulation. ", "End of simulation. ") + (firstAll ? T("Sie haben in jeder Runde direkt eine passende Antwort gewählt.", "You chose a good response straight away in every round.") : T("Lesen Sie die Rückmeldungen zu den ungünstigen Antworten noch einmal in Ruhe.", "Take a moment to reread the feedback on the unhelpful responses."))); done(firstAll); }
        });
      }
      if (already) {
        s.runden.forEach(function (R) {
          bubble("is-client", '<span class="ak-who">' + T("Ratsuchende Person", "Client") + "</span>" + inline(R.klient));
          var g = R.antworten.filter(function (a) { return a.gut; })[0];
          bubble("is-me", '<span class="ak-who">' + T("Sie", "You") + "</span>" + inline(g.text) + '<div class="small muted" style="margin-top:6px">' + inline(g.feedback) + "</div>");
        });
        done();
      } else round();
    }
  };

  function choice(s, st, done, already, multi) {
    var correct = multi ? s.richtig.slice() : [s.richtig];
    var order = s._tf ? [0, 1] : shuffle(s.optionen.map(function (_, i) { return i; }));
    var head = "";
    if (s.fall) head = '<div class="ak-case"><span class="eyebrow">' + esc(s.titel || T("Fallvignette", "Case vignette")) + "</span>" + fmt(s.fall) + "</div>";
    var label = s._tf ? T("Richtig oder falsch?", "True or false?") : multi ? T("Mehrere Antworten können richtig sein.", "More than one answer may be correct.") : s.fall ? T("Fallfrage", "Case question") : T("Eine Antwort ist richtig.", "One answer is correct.");
    st.innerHTML = head + '<div class="ak-text"><span class="eyebrow">' + label + "</span><h2>" + inline(s.frage) + '</h2></div><div class="ak-opts' + (s._tf ? " is-tf" : "") + '" role="' + (multi ? "group" : "radiogroup") + '">' +
      order.map(function (i) { return '<button type="button" class="ak-opt" data-i="' + i + '" role="' + (multi ? "checkbox" : "radio") + '" aria-checked="false">' + inline(s.optionen[i]) + "</button>"; }).join("") + "</div>";
    var sel = {}, locked = false, box = $(".ak-opts", st);
    box.addEventListener("click", function (ev) {
      var b = ev.target.closest(".ak-opt"); if (!b || locked) return;
      var i = +b.dataset.i;
      if (multi) sel[i] = !sel[i]; else { sel = {}; sel[i] = true; }
      $$(".ak-opt", box).forEach(function (x) { x.setAttribute("aria-checked", sel[+x.dataset.i] ? "true" : "false"); x.classList.remove("is-bad"); });
    });
    function chosen() { return Object.keys(sel).filter(function (k) { return sel[k]; }).map(Number).sort(); }
    gradable(st, {
      already: already, explain: s.erklaerung,
      ready: function () { return chosen().length > 0; },
      notReady: T("Bitte wählen Sie eine Antwort.", "Please choose an answer."),
      check: function () { return chosen().join() === correct.slice().sort().join(); },
      markWrong: function () { $$(".ak-opt", box).forEach(function (x) { var i = +x.dataset.i; x.classList.toggle("is-bad", !!sel[i] && correct.indexOf(i) < 0); }); },
      reveal: function () { sel = {}; correct.forEach(function (i) { sel[i] = true; }); },
      lock: function () {
        locked = true;
        $$(".ak-opt", box).forEach(function (x) {
          var i = +x.dataset.i; x.disabled = true; x.classList.remove("is-bad");
          x.setAttribute("aria-checked", correct.indexOf(i) >= 0 ? "true" : "false");
          if (correct.indexOf(i) >= 0) x.classList.add("is-ok");
        });
      },
      done: done
    });
  }

  /* ---------- Abschlussprüfung ---------- */
  function renderPruefung(k) {
    if (!hasAccess(k)) { renderKurs(k); return; }
    k = kv(k);
    if (nextLesson(k)) {
      show('<header class="page-head"><p class="eyebrow"><a href="#kurs-' + k.id + '">' + esc(k.titel) + "</a></p><h1>" + T("Abschlussprüfung", "Final exam") + '</h1><p class="lead">' + T("Die Prüfung wird freigeschaltet, sobald Sie alle Lektionen abgeschlossen haben.", "The exam is unlocked once you have completed all lessons.") + "</p>" + bar(progress(k), T("Fortschritt", "Progress")) + '<p class="small muted">' + Math.round(progress(k) * 100) + T(" % abgeschlossen", " % completed") + '</p><div class="actions"><a class="btn btn-primary" href="#lektion-' + k.id + "-" + nextLesson(k).lektion.id + '">' + T("Weiterlernen", "Continue learning") + "</a></div></header>");
      return;
    }
    var pool = [];
    moduleOf(k).forEach(function (m) { (m.pruefung || []).forEach(function (q) { pool.push({ q: q, m: m }); }); });
    var rnd = seeded(Date.now() % 2147483647);
    // gleichmäßig über Module verteilen
    var byMod = {}; pool.forEach(function (x) { (byMod[x.m.id] = byMod[x.m.id] || []).push(x); });
    Object.keys(byMod).forEach(function (id) { byMod[id] = shuffle(byMod[id], rnd); });
    var picked = [], ids = Object.keys(byMod), n = Math.min(k.pruefungFragen, pool.length), r = 0;
    while (picked.length < n) { var id = ids[r % ids.length]; if (byMod[id].length) picked.push(byMod[id].shift()); r++; if (r > 10000) break; }
    picked = shuffle(picked, rnd);
    var html = '<header class="page-head"><p class="eyebrow"><a href="#kurs-' + k.id + '">' + esc(k.titel) + "</a></p><h1>" + T("Abschlussprüfung", "Final exam") + '</h1><p class="lead">' + picked.length + T(" Fragen aus ", " questions from ") + ids.length + T(" Modulen. Bestanden ab ", " modules. Pass mark: ") + Math.round(k.bestehen * 100) + T(" Prozent richtiger Antworten. Eine Mehrfachauswahlfrage gilt nur als richtig, wenn genau alle richtigen Optionen gewählt sind.", " percent correct answers. A multiple-choice question only counts as correct if exactly all correct options are selected.") + "</p></header>";
    html += '<form id="ak-exam" class="ak-exam" novalidate>';
    picked.forEach(function (x, qi) {
      var q = x.q, multi = q.typ === "multi", tf = q.typ === "truefalse";
      var opts = tf ? [T("Richtig", "True"), T("Falsch", "False")] : q.optionen;
      var ord = tf ? [0, 1] : shuffle(opts.map(function (_, i) { return i; }), rnd);
      html += '<fieldset class="ak-q" data-q="' + qi + '"><legend><span class="mono muted">' + T("Frage ", "Question ") + (qi + 1) + T(" · Modul ", " · Module ") + esc(x.m.id) + (multi ? T(" · Mehrfachauswahl", " · multiple choice") : "") + "</span><br>" + inline(tf ? q.aussage : q.frage) + "</legend>" +
        ord.map(function (i) { return '<label class="ak-q-opt"><input type="' + (multi ? "checkbox" : "radio") + '" name="q' + qi + '" value="' + i + '"> <span>' + inline(opts[i]) + "</span></label>"; }).join("") + "</fieldset>";
    });
    html += '<p class="error" id="ak-exam-err" hidden></p><div class="actions"><button class="btn btn-primary" type="submit">' + T("Prüfung abgeben", "Submit exam") + "</button></div></form>";
    show(html);
    var confirmPending = false;
    $("#ak-exam").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var open = picked.filter(function (_, qi) { return !$$('input[name="q' + qi + '"]:checked').length; }).length;
      if (open && !confirmPending) {
        confirmPending = true;
        var e = $("#ak-exam-err"); e.hidden = false; e.textContent = open + (open === 1 ? T(" Frage ist", " question is") : T(" Fragen sind", " questions are")) + T(" noch unbeantwortet und werden als falsch gewertet. Klicken Sie erneut auf „Prüfung abgeben“, um trotzdem abzugeben.", " still unanswered and will be marked wrong. Click “Submit exam” again to submit anyway.");
        return;
      }
      var right = 0, review = [];
      picked.forEach(function (x, qi) {
        var q = x.q;
        var corr = q.typ === "multi" ? q.richtig.slice().sort().join() : String(q.typ === "truefalse" ? (q.richtig ? 0 : 1) : q.richtig);
        var got = $$('input[name="q' + qi + '"]:checked').map(function (i) { return +i.value; }).sort().join();
        var ok = got === corr; if (ok) right++;
        var fs = $('fieldset[data-q="' + qi + '"]'); fs.classList.add(ok ? "is-ok" : "is-bad");
        $$("input", fs).forEach(function (i) { i.disabled = true; if (corr.split(",").indexOf(i.value) >= 0) i.parentNode.classList.add("is-right"); });
        if (!ok && q.erklaerung) fs.insertAdjacentHTML("beforeend", '<div class="ak-fb is-info">' + fmt(q.erklaerung) + "</div>");
      });
      var pct = Math.round(right / picked.length * 100), passed = pct >= k.bestehen * 100;
      var st = load().pruefung[k.id] = load().pruefung[k.id] || { versuche: 0 };
      st.versuche++; st.last = pct; st.best = Math.max(st.best || 0, pct);
      if (passed) { st.passed = true; st.datum = st.datum || new Date().toISOString().slice(0, 10); }
      save();
      $("#ak-exam-err").hidden = true;
      $(".ak-exam .actions").remove();
      var res = '<div class="ak-result ' + (passed ? "is-ok" : "is-bad") + '"><p class="eyebrow">' + (passed ? T("Bestanden", "Passed") : T("Nicht bestanden", "Not passed")) + "</p><p class=\"ak-score\">" + pct + ' %</p><p>' + right + T(" von ", " of ") + picked.length + T(" Fragen richtig. ", " questions correct. ") + (passed ? T("Herzlichen Glückwunsch. Ihr Zertifikat ist freigeschaltet.", "Congratulations. Your certificate is now unlocked.") : T("Zum Bestehen sind ", "To pass you need ") + Math.round(k.bestehen * 100) + T(" Prozent erforderlich. Die richtigen Antworten sind unten markiert. Sie können die Prüfung jederzeit mit neu zusammengestellten Fragen wiederholen.", " percent. The correct answers are marked below. You can retake the exam at any time with a new set of questions.")) + '</p><div class="actions">' +
        (passed || st.passed ? '<a class="btn btn-primary" href="#zertifikat-' + k.id + '">' + T("Zertifikat erstellen", "Create certificate") + "</a>" : "") +
        '<button type="button" class="btn btn-ghost" id="ak-retry">' + T("Prüfung neu starten", "Restart exam") + '</button><a class="btn btn-ghost" href="#kurs-' + k.id + '">' + T("Zur Kursübersicht", "Course overview") + "</a></div></div>";
      root().insertAdjacentHTML("afterbegin", res);
      $("#ak-retry").addEventListener("click", function () { renderPruefung(k); window.scrollTo(0, 0); });
      window.scrollTo(0, 0);
    });
  }

  /* ---------- Zertifikat ---------- */
  function certData(k, name) {
    var c = load().zertifikate[k.id];
    if (c && c.name === name) { if (!c.iso) { c.iso = new Date().toISOString().slice(0, 10); save(); } return c; }
    var ex = load().pruefung[k.id];
    var datum = new Date();
    var h = hash(name + "|" + k.id + "|" + datum.toISOString().slice(0, 10)).toString(36).toUpperCase();
    while (h.length < 7) h = "0" + h;
    var h2 = hash(h + name).toString(36).toUpperCase();
    while (h2.length < 7) h2 = "0" + h2;
    c = {
      name: name,
      datum: datum.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" }),
      iso: datum.toISOString().slice(0, 10),
      nr: "ISP-" + k.kuerzel + "-" + datum.getFullYear() + "-" + h.slice(0, 6),
      pruef: h2.slice(0, 4) + "-" + h2.slice(4, 7) + h.slice(6, 7),
      score: ex ? ex.best : 0
    };
    load().zertifikate[k.id] = c; save();
    return c;
  }

  function renderZertifikat(k) {
    k = kv(k);
    var ex = load().pruefung[k.id];
    if (!hasAccess(k) || !ex || !ex.passed) {
      show('<header class="page-head"><p class="eyebrow"><a href="#kurs-' + k.id + '">' + esc(k.titel) + "</a></p><h1>" + T("Zertifikat", "Certificate") + '</h1><p class="lead">' + T("Das Zertifikat wird freigeschaltet, sobald Sie alle Lektionen abgeschlossen und die Abschlussprüfung bestanden haben.", "The certificate is unlocked once you have completed all lessons and passed the final exam.") + '</p><div class="actions"><a class="btn btn-primary" href="#kurs-' + k.id + '">' + T("Zur Kursübersicht", "Course overview") + "</a></div></header>");
      return;
    }
    var c = load().zertifikate[k.id];
    var framed = false; try { framed = window.self !== window.top; } catch (e) { framed = true; }
    var html = '<header class="page-head"><p class="eyebrow"><a href="#kurs-' + k.id + '">' + esc(k.titel) + "</a></p><h1>" + T("Ihr Zertifikat", "Your certificate") + "</h1>" +
      '<p class="lead">' + T("Bitte geben Sie Ihren Namen so ein, wie er auf dem Zertifikat stehen soll. Nach der Ausstellung ist der Name mit der Zertifikatsnummer verknüpft. Das Zertifikat wird in der gewählten Sprache ausgestellt.", "Please enter your name exactly as it should appear on the certificate. Once issued, the name is linked to the certificate number. The certificate is issued in the language currently selected.") + "</p></header>" +
      '<form id="ak-cert-form" class="ak-cert-form"><div class="field"><label for="ak-cert-name">' + T("Vollständiger Name, ggf. mit akademischem Grad", "Full name, with academic degree if applicable") + '</label><input id="ak-cert-name" autocomplete="name" value="' + esc(c ? c.name : load().name || "") + '"></div><button class="btn btn-primary" type="submit">' + (c ? T("Zertifikat aktualisieren", "Update certificate") : T("Zertifikat ausstellen", "Issue certificate")) + '</button></form><p class="error" id="ak-cert-err" hidden></p>' +
      '<div id="ak-cert-out" class="ak-cert-out"></div>';
    show(html);
    function produce(name) {
      var cd = certData(k, name);
      var canvas = document.createElement("canvas");
      drawCertificate(canvas, k, cd);
      var url = canvas.toDataURL("image/png");
      var out = $("#ak-cert-out");
      out.innerHTML = '<img class="ak-cert-img" alt="' + T("Zertifikat ", "Certificate ") + esc(k.zertifikatTitel) + T(" für ", " for ") + esc(cd.name) + '" src="' + url + '">' +
        '<dl class="facts ak-cert-facts"><div><dt>' + T("Zertifikatsnummer", "Certificate number") + '</dt><dd class="mono">' + esc(cd.nr) + "</dd></div><div><dt>" + T("Prüfcode", "Verification code") + '</dt><dd class="mono">' + esc(cd.pruef) + "</dd></div><div><dt>" + T("Ausgestellt am", "Issued on") + "</dt><dd>" + esc(fmtDate(cd.iso, cd.datum)) + "</dd></div><div><dt>" + T("Prüfungsergebnis", "Exam result") + "</dt><dd>" + cd.score + " %</dd></div></dl>" +
        (framed ? '<p class="small muted">' + T("Halten Sie das Zertifikatsbild gedrückt oder klicken Sie es mit der rechten Maustaste an, um es zu speichern.", "Long-press or right-click the certificate image to save it.") + "</p>"
          : '<div class="actions"><a class="btn btn-primary" download="' + T("Zertifikat-", "Certificate-") + esc(cd.nr) + '.png" href="' + url + '">' + T("Als Bild speichern (PNG)", "Save as image (PNG)") + '</a><button type="button" class="btn btn-ghost" id="ak-print">' + T("Drucken oder als PDF sichern", "Print or save as PDF") + "</button></div>");
      var pb = $("#ak-print"); if (pb) pb.addEventListener("click", function () { document.body.classList.add("print-cert"); window.print(); setTimeout(function () { document.body.classList.remove("print-cert"); }, 500); });
    }
    $("#ak-cert-form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = $("#ak-cert-name").value.trim().replace(/\s+/g, " ");
      if (name.length < 3) { $("#ak-cert-err").hidden = false; $("#ak-cert-err").textContent = T("Bitte geben Sie Ihren vollständigen Namen ein.", "Please enter your full name."); return; }
      $("#ak-cert-err").hidden = true;
      load().name = name; save();
      var go = function () { produce(name); };
      if (document.fonts && document.fonts.load) Promise.all([document.fonts.load('italic 400 80px "Newsreader"'), document.fonts.load('500 80px "Newsreader"'), document.fonts.load('500 30px "IBM Plex Sans"'), document.fonts.load('400 30px "IBM Plex Mono"')]).then(go, go);
      else go();
    });
    if (c) $("#ak-cert-form").dispatchEvent(new Event("submit", { cancelable: true }));
  }

  function drawCertificate(cv, k, c) {
    var W = 3508, H = 2480; // A4 quer, 300 dpi
    cv.width = W; cv.height = H;
    var x = cv.getContext("2d");
    var INK = "#16202a", PETROL = "#1d4d57", BRASS = "#8a6a33", PAPER = "#fbfaf6";
    var SERIF = '"Newsreader", "Iowan Old Style", Georgia, serif', SANS = '"IBM Plex Sans", "Segoe UI", sans-serif', MONO = '"IBM Plex Mono", monospace';

    x.fillStyle = PAPER; x.fillRect(0, 0, W, H);
    // feine Papierstruktur
    var rnd = seeded(hash(c.nr));
    x.globalAlpha = 0.035; x.fillStyle = "#6b5a3a";
    for (var i = 0; i < 9000; i++) x.fillRect(rnd() * W, rnd() * H, 2, 2);
    x.globalAlpha = 1;

    // Guilloche-Rahmen
    function guillocheBand(x0, y0, w, h, amp, waves, color, lines) {
      x.save(); x.strokeStyle = color; x.lineWidth = 1.6;
      var per = 2 * (w + h);
      for (var L = 0; L < lines; L++) {
        x.globalAlpha = 0.55;
        x.beginPath();
        for (var t = 0; t <= per; t += 4) {
          var px, py, nx, ny;
          if (t < w) { px = x0 + t; py = y0; nx = 0; ny = 1; }
          else if (t < w + h) { px = x0 + w; py = y0 + (t - w); nx = -1; ny = 0; }
          else if (t < 2 * w + h) { px = x0 + w - (t - w - h); py = y0 + h; nx = 0; ny = -1; }
          else { px = x0; py = y0 + h - (t - 2 * w - h); nx = 1; ny = 0; }
          var ph = (t / per) * Math.PI * 2 * waves + L * (Math.PI * 2 / lines);
          var off = amp * (1 + Math.sin(ph)) / 2 + amp * 0.35 * Math.sin(ph * 3.0 + L);
          var X = px + nx * off, Y = py + ny * off;
          if (t === 0) x.moveTo(X, Y); else x.lineTo(X, Y);
        }
        x.closePath(); x.stroke();
      }
      x.restore();
    }
    x.strokeStyle = PETROL; x.lineWidth = 10; x.strokeRect(70, 70, W - 140, H - 140);
    guillocheBand(100, 100, W - 200, H - 200, 70, 180, PETROL, 6);
    x.strokeStyle = PETROL; x.lineWidth = 3; x.strokeRect(190, 190, W - 380, H - 380);
    x.strokeStyle = BRASS; x.lineWidth = 2; x.strokeRect(215, 215, W - 430, H - 430);

    // Eckornamente
    [[215, 215, 1, 1], [W - 215, 215, -1, 1], [215, H - 215, 1, -1], [W - 215, H - 215, -1, -1]].forEach(function (o) {
      x.save(); x.translate(o[0], o[1]); x.scale(o[2], o[3]); x.strokeStyle = BRASS; x.lineWidth = 3;
      for (var r = 40; r <= 120; r += 40) { x.beginPath(); x.arc(0, 0, r, 0, Math.PI / 2); x.stroke(); }
      x.fillStyle = BRASS; x.beginPath(); x.arc(0, 0, 14, 0, Math.PI * 2); x.fill();
      x.restore();
    });

    // Wasserzeichen-Rosette
    function rosette(cx, cy, R, petals, color, alpha, lw) {
      x.save(); x.globalAlpha = alpha; x.strokeStyle = color; x.lineWidth = lw;
      for (var j = 0; j < 36; j++) {
        x.beginPath();
        for (var a = 0; a <= Math.PI * 2 + 0.01; a += 0.01) {
          var rr = R * (0.62 + 0.38 * Math.cos(petals * a)) ;
          var X = cx + rr * Math.cos(a + j * Math.PI / 18 / petals * 2), Y = cy + rr * Math.sin(a + j * Math.PI / 18 / petals * 2);
          if (a === 0) x.moveTo(X, Y); else x.lineTo(X, Y);
        }
        x.stroke();
      }
      x.restore();
    }
    rosette(W / 2, H / 2 + 60, 760, 7, PETROL, 0.045, 2);

    x.textAlign = "center"; x.textBaseline = "alphabetic";
    // Logo
    function logo(cx, cy, s, col) {
      x.save(); x.translate(cx, cy); x.scale(s, s);
      x.strokeStyle = col; x.lineWidth = 1.4; x.beginPath(); x.arc(0, 4, 13, 0, Math.PI * 2); x.stroke();
      x.strokeStyle = PETROL; x.lineWidth = 1.8; x.beginPath(); x.moveTo(0, -18); x.lineTo(0, 17); x.stroke();
      x.fillStyle = BRASS; x.beginPath(); x.arc(0, -16, 2.2, 0, Math.PI * 2); x.fill();
      x.restore();
    }
    logo(W / 2, 360, 5.2, INK);
    function spaced(text, cx, y, font, color, spacing) {
      x.font = font; x.fillStyle = color;
      var chars = text.split(""), widths = chars.map(function (ch) { return x.measureText(ch).width; });
      var total = widths.reduce(function (a, b) { return a + b; }, 0) + spacing * (chars.length - 1);
      var px = cx - total / 2; x.textAlign = "left";
      chars.forEach(function (ch, i) { x.fillText(ch, px, y); px += widths[i] + spacing; });
      x.textAlign = "center";
    }
    spaced(T("INSTITUT FÜR SINNZENTRIERTE PSYCHOLOGIE", "INSTITUTE FOR MEANING-CENTERED PSYCHOLOGY"), W / 2, 540, "500 46px " + SANS, INK, 12);
    spaced(T("LOGOTHERAPIE · PSYCHOTHERAPIEFORSCHUNG · WEITERBILDUNG", "LOGOTHERAPY · PSYCHOTHERAPY RESEARCH · PROFESSIONAL TRAINING"), W / 2, 595, "400 30px " + SANS, "#5a6570", 8);

    spaced(T("ZERTIFIKAT", "CERTIFICATE"), W / 2, 800, "500 190px " + SERIF, PETROL, I.lang === "en" ? 30 : 40);
    x.strokeStyle = BRASS; x.lineWidth = 3;
    x.beginPath(); x.moveTo(W / 2 - 420, 865); x.lineTo(W / 2 - 40, 865); x.stroke();
    x.beginPath(); x.moveTo(W / 2 + 40, 865); x.lineTo(W / 2 + 420, 865); x.stroke();
    x.fillStyle = BRASS; x.save(); x.translate(W / 2, 865); x.rotate(Math.PI / 4); x.fillRect(-12, -12, 24, 24); x.restore();

    x.fillStyle = INK; x.font = "400 52px " + SERIF; x.fillText(T("Hiermit wird bestätigt, dass", "This is to certify that"), W / 2, 985);
    // Name, ggf. verkleinern
    var size = 150; x.font = "italic 400 " + size + "px " + SERIF;
    while (x.measureText(c.name).width > W - 900 && size > 70) { size -= 4; x.font = "italic 400 " + size + "px " + SERIF; }
    x.fillStyle = INK; x.fillText(c.name, W / 2, 1135);
    x.strokeStyle = "#c8c2b2"; x.lineWidth = 2; x.beginPath(); x.moveTo(W / 2 - 1000, 1180); x.lineTo(W / 2 + 1000, 1180); x.stroke();

    x.font = "400 50px " + SERIF; x.fillStyle = INK;
    x.fillText(I.lang === "en" ? "has successfully completed the " + (k.id === "grundkurs" ? "introductory course" : "online certificate course") : "den " + (k.id === "grundkurs" ? "Grundkurs" : "Online-Zertifikatskurs"), W / 2, 1270);
    var ts = 92; x.font = "500 " + ts + "px " + SERIF;
    while (x.measureText(k.zertifikatTitel).width > W - 900 && ts > 50) { ts -= 4; x.font = "500 " + ts + "px " + SERIF; }
    x.fillStyle = PETROL; x.fillText(k.zertifikatTitel, W / 2, 1380);
    x.font = "400 50px " + SERIF; x.fillStyle = INK;
    if (I.lang === "en") {
      x.fillText("comprising " + k.ue + " teaching units and has passed the final examination", W / 2, 1470);
      x.fillText("with a score of " + c.score + " percent.", W / 2, 1535);
    } else {
      x.fillText("im Umfang von " + k.ue + " Unterrichtseinheiten erfolgreich abgeschlossen und die", W / 2, 1470);
      x.fillText("Abschlussprüfung mit " + c.score + " Prozent bestanden hat.", W / 2, 1535);
    }

    // Module
    var mods = moduleOf(k).map(function (m) { return m.id + "  " + m.titel; });
    x.font = "400 30px " + SANS; x.fillStyle = "#4a5562";
    var colW = 1250, cols = mods.length > 4 ? 2 : 1, rows = Math.ceil(mods.length / cols);
    spaced(T("INHALTE", "CONTENTS"), W / 2, 1625, "600 26px " + SANS, BRASS, 8);
    x.font = "400 30px " + SANS; x.fillStyle = "#4a5562";
    mods.forEach(function (t, i) {
      var col = Math.floor(i / rows), row = i % rows;
      var cx = cols === 1 ? W / 2 : W / 2 + (col === 0 ? -colW / 2 - 20 : colW / 2 + 20);
      var tt = t; while (x.measureText(tt).width > colW - 40 && tt.length > 10) tt = tt.slice(0, -2);
      if (tt !== t) tt = tt.replace(/\s+\S*$/, "") + " …";
      x.fillText(tt, cx, 1680 + row * 44);
    });

    // Siegel
    var sx = W / 2, sy = 2010, sr = 140;
    x.save();
    x.fillStyle = BRASS; x.beginPath();
    for (var a2 = 0; a2 < Math.PI * 2; a2 += Math.PI / 36) {
      var rr2 = a2 / (Math.PI / 36) % 2 ? sr : sr - 12;
      x.lineTo(sx + rr2 * Math.cos(a2), sy + rr2 * Math.sin(a2));
    }
    x.closePath(); x.fill();
    x.fillStyle = "#a88446"; x.beginPath(); x.arc(sx, sy, sr - 26, 0, Math.PI * 2); x.fill();
    x.strokeStyle = "#f3e7c9"; x.lineWidth = 2; x.beginPath(); x.arc(sx, sy, sr - 34, 0, Math.PI * 2); x.stroke();
    x.beginPath(); x.arc(sx, sy, sr - 78, 0, Math.PI * 2); x.stroke();
    var ring = T("ZERTIFIKAT · INSTITUT FÜR SINNZENTRIERTE PSYCHOLOGIE · ", "CERTIFICATE · INSTITUTE FOR MEANING-CENTERED PSYCHOLOGY · ");
    x.font = "600 20px " + SANS; x.fillStyle = "#fbf3df";
    var step = Math.PI * 2 / ring.length;
    for (var ci = 0; ci < ring.length; ci++) {
      x.save(); x.translate(sx, sy); x.rotate(-Math.PI / 2 + ci * step); x.translate(0, -(sr - 56)); x.fillText(ring[ci], 0, 0); x.restore();
    }
    x.restore();
    x.save(); x.translate(sx, sy); x.scale(2.6, 2.6);
    x.strokeStyle = "#fbf3df"; x.lineWidth = 1.4; x.beginPath(); x.arc(0, 4, 13, 0, Math.PI * 2); x.stroke();
    x.lineWidth = 1.8; x.beginPath(); x.moveTo(0, -18); x.lineTo(0, 17); x.stroke();
    x.fillStyle = "#fbf3df"; x.beginPath(); x.arc(0, -16, 2.2, 0, Math.PI * 2); x.fill();
    x.restore();

    // Unterschriftszeilen
    function sig(cx, label, value) {
      x.strokeStyle = INK; x.lineWidth = 2; x.beginPath(); x.moveTo(cx - 380, 2010); x.lineTo(cx + 380, 2010); x.stroke();
      x.font = "italic 400 44px " + SERIF; x.fillStyle = PETROL; x.fillText(value, cx, 1985);
      x.font = "400 28px " + SANS; x.fillStyle = "#4a5562"; x.fillText(label, cx, 2055);
    }
    sig(820, T("Datum der Ausstellung", "Date of issue"), fmtDate(c.iso, c.datum));
    sig(W - 820, T("Für das Institut · Prüfungsausschuss", "For the Institute · Examination Board"), T("Institut für Sinnzentrierte Psychologie", "Institute for Meaning-Centered Psychology"));

    // Fußzeile
    x.font = "400 26px " + MONO; x.fillStyle = "#4a5562"; x.textAlign = "left";
    x.fillText(T("Zertifikatsnummer  ", "Certificate no.  ") + c.nr, 400, 2180);
    x.textAlign = "right"; x.fillText(T("Prüfcode  ", "Verification code  ") + c.pruef, W - 400, 2180);
    x.textAlign = "center"; x.font = "400 22px " + SANS; x.fillStyle = "#6a737c";
    x.fillText(T("Zertifikat des Instituts. Kein staatlich anerkannter Berufsabschluss; berechtigt nicht zur Ausübung der Heilkunde.", "Certificate of the Institute. Not a state-recognized professional qualification; does not entitle the holder to practice medicine or psychotherapy."), W / 2, 2228);
  }

  /* ---------- Routing ---------- */
  function route(h) {
    if (h === "lernbereich") { renderLernbereich(); return true; }
    var m;
    if ((m = /^kurs-([a-z]+)$/.exec(h)) && KURS[m[1]]) { renderKurs(KURS[m[1]]); return true; }
    if ((m = /^lektion-([a-z]+)-(.+)$/.exec(h)) && KURS[m[1]]) { return renderLektion(KURS[m[1]], m[2]) || (renderKurs(KURS[m[1]]), true); }
    if ((m = /^pruefung-([a-z]+)$/.exec(h)) && KURS[m[1]]) { renderPruefung(KURS[m[1]]); return true; }
    if ((m = /^zertifikat-([a-z]+)$/.exec(h)) && KURS[m[1]]) { renderZertifikat(KURS[m[1]]); return true; }
    return false;
  }

  document.addEventListener("keydown", function (ev) {
    if (!player || !$(".ak-player #ak-next")) return;
    if (ev.key === "Enter" && !/TEXTAREA|SELECT|INPUT|BUTTON|A/.test(document.activeElement.tagName)) { ev.preventDefault(); $("#ak-next").click(); }
  });

  window.AKADEMIE = { route: route, renderKatalog: renderKatalog };
  renderKatalog();
  ISP.route();
})();
