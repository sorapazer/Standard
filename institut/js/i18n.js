/* Sprachumschaltung Deutsch / Englisch.
   Statische Inhalte: Elemente mit data-lang="de" bzw. data-lang="en" (per CSS ein- und ausgeblendet).
   Dynamische Inhalte: I18N.t(deutsch, englisch) und I18N.onChange(callback). */
(function () {
  "use strict";
  var KEY = "isp-lang";
  var lang = "de";
  try { lang = localStorage.getItem(KEY) || ""; } catch (e) { lang = ""; }
  if (lang !== "de" && lang !== "en") {
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "de";
    lang = /^de\b/i.test(nav) ? "de" : (/^en\b/i.test(nav) ? "en" : "de");
  }
  var listeners = [];

  function apply() {
    var root = document.documentElement;
    root.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll("[data-ph-" + lang + "]"), function (el) {
      el.setAttribute("placeholder", el.getAttribute("data-ph-" + lang));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-setlang]"), function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-setlang") === lang ? "true" : "false");
    });
  }

  window.I18N = {
    get lang() { return lang; },
    t: function (de, en) { return lang === "en" && en != null ? en : de; },
    locale: function () { return lang === "en" ? "en-GB" : "de-DE"; },
    set: function (l) {
      if (l !== "de" && l !== "en" || l === lang) return;
      lang = l;
      try { localStorage.setItem(KEY, l); } catch (e) {}
      apply();
      listeners.forEach(function (fn) { try { fn(lang); } catch (e) { if (window.console) console.error(e); } });
    },
    onChange: function (fn) { listeners.push(fn); }
  };

  document.addEventListener("click", function (ev) {
    var b = ev.target.closest && ev.target.closest("[data-setlang]");
    if (b) window.I18N.set(b.getAttribute("data-setlang"));
  });
  apply();
})();
