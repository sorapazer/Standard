# Screening Quarter-Life-Crisis (QLC-S-15) – Webversion

Online-Fassung des Screening-Fragebogens „Quarter-Life-Crisis (QLC-S-15)“ zur
Eignungsprüfung für die Interviewstudie. Gedacht für die Verlinkung
**„Aktuelle Forschung“** auf der Seite mit den Selbsttests / Fragebögen von
Praxis Pazer.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Der komplette Fragebogen – eine einzige Datei, HTML, CSS und JavaScript inklusive. Keine externen Abhängigkeiten, kein Server, kein CDN. |
| `einbindung-snippet.html` | Fertige Code-Schnipsel für den Link „Aktuelle Forschung“, eine Teaser-Karte und die iframe-Einbettung. |

## Einbinden

1. Den Ordner als `forschung-screening/` (oder unter einem eigenen Pfad,
   z. B. `/aktuelle-forschung/`) auf die Website hochladen.
2. Auf der Fragebogen-/Selbsttest-Seite einen der Schnipsel aus
   `einbindung-snippet.html` einsetzen – der einfachste ist:

   ```html
   <a href="/forschung-screening/">Aktuelle Forschung</a>
   ```

3. Bei Baukastensystemen ohne Datei-Upload stattdessen den kompletten Inhalt
   von `index.html` in ein HTML-Embed-Element einfügen, oder Snippet 3
   (iframe) verwenden.

Die Seite trägt `<meta name="robots" content="noindex">`, damit das Screening
nicht in Suchmaschinen auftaucht. Soll es gefunden werden, diese Zeile
entfernen.

## Anpassen

Alles Einstellbare steht ganz oben im `<script>`-Block in `index.html` im
Objekt `CONFIG`. Die Farben stehen als CSS-Variablen im `:root`-Block ganz
oben in `<style>` – dort lassen sich Akzentfarbe und Schrift an das
Website-Design angleichen.

```js
var CONFIG = {
  kontaktEmail: "forschung@praxis-pazer.de",   // Empfängeradresse anpassen
  studienleitung: "Praxis Pazer – Studienleitung",
  endpoint: "",                                // siehe „Rückmeldung“
  kriterien: {
    alterMin: 18,
    alterMax: 39,
    gesamtwertMin: 45,
    subskalaMittelMin: 3.5,
    subskalenMin: 2,
    c2Min: 3
  },
  belastungshinweisAb: 4.0
};
```

## Auswertungslogik

**Teil B** besteht aus 15 Items auf einer fünfstufigen Skala. Die positiv
formulierten Items **6, 9 und 12** werden umgepolt (`6 − Wert`), sodass höhere
Werte durchgängig für stärkere Belastung stehen. Der Gesamtwert liegt damit
zwischen 15 und 75.

Fünf Subskalen mit je drei Items:

| Subskala | Items |
|---|---|
| Identität und Sinn | 1, 2, 3 |
| Zukunft und Kontrollerleben | 4, 5, 6 (umgepolt) |
| Nicht ankommen (locked-out) | 7, 8, 9 (umgepolt) |
| Feststecken (locked-in) | 10, 11, 12 (umgepolt) |
| Sozialer Vergleich und Zeitdruck | 13, 14, 15 |

**Teil C1** (Items 18, 19, 20) geht nicht in den QLC-Wert ein. Er dient nur
der Einordnung: liegt der Mittelwert bei `belastungshinweisAb` oder darüber,
blendet die Seite einen Hinweis auf Unterstützungsangebote ein (116 117,
TelefonSeelsorge, 112). Das schließt niemanden von der Studie aus.

### Einschlusskriterien

Als geeignet gilt, wer **alle drei** Bedingungen erfüllt:

1. Alter zwischen `alterMin` und `alterMax`
2. Gesamtwert ≥ `gesamtwertMin` **oder** mindestens `subskalenMin` Subskalen
   mit einem Mittelwert ≥ `subskalaMittelMin`
3. C2 (Selbsteinschätzung als Krise / Neuorientierung) ≥ `c2Min`

> **Bitte prüfen und ggf. anpassen.** Die Kurzfassung des Fragebogens enthält
> keinen Auswertungsschlüssel. Die obigen Schwellen sind ein transparenter
> Vorschlag: Gesamtwert 45 entspricht einem Item-Mittelwert von 3,0, der
> Alterskorridor 18–39 orientiert sich an der üblichen Altersspanne der
> Quarter-Life-Crisis-Literatur. Wenn für die Studie andere Werte gelten,
> genügt es, die Zahlen im `CONFIG`-Objekt zu ändern – die Ergebnisseite und
> die Begründungstexte passen sich automatisch an.

Zusätzlich wird die Profilrichtung ausgegeben: Subskala *locked-out* gegen
*locked-in*; bei einer Differenz unter 0,5 gilt das Profil als ausgeglichen.

## Rückmeldung an die Studienleitung

Es wird **nichts automatisch gespeichert oder gesendet**. Die Auswertung läuft
vollständig im Browser der teilnehmenden Person. Erst wer als geeignet gilt,
Kontaktdaten einträgt und die Einwilligungs-Checkbox setzt, kann die Antworten
übermitteln.

* **`endpoint` leer (Voreinstellung):** Es öffnet sich das E-Mail-Programm mit
  einer vorausgefüllten Nachricht an `kontaktEmail`. Zusätzlich lässt sich die
  Zusammenfassung per Knopfdruck in die Zwischenablage kopieren – als Ausweg,
  falls kein Mailprogramm eingerichtet ist.
* **`endpoint` gesetzt:** Die Zusammenfassung wird als JSON per `POST` an die
  angegebene URL geschickt (Felder: `betreff`, `name`, `email`, `geeignet`,
  `gesamtwert`, `zusammenfassung`). Geeignet für Formulardienste oder ein
  eigenes Backend. Für personenbezogene Gesundheitsdaten gilt: nur einen
  Dienst mit Auftragsverarbeitungsvertrag und Serverstandort EU verwenden.

Hinweis: Der Fragebogen verspricht, dass Kontaktdaten getrennt von den
Antworten gespeichert werden. Beim E-Mail-Weg kommt beides in einer Nachricht
an – die Trennung muss dann beim Einpflegen in die Studiendokumentation
erfolgen.

## Barrierefreiheit und Technik

* Reines HTML-Formular mit echten Radio-Buttons, per Tastatur bedienbar,
  Beschriftungen sind mit den Feldern verknüpft.
* Responsiv bis hinunter zu kleinen Telefondisplays, druckbar.
* Fortschrittsanzeige, Feldvalidierung mit Sprung zum ersten fehlenden Feld.
* Keine Cookies, kein Tracking, kein `localStorage`, keine externen Requests.
* Getestet in Chromium: vollständige Durchläufe für geeignete und nicht
  geeignete Profile, Altersausschluss, Belastungshinweis und leeres Formular.

## Rechtliches

Der Fragebogen ist ein Screening-Instrument zur Studienrekrutierung und
**kein diagnostisches Verfahren**. Dieser Hinweis steht sowohl im Einleitungs-
text als auch in der Fußzeile der Seite. Vor der Veröffentlichung sollten
Datenschutzerklärung und Impressum der Website den Umgang mit den hier
erhobenen Daten abdecken.
