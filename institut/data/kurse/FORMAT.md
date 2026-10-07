# Datenformat Kursmodule (Online-Akademie)

Jede Datei registriert Module so:

```js
window.KURS_MODULE = (window.KURS_MODULE || []).concat([
  {
    kurs: "logo",            // "logo" | "berater" | "grundkurs"
    id: "L1",                // Modul-ID, z. B. L1..L8, B1..B8, G1..G3
    titel: "Grundlagen: Leben, Werk und Menschenbild",
    beschreibung: "2–3 Sätze, worum es geht.",
    lernziele: ["Sie können …", "Sie können …", "…"],   // 3–5
    lektionen: [
      {
        id: "L1-1",
        titel: "…",
        dauer: 20,           // Minuten, realistisch
        schritte: [ /* 10–16 Schritte, siehe unten */ ]
      }
    ],
    pruefung: [ /* 8 Prüfungsfragen für die Abschlussprüfung, nur Typen mc / multi / truefalse */ ]
  }
]);
```

## Schritttypen

Text-Formatierung in allen Textfeldern: Absätze mit "\n\n", **fett**, *kursiv*, Aufzählung mit Zeilen, die mit "- " beginnen.

1. Lerntext
   { typ: "text", titel: "…", text: "120–280 Wörter, fachlich dicht" }
2. Merksatz / Zitat (kurz, hervorgehoben)
   { typ: "merke", text: "…", quelle: "optional, nur echte belegte Quelle" }
3. Single Choice
   { typ: "mc", frage: "…", optionen: ["…","…","…","…"], richtig: 1, erklaerung: "Warum richtig und warum die anderen falsch sind." }
4. Mehrfachauswahl
   { typ: "multi", frage: "…", optionen: ["…", …], richtig: [0,2], erklaerung: "…" }
5. Richtig/Falsch
   { typ: "truefalse", aussage: "…", richtig: true, erklaerung: "…" }
6. Reihenfolge bringen (in KORREKTER Reihenfolge angeben, wird gemischt)
   { typ: "reihenfolge", frage: "…", elemente: ["erst","dann","…"], erklaerung: "…" }
7. Zuordnen (Paare, rechte Seite wird gemischt)
   { typ: "zuordnen", frage: "…", paare: [["Begriff","Bedeutung"], …], erklaerung: "…" }   // 3–6 Paare
8. Sortieren in Kategorien
   { typ: "kategorien", frage: "…", kategorien: ["A","B","C"], elemente: [{text:"…", kat:0}, …], erklaerung: "…" }  // 5–9 Elemente
9. Lückentext (Auswahl je Lücke; ERSTE Option ist richtig, wird gemischt)
   { typ: "luecke", text: "Frankl nannte das primäre Motiv den {{Willen zum Sinn|Willen zur Macht|Willen zur Lust}}.", erklaerung: "…" }
10. Karteikarten (Lernkarten zum Umdrehen, ohne Bewertung)
   { typ: "karten", titel: "…", karten: [{vorne:"…", hinten:"…"}, …] }   // 4–8
11. Fallvignette (ausdrücklich konstruiert) mit Frage
   { typ: "fall", titel: "…", fall: "Konstruierte Lehrvignette: …", frage: "…", optionen: [...], richtig: 0, erklaerung: "…" }
12. Gesprächssimulation (Beratung/Sokratischer Dialog): mehrere Runden, je Runde Aussage der ratsuchenden Person und 3 mögliche Antworten der beratenden Person mit Feedback
   { typ: "dialog", titel: "…", einleitung: "Konstruierte Situation: …",
     runden: [ { klient: "…", antworten: [ {text:"…", gut:true, feedback:"…"}, {text:"…", gut:false, feedback:"…"}, {text:"…", gut:false, feedback:"…"} ] }, … ] }  // 3–5 Runden, genau eine gute Antwort pro Runde
13. Reflexion (freie Eingabe, wird nur lokal gespeichert, keine Bewertung)
   { typ: "reflexion", frage: "…", hinweis: "Leitfragen …" }

## Regeln
- Jede Lektion: 10–16 Schritte; mindestens 4 Lerntexte; mindestens 5 interaktive Schritte aus mindestens 4 verschiedenen Typen; Lektion beginnt mit Lerntext. Pro Modul mindestens eine "dialog"- oder "fall"-Aufgabe.
- Jedes Modul: 3–4 Lektionen.
- Fachlich korrekt, seriös, deutsch mit echten Umlauten und ß. Keine erfundenen Studien, Zahlen oder Zitate. Nur wörtliche Zitate, die du sicher kennst; sonst paraphrasieren.
- Fälle und Dialoge stets als konstruiert kennzeichnen.
- Feld `richtig` muss exakt stimmen (Index ab 0). Antwortoptionen plausibel, nicht trivial; richtige Option nicht immer an gleicher Position.
- Gültiges JavaScript; Strings in doppelten Anführungszeichen, innere Anführungszeichen als „…“ (deutsche) schreiben.
- Prüfe: node -e "global.window={};require('DATEI');console.log(window.KURS_MODULE.map(m=>m.id+':'+m.lektionen.length))"
