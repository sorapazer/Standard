(function () {
  "use strict";

  var KONTAKT = "geschaeftsstelle@sinnzentrierte-psychologie.de";
  var VIEWS = ["start", "institut", "logotherapie", "verfahren", "journal", "lexikon", "weiterbildung"];
  var I = window.I18N;
  var T = function (de, en) { return I.t(de, en); };
  var EN = window.EN || {};

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
  var INST = function () { return T("Institut für Sinnzentrierte Psychologie", "Institute for Meaning-Centered Psychology"); };

  /* ---------- Daten vorbereiten ---------- */
  var LEX = (window.LEXIKON || []).slice();
  var seen = {};
  LEX = LEX.filter(function (e) {
    var k = sortKey(e.begriff);
    if (seen[k]) return false;
    seen[k] = true; return true;
  });
  var LEX_BY_KEY = {};
  LEX.forEach(function (e) { e.id = slug(e.begriff); LEX_BY_KEY[sortKey(e.begriff)] = e; });
  function findLex(name) { return LEX_BY_KEY[sortKey(name)]; }
  var LEX_EN = {};
  (EN.lexikon || []).forEach(function (x) { LEX_EN[x.key] = x; });
  var KAT_EN = {
    "Logotherapie & Existenzanalyse": "Logotherapy & Existential Analysis",
    "Personen": "People",
    "Beratung & Gesprächsführung": "Counseling & Communication",
    "Therapieverfahren & Methoden": "Therapies & Methods",
    "Psychologische Grundbegriffe": "Basic Concepts in Psychology",
    "Klinische Psychologie & Störungsbilder": "Clinical Psychology & Disorders",
    "Forschung, Diagnostik & Methodik": "Research, Assessment & Methods"
  };
  // Anzeige eines Lexikoneintrags in der aktuellen Sprache
  function lx(e) {
    var en = I.lang === "en" && LEX_EN[e.begriff];
    return {
      begriff: en ? en.begriff : e.begriff,
      kurz: en ? en.kurz : e.kurz,
      text: en ? en.text : e.text,
      kategorie: I.lang === "en" ? (KAT_EN[e.kategorie] || e.kategorie) : e.kategorie
    };
  }
  function lexSorted() {
    return LEX.slice().sort(function (a, b) { return sortKey(lx(a).begriff).localeCompare(sortKey(lx(b).begriff), I.lang); });
  }

  var J = window.JOURNAL || { titel: "Zeitschrift für Sinnzentrierte Psychologie", ausgaben: [], artikel: [] };
  var JEN = EN.journal || { artikel: {}, ausgaben: {} };
  var ART_BY_ID = {};
  J.artikel.forEach(function (a) { ART_BY_ID[a.id] = a; });
  var RUBRIK_EN = { "Editorial": "Editorial", "Übersichtsarbeit": "Review", "Originalarbeit": "Original article", "Theoretischer Beitrag": "Theoretical article", "Methodenbeitrag": "Methods article", "Praxis und Lehre": "Practice and teaching", "Rezension": "Book review" };
  var MONAT_EN = { "Januar": "January", "Februar": "February", "März": "March", "April": "April", "Mai": "May", "Juni": "June", "Juli": "July", "August": "August", "September": "September", "Oktober": "October", "November": "November", "Dezember": "December" };
  function jTitel() { return T(J.titel, JEN.titel || "Journal of Meaning-Centered Psychology"); }
  function hasEn(a) { return !!(JEN.artikel && JEN.artikel[a.id]); }
  function art(a) {
    var en = I.lang === "en" && JEN.artikel && JEN.artikel[a.id];
    return {
      titel: en ? en.titel : a.titel,
      untertitel: en ? en.untertitel : a.untertitel,
      abschnitte: en ? en.abschnitte : a.abschnitte,
      rubrik: I.lang === "en" ? (RUBRIK_EN[a.rubrik] || a.rubrik) : a.rubrik
    };
  }
  function iss(a) { return J.ausgaben.filter(function (x) { return x.id === a.ausgabe; })[0] || {}; }
  function issView(i) {
    var en = I.lang === "en" && JEN.ausgaben && JEN.ausgaben[i.id];
    return { monat: I.lang === "en" ? (MONAT_EN[i.monat] || i.monat) : i.monat, schwerpunkt: en ? en.schwerpunkt : i.schwerpunkt };
  }

  /* ---------- Navigation ---------- */
  var currentView = "start";
  function setView(name) {
    currentView = name;
    $$(".view").forEach(function (v) { v.classList.toggle("active", v.dataset.view === name); });
    $$(".nav a").forEach(function (a) {
      if (a.dataset.nav === name) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    $("#nav").classList.remove("open");
    $("#nav-toggle").setAttribute("aria-expanded", "false");
    var titles = {
      institut: T("Leitbild und Arbeitsbereiche", "Mission and Research Areas"),
      logotherapie: T("Logotherapie", "Logotherapy"),
      verfahren: T("Psychotherapieverfahren im Überblick", "Psychotherapies at a Glance"),
      journal: jTitel(),
      lexikon: T("Fachlexikon", "Encyclopedia"),
      weiterbildung: T("Zertifikatskurse", "Certificate Courses"),
      akademie: T("Online-Akademie", "Online Academy")
    };
    document.title = name === "start" ? INST() : titles[name] + " · " + INST();
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
    if (h === "einreichen") { setView("journal"); renderEinreichung(); window.scrollTo(0, 0); return; }
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
      var block = el.closest("[data-lang]");
      // Anker der anderen Sprachfassung auf das Gegenstück umlenken
      if (block && block.getAttribute("data-lang") !== I.lang) {
        var alt = document.getElementById(I.lang === "en" ? "en-" + h : h.replace(/^en-/, ""));
        if (alt) el = alt;
      }
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
  var vfCurrent = 0;
  function renderVerfahren() {
    var de = window.VERFAHREN || [];
    var data = I.lang === "en" && EN.verfahren && EN.verfahren.length === de.length
      ? EN.verfahren.map(function (v, i) { return Object.assign({}, de[i], v); }) : de;
    var fams = [T("Alle", "All")];
    data.forEach(function (v) { if (fams.indexOf(v.familie) < 0) fams.push(v.familie); });
    if (vfCurrent >= fams.length) vfCurrent = 0;
    var filter = $("#verfahren-filter");
    filter.setAttribute("aria-label", T("Nach Verfahrensfamilie filtern", "Filter by family of approaches"));
    filter.innerHTML = fams.map(function (f, i) {
      return '<button type="button" class="chip" aria-pressed="' + (i === vfCurrent) + '" data-i="' + i + '">' + esc(f) + "</button>";
    }).join("");
    $("#verfahren-grid").innerHTML = data.filter(function (v) { return vfCurrent === 0 || v.familie === fams[vfCurrent]; }).map(function (v) {
      var lex = v.lexikon && findLex(v.lexikon);
      return '<article class="method"><header><span class="tag">' + esc(v.familie) + "</span><h3>" + esc(v.name) + '</h3><p class="small muted">' + esc(v.begruender) + "</p></header>" +
        '<dl class="deflist"><dt>' + T("Menschenbild", "Image of the human being") + "</dt><dd>" + esc(v.menschenbild) + "</dd><dt>" + T("Vorgehen", "Procedure") + "</dt><dd>" + esc(v.vorgehen) + "</dd><dt>" + T("Indikation", "Indications") + "</dt><dd>" + esc(v.indikation) + "</dd><dt>" + T("Forschungsstand", "State of research") + "</dt><dd>" + esc(v.evidenz) + "</dd></dl>" +
        '<p><span class="status' + (v.richtlinie ? " richtlinie" : "") + '">' + esc(v.status) + "</span></p>" +
        (lex ? '<a href="#' + lex.id + '">' + T("Im Lexikon: ", "In the encyclopedia: ") + esc(lx(lex).begriff) + "</a>" : "") + "</article>";
    }).join("");
  }
  $("#verfahren-filter").addEventListener("click", function (ev) {
    var b = ev.target.closest("button"); if (!b) return;
    vfCurrent = +b.dataset.i; renderVerfahren();
  });

  /* ---------- Zeitschrift ---------- */
  function apa(a) {
    var i = iss(a);
    var head = (a.autorenApa || a.autoren) + " (" + i.jahr + "). " + a.titel + (a.untertitel ? ": " + a.untertitel : "");
    if (I.lang === "en" && hasEn(a)) {
      var e = JEN.artikel[a.id];
      head += " [" + e.titel + (e.untertitel ? ": " + e.untertitel : "") + "]";
    }
    return head + ". " + J.titel + ", " + i.jahrgang + "(" + i.heft + "), " + a.seiten + ".";
  }
  function pdfOf(a) { return (I.lang === "en" && hasEn(a) ? "pdf/en/" : "pdf/") + a.id + ".pdf"; }
  function heftPdf(i) { return (I.lang === "en" ? "pdf/en/" : "pdf/") + "zsp-" + i.jahr + "-" + i.heft + "-gesamt.pdf"; }
  function issueLabel(i) { var v = issView(i); return T("Jahrgang ", "Volume ") + i.jahrgang + T(" · Heft ", " · Issue ") + i.heft + " · " + v.monat + " " + i.jahr; }
  function pg() { return T("S. ", "pp. "); }

  function journalMast() {
    return '<header class="page-head"><div class="journal-mast"><div><p class="eyebrow">' + T("Fachzeitschrift des Instituts", "The Institute's scholarly journal") + "</p><h1>" + esc(jTitel()) + "</h1>" +
      (I.lang === "en" ? '<p class="muted small">Zeitschrift für Sinnzentrierte Psychologie (ZSP)</p>' : "") + "</div>" +
      '<p class="mono muted">' + T("Erscheint halbjährlich<br>Begutachtet · Open Access", "Published twice a year<br>Peer-reviewed · Open access") + "</p></div>" +
      '<p class="lead">' + T("Die Zeitschrift veröffentlicht Übersichtsarbeiten, theoretische Beiträge, Methodenbeiträge und Rezensionen zu Logotherapie, Existenzpsychologie, Sinnforschung und vergleichender Psychotherapieforschung.",
        "The journal publishes reviews, theoretical articles, methods articles and book reviews on logotherapy, existential psychology, research on meaning and comparative psychotherapy research. Articles appear in German; English translations are provided for all contributions.") + "</p></header>";
  }

  function renderJournalIndex() {
    var root = $("#journal-root");
    var issues = J.ausgaben.slice().reverse();
    var html = journalMast();
    html += '<div class="section" style="padding-top:0"><div class="section-head"><p class="eyebrow">' + T("Ausgaben", "Issues") + "</p><h2>" + T("Alle Hefte", "All issues") + "</h2></div><div>";
    issues.forEach(function (i) {
      var v = issView(i);
      var arts = J.artikel.filter(function (a) { return a.ausgabe === i.id; });
      html += '<div class="issue"><div class="issue-meta"><span class="heft">' + T("Heft ", "Issue ") + i.heft + "/" + i.jahr + '</span><span class="mono muted">' + T("Jahrgang ", "Volume ") + i.jahrgang + " · " + esc(v.monat) + " " + i.jahr + '</span><span class="small">' + T("Schwerpunkt: ", "Focus: ") + esc(v.schwerpunkt) + '</span><a class="pdf-link" href="' + heftPdf(i) + '" download>' + T("Gesamtes Heft als PDF", "Complete issue (PDF)") + '</a></div><ul class="toc-list">';
      arts.forEach(function (a) {
        var x = art(a);
        html += '<li><div><span class="tag">' + esc(x.rubrik) + '</span><br><a class="t" href="#' + a.id + '">' + esc(x.titel) + "</a>" +
          (x.untertitel ? '<div class="small muted">' + esc(x.untertitel) + "</div>" : "") +
          '<div class="small muted">' + esc(a.autoren.replace(" und ", I.lang === "en" ? " and " : " und ")) + '</div></div><span class="toc-side"><span class="mono muted">' + pg() + esc(a.seiten) + '</span><a class="pdf-link" href="' + pdfOf(a) + '" download aria-label="PDF: ' + esc(x.titel) + '">PDF</a></span></li>';
      });
      html += "</ul></div>";
    });
    html += "</div></div>";
    html += '<div class="section"><div class="split"><div class="prose"><p class="eyebrow">' + T("Für Autorinnen und Autoren", "For authors") + '</p><h2 style="margin-top:0">' + T("Hinweise zur Einreichung", "Submission guidelines") + "</h2>" +
      T("<p>Die Zeitschrift nimmt deutsch- und englischsprachige Manuskripte zu sinnzentrierter Psychologie, existenziellen Themen in Psychotherapie und Beratung sowie zur vergleichenden Psychotherapieforschung an.</p>" +
        "<ul><li><strong>Rubriken:</strong> Übersichtsarbeit, Originalarbeit, Theoretischer Beitrag, Methodenbeitrag, Praxis und Lehre, Rezension.</li>" +
        "<li><strong>Umfang:</strong> Originalarbeiten und Übersichtsarbeiten bis 8.000 Wörter einschließlich Literatur; Praxisbeiträge bis 5.000 Wörter; Rezensionen bis 1.500 Wörter.</li>" +
        "<li><strong>Form:</strong> Zitation und Literaturverzeichnis nach APA 7; strukturiertes deutsches und englisches Abstract mit je bis zu 250 Wörtern und fünf Schlüsselwörtern.</li>" +
        "<li><strong>Empirische Arbeiten:</strong> Angabe des Ethikvotums, Präregistrierung wird empfohlen, Daten und Analysecode sollen nach Möglichkeit offen zugänglich sein.</li></ul>",
        "<p>The journal accepts manuscripts in German and English on meaning-centered psychology, existential themes in psychotherapy and counseling, and comparative psychotherapy research.</p>" +
        "<ul><li><strong>Article types:</strong> review, original article, theoretical article, methods article, practice and teaching, book review.</li>" +
        "<li><strong>Length:</strong> original articles and reviews up to 8,000 words including references; practice articles up to 5,000 words; book reviews up to 1,500 words.</li>" +
        "<li><strong>Format:</strong> citations and references in APA 7 style; structured German and English abstracts of up to 250 words each, with five keywords.</li>" +
        "<li><strong>Empirical studies:</strong> statement of ethics approval; preregistration is recommended; data and analysis code should be openly available where possible.</li></ul>") + "</div>" +
      '<div class="prose"><p class="eyebrow">' + T("Begutachtung", "Peer review") + '</p><h2 style="margin-top:0">' + T("Redaktionelles Verfahren", "Editorial process") + "</h2>" +
      T("<p>Jedes Manuskript wird zunächst von der Redaktion auf thematische Passung und formale Vollständigkeit geprüft. Geeignete Beiträge werden im doppelt verblindeten Verfahren von zwei unabhängigen Gutachtenden bewertet. Die Entscheidung über Annahme, Überarbeitung oder Ablehnung trifft die Redaktion auf Grundlage der Gutachten.</p>" +
        "<p>Interessenkonflikte, Finanzierung und der Einsatz generativer KI-Werkzeuge sind bei der Einreichung offenzulegen. Alle Beiträge erscheinen im offenen Zugang unter der Lizenz CC BY 4.0.</p>",
        "<p>Each manuscript is first checked by the editorial office for fit and completeness. Suitable manuscripts are assessed by two independent reviewers in a double-blind process. The editors decide on acceptance, revision or rejection on the basis of the reviews.</p>" +
        "<p>Conflicts of interest, funding and the use of generative AI tools must be disclosed at submission. All articles are published open access under the CC BY 4.0 license.</p>") +
      '<div class="actions"><a class="btn btn-primary" href="#einreichen">' + T("Manuskript einreichen", "Submit a manuscript") + '</a><a class="btn btn-ghost" href="vorlagen/ZSP-Manuskriptvorlage.docx" download>' + T("Manuskriptvorlage (Word)", "Manuscript template (Word)") + "</a></div></div></div></div>";
    root.innerHTML = html;
  }

  function renderEinreichung() {
    var rub = I.lang === "en" ? ["Review", "Original article", "Theoretical article", "Methods article", "Practice and teaching", "Book review"]
      : ["Übersichtsarbeit", "Originalarbeit", "Theoretischer Beitrag", "Methodenbeitrag", "Praxis und Lehre", "Rezension"];
    var html = '<div class="page-head"><p class="mono muted"><a href="#journal">' + esc(jTitel()) + "</a></p><h1>" + T("Manuskript einreichen", "Submit a manuscript") + "</h1>" +
      '<p class="lead">' + T("Reichen Sie Ihren Beitrag in drei Schritten ein: Manuskriptvorlage verwenden, Formular ausfüllen, Unterlagen an die Redaktion senden.", "Submit your article in three steps: use the manuscript template, complete the form and send your documents to the editorial office.") + "</p></div>";
    html += '<div class="article"><div>';
    html += '<ol class="sub-steps">' + T(
      '<li><strong>Vorlage verwenden.</strong> Laden Sie die <a href="vorlagen/ZSP-Manuskriptvorlage.docx" download>Manuskriptvorlage</a> herunter (Word, Arial 11 pt, Zeilenabstand 1,5) und verfassen Sie Ihr Manuskript darin. Es darf keine Angaben enthalten, die auf die Autorinnen und Autoren schließen lassen.</li>' +
      "<li><strong>Formular ausfüllen.</strong> Aus Ihren Angaben entsteht ein vollständiges Einreichungsschreiben mit Eingangsnummer.</li>" +
      '<li><strong>Unterlagen senden.</strong> Senden Sie das Schreiben zusammen mit dem anonymisierten Manuskript und einem separaten Titelblatt an <span class="mono">' + esc(KONTAKT) + "</span>. Die Redaktion bestätigt den Eingang innerhalb von fünf Werktagen.</li>",
      '<li><strong>Use the template.</strong> Download the <a href="vorlagen/ZSP-Manuskriptvorlage.docx" download>manuscript template</a> (Word, Arial 11 pt, line spacing 1.5) and write your manuscript in it. It must not contain any information that identifies the authors.</li>' +
      "<li><strong>Complete the form.</strong> Your details are turned into a complete cover letter with a submission number.</li>" +
      '<li><strong>Send your documents.</strong> Send the letter together with the anonymized manuscript and a separate title page to <span class="mono">' + esc(KONTAKT) + "</span>. The editorial office confirms receipt within five working days.</li>") + "</ol>";
    var checks = I.lang === "en" ? [
      "The manuscript is unpublished and is not currently under review with another journal.",
      "For research involving humans, ethics approval has been obtained and all participants gave informed consent, or the article contains no such research.",
      "Funding and conflicts of interest are disclosed in the “Statements” section of the manuscript.",
      "The use of generative AI tools is disclosed.",
      "I agree that, if accepted, the article will be published open access under the CC BY 4.0 license."
    ] : [
      "Das Manuskript ist unveröffentlicht und wird derzeit keiner anderen Zeitschrift zur Begutachtung vorgelegt.",
      "Bei Forschung mit Menschen liegt ein Ethikvotum vor und alle Teilnehmenden haben informiert eingewilligt, oder der Beitrag enthält keine solche Forschung.",
      "Finanzierung und Interessenkonflikte sind im Abschnitt „Erklärungen“ des Manuskripts offengelegt.",
      "Der Einsatz generativer KI-Werkzeuge ist offengelegt.",
      "Ich bin damit einverstanden, dass der Beitrag bei Annahme im offenen Zugang unter der Lizenz CC BY 4.0 erscheint."
    ];
    html += '<form class="apply" id="sub-form" novalidate>' +
      '<fieldset class="sub-fs"><legend>' + T("Beitrag", "Article") + "</legend>" +
      '<div class="field-row"><div class="field"><label for="s-rubrik">' + T("Rubrik", "Article type") + '</label><select id="s-rubrik">' + rub.map(function (r) { return "<option>" + r + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label for="s-sprache">' + T("Sprache", "Language") + '</label><select id="s-sprache"><option>' + T("Deutsch", "German") + "</option><option>" + T("Englisch", "English") + "</option></select></div></div>" +
      '<div class="field"><label for="s-titel">' + T("Titel", "Title") + '</label><input id="s-titel"></div>' +
      '<div class="field"><label for="s-unter">' + T("Untertitel (optional)", "Subtitle (optional)") + '</label><input id="s-unter"></div>' +
      '<div class="field"><label for="s-abstract">' + T("Zusammenfassung (höchstens 250 Wörter)", "Abstract (250 words maximum)") + '</label><textarea id="s-abstract" rows="7"></textarea><span class="small muted" id="s-abstract-n">0 ' + T("Wörter", "words") + "</span></div>" +
      '<div class="field-row"><div class="field"><label for="s-kw">' + T("Schlüsselwörter (durch Kommata getrennt)", "Keywords (separated by commas)") + '</label><input id="s-kw"></div>' +
      '<div class="field"><label for="s-worte">' + T("Wortzahl des Manuskripts", "Word count of the manuscript") + '</label><input id="s-worte" type="number" min="0" inputmode="numeric"></div></div>' +
      '<div class="field"><label for="s-datei">' + T("Manuskriptdatei (zur Prüfung von Dateiname und Format)", "Manuscript file (to check file name and format)") + '</label><input id="s-datei" type="file" accept=".docx,.doc,.odt,.pdf,.rtf"><span class="small muted" id="s-datei-info">' + T("Word, OpenDocument, RTF oder PDF", "Word, OpenDocument, RTF or PDF") + "</span></div>" +
      '</fieldset><fieldset class="sub-fs"><legend>' + T("Korrespondierende Autorin oder korrespondierender Autor", "Corresponding author") + "</legend>" +
      '<div class="field-row"><div class="field"><label for="s-name">' + T("Name mit akademischem Grad", "Name with academic degree") + '</label><input id="s-name" autocomplete="name"></div>' +
      '<div class="field"><label for="s-mail">' + T("E-Mail", "Email") + '</label><input id="s-mail" type="email" autocomplete="email"></div></div>' +
      '<div class="field"><label for="s-inst">' + T("Institution", "Institution") + '</label><input id="s-inst" autocomplete="organization"></div>' +
      '<div class="field"><label for="s-ko">' + T("Weitere Autorinnen und Autoren mit Institution (eine Person je Zeile)", "Co-authors with institution (one per line)") + '</label><textarea id="s-ko" rows="3"></textarea></div>' +
      '</fieldset><fieldset class="sub-fs"><legend>' + T("Erklärungen", "Statements") + "</legend>" +
      checks.map(function (c, i) { return '<label class="check"><input type="checkbox" id="s-c' + (i + 1) + '"> <span>' + c + "</span></label>"; }).join("") +
      '</fieldset><p class="error" id="sub-err" hidden></p><div class="actions"><button class="btn btn-primary" type="submit">' + T("Einreichungsschreiben erstellen", "Create cover letter") + "</button></div>" +
      '<div id="sub-out" class="panel" hidden><p class="eyebrow">' + T("Eingangsnummer", "Submission number") + ' <span class="mono" id="sub-nr"></span></p><h3>' + T("Ihr Einreichungsschreiben", "Your cover letter") + "</h3>" +
      "<p>" + T("Senden Sie diesen Text mit dem anonymisierten Manuskript und dem Titelblatt als Anhang an ", "Send this text with the anonymized manuscript and the title page attached to ") + '<strong class="mono">' + esc(KONTAKT) + "</strong>. " + T("Geben Sie die Eingangsnummer im Betreff an.", "Please include the submission number in the subject line.") + "</p>" +
      '<pre class="result" id="sub-text"></pre><div class="actions"><button type="button" class="btn btn-ghost" id="sub-copy">' + T("Text kopieren", "Copy text") + "</button></div></div></form>";
    html += '</div><aside class="article-aside"><div class="panel"><p class="eyebrow">' + T("Vorlage", "Template") + '</p><a class="pdf-card" href="vorlagen/ZSP-Manuskriptvorlage.docx" download><span class="pdf-ico is-doc" aria-hidden="true">DOCX</span><span><strong>' + T("Manuskriptvorlage", "Manuscript template") + '</strong><br><span class="small muted">' + T("Gliederung, Abstracts, Erklärungen, APA-Beispiele", "Structure, abstracts, statements, APA examples") + "</span></span></a></div>" +
      '<div class="panel"><p class="eyebrow">' + T("Umfang", "Length") + '</p><dl class="facts"><div><dt>' + T("Original- und Übersichtsarbeiten", "Original articles and reviews") + "</dt><dd>" + T("bis 8.000 Wörter", "up to 8,000 words") + "</dd></div><div><dt>" + T("Praxis und Lehre", "Practice and teaching") + "</dt><dd>" + T("bis 5.000 Wörter", "up to 5,000 words") + "</dd></div><div><dt>" + T("Rezensionen", "Book reviews") + "</dt><dd>" + T("bis 1.500 Wörter", "up to 1,500 words") + "</dd></div></dl></div>" +
      '<div class="panel"><p class="eyebrow">' + T("Ablauf", "Process") + '</p><p class="small">' + T("Redaktionelle Vorprüfung, danach doppelt verblindete Begutachtung durch zwei Gutachtende. Die Redaktion entscheidet über Annahme, Überarbeitung oder Ablehnung. Es fallen keine Publikationsgebühren an.", "Editorial pre-check, followed by double-blind review by two reviewers. The editors decide on acceptance, revision or rejection. There are no publication fees.") + "</p></div></aside></div>";
    $("#journal-root").innerHTML = html;
    document.title = T("Manuskript einreichen", "Submit a manuscript") + " · " + jTitel();
    function words(t) { return (t.trim().match(/\S+/g) || []).length; }
    $("#s-abstract").addEventListener("input", function () { var n = words(this.value); var el = $("#s-abstract-n"); el.textContent = n + " " + T("Wörter", "words"); el.className = "small " + (n > 250 ? "error" : "muted"); });
    $("#s-datei").addEventListener("change", function () {
      var f = this.files && this.files[0], el = $("#s-datei-info");
      if (!f) { el.textContent = T("Word, OpenDocument, RTF oder PDF", "Word, OpenDocument, RTF or PDF"); el.className = "small muted"; return; }
      var ok = /\.(docx?|odt|pdf|rtf)$/i.test(f.name);
      el.textContent = f.name + " · " + (f.size / 1048576).toLocaleString(I.locale(), { maximumFractionDigits: 1 }) + " MB" + (ok ? "" : T(" · Format nicht zulässig", " · format not accepted"));
      el.className = "small " + (ok ? "muted" : "error");
    });
    $("#sub-form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var v = function (id) { return $("#" + id).value.trim(); }, err = [];
      if (!v("s-titel")) err.push(T("Bitte geben Sie den Titel an.", "Please enter the title."));
      if (!v("s-abstract")) err.push(T("Bitte fügen Sie die Zusammenfassung ein.", "Please add the abstract."));
      else if (words(v("s-abstract")) > 250) err.push(T("Die Zusammenfassung ist länger als 250 Wörter.", "The abstract is longer than 250 words."));
      if (!v("s-name")) err.push(T("Bitte geben Sie den Namen der korrespondierenden Person an.", "Please enter the name of the corresponding author."));
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("s-mail"))) err.push(T("Bitte geben Sie eine gültige E-Mail-Adresse an.", "Please enter a valid email address."));
      var f = $("#s-datei").files && $("#s-datei").files[0];
      if (f && !/\.(docx?|odt|pdf|rtf)$/i.test(f.name)) err.push(T("Die Manuskriptdatei hat ein nicht zulässiges Format.", "The manuscript file format is not accepted."));
      var allChecked = ["s-c1", "s-c2", "s-c3", "s-c4", "s-c5"].every(function (id) { return $("#" + id).checked; });
      if (!allChecked) err.push(T("Bitte bestätigen Sie alle Erklärungen.", "Please confirm all statements."));
      $("#sub-err").hidden = !err.length; $("#sub-err").textContent = err.join(" ");
      if (err.length) return;
      var d = new Date(), nr = "ZSP-E-" + d.getFullYear() + "-" + (Math.abs(((d.getTime() / 1000) | 0) ^ v("s-titel").length * 7919) % 100000).toString().padStart(5, "0");
      var txt = I.lang === "en"
        ? "Subject: Submission " + nr + " – " + v("s-titel") + "\n\nDear Editors,\n\nI hereby submit the following manuscript for review in the " + jTitel() + " (Zeitschrift für Sinnzentrierte Psychologie).\n\n" +
          "Submission number: " + nr + "\nArticle type: " + v("s-rubrik") + "\nLanguage: " + v("s-sprache") + "\nTitle: " + v("s-titel") + (v("s-unter") ? "\nSubtitle: " + v("s-unter") : "") +
          (v("s-worte") ? "\nWord count: " + v("s-worte") : "") + (v("s-kw") ? "\nKeywords: " + v("s-kw") : "") + (f ? "\nManuscript file: " + f.name : "") +
          "\n\nAbstract:\n" + v("s-abstract") +
          "\n\nCorresponding author: " + v("s-name") + (v("s-inst") ? ", " + v("s-inst") : "") + "\nEmail: " + v("s-mail") +
          (v("s-ko") ? "\nCo-authors:\n" + v("s-ko") : "") +
          "\n\nI confirm that the manuscript is unpublished and not under review elsewhere, that ethical requirements are met, that funding, conflicts of interest and the use of generative AI are disclosed, and that the article may be published under CC BY 4.0 if accepted.\n\nYours sincerely,\n" + v("s-name")
        : "Betreff: Einreichung " + nr + " – " + v("s-titel") + "\n\nSehr geehrte Redaktion,\n\nhiermit reiche ich das folgende Manuskript zur Begutachtung in der " + J.titel + " ein.\n\n" +
          "Eingangsnummer: " + nr + "\nRubrik: " + v("s-rubrik") + "\nSprache: " + v("s-sprache") + "\nTitel: " + v("s-titel") + (v("s-unter") ? "\nUntertitel: " + v("s-unter") : "") +
          (v("s-worte") ? "\nWortzahl: " + v("s-worte") : "") + (v("s-kw") ? "\nSchlüsselwörter: " + v("s-kw") : "") + (f ? "\nManuskriptdatei: " + f.name : "") +
          "\n\nZusammenfassung:\n" + v("s-abstract") +
          "\n\nKorrespondierende Person: " + v("s-name") + (v("s-inst") ? ", " + v("s-inst") : "") + "\nE-Mail: " + v("s-mail") +
          (v("s-ko") ? "\nWeitere Autorinnen und Autoren:\n" + v("s-ko") : "") +
          "\n\nIch bestätige, dass das Manuskript unveröffentlicht ist und keiner anderen Zeitschrift vorliegt, dass ethische Anforderungen erfüllt sind, dass Finanzierung, Interessenkonflikte und der Einsatz generativer KI offengelegt sind und dass der Beitrag bei Annahme unter CC BY 4.0 erscheinen darf.\n\nMit freundlichen Grüßen\n" + v("s-name");
      $("#sub-nr").textContent = nr; $("#sub-text").textContent = txt; $("#sub-out").hidden = false;
      $("#sub-out").scrollIntoView({ block: "nearest" });
    });
    $("#sub-copy").addEventListener("click", function () { copyText($("#sub-text").textContent, this, $("#sub-text")); });
  }

  function renderArticle(a) {
    var i = iss(a), x = art(a), en = I.lang === "en";
    var idx = J.artikel.indexOf(a);
    var prev = J.artikel[idx - 1], next = J.artikel[idx + 1];
    var autoren = en ? a.autoren.replace(" und ", " and ") : a.autoren;
    var html = '<div class="page-head"><p class="mono muted"><a href="#journal">' + esc(jTitel()) + "</a> · " + esc(issueLabel(i)) + " · " + pg() + esc(a.seiten) + "</p>" +
      '<span class="tag">' + esc(x.rubrik) + "</span><h1>" + esc(x.titel) + "</h1>" +
      (x.untertitel ? '<p class="lead">' + esc(x.untertitel) + "</p>" : "") +
      '<p class="muted">' + esc(autoren) + '<br><span class="small">' + esc(INST()) + "</span></p>" +
      (en && hasEn(a) ? '<p class="small muted lang-note">English translation. The German original is the version of record.</p>' : "") +
      '<div class="actions"><a class="btn btn-primary" href="' + pdfOf(a) + '" download>' + T("PDF herunterladen", "Download PDF") + '</a><a class="btn btn-ghost" href="' + pdfOf(a) + '" target="_blank" rel="noopener">' + T("PDF ansehen", "View PDF") + "</a>" +
      (en && hasEn(a) ? '<a class="btn btn-ghost" href="pdf/' + a.id + '.pdf" download>German original (PDF)</a>' : "") + "</div></div>";
    html += '<div class="article"><div class="article-body">';
    var deAbs = a.abstract ? '<section class="abstract" lang="de"><h2 style="margin:0;font-size:1.05rem;font-family:var(--sans);font-weight:600">Zusammenfassung</h2>' + paras(a.abstract) +
      (a.schluesselwoerter ? '<p class="small"><strong>Schlüsselwörter:</strong> ' + esc(a.schluesselwoerter.join(", ")) + "</p>" : "") + "</section>" : "";
    var enAbs = a.abstractEn ? '<section class="abstract" lang="en"><h2 style="margin:0;font-size:1.05rem;font-family:var(--sans);font-weight:600">Abstract</h2>' + paras(a.abstractEn) +
      (a.keywords ? '<p class="small"><strong>Keywords:</strong> ' + esc(a.keywords.join(", ")) + "</p>" : "") + "</section>" : "";
    html += en ? enAbs : deAbs + enAbs;
    (x.abschnitte || []).forEach(function (s) {
      html += "<h2>" + esc(s.titel) + "</h2>" + (s.absaetze || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    });
    if (a.literatur && a.literatur.length) {
      html += "<h2>" + T("Literatur", "References") + '</h2><ul class="refs">' + a.literatur.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>";
    }
    html += '</div><aside class="article-aside"><a class="pdf-card" href="' + pdfOf(a) + '" download><span class="pdf-ico" aria-hidden="true">PDF</span><span><strong>' + T("Beitrag als PDF", "Article as PDF") + '</strong><br><span class="small muted">' + T("Satzfassung mit Seitenzahlen ", "Typeset English version") + (en ? "" : esc(a.seiten)) + "</span></span></a>" +
      '<div class="panel"><p class="eyebrow">' + T("Zitiervorschlag", "How to cite") + '</p><div class="cite-box" id="cite-text">' + esc(apa(a)) + '</div><button type="button" class="btn btn-ghost" id="cite-copy">' + T("Zitation kopieren", "Copy citation") + "</button></div>" +
      '<div class="panel"><p class="eyebrow">' + T("Angaben", "Details") + '</p><dl class="facts"><div><dt>' + T("Rubrik", "Article type") + "</dt><dd>" + esc(x.rubrik) + "</dd></div><div><dt>" + T("Heft", "Issue") + "</dt><dd>" + esc(i.heft + "/" + i.jahr) + "</dd></div><div><dt>" + T("Seiten", "Pages") + "</dt><dd>" + esc(a.seiten) + "</dd></div><div><dt>" + T("Lizenz", "License") + "</dt><dd>CC BY 4.0</dd></div></dl></div>" +
      '<nav class="panel" aria-label="' + T("Weitere Beiträge", "More articles") + '">' + (prev ? '<a href="#' + prev.id + '">← ' + esc(art(prev).titel) + "</a>" : "") + (next ? '<a href="#' + next.id + '">' + esc(art(next).titel) + " →</a>" : "") + '<a href="#journal">' + T("Alle Ausgaben", "All issues") + "</a></nav></aside></div>";
    $("#journal-root").innerHTML = html;
    document.title = x.titel + " · " + jTitel();
    $("#cite-copy").addEventListener("click", function () { copyText($("#cite-text").textContent, this, $("#cite-text")); });
  }

  /* ---------- Lexikon ---------- */
  var lexState = { q: "", cat: "", letter: "", current: null };
  function lexFiltered() {
    var q = sortKey(lexState.q.trim());
    return lexSorted().filter(function (e) {
      var d = lx(e);
      if (lexState.cat && e.kategorie !== lexState.cat) return false;
      if (lexState.letter && letterOf(d.begriff) !== lexState.letter) return false;
      if (q) return sortKey(d.begriff + " " + e.begriff + " " + (d.kurz || "") + " " + (d.text || "")).indexOf(q) >= 0;
      return true;
    }).sort(function (a, b) {
      if (!q) return 0;
      var at = sortKey(lx(a).begriff).indexOf(q), bt = sortKey(lx(b).begriff).indexOf(q);
      if ((at === 0) !== (bt === 0)) return at === 0 ? -1 : 1;
      if ((at >= 0) !== (bt >= 0)) return at >= 0 ? -1 : 1;
      return 0;
    });
  }
  function renderLexControls() {
    var cats = [""];
    LEX.forEach(function (e) { if (cats.indexOf(e.kategorie) < 0) cats.push(e.kategorie); });
    $("#lex-cats").setAttribute("aria-label", T("Kategorie", "Category"));
    $("#lex-cats").innerHTML = cats.map(function (c) {
      var n = !c ? LEX.length : LEX.filter(function (e) { return e.kategorie === c; }).length;
      var label = !c ? T("Alle", "All") : (I.lang === "en" ? KAT_EN[c] || c : c);
      return '<button type="button" class="chip" data-c="' + esc(c) + '" aria-pressed="' + (c === lexState.cat) + '">' + esc(label) + ' <span class="mono">' + n + "</span></button>";
    }).join("");
    var letters = {};
    LEX.forEach(function (e) { letters[letterOf(lx(e).begriff)] = true; });
    $("#lex-az").setAttribute("aria-label", T("Anfangsbuchstabe", "Initial letter"));
    $("#lex-az").innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function (L) {
      return '<button type="button" data-l="' + L + '"' + (letters[L] ? "" : " disabled") + ' aria-pressed="' + (lexState.letter === L) + '">' + L + "</button>";
    }).join("");
  }
  function renderLexList() {
    var list = lexFiltered();
    $("#lex-count").textContent = list.length === LEX.length ? LEX.length + T(" Einträge", " entries") : list.length + T(" von ", " of ") + LEX.length + T(" Einträgen", " entries");
    var html = "", last = "";
    var grouped = !lexState.q.trim();
    list.forEach(function (e) {
      var d = lx(e), L = letterOf(d.begriff);
      if (grouped && L !== last) { html += '<li class="lex-letter" aria-hidden="true">' + L + "</li>"; last = L; }
      html += '<li><button type="button" data-id="' + e.id + '"' + (lexState.current === e ? ' aria-current="true"' : "") + '><span class="b">' + esc(d.begriff) + '</span><span class="k">' + esc(d.kategorie) + "</span></button></li>";
    });
    if (!list.length) html = '<li class="muted" style="padding:14px 6px">' + T("Kein Eintrag gefunden. Prüfen Sie die Schreibweise oder setzen Sie die Filter zurück.", "No entry found. Check the spelling or reset the filters.") + "</li>";
    $("#lex-list").innerHTML = html;
    if (!lexState.current && list.length) showEntry(list[0], false);
  }
  function entryHtml(e, compact) {
    var d = lx(e);
    var refs = (e.verweise || []).map(function (v) {
      var t = findLex(v);
      return t ? '<a href="#' + t.id + '">' + esc(lx(t).begriff) + "</a>" : null;
    }).filter(Boolean);
    var html = '<span class="tag">' + esc(d.kategorie) + "</span>" + (compact ? "<h3>" : "<h2>") + esc(d.begriff) + (compact ? "</h3>" : "</h2>");
    if (I.lang === "en" && d.begriff !== e.begriff && !compact) html += '<p class="small muted" lang="de">German: ' + esc(e.begriff) + "</p>";
    if (d.kurz) html += '<p class="kurz">' + esc(d.kurz) + "</p>";
    if (compact) return html + '<a href="#' + e.id + '">' + T("Eintrag lesen", "Read entry") + "</a>";
    html += '<div class="text">' + paras(d.text) + "</div>";
    if (refs.length) html += "<p><strong>" + T("Siehe auch:", "See also:") + "</strong> " + refs.join(", ") + "</p>";
    if (e.literatur && e.literatur.length) html += '<div><p class="eyebrow" style="margin-bottom:8px">' + T("Literatur", "References") + '</p><ul class="refs">' + e.literatur.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></div>";
    html += '<p class="small muted">' + T("Zitiervorschlag: Institut für Sinnzentrierte Psychologie (2026). ", "How to cite: Institute for Meaning-Centered Psychology (2026). ") + esc(d.begriff) + ". In <em>" + T("Lexikon der Sinnzentrierten Psychologie und Psychotherapie", "Encyclopedia of Meaning-Centered Psychology and Psychotherapy") + "</em>.</p>";
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
  function renderHome() {
    var i = J.ausgaben[J.ausgaben.length - 1];
    if (i) {
      $("#home-issue-title").textContent = T("Heft ", "Issue ") + i.heft + "/" + i.jahr + ": " + issView(i).schwerpunkt;
      $("#home-issue-list").innerHTML = J.artikel.filter(function (a) { return a.ausgabe === i.id && a.rubrik !== "Editorial"; }).slice(0, 4).map(function (a) {
        var x = art(a);
        return '<li><div><span class="tag">' + esc(x.rubrik) + '</span><br><a class="t" href="#' + a.id + '">' + esc(x.titel) + '</a></div><span class="mono muted">' + pg() + esc(a.seiten) + "</span></li>";
      }).join("");
    }
    if (LEX.length) {
      var d = new Date();
      var n = (d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) % LEX.length;
      $("#home-term").innerHTML = '<p class="small muted">' + T("Begriff des Tages", "Term of the day") + "</p>" + entryHtml(LEX[n], true);
      $("#home-lex-count").textContent = LEX.length + T(" Einträge in ", " entries in ") + LEX.reduce(function (s, e) { if (s.indexOf(e.kategorie) < 0) s.push(e.kategorie); return s; }, []).length + T(" Fachgebieten", " subject areas");
    }
  }
  $("#home-search").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var q = $("#home-q").value;
    lexState.q = q; lexState.letter = ""; lexState.cat = ""; lexState.current = null;
    $("#lex-q").value = q;
    renderLexControls(); renderLexList();
    location.hash = "lexikon";
  });

  /* ---------- Hilfen ---------- */
  function copyText(text, btn, selectEl) {
    var done = function () { var o = btn.textContent; btn.textContent = T("Kopiert", "Copied"); setTimeout(function () { btn.textContent = o; }, 1800); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(selectEl);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = T("Text markiert, bitte mit Strg+C kopieren", "Text selected, press Ctrl+C to copy");
    };
    try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
  }
  function initFooter() { $("#footer-mail").textContent = KONTAKT; }

  /* ---------- Darstellung ---------- */
  var themeLabel = function () {};
  function initTheme() {
    var btn = $("#theme-toggle");
    var stored = null;
    try { stored = localStorage.getItem("isp-theme"); } catch (e) {}
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    function isDark() {
      var t = document.documentElement.getAttribute("data-theme");
      return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    themeLabel = function () { btn.textContent = isDark() ? T("Helle Darstellung", "Light mode") : T("Dunkle Darstellung", "Dark mode"); };
    btn.addEventListener("click", function () {
      var t = isDark() ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
      try { localStorage.setItem("isp-theme", t); } catch (e) {}
      themeLabel();
    });
    themeLabel();
  }

  /* ---------- Sprachwechsel ---------- */
  function renderAll() {
    renderVerfahren();
    renderLexControls();
    var cur = lexState.current; lexState.current = null; renderLexList();
    if (cur) showEntry(cur, false);
    renderHome();
    themeLabel();
    $("#nav").setAttribute("aria-label", T("Hauptnavigation", "Main navigation"));
  }
  I.onChange(function () {
    var y = window.scrollY;
    renderAll();
    if (window.AKADEMIE) window.AKADEMIE.renderKatalog();
    route();
    if (["start", "institut", "logotherapie", "verfahren", "lexikon", "weiterbildung"].indexOf(currentView) >= 0) window.scrollTo(0, Math.min(y, document.body.scrollHeight));
  });

  initLexikon();
  initFooter();
  initTheme();
  renderAll();
  window.ISP = { setView: setView, copyText: copyText, esc: esc, paras: paras, KONTAKT: KONTAKT, findLex: findLex, T: T, route: route };
})();
