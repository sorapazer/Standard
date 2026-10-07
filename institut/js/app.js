(function () {
  "use strict";

  var KONTAKT = "geschaeftsstelle@sinnzentrierte-psychologie.de";
  var VIEWS = ["start", "institut", "logotherapie", "verfahren", "journal", "lexikon", "weiterbildung"];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function paras(text) {
    return String(text || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p.trim()) + "</p>"; }).join("");
  }
  function slug(s) {
    return "lex-" + String(s).toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function sortKey(s) {
    return String(s).toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss")
      .normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function letterOf(s) {
    var c = sortKey(s).charAt(0).toUpperCase();
    return /[A-Z]/.test(c) ? c : "#";
  }

  /* ---------- Daten vorbereiten ---------- */
  var LEX = (window.LEXIKON || []).slice();
  var seen = {};
  LEX = LEX.filter(function (e) {
    var k = sortKey(e.begriff);
    if (seen[k]) return false;
    seen[k] = true; return true;
  });
  LEX.sort(function (a, b) { return sortKey(a.begriff).localeCompare(sortKey(b.begriff), "de"); });
  var LEX_BY_KEY = {};
  LEX.forEach(function (e) { e.id = slug(e.begriff); LEX_BY_KEY[sortKey(e.begriff)] = e; });
  function findLex(name) { return LEX_BY_KEY[sortKey(name)]; }

  var J = window.JOURNAL || { titel: "Zeitschrift für Sinnzentrierte Psychologie", ausgaben: [], artikel: [] };
  var ART_BY_ID = {};
  J.artikel.forEach(function (a) { ART_BY_ID[a.id] = a; });

  /* ---------- Navigation ---------- */
  function setView(name) {
    $$(".view").forEach(function (v) { v.classList.toggle("active", v.dataset.view === name); });
    $$(".nav a").forEach(function (a) {
      if (a.dataset.nav === name) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    $("#nav").classList.remove("open");
    $("#nav-toggle").setAttribute("aria-expanded", "false");
    var titles = {
      start: "Institut für Sinnzentrierte Psychologie",
      institut: "Leitbild und Arbeitsbereiche",
      logotherapie: "Logotherapie",
      verfahren: "Psychotherapieverfahren im Überblick",
      journal: J.titel,
      lexikon: "Fachlexikon",
      weiterbildung: "Zertifikatskurse",
      akademie: "Online-Akademie"
    };
    document.title = name === "start" ? titles.start : titles[name] + " · Institut für Sinnzentrierte Psychologie";
  }

  function route() {
    var h = decodeURIComponent((location.hash || "#start").slice(1)) || "start";
    if (VIEWS.indexOf(h) >= 0) {
      setView(h);
      if (h === "journal") renderJournalIndex();
      if (h === "weiterbildung" && window.AKADEMIE) window.AKADEMIE.renderKatalog();
      window.scrollTo(0, 0);
      return;
    }
    if (ART_BY_ID[h]) { setView("journal"); renderArticle(ART_BY_ID[h]); window.scrollTo(0, 0); return; }
    if (h.indexOf("lex-") === 0) {
      setView("lexikon");
      var e = LEX.filter(function (x) { return x.id === h; })[0];
      if (e) showEntry(e, true);
      window.scrollTo(0, 0);
      return;
    }
    if (window.AKADEMIE && window.AKADEMIE.route(h)) { window.scrollTo(0, 0); return; }
    var el = document.getElementById(h);
    if (el) {
      var v = el.closest(".view");
      if (v) setView(v.dataset.view);
      requestAnimationFrame(function () { el.scrollIntoView({ block: "start" }); window.scrollBy(0, -90); });
      return;
    }
    setView("start");
  }
  window.addEventListener("hashchange", route);

  $("#nav-toggle").addEventListener("click", function () {
    var open = $("#nav").classList.toggle("open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------- Therapieverfahren ---------- */
  function renderVerfahren() {
    var data = window.VERFAHREN || [];
    var fams = ["Alle"];
    data.forEach(function (v) { if (fams.indexOf(v.familie) < 0) fams.push(v.familie); });
    var current = "Alle";
    var filter = $("#verfahren-filter");
    filter.innerHTML = fams.map(function (f) {
      return '<button type="button" class="chip" aria-pressed="' + (f === "Alle") + '" data-f="' + esc(f) + '">' + esc(f) + "</button>";
    }).join("");
    function draw() {
      $("#verfahren-grid").innerHTML = data.filter(function (v) { return current === "Alle" || v.familie === current; }).map(function (v) {
        var lex = v.lexikon && findLex(v.lexikon);
        return '<article class="method"><header><span class="tag">' + esc(v.familie) + "</span><h3>" + esc(v.name) + '</h3><p class="small muted">' + esc(v.begruender) + "</p></header>" +
          '<dl class="deflist"><dt>Menschenbild</dt><dd>' + esc(v.menschenbild) + "</dd><dt>Vorgehen</dt><dd>" + esc(v.vorgehen) + "</dd><dt>Indikation</dt><dd>" + esc(v.indikation) + "</dd><dt>Forschungsstand</dt><dd>" + esc(v.evidenz) + "</dd></dl>" +
          '<p><span class="status' + (v.richtlinie ? " richtlinie" : "") + '">' + esc(v.status) + "</span></p>" +
          (lex ? '<a href="#' + lex.id + '">Im Lexikon: ' + esc(lex.begriff) + "</a>" : "") + "</article>";
      }).join("");
    }
    filter.addEventListener("click", function (ev) {
      var b = ev.target.closest("button"); if (!b) return;
      current = b.dataset.f;
      $$("button", filter).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      draw();
    });
    draw();
  }

  /* ---------- Zeitschrift ---------- */
  function apa(a) {
    var iss = J.ausgaben.filter(function (x) { return x.id === a.ausgabe; })[0] || {};
    return a.autoren + " (" + iss.jahr + "). " + a.titel + (a.untertitel ? ": " + a.untertitel : "") + ". " + J.titel + ", " + iss.jahrgang + "(" + iss.heft + "), " + a.seiten + ".";
  }
  function issueLabel(iss) { return "Jahrgang " + iss.jahrgang + " · Heft " + iss.heft + " · " + iss.monat + " " + iss.jahr; }

  function journalMast() {
    return '<header class="page-head"><div class="journal-mast"><div><p class="eyebrow">Fachzeitschrift des Instituts</p><h1>' + esc(J.titel) + '</h1></div>' +
      '<p class="mono muted">Erscheint halbjährlich<br>Begutachtet · Open Access</p></div>' +
      '<p class="lead">Die Zeitschrift veröffentlicht Übersichtsarbeiten, theoretische Beiträge, Methodenbeiträge und Rezensionen zu Logotherapie, Existenzpsychologie, Sinnforschung und vergleichender Psychotherapieforschung.</p></header>';
  }

  function renderJournalIndex() {
    var root = $("#journal-root");
    var issues = J.ausgaben.slice().reverse();
    var html = journalMast();
    html += '<div class="section" style="padding-top:0"><div class="section-head"><p class="eyebrow">Ausgaben</p><h2>Alle Hefte</h2></div><div>';
    issues.forEach(function (iss) {
      var arts = J.artikel.filter(function (a) { return a.ausgabe === iss.id; });
      html += '<div class="issue"><div class="issue-meta"><span class="heft">Heft ' + iss.heft + "/" + iss.jahr + '</span><span class="mono muted">Jahrgang ' + iss.jahrgang + " · " + esc(iss.monat) + " " + iss.jahr + '</span><span class="small">Schwerpunkt: ' + esc(iss.schwerpunkt) + '</span></div><ul class="toc-list">';
      arts.forEach(function (a) {
        html += '<li><div><span class="tag">' + esc(a.rubrik) + '</span><br><a class="t" href="#' + a.id + '">' + esc(a.titel) + "</a>" +
          (a.untertitel ? '<div class="small muted">' + esc(a.untertitel) + "</div>" : "") +
          '<div class="small muted">' + esc(a.autoren) + '</div></div><span class="mono muted">S. ' + esc(a.seiten) + "</span></li>";
      });
      html += "</ul></div>";
    });
    html += "</div></div>";
    html += '<div class="section"><div class="split"><div class="prose"><p class="eyebrow">Für Autorinnen und Autoren</p><h2 style="margin-top:0">Hinweise zur Einreichung</h2>' +
      "<p>Die Zeitschrift nimmt deutsch- und englischsprachige Manuskripte zu sinnzentrierter Psychologie, existenziellen Themen in Psychotherapie und Beratung sowie zur vergleichenden Psychotherapieforschung an.</p>" +
      "<ul><li><strong>Rubriken:</strong> Übersichtsarbeit, Originalarbeit, Theoretischer Beitrag, Methodenbeitrag, Praxis und Lehre, Rezension.</li>" +
      "<li><strong>Umfang:</strong> Originalarbeiten und Übersichtsarbeiten bis 8.000 Wörter einschließlich Literatur; Praxisbeiträge bis 5.000 Wörter; Rezensionen bis 1.500 Wörter.</li>" +
      "<li><strong>Form:</strong> Zitation und Literaturverzeichnis nach APA 7; strukturiertes deutsches und englisches Abstract mit je bis zu 250 Wörtern und fünf Schlüsselwörtern.</li>" +
      "<li><strong>Empirische Arbeiten:</strong> Angabe des Ethikvotums, Präregistrierung wird empfohlen, Daten und Analysecode sollen nach Möglichkeit offen zugänglich sein.</li></ul></div>" +
      '<div class="prose"><p class="eyebrow">Begutachtung</p><h2 style="margin-top:0">Redaktionelles Verfahren</h2>' +
      "<p>Jedes Manuskript wird zunächst von der Redaktion auf thematische Passung und formale Vollständigkeit geprüft. Geeignete Beiträge werden im doppelt verblindeten Verfahren von zwei unabhängigen Gutachtenden bewertet. Die Entscheidung über Annahme, Überarbeitung oder Ablehnung trifft die Redaktion auf Grundlage der Gutachten.</p>" +
      "<p>Interessenkonflikte, Finanzierung und der Einsatz generativer KI-Werkzeuge sind bei der Einreichung offenzulegen. Alle Beiträge erscheinen im offenen Zugang unter der Lizenz CC BY 4.0.</p>" +
      '<p>Einreichungen und Anfragen: <span class="mono">' + esc(KONTAKT) + "</span></p></div></div></div>";
    root.innerHTML = html;
  }

  function renderArticle(a) {
    var iss = J.ausgaben.filter(function (x) { return x.id === a.ausgabe; })[0] || {};
    var idx = J.artikel.indexOf(a);
    var prev = J.artikel[idx - 1], next = J.artikel[idx + 1];
    var html = '<div class="page-head"><p class="mono muted"><a href="#journal">' + esc(J.titel) + "</a> · " + esc(issueLabel(iss)) + " · S. " + esc(a.seiten) + "</p>" +
      '<span class="tag">' + esc(a.rubrik) + "</span><h1>" + esc(a.titel) + "</h1>" +
      (a.untertitel ? '<p class="lead">' + esc(a.untertitel) + "</p>" : "") +
      '<p class="muted">' + esc(a.autoren) + "</p></div>";
    html += '<div class="article"><div class="article-body">';
    if (a.abstract) {
      html += '<section class="abstract"><h2 style="margin:0;font-size:1.05rem;font-family:var(--sans);font-weight:600">Zusammenfassung</h2>' + paras(a.abstract) +
        (a.schluesselwoerter ? '<p class="small"><strong>Schlüsselwörter:</strong> ' + esc(a.schluesselwoerter.join(", ")) + "</p>" : "") + "</section>";
    }
    if (a.abstractEn) {
      html += '<section class="abstract" lang="en"><h2 style="margin:0;font-size:1.05rem;font-family:var(--sans);font-weight:600">Abstract</h2>' + paras(a.abstractEn) +
        (a.keywords ? '<p class="small"><strong>Keywords:</strong> ' + esc(a.keywords.join(", ")) + "</p>" : "") + "</section>";
    }
    (a.abschnitte || []).forEach(function (s) {
      html += "<h2>" + esc(s.titel) + "</h2>" + (s.absaetze || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    });
    if (a.literatur && a.literatur.length) {
      html += '<h2>Literatur</h2><ul class="refs">' + a.literatur.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>";
    }
    html += '</div><aside class="article-aside"><div class="panel"><p class="eyebrow">Zitiervorschlag</p><div class="cite-box" id="cite-text">' + esc(apa(a)) + '</div><button type="button" class="btn btn-ghost" id="cite-copy">Zitation kopieren</button></div>' +
      '<div class="panel"><p class="eyebrow">Angaben</p><dl class="facts"><div><dt>Rubrik</dt><dd>' + esc(a.rubrik) + "</dd></div><div><dt>Heft</dt><dd>" + esc(iss.heft + "/" + iss.jahr) + "</dd></div><div><dt>Seiten</dt><dd>" + esc(a.seiten) + "</dd></div><div><dt>Lizenz</dt><dd>CC BY 4.0</dd></div></dl></div>" +
      '<nav class="panel" aria-label="Weitere Beiträge">' + (prev ? '<a href="#' + prev.id + '">← ' + esc(prev.titel) + "</a>" : "") + (next ? '<a href="#' + next.id + '">' + esc(next.titel) + " →</a>" : "") + '<a href="#journal">Alle Ausgaben</a></nav></aside></div>';
    $("#journal-root").innerHTML = html;
    document.title = a.titel + " · " + J.titel;
    $("#cite-copy").addEventListener("click", function () { copyText($("#cite-text").textContent, this, $("#cite-text")); });
  }

  /* ---------- Lexikon ---------- */
  var lexState = { q: "", cat: "Alle", letter: "", current: null };
  function lexFiltered() {
    var q = sortKey(lexState.q.trim());
    return LEX.filter(function (e) {
      if (lexState.cat !== "Alle" && e.kategorie !== lexState.cat) return false;
      if (lexState.letter && letterOf(e.begriff) !== lexState.letter) return false;
      if (q) {
        var hay = sortKey(e.begriff + " " + (e.kurz || "") + " " + (e.text || ""));
        return hay.indexOf(q) >= 0;
      }
      return true;
    }).sort(function (a, b) {
      if (!q) return 0;
      var at = sortKey(a.begriff).indexOf(q), bt = sortKey(b.begriff).indexOf(q);
      if ((at === 0) !== (bt === 0)) return at === 0 ? -1 : 1;
      if ((at >= 0) !== (bt >= 0)) return at >= 0 ? -1 : 1;
      return 0;
    });
  }
  function renderLexControls() {
    var cats = ["Alle"];
    LEX.forEach(function (e) { if (cats.indexOf(e.kategorie) < 0) cats.push(e.kategorie); });
    $("#lex-cats").innerHTML = cats.map(function (c) {
      var n = c === "Alle" ? LEX.length : LEX.filter(function (e) { return e.kategorie === c; }).length;
      return '<button type="button" class="chip" data-c="' + esc(c) + '" aria-pressed="' + (c === lexState.cat) + '">' + esc(c) + ' <span class="mono">' + n + "</span></button>";
    }).join("");
    var letters = {};
    LEX.forEach(function (e) { letters[letterOf(e.begriff)] = true; });
    $("#lex-az").innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function (L) {
      return '<button type="button" data-l="' + L + '"' + (letters[L] ? "" : " disabled") + ' aria-pressed="' + (lexState.letter === L) + '">' + L + "</button>";
    }).join("");
  }
  function renderLexList() {
    var list = lexFiltered();
    $("#lex-count").textContent = list.length === LEX.length ? LEX.length + " Einträge" : list.length + " von " + LEX.length + " Einträgen";
    var html = "", last = "";
    var grouped = !lexState.q.trim();
    list.forEach(function (e) {
      var L = letterOf(e.begriff);
      if (grouped && L !== last) { html += '<li class="lex-letter" aria-hidden="true">' + L + "</li>"; last = L; }
      html += '<li><button type="button" data-id="' + e.id + '"' + (lexState.current === e ? ' aria-current="true"' : "") + '><span class="b">' + esc(e.begriff) + '</span><span class="k">' + esc(e.kategorie) + "</span></button></li>";
    });
    if (!list.length) html = '<li class="muted" style="padding:14px 6px">Kein Eintrag gefunden. Prüfen Sie die Schreibweise oder setzen Sie die Filter zurück.</li>';
    $("#lex-list").innerHTML = html;
    if (!lexState.current && list.length) showEntry(list[0], false);
  }
  function entryHtml(e, compact) {
    var refs = (e.verweise || []).map(function (v) {
      var t = findLex(v);
      return t ? '<a href="#' + t.id + '">' + esc(t.begriff) + "</a>" : null;
    }).filter(Boolean);
    var html = '<span class="tag">' + esc(e.kategorie) + "</span>" + (compact ? "<h3>" : "<h2>") + esc(e.begriff) + (compact ? "</h3>" : "</h2>");
    if (e.kurz) html += '<p class="kurz">' + esc(e.kurz) + "</p>";
    if (compact) return html + '<a href="#' + e.id + '">Eintrag lesen</a>';
    html += '<div class="text">' + paras(e.text) + "</div>";
    if (refs.length) html += '<p><strong>Siehe auch:</strong> ' + refs.join(", ") + "</p>";
    if (e.literatur && e.literatur.length) html += '<div><p class="eyebrow" style="margin-bottom:8px">Literatur</p><ul class="refs">' + e.literatur.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></div>";
    html += '<p class="small muted">Zitiervorschlag: Institut für Sinnzentrierte Psychologie (2026). ' + esc(e.begriff) + ". In <em>Lexikon der Sinnzentrierten Psychologie und Psychotherapie</em>.</p>";
    return html;
  }
  function showEntry(e, fromRoute) {
    lexState.current = e;
    $("#lex-entry").innerHTML = entryHtml(e, false);
    $$("#lex-list button").forEach(function (b) {
      if (b.dataset.id === e.id) { b.setAttribute("aria-current", "true"); if (fromRoute) b.scrollIntoView({ block: "nearest" }); }
      else b.removeAttribute("aria-current");
    });
  }
  function initLexikon() {
    renderLexControls();
    renderLexList();
    $("#lex-q").addEventListener("input", function () { lexState.q = this.value; lexState.letter = ""; renderLexControls(); renderLexList(); });
    $("#lex-search").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var first = lexFiltered()[0];
      if (first) location.hash = first.id;
    });
    $("#lex-cats").addEventListener("click", function (ev) {
      var b = ev.target.closest("button"); if (!b) return;
      lexState.cat = b.dataset.c; renderLexControls(); renderLexList();
    });
    $("#lex-az").addEventListener("click", function (ev) {
      var b = ev.target.closest("button"); if (!b || b.disabled) return;
      lexState.letter = lexState.letter === b.dataset.l ? "" : b.dataset.l;
      lexState.q = ""; $("#lex-q").value = "";
      renderLexControls(); renderLexList();
      var first = lexFiltered()[0]; if (first) showEntry(first, false);
    });
    $("#lex-list").addEventListener("click", function (ev) {
      var b = ev.target.closest("button[data-id]"); if (!b) return;
      if (location.hash === "#" + b.dataset.id) { showEntry(LEX.filter(function (x) { return x.id === b.dataset.id; })[0], false); }
      else location.hash = b.dataset.id;
      if (window.innerWidth < 860) $("#lex-entry").scrollIntoView({ block: "start" });
    });
  }

  /* ---------- Startseite ---------- */
  function initHome() {
    var iss = J.ausgaben[J.ausgaben.length - 1];
    if (iss) {
      $("#home-issue-title").textContent = "Heft " + iss.heft + "/" + iss.jahr + ": " + iss.schwerpunkt;
      $("#home-issue-list").innerHTML = J.artikel.filter(function (a) { return a.ausgabe === iss.id && a.rubrik !== "Editorial"; }).slice(0, 4).map(function (a) {
        return '<li><div><span class="tag">' + esc(a.rubrik) + '</span><br><a class="t" href="#' + a.id + '">' + esc(a.titel) + '</a></div><span class="mono muted">S. ' + esc(a.seiten) + "</span></li>";
      }).join("");
    }
    if (LEX.length) {
      var d = new Date();
      var n = (d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) % LEX.length;
      $("#home-term").innerHTML = '<p class="small muted">Begriff des Tages</p>' + entryHtml(LEX[n], true);
      $("#home-lex-count").textContent = LEX.length + " Einträge in " + LEX.reduce(function (s, e) { if (s.indexOf(e.kategorie) < 0) s.push(e.kategorie); return s; }, []).length + " Fachgebieten";
    }
    $("#home-search").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var q = $("#home-q").value;
      lexState.q = q; lexState.letter = ""; lexState.cat = "Alle"; lexState.current = null;
      $("#lex-q").value = q;
      renderLexControls(); renderLexList();
      location.hash = "lexikon";
    });
  }

  /* ---------- Bewerbung ---------- */
  function copyText(text, btn, selectEl) {
    var done = function () { var o = btn.textContent; btn.textContent = "Kopiert"; setTimeout(function () { btn.textContent = o; }, 1800); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(selectEl);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = "Text markiert, bitte mit Strg+C kopieren";
    };
    try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
  }
  function initFooter() { $("#footer-mail").textContent = KONTAKT; }

  /* ---------- Darstellung ---------- */
  function initTheme() {
    var btn = $("#theme-toggle");
    var stored = null;
    try { stored = localStorage.getItem("isp-theme"); } catch (e) {}
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    function isDark() {
      var t = document.documentElement.getAttribute("data-theme");
      return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    function label() { btn.textContent = isDark() ? "Helle Darstellung" : "Dunkle Darstellung"; }
    btn.addEventListener("click", function () {
      var t = isDark() ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
      try { localStorage.setItem("isp-theme", t); } catch (e) {}
      label();
    });
    label();
  }

  renderVerfahren();
  initLexikon();
  initHome();
  initFooter();
  window.ISP = { setView: setView, copyText: copyText, esc: esc, paras: paras, KONTAKT: KONTAKT, findLex: findLex };
  initTheme();
  window.ISP.route = route;
})();
