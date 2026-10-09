/*
  Erzeugt die PDF-Fassungen aller Beiträge der Zeitschrift (pdf/<id>.pdf)
  und je Heft eine Gesamtausgabe (pdf/zsp-<jahr>-<heft>-gesamt.pdf).
  Die Seitenzahlen werden fortlaufend über den Jahrgang vergeben und in
  data/journal.js zurückgeschrieben.

  Aufruf (im Ordner institut):  node werkzeuge/pdf-erzeugen.js
  Voraussetzungen: Node.js, Playwright mit Chromium, Python 3 mit pypdf, poppler-utils (pdfinfo)
*/
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "pdf");
const JFILE = path.join(ROOT, "data", "journal.js");
fs.mkdirSync(OUT, { recursive: true });

function loadJournal() { const w = {}; new Function("window", fs.readFileSync(JFILE, "utf8"))(w); return w.JOURNAL; }
function pages(file) { return +/Pages:\s+(\d+)/.exec(execFileSync("pdfinfo", [file]).toString())[1]; }
function setSeiten(id, seiten) {
  let src = fs.readFileSync(JFILE, "utf8");
  const re = new RegExp('(id:\\s*"' + id + '"[\\s\\S]*?seiten:\\s*")[^"]*(")');
  src = src.replace(re, "$1" + seiten + "$2");
  fs.writeFileSync(JFILE, src);
}

(async () => {
  const opts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : (fs.existsSync("/opt/pw-browsers/chromium") ? { executablePath: "/opt/pw-browsers/chromium" } : {});
  const browser = await chromium.launch(opts);
  const page = await browser.newPage();
  let J = loadJournal();
  let next = 1;
  for (const a of J.artikel) {
    for (let pass = 0; pass < 3; pass++) {
      J = loadJournal();
      const cur = J.artikel.find(x => x.id === a.id);
      const start = parseInt(String(cur.seiten).split(/[–-]/)[0], 10);
      await page.goto("file://" + path.join(__dirname, "artikel-vorlage.html") + "#" + a.id);
      await page.reload();
      await page.waitForFunction(() => window.ARTIKEL_BEREIT === true);
      await page.evaluate(() => document.fonts.ready);
      const file = path.join(OUT, a.id + ".pdf");
      await page.pdf({ path: file, preferCSSPageSize: true, printBackground: true });
      const n = pages(file);
      const seiten = n === 1 ? String(next) : next + "–" + (next + n - 1);
      if (start === next && cur.seiten === seiten) { console.log(a.id, seiten); next += n; break; }
      setSeiten(a.id, seiten);
    }
  }
  // Titelblätter der Hefte
  J = loadJournal();
  for (const iss of J.ausgaben) {
    const arts = J.artikel.filter(x => x.ausgabe === iss.id);
    await page.goto("file://" + path.join(__dirname, "heft-titel.html") + "#" + iss.id);
    await page.reload();
    await page.waitForFunction(() => window.HEFT_BEREIT === true);
    await page.evaluate(() => document.fonts.ready);
    const cover = path.join(OUT, "_titel-" + iss.id + ".pdf");
    await page.pdf({ path: cover, preferCSSPageSize: true, printBackground: true });
    const target = path.join(OUT, "zsp-" + iss.jahr + "-" + iss.heft + "-gesamt.pdf");
    execFileSync("python3", ["-c", `
import sys
from pypdf import PdfWriter
w = PdfWriter()
for f in sys.argv[2:]:
    w.append(f)
w.add_metadata({"/Title": sys.argv[3] if False else "Zeitschrift für Sinnzentrierte Psychologie, Heft ${iss.heft}/${iss.jahr}", "/Author": "Institut für Sinnzentrierte Psychologie"})
w.write(sys.argv[1])
`, target, cover, ...arts.map(x => path.join(OUT, x.id + ".pdf"))]);
    fs.unlinkSync(cover);
    console.log("Heft", iss.id, "->", path.basename(target));
  }
  // Englische Fassungen (eigene Seitenzählung ab 1; Version of record bleibt die deutsche Fassung)
  const OUT_EN = path.join(OUT, "en");
  fs.mkdirSync(OUT_EN, { recursive: true });
  for (const a of J.artikel) {
    await page.goto("file://" + path.join(__dirname, "artikel-vorlage.html") + "#en:" + a.id);
    await page.reload();
    await page.waitForFunction(() => window.ARTIKEL_BEREIT === true);
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(OUT_EN, a.id + ".pdf"), preferCSSPageSize: true, printBackground: true });
    console.log("EN", a.id);
  }
  for (const iss of J.ausgaben) {
    const arts = J.artikel.filter(x => x.ausgabe === iss.id);
    await page.goto("file://" + path.join(__dirname, "heft-titel.html") + "#en:" + iss.id);
    await page.reload();
    await page.waitForFunction(() => window.HEFT_BEREIT === true);
    await page.evaluate(() => document.fonts.ready);
    const cover = path.join(OUT_EN, "_cover-" + iss.id + ".pdf");
    await page.pdf({ path: cover, preferCSSPageSize: true, printBackground: true });
    const target = path.join(OUT_EN, "zsp-" + iss.jahr + "-" + iss.heft + "-gesamt.pdf");
    execFileSync("python3", ["-c", `
import sys
from pypdf import PdfWriter
w = PdfWriter()
for f in sys.argv[2:]:
    w.append(f)
w.add_metadata({"/Title": "Journal of Meaning-Centered Psychology, Issue ${iss.heft}/${iss.jahr} (English edition)", "/Author": "Institute for Meaning-Centered Psychology"})
w.write(sys.argv[1])
`, target, cover, ...arts.map(x => path.join(OUT_EN, x.id + ".pdf"))]);
    fs.unlinkSync(cover);
    console.log("EN Heft", iss.id, "->", path.basename(target));
  }
  await browser.close();
})();
