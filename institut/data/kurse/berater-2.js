/* Kursmodule: Zertifikatsprogramm „Psychologische Beratung“ – Teil 2 (B5–B8) */
window.KURS_MODULE = (window.KURS_MODULE || []).concat([

  /* =========================================================
     B5 – STRESS, ERSCHÖPFUNG UND RESILIENZ
     ========================================================= */
  {
    kurs: "berater",
    id: "B5",
    titel: "Stress, Erschöpfung und Resilienz",
    beschreibung: "Das Modul vermittelt das transaktionale Stressmodell nach Lazarus, die wichtigsten Formen der Stressbewältigung und den aktuellen Stand zu Burnout einschließlich der Einordnung in der ICD-11. Sie lernen, Erschöpfung von depressiven Erkrankungen abzugrenzen, Resilienz und Salutogenese als Ressourcenperspektive zu nutzen und Psychoedukation sowie Entspannungsverfahren verantwortungsvoll in die Beratung einzubinden.",
    lernziele: [
      "Sie können das transaktionale Stressmodell nach Lazarus mit primärer und sekundärer Bewertung sowie Neubewertung erklären und auf Beratungsanliegen anwenden.",
      "Sie können problem- und emotionsorientiertes Coping unterscheiden und Strategien der Emotionsregulation nach dem Prozessmodell von Gross einordnen.",
      "Sie können die drei Burnout-Dimensionen nach Maslach und die Einordnung von Burnout als QD85 in der ICD-11 beschreiben und Warnzeichen einer Depression erkennen, die eine ärztliche Abklärung erfordern.",
      "Sie können Resilienz und das Kohärenzgefühl nach Antonovsky als Ressourcenkonzepte erläutern.",
      "Sie können Psychoedukation strukturiert gestalten und Entspannungsverfahren mit ihren Grenzen und Vorsichtsmaßnahmen einordnen."
    ],
    lektionen: [
      {
        id: "B5-1",
        titel: "Stress verstehen: Das transaktionale Stressmodell",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Was meinen wir eigentlich mit „Stress“?",
            text: "Im Alltag ist „Stress“ ein Sammelbegriff für Zeitdruck, Ärger, Überforderung oder Anspannung. Für die Beratung brauchen wir einen präziseren Begriff, denn je nachdem, wie man Stress versteht, setzt man an ganz unterschiedlichen Stellen an.\n\nHistorisch lassen sich drei Perspektiven unterscheiden:\n\n- **Reizorientierte Ansätze** verstehen Stress als äußere Belastung, etwa kritische Lebensereignisse wie Trennung, Umzug oder Arbeitsplatzverlust. Ihr Problem: Dasselbe Ereignis belastet verschiedene Menschen sehr unterschiedlich.\n- **Reaktionsorientierte Ansätze** betrachten Stress als körperliche Antwort des Organismus. Prägend war der Mediziner **Hans Selye**, der ein „Allgemeines Adaptationssyndrom“ mit Alarmphase, Widerstandsphase und Erschöpfungsphase beschrieb. Von ihm stammt auch die Unterscheidung zwischen förderlichem *Eustress* und schädigendem *Distress*.\n- **Transaktionale Ansätze** verstehen Stress als Ergebnis einer Wechselbeziehung zwischen Person und Umwelt. Entscheidend ist nicht das Ereignis allein, sondern wie die Person es bewertet und welche Möglichkeiten zur Bewältigung sie bei sich sieht.\n\nDie dritte Perspektive, ausgearbeitet von **Richard S. Lazarus** und **Susan Folkman**, ist heute für die psychologische Beratung leitend. Sie erklärt, warum zwei Kolleginnen in derselben Abteilung auf dieselbe Umstrukturierung völlig verschieden reagieren, und sie zeigt, wo Beratung ansetzen kann: bei der Situation, bei der Bewertung, bei den Ressourcen und bei der Bewältigung."
          },
          {
            typ: "text",
            titel: "Die primäre Bewertung: Ist das für mich bedeutsam?",
            text: "Lazarus beschreibt Stress als einen Prozess kognitiver Bewertungen (englisch *appraisal*). Diese Bewertungen laufen oft blitzschnell und nicht bewusst ab, prägen aber das emotionale Erleben entscheidend.\n\nIn der **primären Bewertung** prüft eine Person, ob eine Situation für ihr Wohlergehen relevant ist. Mögliche Ergebnisse sind:\n\n- **irrelevant**: Die Situation berührt die eigenen Anliegen nicht.\n- **günstig-positiv**: Die Situation wird als förderlich oder angenehm eingeschätzt.\n- **stressbezogen**: Die Situation berührt wichtige Ziele oder Werte und ist mit Anforderungen verbunden.\n\nStressbezogene Bewertungen differenziert Lazarus weiter:\n\n- **Schädigung/Verlust**: Ein Schaden ist bereits eingetreten, etwa eine Kündigung oder der Tod eines Angehörigen.\n- **Bedrohung**: Ein Schaden wird für die Zukunft erwartet, etwa die befürchtete Kündigung.\n- **Herausforderung**: Die Anforderung wird als bewältigbar und mit Wachstumschancen verbunden erlebt, etwa eine neue Leitungsaufgabe.\n\nBedrohung und Herausforderung können gleichzeitig vorliegen. Beratungspraktisch ist der Unterschied bedeutsam: Bei Bedrohung dominieren Angst und Sorge, bei Herausforderung eher Anspannung, Neugier und Engagement. Ob eine Situation als Bedrohung oder als Herausforderung erlebt wird, hängt eng mit der zweiten Bewertung zusammen – der Einschätzung der eigenen Möglichkeiten."
          },
          {
            typ: "merke",
            text: "Im transaktionalen Modell entsteht Stress nicht durch das Ereignis allein, sondern dann, wenn eine Person eine Situation als bedeutsam bewertet und ihre Bewältigungsmöglichkeiten als nicht ausreichend einschätzt."
          },
          {
            typ: "mc",
            frage: "Eine Pflegefachkraft erfährt, dass sie ab nächstem Monat die Stationsleitung vertreten soll. Sie denkt: „Das ist viel, aber ich kann dabei eine Menge lernen und ich traue es mir zu.“ Welche primäre Bewertung steht im Vordergrund?",
            optionen: ["Schädigung/Verlust", "Herausforderung", "Bedrohung", "irrelevant"],
            richtig: 1,
            erklaerung: "Die Anforderung wird als bedeutsam, aber bewältigbar und mit Wachstumschancen verbunden erlebt – das ist eine Herausforderung. Eine Bedrohung läge vor, wenn sie vor allem einen künftigen Schaden befürchten würde. Schädigung/Verlust bezieht sich auf bereits Eingetretenes. Irrelevant ist die Situation offensichtlich nicht, da sie wichtige berufliche Anliegen betrifft."
          },
          {
            typ: "text",
            titel: "Sekundäre Bewertung und Neubewertung",
            text: "In der **sekundären Bewertung** prüft die Person: Was kann ich tun? Welche Ressourcen stehen mir zur Verfügung? Gemeint sind innere Ressourcen wie Wissen, Fähigkeiten, Gesundheit, Selbstwirksamkeitserwartung und Überzeugungen ebenso wie äußere Ressourcen wie soziale Unterstützung, Zeit, Geld oder organisatorische Spielräume.\n\nDie Begriffe „primär“ und „sekundär“ bezeichnen keine strenge zeitliche Abfolge und keine Rangordnung. Beide Bewertungen beeinflussen sich gegenseitig: Wer viele Bewältigungsmöglichkeiten sieht, bewertet eine Anforderung eher als Herausforderung; wer sich hilflos fühlt, eher als Bedrohung.\n\nAuf die Bewertungen folgen **Bewältigungsversuche** (Coping). Deren Ergebnisse werden wiederum wahrgenommen und führen zu einer **Neubewertung** (*reappraisal*): Die Situation wird im Licht neuer Informationen, gelungener oder gescheiterter Bewältigung neu eingeschätzt. Stress ist damit kein Zustand, sondern ein fortlaufender Prozess, der sich im Gespräch verändern kann.\n\nFür die Beratung ergeben sich daraus vier Ansatzpunkte:\n\n- die **Situation** selbst (z. B. Arbeitsorganisation, Konflikt klären),\n- die **primäre Bewertung** (z. B. katastrophisierende Annahmen prüfen),\n- die **Ressourcen** (z. B. Unterstützung aktivieren, Kompetenzen erweitern),\n- die **Bewältigung** (z. B. neue Strategien erproben und auswerten).\n\nDie Bewertung ist nicht „falsch“ oder „richtig“; sie kann aber realistischer, differenzierter und hilfreicher werden."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie den Ablauf im transaktionalen Stressmodell in eine sinnvolle Reihenfolge.",
            elemente: [
              "Eine Person nimmt eine Situation oder Anforderung wahr.",
              "Primäre Bewertung: Ist die Situation für mein Wohlergehen bedeutsam?",
              "Sekundäre Bewertung: Welche Ressourcen und Handlungsmöglichkeiten habe ich?",
              "Bewältigungsversuch (Coping)",
              "Neubewertung der Situation auf Grundlage der Erfahrungen"
            ],
            erklaerung: "Das Modell beschreibt einen Kreislauf: Wahrnehmung, primäre und sekundäre Bewertung, Bewältigung und Neubewertung. In der Realität greifen primäre und sekundäre Bewertung ineinander; die Reihenfolge dient der didaktischen Veranschaulichung."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Aussagen der passenden Bewertung zu.",
            paare: [
              ["„Das betrifft mich gar nicht.“", "irrelevant"],
              ["„Seit der Trennung fehlt mir jeder Halt.“", "Schädigung/Verlust"],
              ["„Wenn das Audit schlecht läuft, verliere ich meine Stelle.“", "Bedrohung"],
              ["„Das wird anstrengend, aber ich kann daran wachsen.“", "Herausforderung"],
              ["„Ich habe eine Kollegin, die mich unterstützen wird.“", "sekundäre Bewertung (Ressource)"]
            ],
            erklaerung: "Die ersten vier Aussagen sind Ergebnisse der primären Bewertung. Die letzte Aussage bezieht sich auf verfügbare Ressourcen und gehört damit zur sekundären Bewertung."
          },
          {
            typ: "text",
            titel: "Was im Körper geschieht",
            text: "Auch wenn die Bewertung psychisch erfolgt, ist Stress ein ganzkörperliches Geschehen. Zwei Systeme sind besonders wichtig:\n\n- Die **Sympathikus-Nebennierenmark-Achse** reagiert innerhalb von Sekunden. Adrenalin und Noradrenalin erhöhen Herzfrequenz, Blutdruck und Muskelspannung, stellen Energie bereit und schärfen die Aufmerksamkeit. Diese Reaktion wird oft als Kampf-oder-Flucht-Reaktion beschrieben.\n- Die **Hypothalamus-Hypophysen-Nebennierenrinden-Achse** (HHN-Achse) reagiert langsamer. Über eine Hormonkaskade wird **Cortisol** ausgeschüttet, das unter anderem Energiereserven mobilisiert und Entzündungsprozesse dämpft.\n\nKurzfristig ist diese Aktivierung sinnvoll und leistungsfördernd. Problematisch wird sie, wenn Belastungen **anhaltend** sind und **Erholungsphasen fehlen**. Dann bleibt das System dauerhaft aktiviert. Typische Folgen, die Ratsuchende berichten, sind Schlafstörungen, Grübeln, Reizbarkeit, Konzentrationsprobleme, Verspannungen, Kopfschmerzen, Magen-Darm-Beschwerden und erhöhte Infektanfälligkeit. Langfristig gilt chronischer Stress als Risikofaktor für zahlreiche körperliche und psychische Erkrankungen.\n\nFür die Beratung heißt das: Körperliche Beschwerden gehören ernst genommen, aber nicht vorschnell „psychologisiert“. Wer über Herzrasen, anhaltende Schlaflosigkeit oder Schmerzen klagt, sollte zu einer **ärztlichen Abklärung** ermutigt werden, um körperliche Ursachen auszuschließen. Beratung ersetzt keine Diagnostik."
          },
          {
            typ: "truefalse",
            aussage: "Da Stress im transaktionalen Modell durch Bewertungen entsteht, können körperliche Beschwerden in der Beratung grundsätzlich als psychisch verursacht betrachtet werden.",
            richtig: false,
            erklaerung: "Falsch. Die Bewertung beeinflusst zwar die Stressreaktion, daraus folgt aber nicht, dass Beschwerden psychisch verursacht sind. Körperliche Symptome müssen ärztlich abgeklärt werden. Beratende stellen keine Diagnosen und sollten Beschwerden weder bagatellisieren noch vorschnell psychologisch deuten."
          },
          {
            typ: "text",
            titel: "Ein praxistaugliches Modell: Stressoren, Verstärker, Reaktion",
            text: "Für die Psychoedukation hat sich das Drei-Ebenen-Modell des Gesundheitspsychologen **Gert Kaluza** bewährt. Es übersetzt die transaktionale Sicht in eine leicht verständliche Struktur:\n\n- **Stressoren** sind äußere Anforderungen und Belastungen: Arbeitsmenge, Zeitdruck, Konflikte, Lärm, Pflege von Angehörigen, finanzielle Sorgen.\n- **Persönliche Stressverstärker** sind Einstellungen, Motive und Bewertungen, mit denen eine Person an Anforderungen herangeht. Kaluza beschreibt etwa Muster wie „Sei perfekt!“, „Sei beliebt!“, „Sei stark!“, „Sei vorsichtig!“ und „Ich kann nicht!“.\n- **Stressreaktionen** sind die körperlichen, emotionalen, gedanklichen und verhaltensbezogenen Antworten: Anspannung, Gereiztheit, Grübeln, hastiges Arbeiten, Rückzug, vermehrter Alkoholkonsum.\n\nDaraus leitet Kaluza drei Säulen des Stressmanagements ab:\n\n- **instrumentelles Stressmanagement** setzt an den Stressoren an (Organisation, Kommunikation, Grenzen setzen, Probleme lösen),\n- **mentales Stressmanagement** setzt an den Verstärkern an (Einstellungen prüfen, Perspektiven erweitern, Akzeptanz),\n- **regeneratives Stressmanagement** setzt an der Reaktion an (Erholung, Entspannung, Bewegung, soziale Kontakte).\n\nGute Beratung prüft, auf welcher Ebene im Einzelfall der größte Hebel liegt, und vermeidet die Einseitigkeit, Stress ausschließlich als Problem der Einstellung oder ausschließlich als Problem der Umstände zu sehen."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Aspekte aus einem Erstgespräch den drei Ebenen nach Kaluza zu.",
            kategorien: ["Stressor", "persönlicher Stressverstärker", "Stressreaktion"],
            elemente: [
              { text: "Personalmangel im Team seit einem halben Jahr", kat: 0 },
              { text: "„Ich darf keine Fehler machen, sonst bin ich nichts wert.“", kat: 1 },
              { text: "Nächtliches Grübeln und Einschlafprobleme", kat: 2 },
              { text: "Pflege der demenzkranken Mutter am Wochenende", kat: 0 },
              { text: "„Ich muss alles allein schaffen, Hilfe annehmen ist Schwäche.“", kat: 1 },
              { text: "Gereiztheit gegenüber den eigenen Kindern", kat: 2 },
              { text: "Ständige Erreichbarkeit per Diensthandy", kat: 0 },
              { text: "Verspannungen im Nacken und Kopfschmerzen", kat: 2 }
            ],
            erklaerung: "Stressoren sind äußere Anforderungen. Stressverstärker sind innere Haltungen und Bewertungen wie Perfektionismus oder das Motiv, stark sein zu müssen. Stressreaktionen umfassen körperliche, emotionale und verhaltensbezogene Folgen. Die Zuordnung hilft, gezielt die passende Säule des Stressmanagements zu wählen."
          },
          {
            typ: "fall",
            titel: "Zwei Reaktionen auf dieselbe Nachricht",
            fall: "Konstruierte Lehrvignette: In einer Kita wird angekündigt, dass im kommenden Jahr ein neues pädagogisches Konzept eingeführt wird. Erzieherin A. freut sich und meldet sich für die Arbeitsgruppe. Erzieher B. schläft seitdem schlecht, ist reizbar und sagt in der Beratung: „Ich habe das letzte Mal schon nicht mitgehalten. Ich werde mich blamieren, und die Leitung wartet nur darauf.“",
            frage: "Welche Interpretation entspricht am besten dem transaktionalen Stressmodell?",
            optionen: [
              "Herr B. ist weniger belastbar als Frau A.; die Beratung sollte vor allem seine Stresstoleranz trainieren.",
              "Das Konzept ist objektiv belastend; die unterschiedlichen Reaktionen sind Zufall.",
              "Herr B. bewertet die Situation als Bedrohung und schätzt seine Ressourcen gering ein; Beratung kann an Bewertung, Ressourcen und konkreter Vorbereitung ansetzen.",
              "Frau A. verdrängt ihre Belastung, Herr B. nimmt sie realistisch wahr."
            ],
            richtig: 2,
            erklaerung: "Das Modell erklärt unterschiedliche Reaktionen durch unterschiedliche Bewertungen und Ressourceneinschätzungen. Herr B. erwartet Schaden (Bedrohung) und sieht wenig Bewältigungsmöglichkeiten, gestützt auf eine frühere Erfahrung. Beratung kann diese Annahmen prüfen, Ressourcen sichtbar machen und konkrete Schritte planen. Die anderen Optionen greifen entweder auf eine reine Eigenschaftserklärung, auf eine reine Reizerklärung oder auf eine unbelegte Deutung zurück."
          },
          {
            typ: "karten",
            titel: "Grundbegriffe der Stresspsychologie",
            karten: [
              { vorne: "Primäre Bewertung", hinten: "Einschätzung, ob eine Situation für das eigene Wohlergehen irrelevant, günstig-positiv oder stressbezogen (Schädigung/Verlust, Bedrohung, Herausforderung) ist." },
              { vorne: "Sekundäre Bewertung", hinten: "Einschätzung der verfügbaren inneren und äußeren Ressourcen und Handlungsmöglichkeiten." },
              { vorne: "Neubewertung (reappraisal)", hinten: "Erneute Einschätzung der Situation aufgrund neuer Informationen oder der Ergebnisse von Bewältigungsversuchen." },
              { vorne: "Eustress / Distress", hinten: "Von Hans Selye eingeführte Unterscheidung zwischen anregender, förderlicher und belastender, schädigender Beanspruchung." },
              { vorne: "HHN-Achse", hinten: "Hypothalamus-Hypophysen-Nebennierenrinden-Achse; vermittelt die langsamere hormonelle Stressreaktion mit Cortisolausschüttung." },
              { vorne: "Drei Säulen nach Kaluza", hinten: "Instrumentelles, mentales und regeneratives Stressmanagement – bezogen auf Stressoren, Stressverstärker und Stressreaktion." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Denken Sie an eine Situation aus Ihrem eigenen Berufsalltag, die Sie als belastend erlebt haben. Wie haben Sie die Situation damals bewertet, und welche Ressourcen haben Sie wahrgenommen oder übersehen?",
            hinweis: "Leitfragen: Was stand für mich auf dem Spiel? War es eher Bedrohung oder Herausforderung? Welche inneren und äußeren Ressourcen hatte ich? Welcher persönliche Stressverstärker war womöglich beteiligt? Würde ich die Situation heute anders bewerten?"
          }
        ]
      },
      {
        id: "B5-2",
        titel: "Bewältigung: Coping-Formen und Emotionsregulation",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Coping: Was Menschen tun, um mit Belastung umzugehen",
            text: "Lazarus und Folkman definieren Bewältigung (Coping) als die sich ständig verändernden kognitiven und verhaltensbezogenen Bemühungen, mit spezifischen äußeren oder inneren Anforderungen umzugehen, die als die eigenen Ressourcen beanspruchend oder übersteigend bewertet werden.\n\nIn dieser Definition stecken drei wichtige Punkte:\n\n- Coping ist **prozesshaft**: Menschen verändern ihre Strategien im Verlauf einer Belastung.\n- Coping umfasst **Gedanken und Handlungen**: Auch das innere Umdeuten, Ablenken oder Annehmen gehört dazu.\n- Coping ist **unabhängig vom Erfolg** definiert: Eine Strategie ist zunächst ein Bewältigungsversuch, unabhängig davon, ob sie hilft.\n\nDaraus folgt ein zentraler beraterischer Grundsatz: Es gibt **keine an sich guten oder schlechten Strategien**. Ob eine Strategie hilfreich ist, hängt davon ab, wie gut sie zur Situation passt, wie lange sie eingesetzt wird und welche Nebenwirkungen sie hat. Ablenkung kann in der akuten Phase nach einer schlechten Nachricht sehr entlastend sein; als dauerhafte Strategie gegenüber einem lösbaren Problem verhindert sie dagegen Veränderung.\n\nIn der Beratung lohnt es sich deshalb, das **bisherige Bewältigungsrepertoire** der ratsuchenden Person sorgfältig zu erkunden: Was haben Sie schon versucht? Was hat geholfen, wenn auch nur ein wenig? Wann hat es nicht geholfen? Diese Fragen würdigen die bisherigen Anstrengungen und liefern zugleich Material für neue Lösungen."
          },
          {
            typ: "text",
            titel: "Problemorientiertes und emotionsorientiertes Coping",
            text: "Lazarus und Folkman unterscheiden zwei grundlegende Funktionen der Bewältigung:\n\n- **Problemorientiertes Coping** zielt darauf, die belastende Situation selbst zu verändern: Informationen einholen, planen, Prioritäten setzen, Konflikte ansprechen, Hilfe organisieren, Arbeitsabläufe umgestalten.\n- **Emotionsorientiertes Coping** zielt darauf, die durch die Situation ausgelösten Gefühle zu regulieren: sich trösten lassen, die Situation in einem anderen Licht sehen, sich entspannen, Abstand gewinnen, akzeptieren, was nicht zu ändern ist.\n\nBeide Formen ergänzen sich und werden meist gleichzeitig eingesetzt. Ein wichtiger Befund der Copingforschung ist der Zusammenhang mit der **Kontrollierbarkeit**: Wo eine Situation veränderbar ist, ist problemorientiertes Coping in der Regel besonders wirksam. Wo sie nicht veränderbar ist – etwa bei einer chronischen Erkrankung eines Angehörigen oder einem Todesfall –, gewinnen emotionsorientierte Strategien wie Akzeptanz und Umbewertung an Bedeutung. Diese Passung zwischen Strategie und Situation wird auch als **Flexibilität im Coping** bezeichnet.\n\nWeitere in der Forschung häufig genutzte Unterscheidungen sind:\n\n- **annäherndes vs. vermeidendes Coping**: Wendet sich die Person der Belastung zu oder weicht sie ihr aus?\n- **soziales Coping**: Suche nach emotionaler oder praktischer Unterstützung,\n- **bedeutungsorientiertes Coping** (Folkman): Rückgriff auf Werte, Ziele und Überzeugungen, um auch in schwierigen Lagen Sinn und positive Momente zu finden.\n\nGerade der letzte Punkt schlägt eine Brücke zur sinnzentrierten Beratung, die in Modul B7 vertieft wird."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Bewältigungsversuche zu.",
            kategorien: ["problemorientiert", "emotionsorientiert"],
            elemente: [
              { text: "Mit der Vorgesetzten ein Gespräch über die Dienstplanung vereinbaren", kat: 0 },
              { text: "Abends eine Freundin anrufen, um sich auszusprechen und getröstet zu werden", kat: 1 },
              { text: "Eine Liste aller offenen Aufgaben anlegen und priorisieren", kat: 0 },
              { text: "Sich sagen: „Das ist ärgerlich, aber kein Weltuntergang.“", kat: 1 },
              { text: "Sich über Unterstützungsangebote der Pflegekasse informieren", kat: 0 },
              { text: "Nach einem belastenden Termin bewusst einen Spaziergang machen, um sich zu beruhigen", kat: 1 },
              { text: "Eine Fortbildung zum neuen Dokumentationssystem besuchen", kat: 0 }
            ],
            erklaerung: "Problemorientierte Strategien verändern die Situation oder die eigene Handlungsfähigkeit in ihr. Emotionsorientierte Strategien regulieren das Erleben. Beachten Sie: Das Gespräch mit einer Freundin kann auch problemorientiert sein, wenn es um konkreten Rat geht; hier steht aber Trost im Vordergrund."
          },
          {
            typ: "mc",
            frage: "Eine Frau pflegt ihren Ehemann mit fortgeschrittener Parkinson-Erkrankung. Die Erkrankung ist nicht heilbar. Welche Aussage zur Copingstrategie ist am ehesten zutreffend?",
            optionen: [
              "Nur problemorientiertes Coping ist sinnvoll, da emotionsorientiertes Coping eine Form der Verdrängung ist.",
              "Problemorientiertes Coping ist für Entlastungsangebote sinnvoll; für das Unveränderliche gewinnen Akzeptanz und Umbewertung an Bedeutung.",
              "Emotionsorientiertes Coping ist hier generell ungeeignet, weil es die Trauer verlängert.",
              "Die Wahl der Strategie spielt keine Rolle, entscheidend ist allein die Persönlichkeit."
            ],
            richtig: 1,
            erklaerung: "Die Forschung betont die Passung: Veränderbare Aspekte (Entlastung, Pflegedienst, Hilfsmittel) eignen sich für problemorientiertes Coping, unveränderbare Aspekte (Krankheitsverlauf) eher für emotionsorientierte Strategien wie Akzeptanz. Emotionsorientiertes Coping ist nicht mit Verdrängung gleichzusetzen. Die Persönlichkeit spielt eine Rolle, aber nicht allein."
          },
          {
            typ: "text",
            titel: "Emotionsregulation: Das Prozessmodell nach Gross",
            text: "Emotionsorientiertes Coping lässt sich mit dem **Prozessmodell der Emotionsregulation** von **James J. Gross** genauer beschreiben. Emotionsregulation meint alle Prozesse, mit denen Menschen beeinflussen, welche Emotionen sie haben, wann sie sie haben und wie sie sie erleben und ausdrücken. Gross unterscheidet fünf Ansatzpunkte entlang des Entstehungsprozesses einer Emotion:\n\n- **Situationsauswahl**: Situationen aufsuchen oder meiden (z. B. eine belastende Feier früher verlassen).\n- **Situationsmodifikation**: die Situation aktiv verändern (z. B. um eine Pause bitten).\n- **Aufmerksamkeitslenkung**: den Fokus verschieben (z. B. Ablenkung, Konzentration auf einen anderen Aspekt).\n- **Kognitive Veränderung**: die Bedeutung der Situation verändern, insbesondere durch **Neubewertung** (*reappraisal*).\n- **Reaktionsmodulation**: die bereits entstandene Reaktion beeinflussen (z. B. Atemübung, Bewegung, aber auch **Unterdrückung** des Gefühlsausdrucks).\n\nDie ersten vier Strategien setzen an, **bevor** die emotionale Reaktion voll entfaltet ist (antezedenzfokussiert); die fünfte setzt **danach** an (reaktionsfokussiert).\n\nBesonders gut untersucht ist der Vergleich von **Neubewertung** und **Ausdrucksunterdrückung**. In zahlreichen Studien aus der Arbeitsgruppe um Gross war gewohnheitsmäßige Neubewertung mit günstigeren Ergebnissen für Wohlbefinden und Beziehungen verbunden, gewohnheitsmäßige Unterdrückung eher mit ungünstigeren. Unterdrückung ist aber nicht immer schädlich: In bestimmten beruflichen Situationen kann es sinnvoll sein, den Ausdruck vorübergehend zu kontrollieren. Problematisch wird sie als dauerhaftes Muster."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Beispiele der passenden Strategie im Prozessmodell nach Gross zu.",
            paare: [
              ["Einen Termin mit einem aggressiven Angehörigen nur zu zweit wahrnehmen", "Situationsmodifikation"],
              ["Sich vor dem Teammeeting ganz auf die eigene Präsentation konzentrieren statt auf die kritische Kollegin", "Aufmerksamkeitslenkung"],
              ["Die Kritik der Leitung als Hinweis auf deren eigenen Druck verstehen", "kognitive Veränderung (Neubewertung)"],
              ["Ein angespanntes Lächeln aufsetzen, obwohl man innerlich wütend ist", "Reaktionsmodulation (Unterdrückung)"],
              ["Auf den Besuch einer Veranstaltung verzichten, bei der der Ex-Partner anwesend ist", "Situationsauswahl"]
            ],
            erklaerung: "Die fünf Strategien folgen dem zeitlichen Verlauf der Emotionsentstehung. Situationsauswahl und -modifikation setzen am frühesten an, Reaktionsmodulation am spätesten."
          },
          {
            typ: "truefalse",
            aussage: "Nach dem Forschungsstand zur Emotionsregulation ist das Unterdrücken des Gefühlsausdrucks in jeder Situation schädlich und sollte in der Beratung grundsätzlich abtrainiert werden.",
            richtig: false,
            erklaerung: "Falsch. Gewohnheitsmäßige Unterdrückung ist mit ungünstigeren Ergebnissen verbunden als gewohnheitsmäßige Neubewertung. Situativ kann eine Kontrolle des Ausdrucks aber angemessen und hilfreich sein, etwa in professionellen Rollen. Beratung zielt auf ein flexibles Repertoire, nicht auf das pauschale Verbot einer Strategie."
          },
          {
            typ: "text",
            titel: "Ungünstige Bewältigungsmuster erkennen",
            text: "Manche Strategien bringen kurzfristig Erleichterung, verschärfen die Belastung aber langfristig. In der Beratung ist es wichtig, sie wertschätzend, aber klar anzusprechen. Typische Muster sind:\n\n- **Dauerhafte Vermeidung**: Aufschieben von Gesprächen, Ignorieren von Post, sozialer Rückzug. Die Angst sinkt kurzfristig, Probleme wachsen jedoch und die Selbstwirksamkeit sinkt.\n- **Grübeln (Rumination)**: wiederholtes, kreisendes Nachdenken über Probleme und deren Ursachen ohne Lösungsfortschritt. Grübeln fühlt sich oft wie Problemlösen an, verstärkt aber negative Stimmung und ist ein bekannter Risikofaktor für depressive Entwicklungen.\n- **Substanzgebrauch**: Alkohol, Beruhigungsmittel oder Cannabis zur Entspannung oder zum Einschlafen. Hier ist besondere Aufmerksamkeit geboten, da sich schleichend Abhängigkeiten entwickeln können.\n- **Überkompensation**: noch mehr arbeiten, noch weniger Pausen, Verzicht auf Erholung, um „hinterherzukommen“.\n- **Ausagieren**: Gereiztheit und Aggression gegenüber Nahestehenden.\n\nHilfreich ist eine **funktionale Betrachtung**: Welche Funktion erfüllt das Verhalten? Was ist der kurzfristige Gewinn, was der langfristige Preis? Diese Fragen vermeiden moralische Bewertung und öffnen den Raum für Alternativen, die dieselbe Funktion besser erfüllen. Bei Hinweisen auf problematischen Substanzkonsum sollte an spezialisierte Suchtberatungsstellen verwiesen werden."
          },
          {
            typ: "luecke",
            text: "Wiederholtes, kreisendes Nachdenken ohne Lösungsfortschritt wird als {{Rumination|Reappraisal|Dereflexion}} bezeichnet. Es fühlt sich oft an wie {{Problemlösen|Entspannung|Akzeptanz}}, verstärkt aber negative Stimmung. In der Beratung hilft eine {{funktionale|moralische|diagnostische}} Betrachtung, die nach kurzfristigem Gewinn und langfristigem Preis eines Verhaltens fragt.",
            erklaerung: "Rumination (Grübeln) ist ein gut belegter Risikofaktor für depressive Entwicklungen. Die funktionale Betrachtung würdigt den kurzfristigen Nutzen eines Verhaltens und macht seine langfristigen Kosten sichtbar, ohne die Person abzuwerten."
          },
          {
            typ: "dialog",
            titel: "Bewältigungsrepertoire erkunden",
            einleitung: "Konstruierte Situation: Herr K., 44 Jahre, Teamleiter in einem Logistikunternehmen, kommt wegen „Dauerstress“ in die Beratung. Sie möchten sein bisheriges Bewältigungsverhalten erkunden.",
            runden: [
              {
                klient: "Ehrlich gesagt bin ich nur hier, weil meine Frau darauf bestanden hat. Ich komme schon klar, ich muss einfach mehr durchziehen.",
                antworten: [
                  { text: "Dann sollten wir zuerst klären, warum Sie Hilfe so schwer annehmen können.", gut: false, feedback: "Die Antwort deutet vorschnell und kann als Vorwurf erlebt werden. Sie gefährdet die Arbeitsbeziehung in der Anfangsphase." },
                  { text: "Es klingt, als hätten Sie bisher vieles aus eigener Kraft geschafft. Mich interessiert, was Ihnen dabei bisher geholfen hat – und wo Sie merken, dass es enger wird.", gut: true, feedback: "Gut. Sie würdigen die bisherigen Anstrengungen, nehmen die Ambivalenz ernst und laden zur Erkundung von Ressourcen und Grenzen ein." },
                  { text: "Mehr durchziehen ist aber genau das, was Sie krank machen wird.", gut: false, feedback: "Die Warnung ist belehrend und erzeugt eher Widerstand. Sie übergeht zudem, was den Klienten bisher getragen hat." }
                ]
              },
              {
                klient: "Geholfen? Abends ein, zwei Bier, dann kann ich abschalten. Und am Wochenende arbeite ich vor, dann ist der Montag nicht so schlimm.",
                antworten: [
                  { text: "Bier und Arbeit am Wochenende – das sind keine guten Strategien.", gut: false, feedback: "Eine pauschale Bewertung ohne Verständnis für die Funktion führt eher zu Rechtfertigung als zu Reflexion." },
                  { text: "Wie viel trinken Sie denn genau, und seit wann? Das klingt nach einem Alkoholproblem.", gut: false, feedback: "Die Nachfrage nach dem Konsum ist an sich berechtigt, die vorschnelle Etikettierung aber nicht. Sie kann Scham auslösen und das Gespräch blockieren." },
                  { text: "Beides scheint kurzfristig Erleichterung zu bringen: abschalten können und den Montag entschärfen. Was merken Sie, wenn Sie auf einige Wochen zurückschauen – was bringen diese Wege, und was kosten sie Sie?", gut: true, feedback: "Gut. Die funktionale Betrachtung würdigt den kurzfristigen Gewinn und lädt zur Reflexion über den langfristigen Preis ein, ohne zu moralisieren. Den Alkoholkonsum können Sie im weiteren Verlauf behutsam genauer erfragen." }
                ]
              },
              {
                klient: "Was es kostet … Ich bin eigentlich nie richtig erholt. Und meine Frau sagt, ich sei nur noch gereizt.",
                antworten: [
                  { text: "Sie nehmen also selbst wahr, dass die Erholung fehlt und die Gereiztheit Ihre Familie erreicht. Was wäre für Sie ein erstes Zeichen dafür, dass es ein Stück besser wird?", gut: true, feedback: "Gut. Sie spiegeln die eigene Wahrnehmung des Klienten und richten den Blick auf ein konkretes, selbst definiertes Ziel." },
                  { text: "Ihre Frau hat recht. Sie sollten sofort mit dem Vorarbeiten aufhören.", gut: false, feedback: "Ratschläge und Parteinahme übergehen die Eigenverantwortung des Klienten. Veränderung, die nicht selbst gewählt ist, hält selten." },
                  { text: "Gereiztheit ist ein typisches Burnout-Symptom. Ich vermute, Sie sind im Burnout.", gut: false, feedback: "Eine Diagnose oder diagnostische Vermutung steht Beratenden ohne Heilkundeerlaubnis nicht zu und ist hier auch fachlich vorschnell. Bei Hinweisen auf ernsthafte Erschöpfung ist eine ärztliche Abklärung zu empfehlen." }
                ]
              }
            ]
          },
          {
            typ: "multi",
            frage: "Welche Aussagen zum Coping sind fachlich zutreffend? (Mehrere Antworten möglich)",
            optionen: [
              "Coping ist nach Lazarus und Folkman unabhängig vom Erfolg definiert.",
              "Emotionsorientiertes Coping ist grundsätzlich weniger wirksam als problemorientiertes Coping.",
              "Die Passung zwischen Strategie und Kontrollierbarkeit der Situation ist bedeutsam.",
              "Grübeln ist eine Form problemorientierten Copings und deshalb in der Regel hilfreich.",
              "Bedeutungsorientiertes Coping greift auf Werte und Ziele zurück."
            ],
            richtig: [0, 2, 4],
            erklaerung: "Coping bezeichnet Bewältigungsversuche unabhängig vom Ergebnis. Die Wirksamkeit hängt von der Passung ab; emotionsorientiertes Coping ist nicht generell unterlegen, sondern bei unveränderbaren Belastungen oft besonders bedeutsam. Grübeln wirkt wie Problemlösen, ist aber in der Regel unproduktiv. Bedeutungsorientiertes Coping nach Folkman nutzt Werte und Ziele."
          },
          {
            typ: "reflexion",
            frage: "Welche Bewältigungsstrategien nutzen Sie selbst, wenn Sie beruflich stark belastet sind? Welche davon sind eher problemorientiert, welche eher emotionsorientiert, und welche haben kurzfristigen Gewinn, aber langfristigen Preis?",
            hinweis: "Leitfragen: Was tue ich zuerst, wenn es eng wird? Worauf verzichte ich in belasteten Phasen? Welche Strategie würde ich gern stärken? Wie kann ich meine eigenen Erfahrungen in der Beratung nutzen, ohne sie auf andere zu übertragen?"
          }
        ]
      },
      {
        id: "B5-3",
        titel: "Burnout und Depression: Erkennen und Abgrenzen",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Herkunft und Bedeutung des Burnout-Begriffs",
            text: "Der Begriff **Burnout** wurde in den 1970er-Jahren durch den Psychoanalytiker **Herbert Freudenberger** bekannt, der bei sich selbst und bei Mitarbeitenden in helfenden Einrichtungen einen Zustand von Erschöpfung, Desillusionierung und nachlassendem Engagement beschrieb. Systematisch erforscht wurde Burnout vor allem durch die Sozialpsychologin **Christina Maslach**, die gemeinsam mit Susan Jackson das **Maslach Burnout Inventory** (MBI) entwickelte.\n\nMaslach beschreibt Burnout als Reaktion auf **chronische zwischenmenschliche und arbeitsbezogene Stressoren** mit drei Dimensionen:\n\n- **Emotionale Erschöpfung**: das Gefühl, ausgelaugt und emotional überfordert zu sein; die Energie reicht nicht mehr.\n- **Depersonalisation bzw. Zynismus**: eine distanzierte, gleichgültige oder abwertende Haltung gegenüber den Menschen, mit denen man arbeitet, oder gegenüber der Arbeit insgesamt.\n- **Reduzierte persönliche Leistungsfähigkeit** (später auch: reduzierte Wirksamkeit): das Gefühl, nichts mehr zu bewirken und den eigenen Ansprüchen nicht mehr zu genügen.\n\nMaslach und Michael Leiter betonen, dass Burnout nicht nur ein individuelles Problem ist. Sie beschreiben sechs Bereiche, in denen ein Missverhältnis zwischen Person und Arbeitsplatz Burnout begünstigt: **Arbeitsbelastung, Kontrolle, Belohnung, Gemeinschaft, Fairness und Werte**. Für die Beratung bedeutet das: Burnout-Prävention ist auch eine Frage von Arbeitsbedingungen und Führung, nicht allein eine Frage individueller Belastbarkeit."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Äußerungen den drei Burnout-Dimensionen nach Maslach zu.",
            paare: [
              ["„Nach der Schicht bin ich vollkommen leer, selbst am Wochenende erhole ich mich nicht.“", "emotionale Erschöpfung"],
              ["„Die Bewohner sind für mich nur noch Nummern, ehrlich gesagt ist mir egal, wie es ihnen geht.“", "Depersonalisation / Zynismus"],
              ["„Egal was ich mache, es ändert nichts. Ich bin einfach nicht mehr gut in meinem Job.“", "reduzierte Leistungsfähigkeit / Wirksamkeit"]
            ],
            erklaerung: "Die drei Dimensionen beschreiben Erschöpfung, innere Distanz bzw. Zynismus und das Gefühl verringerter Wirksamkeit. Sie treten häufig gemeinsam auf, können aber unterschiedlich stark ausgeprägt sein."
          },
          {
            typ: "text",
            titel: "Burnout in der ICD-11: QD85",
            text: "In der von der Weltgesundheitsorganisation verabschiedeten und seit 2022 in Kraft befindlichen **ICD-11** ist Burnout unter dem Code **QD85** aufgeführt. Entscheidend ist der Ort dieser Einordnung: Burnout steht im Kapitel „Faktoren, die den Gesundheitszustand beeinflussen oder zur Inanspruchnahme des Gesundheitswesens führen“, und zwar im Abschnitt zu Problemen im Zusammenhang mit Beschäftigung oder Arbeitslosigkeit. Burnout wird damit ausdrücklich **nicht als Krankheit oder psychische Störung** klassifiziert, sondern als **berufsbezogenes Phänomen**.\n\nDie ICD-11 beschreibt Burnout als Syndrom, das aus **chronischem Stress am Arbeitsplatz** resultiert, der **nicht erfolgreich bewältigt** wurde. Es ist durch drei Dimensionen gekennzeichnet, die erkennbar an Maslach anschließen:\n\n- Gefühle von Energieverlust oder Erschöpfung,\n- zunehmende mentale Distanz zur eigenen Arbeit oder negative bzw. zynische Gefühle in Bezug auf die Arbeit,\n- verringerte berufliche Leistungsfähigkeit bzw. Wirksamkeit.\n\nZwei Präzisierungen sind wichtig: Der Begriff bezieht sich **ausschließlich auf den beruflichen Kontext** und soll nicht auf Erfahrungen in anderen Lebensbereichen angewandt werden. Und vor der Zuordnung sollen Anpassungsstörungen, Angst- und furchtbezogene Störungen sowie affektive Störungen **ausgeschlossen** werden.\n\nFür die Beratungspraxis bedeutet dies: „Burnout“ ist keine Diagnose, die man stellt, und auch keine Bezeichnung für jede Form von Erschöpfung. Erschöpfung durch die Pflege eines Angehörigen oder durch Mehrfachbelastung in der Familie ist ernst zu nehmen, fällt aber nach der ICD-11 nicht unter QD85."
          },
          {
            typ: "truefalse",
            aussage: "In der ICD-11 ist Burnout (QD85) als psychische Störung im Kapitel der psychischen und Verhaltensstörungen klassifiziert.",
            richtig: false,
            erklaerung: "Falsch. QD85 steht im Kapitel der Faktoren, die den Gesundheitszustand beeinflussen oder zur Inanspruchnahme des Gesundheitswesens führen. Burnout wird als berufsbezogenes Phänomen beschrieben, nicht als Krankheit oder psychische Störung."
          },
          {
            typ: "multi",
            frage: "Welche Merkmale gehören zur Beschreibung von Burnout in der ICD-11? (Mehrere Antworten möglich)",
            optionen: [
              "Gefühle von Energieverlust oder Erschöpfung",
              "Bezug ausschließlich auf den beruflichen Kontext",
              "Anwendbarkeit auf Erschöpfung durch familiäre Pflegeverantwortung",
              "Zunehmende mentale Distanz oder Zynismus gegenüber der Arbeit",
              "Mindestdauer von sechs Monaten als festes Kriterium",
              "Verringerte berufliche Wirksamkeit"
            ],
            richtig: [0, 1, 3, 5],
            erklaerung: "Die ICD-11 nennt Erschöpfung, mentale Distanz/Zynismus und verringerte Wirksamkeit und beschränkt den Begriff auf den beruflichen Kontext. Erschöpfung durch familiäre Pflege fällt ausdrücklich nicht darunter. Eine feste Mindestdauer von sechs Monaten ist kein Bestandteil der Beschreibung; gefordert ist chronischer, nicht erfolgreich bewältigter Arbeitsstress."
          },
          {
            typ: "text",
            titel: "Abgrenzung zur Depression",
            text: "Burnout und Depression überschneiden sich erheblich: Erschöpfung, Antriebsmangel, Konzentrationsprobleme, Schlafstörungen und Rückzug kommen bei beiden vor. Die Forschung diskutiert kontrovers, wie trennscharf beide Konzepte sind. Für die Beratung ist eine klare Haltung wichtig: **Die Abgrenzung ist eine diagnostische Aufgabe, die Ärztinnen und Ärzten bzw. Psychotherapeutinnen und Psychotherapeuten vorbehalten ist.** Beratende sollen aber Hinweise erkennen, die eine Abklärung dringlich machen.\n\nEine **depressive Episode** ist eine behandlungsbedürftige psychische Erkrankung. Zu den Kernsymptomen zählen nach der ICD-11 eine **gedrückte Stimmung** oder ein deutlich **vermindertes Interesse bzw. Freude** an Aktivitäten, die über mindestens **zwei Wochen** fast täglich bestehen. Hinzu kommen weitere Symptome wie Konzentrationsprobleme, Gefühle von Wertlosigkeit oder übermäßiger Schuld, Hoffnungslosigkeit, wiederkehrende Gedanken an den Tod oder Suizid, Schlaf- und Appetitveränderungen, psychomotorische Veränderungen sowie verminderte Energie.\n\nAls Orientierung für Unterschiede werden häufig genannt:\n\n- Burnout bezieht sich auf den **Arbeitskontext**; bei einer Depression ist das Erleben meist **generalisiert** und betrifft alle Lebensbereiche.\n- Bei vorwiegender Erschöpfung kann die Freude an Freizeit, Urlaub oder Familie oft noch erlebt werden; bei einer Depression ist sie häufig grundlegend beeinträchtigt.\n- Ausgeprägte **Schuldgefühle, Wertlosigkeit, Hoffnungslosigkeit** und **Suizidgedanken** sind Warnzeichen, die auf eine Depression hindeuten können.\n\nAnhaltende Erschöpfung kann in eine Depression übergehen. Deshalb gilt: im Zweifel immer an eine ärztliche oder psychotherapeutische Abklärung verweisen."
          },
          {
            typ: "merke",
            text: "Beratende stellen keine Diagnosen. Sie achten auf Warnzeichen – generalisierte Freudlosigkeit, Hoffnungslosigkeit, Wertlosigkeit, Suizidgedanken, starke Funktionseinbußen – und verweisen dann zeitnah an Hausarzt, Facharzt oder psychotherapeutische Praxis."
          },
          {
            typ: "kategorien",
            frage: "Welche Hinweise sprechen dafür, dass über die Beratung hinaus dringend eine ärztliche oder psychotherapeutische Abklärung erfolgen sollte?",
            kategorien: ["Abklärung dringend empfehlen", "zunächst in der Beratung bearbeitbar"],
            elemente: [
              { text: "Seit Wochen kann sich die Person über nichts mehr freuen, auch nicht über die Enkelkinder.", kat: 0 },
              { text: "Die Person äußert: „Manchmal denke ich, es wäre besser, wenn ich nicht mehr da wäre.“", kat: 0 },
              { text: "Die Person möchte lernen, im Team klarer Nein zu sagen.", kat: 1 },
              { text: "Starkes Gewicht- und Appetitverlust ohne bekannte Ursache", kat: 0 },
              { text: "Die Person sucht Ideen, wie sie den Feierabend besser vom Dienst trennen kann.", kat: 1 },
              { text: "Die Person fühlt sich wertlos und gibt sich an allem die Schuld.", kat: 0 },
              { text: "Die Person überlegt, ob sie ihre Stundenzahl reduzieren soll.", kat: 1 }
            ],
            erklaerung: "Generalisierte Freudlosigkeit, Suizidgedanken, deutliche körperliche Veränderungen sowie Wertlosigkeits- und Schuldgefühle können auf eine behandlungsbedürftige Erkrankung hinweisen. Bei Suizidgedanken muss zusätzlich unmittelbar eine Einschätzung der Gefährdung erfolgen (Modul B6). Anliegen zu Abgrenzung, Arbeitsorganisation und Entscheidungsfindung sind typische Beratungsthemen – Beratung und Behandlung können auch parallel laufen."
          },
          {
            typ: "text",
            titel: "Wie Beratung bei Erschöpfung hilfreich sein kann",
            text: "Bei erschöpften Ratsuchenden ist die Rolle der Beratung klar zu definieren. Sie kann eine ärztliche oder psychotherapeutische Behandlung nicht ersetzen, aber sie kann viel leisten – vorbeugend, begleitend oder nach einer Behandlung:\n\n- **Entlastung und Verstehen**: Zuhören, Belastung würdigen, Scham reduzieren. Viele Betroffene erleben ihre Erschöpfung als persönliches Versagen.\n- **Psychoedukation**: das Stressmodell und die Bedeutung von Erholung verständlich erklären, Warnzeichen besprechen.\n- **Analyse der Belastungsfaktoren**: Welche Stressoren, welche persönlichen Verstärker, welche Passungsprobleme in den sechs Bereichen nach Maslach und Leiter (Arbeitsbelastung, Kontrolle, Belohnung, Gemeinschaft, Fairness, Werte)?\n- **Erholung strukturieren**: Pausen, Schlafhygiene, Bewegung, soziale Kontakte und Tätigkeiten, die Freude machen. Die Erholungsforschung betont unter anderem das gedankliche Abschalten von der Arbeit (*psychological detachment*).\n- **Handlungsspielräume erweitern**: Gespräche mit Vorgesetzten vorbereiten, Grenzen formulieren, Unterstützungsangebote wie betriebliche Sozialberatung, Betriebsarzt oder betriebliches Eingliederungsmanagement kennen.\n- **Werte- und Sinnfragen**: Erschöpfung ist häufig mit einem Wertekonflikt verbunden – etwa wenn eine Pflegekraft ihren Anspruch an gute Pflege unter den Bedingungen nicht verwirklichen kann.\n\nWichtig ist, keine zusätzlichen Leistungsanforderungen aufzubauen. Wer erschöpft ist, braucht keine anspruchsvolle Liste von Selbstoptimierungsübungen, sondern kleine, realistische Schritte."
          },
          {
            typ: "fall",
            titel: "Erschöpfung oder mehr?",
            fall: "Konstruierte Lehrvignette: Frau M., 52 Jahre, Sozialarbeiterin in der Jugendhilfe, berichtet von zunehmender Erschöpfung seit einem Jahr. In den letzten drei Wochen habe sich etwas verändert: Sie könne sich auch über ihren Garten nicht mehr freuen, wache jeden Morgen um vier Uhr auf, fühle sich als „Totalversagerin“ und habe kaum noch Appetit. Sie sagt: „Ich glaube, ich habe einfach ein Burnout. Können Sie mir Tipps zur Entspannung geben?“",
            frage: "Wie gehen Sie am angemessensten vor?",
            optionen: [
              "Sie bestätigen den Burnout und beginnen mit Progressiver Muskelentspannung.",
              "Sie erklären, dass es sich um eine Depression handelt, und beenden die Beratung.",
              "Sie nehmen die Belastung ernst, fragen behutsam auch nach Hoffnungslosigkeit und Suizidgedanken und empfehlen eine zeitnahe ärztliche oder psychotherapeutische Abklärung; die Beratung kann begleitend fortgeführt werden.",
              "Sie empfehlen zunächst einen längeren Urlaub und vereinbaren in sechs Wochen einen Folgetermin."
            ],
            richtig: 2,
            erklaerung: "Die Schilderung enthält mehrere Warnzeichen über die berufliche Erschöpfung hinaus: generalisierte Freudlosigkeit, frühmorgendliches Erwachen, Wertlosigkeitserleben und Appetitverlust über mehrere Wochen. Eine Diagnose steht Beratenden nicht zu – weder „Burnout“ noch „Depression“. Angemessen ist es, die Gefährdung behutsam zu erfragen und eine zeitnahe Abklärung zu empfehlen. Urlaub allein oder Entspannungsübungen werden der Situation nicht gerecht."
          },
          {
            typ: "luecke",
            text: "Die Sozialpsychologin {{Christina Maslach|Susan Folkman|Hannah Arendt}} beschreibt Burnout mit drei Dimensionen. In der ICD-11 trägt Burnout den Code {{QD85|6A70|F43.2}} und bezieht sich ausschließlich auf den {{beruflichen|familiären|gesamten}} Kontext.",
            erklaerung: "Christina Maslach prägte die Burnout-Forschung maßgeblich. 6A70 ist in der ICD-11 der Code für eine einzelne depressive Episode, F43.2 der ICD-10-Code für Anpassungsstörungen. QD85 gilt nur für den Arbeitskontext."
          },
          {
            typ: "karten",
            titel: "Burnout und Depression – Kernwissen",
            karten: [
              { vorne: "Drei Dimensionen nach Maslach", hinten: "Emotionale Erschöpfung, Depersonalisation/Zynismus, reduzierte persönliche Leistungsfähigkeit bzw. Wirksamkeit." },
              { vorne: "ICD-11 QD85", hinten: "Burnout als berufsbezogenes Phänomen infolge chronischen, nicht erfolgreich bewältigten Arbeitsstresses; keine Krankheit, nur für den beruflichen Kontext." },
              { vorne: "Sechs Bereiche nach Maslach und Leiter", hinten: "Arbeitsbelastung, Kontrolle, Belohnung, Gemeinschaft, Fairness, Werte – Missverhältnisse begünstigen Burnout." },
              { vorne: "Kernsymptome einer depressiven Episode", hinten: "Gedrückte Stimmung oder deutlich vermindertes Interesse bzw. Freude, über mindestens zwei Wochen fast täglich, mit weiteren Symptomen." },
              { vorne: "Warnzeichen für dringende Abklärung", hinten: "Generalisierte Freudlosigkeit, Hoffnungslosigkeit, Wertlosigkeit, Suizidgedanken, starke körperliche Veränderungen, deutliche Funktionseinbußen." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Wie würden Sie einer ratsuchenden Person, die sich selbst „Burnout“ attestiert, wertschätzend erklären, warum Sie eine ärztliche Abklärung empfehlen?",
            hinweis: "Leitfragen: Wie kann ich die Selbstbeschreibung würdigen, ohne sie zu bestätigen? Welche Worte vermeiden Kränkung oder Angst? Wie mache ich deutlich, dass ich die Person nicht „weiterreiche“, sondern die Beratung fortsetzen kann? Welche Anlaufstellen kenne ich in meiner Region?"
          }
        ]
      },
      {
        id: "B5-4",
        titel: "Resilienz, Salutogenese und Entspannung in der Beratungspraxis",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Resilienz: Mehr als eine Eigenschaft",
            text: "**Resilienz** bezeichnet die psychische Widerstandsfähigkeit, also die Fähigkeit, Krisen und belastende Lebensumstände zu bewältigen und sich trotz widriger Bedingungen positiv zu entwickeln oder nach Belastungen wieder zu stabilisieren.\n\nEinflussreich war die Längsschnittstudie der Entwicklungspsychologin **Emmy Werner** und ihrer Kollegin **Ruth Smith** auf der hawaiianischen Insel Kauai, die einen ganzen Geburtsjahrgang über Jahrzehnte begleitete. Sie zeigte, dass sich ein erheblicher Teil der Kinder, die unter hohen Risikobedingungen aufwuchsen, dennoch zu kompetenten und zufriedenen Erwachsenen entwickelte. Als schützend erwiesen sich unter anderem eine stabile Bezugsperson, soziale Unterstützung außerhalb der Familie und persönliche Kompetenzen.\n\nDie heutige Resilienzforschung betont drei Punkte, die für die Beratung wichtig sind:\n\n- Resilienz ist **kein festes Persönlichkeitsmerkmal**, sondern ein dynamischer Prozess im Zusammenspiel von Person und Umwelt.\n- Resilienz ist **situationsspezifisch**: Wer in einem Lebensbereich widerstandsfähig ist, muss es nicht in einem anderen sein.\n- Resilienz entsteht wesentlich durch **Schutzfaktoren**, etwa tragfähige Beziehungen, Selbstwirksamkeitserwartung, Problemlösefähigkeiten, Emotionsregulation, realistischer Optimismus und das Erleben von Sinn.\n\nEine kritische Anmerkung gehört dazu: Resilienz darf nicht zur Forderung werden, alles aushalten zu müssen. Wenn Belastungen strukturell unzumutbar sind, ist nicht mangelnde Resilienz das Problem. Beratung, die nur die individuelle Widerstandskraft stärkt und die Verhältnisse ausblendet, kann ungewollt zur Überforderung beitragen."
          },
          {
            typ: "truefalse",
            aussage: "Nach heutigem Verständnis ist Resilienz eine angeborene, stabile Eigenschaft, die man entweder besitzt oder nicht.",
            richtig: false,
            erklaerung: "Falsch. Resilienz wird als dynamischer, situationsspezifischer Prozess verstanden, der durch Schutzfaktoren in der Person und in ihrer Umwelt entsteht. Sie kann sich im Lebenslauf verändern und ist durch Beziehungen, Erfahrungen und Lernprozesse beeinflussbar."
          },
          {
            typ: "text",
            titel: "Salutogenese und Kohärenzgefühl nach Antonovsky",
            text: "Der Medizinsoziologe **Aaron Antonovsky** stellte der krankheitsorientierten Frage „Was macht krank?“ die **salutogenetische** Frage gegenüber: **Was hält Menschen gesund, obwohl sie vielfältigen Belastungen ausgesetzt sind?**\n\nAntonovsky versteht Gesundheit und Krankheit nicht als Gegensätze, sondern als Pole eines **Kontinuums**. Jeder Mensch befindet sich irgendwo zwischen diesen Polen, und es geht darum, was ihn in Richtung Gesundheit bewegt. Eine zentrale Rolle spielen dabei **generalisierte Widerstandsressourcen** – etwa soziale Unterstützung, Wissen, materielle Sicherheit, kulturelle Einbindung – und vor allem das **Kohärenzgefühl** (*sense of coherence*).\n\nDas Kohärenzgefühl ist eine grundlegende Lebensorientierung mit drei Komponenten:\n\n- **Verstehbarkeit**: Die Ereignisse des Lebens erscheinen als geordnet, nachvollziehbar und erklärbar, nicht als chaotisch und willkürlich.\n- **Handhabbarkeit**: Man vertraut darauf, dass Ressourcen zur Verfügung stehen, um Anforderungen zu bewältigen – eigene oder die von Menschen, denen man vertraut.\n- **Bedeutsamkeit** (auch Sinnhaftigkeit): Die Anforderungen des Lebens erscheinen als Herausforderungen, für die es sich lohnt, Energie einzusetzen.\n\nAntonovsky betrachtete die Bedeutsamkeit als die wichtigste Komponente, weil sie die Motivation liefert, Verstehen und Handhaben überhaupt anzustreben. Hier zeigt sich eine deutliche Nähe zur Sinnorientierung der Logotherapie. Für die Beratung ergibt sich daraus eine Ressourcenperspektive: nicht nur Probleme analysieren, sondern gezielt das Verstehen, die Handlungsmöglichkeiten und die Sinnbezüge der ratsuchenden Person stärken."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Beratungsinterventionen der Komponente des Kohärenzgefühls zu, die sie in erster Linie stärken.",
            paare: [
              ["Das Stressmodell erklären, damit die eigenen Reaktionen nachvollziehbar werden", "Verstehbarkeit"],
              ["Gemeinsam eine Liste von Personen und Stellen erstellen, die konkret helfen können", "Handhabbarkeit"],
              ["Fragen: Wofür lohnt es sich für Sie, diese schwierige Zeit durchzustehen?", "Bedeutsamkeit"]
            ],
            erklaerung: "Psychoedukation fördert Verstehbarkeit, die Erschließung von Ressourcen fördert Handhabbarkeit, die Frage nach dem Wofür fördert Bedeutsamkeit. In der Praxis greifen alle drei ineinander."
          },
          {
            typ: "text",
            titel: "Psychoedukation: Wissen, das entlastet",
            text: "**Psychoedukation** bezeichnet die systematische, verständliche Vermittlung von Wissen über psychische Belastungen, ihre Entstehung und Bewältigungsmöglichkeiten. Sie fördert Verstehbarkeit im Sinne Antonovskys, reduziert Scham und Selbstabwertung („Mit mir stimmt etwas nicht“) und stärkt die Eigenverantwortung.\n\nGute Psychoedukation in der Beratung folgt einigen Grundsätzen:\n\n- **Anknüpfen statt dozieren**: zuerst erfragen, welches Erklärungsmodell die Person selbst hat, und daran anschließen.\n- **Dosiert und konkret**: ein Modell, wenige Kernaussagen, eigene Beispiele der Person einbeziehen. Eine einfache Skizze – etwa die drei Ebenen nach Kaluza – ist oft hilfreicher als lange Erklärungen.\n- **Normalisieren ohne zu bagatellisieren**: „Viele Menschen reagieren unter Dauerbelastung so“ entlastet; es darf aber nicht den Eindruck erwecken, das Problem sei nicht ernst.\n- **Interaktiv prüfen**: nachfragen, was angekommen ist und was die Person davon für sich nutzen kann.\n- **Seriöse Inhalte**: nur gesichertes Wissen vermitteln, Unsicherheiten benennen und bei medizinischen Fragen auf ärztliche Expertise verweisen.\n- **Schriftlich unterstützen**: kurze Handouts oder gemeinsam erstellte Notizen helfen, Inhalte zu behalten.\n\nPsychoedukation ist kein Selbstzweck. Sie bereitet Veränderungsschritte vor: Wer versteht, dass anhaltender Stress ohne Erholung den Körper in Daueranspannung hält, kann leichter nachvollziehen, warum Pausen kein Luxus, sondern eine Voraussetzung für Leistungsfähigkeit sind."
          },
          {
            typ: "mc",
            frage: "Welche Vorgehensweise entspricht am ehesten guter Psychoedukation in der Beratung?",
            optionen: [
              "Der ratsuchenden Person einen ausführlichen Vortrag über Stressphysiologie halten und anschließend ein Fachbuch empfehlen.",
              "Möglichst viele Modelle vorstellen, damit die Person das für sie passende auswählen kann.",
              "Vermitteln, dass Stress harmlos ist, um die Person zu beruhigen.",
              "Zunächst das eigene Erklärungsmodell der Person erfragen, dann ein einfaches Modell an ihren Beispielen erläutern und prüfen, was sie daraus mitnimmt."
            ],
            richtig: 3,
            erklaerung: "Gute Psychoedukation knüpft an das Vorwissen an, ist dosiert, nutzt Beispiele der Person und prüft das Verständnis. Lange Vorträge und viele Modelle überfordern; Bagatellisierung wäre fachlich falsch und kann die Person in ihrem Erleben nicht ernst nehmen."
          },
          {
            typ: "text",
            titel: "Entspannungsverfahren: Progressive Muskelrelaxation und Autogenes Training",
            text: "Entspannungsverfahren setzen an der Stressreaktion an (regeneratives Stressmanagement). Sie zielen auf eine **Entspannungsreaktion**: Absinken von Muskeltonus, Herzfrequenz und Atemfrequenz sowie ein Gefühl von Ruhe. Ihre Wirkung entfaltet sich vor allem durch **regelmäßiges Üben** über mehrere Wochen.\n\n- Die **Progressive Muskelrelaxation** (PMR) wurde von dem amerikanischen Arzt **Edmund Jacobson** entwickelt. Nacheinander werden Muskelgruppen kurz angespannt und dann bewusst entspannt. Der Kontrast schult die Wahrnehmung von Anspannung und Entspannung. PMR gilt als gut erlernbar, auch für Menschen, denen das Stillsitzen schwerfällt, und wird oft in verkürzten Formen angeboten.\n- Das **Autogene Training** (AT) wurde von dem Berliner Psychiater **Johannes Heinrich Schultz** entwickelt. Mithilfe formelhafter Selbstsuggestionen („Der rechte Arm ist ganz schwer“) werden auf der Grundstufe nacheinander Schwere, Wärme, ruhiger Herzschlag, ruhige Atmung, Wärme im Bauchraum und Kühle der Stirn angesprochen. AT erfordert mehr Übungszeit als PMR.\n\nWeitere verbreitete Methoden sind **Atemübungen** (z. B. verlängertes Ausatmen), **Imaginationsübungen** und **achtsamkeitsbasierte Verfahren** wie das von **Jon Kabat-Zinn** entwickelte Programm *Mindfulness-Based Stress Reduction* (MBSR). Achtsamkeit zielt nicht primär auf Entspannung, sondern auf eine nicht wertende, gegenwartsbezogene Aufmerksamkeit; Entspannung ist dabei eher ein möglicher Nebeneffekt.\n\nWer Entspannungsverfahren in Kursen oder Beratung anleiten will, sollte dafür eine **fundierte Ausbildung** absolviert haben."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Verfahren ihren Begründern und Kernelementen zu.",
            paare: [
              ["Progressive Muskelrelaxation", "Edmund Jacobson – Wechsel von An- und Entspannung von Muskelgruppen"],
              ["Autogenes Training", "Johannes Heinrich Schultz – formelhafte Selbstsuggestion (Schwere, Wärme …)"],
              ["Mindfulness-Based Stress Reduction", "Jon Kabat-Zinn – nicht wertende Achtsamkeit im gegenwärtigen Moment"],
              ["Salutogenese", "Aaron Antonovsky – Kohärenzgefühl und Gesundheits-Krankheits-Kontinuum"]
            ],
            erklaerung: "Die Zuordnungen fassen die Begründer und Kernideen zusammen. Salutogenese ist kein Entspannungsverfahren, sondern ein Rahmenmodell der Gesundheitsentstehung, das die Ressourcenorientierung in der Beratung begründet."
          },
          {
            typ: "text",
            titel: "Grenzen und Vorsichtsmaßnahmen",
            text: "Entspannungsverfahren sind in der Regel gut verträglich, aber nicht für alle Menschen in jeder Situation geeignet. Verantwortungsvolle Beratung kennt die Grenzen:\n\n- **Paradoxe Reaktionen**: Bei manchen Menschen lösen Entspannung und Innenwahrnehmung Unruhe, Angst oder unangenehme Körperempfindungen aus (sogenannte entspannungsinduzierte Angst). Übungen sollten jederzeit abgebrochen werden dürfen; die Augen offen zu lassen ist erlaubt.\n- **Traumafolgen und Dissoziation**: Bei Menschen mit traumatischen Erfahrungen können Ruhe, geschlossene Augen oder bestimmte Körperwahrnehmungen belastende Erinnerungen auslösen. Hier ist besondere Vorsicht geboten und eine Abklärung durch Fachleute sinnvoll.\n- **Psychotische Erkrankungen und schwere psychische Störungen**: Verfahren mit starker Innenwendung und Suggestion wie das Autogene Training gelten in akuten Phasen als ungeeignet; über die Anwendung entscheidet die behandelnde Fachperson.\n- **Körperliche Erkrankungen**: Bei Herz-Kreislauf-Erkrankungen, niedrigem Blutdruck, Schmerzen oder Verletzungen sollte vor Beginn ärztlich geklärt werden, ob und in welcher Form geübt werden kann. Bei PMR ist das Anspannen bestimmter Muskelgruppen gegebenenfalls anzupassen.\n- **Keine Wunderwaffe**: Entspannung ersetzt nicht die Veränderung belastender Bedingungen und ist keine Behandlung psychischer Erkrankungen.\n\nIn der Beratung ist daher vor dem Anleiten zu erfragen, ob gesundheitliche Einschränkungen oder belastende Vorerfahrungen bestehen, und es ist ein Rahmen zu schaffen, in dem die Person Kontrolle behält."
          },
          {
            typ: "multi",
            frage: "Welche Vorsichtsmaßnahmen sind beim Anleiten von Entspannungsübungen angemessen? (Mehrere Antworten möglich)",
            optionen: [
              "Vorab nach gesundheitlichen Einschränkungen und belastenden Vorerfahrungen fragen",
              "Darauf bestehen, dass die Augen geschlossen bleiben, damit die Übung wirkt",
              "Ausdrücklich erlauben, die Übung jederzeit zu unterbrechen",
              "Bei einer akuten psychotischen Erkrankung mit Autogenem Training stabilisieren",
              "Bei Herz-Kreislauf-Erkrankungen eine ärztliche Rücksprache empfehlen"
            ],
            richtig: [0, 2, 4],
            erklaerung: "Vorabklärung, Abbruchmöglichkeit und ärztliche Rücksprache bei körperlichen Erkrankungen sind angemessen. Geschlossene Augen sind keine Voraussetzung und können für manche Menschen belastend sein. Bei akuten Psychosen gelten suggestive, nach innen gerichtete Verfahren als ungeeignet; hier gehört die Entscheidung in die Hand der Behandelnden."
          },
          {
            typ: "fall",
            titel: "Eine Übung mit unerwarteter Wirkung",
            fall: "Konstruierte Lehrvignette: In einer Gruppenberatung für pflegende Angehörige leiten Sie eine kurze Atemübung mit geschlossenen Augen an. Eine Teilnehmerin öffnet nach einer Minute die Augen, atmet schnell und sagt leise: „Ich kann das nicht, da kommt alles hoch.“",
            frage: "Was ist die angemessenste Reaktion?",
            optionen: [
              "Sie ermutigen sie, die Augen wieder zu schließen und weiterzuatmen, weil die Unruhe gleich vergeht.",
              "Sie unterbrechen für sie die Übung, laden sie ein, die Augen offen zu lassen und sich im Raum zu orientieren (z. B. Füße auf dem Boden spüren, Gegenstände benennen), und bieten nach der Gruppe ein kurzes Einzelgespräch an.",
              "Sie ignorieren die Reaktion, um die Gruppe nicht zu stören.",
              "Sie fragen vor der Gruppe nach, was genau hochkommt, damit sie es verarbeiten kann."
            ],
            richtig: 1,
            erklaerung: "Die Reaktion deutet auf eine paradoxe Reaktion oder auf belastende Erinnerungen hin. Angemessen ist es, die Übung für sie zu beenden, Orientierung im Hier und Jetzt zu fördern und Raum für ein geschütztes Gespräch zu geben. Weiterüben kann die Belastung verstärken. Eine Exploration vor der Gruppe wäre beschämend und überschreitet ihren Rahmen. Ignorieren lässt sie mit der Belastung allein."
          },
          {
            typ: "karten",
            titel: "Ressourcen und Regeneration",
            karten: [
              { vorne: "Resilienz", hinten: "Psychische Widerstandsfähigkeit als dynamischer, situationsspezifischer Prozess, getragen von Schutzfaktoren in Person und Umwelt." },
              { vorne: "Kauai-Studie", hinten: "Längsschnittstudie von Emmy Werner und Ruth Smith: Viele Kinder aus Hochrisikobedingungen entwickelten sich gut; Schutzfaktoren wie stabile Bezugspersonen waren bedeutsam." },
              { vorne: "Kohärenzgefühl", hinten: "Nach Antonovsky: Verstehbarkeit, Handhabbarkeit und Bedeutsamkeit; die Bedeutsamkeit gilt als wichtigste Komponente." },
              { vorne: "Psychoedukation", hinten: "Systematische, verständliche Wissensvermittlung über Belastungen und Bewältigung; anknüpfend, dosiert, interaktiv und seriös." },
              { vorne: "Entspannungsinduzierte Angst", hinten: "Paradoxe Reaktion, bei der Entspannungsübungen Unruhe oder Angst auslösen; Abbruch und Orientierung im Hier und Jetzt ermöglichen." },
              { vorne: "Psychological detachment", hinten: "Gedankliches Abschalten von der Arbeit in der Freizeit; in der Erholungsforschung als wichtiger Erholungsfaktor beschrieben." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Welche Schutzfaktoren und Ressourcen tragen Sie selbst durch belastende Phasen? Welche davon könnten Sie gezielter pflegen?",
            hinweis: "Leitfragen: Welche Menschen stärken mich? Was hilft mir, Belastungen zu verstehen und handhabbar zu machen? Wofür lohnt sich mein Einsatz? Welche Form der Erholung tut mir tatsächlich gut – und wie viel Raum gebe ich ihr?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "mc",
        frage: "Was unterscheidet das transaktionale Stressmodell nach Lazarus von reizorientierten Stressmodellen?",
        optionen: [
          "Es betrachtet ausschließlich die körperliche Stressreaktion.",
          "Es misst Stress anhand einer Liste kritischer Lebensereignisse.",
          "Es versteht Stress als Ergebnis der Bewertung einer Person-Umwelt-Beziehung und der eingeschätzten Bewältigungsmöglichkeiten.",
          "Es geht davon aus, dass bestimmte Ereignisse bei allen Menschen gleich starken Stress auslösen."
        ],
        richtig: 2,
        erklaerung: "Das transaktionale Modell stellt die Bewertung der Situation und der eigenen Ressourcen in den Mittelpunkt. Reizorientierte Modelle betonen äußere Ereignisse, reaktionsorientierte Modelle wie das von Selye die körperliche Reaktion."
      },
      {
        typ: "truefalse",
        aussage: "Im transaktionalen Stressmodell gehört die Einschätzung „Ich habe Kolleginnen, die mich unterstützen“ zur sekundären Bewertung.",
        richtig: true,
        erklaerung: "Richtig. Die sekundäre Bewertung betrifft die verfügbaren inneren und äußeren Ressourcen und Handlungsmöglichkeiten, wozu auch soziale Unterstützung gehört."
      },
      {
        typ: "multi",
        frage: "Welche Dimensionen beschreiben Burnout nach Maslach bzw. ICD-11? (Mehrere Antworten möglich)",
        optionen: [
          "Erschöpfung bzw. Energieverlust",
          "Wahnhafte Überzeugungen",
          "Mentale Distanz bzw. Zynismus gegenüber der Arbeit",
          "Verringerte berufliche Wirksamkeit",
          "Manische Episoden"
        ],
        richtig: [0, 2, 3],
        erklaerung: "Erschöpfung, Distanz bzw. Zynismus und verringerte Wirksamkeit sind die drei Kerndimensionen. Wahnhafte Überzeugungen und manische Episoden gehören nicht zum Burnout-Konzept."
      },
      {
        typ: "mc",
        frage: "Wie ist Burnout (QD85) in der ICD-11 eingeordnet?",
        optionen: [
          "Als berufsbezogenes Phänomen im Kapitel der Faktoren, die den Gesundheitszustand beeinflussen – nicht als Krankheit",
          "Als Unterform der depressiven Episode",
          "Als Anpassungsstörung mit Bezug auf alle Lebensbereiche",
          "Als eigenständige psychische Störung mit festen Behandlungsleitlinien"
        ],
        richtig: 0,
        erklaerung: "QD85 beschreibt Burnout als berufsbezogenes Phänomen infolge chronischen, nicht erfolgreich bewältigten Arbeitsstresses. Es ist keine Krankheit und gilt nur für den beruflichen Kontext."
      },
      {
        typ: "multi",
        frage: "Welche Hinweise sollten Beratende veranlassen, zeitnah eine ärztliche oder psychotherapeutische Abklärung zu empfehlen? (Mehrere Antworten möglich)",
        optionen: [
          "Über Wochen anhaltende, generalisierte Freudlosigkeit",
          "Der Wunsch, Gespräche mit der Vorgesetzten besser vorzubereiten",
          "Äußerungen von Hoffnungslosigkeit und Suizidgedanken",
          "Ausgeprägte Wertlosigkeits- und Schuldgefühle",
          "Der Wunsch nach mehr Struktur im Feierabend"
        ],
        richtig: [0, 2, 3],
        erklaerung: "Generalisierte Freudlosigkeit, Hoffnungslosigkeit, Suizidgedanken sowie Wertlosigkeit und Schuld sind Warnzeichen für eine mögliche Depression. Bei Suizidgedanken ist zusätzlich unmittelbar eine Gefährdungseinschätzung nötig. Die anderen Anliegen sind typische Beratungsthemen."
      },
      {
        typ: "mc",
        frage: "Welche Strategie gehört im Prozessmodell der Emotionsregulation nach Gross zu den reaktionsfokussierten Strategien?",
        optionen: [
          "Situationsauswahl",
          "Neubewertung",
          "Aufmerksamkeitslenkung",
          "Unterdrückung des Gefühlsausdrucks"
        ],
        richtig: 3,
        erklaerung: "Unterdrückung gehört zur Reaktionsmodulation und setzt erst an, wenn die Emotion bereits entstanden ist. Situationsauswahl, Aufmerksamkeitslenkung und Neubewertung sind antezedenzfokussiert."
      },
      {
        typ: "mc",
        frage: "Welche Komponente des Kohärenzgefühls betrachtete Antonovsky als die wichtigste?",
        optionen: [
          "Handhabbarkeit",
          "Bedeutsamkeit",
          "Verstehbarkeit",
          "Vorhersagbarkeit"
        ],
        richtig: 1,
        erklaerung: "Antonovsky sah die Bedeutsamkeit (Sinnhaftigkeit) als motivationale Grundlage, ohne die Verstehbarkeit und Handhabbarkeit kaum angestrebt würden. Vorhersagbarkeit ist keine eigene Komponente."
      },
      {
        typ: "truefalse",
        aussage: "Entspannungsverfahren wie das Autogene Training sind in akuten Phasen psychotischer Erkrankungen ein empfehlenswertes Mittel, das Beratende eigenständig einsetzen sollten.",
        richtig: false,
        erklaerung: "Falsch. Suggestive, nach innen gerichtete Verfahren gelten in akuten psychotischen Phasen als ungeeignet. Über eine Anwendung entscheiden die behandelnden Fachpersonen; Beratende verweisen in solchen Situationen an ärztliche oder psychotherapeutische Hilfe."
      }
    ]
  }
,

  /* =========================================================
     B6 – KRISENINTERVENTION
     ========================================================= */
  {
    kurs: "berater",
    id: "B6",
    titel: "Krisenintervention",
    beschreibung: "Psychosoziale Krisen gehören zu den anspruchsvollsten Situationen in der Beratung. Das Modul klärt den Krisenbegriff, unterscheidet traumatische Krisen und Veränderungskrisen nach Cullberg und Sonneck und vermittelt die Grundprinzipien der Krisenintervention. Ein Schwerpunkt liegt darauf, Suizidalität offen anzusprechen, Risiken einzuschätzen, gemeinsam einen Notfallplan zu erarbeiten und mit dem Hilfesystem in Deutschland zusammenzuarbeiten.",
    lernziele: [
      "Sie können den Begriff der psychosozialen Krise definieren und von einem psychiatrischen Notfall abgrenzen.",
      "Sie können traumatische Krisen und Veränderungskrisen mit ihren typischen Phasen beschreiben.",
      "Sie können die Grundprinzipien der Krisenintervention, etwa nach dem BELLA-Schema, auf Gesprächssituationen anwenden.",
      "Sie können Suizidalität direkt und behutsam ansprechen, Risikofaktoren und Warnzeichen erkennen und den Grad der Gefährdung grob einschätzen.",
      "Sie können gemeinsam mit Ratsuchenden einen Notfallplan erstellen und kennen die wichtigsten Anlaufstellen des Hilfesystems in Deutschland."
    ],
    lektionen: [
      {
        id: "B6-1",
        titel: "Was ist eine Krise? Begriff und Krisentypen",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Der Krisenbegriff",
            text: "Das Wort „Krise“ stammt vom griechischen *krisis* und bedeutet ursprünglich Entscheidung oder Wendepunkt. In der Medizin bezeichnete es den Höhepunkt einer Erkrankung, an dem sich entscheidet, ob es zur Genesung oder zur Verschlechterung kommt. Diese Doppelbedeutung von **Gefahr und Chance** prägt auch das psychologische Verständnis.\n\nDie moderne Krisentheorie geht wesentlich auf den Psychiater **Gerald Caplan** zurück, der in den 1960er-Jahren Krisen als vorübergehenden Zustand des Ungleichgewichts beschrieb, in dem die üblichen Problemlösestrategien nicht mehr ausreichen. Im deutschsprachigen Raum wurde der Begriff vor allem durch den Wiener Psychiater **Gernot Sonneck** und das Wiener Kriseninterventionszentrum geprägt.\n\nSinngemäß versteht Sonneck unter einer **psychosozialen Krise** den Verlust des seelischen Gleichgewichts, den ein Mensch erlebt, wenn er mit Ereignissen oder Lebensumständen konfrontiert ist, die er im Moment nicht bewältigen kann, weil sie nach Art und Ausmaß seine bisherigen Erfahrungen, Fähigkeiten und Hilfsmittel überfordern.\n\nWichtig an diesem Verständnis sind drei Aspekte:\n\n- Eine Krise ist **keine Krankheit**, sondern eine potenziell jedem Menschen mögliche Reaktion auf außergewöhnliche Belastung.\n- Eine Krise ist **zeitlich begrenzt**; sie dauert typischerweise einige Tage bis wenige Wochen, kann sich aber bei ungünstigem Verlauf chronifizieren.\n- Eine Krise ist **subjektiv**: Entscheidend ist nicht die objektive Schwere des Ereignisses, sondern das Verhältnis von Belastung und verfügbaren Bewältigungsmöglichkeiten – eine deutliche Parallele zum transaktionalen Stressmodell."
          },
          {
            typ: "mc",
            frage: "Welche Aussage beschreibt das Verständnis einer psychosozialen Krise nach Caplan und Sonneck am treffendsten?",
            optionen: [
              "Eine Krise ist eine psychische Erkrankung, die einer Diagnose bedarf.",
              "Eine Krise liegt nur vor, wenn ein objektiv schweres Ereignis wie ein Todesfall eingetreten ist.",
              "Eine Krise ist ein zeitlich begrenzter Verlust des seelischen Gleichgewichts, wenn Belastungen die aktuellen Bewältigungsmöglichkeiten übersteigen.",
              "Eine Krise ist eine dauerhafte Persönlichkeitseigenschaft emotional instabiler Menschen."
            ],
            richtig: 2,
            erklaerung: "Krisen sind keine Krankheiten und keine Eigenschaften, sondern vorübergehende Zustände des Ungleichgewichts. Entscheidend ist das subjektive Verhältnis von Belastung und Bewältigungsmöglichkeiten, nicht allein die objektive Schwere des Auslösers."
          },
          {
            typ: "text",
            titel: "Traumatische Krise und Veränderungskrise",
            text: "Der schwedische Psychiater **Johan Cullberg** und, darauf aufbauend, Sonneck unterscheiden zwei Grundformen psychosozialer Krisen:\n\n**Traumatische Krisen** werden durch ein **plötzliches, unvorhersehbares** Ereignis ausgelöst, das die Identität, die soziale Sicherheit oder die Lebensgrundlagen eines Menschen massiv bedroht. Beispiele sind der plötzliche Tod einer nahestehenden Person, eine schwere Diagnose, ein Unfall, ein Gewalterlebnis, eine plötzliche Trennung oder eine Kündigung ohne Vorwarnung. Charakteristisch ist der Schock: Das Ereignis „bricht herein“.\n\n**Veränderungskrisen** (auch Lebensveränderungskrisen) entstehen aus Ereignissen, die zum **normalen Lebenslauf** gehören und oft absehbar oder sogar erwünscht sind, aber eine Anpassung erfordern, die im Moment nicht gelingt. Beispiele sind Auszug der Kinder, Heirat, Geburt eines Kindes, Berufseintritt, Umzug, Pensionierung oder die zunehmende Pflegebedürftigkeit der Eltern. Hier baut sich die Krise eher **allmählich** auf.\n\nDie Unterscheidung ist kein starres Raster: Ein Ereignis kann je nach Umständen beides sein, und Veränderungskrisen können durch zusätzliche Belastungen plötzlich eskalieren. Für die Praxis ist die Unterscheidung dennoch hilfreich, weil sich die Verläufe und damit die Aufgaben der Beratung unterscheiden."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Auslöser dem eher typischen Krisentyp zu.",
            kategorien: ["traumatische Krise", "Veränderungskrise"],
            elemente: [
              { text: "Der Ehemann stirbt unerwartet bei einem Verkehrsunfall.", kat: 0 },
              { text: "Das jüngste Kind zieht zum Studium aus, die Mutter fühlt sich zunehmend leer.", kat: 1 },
              { text: "Eine Pflegekraft wird im Dienst von einem Angehörigen tätlich angegriffen.", kat: 0 },
              { text: "Ein Lehrer geht in den Ruhestand und verliert seine Tagesstruktur.", kat: 1 },
              { text: "Eine Frau erhält beim Routinecheck eine Krebsdiagnose.", kat: 0 },
              { text: "Ein Paar erlebt nach der Geburt des ersten Kindes zunehmende Konflikte und Erschöpfung.", kat: 1 },
              { text: "Nach einem Brand ist die Wohnung unbewohnbar.", kat: 0 }
            ],
            erklaerung: "Traumatische Krisen beginnen mit einem plötzlichen, unvorhersehbaren Ereignis. Veränderungskrisen entstehen aus Übergängen, die zum Lebenslauf gehören und oft absehbar sind. Im Einzelfall können die Grenzen fließend sein."
          },
          {
            typ: "text",
            titel: "Phasen der traumatischen Krise nach Cullberg",
            text: "Cullberg beschreibt für die traumatische Krise einen typischen Verlauf in vier Phasen. Die Phasen sind als Orientierung zu verstehen; nicht jeder Mensch durchläuft sie vollständig oder in derselben Reihenfolge.\n\n- **Schockphase**: Sie dauert meist von wenigen Stunden bis zu einigen Tagen. Die Wirklichkeit wird vom Bewusstsein ferngehalten. Betroffene wirken äußerlich mitunter erstaunlich gefasst, innerlich aber wie betäubt, oder sie sind chaotisch, verwirrt und kaum ansprechbar. Später erinnern sie sich oft nur bruchstückhaft.\n- **Reaktionsphase**: Die Person wird mit der Realität konfrontiert. Es kommt zu intensiven Gefühlen wie Verzweiflung, Wut, Schuld, Angst und Trauer sowie zu Abwehrmechanismen wie Verleugnung oder Rationalisierung. Schocks und Reaktionen zusammen bilden die **akute Phase**, die einige Wochen andauern kann. In dieser Phase ist die Gefahr ungünstiger Bewältigungsversuche wie Substanzmissbrauch und auch das Suizidrisiko erhöht.\n- **Bearbeitungsphase**: Die Person beginnt, sich vom Ereignis und der Vergangenheit zu lösen und sich wieder der Zukunft zuzuwenden. Neue Interessen und Pläne entstehen.\n- **Neuorientierung**: Das Ereignis wird als Teil der eigenen Lebensgeschichte integriert. Das Selbstwertgefühl ist wiederhergestellt, neue Beziehungen und Aufgaben werden möglich. Im günstigen Fall geht die Person mit neuen Erfahrungen und Fähigkeiten aus der Krise hervor.\n\nFür die Intervention bedeutet das: In der Schockphase stehen Sicherheit, Orientierung, Begleitung und praktische Hilfe im Vordergrund – nicht vertiefende Gespräche über Gefühle oder Bedeutungen."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Phasen der traumatischen Krise nach Cullberg in die richtige Reihenfolge.",
            elemente: [
              "Schockphase",
              "Reaktionsphase",
              "Bearbeitungsphase",
              "Neuorientierung"
            ],
            erklaerung: "Schock- und Reaktionsphase bilden die akute Phase. In der Bearbeitungsphase löst sich die Person vom Ereignis, in der Neuorientierung wird es in die Lebensgeschichte integriert."
          },
          {
            typ: "text",
            titel: "Phasen der Veränderungskrise",
            text: "Für Veränderungskrisen beschreibt Sonneck in Anlehnung an Caplan einen anderen Verlauf:\n\n- **Konfrontation**: Die Person wird mit einem Veränderungsereignis konfrontiert. Die Spannung steigt, und sie versucht, die Situation mit ihren gewohnten Problemlösestrategien zu bewältigen.\n- **Versagen**: Die gewohnten Strategien greifen nicht. Es entsteht das Gefühl, versagt zu haben; Selbstwert und Zuversicht sinken, die Belastung wächst.\n- **Mobilisierung**: Die Person mobilisiert alle inneren und äußeren Ressourcen, probiert neue Wege und ist in dieser Phase oft **besonders offen für Hilfe von außen**. Gelingt die Bewältigung, kann die Krise hier beendet werden.\n- **Vollbild der Krise**: Scheitert auch die Mobilisierung, kommt es zu Rückzug, Resignation, Hoffnungslosigkeit und Desorganisation. Es besteht die Gefahr einer **Chronifizierung**, des Ausweichens in Sucht oder psychosomatische Beschwerden, der Entwicklung einer psychischen Erkrankung und von **Suizidalität**.\n\nAus diesem Verlauf ergibt sich eine wichtige Botschaft für die Praxis: Die Phase der Mobilisierung ist ein **Zeitfenster für Hilfe**. Wer sich in dieser Phase an eine Beratungsstelle wendet, ist oft hoch motiviert, und schon wenige Gespräche können eine Entwicklung in Richtung Vollbild der Krise verhindern. Das rechtfertigt den Grundsatz, Krisenanfragen **rasch** zu beantworten und nicht auf lange Wartelisten zu setzen."
          },
          {
            typ: "luecke",
            text: "In der Veränderungskrise folgt auf die Konfrontation das {{Versagen|Schockerleben|Neuorientieren}} der gewohnten Strategien. In der Phase der {{Mobilisierung|Reaktion|Verleugnung}} ist die Person besonders offen für Hilfe. Scheitert diese, droht das {{Vollbild der Krise|Bearbeitungsstadium|Erholungsstadium}} mit Rückzug und Resignation.",
            erklaerung: "Die Abfolge nach Sonneck lautet Konfrontation – Versagen – Mobilisierung – gegebenenfalls Vollbild der Krise. Die Mobilisierungsphase ist ein günstiges Zeitfenster für Unterstützung."
          },
          {
            typ: "text",
            titel: "Krise oder psychiatrischer Notfall?",
            text: "Nicht jede akute Belastung ist eine psychosoziale Krise im beschriebenen Sinn. Von ihr abzugrenzen ist der **psychiatrische Notfall**: ein Zustand, in dem aufgrund einer psychischen Störung oder eines akuten psychischen Ausnahmezustands eine **unmittelbare Gefahr für Leben oder Gesundheit** der betroffenen Person oder anderer besteht und sofortiges ärztliches Handeln erforderlich ist.\n\nBeispiele für Notfallsituationen sind:\n\n- **akute Suizidalität** mit konkreten Plänen und fehlender Distanzierung,\n- **akute Fremdgefährdung**, etwa Drohungen mit Gewalt,\n- **akute psychotische Zustände** mit massiver Angst, Verkennung der Realität oder Erregung,\n- **Verwirrtheitszustände** (z. B. Delir), deren Ursachen häufig körperlich sind,\n- **Intoxikationen** durch Alkohol, Medikamente oder Drogen sowie gefährliche Entzugssymptome.\n\nIn solchen Situationen ist nicht Beratung, sondern **medizinische Notfallversorgung** gefragt: Notruf **112**, die Notaufnahme einer psychiatrischen Klinik oder – je nach Region – ein psychiatrischer Krisendienst. Die Beratungsperson bleibt, soweit möglich und sicher, bei der Person, bis Hilfe eintrifft.\n\nAuch Krisen können sich zu Notfällen zuspitzen, insbesondere im Vollbild der Krise oder in der akuten Phase einer traumatischen Krise. Die Grenze zu erkennen, ist eine Kernkompetenz in der Krisenintervention. Die eigene Sicherheit hat dabei immer Vorrang: Bei Fremdgefährdung wird die Polizei unter **110** verständigt."
          },
          {
            typ: "multi",
            frage: "Welche Situationen sind als psychiatrischer Notfall einzuordnen, der sofortige ärztliche Hilfe erfordert? (Mehrere Antworten möglich)",
            optionen: [
              "Eine Person schildert einen konkreten Suizidplan für heute Abend und kann sich davon nicht distanzieren.",
              "Eine Person ist nach der Pensionierung niedergeschlagen und sucht eine neue Tagesstruktur.",
              "Eine Person ist plötzlich desorientiert, verkennt Situationen und weiß nicht, wo sie ist.",
              "Eine Person hat eine größere Menge Tabletten mit Alkohol eingenommen.",
              "Eine Person ist nach einer Trennung sehr traurig und weint viel im Gespräch."
            ],
            richtig: [0, 2, 3],
            erklaerung: "Akute Suizidalität ohne Distanzierung, akute Verwirrtheit und Intoxikation erfordern sofortige medizinische Hilfe (112). Trauer nach einer Trennung und Niedergeschlagenheit nach einem Übergang sind belastend, aber zunächst Anliegen für Beratung und Krisenbegleitung – wobei auch hier auf Suizidalität zu achten ist."
          },
          {
            typ: "fall",
            titel: "Welcher Krisentyp, welche Phase?",
            fall: "Konstruierte Lehrvignette: Herr T., 61 Jahre, war 35 Jahre in derselben Firma tätig. Vor vier Monaten wurde ihm im Rahmen einer lange angekündigten Umstrukturierung ein Vorruhestand angeboten, den er angenommen hat. Zunächst habe er „Projekte“ geplant, doch nichts davon umgesetzt. Seit einigen Wochen bleibt er oft bis mittags im Bett, meidet Bekannte und sagt: „Ich bin zu nichts mehr nutze. Ich habe alles probiert, es hat keinen Sinn.“",
            frage: "Wie lässt sich die Situation am ehesten einordnen?",
            optionen: [
              "Traumatische Krise in der Schockphase",
              "Veränderungskrise im Übergang zum Vollbild der Krise, mit Hinweisen, die eine Abklärung von Suizidalität erforderlich machen",
              "Veränderungskrise in der Mobilisierungsphase, daher besonders günstige Prognose",
              "Keine Krise, sondern eine normale Anpassungsreaktion, die keiner Unterstützung bedarf"
            ],
            richtig: 1,
            erklaerung: "Der Auslöser ist absehbar und gehört zum Lebenslauf – typisch für eine Veränderungskrise. Nach gescheiterten eigenen Versuchen zeigen sich Rückzug, Resignation und Hoffnungslosigkeit, also Merkmale des Vollbilds der Krise. Die Äußerung „es hat keinen Sinn“ macht es erforderlich, behutsam und direkt nach Suizidgedanken zu fragen und eine ärztliche Abklärung anzuregen."
          },
          {
            typ: "karten",
            titel: "Kernbegriffe der Krisentheorie",
            karten: [
              { vorne: "Psychosoziale Krise (Sonneck, sinngemäß)", hinten: "Verlust des seelischen Gleichgewichts, wenn Ereignisse oder Lebensumstände die aktuellen Bewältigungsmöglichkeiten überfordern; keine Krankheit, zeitlich begrenzt." },
              { vorne: "Traumatische Krise", hinten: "Plötzliches, unvorhersehbares Ereignis; Phasen nach Cullberg: Schock, Reaktion, Bearbeitung, Neuorientierung." },
              { vorne: "Veränderungskrise", hinten: "Übergang im Lebenslauf; Phasen: Konfrontation, Versagen, Mobilisierung, ggf. Vollbild der Krise." },
              { vorne: "Akute Phase", hinten: "Schock- und Reaktionsphase der traumatischen Krise; erhöhte Gefahr ungünstiger Bewältigung und von Suizidalität." },
              { vorne: "Psychiatrischer Notfall", hinten: "Unmittelbare Gefahr für Leben oder Gesundheit infolge eines akuten psychischen Ausnahmezustands; sofortige ärztliche Hilfe (112)." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Erinnern Sie sich an eine Krise in Ihrem eigenen Leben oder im Leben eines Menschen, den Sie begleitet haben. Welche Phasen lassen sich im Rückblick erkennen, und was war in welcher Phase hilfreich?",
            hinweis: "Leitfragen: War der Auslöser plötzlich oder absehbar? Wann war Hilfe von außen willkommen, wann nicht? Was hat zur Neuorientierung beigetragen? Was lerne ich daraus für meine Haltung gegenüber Menschen in Krisen?"
          }
        ]
      },
      {
        id: "B6-2",
        titel: "Prinzipien der Krisenintervention",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Ziele der Krisenintervention",
            text: "Krisenintervention ist eine **zeitlich begrenzte, fokussierte Hilfe** für Menschen in akuten psychosozialen Krisen. Sie unterscheidet sich deutlich von längerfristiger Beratung oder Psychotherapie: Es geht nicht darum, die Lebensgeschichte aufzuarbeiten oder Persönlichkeitsmuster zu verändern, sondern darum, eine akute Destabilisierung aufzufangen.\n\nDie zentralen Ziele sind:\n\n- **Sicherheit herstellen**: Gefährdungen erkennen und abwenden, insbesondere Suizidalität und Fremdgefährdung.\n- **Entlastung und Stabilisierung**: emotionale Entlastung ermöglichen, Überflutung begrenzen, Orientierung geben.\n- **Wiederherstellung der Handlungsfähigkeit**: die Person dabei unterstützen, wieder eigene Schritte zu gehen und eigene Ressourcen zu nutzen.\n- **Verhinderung ungünstiger Entwicklungen**: Chronifizierung, Substanzmissbrauch, sozialer Rückzug, Entwicklung psychischer Erkrankungen.\n- **Weitervermittlung**: wo nötig, Übergang in passende weiterführende Hilfe.\n\nKrisenintervention zielt zunächst auf die Wiederherstellung des **früheren Gleichgewichts**. Im günstigen Fall kann eine Krise darüber hinaus zum Ausgangspunkt für Entwicklung werden – die Chance, die im Krisenbegriff steckt. Diese Chance darf aber nicht vorschnell betont werden: Wer in einer akuten Krise hört, „darin liege auch etwas Gutes“, fühlt sich häufig nicht verstanden."
          },
          {
            typ: "truefalse",
            aussage: "Ein wichtiges Ziel der Krisenintervention ist es, in der akuten Phase möglichst rasch frühere Lebenserfahrungen und Persönlichkeitsmuster aufzuarbeiten, die zur Krise beigetragen haben.",
            richtig: false,
            erklaerung: "Falsch. Krisenintervention ist fokussiert auf die aktuelle Situation, auf Sicherheit, Entlastung und Wiederherstellung der Handlungsfähigkeit. Eine Aufarbeitung lebensgeschichtlicher Muster kann später in Beratung oder Psychotherapie sinnvoll sein, würde die Person in der Akutsituation aber eher zusätzlich destabilisieren."
          },
          {
            typ: "text",
            titel: "Grundprinzipien nach Sonneck",
            text: "Aus der Arbeit des Wiener Kriseninterventionszentrums hat Sonneck Grundprinzipien formuliert, die sich in der Praxis bewährt haben:\n\n- **Rascher Beginn**: Krisen verlangen zeitnahe Hilfe. Lange Wartezeiten erhöhen das Risiko einer Zuspitzung. Bereits ein erstes Telefonat kann entlasten.\n- **Aktivität**: Die helfende Person ist aktiver und strukturierender als in anderen Beratungsformen. Sie fragt gezielt, fasst zusammen, gibt Orientierung und schlägt Schritte vor.\n- **Methodenflexibilität**: Es wird eingesetzt, was in der Situation hilft – entlastende Gespräche, praktische Unterstützung, Psychoedukation, Einbeziehung von Angehörigen, ärztliche Mitbehandlung.\n- **Fokus auf die aktuelle Situation und den Auslöser**: Im Mittelpunkt steht das, was die Krise ausgelöst hat, und die Frage, was jetzt notwendig ist.\n- **Einbeziehung der Umwelt**: Bezugspersonen und das soziale Netz werden – mit Einverständnis – einbezogen, weil sie Halt geben und Sicherheit erhöhen können.\n- **Entlastung**: Gefühle dürfen ausgedrückt werden, ohne dass sie bewertet oder vorschnell „gelöst“ werden.\n- **Zusammenarbeit**: mit der betroffenen Person als aktiver Partnerin und mit anderen Hilfeeinrichtungen.\n\nHinzu kommt die **zeitliche Begrenzung**: Krisenintervention umfasst häufig nur wenige Kontakte. Diese Begrenzung ist transparent zu machen und mit der Planung von Anschlusshilfen zu verbinden."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Handlungen den Grundprinzipien der Krisenintervention zu.",
            paare: [
              ["Die Beratungsstelle bietet noch am selben Tag einen Termin an.", "rascher Beginn"],
              ["Die Beraterin strukturiert das Gespräch deutlich und fasst die nächsten Schritte zusammen.", "Aktivität"],
              ["Mit Einverständnis der Klientin wird die Schwester zum Gespräch dazugeholt.", "Einbeziehung der Umwelt"],
              ["Das Gespräch konzentriert sich auf die Trennung von letzter Woche und die nächsten Tage.", "Fokus auf die aktuelle Situation"],
              ["Neben dem Gespräch wird eine Vorstellung beim Hausarzt vereinbart und bei einem Antrag geholfen.", "Methodenflexibilität"]
            ],
            erklaerung: "Die Grundprinzipien beschreiben eine aktive, zeitnahe, flexible und auf die Gegenwart gerichtete Hilfe, die das soziale Umfeld einbezieht."
          },
          {
            typ: "text",
            titel: "Das BELLA-Schema",
            text: "Als einprägsame Gesprächsstruktur für die Krisenintervention hat sich im deutschsprachigen Raum das **BELLA-Schema** verbreitet, das auf Sonneck und das Wiener Kriseninterventionszentrum zurückgeht:\n\n- **B – Beziehung aufbauen**: Ruhe, Zuwendung und Verlässlichkeit vermitteln; sich vorstellen, den Rahmen klären, zuhören. Ohne tragfähige Beziehung ist keine Intervention möglich.\n- **E – Erfassen der Situation**: Was ist geschehen? Was ist der Auslöser? Wie ist der aktuelle Zustand? Welche Gefährdung besteht – insbesondere Suizidalität? Welche Ressourcen gibt es?\n- **L – Linderung von Symptomen**: Entlastung ermöglichen, Gefühle zulassen, Übererregung dämpfen, für Schlaf und Grundversorgung sorgen; bei Bedarf ärztliche Hilfe, etwa zur medikamentösen Entlastung, einbeziehen.\n- **L – Leute einbeziehen**: Unterstützende Personen aus dem Umfeld und professionelle Helfende einbinden; Isolation verringern.\n- **A – Ansatz zur Problembewältigung**: gemeinsam konkrete, kleine nächste Schritte entwickeln, die die Person selbst gehen kann; Anschlusshilfen planen.\n\nDas Schema ist **keine starre Abfolge**. Die Beziehung muss über das ganze Gespräch hinweg gepflegt werden, und die Einschätzung der Gefährdung kann jederzeit erneut nötig sein. Es dient als Gedächtnisstütze, um in emotional aufgeladenen Situationen nichts Wesentliches zu vergessen."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Elemente des BELLA-Schemas in die Reihenfolge, die das Akronym vorgibt.",
            elemente: [
              "Beziehung aufbauen",
              "Erfassen der Situation",
              "Linderung von Symptomen",
              "Leute einbeziehen",
              "Ansatz zur Problembewältigung"
            ],
            erklaerung: "BELLA steht für Beziehung, Erfassen, Linderung, Leute, Ansatz. Das Schema ist eine Orientierung; in der Praxis greifen die Elemente ineinander."
          },
          {
            typ: "merke",
            text: "Erst Sicherheit, dann Stabilisierung, dann Problemlösung: In der Krise geht es zunächst darum, Gefährdung zu erkennen und Halt zu geben – erst danach um Lösungen."
          },
          {
            typ: "text",
            titel: "Gesprächsführung in der akuten Krise",
            text: "Menschen in akuten Krisen sind häufig emotional überflutet, in ihrer Aufmerksamkeit eingeengt und in ihrem Denken blockiert. Daraus ergeben sich besondere Anforderungen an die Gesprächsführung:\n\n- **Ruhe ausstrahlen**: langsam und klar sprechen, kurze Sätze, keine Hektik. Die Ruhe der helfenden Person überträgt sich.\n- **Zuhören und Verstehen signalisieren**: Gefühle benennen und anerkennen („Das klingt, als sei Ihnen der Boden unter den Füßen weggezogen worden“). Bewertungen und Ratschläge in der Anfangsphase zurückhalten.\n- **Struktur geben**: Das Chaos ordnen durch Zusammenfassen und gezielte Fragen: Was ist passiert? Was ist jetzt am dringendsten?\n- **Konkret und gegenwartsbezogen bleiben**: Fragen nach dem Hier und Jetzt und den nächsten Stunden oder Tagen statt nach weit entfernten Zukunftsfragen.\n- **Ressourcen erfragen**: Wer kann heute Abend bei Ihnen sein? Was hat Ihnen früher in schweren Zeiten geholfen?\n- **Keine falschen Versprechungen**: Aussagen wie „Alles wird gut“ wirken unglaubwürdig. Hilfreicher ist realistische Zuversicht: „Wir schauen jetzt gemeinsam, was Ihnen in den nächsten Tagen Halt geben kann.“\n- **Grundversorgung im Blick**: Hat die Person gegessen, getrunken, geschlafen? Ist sie in der Lage, sicher nach Hause zu kommen?\n\nBesonders wichtig: **Suizidalität wird in jeder Krisenintervention aktiv angesprochen**, unabhängig davon, ob die Person sie von sich aus erwähnt. Wie das gelingt, ist Thema der nächsten Lektion."
          },
          {
            typ: "mc",
            frage: "Eine Frau ruft verzweifelt an: Ihr Mann hat sie heute Morgen verlassen, sie weine seit Stunden und wisse nicht weiter. Welche Reaktion entspricht am besten den Prinzipien der Krisenintervention?",
            optionen: [
              "„Das ist schlimm, aber Trennungen sind häufig. In ein paar Monaten sieht die Welt schon anders aus.“",
              "„Erzählen Sie mir bitte zunächst von Ihrer Kindheit, damit ich verstehe, warum Sie so stark reagieren.“",
              "„Sie sollten sich sofort eine Anwältin nehmen, damit Sie Ihre Rechte sichern.“",
              "„Ich höre, wie sehr Sie das erschüttert. Ich bin jetzt für Sie da. Erzählen Sie mir, was heute passiert ist – und dann schauen wir gemeinsam, was Sie für heute brauchen.“"
            ],
            richtig: 3,
            erklaerung: "Die richtige Antwort verbindet Beziehungsaufbau, Anerkennung des Erlebens und Struktur mit Fokus auf die aktuelle Situation. Die erste Antwort bagatellisiert, die zweite verlässt den Gegenwartsfokus, die dritte springt vorschnell zur Problemlösung, bevor Beziehung und Erfassen der Situation stattgefunden haben."
          },
          {
            typ: "dialog",
            titel: "Erste Minuten einer Krisenberatung",
            einleitung: "Konstruierte Situation: Frau D., 38 Jahre, erscheint ohne Termin in einer allgemeinen Lebensberatungsstelle. Ihr Bruder ist vor zwei Tagen unerwartet an einem Herzinfarkt gestorben. Sie wirkt fahrig und spricht abgehackt.",
            runden: [
              {
                klient: "Ich weiß gar nicht, warum ich hier bin. Ich kann nicht denken. Alles ist so unwirklich.",
                antworten: [
                  { text: "Sie sind hier richtig. Ich habe jetzt Zeit für Sie. Möchten Sie sich setzen und ein Glas Wasser trinken? Wir gehen ganz in Ruhe vor.", gut: true, feedback: "Gut. In einem schockähnlichen Zustand geben Sicherheit, Zuwendung und einfache, konkrete Angebote Halt. Sie bauen Beziehung auf, ohne zu überfordern." },
                  { text: "Das Gefühl der Unwirklichkeit ist typisch für die Schockphase nach Cullberg. Es folgt dann die Reaktionsphase.", gut: false, feedback: "Fachwissen ist hier fehl am Platz. Psychoedukation kommt später; jetzt braucht Frau D. Halt und Orientierung." },
                  { text: "Haben Sie denn keinen Termin vereinbart? Wir arbeiten normalerweise nur mit Terminen.", gut: false, feedback: "Organisatorische Hürden in einer akuten Krise verletzen das Prinzip des raschen Beginns und können als Zurückweisung erlebt werden." }
                ]
              },
              {
                klient: "Mein Bruder ist tot. Einfach so. Vorgestern. Wir haben am Sonntag noch telefoniert.",
                antworten: [
                  { text: "Wenigstens hatten Sie noch dieses Telefonat. Das ist doch ein schöner letzter Kontakt.", gut: false, feedback: "Der Versuch zu trösten deutet das Erleben vorschnell um und kann wie eine Relativierung des Verlusts wirken." },
                  { text: "Ihr Bruder ist ganz plötzlich gestorben, und am Sonntag haben Sie noch mit ihm gesprochen. Das ist kaum zu fassen.", gut: true, feedback: "Gut. Sie spiegeln das Gesagte einfach und anerkennen die Unfassbarkeit, ohne zu deuten oder zu bewerten." },
                  { text: "Woran ist er denn genau gestorben? Hatte er Vorerkrankungen?", gut: false, feedback: "Die Detailfragen zur Todesursache dienen eher der Neugier als der Stabilisierung und lenken vom Erleben der Klientin ab." }
                ]
              },
              {
                klient: "Ich schlafe nicht, ich esse nichts. Meine Mutter ruft ständig an, und ich soll die Beerdigung organisieren. Ich schaffe das nicht.",
                antworten: [
                  { text: "Sie müssen jetzt stark sein, Ihre Mutter braucht Sie.", gut: false, feedback: "Appelle an Stärke erhöhen den Druck und übergehen die Überforderung." },
                  { text: "Dann sollten wir jetzt eine genaue Liste aller Aufgaben für die Beerdigung erstellen.", gut: false, feedback: "Problemlösung ist grundsätzlich sinnvoll, kommt hier aber zu früh und zu umfassend. Zunächst geht es um Entlastung, Grundversorgung und Unterstützung." },
                  { text: "Das ist sehr viel auf einmal, und Sie sind völlig erschöpft. Lassen Sie uns schauen, wer Ihnen jetzt zur Seite stehen kann – und was Sie heute brauchen, um etwas zu essen und zur Ruhe zu kommen.", gut: true, feedback: "Gut. Sie anerkennen die Überforderung, achten auf Grundversorgung (Linderung) und fragen nach unterstützenden Personen (Leute einbeziehen)." }
                ]
              },
              {
                klient: "Mein Mann ist da. Aber ich will ihn nicht belasten. Und manchmal denke ich, ich halte das alles nicht aus.",
                antworten: [
                  { text: "Wenn Sie sagen, Sie halten das alles nicht aus – haben Sie in den letzten Tagen auch daran gedacht, nicht mehr leben zu wollen?", gut: true, feedback: "Gut. Die Äußerung ist ein möglicher Hinweis auf Suizidgedanken. Sie greifen sie auf und fragen direkt und ruhig nach. Das ist in jeder Krisenintervention geboten." },
                  { text: "Das geht vorbei. Nach einer Weile wird es leichter.", gut: false, feedback: "Die Beruhigung übergeht einen möglichen Hinweis auf Suizidalität. Sie verpassen die Chance, die Gefährdung einzuschätzen." },
                  { text: "Ihr Mann ist doch dafür da. Sie sollten ihn unbedingt einbeziehen.", gut: false, feedback: "Die Einbeziehung des Partners ist wichtig, aber hier übergeht die Antwort den zweiten, gewichtigeren Teil der Aussage." }
                ]
              }
            ]
          },
          {
            typ: "karten",
            titel: "Krisenintervention kompakt",
            karten: [
              { vorne: "Ziele der Krisenintervention", hinten: "Sicherheit, Entlastung und Stabilisierung, Wiederherstellung der Handlungsfähigkeit, Verhinderung ungünstiger Entwicklungen, Weitervermittlung." },
              { vorne: "Grundprinzipien nach Sonneck", hinten: "Rascher Beginn, Aktivität, Methodenflexibilität, Fokus auf aktuelle Situation, Einbeziehung der Umwelt, Entlastung, Zusammenarbeit." },
              { vorne: "BELLA", hinten: "Beziehung aufbauen – Erfassen der Situation – Linderung von Symptomen – Leute einbeziehen – Ansatz zur Problembewältigung." },
              { vorne: "Realistische Zuversicht", hinten: "Statt „Alles wird gut“: Zusage gemeinsamen Hinschauens auf das, was in den nächsten Tagen Halt geben kann." },
              { vorne: "Suizidalität in der Krise", hinten: "Wird in jeder Krisenintervention aktiv angesprochen, auch wenn die Person sie nicht von sich aus erwähnt." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Welche Prinzipien der Krisenintervention fallen Ihnen in Ihrem Arbeitsfeld leicht, welche schwer – etwa wegen fester Abläufe, Zeitdruck oder eigener Unsicherheit?",
            hinweis: "Leitfragen: Wie schnell kann ich in meiner Einrichtung auf eine Krise reagieren? Wie aktiv und strukturierend bin ich gewohnt zu arbeiten? Neige ich dazu, zu schnell Lösungen anzubieten oder zu trösten? Wen kann ich im Notfall hinzuziehen?"
          }
        ]
      },
      {
        id: "B6-3",
        titel: "Suizidalität einschätzen und offen ansprechen",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Warum Suizidalität ein Thema jeder Beratung ist",
            text: "Suizid ist in Deutschland kein Randphänomen. Nach den Daten des Statistischen Bundesamtes sterben in den letzten Jahren jährlich mehr als 9.000 Menschen durch Suizid – deutlich mehr als im Straßenverkehr. Die Zahl der Suizidversuche liegt um ein Vielfaches höher. Viele Menschen, die sich das Leben nehmen, hatten in den Wochen oder Monaten davor Kontakt zu Ärztinnen, Beratungsstellen oder anderen Helfenden.\n\nUnter **Suizidalität** versteht man die Gesamtheit aller Gedanken, Gefühle und Handlungen, die auf die Beendigung des eigenen Lebens gerichtet sind oder diese in Kauf nehmen. Sie reicht von passiven Todeswünschen („Es wäre mir egal, wenn ich morgen nicht aufwache“) über Suizidgedanken und -pläne bis zu Suizidhandlungen.\n\nDie meisten suizidalen Menschen sind **ambivalent**: Ein Teil möchte sterben oder vor allem, dass das unerträgliche Leiden aufhört; ein anderer Teil möchte leben. Suizidalität ist häufig Ausdruck einer **Einengung**, in der keine anderen Auswege mehr gesehen werden, und meist keine frei abgewogene Entscheidung. Diese Ambivalenz ist der wichtigste Ansatzpunkt für Hilfe.\n\nFür Beratende folgt daraus: Suizidalität muss in jeder Beratung **mitgedacht** und bei Hinweisen **aktiv angesprochen** werden. Das gehört zu den grundlegenden professionellen Pflichten – unabhängig vom Beratungsfeld und unabhängig davon, ob man selbst therapeutisch tätig ist."
          },
          {
            typ: "truefalse",
            aussage: "Wenn man eine ratsuchende Person direkt nach Suizidgedanken fragt, erhöht man dadurch das Risiko, dass sie sich etwas antut.",
            richtig: false,
            erklaerung: "Falsch. Das ist ein verbreiteter Mythos. Nach dem Stand der Forschung erhöht das direkte, einfühlsame Ansprechen das Suizidrisiko nicht. Viele Betroffene erleben es als Entlastung, über ihre Gedanken sprechen zu dürfen. Nicht zu fragen bedeutet dagegen, eine mögliche Gefährdung zu übersehen."
          },
          {
            typ: "text",
            titel: "Modelle der suizidalen Entwicklung: Pöldinger und Ringel",
            text: "Zwei klassische Modelle helfen, suizidale Entwicklungen zu verstehen.\n\nDer Psychiater **Walter Pöldinger** beschrieb die suizidale Entwicklung in drei **Stadien**:\n\n- **Erwägung**: Suizid wird als mögliche Lösung in Betracht gezogen. Auslöser können Suizide im Umfeld, Medienberichte oder eigene Verzweiflung sein. Die Person hat noch Distanz und Steuerungsfähigkeit.\n- **Ambivalenz**: Ein innerer Kampf zwischen selbsterhaltenden und selbstzerstörerischen Kräften. In diesem Stadium kommt es oft zu **direkten oder indirekten Suizidankündigungen** – sie sind Hilferufe und Kontaktangebote.\n- **Entschluss**: Die Entscheidung ist gefallen. Manche Menschen wirken dann auffallend **ruhig und entspannt**, was vom Umfeld fälschlich als Besserung gedeutet wird (oft als „Ruhe vor dem Sturm“ bezeichnet). Vorbereitungen werden getroffen.\n\nDer Wiener Psychiater **Erwin Ringel** beschrieb das **präsuizidale Syndrom** mit drei Elementen:\n\n- **Einengung**: situativ (Gefühl, keinen Ausweg zu haben), dynamisch (Gefühle fließen nur noch in eine Richtung), in den zwischenmenschlichen Beziehungen (Rückzug, Isolation) und in der Wertwelt (Dinge verlieren ihre Bedeutung).\n- **Gehemmte und gegen die eigene Person gerichtete Aggression**.\n- **Suizidphantasien**: zunächst aktiv herbeigeführt, später sich zwanghaft aufdrängend.\n\nBeide Modelle machen deutlich: Suizidalität entwickelt sich häufig über einen Zeitraum, und es gibt Phasen, in denen Hilfe besonders gut ansetzen kann."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Stadien der suizidalen Entwicklung nach Pöldinger in die richtige Reihenfolge.",
            elemente: [
              "Erwägung",
              "Ambivalenz",
              "Entschluss"
            ],
            erklaerung: "Auf die Erwägung folgt die Ambivalenz, in der häufig Hilferufe und Ankündigungen auftreten. Im Stadium des Entschlusses wirken manche Menschen trügerisch ruhig."
          },
          {
            typ: "fall",
            titel: "Plötzliche Ruhe",
            fall: "Konstruierte Lehrvignette: Eine Kollegin aus dem Betreuungsteam berichtet Ihnen von einem 70-jährigen Bewohner, der seit dem Tod seiner Frau vor drei Monaten sehr niedergeschlagen war und mehrfach sagte, er wolle „zu ihr“. Seit zwei Tagen sei er „wie ausgewechselt“, ruhig und freundlich. Er habe seinem Enkel seine Uhr geschenkt und gesagt, er habe „alles geregelt“.",
            frage: "Wie bewerten Sie diese Veränderung?",
            optionen: [
              "Als erfreuliche Besserung; die Trauerarbeit scheint gelungen.",
              "Als möglichen Hinweis auf einen gefassten Suizidentschluss; der Bewohner sollte zeitnah direkt angesprochen und eine ärztliche Einschätzung eingeholt werden.",
              "Als Zeichen einer beginnenden Demenz, das in der nächsten Fallbesprechung thematisiert werden sollte.",
              "Als Privatangelegenheit, in die sich das Team nicht einmischen sollte."
            ],
            richtig: 1,
            erklaerung: "Plötzliche Ruhe nach einer Phase der Verzweiflung, das Verschenken persönlicher Gegenstände und Äußerungen wie „alles geregelt“ sind ernstzunehmende Warnzeichen für einen möglichen Suizidentschluss. Hinzu kommen Risikofaktoren wie Verlust des Partners, höheres Alter und männliches Geschlecht. Es ist zeitnahes Handeln nötig: direkt ansprechen, nicht allein lassen, ärztliche Einschätzung einholen."
          },
          {
            typ: "text",
            titel: "Risikofaktoren, Warnzeichen und Schutzfaktoren",
            text: "Die Einschätzung von Suizidalität stützt sich auf das Gespräch und auf bekannte Risikofaktoren. Keine Liste kann einen Suizid vorhersagen; sie hilft aber, die Aufmerksamkeit zu schärfen.\n\n**Risikofaktoren** sind unter anderem:\n\n- **frühere Suizidversuche** – einer der stärksten bekannten Risikofaktoren,\n- **psychische Erkrankungen**, insbesondere Depressionen, Suchterkrankungen, Psychosen und bestimmte Persönlichkeitsstörungen,\n- **Suizide in der Familie oder im Umfeld**,\n- **Hoffnungslosigkeit**,\n- **soziale Isolation**, Verlust des Partners oder der Partnerin, Trennung,\n- **chronische körperliche Erkrankungen** und Schmerzen,\n- **männliches Geschlecht und höheres Lebensalter**,\n- **Zugang zu Suizidmitteln** wie Schusswaffen oder größeren Medikamentenvorräten,\n- **akute Krisen**: Arbeitsplatzverlust, finanzieller Ruin, drohende Strafverfahren, Kränkungen.\n\n**Warnzeichen** im engeren Sinn sind etwa direkte oder indirekte Ankündigungen, intensive Beschäftigung mit dem Tod, Abschiedsbriefe, Verschenken persönlicher Dinge, Regeln letzter Angelegenheiten, plötzliche Ruhe nach Verzweiflung und die Beschaffung von Mitteln.\n\n**Schutzfaktoren** sind tragfähige Beziehungen, Verantwortung für Kinder oder Tiere, religiöse oder weltanschauliche Überzeugungen, die Suizid ablehnen, Zukunftspläne, Bereitschaft, Hilfe anzunehmen, und eine laufende Behandlung. Schutzfaktoren mindern das Risiko, heben es aber nicht auf."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Merkmale zu.",
            kategorien: ["Risikofaktor", "Warnzeichen", "Schutzfaktor"],
            elemente: [
              { text: "Früherer Suizidversuch vor zwei Jahren", kat: 0 },
              { text: "Die Person regelt plötzlich ihr Testament und verschenkt Wertgegenstände.", kat: 1 },
              { text: "Enge Bindung an die eigenen Kinder, für die sie da sein möchte", kat: 2 },
              { text: "Langjährige Alkoholabhängigkeit", kat: 0 },
              { text: "Äußerung: „Bald habt ihr eure Ruhe vor mir.“", kat: 1 },
              { text: "Bereitschaft, regelmäßig zur hausärztlichen Praxis zu gehen und Hilfe anzunehmen", kat: 2 },
              { text: "Sozialer Rückzug nach Verlust des Partners", kat: 0 },
              { text: "Recherche zu tödlichen Medikamentendosen", kat: 1 }
            ],
            erklaerung: "Risikofaktoren beschreiben Merkmale, die das Risiko statistisch erhöhen. Warnzeichen sind aktuelle Hinweise auf eine akute Gefährdung. Schutzfaktoren mindern das Risiko, ohne es aufzuheben. Die Grenzen sind teilweise fließend; so kann sozialer Rückzug auch als aktuelles Warnzeichen gelten."
          },
          {
            typ: "text",
            titel: "Suizidalität offen ansprechen: Wie fragen?",
            text: "Suizidalität anzusprechen ist für viele Beratende zunächst ungewohnt. Hilfreich sind eine klare innere Haltung und einige Grundsätze:\n\n- **Direkt und ohne Umschweife fragen** – mit ruhiger Stimme, ohne erschrockenes Zögern. Klare Fragen signalisieren: Hier darf darüber gesprochen werden.\n- **Abgestuft vorgehen**: von allgemeinen zu konkreten Fragen, zum Beispiel:\n- „Wenn es Ihnen so schlecht geht – haben Sie manchmal das Gefühl, dass das Leben keinen Sinn mehr hat?“\n- „Haben Sie schon einmal daran gedacht, nicht mehr leben zu wollen?“\n- „Denken Sie daran, sich das Leben zu nehmen?“\n- „Wie konkret sind diese Gedanken? Haben Sie überlegt, wie und wann?“\n- „Haben Sie schon Vorbereitungen getroffen?“\n- „Haben Sie es früher schon einmal versucht?“\n- **Euphemismen vermeiden**: Formulierungen wie „Sie machen doch keine Dummheiten?“ verharmlosen und legen eine verneinende Antwort nahe.\n- **Nicht bewerten**: Weder Erschrecken noch Moralisieren („Denken Sie an Ihre Familie!“) helfen. Wer sich verurteilt fühlt, verschweigt.\n- **Das Leiden ernst nehmen**: Der Wunsch zu sterben ist meist ein Wunsch, dass ein unerträglicher Zustand aufhört. Diesen Schmerz anzuerkennen schafft Verbindung.\n- **Ambivalenz würdigen**: „Ein Teil von Ihnen möchte nicht mehr leben – und ein Teil hat Sie heute hierhergeführt.“\n\nDas Gespräch über Suizidalität ist selbst bereits eine Intervention: Es durchbricht die Isolation und Einengung."
          },
          {
            typ: "multi",
            frage: "Welche Formulierungen sind geeignet, um Suizidalität angemessen anzusprechen? (Mehrere Antworten möglich)",
            optionen: [
              "„Haben Sie schon einmal daran gedacht, sich das Leben zu nehmen?“",
              "„Sie machen doch keine Dummheiten, oder?“",
              "„Wenn Sie an Ihre Kinder denken, dürfen Sie so etwas doch nicht einmal denken.“",
              "„Wie konkret sind diese Gedanken – haben Sie sich schon überlegt, wie Sie es tun würden?“",
              "„Manche Menschen in so einer Lage denken daran, nicht mehr leben zu wollen. Kennen Sie solche Gedanken auch?“"
            ],
            richtig: [0, 3, 4],
            erklaerung: "Direkte, ruhige und normalisierende Fragen öffnen das Gespräch. Euphemismen wie „Dummheiten“ verharmlosen und legen ein Nein nahe. Moralische Appelle erzeugen Schuld und Scham und führen dazu, dass Suizidgedanken verschwiegen werden."
          },
          {
            typ: "text",
            titel: "Den Grad der Gefährdung einschätzen",
            text: "Beratende ohne Heilkundeerlaubnis führen keine abschließende klinische Risikoeinschätzung durch. Sie müssen aber erkennen, **wie dringlich** gehandelt werden muss. Hilfreich ist die Orientierung an folgenden Fragen:\n\n- **Konkretheit**: Gibt es nur passive Todeswünsche, Gedanken ohne Plan, einen konkreten Plan (Methode, Ort, Zeitpunkt) oder bereits Vorbereitungen?\n- **Zugang zu Mitteln**: Sind die gedachten Mittel verfügbar?\n- **Drängen**: Drängen sich die Gedanken auf, oder kann die Person sie steuern?\n- **Distanzierungsfähigkeit**: Kann sich die Person glaubhaft von Suizidabsichten distanzieren? Spricht sie von Gründen weiterzuleben?\n- **Absprachefähigkeit**: Kann sie verlässlich vereinbaren, sich bei einer Zuspitzung zu melden und Hilfe zu holen? Eine solche Absprache ist allerdings **keine Garantie**.\n- **Risiko- und Schutzfaktoren** wie oben beschrieben, insbesondere frühere Versuche.\n- **Eindruck im Gespräch**: Wirkt die Person zugänglich, oder bleibt sie verschlossen, abweisend, auffallend ruhig?\n\nGrob lassen sich drei Konstellationen unterscheiden:\n\n- **Lebensüberdruss oder Gedanken ohne Plan, gute Distanzierung**: Thema offen weiterbearbeiten, Notfallplan erstellen, ärztliche oder psychotherapeutische Abklärung empfehlen, zeitnah Folgetermin.\n- **Konkrete Gedanken oder Pläne, unsichere Distanzierung**: zeitnahe, möglichst noch am selben Tag stattfindende ärztliche bzw. psychiatrische Abklärung organisieren, Bezugspersonen einbeziehen.\n- **Akute Gefahr** (konkreter Plan, Mittel verfügbar, keine Distanzierung, Vorbereitungen): die Person **nicht allein lassen**, Notruf **112** bzw. Begleitung in die psychiatrische Notaufnahme."
          },
          {
            typ: "luecke",
            text: "Eine Person, die einen konkreten Plan hat, über die Mittel verfügt und sich nicht glaubhaft {{distanzieren|erinnern|beruhigen}} kann, ist akut gefährdet. Sie darf {{nicht allein gelassen|zunächst nach Hause geschickt|an eine Selbsthilfegruppe verwiesen}} werden, und es ist der Notruf {{112|110|116 117}} zu verständigen.",
            erklaerung: "Bei akuter Suizidgefahr steht die unmittelbare Sicherheit im Vordergrund: nicht allein lassen und medizinische Notfallhilfe über 112 holen. Die 110 ist der Polizeinotruf, die 116 117 der ärztliche Bereitschaftsdienst für nicht lebensbedrohliche Fälle."
          },
          {
            typ: "karten",
            titel: "Suizidalität – das Wichtigste",
            karten: [
              { vorne: "Stadien nach Pöldinger", hinten: "Erwägung – Ambivalenz – Entschluss; im Entschlussstadium mitunter trügerische Ruhe." },
              { vorne: "Präsuizidales Syndrom nach Ringel", hinten: "Einengung, gehemmte und gegen die eigene Person gerichtete Aggression, Suizidphantasien." },
              { vorne: "Stärkster bekannter Risikofaktor", hinten: "Frühere Suizidversuche; daneben psychische Erkrankungen, Hoffnungslosigkeit, Isolation, Zugang zu Mitteln." },
              { vorne: "Direktes Fragen", hinten: "Erhöht das Risiko nicht, sondern entlastet und ermöglicht Einschätzung und Hilfe." },
              { vorne: "Distanzierungsfähigkeit", hinten: "Kann sich die Person glaubhaft von Suizidabsichten distanzieren? Zentrales Kriterium der Dringlichkeit." },
              { vorne: "Akute Gefahr", hinten: "Nicht allein lassen, Notruf 112 bzw. Begleitung in die psychiatrische Notaufnahme." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Was löst die Vorstellung in Ihnen aus, eine ratsuchende Person direkt nach Suizidgedanken zu fragen? Welche Formulierung passt zu Ihnen?",
            hinweis: "Leitfragen: Welche Befürchtungen habe ich? Welche eigenen Erfahrungen mit dem Thema bringe ich mit? Wie könnte ich die Frage in meinen eigenen Worten stellen, sodass sie direkt und zugleich einfühlsam ist? Wo kann ich das Ansprechen üben (z. B. Rollenspiel, Supervision)?"
          }
        ]
      },
      {
        id: "B6-4",
        titel: "Notfallplan und Kooperation mit dem Hilfesystem",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Der Notfallplan (Safety Plan)",
            text: "Ein **Notfallplan** – international als *Safety Plan* bekannt und unter anderem von **Barbara Stanley** und **Gregory Brown** ausgearbeitet – ist eine schriftliche, gemeinsam mit der betroffenen Person erstellte Liste von Schritten für den Fall, dass sich eine suizidale Krise zuspitzt. Er wird in den eigenen Worten der Person formuliert und so aufbewahrt, dass er jederzeit greifbar ist, etwa im Portemonnaie oder auf dem Handy.\n\nTypische Bausteine sind:\n\n- **Persönliche Warnzeichen**: Woran merke ich, dass eine Krise beginnt? (Gedanken, Gefühle, Situationen)\n- **Eigene Bewältigungsstrategien**: Was kann ich allein tun, um mich abzulenken oder zu beruhigen? (z. B. Spaziergang, Musik, kalte Dusche)\n- **Menschen und Orte, die ablenken**: Wo und mit wem kann ich unter Menschen sein?\n- **Personen, die ich um Hilfe bitten kann**: Namen und Telefonnummern von Vertrauenspersonen.\n- **Professionelle Hilfe**: Hausarztpraxis, Psychotherapeutin, Krisendienst, Telefonseelsorge, Notruf.\n- **Die Umgebung sicherer machen**: Zugang zu Mitteln reduzieren, etwa Medikamentenvorräte abgeben.\n\nViele Pläne enthalten zusätzlich **Gründe zum Leben**, die die Person selbst benennt – Menschen, Aufgaben, Hoffnungen.\n\nDer Notfallplan hat sich gegenüber sogenannten **Nicht-Suizid-Verträgen** durchgesetzt. Solche Verträge, in denen eine Person zusichert, sich nichts anzutun, gelten als nicht ausreichend belegt und können eine trügerische Sicherheit erzeugen. Der Notfallplan setzt dagegen auf aktive Bewältigung und Verbindung zu Hilfe."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Bausteine eines Notfallplans in die typische Reihenfolge – von der eigenen Bewältigung hin zur professionellen Hilfe.",
            elemente: [
              "Persönliche Warnzeichen erkennen",
              "Eigene Strategien zur Beruhigung und Ablenkung anwenden",
              "Menschen und Orte aufsuchen, die ablenken",
              "Vertrauenspersonen um Hilfe bitten",
              "Professionelle Hilfe kontaktieren (Praxis, Krisendienst, Telefonseelsorge, 112)"
            ],
            erklaerung: "Der Notfallplan ist abgestuft: Er beginnt beim Erkennen der eigenen Warnzeichen und reicht bis zur professionellen Notfallhilfe. Die Sicherung der Umgebung (Zugang zu Mitteln reduzieren) ist ein zusätzlicher, übergreifender Baustein. Bei akuter Gefahr wird nicht abgestuft vorgegangen, sondern sofort 112 gewählt."
          },
          {
            typ: "mc",
            frage: "Was spricht nach heutigem Fachverständnis für einen Notfallplan statt eines „Nicht-Suizid-Vertrags“?",
            optionen: [
              "Der Notfallplan ist rechtlich verbindlich, der Vertrag nicht.",
              "Der Notfallplan stärkt aktive Bewältigung und Verbindung zu Hilfe, während Nicht-Suizid-Verträge nicht ausreichend belegt sind und trügerische Sicherheit erzeugen können.",
              "Der Notfallplan ersetzt die ärztliche Abklärung.",
              "Ein Nicht-Suizid-Vertrag darf nur von Ärztinnen und Ärzten abgeschlossen werden."
            ],
            richtig: 1,
            erklaerung: "Notfallpläne geben konkrete Handlungsschritte vor und vernetzen mit Hilfe. Nicht-Suizid-Verträge sind fachlich umstritten. Rechtliche Verbindlichkeit spielt bei beiden keine Rolle, und der Notfallplan ersetzt keine ärztliche Abklärung."
          },
          {
            typ: "text",
            titel: "Anlaufstellen im Hilfesystem in Deutschland",
            text: "Beratende sollten die wichtigsten Anlaufstellen kennen und die Nummern griffbereit haben:\n\n- **Telefonseelsorge**: rund um die Uhr, kostenfrei und anonym unter **0800 111 0 111** und **0800 111 0 222** sowie **116 123**; zusätzlich Beratung per Chat und Mail. Die Telefonseelsorge ist für alle Menschen in Krisen erreichbar, auch für Angehörige.\n- **Notruf 112**: bei akuter Lebensgefahr, auch bei akuter Suizidgefahr oder nach einer Suizidhandlung.\n- **Polizei 110**: bei Fremdgefährdung oder Bedrohung.\n- **Ärztlicher Bereitschaftsdienst 116 117**: außerhalb der Praxiszeiten bei dringenden, nicht lebensbedrohlichen Beschwerden.\n- **Psychiatrische Kliniken**: Die Notaufnahmen sind rund um die Uhr erreichbar und für Menschen in akuten seelischen Krisen zuständig; es gibt in der Regel eine regionale Versorgungsverpflichtung.\n- **Sozialpsychiatrischer Dienst (SpDi)**: in der Regel beim Gesundheitsamt angesiedelt. Er berät Menschen mit psychischen Erkrankungen und in Krisen sowie Angehörige, macht Hausbesuche und ist in die Aufgaben nach den Psychisch-Kranken-Gesetzen der Länder eingebunden. Die Zuständigkeiten und Erreichbarkeiten unterscheiden sich regional.\n- **Regionale Krisendienste**: In einigen Bundesländern und Städten gibt es psychiatrische Krisendienste mit eigener Rufnummer.\n- **Hausärztliche Praxis**: oft die erste und wichtigste Anlaufstelle, auch für Überweisungen.\n- **Psychotherapeutische Sprechstunde**: Über die Terminservicestellen der Kassenärztlichen Vereinigungen, erreichbar unter 116 117, können Termine vermittelt werden.\n\nEs lohnt sich, eine **eigene Liste regionaler Anlaufstellen** mit aktuellen Telefonnummern und Erreichbarkeiten zu pflegen und regelmäßig zu überprüfen."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Situation der passenden Anlaufstelle zu.",
            paare: [
              ["Eine Person hat eine Überdosis Tabletten eingenommen.", "Notruf 112"],
              ["Eine Person möchte nachts anonym über ihre Verzweiflung sprechen.", "Telefonseelsorge 0800 111 0 111 / 0800 111 0 222"],
              ["Ein Angehöriger bittet um Unterstützung, weil sein psychisch erkrankter Bruder sich zurückzieht und Hilfe ablehnt.", "Sozialpsychiatrischer Dienst"],
              ["Ein Klient droht, seinem früheren Arbeitgeber „etwas anzutun“, und ist bewaffnet.", "Polizei 110"],
              ["Eine Person braucht am Wochenende ärztliche Hilfe bei starken Schlafstörungen ohne akute Gefahr.", "Ärztlicher Bereitschaftsdienst 116 117"]
            ],
            erklaerung: "Die Zuordnung orientiert sich an Dringlichkeit und Art der Gefährdung: Lebensgefahr – 112; Fremdgefährdung – 110; anonyme Krisengespräche – Telefonseelsorge; Begleitung psychisch erkrankter Menschen und ihrer Angehörigen – Sozialpsychiatrischer Dienst; dringende, nicht lebensbedrohliche ärztliche Fragen – 116 117."
          },
          {
            typ: "text",
            titel: "Rechtlicher Rahmen bei akuter Gefährdung",
            text: "Bei akuter Suizidgefahr stellen sich für Beratende auch rechtliche Fragen. In Grundzügen gilt:\n\n- **Schweigepflicht und Notstand**: Wer zur Verschwiegenheit verpflichtet ist, darf diese bei einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leib oder Leben nach den Grundsätzen des **rechtfertigenden Notstands (§ 34 StGB)** durchbrechen, etwa um den Rettungsdienst zu informieren. Das Leben hat Vorrang vor dem Geheimhaltungsinteresse. Vorzugsweise wird zuvor das Einverständnis der Person eingeholt.\n- **Hilfeleistungspflicht**: Wer bei Unglücksfällen nicht hilft, obwohl dies erforderlich und zumutbar ist, kann sich nach **§ 323c StGB** strafbar machen. In einer akuten Notlage ist Hilfe zu holen.\n- **Unterbringung**: Ob ein Mensch gegen seinen Willen in einer psychiatrischen Klinik untergebracht wird, entscheiden nicht Beratende. Die Voraussetzungen sind in den **Psychisch-Kranken-Gesetzen bzw. Unterbringungsgesetzen der Bundesländer** geregelt. Es bedarf einer erheblichen Gefahr infolge einer psychischen Erkrankung; die Entscheidung trifft grundsätzlich ein Gericht, in Eilfällen können Behörden vorläufig handeln.\n\nFür die Praxis heißt das: Beratende müssen nicht juristisch entscheiden, ob eine Unterbringung erforderlich ist. Ihre Aufgabe ist es, Gefahr zu erkennen, Hilfe zu holen und die Person bis zur Übergabe zu begleiten. Jede Situation wird anschließend **sorgfältig dokumentiert**: Wahrnehmungen, Äußerungen, Einschätzung, getroffene Maßnahmen, Zeitpunkte und Absprachen."
          },
          {
            typ: "truefalse",
            aussage: "Bei akuter, nicht anders abwendbarer Lebensgefahr dürfen Beratende den Rettungsdienst auch ohne Einverständnis der betroffenen Person informieren.",
            richtig: true,
            erklaerung: "Richtig. Nach den Grundsätzen des rechtfertigenden Notstands (§ 34 StGB) wiegt der Schutz des Lebens schwerer als das Geheimhaltungsinteresse. Wenn möglich, wird die Person zuvor einbezogen und um ihr Einverständnis gebeten."
          },
          {
            typ: "text",
            titel: "Kooperation und Übergabe gestalten",
            text: "Krisenintervention gelingt selten allein. Gute Kooperation mit dem Hilfesystem folgt einigen Grundsätzen:\n\n- **Transparenz**: Die ratsuchende Person wird – soweit möglich – über jeden Schritt informiert und einbezogen. Sie entscheidet mit, wer was erfährt. Für den Austausch mit anderen Stellen wird eine **Schweigepflichtentbindung** eingeholt, sofern keine Notstandssituation vorliegt.\n- **Aktive Vermittlung statt bloßer Empfehlung**: Eine Telefonnummer auf einem Zettel reicht in der Krise oft nicht. Hilfreicher ist es, gemeinsam anzurufen, einen konkreten Termin zu vereinbaren oder die Person zu begleiten.\n- **Warme Übergabe**: Wo möglich, wird die Weitervermittlung persönlich vorbereitet, damit die Person nicht erneut alles erzählen muss und keine Lücke zwischen den Hilfen entsteht.\n- **Folgekontakt vereinbaren**: Ein verbindlicher nächster Termin oder ein vereinbarter Anruf gibt Halt.\n- **Bezugspersonen einbeziehen**: mit Einverständnis Angehörige oder Freunde informieren und in den Notfallplan einbinden.\n- **Grenzen der eigenen Rolle kennen**: Beratende stellen keine Diagnosen, verordnen keine Medikamente und entscheiden nicht über Unterbringungen. Sie sind aber oft die ersten, die eine Gefährdung wahrnehmen – und damit ein wichtiges Glied in der Hilfekette.\n\nNach einer belastenden Krisensituation sollten Beratende auch für sich selbst sorgen: Nachbesprechung im Team, kollegiale Beratung oder Supervision helfen, das Erlebte zu verarbeiten."
          },
          {
            typ: "dialog",
            titel: "Gesprächssimulation: Suizidalität ansprechen und einen Notfallplan beginnen",
            einleitung: "Konstruierte Situation: Herr S., 29 Jahre, IT-Fachkraft, kommt in die dritte Beratungssitzung zum Thema Arbeitsplatzkonflikte. Er wirkt heute deutlich bedrückter. Vor einer Woche hat seine Partnerin die Beziehung beendet. Sie möchten die Situation einschätzen und mit ihm Schritte vereinbaren.",
            runden: [
              {
                klient: "Ehrlich gesagt ist mir der Job gerade völlig egal. Seit Lisa weg ist, ist eh alles egal. Ich frage mich, wofür ich das alles noch mache.",
                antworten: [
                  { text: "Dann lassen Sie uns heute über Lisa sprechen statt über den Job. Wie kam es zur Trennung?", gut: false, feedback: "Das Thema zu wechseln ist nachvollziehbar, aber die Äußerung „wofür das alles“ enthält einen möglichen Hinweis auf Hoffnungslosigkeit, der zuerst aufgegriffen werden sollte." },
                  { text: "Wenn alles egal geworden ist und Sie sich fragen, wofür Sie das alles machen – haben Sie in den letzten Tagen auch daran gedacht, nicht mehr leben zu wollen?", gut: true, feedback: "Gut. Sie greifen die Hoffnungslosigkeit auf und fragen direkt und ruhig nach Suizidgedanken. So eröffnen Sie das Gespräch über eine mögliche Gefährdung." },
                  { text: "Trennungen sind schmerzhaft, aber in Ihrem Alter finden Sie sicher bald jemand Neues.", gut: false, feedback: "Die Antwort bagatellisiert den Verlust und vertröstet auf die Zukunft. Herr S. fühlt sich vermutlich nicht verstanden, und eine mögliche Gefährdung bleibt unerkannt." }
                ]
              },
              {
                klient: "… Ja. Ich habe schon daran gedacht. Abends vor allem. Dass es einfach aufhören soll.",
                antworten: [
                  { text: "Danke, dass Sie mir das so offen sagen. Ich möchte das genauer verstehen: Wie konkret sind diese Gedanken? Haben Sie sich überlegt, wie Sie es tun würden?", gut: true, feedback: "Gut. Sie würdigen die Offenheit und fragen abgestuft nach Konkretheit und Plänen, um die Dringlichkeit einzuschätzen." },
                  { text: "Oh nein, das dürfen Sie aber nicht tun! Denken Sie doch an Ihre Eltern.", gut: false, feedback: "Erschrecken und moralischer Appell erzeugen Schuld und können dazu führen, dass Herr S. weitere Gedanken verschweigt." },
                  { text: "Solche Gedanken hat jeder einmal. Das ist ganz normal nach einer Trennung.", gut: false, feedback: "Normalisieren kann entlasten, aber hier wird die Äußerung bagatellisiert, und die nötige Einschätzung der Gefährdung unterbleibt." }
                ]
              },
              {
                klient: "Nicht wirklich konkret. Ich habe mal gegoogelt, aber dann zugemacht. Ich würde es meiner Schwester nicht antun wollen. Aber die Gedanken kommen immer wieder.",
                antworten: [
                  { text: "Gut, dann ist es ja nicht so schlimm. Lassen Sie uns zum Arbeitsthema zurückkehren.", gut: false, feedback: "Das Fehlen eines konkreten Plans bedeutet keine Entwarnung. Das Recherchieren ist ein Warnzeichen, die Gedanken drängen sich wiederholt auf. Das Thema braucht weiter Raum." },
                  { text: "Ich muss jetzt sofort den Notarzt rufen.", gut: false, feedback: "Nach den Schilderungen besteht derzeit keine akute Gefahr im Sinne eines konkreten Plans ohne Distanzierung. Ein Notruf ohne Einbeziehung wäre unverhältnismäßig und könnte das Vertrauen beschädigen. Wichtig ist aber eine zeitnahe ärztliche Abklärung." },
                  { text: "Ihre Schwester ist Ihnen wichtig, und ein Teil von Ihnen möchte ihr das nicht antun. Gleichzeitig kommen die Gedanken immer wieder, und Sie haben schon recherchiert. Das nehme ich sehr ernst. Ich möchte heute mit Ihnen gemeinsam überlegen, was Ihnen hilft, wenn die Gedanken abends stark werden – und wer Sie unterstützen kann.", gut: true, feedback: "Gut. Sie würdigen den Schutzfaktor und die Ambivalenz, benennen die Warnzeichen klar und leiten zum Notfallplan über." }
                ]
              },
              {
                klient: "Was mir hilft? Keine Ahnung. Manchmal gehe ich laufen, dann ist es kurz besser. Und meine Schwester … die weiß nichts davon.",
                antworten: [
                  { text: "Laufen ist also etwas, das kurz hilft – das schreiben wir auf. Wie wäre es für Sie, wenn Ihre Schwester davon wüsste? Und ich gebe Ihnen die Nummern der Telefonseelsorge, 0800 111 0 111 und 0800 111 0 222, die auch nachts erreichbar ist.", gut: true, feedback: "Gut. Sie nehmen die eigene Strategie auf, prüfen behutsam die Einbeziehung einer Vertrauensperson und ergänzen professionelle Hilfe. So entsteht Schritt für Schritt ein Notfallplan." },
                  { text: "Sie müssen Ihrer Schwester heute noch alles erzählen, das ist eine Bedingung für die weitere Beratung.", gut: false, feedback: "Bedingungen und Druck gefährden die Zusammenarbeit. Die Einbeziehung von Bezugspersonen sollte gemeinsam und mit Einverständnis erarbeitet werden." },
                  { text: "Laufen allein reicht nicht. Sie brauchen dringend Medikamente.", gut: false, feedback: "Medikamentöse Empfehlungen überschreiten die Rolle der Beratung und können nur ärztlich erfolgen. Zudem wird die vorhandene Ressource abgewertet." }
                ]
              },
              {
                klient: "Okay. Vielleicht könnte ich sie anrufen. Und was mache ich jetzt mit allem anderen?",
                antworten: [
                  { text: "Das klären wir nächsten Monat in Ruhe, wenn es Ihnen besser geht.", gut: false, feedback: "Ein langer Abstand bis zum nächsten Kontakt ist bei bestehenden Suizidgedanken nicht angemessen. Es braucht eine zeitnahe Anbindung." },
                  { text: "Ich schlage vor, dass wir zwei Dinge vereinbaren: Sie stellen sich in den nächsten Tagen in Ihrer hausärztlichen Praxis vor – wenn Sie möchten, rufen wir gleich gemeinsam dort an. Und wir sehen uns in dieser Woche noch einmal. Bis dahin haben Sie Ihren Notfallplan. Wie klingt das für Sie?", gut: true, feedback: "Gut. Sie vermitteln aktiv in ärztliche Abklärung, sichern einen zeitnahen Folgetermin und beziehen Herrn S. als Partner in die Entscheidung ein." },
                  { text: "Am besten kündigen Sie erst einmal den Job, dann haben Sie einen Stressfaktor weniger.", gut: false, feedback: "Weitreichende Lebensentscheidungen sollten in einer akuten Krise nicht getroffen werden. Der Ratschlag überschreitet die Rolle und kann neue Belastungen erzeugen." }
                ]
              }
            ]
          },
          {
            typ: "multi",
            frage: "Welche Elemente gehören zu einer guten Kooperation mit dem Hilfesystem? (Mehrere Antworten möglich)",
            optionen: [
              "Gemeinsam mit der Person bei der Praxis oder dem Krisendienst anrufen",
              "Angehörige grundsätzlich ohne Rücksprache informieren, auch wenn keine akute Gefahr besteht",
              "Einen verbindlichen Folgekontakt vereinbaren",
              "Eine Schweigepflichtentbindung für den Austausch mit anderen Stellen einholen",
              "Der Person eine Liste mit Telefonnummern geben und den Kontakt damit beenden"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Aktive Vermittlung, verbindlicher Folgekontakt und eine Schweigepflichtentbindung sind Kernelemente. Angehörige werden ohne Einverständnis nur in Notstandssituationen informiert. Eine bloße Nummernliste ohne weitere Anbindung reicht in der Krise in der Regel nicht aus."
          },
          {
            typ: "karten",
            titel: "Notfallplan und Hilfesystem",
            karten: [
              { vorne: "Bausteine eines Notfallplans", hinten: "Warnzeichen, eigene Strategien, ablenkende Menschen und Orte, Vertrauenspersonen, professionelle Hilfe, Umgebung sicherer machen, Gründe zum Leben." },
              { vorne: "Telefonseelsorge", hinten: "0800 111 0 111, 0800 111 0 222 und 116 123 – rund um die Uhr, kostenfrei, anonym; zusätzlich Chat und Mail." },
              { vorne: "Notrufnummern", hinten: "112 bei Lebensgefahr, 110 bei Fremdgefährdung, 116 117 ärztlicher Bereitschaftsdienst und Terminservicestellen." },
              { vorne: "Sozialpsychiatrischer Dienst", hinten: "Meist am Gesundheitsamt; Beratung und Hausbesuche für psychisch erkrankte Menschen und Angehörige, Aufgaben nach den Landesgesetzen." },
              { vorne: "§ 34 StGB", hinten: "Rechtfertigender Notstand: Durchbrechung der Verschwiegenheit zur Abwendung einer gegenwärtigen Gefahr für Leib oder Leben." },
              { vorne: "Warme Übergabe", hinten: "Persönlich vorbereitete Weitervermittlung, damit keine Lücke zwischen den Hilfen entsteht." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Erstellen Sie gedanklich Ihre eigene Liste regionaler Anlaufstellen. Welche Nummern und Zuständigkeiten kennen Sie bereits, und was müssen Sie noch recherchieren?",
            hinweis: "Leitfragen: Wo ist die nächste psychiatrische Klinik mit Notaufnahme? Wie erreiche ich den Sozialpsychiatrischen Dienst in meinem Landkreis? Gibt es einen regionalen Krisendienst? Mit wem kann ich nach einer belastenden Krisensituation sprechen?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "mc",
        frage: "Wodurch ist eine traumatische Krise im Unterschied zu einer Veränderungskrise vor allem gekennzeichnet?",
        optionen: [
          "Durch einen allmählichen Beginn im Rahmen normaler Lebensübergänge",
          "Durch ein plötzliches, unvorhersehbares Ereignis, das mit einem Schock beginnt",
          "Durch das Fehlen jeglicher emotionaler Reaktion",
          "Dadurch, dass sie immer eine psychische Erkrankung zur Folge hat"
        ],
        richtig: 1,
        erklaerung: "Traumatische Krisen beginnen mit einem plötzlichen, unvorhersehbaren Ereignis und der Schockphase. Veränderungskrisen entwickeln sich eher allmählich aus Lebensübergängen. Krisen sind keine Krankheiten und führen nicht zwangsläufig zu solchen."
      },
      {
        typ: "mc",
        frage: "In welcher Phase der Veränderungskrise ist die betroffene Person nach Sonneck besonders offen für Hilfe von außen?",
        optionen: [
          "Konfrontation",
          "Versagen",
          "Vollbild der Krise",
          "Mobilisierung"
        ],
        richtig: 3,
        erklaerung: "In der Mobilisierungsphase werden alle inneren und äußeren Ressourcen aktiviert; Hilfe von außen wird besonders gut angenommen. Das begründet den Grundsatz des raschen Beginns."
      },
      {
        typ: "multi",
        frage: "Wofür stehen die Buchstaben des BELLA-Schemas? (Mehrere Antworten möglich)",
        optionen: [
          "Beziehung aufbauen",
          "Erfassen der Situation",
          "Lebensgeschichte aufarbeiten",
          "Leute einbeziehen",
          "Ansatz zur Problembewältigung"
        ],
        richtig: [0, 1, 3, 4],
        erklaerung: "BELLA steht für Beziehung aufbauen, Erfassen der Situation, Linderung von Symptomen, Leute einbeziehen und Ansatz zur Problembewältigung. Die Aufarbeitung der Lebensgeschichte ist kein Element der Krisenintervention."
      },
      {
        typ: "truefalse",
        aussage: "Eine auffallende Ruhe und Gelassenheit nach einer Phase großer Verzweiflung kann ein Warnzeichen für einen gefassten Suizidentschluss sein.",
        richtig: true,
        erklaerung: "Richtig. Pöldinger beschreibt, dass Menschen im Stadium des Entschlusses mitunter ruhig und entspannt wirken, was fälschlich als Besserung gedeutet werden kann."
      },
      {
        typ: "multi",
        frage: "Welche Aussagen zum Ansprechen von Suizidalität sind zutreffend? (Mehrere Antworten möglich)",
        optionen: [
          "Direktes, einfühlsames Fragen erhöht das Suizidrisiko nicht.",
          "Euphemismen wie „Sie machen doch keine Dummheiten?“ sind besonders schonend und daher zu empfehlen.",
          "Es empfiehlt sich ein abgestuftes Vorgehen von allgemeinen zu konkreten Fragen.",
          "Moralische Appelle helfen, die Person von ihren Gedanken abzubringen.",
          "Die Ambivalenz der Person ist ein wichtiger Ansatzpunkt."
        ],
        richtig: [0, 2, 4],
        erklaerung: "Direktes, abgestuftes Fragen und das Würdigen der Ambivalenz sind fachlich geboten. Euphemismen verharmlosen und legen ein Nein nahe; moralische Appelle erzeugen Scham und führen zum Verschweigen."
      },
      {
        typ: "mc",
        frage: "Welcher der folgenden Faktoren gilt als einer der stärksten bekannten Risikofaktoren für einen Suizid?",
        optionen: [
          "Ein früherer Suizidversuch",
          "Ein hoher Bildungsabschluss",
          "Die Verantwortung für minderjährige Kinder",
          "Regelmäßiger Sport"
        ],
        richtig: 0,
        erklaerung: "Frühere Suizidversuche zählen zu den stärksten Risikofaktoren. Verantwortung für Kinder gilt eher als Schutzfaktor; Bildungsabschluss und Sport sind keine etablierten Risikofaktoren in diesem Sinn."
      },
      {
        typ: "mc",
        frage: "Eine Person schildert einen konkreten Suizidplan für heute Nacht, hat die Mittel zu Hause und kann sich nicht distanzieren. Was ist zu tun?",
        optionen: [
          "Einen Termin in der kommenden Woche vereinbaren und die Nummer der Telefonseelsorge mitgeben",
          "Einen Nicht-Suizid-Vertrag unterschreiben lassen und die Person nach Hause schicken",
          "Die Person nicht allein lassen und über den Notruf 112 medizinische Notfallhilfe holen",
          "Den Sozialpsychiatrischen Dienst per E-Mail informieren"
        ],
        richtig: 2,
        erklaerung: "Bei akuter Suizidgefahr hat die unmittelbare Sicherheit Vorrang: nicht allein lassen und 112 wählen bzw. in die psychiatrische Notaufnahme begleiten. Spätere Termine, Verträge oder E-Mails werden der akuten Gefahr nicht gerecht."
      },
      {
        typ: "truefalse",
        aussage: "Die Telefonseelsorge ist in Deutschland rund um die Uhr kostenfrei unter 0800 111 0 111 und 0800 111 0 222 erreichbar.",
        richtig: true,
        erklaerung: "Richtig. Die Telefonseelsorge ist rund um die Uhr, kostenfrei und anonym erreichbar; zusätzlich gibt es die Nummer 116 123 sowie Chat- und Mailberatung."
      }
    ]
  }
,

  /* =========================================================
     B7 – SINN UND WERTE IN DER BERATUNG
     ========================================================= */
  {
    kurs: "berater",
    id: "B7",
    titel: "Sinn und Werte in der Beratung",
    beschreibung: "Viele Beratungsanliegen berühren hinter der Oberfläche Fragen nach Sinn, Werten und Orientierung. Das Modul führt in die Grundgedanken der Logotherapie Viktor E. Frankls ein, verbindet sie mit der Werteklärung der Akzeptanz- und Commitment-Therapie und zeigt, wie Sinnfragen in Lebensübergängen erkannt und aufgegriffen werden können. Abschließend lernen Sie den Sokratischen Dialog als Gesprächsform in seinen Grundzügen kennen.",
    lernziele: [
      "Sie können die anthropologischen Grundannahmen der Logotherapie und die drei Wertkategorien nach Frankl erläutern.",
      "Sie können Werte von Zielen, Gefühlen und Regeln unterscheiden und Methoden der Werteklärung, einschließlich des ACT-Ansatzes, anwenden.",
      "Sie können Lebensübergänge mit Modellen wie dem von William Bridges und Nancy Schlossberg beschreiben und darin verborgene Sinnfragen erkennen.",
      "Sie können Grundprinzipien und typische Fragetechniken des Sokratischen Dialogs benennen und in einfachen Gesprächssequenzen einsetzen.",
      "Sie können die Grenzen sinnzentrierter Beratung gegenüber Psychotherapie und Seelsorge einordnen."
    ],
    lektionen: [
      {
        id: "B7-1",
        titel: "Einführung in die Logotherapie für die Beratung",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Viktor E. Frankl und die Frage nach dem Sinn",
            text: "Der Wiener Neurologe und Psychiater **Viktor E. Frankl** (1905–1997) begründete die **Logotherapie und Existenzanalyse**, die häufig als „Dritte Wiener Richtung der Psychotherapie“ nach Sigmund Freuds Psychoanalyse und Alfred Adlers Individualpsychologie bezeichnet wird. Die Grundgedanken hatte Frankl bereits vor dem Zweiten Weltkrieg entwickelt. Seine Erfahrungen als Häftling in mehreren Konzentrationslagern, darunter Theresienstadt und Auschwitz, verarbeitete er nach der Befreiung in dem 1946 erschienenen Buch, das später unter dem Titel *… trotzdem Ja zum Leben sagen* weltbekannt wurde.\n\nIm Zentrum steht die Überzeugung, dass der Mensch grundlegend auf **Sinn** ausgerichtet ist. Frankl sprach vom **Willen zum Sinn** als primärer Motivation – im bewussten Gegensatz zum Willen zur Lust (Freud) und zum Willen zur Macht (Adler).\n\nFür die psychologische Beratung ist die Logotherapie aus mehreren Gründen bedeutsam:\n\n- Sie richtet den Blick nicht nur auf Defizite, sondern auf die **geistige Dimension** des Menschen – seine Fähigkeit, Stellung zu nehmen, zu entscheiden und Verantwortung zu übernehmen.\n- Sie bietet eine Sprache für **Sinnkrisen**, Orientierungslosigkeit und den Umgang mit **unabänderlichem Leid**.\n- Sie ist mit vielen anderen Ansätzen gut verbindbar, etwa mit ressourcenorientierter Beratung, Salutogenese und der Akzeptanz- und Commitment-Therapie.\n\nIn dieser Lektion geht es um Grundgedanken, die in der Beratung genutzt werden können. Die spezifisch therapeutischen Methoden der Logotherapie, wie Paradoxe Intention oder Dereflexion bei Angst- und Zwangsstörungen, gehören in die Hand psychotherapeutisch qualifizierter Fachkräfte."
          },
          {
            typ: "text",
            titel: "Die drei Säulen der Logotherapie",
            text: "Frankl fasste sein Menschenbild in drei Grundannahmen zusammen, die oft als die **drei Säulen** der Logotherapie bezeichnet werden:\n\n- **Freiheit des Willens**: Der Mensch ist nicht frei *von* Bedingungen – biologischen, psychischen und sozialen –, aber er ist frei, *zu* diesen Bedingungen Stellung zu nehmen. Diese Freiheit ist immer mit **Verantwortung** verbunden.\n- **Wille zum Sinn**: Der Mensch strebt grundlegend danach, in seinem Leben Sinn zu finden und zu verwirklichen. Wird dieses Streben frustriert, kann ein Gefühl innerer Leere entstehen.\n- **Sinn des Lebens**: Sinn ist nach Frankl nicht beliebig erfindbar, sondern wird in der jeweiligen Situation **gefunden**. Jede Lebenssituation enthält eine Sinnmöglichkeit, die die Person wahrnehmen und verwirklichen kann – auch unter schwierigsten Umständen.\n\nZwei menschliche Grundfähigkeiten machen diese Haltung möglich:\n\n- **Selbstdistanzierung**: die Fähigkeit, Abstand zu sich selbst, zu eigenen Gefühlen, Gedanken und Symptomen zu nehmen – etwa sich über sich selbst zu wundern oder humorvoll auf eigene Ängste zu schauen.\n- **Selbsttranszendenz**: die Fähigkeit, über sich hinaus auf etwas oder jemanden ausgerichtet zu sein – eine Aufgabe, einen Menschen, eine Sache. Nach Frankl verwirklicht sich der Mensch gerade dann, wenn er sich selbst übersteigt.\n\nIn der Beratung lassen sich diese Fähigkeiten gezielt ansprechen: durch Fragen, die Abstand ermöglichen, und durch Fragen, die den Blick auf das richten, wofür oder für wen es sich lohnt."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Begriffe ihrer Bedeutung zu.",
            paare: [
              ["Freiheit des Willens", "Freiheit, zu inneren und äußeren Bedingungen Stellung zu nehmen"],
              ["Wille zum Sinn", "Grundlegende Ausrichtung des Menschen auf Sinnfindung"],
              ["Sinn des Lebens", "Sinnmöglichkeit, die in jeder Situation gefunden werden kann"],
              ["Selbstdistanzierung", "Fähigkeit, Abstand zu eigenen Gefühlen, Gedanken und Symptomen zu nehmen"],
              ["Selbsttranszendenz", "Fähigkeit, über sich hinaus auf Menschen oder Aufgaben ausgerichtet zu sein"]
            ],
            erklaerung: "Die drei Säulen beschreiben das Menschenbild der Logotherapie; Selbstdistanzierung und Selbsttranszendenz sind die menschlichen Grundfähigkeiten, auf die sich die Methoden stützen."
          },
          {
            typ: "merke",
            text: "Wer ein Warum zu leben hat, erträgt fast jedes Wie.",
            quelle: "Friedrich Nietzsche, von Viktor E. Frankl in „… trotzdem Ja zum Leben sagen“ sinngemäß zitiert"
          },
          {
            typ: "text",
            titel: "Die drei Wertkategorien: Wege zum Sinn",
            text: "Frankl beschreibt drei Hauptstraßen, auf denen Menschen Sinn finden können, die sogenannten **Wertkategorien**:\n\n- **Schöpferische Werte**: Sinn durch das, was wir der Welt geben – durch Arbeit, Tun, Gestalten, Schaffen, Engagement. Beispiele sind eine sorgfältig erledigte Aufgabe, die Erziehung eines Kindes, ein Ehrenamt oder ein Werk.\n- **Erlebniswerte**: Sinn durch das, was wir von der Welt empfangen – durch Erleben von Natur, Kunst, Musik, Schönheit und vor allem durch die **Begegnung und Liebe** zu einem anderen Menschen.\n- **Einstellungswerte**: Sinn durch die Haltung, die wir gegenüber **unabänderlichem Leid** einnehmen. Wo eine Situation nicht verändert werden kann – bei unheilbarer Krankheit, unwiderruflichem Verlust –, bleibt die Freiheit, wie man ihr begegnet.\n\nFrankl betrachtete die Einstellungswerte als die höchste Möglichkeit der Sinnverwirklichung, weil sie selbst dann noch offenstehen, wenn schöpferische Werte und Erlebniswerte verschlossen sind. Er sprach in diesem Zusammenhang von einem **tragischen Optimismus**: einem Ja zum Leben trotz Leid, Schuld und Tod, die er als **tragische Trias** bezeichnete.\n\nWichtig für die Beratung: Einstellungswerte dürfen nicht vorschnell eingefordert werden. Wer Leid erfährt, das veränderbar ist, sollte zuerst darin unterstützt werden, es zu verändern. Die Frage nach der Einstellung stellt sich dort, wo Veränderung nicht möglich ist – und sie muss behutsam, im eigenen Tempo der Person, entwickelt werden."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Beispiele der Wertkategorie nach Frankl zu, die im Vordergrund steht.",
            kategorien: ["schöpferische Werte", "Erlebniswerte", "Einstellungswerte"],
            elemente: [
              { text: "Eine Erzieherin baut mit den Kindern einen Garten auf der Kita-Fläche an.", kat: 0 },
              { text: "Ein Witwer erlebt beim Hören der Lieblingsmusik seiner Frau tiefe Verbundenheit.", kat: 1 },
              { text: "Eine Frau mit unheilbarer Erkrankung entscheidet, die verbleibende Zeit bewusst und versöhnt zu gestalten.", kat: 2 },
              { text: "Ein Rentner engagiert sich in einer Hausaufgabenhilfe.", kat: 0 },
              { text: "Eine Pflegekraft genießt nach der Nachtschicht den Sonnenaufgang am See.", kat: 1 },
              { text: "Ein Mann, der nach einem Unfall querschnittgelähmt ist, beschließt, anderen Betroffenen Mut zu machen.", kat: 2 },
              { text: "Ein Vater erlebt die Geburt seines Kindes als unermesslich bedeutsam.", kat: 1 }
            ],
            erklaerung: "Schöpferische Werte verwirklichen sich im Tun, Erlebniswerte im Empfangen und in der Begegnung, Einstellungswerte in der Haltung gegenüber Unabänderlichem. Manche Beispiele berühren mehrere Kategorien – so verbindet das Engagement des querschnittgelähmten Mannes eine Einstellung mit schöpferischem Tun."
          },
          {
            typ: "text",
            titel: "Existenzielles Vakuum und Sinnkrisen",
            text: "Frankl beobachtete bereits Mitte des 20. Jahrhunderts eine verbreitete Erfahrung innerer Leere und Sinnlosigkeit, die er **existenzielles Vakuum** nannte. Es zeigt sich weniger als dramatische Verzweiflung, sondern eher als Langeweile, Gleichgültigkeit, Orientierungslosigkeit oder Gefühl, „nur zu funktionieren“. Frankl brachte es mit dem Verlust tragender Traditionen in Verbindung: Weder Instinkte noch Traditionen sagen dem Menschen heute selbstverständlich, was er tun soll.\n\nAus dem existenziellen Vakuum können verschiedene Reaktionen entstehen:\n\n- **Konformismus**: tun, was andere tun,\n- **Ersatzbefriedigungen**: Streben nach Macht, Geld, Konsum, Vergnügen oder Substanzen,\n- **Rückzug, Aggression oder Sucht** als Ausdruck der inneren Leere.\n\nWenn eine Sinnfrustration zu einem psychischen Leiden führt, sprach Frankl von einer **noogenen Neurose** – einem Leiden, das aus der geistigen Dimension, etwa aus Wertkonflikten oder Sinnverlust, entsteht. Die Abgrenzung von psychisch oder körperlich bedingten Störungen ist eine diagnostische Aufgabe.\n\nFür die Beratung bedeutet das: Nicht jede Niedergeschlagenheit ist eine Depression, aber auch nicht jede Leere ist „nur“ eine Sinnfrage. Sinnkrisen und depressive Erkrankungen können sich ähneln und gleichzeitig bestehen. Bei Hinweisen auf eine Depression – etwa anhaltende Freudlosigkeit, Hoffnungslosigkeit, Schlaf- und Appetitstörungen, Suizidgedanken – ist eine ärztliche oder psychotherapeutische Abklärung zu empfehlen. Sinnzentrierte Beratung kann dann begleitend wertvoll sein."
          },
          {
            typ: "mc",
            frage: "Ein 35-jähriger Ingenieur berichtet: „Ich habe alles erreicht, was ich wollte – Haus, Job, Familie. Trotzdem fühlt sich alles leer an. Ich funktioniere nur noch.“ Schlaf, Appetit und Freude an seinen Kindern sind unverändert. Welche Einordnung liegt aus logotherapeutischer Sicht am nächsten?",
            optionen: [
              "Eine schwere depressive Episode, die sofort behandelt werden muss",
              "Ein Ausdruck des existenziellen Vakuums bzw. einer Sinnfrage, die in der Beratung aufgegriffen werden kann – mit Aufmerksamkeit für mögliche Veränderungen",
              "Ein Zeichen für mangelnde Dankbarkeit, auf das man ihn hinweisen sollte",
              "Eine noogene Neurose, die die beratende Person diagnostizieren und behandeln sollte"
            ],
            richtig: 1,
            erklaerung: "Die Beschreibung von Leere trotz äußerer Erfüllung entspricht dem, was Frankl als existenzielles Vakuum beschrieb. Da keine Hinweise auf eine Depression genannt werden, kann die Sinnfrage beraterisch aufgegriffen werden, wobei die Entwicklung im Blick bleibt. Diagnosen stellen Beratende nicht, und Hinweise auf Dankbarkeit wären moralisierend."
          },
          {
            typ: "truefalse",
            aussage: "Nach Frankl kann Sinn von der beratenden Person für die ratsuchende Person festgelegt und ihr dann vermittelt werden.",
            richtig: false,
            erklaerung: "Falsch. Sinn ist nach Frankl persönlich und situationsbezogen und muss von jedem Menschen selbst gefunden werden. Beratende können die Sinnwahrnehmung anregen, etwa durch Fragen, aber keinen Sinn vorgeben. Das schützt auch vor Bevormundung und weltanschaulicher Beeinflussung."
          },
          {
            typ: "luecke",
            text: "Frankl nannte die primäre Motivation des Menschen den {{Willen zum Sinn|Willen zur Macht|Willen zur Lust}}. Die Haltung gegenüber unabänderlichem Leid ordnete er den {{Einstellungswerten|Erlebniswerten|schöpferischen Werten}} zu. Ein Gefühl innerer Leere und Sinnlosigkeit bezeichnete er als {{existenzielles Vakuum|kognitive Dissonanz|erlernte Hilflosigkeit}}.",
            erklaerung: "Den Willen zur Macht verband Frankl mit Adler, den Willen zur Lust mit Freud. Kognitive Dissonanz (Festinger) und erlernte Hilflosigkeit (Seligman) sind Konzepte anderer Theorietraditionen."
          },
          {
            typ: "karten",
            titel: "Logotherapie – Grundbegriffe",
            karten: [
              { vorne: "Drei Säulen", hinten: "Freiheit des Willens, Wille zum Sinn, Sinn des Lebens." },
              { vorne: "Wertkategorien", hinten: "Schöpferische Werte (geben), Erlebniswerte (empfangen), Einstellungswerte (Haltung gegenüber Unabänderlichem)." },
              { vorne: "Tragische Trias", hinten: "Leid, Schuld und Tod – Grenzsituationen, in denen nach Frankl dennoch Sinn möglich bleibt." },
              { vorne: "Existenzielles Vakuum", hinten: "Gefühl innerer Leere und Sinnlosigkeit, oft als Langeweile, Gleichgültigkeit oder bloßes Funktionieren erlebt." },
              { vorne: "Noogene Neurose", hinten: "Nach Frankl ein Leiden, das aus der geistigen Dimension (Sinnverlust, Wertkonflikte) entsteht; Abklärung ist diagnostische Aufgabe." },
              { vorne: "Selbsttranszendenz", hinten: "Ausrichtung über sich selbst hinaus auf Menschen, Aufgaben oder Werte." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Welche der drei Wertkategorien – schöpferische Werte, Erlebniswerte, Einstellungswerte – sind in Ihrem eigenen Leben derzeit besonders lebendig, und welche treten in den Hintergrund?",
            hinweis: "Leitfragen: Wo erlebe ich, dass mein Tun etwas bewirkt? Welche Begegnungen und Erlebnisse berühren mich? Gab es eine Situation, in der ich nur noch meine Haltung wählen konnte? Was bedeutet das für meine Arbeit mit Ratsuchenden?"
          }
        ]
      },
      {
        id: "B7-2",
        titel: "Werte klären: Logotherapeutische und ACT-Perspektiven",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Warum Werteklärung in der Beratung wichtig ist",
            text: "Viele Beratungsanliegen sind im Kern **Wertekonflikte** oder Ausdruck **unklarer Werte**: die Pflegekraft, die ihren Anspruch an menschliche Zuwendung im Arbeitsalltag nicht mehr umsetzen kann; der Vater, der zwischen Karriere und Familie zerrissen ist; die Studentin, die nicht weiß, ob sie den Erwartungen ihrer Eltern oder einem eigenen Weg folgen soll.\n\n**Werte** lassen sich allgemein als grundlegende Orientierungen verstehen, die einer Person wichtig sind und ihrem Handeln Richtung und Bedeutung geben. Sie wirken oft im Hintergrund und werden erst in Krisen, Entscheidungssituationen oder Übergängen bewusst.\n\nWerteklärung in der Beratung verfolgt mehrere Ziele:\n\n- **Orientierung**: Was ist mir wirklich wichtig? Woran will ich mich ausrichten?\n- **Entscheidungshilfe**: Welche Option entspricht meinen Werten besser?\n- **Konfliktverstehen**: Welche Werte stehen sich gegenüber, und wie lassen sie sich ausbalancieren?\n- **Motivation**: Werte geben Energie für schwierige, aber bedeutsame Schritte.\n- **Selbstachtung**: Wer im Einklang mit seinen Werten handelt, erlebt sich als stimmig.\n\nDabei gilt ein Grundsatz professioneller Ethik: Die beratende Person **gibt keine Werte vor**. Ihre Aufgabe ist es, der ratsuchenden Person zu helfen, ihre eigenen Werte zu entdecken, zu benennen und in Handeln zu übersetzen – auch wenn diese sich von den eigenen Werten der beratenden Person unterscheiden."
          },
          {
            typ: "text",
            titel: "Werte in der Akzeptanz- und Commitment-Therapie",
            text: "Die **Akzeptanz- und Commitment-Therapie** (ACT) wurde ab den 1980er-Jahren maßgeblich von **Steven C. Hayes** sowie Kirk Strosahl und Kelly Wilson entwickelt. Sie gehört zu den sogenannten verhaltenstherapeutischen Ansätzen der „dritten Welle“. Ihr Ziel ist **psychologische Flexibilität**: die Fähigkeit, auch mit schwierigen Gedanken und Gefühlen in Kontakt mit dem gegenwärtigen Moment zu bleiben und im Einklang mit den eigenen Werten zu handeln.\n\nACT beschreibt sechs miteinander verbundene Kernprozesse, die oft als **Hexaflex** dargestellt werden:\n\n- **Akzeptanz**: Bereitschaft, unangenehme innere Erfahrungen zuzulassen, statt sie zu bekämpfen,\n- **kognitive Defusion**: Gedanken als Gedanken erkennen, statt mit ihnen zu verschmelzen,\n- **Kontakt mit dem gegenwärtigen Moment**: achtsame Präsenz,\n- **Selbst als Kontext**: eine beobachtende Perspektive auf das eigene Erleben,\n- **Werte**: frei gewählte, persönlich bedeutsame Lebensrichtungen,\n- **engagiertes Handeln** (*committed action*): konkrete Schritte in Richtung der eigenen Werte.\n\nIn ACT werden Werte als **Richtungen** verstanden, nicht als Ziele. Ein häufig verwendetes Bild ist der **Kompass**: Wer nach Westen reist, kommt nie „im Westen“ an, kann sich aber jederzeit in diese Richtung bewegen. **Ziele** dagegen sind erreichbar und abhakbar. „Ein liebevoller Vater sein“ ist ein Wert; „am Samstag mit meiner Tochter in den Zoo gehen“ ist ein Ziel, das diesem Wert dient.\n\nAuffällig ist die Nähe zu Frankl: Beide Ansätze betonen, dass sinnvolles Leben nicht das Fehlen von Leid voraussetzt, sondern die Ausrichtung auf etwas Bedeutsames – auch mit Schmerz."
          },
          {
            typ: "kategorien",
            frage: "Handelt es sich um einen Wert im Sinne der ACT oder um ein Ziel?",
            kategorien: ["Wert (Richtung)", "Ziel (erreichbar)"],
            elemente: [
              { text: "Eine fürsorgliche Freundin sein", kat: 0 },
              { text: "Bis Ende des Jahres die Weiterbildung abschließen", kat: 1 },
              { text: "Neugierig und lernbereit leben", kat: 0 },
              { text: "Am Sonntag die Großmutter im Pflegeheim besuchen", kat: 1 },
              { text: "Mit Mut für Gerechtigkeit eintreten", kat: 0 },
              { text: "Fünf Kilogramm abnehmen", kat: 1 },
              { text: "Achtsam mit dem eigenen Körper umgehen", kat: 0 },
              { text: "Eine neue Stelle in einer Beratungsstelle finden", kat: 1 }
            ],
            erklaerung: "Werte beschreiben Qualitäten des Handelns, an denen man sich fortlaufend ausrichten kann; sie werden nie endgültig „erledigt“. Ziele sind konkrete, erreichbare Zustände oder Handlungen, die einem Wert dienen können."
          },
          {
            typ: "text",
            titel: "Was Werte nicht sind",
            text: "In der Werteklärung kommt es häufig zu Verwechslungen. Hilfreich ist es, Werte von verwandten Begriffen abzugrenzen:\n\n- **Werte sind keine Ziele**: Ziele sind erreichbar, Werte sind fortlaufende Richtungen. Wer nur in Zielen denkt, erlebt nach dem Erreichen oft Leere oder sucht sofort das nächste Ziel.\n- **Werte sind keine Gefühle**: „Glücklich sein“ oder „mich gut fühlen“ sind Wünsche nach Gefühlszuständen, die nicht direkt steuerbar sind. Werte beziehen sich darauf, *wie* jemand handeln möchte.\n- **Werte sind keine Regeln oder Pflichten**: Sätze mit „Ich muss …“ oder „Man sollte …“ sind häufig übernommene Normen. Werte dagegen sind **frei gewählt** und werden als bedeutsam erlebt, nicht als Last. Ein hilfreicher Hinweis ist die Frage: Wenn niemand davon wüsste und niemand es erwarten würde – wäre es mir dann trotzdem wichtig?\n- **Werte sind keine Bewertungen anderer**: Es geht nicht darum, was andere tun sollten, sondern darum, wofür die Person selbst stehen möchte.\n\nIn der Logotherapie wird zusätzlich betont, dass Sinn und Werte **situationsbezogen** sind: Ein allgemeiner Wert wie „Fürsorge“ verlangt in jeder Situation eine eigene Antwort. Die Frage lautet dann nicht nur „Was ist mir wichtig?“, sondern auch: „Was ist hier und jetzt, in dieser konkreten Lage, die sinnvolle Antwort?“\n\nIn der Praxis zeigt sich ein Wert oft im **Schmerz**: Wo es weh tut, ist häufig etwas Wichtiges berührt. Wer unter Einsamkeit leidet, dem ist vermutlich Verbundenheit wichtig."
          },
          {
            typ: "truefalse",
            aussage: "Der Satz „Ich muss immer für alle da sein, sonst bin ich ein schlechter Mensch“ ist ein typisches Beispiel für einen frei gewählten Wert im Sinne der ACT.",
            richtig: false,
            erklaerung: "Falsch. Formulierungen mit „Ich muss …“ und angedrohter Selbstabwertung deuten eher auf eine starre Regel oder übernommene Norm hin. Dahinter kann ein echter Wert wie Fürsorge stehen; in der Beratung lohnt es sich, ihn von der Regel zu lösen und zu fragen, wie die Person Fürsorge frei gewählt – auch sich selbst gegenüber – leben möchte."
          },
          {
            typ: "mc",
            frage: "Eine Klientin sagt: „Mein wichtigster Wert ist, dass ich mich endlich mal entspannt und glücklich fühle.“ Wie lässt sich diese Aussage aus ACT-Sicht am besten einordnen?",
            optionen: [
              "Als klar formulierter Wert, der direkt in Handlungen übersetzt werden kann",
              "Als Pflicht, die von außen übernommen wurde",
              "Als konkretes, erreichbares Ziel",
              "Als Wunsch nach einem Gefühlszustand; hilfreich wäre die Frage, wie sie handeln möchte, wenn es ihr gelänge, sich so zu fühlen"
            ],
            richtig: 3,
            erklaerung: "Gefühlszustände sind nicht direkt steuerbar und deshalb im ACT-Verständnis keine Werte. Hilfreich ist es, den Wunsch zu würdigen und dann nach der dahinterliegenden Richtung zu fragen: Was würde sie tun, wenn sie entspannt wäre? Welche Qualität des Handelns ist ihr wichtig?"
          },
          {
            typ: "text",
            titel: "Methoden der Werteklärung",
            text: "Für die Werteklärung stehen zahlreiche Methoden zur Verfügung. Bewährte Beispiele sind:\n\n- **Werte-Karten**: Die Person sortiert Karten mit Wertbegriffen (z. B. Verbundenheit, Freiheit, Gerechtigkeit, Kreativität, Sicherheit) nach ihrer Wichtigkeit. Im Gespräch werden die wichtigsten Werte mit eigenen Worten und Beispielen gefüllt.\n- **Lebensbereiche erkunden**: Für verschiedene Bereiche – etwa Partnerschaft, Familie, Freundschaft, Arbeit, Bildung, Freizeit, Gesundheit, Gemeinschaft, Spiritualität – wird gefragt: Wie möchte ich in diesem Bereich sein?\n- **Bull’s Eye** (Zielscheibe), eine von Tobias Lundgren entwickelte ACT-Methode: Für mehrere Lebensbereiche markiert die Person, wie nah ihr derzeitiges Handeln an ihren Werten ist. Die Abstände zeigen, wo Veränderung bedeutsam wäre.\n- **Rückblick-Imagination**: Die Person stellt sich vor, an einem hohen Geburtstag zurückzublicken: Wofür möchte sie gestanden haben? Was sollen Menschen, die ihr wichtig sind, über sie sagen? Diese Übung ist emotional intensiv und nicht in jeder Situation geeignet.\n- **Spitzenerlebnisse erinnern**: Momente, in denen sich das Leben besonders stimmig oder bedeutsam angefühlt hat, werden erinnert und nach den darin verwirklichten Werten befragt.\n- **Schmerz als Wegweiser**: Wo leidet die Person besonders? Welcher Wert ist dort verletzt?\n\nAuf die Klärung folgt die Übersetzung in **kleine, konkrete Schritte**: Was wäre ein erster Schritt in diese Richtung – in dieser Woche, heute? So verbindet sich Werteklärung mit engagiertem Handeln."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Methoden ihrer Beschreibung zu.",
            paare: [
              ["Werte-Karten", "Wertbegriffe nach Wichtigkeit sortieren und mit eigenen Beispielen füllen"],
              ["Bull’s Eye", "Abstand zwischen derzeitigem Handeln und eigenen Werten in mehreren Lebensbereichen markieren"],
              ["Rückblick-Imagination", "Sich vorstellen, aus späterer Lebensperspektive auf das eigene Leben zurückzuschauen"],
              ["Schmerz als Wegweiser", "Fragen, welcher Wert in einer leidvollen Erfahrung berührt ist"]
            ],
            erklaerung: "Alle Methoden dienen dazu, eigene Werte bewusst zu machen. Die Auswahl richtet sich nach Anliegen, Belastung und Vorlieben der Person; emotional intensive Übungen erfordern Fingerspitzengefühl."
          },
          {
            typ: "fall",
            titel: "Zerrissen zwischen zwei Werten",
            fall: "Konstruierte Lehrvignette: Frau L., 46 Jahre, Personalreferentin, soll eine Beförderung annehmen, die mehr Reisen bedeutet. Gleichzeitig benötigt ihre Mutter nach einem Schlaganfall zunehmend Unterstützung. Sie sagt: „Ich will beruflich weiterkommen, das war immer mein Traum. Aber ich kann meine Mutter doch nicht im Stich lassen. Egal, wie ich mich entscheide, ich fühle mich schlecht.“",
            frage: "Welches beraterische Vorgehen entspricht am ehesten einer werteorientierten Haltung?",
            optionen: [
              "Die beratende Person rät ihr, die Familie vorzuziehen, da Fürsorge wichtiger sei als Karriere.",
              "Die beratende Person rät ihr, die Beförderung anzunehmen, da sie sonst unzufrieden werde.",
              "Die beratende Person erkundet mit ihr, welche Werte in beiden Optionen berührt sind, würdigt, dass beide wichtig sind, und sucht nach Wegen und Schritten, die beiden Werten möglichst gerecht werden.",
              "Die beratende Person empfiehlt, die Entscheidung zu vertagen, bis die Gefühle sich beruhigt haben."
            ],
            richtig: 2,
            erklaerung: "Werteorientierte Beratung gibt keine Werte vor, sondern hilft, die eigenen Werte zu klären. Hinter beiden Optionen stehen bedeutsame Werte, etwa Entwicklung und Fürsorge. Das schlechte Gefühl ist Ausdruck dessen, dass beides wichtig ist. Oft lassen sich kreative Lösungen finden, die beiden Werten zumindest teilweise gerecht werden. Ein bloßes Vertagen löst den Konflikt nicht."
          },
          {
            typ: "multi",
            frage: "Welche Aussagen zu Werten im Sinne der ACT sind zutreffend? (Mehrere Antworten möglich)",
            optionen: [
              "Werte sind frei gewählte Lebensrichtungen.",
              "Werte können wie Ziele abgehakt werden, wenn sie erreicht sind.",
              "Engagiertes Handeln übersetzt Werte in konkrete Schritte.",
              "Ein Wert ist dann echt, wenn er sich immer gut anfühlt.",
              "Das Bild des Kompasses veranschaulicht den Richtungscharakter von Werten."
            ],
            richtig: [0, 2, 4],
            erklaerung: "Werte sind gewählte Richtungen, die durch engagiertes Handeln verwirklicht werden; der Kompass veranschaulicht das. Werte werden nie endgültig erreicht. Das Handeln nach Werten kann auch unangenehme Gefühle mit sich bringen – gerade deshalb betont ACT die Bereitschaft, sie zuzulassen."
          },
          {
            typ: "karten",
            titel: "Werteklärung kompakt",
            karten: [
              { vorne: "Psychologische Flexibilität", hinten: "Ziel der ACT: mit schwierigen inneren Erfahrungen im Kontakt mit dem Moment bleiben und werteorientiert handeln." },
              { vorne: "Hexaflex", hinten: "Akzeptanz, Defusion, Gegenwärtigkeit, Selbst als Kontext, Werte, engagiertes Handeln." },
              { vorne: "Wert vs. Ziel", hinten: "Wert = fortlaufende Richtung (Kompass); Ziel = erreichbarer, konkreter Zustand im Dienst eines Wertes." },
              { vorne: "Wert vs. Regel", hinten: "Werte sind frei gewählt und bedeutsam; Regeln („Ich muss …“) sind oft übernommene Normen." },
              { vorne: "Bull’s Eye", hinten: "ACT-Methode nach Tobias Lundgren zur Darstellung der Nähe von Handeln und Werten in mehreren Lebensbereichen." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Nennen Sie drei Werte, die Sie in Ihrer beruflichen Tätigkeit leiten. Wie zeigen sie sich in Ihrem konkreten Handeln, und wo erleben Sie einen Abstand zwischen Wert und Alltag?",
            hinweis: "Leitfragen: Was ist mir in der Arbeit mit Menschen wirklich wichtig? Woran würde ein Außenstehender diese Werte erkennen? Wo spüre ich Unzufriedenheit, und welcher Wert ist dort berührt? Was wäre ein kleiner Schritt in Richtung meiner Werte?"
          }
        ]
      },
      {
        id: "B7-3",
        titel: "Lebensübergänge und Sinnfragen erkennen",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Lebensübergänge als Beratungsanlass",
            text: "Viele Menschen suchen Beratung nicht wegen einer akuten Krise, sondern in **Übergangsphasen**: Berufseinstieg, Elternschaft, Trennung, Wechsel des Arbeitsplatzes, Auszug der Kinder, Pflege der Eltern, Ruhestand, Verwitwung, Diagnose einer chronischen Erkrankung oder Migration. Solche Übergänge – in der Entwicklungspsychologie auch **Transitionen** genannt – verändern Rollen, Beziehungen, Routinen und häufig auch das Selbstbild.\n\nDie Psychologie der Lebensspanne betont, dass Entwicklung nicht mit dem Erwachsenwerden endet. **Erik H. Erikson** beschrieb in seinem Modell psychosozialer Entwicklung Aufgaben, die sich über das ganze Leben erstrecken, etwa *Generativität versus Stagnation* im mittleren Erwachsenenalter und *Integrität versus Verzweiflung* im höheren Alter. Diese Themen berühren unmittelbar Sinnfragen: Was gebe ich weiter? Kann ich mein gelebtes Leben annehmen?\n\nÜbergänge haben eine doppelte Qualität: Sie sind **Verlust** – etwas Vertrautes geht zu Ende – und zugleich **Möglichkeit** – etwas Neues kann beginnen. Häufig sind sie mit Unsicherheit, Ambivalenz und Fragen nach Identität verbunden: Wer bin ich, wenn ich nicht mehr Lehrerin bin? Was ist meine Aufgabe, wenn die Kinder aus dem Haus sind?\n\nSinnzentrierte Beratung kann in solchen Phasen helfen, das Vergangene zu würdigen, die Zwischenzeit auszuhalten und neue Sinnmöglichkeiten zu entdecken."
          },
          {
            typ: "text",
            titel: "Das Übergangsmodell von William Bridges",
            text: "Der Organisationsberater **William Bridges** unterschied zwischen **Veränderung** (*change*) und **Übergang** (*transition*): Eine Veränderung ist ein äußeres Ereignis – der neue Job, der Umzug. Der Übergang ist der **innere psychologische Prozess**, in dem Menschen sich auf die neue Situation einstellen. Dieser innere Prozess dauert oft deutlich länger als die äußere Veränderung.\n\nBridges beschreibt drei Phasen:\n\n- **Ende** (*ending*): Jeder Übergang beginnt mit einem Abschied. Etwas Vertrautes – eine Rolle, eine Identität, eine Gewohnheit – geht verloren. Trauer, Widerstand, Angst oder Wut sind normale Reaktionen.\n- **Neutrale Zone** (*neutral zone*): eine Zwischenzeit, in der das Alte nicht mehr und das Neue noch nicht trägt. Sie wird oft als verwirrend, leer oder orientierungslos erlebt, birgt aber zugleich Raum für Kreativität und Neuorientierung.\n- **Neubeginn** (*new beginning*): Die Person identifiziert sich mit der neuen Situation, entwickelt neue Routinen, Beziehungen und ein verändertes Selbstverständnis.\n\nBemerkenswert ist die Reihenfolge: Ein Übergang beginnt nicht mit dem Anfang, sondern mit einem **Ende**. Wer dem Abschied keinen Raum gibt, tut sich oft mit dem Neubeginn schwer.\n\nFür die Beratung ist besonders die **neutrale Zone** bedeutsam. Menschen erleben sie häufig als Versagen („Ich müsste doch längst angekommen sein“). Psychoedukation über den normalen Verlauf entlastet, und die Frage nach Sinnmöglichkeiten in der Zwischenzeit kann neue Perspektiven eröffnen."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Phasen des Übergangsmodells nach William Bridges in die richtige Reihenfolge.",
            elemente: [
              "Ende – Abschied vom Vertrauten",
              "Neutrale Zone – Zwischenzeit der Orientierung",
              "Neubeginn – Identifikation mit dem Neuen"
            ],
            erklaerung: "Nach Bridges beginnt jeder Übergang mit einem Ende. Die neutrale Zone ist eine oft verunsichernde, aber auch kreative Zwischenzeit; erst danach folgt der Neubeginn."
          },
          {
            typ: "text",
            titel: "Das 4S-Modell nach Nancy Schlossberg",
            text: "Die Beratungspsychologin **Nancy K. Schlossberg** entwickelte ein Modell, das besonders für die Analyse von Übergängen in der Beratung nützlich ist. Sie unterscheidet zunächst Arten von Übergängen:\n\n- **erwartete** Übergänge (z. B. Ruhestand, Schulabschluss),\n- **unerwartete** Übergänge (z. B. plötzliche Kündigung, Unfall),\n- **Nicht-Ereignisse**: erwartete Ereignisse, die nicht eintreten (z. B. ungewollte Kinderlosigkeit, ausbleibende Beförderung). Gerade Nicht-Ereignisse werden in ihrer Bedeutung häufig unterschätzt, weil es keinen sichtbaren Anlass und oft auch keine Rituale gibt.\n\nOb ein Übergang gut bewältigt wird, hängt nach Schlossberg von vier Faktoren ab, den **4 S**:\n\n- **Situation**: Was löst den Übergang aus? Wie wird er bewertet? Ist er selbst gewählt? Kommen weitere Belastungen hinzu?\n- **Self (Person)**: Welche persönlichen Merkmale, Erfahrungen, Überzeugungen und Werte bringt die Person mit?\n- **Support (Unterstützung)**: Welche sozialen Beziehungen, Netzwerke und institutionellen Hilfen stehen zur Verfügung?\n- **Strategies (Strategien)**: Welche Bewältigungsstrategien nutzt die Person, um die Situation zu verändern, ihre Bedeutung zu verändern oder mit der Belastung umzugehen?\n\nDas Modell eignet sich gut als **Gesprächsstruktur**: Es hilft, Belastungen und Ressourcen systematisch zu erfassen, und schließt an das transaktionale Stressmodell an."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Fragen aus einem Beratungsgespräch dem passenden „S“ nach Schlossberg zu.",
            paare: [
              ["„Haben Sie den Wechsel selbst gewählt, oder kam er von außen?“", "Situation"],
              ["„Wie haben Sie frühere Veränderungen in Ihrem Leben erlebt?“", "Self (Person)"],
              ["„Wer in Ihrem Umfeld könnte Sie in dieser Zeit begleiten?“", "Support (Unterstützung)"],
              ["„Was tun Sie bisher, um mit der Unsicherheit umzugehen?“", "Strategies (Strategien)"]
            ],
            erklaerung: "Die 4 S strukturieren die Analyse eines Übergangs: Merkmale der Situation, der Person, der Unterstützung und der Strategien."
          },
          {
            typ: "truefalse",
            aussage: "Nach Schlossberg können auch erwartete Ereignisse, die nicht eintreten – etwa eine ausbleibende Beförderung –, bedeutsame Übergänge darstellen.",
            richtig: true,
            erklaerung: "Richtig. Schlossberg bezeichnet sie als Nicht-Ereignisse. Sie können Lebenspläne und Selbstbild ebenso stark verändern wie sichtbare Ereignisse, werden aber oft weniger anerkannt."
          },
          {
            typ: "text",
            titel: "Sinnfragen im Gespräch erkennen",
            text: "Sinnfragen werden selten direkt als solche formuliert. Kaum jemand sagt: „Ich habe eine Sinnfrage.“ Häufiger zeigen sie sich indirekt. Aufmerksamkeit verdienen zum Beispiel:\n\n- **Wofür-Fragen**: „Wofür mache ich das eigentlich?“, „Was soll das alles?“\n- **Leere trotz Erfolg**: „Eigentlich habe ich alles, aber …“\n- **Identitätsfragen** nach Rollenverlusten: „Wer bin ich ohne meine Arbeit?“\n- **Wertekonflikte**: Das Gefühl, im Beruf gegen eigene Überzeugungen handeln zu müssen.\n- **Grenzerfahrungen**: Krankheit, Tod naher Menschen, Schuld, eigenes Altern.\n- **Gleichgültigkeit und Langeweile**: das Gefühl, nur noch zu funktionieren.\n- **Bilanzierungen**: Rückblicke auf Lebensentscheidungen, die als verpasst oder falsch erlebt werden.\n\nDer Psychiater **Irvin D. Yalom** beschrieb aus existenzieller Perspektive vier Grundthemen menschlicher Existenz, die in solchen Äußerungen oft mitschwingen: **Tod, Freiheit (und Verantwortung), existenzielle Isolation und Sinnlosigkeit**.\n\nWichtig ist eine **doppelte Aufmerksamkeit**: Eine Wofür-Frage kann eine existenzielle Suche ausdrücken, die in der Beratung fruchtbar aufgegriffen werden kann. Sie kann aber auch ein Hinweis auf Hoffnungslosigkeit und Suizidalität sein. Äußerungen wie „Es hat doch alles keinen Sinn mehr“ sollten deshalb immer auch zu einer behutsamen Klärung möglicher Suizidgedanken führen (vgl. Modul B6)."
          },
          {
            typ: "merke",
            text: "Sinnfragen kommen meist leise daher – als „Wofür?“, als Leere trotz Erfolg oder als Identitätsfrage nach einem Verlust. Hören Sie genau hin, und klären Sie bei Äußerungen von Sinnlosigkeit immer auch, ob Hoffnungslosigkeit oder Suizidgedanken bestehen."
          },
          {
            typ: "multi",
            frage: "Welche Äußerungen können auf eine Sinnfrage hinweisen? (Mehrere Antworten möglich)",
            optionen: [
              "„Seit ich in Rente bin, weiß ich nicht mehr, wofür ich morgens aufstehen soll.“",
              "„Ich brauche einen Tipp, wie ich meine E-Mails schneller sortiere.“",
              "„Ich habe Karriere gemacht, aber ich frage mich, ob das alles war.“",
              "„In meinem Job muss ich Dinge tun, die gegen alles gehen, woran ich glaube.“",
              "„Mein Auto muss nächste Woche zum TÜV.“"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Verlust von Aufgabe und Struktur, Bilanzierungsfragen und Wertekonflikte berühren typischerweise Sinnfragen. Organisatorische Anliegen wie E-Mail-Sortierung oder Autotermine sind zunächst praktische Fragen – auch wenn sich hinter jedem Anliegen mehr verbergen kann."
          },
          {
            typ: "fall",
            titel: "Eine Frage hinter der Frage",
            fall: "Konstruierte Lehrvignette: Herr P., 58 Jahre, Werkstattleiter, kommt auf Anraten des Betriebsrats in die Beratung, weil er „Probleme mit der Digitalisierung“ habe. Im Gespräch erzählt er, dass seine Erfahrung nicht mehr gefragt sei und junge Kollegen die Abläufe bestimmen. Er sagt: „Früher war ich derjenige, den alle gefragt haben. Jetzt frage ich mich, wozu ich noch da bin.“ Hinweise auf Hoffnungslosigkeit oder Suizidgedanken ergeben sich auf Nachfrage nicht.",
            frage: "Wie greifen Sie die Situation am besten auf?",
            optionen: [
              "Sie konzentrieren sich ausschließlich auf eine Schulung zu den digitalen Werkzeugen, da dies der Anlass der Beratung war.",
              "Sie empfehlen ihm, sich frühzeitig um den Vorruhestand zu kümmern.",
              "Sie deuten seine Reaktion als Altersstarrsinn und fordern mehr Offenheit.",
              "Sie würdigen den Rollenverlust, greifen die Frage „Wozu bin ich noch da?“ auf und erkunden, welche Werte und Fähigkeiten in seiner Erfahrung liegen und wo sie heute gebraucht werden könnten – ohne das praktische Anliegen aus dem Blick zu verlieren."
            ],
            richtig: 3,
            erklaerung: "Hinter dem praktischen Anliegen steht eine Sinn- und Identitätsfrage im Übergang. Sinnzentrierte Beratung würdigt den Verlust, erkundet Werte und Sinnmöglichkeiten (etwa Weitergabe von Erfahrung im Sinne von Generativität) und verbindet dies mit dem konkreten Anliegen. Abwertende Deutungen oder vorschnelle Ratschläge werden ihm nicht gerecht."
          },
          {
            typ: "karten",
            titel: "Übergänge und Sinnfragen",
            karten: [
              { vorne: "Change vs. Transition (Bridges)", hinten: "Veränderung = äußeres Ereignis; Übergang = innerer psychologischer Prozess der Anpassung." },
              { vorne: "Phasen nach Bridges", hinten: "Ende – neutrale Zone – Neubeginn; jeder Übergang beginnt mit einem Abschied." },
              { vorne: "4S nach Schlossberg", hinten: "Situation, Self (Person), Support (Unterstützung), Strategies (Strategien)." },
              { vorne: "Nicht-Ereignis", hinten: "Erwartetes Ereignis, das nicht eintritt, z. B. ungewollte Kinderlosigkeit; oft unterschätzt." },
              { vorne: "Existenzielle Grundthemen nach Yalom", hinten: "Tod, Freiheit und Verantwortung, existenzielle Isolation, Sinnlosigkeit." },
              { vorne: "Generativität vs. Stagnation", hinten: "Entwicklungsthema des mittleren Erwachsenenalters nach Erikson: etwas weitergeben, für kommende Generationen sorgen." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Welchen Lebensübergang haben Sie selbst erlebt, und wie haben Sie die „neutrale Zone“ erfahren? Was hat Ihnen geholfen, einen Neubeginn zu finden?",
            hinweis: "Leitfragen: Was musste ich zurücklassen? Wie lange hat die Zwischenzeit gedauert, und wie habe ich sie bewertet? Welche Menschen oder Strategien waren hilfreich? Welche neuen Sinnmöglichkeiten haben sich eröffnet?"
          }
        ]
      },
      {
        id: "B7-4",
        titel: "Der Sokratische Dialog in Grundzügen",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Herkunft: Die Hebammenkunst des Sokrates",
            text: "Der **Sokratische Dialog** geht auf den griechischen Philosophen **Sokrates** (5. Jahrhundert v. Chr.) zurück, dessen Gesprächsweise wir vor allem aus den Dialogen seines Schülers **Platon** kennen. Sokrates belehrte seine Gesprächspartner nicht, sondern stellte Fragen, die sie dazu führten, ihre eigenen Annahmen zu prüfen, Widersprüche zu entdecken und zu eigenen Einsichten zu gelangen.\n\nIn Platons Dialog *Theaitetos* vergleicht Sokrates seine Tätigkeit mit der Kunst einer Hebamme, der **Mäeutik**: So wie die Hebamme nicht selbst das Kind gebiert, sondern bei der Geburt hilft, bringt der Fragende nicht selbst die Erkenntnis hervor, sondern hilft dem anderen, sie „zur Welt zu bringen“.\n\nIn der Psychotherapie und Beratung des 20. Jahrhunderts wurde der Sokratische Dialog in unterschiedlicher Weise aufgegriffen:\n\n- In der **kognitiven Verhaltenstherapie** dient das sokratische Fragen vor allem dazu, belastende Gedanken auf ihre Stichhaltigkeit und Nützlichkeit zu prüfen (häufig als *geleitetes Entdecken* bezeichnet).\n- In der **Logotherapie** ist der Sokratische Dialog eine zentrale Gesprächsform, die Frankl und später besonders seine Schülerin **Elisabeth Lukas** beschrieben haben. Hier dient er vor allem dazu, die **Sinnwahrnehmung** zu fördern: die Person soll eigene Werte, Ressourcen und Sinnmöglichkeiten entdecken.\n\nGemeinsam ist beiden Traditionen die Grundüberzeugung, dass Menschen über ein eigenes Wissen verfügen, das durch gute Fragen zugänglich wird – und dass selbst gefundene Einsichten tragfähiger sind als übernommene Ratschläge."
          },
          {
            typ: "mc",
            frage: "Was beschreibt der Begriff „Mäeutik“ im Zusammenhang mit dem Sokratischen Dialog?",
            optionen: [
              "Die Kunst, eine Person durch geschickte Argumente von der eigenen Meinung zu überzeugen",
              "Die „Hebammenkunst“, durch Fragen dem Gegenüber zu helfen, eigene Einsichten hervorzubringen",
              "Eine Technik der Konfrontation, um Abwehr zu durchbrechen",
              "Eine Methode zur Diagnose psychischer Störungen"
            ],
            richtig: 1,
            erklaerung: "Mäeutik bedeutet Hebammenkunst. Sokrates verstand sich als Geburtshelfer von Einsichten, die das Gegenüber selbst hervorbringt. Überreden, Konfrontieren oder Diagnostizieren widersprechen diesem Verständnis."
          },
          {
            typ: "text",
            titel: "Grundhaltung im sinnzentrierten Sokratischen Dialog",
            text: "Der Sokratische Dialog ist weniger eine Technik als eine **Haltung**. In der sinnzentrierten Beratung zeichnet sie sich durch folgende Merkmale aus:\n\n- **Echtes Interesse und Nichtwissen**: Die beratende Person kennt die Antwort nicht im Voraus und will sie auch nicht vorgeben. Sie fragt, weil sie verstehen möchte.\n- **Vertrauen in die Person**: Die Haltung beruht auf der Überzeugung, dass die ratsuchende Person über ein eigenes Gespür für Werte und Sinn verfügt – Frankl sprach vom **Gewissen** als „Sinn-Organ“, also der Fähigkeit, den Sinn einer Situation intuitiv zu erspüren.\n- **Respekt vor der Freiheit**: Die Person entscheidet selbst, welche Antworten sie findet und welche Konsequenzen sie zieht.\n- **Orientierung auf Sinn und Werte**: Die Fragen lenken die Aufmerksamkeit behutsam auf das, was der Person wichtig ist, was ihr gelungen ist und wofür sie sich einsetzen möchte – ohne das Leid zu übergehen.\n- **Konkretheit**: Allgemeine Fragen („Was ist der Sinn des Lebens?“) werden auf die konkrete Situation bezogen („Was wäre in Ihrer jetzigen Lage eine sinnvolle Antwort?“).\n- **Geduld**: Pausen und Schweigen gehören dazu. Einsichten brauchen Zeit.\n\nEin Sokratischer Dialog ist **kein Verhör** und **kein verdecktes Überzeugen**. Wer Fragen stellt, auf die es nur eine „richtige“ Antwort gibt, betreibt Suggestion, nicht Mäeutik. Ebenso wichtig ist das Gespür für den richtigen Zeitpunkt: In einer akuten Krise brauchen Menschen zunächst Halt und Sicherheit, nicht philosophische Reflexion."
          },
          {
            typ: "truefalse",
            aussage: "Im Sokratischen Dialog führt die beratende Person die ratsuchende Person mit Fragen gezielt zu einer Antwort, die sie selbst schon vorher als richtig festgelegt hat.",
            richtig: false,
            erklaerung: "Falsch. Das wäre Suggestion. Im sinnzentrierten Sokratischen Dialog ist die beratende Person offen für die Antworten der ratsuchenden Person und respektiert deren Freiheit, eigene Einsichten und Entscheidungen zu entwickeln."
          },
          {
            typ: "text",
            titel: "Typische Fragerichtungen",
            text: "Im sinnzentrierten Sokratischen Dialog haben sich verschiedene Fragerichtungen bewährt. Sie werden nicht schematisch abgearbeitet, sondern situativ eingesetzt:\n\n- **Fragen nach Werten und Wichtigem**: „Was ist Ihnen in dieser Situation am wichtigsten?“, „Worum geht es Ihnen eigentlich?“\n- **Fragen nach gelungenen Erfahrungen und Ressourcen**: „Wann haben Sie schon einmal eine schwierige Zeit durchgestanden? Was hat Ihnen damals geholfen?“\n- **Fragen nach Sinnspuren in der Vergangenheit**: „Worauf sind Sie in Ihrem Leben stolz?“, „Was haben Sie anderen gegeben?“ Frankl betonte, dass Verwirklichtes nicht verloren geht; Vergangenes kann als „geborgen“ betrachtet werden.\n- **Perspektivwechsel**: „Was würde ein Mensch, der Sie gut kennt, Ihnen jetzt raten?“, „Wie werden Sie in zehn Jahren auf diese Entscheidung zurückblicken?“\n- **Fragen, die Selbstdistanzierung fördern**: „Wenn Sie sich selbst von außen beobachten könnten – was würden Sie sehen?“\n- **Fragen, die Selbsttranszendenz fördern**: „Für wen oder wofür lohnt es sich, diesen Weg zu gehen?“, „Wer braucht Sie?“\n- **Fragen nach dem Spielraum**: „Was liegt hier in Ihrer Hand, auch wenn vieles nicht in Ihrer Hand liegt?“\n- **Konkretisierende Fragen**: „Was wäre ein erster kleiner Schritt?“\n\nZwischen den Fragen stehen **Zusammenfassungen** und **Spiegelungen**, die das Gesagte würdigen und Zusammenhänge sichtbar machen. Ohne diese empathische Rahmung wirken auch gute Fragen schnell mechanisch."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Fragen der Fragerichtung zu, die sie in erster Linie anspricht.",
            paare: [
              ["„Was liegt hier in Ihrer Hand, auch wenn vieles nicht in Ihrer Hand liegt?“", "Spielraum der Freiheit"],
              ["„Für wen lohnt es sich, diesen schweren Weg zu gehen?“", "Selbsttranszendenz"],
              ["„Wenn Sie sich selbst in dieser Situation von außen sehen könnten – was fiele Ihnen auf?“", "Selbstdistanzierung"],
              ["„Wann haben Sie schon einmal eine ähnlich schwere Zeit überstanden?“", "Ressourcen und gelungene Erfahrungen"],
              ["„Was wäre ein erster kleiner Schritt in diese Richtung?“", "Konkretisierung"]
            ],
            erklaerung: "Die Fragerichtungen ergänzen sich: Sie eröffnen Spielräume, lenken den Blick über sich hinaus, ermöglichen Abstand, aktivieren Ressourcen und führen zu konkreten Schritten."
          },
          {
            typ: "kategorien",
            frage: "Welche Fragen entsprechen der Haltung des Sokratischen Dialogs, welche eher nicht?",
            kategorien: ["entspricht der sokratischen Haltung", "entspricht ihr eher nicht"],
            elemente: [
              { text: "„Was ist Ihnen an Ihrer Arbeit eigentlich wichtig?“", kat: 0 },
              { text: "„Sie sehen doch sicher ein, dass Sie sich ändern müssen, oder?“", kat: 1 },
              { text: "„Was würde Ihre verstorbene Mutter Ihnen jetzt wünschen?“", kat: 0 },
              { text: "„Warum haben Sie sich damals nur so falsch entschieden?“", kat: 1 },
              { text: "„Worauf sind Sie stolz, wenn Sie auf die letzten Jahre schauen?“", kat: 0 },
              { text: "„Ist nicht klar, dass Familie wichtiger ist als Beruf?“", kat: 1 },
              { text: "„Was liegt trotz allem in Ihrer Hand?“", kat: 0 }
            ],
            erklaerung: "Offene, an Werten und Ressourcen orientierte Fragen entsprechen der sokratischen Haltung. Suggestivfragen, vorwurfsvolle „Warum“-Fragen und Fragen, die eine bestimmte Wertung vorgeben, widersprechen ihr, weil sie die Freiheit der Person einschränken."
          },
          {
            typ: "text",
            titel: "Grenzen und Rahmen",
            text: "Der Sokratische Dialog ist ein wertvolles Werkzeug, hat aber Grenzen, die Beratende kennen sollten:\n\n- **Akute Krisen**: In der Schock- oder akuten Phase brauchen Menschen Stabilisierung und Sicherheit. Sinnfragen kommen später.\n- **Schwere psychische Erkrankungen**: Bei einer schweren Depression ist die Fähigkeit, Sinn wahrzunehmen, oft krankheitsbedingt stark eingeschränkt. Sinnfragen können dann Schuldgefühle verstärken („Ich sehe nicht einmal mehr einen Sinn“). Hier ist zuerst eine Behandlung nötig.\n- **Vorschnelle Sinnangebote**: Wer Leidenden nahelegt, im Leid liege ein Sinn, kann verletzen. Einstellungswerte entstehen nur aus der eigenen Einsicht der Person, nie aus der Vorgabe.\n- **Weltanschauliche Neutralität**: Die Logotherapie versteht sich als offen für religiöse und nicht religiöse Sinnentwürfe. Beratende dürfen keine eigene Weltanschauung vermitteln; wo spirituelle Fragen im Vordergrund stehen, kann – mit Einverständnis – auch Seelsorge einbezogen werden.\n- **Kompetenz**: Die spezifisch psychotherapeutischen Methoden der Logotherapie gehören in die Hand entsprechend qualifizierter Fachkräfte. In der Beratung wird der Sokratische Dialog als Gesprächsform zur Klärung von Werten und Sinnmöglichkeiten genutzt.\n\nDer Sokratische Dialog verlangt Übung. Rollenspiele, Fallbesprechungen und Supervision helfen, eine natürliche, nicht mechanische Fragehaltung zu entwickeln."
          },
          {
            typ: "dialog",
            titel: "Ein Sokratischer Dialog in der Beratung",
            einleitung: "Konstruierte Situation: Frau H., 63 Jahre, war 40 Jahre lang Grundschullehrerin und ist seit einem halben Jahr im Ruhestand. Sie kommt in die Beratung, weil sie sich „nutzlos“ fühlt. Eine akute Gefährdung wurde im Erstgespräch ausgeschlossen; sie schläft und isst normal und hat Freude an ihrem Enkel.",
            runden: [
              {
                klient: "Ich habe mich so auf den Ruhestand gefreut. Und jetzt sitze ich da und denke: Das war's. Niemand braucht mich mehr.",
                antworten: [
                  { text: "Sie haben sich auf diese Zeit gefreut, und jetzt fühlt sie sich ganz anders an – als ob mit dem Beruf auch das Gebrauchtwerden zu Ende gegangen wäre.", gut: true, feedback: "Gut. Sie spiegeln das Erleben und benennen die Sinnfrage (Gebrauchtwerden), ohne sie zu bewerten. Das schafft eine Grundlage für den Dialog." },
                  { text: "Aber Sie haben doch jetzt endlich Zeit für sich! Genießen Sie es doch einfach.", gut: false, feedback: "Die Antwort übergeht das Erleben und gibt eine Bewertung vor. Frau H. fühlt sich vermutlich nicht verstanden." },
                  { text: "Das ist typisch für die neutrale Zone nach Bridges.", gut: false, feedback: "Psychoedukation kann später hilfreich sein, an dieser Stelle wirkt sie distanziert und unterbricht die Beziehung." }
                ]
              },
              {
                klient: "Genau. Vierzig Jahre lang wusste ich jeden Morgen, wofür ich aufstehe. Die Kinder, die Eltern, die Kolleginnen.",
                antworten: [
                  { text: "Dann sollten Sie sich schnell eine neue Aufgabe suchen, zum Beispiel ein Ehrenamt.", gut: false, feedback: "Der Ratschlag ist gut gemeint, aber vorschnell. Er nimmt Frau H. die Möglichkeit, selbst zu entdecken, was ihr wichtig ist und welcher Weg zu ihr passt." },
                  { text: "Wenn Sie auf diese vierzig Jahre zurückschauen – was war es, das Ihnen an dieser Arbeit am meisten bedeutet hat?", gut: true, feedback: "Gut. Die Frage richtet den Blick auf die in der Vergangenheit verwirklichten Werte – eine typische sokratische Frage nach Sinnspuren." },
                  { text: "Haben Sie vielleicht zu sehr über den Beruf gelebt?", gut: false, feedback: "Die Frage enthält eine verdeckte Bewertung und kann als Vorwurf erlebt werden. Sie ist suggestiv statt offen." }
                ]
              },
              {
                klient: "Hm … Wenn ein Kind, das nicht lesen konnte, plötzlich den ersten Satz las. Dieses Leuchten in den Augen. Dass ich dabei sein durfte, wenn jemand über sich hinauswächst.",
                antworten: [
                  { text: "Das klingt wirklich schön. Leider ist das jetzt vorbei.", gut: false, feedback: "Die Antwort schließt den eröffneten Raum wieder und verstärkt das Verlusterleben, statt die Sinnspur aufzugreifen." },
                  { text: "Also ist Ihnen Lesen besonders wichtig. Sie könnten in einer Bibliothek arbeiten.", gut: false, feedback: "Die Antwort verengt den Wert vorschnell auf eine Tätigkeit und springt zu einem Lösungsvorschlag. Der eigentliche Wert – Menschen beim Wachsen begleiten – wird nicht gewürdigt." },
                  { text: "Dabei sein, wenn jemand über sich hinauswächst – das scheint etwas sehr Kostbares für Sie zu sein. Und was Sie damals ermöglicht haben, bleibt ja geschehen. Wo in Ihrem jetzigen Leben könnte dieses Begleiten beim Wachsen noch Platz haben, vielleicht in ganz anderer Form?", gut: true, feedback: "Gut. Sie würdigen den Wert, betonen, dass Verwirklichtes nicht verloren geht, und laden Frau H. ein, selbst Sinnmöglichkeiten in der Gegenwart zu entdecken – ohne eine Lösung vorzugeben." }
                ]
              },
              {
                klient: "Ich weiß nicht … Mein Enkel tut sich gerade schwer in der Schule. Und in unserer Gemeinde gibt es Kinder, die gerade erst nach Deutschland gekommen sind …",
                antworten: [
                  { text: "Da tauchen gleich zwei Möglichkeiten auf, in denen Ihr Begleiten gebraucht werden könnte. Wie fühlt es sich an, daran zu denken? Und was wäre ein erster kleiner Schritt, den Sie gehen möchten?", gut: true, feedback: "Gut. Sie spiegeln die selbst gefundenen Möglichkeiten, achten auf das Erleben und unterstützen die Konkretisierung, wobei die Entscheidung bei Frau H. bleibt." },
                  { text: "Perfekt, dann melden Sie sich am besten gleich morgen bei der Gemeinde.", gut: false, feedback: "Die Antwort übernimmt die Entscheidung und setzt unter Zeitdruck. Frau H. sollte selbst wählen, ob und wie sie einen Schritt geht." },
                  { text: "Aber passen Sie auf, dass Sie sich nicht wieder nur über die Arbeit mit Kindern definieren.", gut: false, feedback: "Die Warnung bewertet den gerade entdeckten Wert und kann entmutigen. Der Dialog verliert seine offene, wertschätzende Richtung." }
                ]
              }
            ]
          },
          {
            typ: "luecke",
            text: "Platon überliefert, dass Sokrates seine Gesprächskunst mit der Tätigkeit einer {{Hebamme|Richterin|Lehrerin}} verglich. In der Logotherapie dient der Sokratische Dialog vor allem der Förderung der {{Sinnwahrnehmung|Symptomreduktion|Diagnosestellung}}. Frankl bezeichnete das {{Gewissen|Über-Ich|Unbewusste}} als „Sinn-Organ“.",
            erklaerung: "Die Mäeutik (Hebammenkunst) ist das Grundbild des Sokratischen Dialogs. In der Logotherapie zielt er auf Sinnwahrnehmung; das Gewissen versteht Frankl als die Fähigkeit, den Sinn einer Situation zu erspüren."
          },
          {
            typ: "karten",
            titel: "Sokratischer Dialog – Kernpunkte",
            karten: [
              { vorne: "Mäeutik", hinten: "„Hebammenkunst“: durch Fragen helfen, dass das Gegenüber eigene Einsichten hervorbringt." },
              { vorne: "Sokratisches Fragen in der KVT", hinten: "Geleitetes Entdecken: belastende Gedanken auf Stichhaltigkeit und Nützlichkeit prüfen." },
              { vorne: "Sokratischer Dialog in der Logotherapie", hinten: "Förderung der Sinnwahrnehmung: Werte, Ressourcen und Sinnmöglichkeiten entdecken." },
              { vorne: "Gewissen als Sinn-Organ", hinten: "Nach Frankl die Fähigkeit, den Sinn einer konkreten Situation intuitiv zu erspüren." },
              { vorne: "Grenzen", hinten: "Akute Krise, schwere Depression, vorschnelle Sinnangebote, weltanschauliche Beeinflussung." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Formulieren Sie drei offene Fragen im Stil des Sokratischen Dialogs, die Sie einer ratsuchenden Person in einem Lebensübergang stellen könnten. Prüfen Sie, ob in einer Ihrer Fragen eine verdeckte Bewertung steckt.",
            hinweis: "Leitfragen: Ist die Frage wirklich offen? Richtet sie den Blick auf Werte, Ressourcen oder Spielräume? Würde ich jede mögliche Antwort respektieren? Passt der Zeitpunkt, oder braucht die Person zunächst Stabilisierung?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "multi",
        frage: "Welche Grundannahmen bilden die drei Säulen der Logotherapie? (Mehrere Antworten möglich)",
        optionen: [
          "Freiheit des Willens",
          "Wille zur Macht",
          "Wille zum Sinn",
          "Sinn des Lebens",
          "Lustprinzip"
        ],
        richtig: [0, 2, 3],
        erklaerung: "Die drei Säulen sind Freiheit des Willens, Wille zum Sinn und Sinn des Lebens. Der Wille zur Macht verweist auf Adler, das Lustprinzip auf Freud."
      },
      {
        typ: "mc",
        frage: "Welche Wertkategorie beschreibt nach Frankl die Haltung gegenüber unabänderlichem Leid?",
        optionen: [
          "Erlebniswerte",
          "Schöpferische Werte",
          "Einstellungswerte",
          "Leistungswerte"
        ],
        richtig: 2,
        erklaerung: "Einstellungswerte verwirklichen sich in der Haltung gegenüber Unabänderlichem. Schöpferische Werte verwirklichen sich im Tun, Erlebniswerte im Empfangen und in der Begegnung. „Leistungswerte“ ist keine Kategorie Frankls."
      },
      {
        typ: "truefalse",
        aussage: "In der Akzeptanz- und Commitment-Therapie werden Werte als Richtungen verstanden, die – anders als Ziele – nie endgültig erreicht werden.",
        richtig: true,
        erklaerung: "Richtig. Werte gleichen einer Kompassrichtung; Ziele sind konkrete, erreichbare Schritte, die einem Wert dienen können."
      },
      {
        typ: "mc",
        frage: "Welche Aussage ist im Sinne der ACT am ehesten ein Wert?",
        optionen: [
          "„Ich will mich immer gut fühlen.“",
          "„Ich will bis Juni die Prüfung bestehen.“",
          "„Man muss immer funktionieren.“",
          "„Ich möchte ein verlässlicher und zugewandter Kollege sein.“"
        ],
        richtig: 3,
        erklaerung: "Verlässlichkeit und Zuwendung beschreiben eine frei gewählte Qualität des Handelns. Ein Gefühlszustand ist kein Wert, eine bestandene Prüfung ist ein Ziel, und „Man muss …“ ist eine übernommene Regel."
      },
      {
        typ: "mc",
        frage: "Welche Phase folgt im Übergangsmodell von William Bridges auf das Ende?",
        optionen: [
          "Die neutrale Zone",
          "Der Neubeginn",
          "Die Schockphase",
          "Die Mobilisierung"
        ],
        richtig: 0,
        erklaerung: "Bridges beschreibt die Abfolge Ende – neutrale Zone – Neubeginn. Schockphase und Mobilisierung stammen aus Krisenmodellen (Cullberg bzw. Sonneck/Caplan)."
      },
      {
        typ: "multi",
        frage: "Welche Faktoren gehören zum 4S-Modell nach Nancy Schlossberg? (Mehrere Antworten möglich)",
        optionen: [
          "Situation",
          "Support (Unterstützung)",
          "Stagnation",
          "Strategies (Strategien)",
          "Self (Person)"
        ],
        richtig: [0, 1, 3, 4],
        erklaerung: "Die 4 S sind Situation, Self, Support und Strategies. Stagnation ist ein Begriff aus Eriksons Entwicklungsmodell (Generativität vs. Stagnation)."
      },
      {
        typ: "truefalse",
        aussage: "Im sinnzentrierten Sokratischen Dialog ist es Aufgabe der beratenden Person, der ratsuchenden Person einen passenden Lebenssinn vorzuschlagen, wenn sie selbst keinen findet.",
        richtig: false,
        erklaerung: "Falsch. Sinn kann nach Frankl nur selbst gefunden werden. Die beratende Person regt die Sinnwahrnehmung durch offene Fragen an, gibt aber keinen Sinn und keine Weltanschauung vor."
      },
      {
        typ: "mc",
        frage: "Eine Klientin sagt im Gespräch: „Es hat doch alles keinen Sinn mehr.“ Was ist der angemessenste erste Schritt?",
        optionen: [
          "Sofort einen Sokratischen Dialog über die Sinnmöglichkeiten in ihrem Leben beginnen",
          "Behutsam klären, ob Hoffnungslosigkeit oder Suizidgedanken bestehen, und dann über das weitere Vorgehen entscheiden",
          "Ihr versichern, dass das Leben immer einen Sinn hat",
          "Das Thema übergehen, um sie nicht weiter zu belasten"
        ],
        richtig: 1,
        erklaerung: "Äußerungen von Sinnlosigkeit können eine existenzielle Frage ausdrücken, aber auch auf Hoffnungslosigkeit und Suizidalität hinweisen. Deshalb ist zuerst eine behutsame Klärung nötig. Vorschnelle Sinnangebote oder Übergehen werden der Situation nicht gerecht."
      }
    ]
  }
,

  /* =========================================================
     B8 – ETHIK UND RECHT
     ========================================================= */
  {
    kurs: "berater",
    id: "B8",
    titel: "Ethik und Recht",
    beschreibung: "Professionelle psychologische Beratung bewegt sich in einem Rahmen aus berufsethischen Prinzipien und rechtlichen Vorgaben. Das Modul behandelt ethische Grundprinzipien und Entscheidungswege, Verschwiegenheit und Datenschutz nach der DSGVO in Grundzügen, die Grenze zur Heilkunde nach dem Heilpraktikergesetz sowie Dokumentation. Abschließend geht es um Mehrfachbeziehungen, Selbstfürsorge und Supervision als Bestandteile verantwortlicher Praxis. Das Modul ersetzt keine Rechtsberatung im Einzelfall.",
    lernziele: [
      "Sie können zentrale berufsethische Prinzipien benennen und ein strukturiertes Vorgehen bei ethischen Dilemmata anwenden.",
      "Sie können Inhalt und Grenzen der Verschwiegenheit sinngemäß erläutern und die Grundzüge der DSGVO auf die Beratungspraxis übertragen.",
      "Sie können die Grenze zwischen psychologischer Beratung und erlaubnispflichtiger Heilkunde nach dem Heilpraktikergesetz beschreiben und daraus Konsequenzen für Ihr Handeln ableiten.",
      "Sie können eine sachgerechte, datensparsame Dokumentation gestalten.",
      "Sie können Risiken von Mehrfachbeziehungen erkennen und Selbstfürsorge, Intervision und Supervision als professionelle Pflichten einordnen."
    ],
    lektionen: [
      {
        id: "B8-1",
        titel: "Berufsethik in der psychologischen Beratung",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Warum Beratung eine eigene Ethik braucht",
            text: "Psychologische Beratung findet in einer besonderen Beziehung statt: Ratsuchende öffnen sich in belastenden Lebenslagen, vertrauen persönliche Informationen an und sind häufig verletzlich. Zwischen Beratenden und Ratsuchenden besteht ein **Machtgefälle** – durch Wissen, durch die Rolle und durch die Situation der Hilfesuche. Daraus entsteht eine besondere Verantwortung.\n\n**Berufsethik** beschreibt die Grundsätze, nach denen professionelles Handeln ausgerichtet sein soll. Sie geht über das rechtlich Vorgeschriebene hinaus: Nicht alles, was erlaubt ist, ist auch ethisch angemessen. Viele Berufs- und Fachverbände im Feld von Beratung, Sozialer Arbeit und Psychologie haben **Ethikrichtlinien** formuliert, die trotz unterschiedlicher Formulierungen in ihren Kernanliegen übereinstimmen.\n\nBerufsethik erfüllt mehrere Funktionen:\n\n- **Schutz der Ratsuchenden** vor Schaden, Ausnutzung und Bevormundung,\n- **Orientierung für Beratende** in schwierigen Situationen,\n- **Qualitätssicherung** und Vertrauen in die Profession,\n- **Selbstschutz**: Wer ethisch reflektiert handelt, kann Entscheidungen begründen.\n\nEthisches Handeln ist dabei kein Abhaken von Regeln. Häufig geraten berechtigte Prinzipien miteinander in Konflikt, etwa der Respekt vor der Selbstbestimmung einer Person und die Sorge um ihre Sicherheit. Solche **Dilemmata** verlangen eine sorgfältige Abwägung im Einzelfall – und die Bereitschaft, sich kollegial oder in Supervision beraten zu lassen."
          },
          {
            typ: "text",
            titel: "Vier Grundprinzipien",
            text: "Eine in vielen Gesundheits- und Sozialberufen verbreitete Orientierung bieten die vier Prinzipien, die **Tom L. Beauchamp** und **James F. Childress** für die biomedizinische Ethik formuliert haben. Sie lassen sich gut auf die Beratung übertragen:\n\n- **Respekt vor der Autonomie**: Ratsuchende entscheiden selbst über ihr Leben. Beratende informieren, regen an, eröffnen Perspektiven, aber sie entscheiden nicht für andere. Voraussetzung ist eine transparente Aufklärung über Rahmen, Vorgehen, Kosten und Grenzen der Beratung.\n- **Nichtschaden**: Beratung darf nicht schaden – etwa durch Überschreitung der eigenen Kompetenz, durch Abhängigkeit, durch Grenzverletzungen oder durch das Verzögern notwendiger medizinischer Behandlung.\n- **Fürsorge (Wohltun)**: Beratende handeln im Interesse des Wohls der Ratsuchenden, mit fachlicher Sorgfalt und auf der Grundlage aktuellen Wissens.\n- **Gerechtigkeit**: Ratsuchende werden fair und ohne Diskriminierung behandelt, unabhängig von Herkunft, Geschlecht, sexueller Orientierung, Religion, Behinderung, Alter oder sozialem Status.\n\nAus diesen Prinzipien leiten sich weitere Pflichten ab, die in Ethikrichtlinien regelmäßig auftauchen: **Verschwiegenheit**, **Abstinenz** (keine Befriedigung eigener Bedürfnisse auf Kosten der Ratsuchenden), **Kompetenzgrenzen** beachten, **Fortbildung**, **Wahrhaftigkeit** in der Darstellung der eigenen Qualifikation und **Transparenz** in Vertrag und Honorar."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Handlungen dem ethischen Prinzip zu, das sie in erster Linie verwirklichen.",
            paare: [
              ["Der Berater stellt Optionen dar und überlässt die Entscheidung dem Klienten.", "Respekt vor der Autonomie"],
              ["Die Beraterin verweist eine Person mit Hinweisen auf eine Essstörung an ärztliche Abklärung, statt allein weiterzuarbeiten.", "Nichtschaden"],
              ["Die Beraterin bildet sich regelmäßig zu neuen Erkenntnissen der Stressforschung fort.", "Fürsorge (Wohltun)"],
              ["Die Beratungsstelle bietet für Menschen mit geringem Einkommen ermäßigte Honorare an.", "Gerechtigkeit"]
            ],
            erklaerung: "Die vier Prinzipien nach Beauchamp und Childress geben Orientierung. In der Praxis berühren Handlungen oft mehrere Prinzipien; die Zuordnung zeigt den jeweiligen Schwerpunkt."
          },
          {
            typ: "merke",
            text: "Nicht alles, was rechtlich erlaubt ist, ist auch ethisch angemessen. Berufsethik fragt nicht nur „Darf ich das?“, sondern auch „Dient das den Ratsuchenden?“"
          },
          {
            typ: "text",
            titel: "Kompetenzgrenzen und Wahrhaftigkeit",
            text: "Ein zentraler Bestandteil der Berufsethik ist das **Wissen um die eigenen Grenzen**. Beratende arbeiten nur in Bereichen, für die sie durch Ausbildung, Erfahrung und Supervision qualifiziert sind. Das betrifft fachliche Grenzen, etwa bei Traumafolgen, Essstörungen, Suchterkrankungen oder Psychosen, ebenso wie rechtliche Grenzen, insbesondere zur Heilkunde (Lektion B8-3).\n\nZur Wahrhaftigkeit gehört:\n\n- **Korrekte Darstellung der Qualifikation**: keine Titel oder Berufsbezeichnungen führen, die man nicht erworben hat. Die Berufsbezeichnung „Psychotherapeutin“ bzw. „Psychotherapeut“ ist gesetzlich geschützt und Personen mit Approbation vorbehalten. Auch die Bezeichnung „Psychologin“ bzw. „Psychologe“ sollte nur mit entsprechendem Hochschulabschluss geführt werden; anderes kann als irreführend gelten.\n- **Realistische Versprechen**: keine Heil- oder Erfolgsversprechen, keine Garantien.\n- **Transparenz über das Vorgehen**: Ratsuchende sollen verstehen, was Beratung leisten kann und was nicht.\n- **Offenheit bei Grenzen**: Wenn ein Anliegen die eigene Kompetenz übersteigt, wird dies angesprochen und eine passende Weitervermittlung angeboten.\n\nKompetenzgrenzen anzuerkennen ist kein Zeichen von Schwäche, sondern von Professionalität. Problematisch ist eher der Wunsch, allen Anliegen gerecht werden zu wollen – er kann dazu führen, dass Menschen zu spät die Hilfe erhalten, die sie benötigen."
          },
          {
            typ: "truefalse",
            aussage: "Eine Person mit einer Weiterbildung in psychologischer Beratung, aber ohne Approbation, darf sich auf ihrer Website „Psychotherapeutin“ nennen, solange sie keine Krankheiten behandelt.",
            richtig: false,
            erklaerung: "Falsch. Die Berufsbezeichnung „Psychotherapeutin“ bzw. „Psychotherapeut“ ist durch das Psychotherapeutengesetz geschützt und approbierten Personen vorbehalten (Ärztinnen und Ärzte führen sie mit entsprechendem Zusatz). Eine unbefugte Führung ist nicht zulässig."
          },
          {
            typ: "text",
            titel: "Ethische Dilemmata strukturiert bearbeiten",
            text: "In ethisch schwierigen Situationen hilft ein strukturiertes Vorgehen, um nicht aus dem Bauch heraus oder unter Druck zu entscheiden. Viele Modelle ethischer Entscheidungsfindung folgen ähnlichen Schritten:\n\n- **Situation klären**: Was genau ist geschehen? Welche Fakten sind bekannt, welche nicht?\n- **Beteiligte und Interessen erfassen**: Wer ist betroffen? Welche Bedürfnisse und Rechte haben die Beteiligten?\n- **Ethisches Problem benennen**: Welche Prinzipien oder Pflichten stehen im Konflikt – etwa Autonomie und Fürsorge, Verschwiegenheit und Schutz Dritter?\n- **Rechtlichen und institutionellen Rahmen prüfen**: Welche Gesetze, Richtlinien oder Vereinbarungen gelten?\n- **Handlungsoptionen entwickeln**: Welche Möglichkeiten gibt es? Gibt es kreative Lösungen jenseits von Entweder-oder?\n- **Folgen abwägen**: Welche Folgen hat jede Option für die Beteiligten?\n- **Rat einholen**: kollegiale Beratung, Supervision, ggf. rechtliche Beratung – unter Wahrung der Anonymität.\n- **Entscheiden, handeln und dokumentieren**: Die Entscheidung und ihre Begründung werden festgehalten.\n- **Auswerten**: Was lässt sich aus der Situation lernen?\n\nIn akuten Notlagen ist ein ausführliches Verfahren nicht möglich; dann hat der Schutz von Leben Vorrang. Die nachträgliche Reflexion ist dann besonders wichtig."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Schritte einer strukturierten ethischen Entscheidungsfindung in eine sinnvolle Reihenfolge.",
            elemente: [
              "Situation und Fakten klären",
              "Beteiligte und ihre Interessen erfassen",
              "Konflikt der ethischen Prinzipien benennen",
              "Handlungsoptionen entwickeln und Folgen abwägen",
              "Kollegialen Rat oder Supervision einholen",
              "Entscheiden, handeln und Begründung dokumentieren"
            ],
            erklaerung: "Die Abfolge führt vom Verstehen der Situation über die ethische Analyse und die Entwicklung von Optionen zur begründeten Entscheidung. Kollegialer Rat kann auch früher eingeholt werden; wichtig ist, dass er vor der Entscheidung möglich ist, wenn keine akute Notlage besteht."
          },
          {
            typ: "fall",
            titel: "Autonomie oder Fürsorge?",
            fall: "Konstruierte Lehrvignette: Herr F., 74 Jahre, kommt seit einigen Wochen in die Beratung, weil er nach dem Tod seiner Frau allein lebt. Seine Tochter ruft an und bittet Sie dringend, ihn davon zu überzeugen, in ein betreutes Wohnen zu ziehen. Herr F. selbst möchte unbedingt in seiner Wohnung bleiben. Hinweise auf eine Gefährdung oder eingeschränkte Entscheidungsfähigkeit liegen nicht vor. Eine Schweigepflichtentbindung gegenüber der Tochter gibt es nicht.",
            frage: "Wie handeln Sie ethisch angemessen?",
            optionen: [
              "Sie bestätigen der Tochter, dass ihr Vater in Beratung ist, und versprechen, ihn umzustimmen.",
              "Sie geben der Tochter keine Auskunft über die Beratung, ohne Herrn F. zu fragen, und respektieren seine Entscheidung; Sie können mit ihm besprechen, ob er über die Sorgen seiner Tochter sprechen möchte.",
              "Sie berichten der Tochter ausführlich, damit sie die Situation versteht, und überlassen ihr die Entscheidung.",
              "Sie beenden die Beratung, um nicht in einen Familienkonflikt zu geraten."
            ],
            richtig: 1,
            erklaerung: "Ohne Schweigepflichtentbindung dürfen Sie nicht einmal bestätigen, dass Herr F. in Beratung ist. Seine Autonomie ist zu respektieren, solange keine Gefährdung oder eingeschränkte Entscheidungsfähigkeit vorliegt. Sie können ihm anbieten, die Sorgen der Tochter zu thematisieren – die Entscheidung liegt bei ihm. Ein Beratungsabbruch würde ihm schaden."
          },
          {
            typ: "multi",
            frage: "Welche Pflichten leiten sich typischerweise aus berufsethischen Richtlinien für die Beratung ab? (Mehrere Antworten möglich)",
            optionen: [
              "Verschwiegenheit gegenüber Dritten",
              "Abstinenz, also keine Befriedigung eigener Bedürfnisse auf Kosten der Ratsuchenden",
              "Garantie eines Beratungserfolgs, um Vertrauen zu schaffen",
              "Regelmäßige Fort- und Weiterbildung",
              "Entscheidungen für Ratsuchende treffen, wenn diese unsicher sind"
            ],
            richtig: [0, 1, 3],
            erklaerung: "Verschwiegenheit, Abstinenz und Fortbildung sind typische Pflichten. Erfolgsgarantien sind unseriös und widersprechen der Wahrhaftigkeit. Entscheidungen für Ratsuchende zu treffen widerspricht dem Respekt vor ihrer Autonomie."
          },
          {
            typ: "karten",
            titel: "Berufsethik kompakt",
            karten: [
              { vorne: "Vier Prinzipien nach Beauchamp und Childress", hinten: "Respekt vor der Autonomie, Nichtschaden, Fürsorge (Wohltun), Gerechtigkeit." },
              { vorne: "Abstinenz", hinten: "Keine Befriedigung eigener emotionaler, sexueller, wirtschaftlicher oder sozialer Bedürfnisse auf Kosten der Ratsuchenden." },
              { vorne: "Kompetenzgrenzen", hinten: "Nur in Bereichen arbeiten, für die man qualifiziert ist; Grenzen offen ansprechen und weitervermitteln." },
              { vorne: "Geschützte Berufsbezeichnung", hinten: "„Psychotherapeutin/Psychotherapeut“ ist nach dem Psychotherapeutengesetz approbierten Personen vorbehalten." },
              { vorne: "Ethisches Dilemma", hinten: "Situation, in der berechtigte Prinzipien in Konflikt geraten; strukturierte Abwägung und kollegialer Rat helfen." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Erinnern Sie sich an eine Situation in Ihrem Berufsalltag, in der zwei ethische Prinzipien miteinander in Konflikt standen. Wie haben Sie entschieden, und wie würden Sie heute vorgehen?",
            hinweis: "Leitfragen: Welche Prinzipien standen sich gegenüber? Wer war beteiligt, welche Interessen gab es? Habe ich Rat eingeholt? Was würde ich mit dem strukturierten Vorgehen anders machen?"
          }
        ]
      },
      {
        id: "B8-2",
        titel: "Verschwiegenheit und Datenschutz",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Verschwiegenheit als Grundlage der Beratung",
            text: "Ohne Vertraulichkeit ist Beratung nicht möglich. Ratsuchende müssen darauf vertrauen können, dass das Besprochene nicht nach außen dringt. Die Verschwiegenheit schützt ihre Privatsphäre, ihre Würde und häufig auch ihre soziale und berufliche Stellung.\n\nRechtlich ergibt sich die Pflicht zur Verschwiegenheit aus verschiedenen Quellen:\n\n- **Strafrechtlich** stellt **§ 203 StGB** die Verletzung von Privatgeheimnissen durch bestimmte Berufsgruppen unter Strafe. Dazu gehören unter anderem Ärztinnen und Ärzte, Psychologinnen und Psychologen mit staatlich anerkannter wissenschaftlicher Abschlussprüfung, Psychotherapeutinnen und Psychotherapeuten, staatlich anerkannte Sozialarbeiterinnen und Sozialpädagogen sowie Beraterinnen und Berater in bestimmten anerkannten Beratungsstellen, etwa für Ehe-, Familien-, Erziehungs- oder Jugendfragen, Suchtfragen oder Schwangerschaftskonflikte.\n- **Vertraglich** wird Verschwiegenheit in der freien Praxis regelmäßig im Beratungsvertrag vereinbart, und sie ergibt sich als Nebenpflicht aus dem Vertragsverhältnis.\n- **Datenschutzrechtlich** schützt die **DSGVO** personenbezogene Daten, insbesondere Gesundheitsdaten.\n- **Berufsethisch** ist Verschwiegenheit in allen Ethikrichtlinien verankert.\n\nOb eine Beratungsperson unter § 203 StGB fällt, hängt von ihrer Qualifikation und ihrem Tätigkeitsrahmen ab. Für die Praxis gilt aber unabhängig davon: Wer psychologisch berät, behandelt alles Anvertraute **so, als bestünde eine strafbewehrte Schweigepflicht**. Das umfasst bereits die Tatsache, dass jemand überhaupt in Beratung ist."
          },
          {
            typ: "truefalse",
            aussage: "Die Verschwiegenheit umfasst nicht nur die Gesprächsinhalte, sondern bereits die Tatsache, dass eine Person in Beratung ist.",
            richtig: true,
            erklaerung: "Richtig. Schon die Information, dass jemand eine Beratung in Anspruch nimmt, ist ein schutzwürdiges Geheimnis. Auch gegenüber Angehörigen, Arbeitgebern oder Behörden darf sie ohne Einwilligung nicht offenbart werden."
          },
          {
            typ: "text",
            titel: "Wann Verschwiegenheit durchbrochen werden darf oder muss",
            text: "Die Verschwiegenheit gilt nicht absolut. In bestimmten Situationen ist eine Offenbarung erlaubt oder sogar geboten. Sinngemäß lassen sich folgende Konstellationen unterscheiden:\n\n- **Einwilligung (Schweigepflichtentbindung)**: Die ratsuchende Person erlaubt die Weitergabe bestimmter Informationen an bestimmte Personen oder Stellen. Die Entbindung sollte **schriftlich**, **konkret** (wer, was, wozu, wie lange) und **freiwillig** sein, und sie ist jederzeit widerrufbar.\n- **Rechtfertigender Notstand (§ 34 StGB)**: Bei einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Leib oder andere hochrangige Rechtsgüter darf die Verschwiegenheit durchbrochen werden, wenn das geschützte Interesse das Geheimhaltungsinteresse wesentlich überwiegt – etwa bei akuter Suizidgefahr oder ernsthafter Gefahr für Dritte.\n- **Anzeigepflicht bei geplanten schweren Straftaten (§ 138 StGB)**: Wer glaubhaft von dem Vorhaben bestimmter schwerer Straftaten, etwa Mord oder Totschlag, erfährt, solange die Ausführung noch abgewendet werden kann, muss dies den Behörden oder der bedrohten Person rechtzeitig anzeigen. Für bereits begangene Taten gilt diese Pflicht nicht.\n- **Kinderschutz**: Nach **§ 4 des Gesetzes zur Kooperation und Information im Kinderschutz (KKG)** sollen bestimmte Berufsgeheimnisträger bei gewichtigen Anhaltspunkten für eine Kindeswohlgefährdung zunächst mit den Betroffenen sprechen und auf Hilfen hinwirken; sie haben Anspruch auf Beratung durch eine insoweit erfahrene Fachkraft und sind befugt, das Jugendamt zu informieren, wenn dies erforderlich ist. Für Träger der Kinder- und Jugendhilfe gilt zusätzlich § 8a SGB VIII.\n\nIn allen Fällen gilt: **Nur so viel offenbaren wie nötig**, die betroffene Person möglichst vorher informieren, und das Vorgehen sorgfältig dokumentieren. In unklaren Fällen ist rechtlicher Rat einzuholen."
          },
          {
            typ: "kategorien",
            frage: "Ist eine Weitergabe von Informationen ohne Weiteres zulässig, oder nicht?",
            kategorien: ["Weitergabe zulässig bzw. geboten", "Weitergabe nicht zulässig"],
            elemente: [
              { text: "Die Klientin hat schriftlich erlaubt, dass Sie sich mit ihrer Hausärztin über ihre Schlafprobleme austauschen.", kat: 0 },
              { text: "Der Arbeitgeber eines Klienten fragt, ob dieser regelmäßig zu Ihnen kommt.", kat: 1 },
              { text: "Ein Klient kündigt glaubhaft an, heute Abend seine frühere Partnerin zu töten.", kat: 0 },
              { text: "Die Mutter einer erwachsenen Klientin bittet um einen Bericht über die Fortschritte.", kat: 1 },
              { text: "Eine Klientin befindet sich in akuter Suizidgefahr und lehnt jede Hilfe ab.", kat: 0 },
              { text: "Sie möchten einen Fall mit vollem Namen in einem öffentlichen Fachforum diskutieren.", kat: 1 },
              { text: "Eine Kollegin fragt beiläufig in der Teeküche, was Ihr letzter Klient für Probleme hatte.", kat: 1 }
            ],
            erklaerung: "Zulässig sind Weitergaben mit konkreter Einwilligung sowie bei gegenwärtiger Gefahr für Leben (Notstand) bzw. bei geplanten schweren Straftaten (Anzeigepflicht). Nicht zulässig sind Auskünfte an Arbeitgeber, Angehörige oder Kolleginnen ohne Einwilligung und erkennbare Fallschilderungen in der Öffentlichkeit. Fallbesprechungen in Supervision erfolgen anonymisiert."
          },
          {
            typ: "text",
            titel: "Datenschutz nach der DSGVO: Grundsätze",
            text: "Die **Datenschutz-Grundverordnung** (DSGVO) gilt seit Mai 2018 in der gesamten Europäischen Union. Sie gilt auch für freiberuflich tätige Beratende, sobald sie personenbezogene Daten automatisiert verarbeiten oder in einem Dateisystem speichern – also praktisch immer, etwa durch Terminkalender, E-Mails, Rechnungen oder Notizen.\n\n**Art. 5 DSGVO** nennt Grundsätze für jede Verarbeitung personenbezogener Daten:\n\n- **Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz**: Es braucht eine Rechtsgrundlage, und die Betroffenen müssen informiert werden.\n- **Zweckbindung**: Daten werden nur für festgelegte, eindeutige Zwecke erhoben.\n- **Datenminimierung**: nur so viele Daten wie nötig.\n- **Richtigkeit**: Daten müssen sachlich richtig sein.\n- **Speicherbegrenzung**: Daten werden nur so lange gespeichert, wie es für den Zweck erforderlich ist.\n- **Integrität und Vertraulichkeit**: angemessene Sicherheit durch technische und organisatorische Maßnahmen.\n- **Rechenschaftspflicht**: Die verantwortliche Stelle muss die Einhaltung nachweisen können.\n\nBesonders wichtig für die Beratung ist **Art. 9 DSGVO**: **Gesundheitsdaten** – und dazu zählen Informationen über psychisches Befinden – gehören zu den **besonderen Kategorien personenbezogener Daten**. Ihre Verarbeitung ist grundsätzlich untersagt, es sei denn, eine der dort genannten Ausnahmen greift. In der freien Beratungspraxis ist dies in der Regel die **ausdrückliche Einwilligung** der betroffenen Person."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Praxisbeispiele dem DSGVO-Grundsatz zu, den sie in erster Linie umsetzen.",
            paare: [
              ["Im Anmeldebogen wird nicht nach der Religionszugehörigkeit gefragt, weil sie für die Beratung nicht benötigt wird.", "Datenminimierung"],
              ["Daten aus der Beratung werden nicht für einen Newsletter genutzt.", "Zweckbindung"],
              ["Nach Ablauf der festgelegten Aufbewahrungsfrist werden die Notizen gelöscht.", "Speicherbegrenzung"],
              ["Der Laptop mit Beratungsnotizen ist verschlüsselt und passwortgeschützt.", "Integrität und Vertraulichkeit"],
              ["Ratsuchende erhalten zu Beginn eine verständliche Datenschutzinformation.", "Transparenz"]
            ],
            erklaerung: "Die Grundsätze des Art. 5 DSGVO lassen sich in konkrete Routinen übersetzen. Sie sollten in einem schriftlichen Datenschutzkonzept festgehalten werden, um die Rechenschaftspflicht zu erfüllen."
          },
          {
            typ: "text",
            titel: "Datenschutz in der Beratungspraxis umsetzen",
            text: "Für eine datenschutzkonforme Beratungspraxis sind einige Bausteine wesentlich:\n\n- **Informationspflichten (Art. 13 DSGVO)**: Ratsuchende werden bei Erhebung der Daten informiert – über Verantwortliche, Zwecke, Rechtsgrundlagen, Speicherdauer, Empfänger und ihre Rechte.\n- **Einwilligung**: Für die Verarbeitung von Gesundheitsdaten wird eine ausdrückliche, informierte und freiwillige Einwilligung eingeholt und dokumentiert. Sie kann jederzeit widerrufen werden.\n- **Betroffenenrechte**: Ratsuchende haben insbesondere das Recht auf **Auskunft** (Art. 15), **Berichtigung** (Art. 16) und **Löschung** (Art. 17), wobei gesetzliche Aufbewahrungspflichten der Löschung entgegenstehen können.\n- **Verzeichnis von Verarbeitungstätigkeiten (Art. 30)**: eine Übersicht, welche Daten wofür und wie verarbeitet werden.\n- **Technische und organisatorische Maßnahmen (Art. 32)**: verschlüsselte Geräte, sichere Passwörter, abschließbare Schränke, Bildschirmsperre, keine Gespräche in Hörweite Dritter.\n- **Auftragsverarbeitung (Art. 28)**: Werden externe Dienste genutzt – etwa Cloudspeicher, Online-Terminbuchung oder Videoplattformen –, ist ein Vertrag zur Auftragsverarbeitung erforderlich. Bei Anbietern außerhalb der EU sind zusätzliche Anforderungen an den Datentransfer zu beachten.\n- **Datenpannen (Art. 33 und 34)**: Wird etwa ein unverschlüsselter Laptop gestohlen, ist die Verletzung in der Regel innerhalb von **72 Stunden** der zuständigen Aufsichtsbehörde zu melden, sofern sie voraussichtlich zu einem Risiko für die Betroffenen führt; bei hohem Risiko sind auch die Betroffenen zu benachrichtigen.\n\nFür die Kommunikation gilt: Unverschlüsselte E-Mails und gängige Messenger sind für sensible Inhalte problematisch. Inhaltliche Beratung per E-Mail sollte nur über sichere Wege und mit Aufklärung erfolgen."
          },
          {
            typ: "multi",
            frage: "Welche Aussagen zur DSGVO in der Beratungspraxis treffen zu? (Mehrere Antworten möglich)",
            optionen: [
              "Informationen über das psychische Befinden gehören zu den Gesundheitsdaten und damit zu den besonderen Kategorien nach Art. 9 DSGVO.",
              "Für die Nutzung eines externen Cloudspeichers für Beratungsnotizen ist kein Vertrag erforderlich, wenn der Anbieter bekannt ist.",
              "Ratsuchende haben ein Recht auf Auskunft über die zu ihnen gespeicherten Daten.",
              "Eine Datenpanne mit Risiko für die Betroffenen ist in der Regel innerhalb von 72 Stunden der Aufsichtsbehörde zu melden.",
              "Kleine Beratungspraxen mit nur einer Person sind von der DSGVO ausgenommen."
            ],
            richtig: [0, 2, 3],
            erklaerung: "Psychische Befindlichkeit ist ein Gesundheitsdatum, Betroffene haben ein Auskunftsrecht, und Datenpannen sind innerhalb von 72 Stunden zu melden, sofern ein Risiko besteht. Für externe Dienstleister ist ein Vertrag zur Auftragsverarbeitung nötig, unabhängig von deren Bekanntheit. Auch Einzelpersonen in freier Praxis unterliegen der DSGVO."
          },
          {
            typ: "fall",
            titel: "Ein bequemer Weg?",
            fall: "Konstruierte Lehrvignette: Eine Beraterin in freier Praxis möchte ihren Klientinnen und Klienten den Kontakt erleichtern. Sie schlägt vor, Termine und kurze inhaltliche Rückfragen über einen verbreiteten Messenger auf ihrem privaten Handy abzuwickeln, auf dem auch ihre Familie Zugriff auf die Fotos hat. Eine Klientin schickt daraufhin eine lange Sprachnachricht über ihre Panikattacken.",
            frage: "Wie ist die Situation datenschutzrechtlich und ethisch am ehesten zu bewerten?",
            optionen: [
              "Unproblematisch, da die Klientin die Nachricht freiwillig geschickt hat.",
              "Unproblematisch, solange die Beraterin die Nachricht nach dem Anhören löscht.",
              "Problematisch: Gesundheitsdaten werden über einen nicht für diesen Zweck geprüften Kanal auf einem privat mitgenutzten Gerät verarbeitet; erforderlich sind ein sicherer Kommunikationsweg, Trennung von privaten Daten, Aufklärung und Einwilligung.",
              "Problematisch nur deshalb, weil Sprachnachrichten grundsätzlich nicht gespeichert werden dürfen."
            ],
            richtig: 2,
            erklaerung: "Gesundheitsdaten verlangen besondere Schutzmaßnahmen. Ein privat mitgenutztes Gerät und ein nicht geprüfter Kanal gefährden Vertraulichkeit und Integrität. Die Freiwilligkeit der Klientin ersetzt keine informierte Einwilligung in einen sicheren Kommunikationsweg. Das Löschen allein behebt das strukturelle Problem nicht."
          },
          {
            typ: "luecke",
            text: "Eine Schweigepflichtentbindung sollte schriftlich, {{konkret|unbefristet|allgemein}} und freiwillig sein. Bei einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben greift der rechtfertigende Notstand nach {{§ 34 StGB|§ 203 StGB|§ 1 HeilprG}}. Gesundheitsdaten zählen nach {{Art. 9|Art. 28|Art. 33}} DSGVO zu den besonderen Kategorien personenbezogener Daten.",
            erklaerung: "Eine Entbindung muss konkret benennen, wer was wozu erfährt. § 34 StGB regelt den rechtfertigenden Notstand, § 203 StGB die Verletzung von Privatgeheimnissen. Art. 9 DSGVO betrifft besondere Kategorien, Art. 28 die Auftragsverarbeitung, Art. 33 die Meldung von Datenpannen."
          },
          {
            typ: "karten",
            titel: "Verschwiegenheit und Datenschutz",
            karten: [
              { vorne: "§ 203 StGB", hinten: "Strafbarkeit der Verletzung von Privatgeheimnissen durch bestimmte Berufsgruppen, u. a. Psychologen mit staatlich anerkannter Abschlussprüfung und Berater in anerkannten Beratungsstellen." },
              { vorne: "Schweigepflichtentbindung", hinten: "Schriftlich, konkret (wer, was, wozu, wie lange), freiwillig, jederzeit widerrufbar." },
              { vorne: "§ 138 StGB", hinten: "Anzeigepflicht bei glaubhafter Kenntnis geplanter schwerer Straftaten, solange sie noch abgewendet werden können." },
              { vorne: "§ 4 KKG", hinten: "Vorgehen für Berufsgeheimnisträger bei gewichtigen Anhaltspunkten einer Kindeswohlgefährdung, mit Befugnis zur Information des Jugendamts." },
              { vorne: "Art. 5 DSGVO", hinten: "Grundsätze: Rechtmäßigkeit/Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität/Vertraulichkeit, Rechenschaftspflicht." },
              { vorne: "Art. 28 DSGVO", hinten: "Auftragsverarbeitung: Vertrag mit externen Dienstleistern wie Cloud- oder Videoanbietern." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Prüfen Sie Ihre eigene Arbeitsweise: Über welche Wege kommunizieren Sie mit Ratsuchenden, und wo werden ihre Daten gespeichert? Wo sehen Sie Verbesserungsbedarf?",
            hinweis: "Leitfragen: Welche Geräte und Programme nutze ich? Sind sie verschlüsselt und von privaten Daten getrennt? Habe ich eine Datenschutzinformation und ein Einwilligungsformular? Wie lange speichere ich Daten, und wie lösche ich sie?"
          }
        ]
      },
      {
        id: "B8-3",
        titel: "Heilpraktikergesetz, Grenze zur Heilkunde und Dokumentation",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Was ist Heilkunde?",
            text: "In Deutschland ist die Ausübung der Heilkunde **erlaubnispflichtig**. Grundlage ist das **Heilpraktikergesetz** (HeilprG). Nach **§ 1 Abs. 2 HeilprG** ist Ausübung der Heilkunde jede berufs- oder gewerbsmäßig vorgenommene Tätigkeit zur **Feststellung, Heilung oder Linderung von Krankheiten, Leiden oder Körperschäden** bei Menschen, auch wenn sie im Dienste von anderen ausgeübt wird.\n\nDie Erlaubnis zur Ausübung der Heilkunde haben insbesondere:\n\n- **Ärztinnen und Ärzte** mit Approbation,\n- **Psychologische Psychotherapeutinnen und -therapeuten** sowie Kinder- und Jugendlichenpsychotherapeutinnen und -therapeuten bzw. Psychotherapeutinnen und Psychotherapeuten nach neuem Recht, jeweils mit Approbation nach dem Psychotherapeutengesetz, beschränkt auf die Psychotherapie,\n- **Heilpraktikerinnen und Heilpraktiker** mit Erlaubnis nach dem HeilprG,\n- Personen mit einer auf das Gebiet der Psychotherapie **beschränkten Heilpraktikererlaubnis** (oft „sektoraler Heilpraktiker für Psychotherapie“ genannt), die nach einer Überprüfung durch das Gesundheitsamt erteilt wird.\n\nWer ohne Erlaubnis Heilkunde ausübt, macht sich nach **§ 5 HeilprG** strafbar; das Gesetz sieht Freiheitsstrafe bis zu einem Jahr oder Geldstrafe vor.\n\nPsychologische Beratung ohne eine dieser Erlaubnisse ist daher nur zulässig, solange sie **keine Heilkunde** ist – also sich nicht auf die Feststellung, Heilung oder Linderung von Krankheiten richtet. Diese Grenze genau zu kennen und einzuhalten, ist für Beratende ohne Heilkundeerlaubnis unverzichtbar."
          },
          {
            typ: "text",
            titel: "Wo verläuft die Grenze?",
            text: "Die Abgrenzung ist im Einzelfall nicht immer einfach. Aus Gesetz und Rechtsprechung lassen sich aber klare Orientierungen ableiten:\n\n**Keine Heilkunde** ist in der Regel die Beratung **psychisch gesunder Menschen** bei Lebensfragen, Entscheidungen, Konflikten, Übergängen, Belastungen und Fragen der persönlichen Entwicklung – etwa Stressbewältigung, Kommunikation, Werteklärung, Trennungsbegleitung oder berufliche Orientierung.\n\n**Heilkunde** liegt dagegen insbesondere vor, wenn:\n\n- **Diagnosen** psychischer Störungen gestellt werden (z. B. „Sie haben eine Depression“, „Das ist eine Angststörung“),\n- psychische **Krankheiten behandelt** werden sollen (z. B. Beratung „gegen Depression“, „Therapie von Panikstörungen“),\n- Tätigkeiten angeboten werden, die nach ihrer Art **ärztliche oder psychotherapeutische Fachkenntnisse** voraussetzen und gesundheitliche Schäden verursachen können.\n\nNach der Rechtsprechung kann zudem bedeutsam sein, ob eine Tätigkeit bei den Ratsuchenden den **Eindruck** erweckt, sie ziele auf Heilung, und ob durch sie die **Gefahr** entsteht, dass eine notwendige ärztliche Behandlung verzögert oder unterlassen wird (sogenannte mittelbare Gesundheitsgefährdung).\n\nDaraus folgt: Entscheidend ist nicht nur, was Beratende tun, sondern auch, **wie sie ihre Tätigkeit darstellen**, wem sie sie anbieten und wie sie mit Hinweisen auf Erkrankungen umgehen."
          },
          {
            typ: "kategorien",
            frage: "Wie sind die folgenden Angebote einer Person ohne Heilkundeerlaubnis einzuordnen?",
            kategorien: ["in der Regel zulässige Beratung", "Grenze zur Heilkunde überschritten"],
            elemente: [
              { text: "Begleitung bei der Entscheidung über einen Berufswechsel", kat: 0 },
              { text: "„Ich behandle Ihre Depression mit sinnzentrierten Gesprächen.“", kat: 1 },
              { text: "Kurs zur Stressbewältigung für gesunde Berufstätige", kat: 0 },
              { text: "Feststellen, dass eine Klientin an einer generalisierten Angststörung leidet", kat: 1 },
              { text: "Werteklärung in einer Phase nach der Trennung", kat: 0 },
              { text: "Website-Angebot „Therapie bei Panikattacken und Zwängen“", kat: 1 },
              { text: "Kommunikationsberatung für ein Paar mit wiederkehrenden Konflikten", kat: 0 }
            ],
            erklaerung: "Beratung gesunder Menschen bei Lebensfragen, Entscheidungen und Belastungen ist in der Regel keine Heilkunde. Diagnosen, die Behandlung psychischer Erkrankungen und eine entsprechende Außendarstellung („Therapie bei …“) überschreiten die Grenze. Im Einzelfall kommt es immer auf die konkreten Umstände an."
          },
          {
            typ: "text",
            titel: "Praktische Konsequenzen für Beratende ohne Heilkundeerlaubnis",
            text: "Um die Grenze zur Heilkunde sicher einzuhalten, haben sich folgende Vorgehensweisen bewährt:\n\n- **Klare Außendarstellung**: Auf Website, Flyern und in Gesprächen wird von „psychologischer Beratung“, „Begleitung“ oder „Coaching“ gesprochen, nicht von „Therapie“, „Behandlung“ oder „Heilung“. Es werden keine Krankheitsbilder als Zielgruppe beworben und keine Heilversprechen gemacht.\n- **Aufklärung zu Beginn**: Ratsuchende werden – idealerweise auch schriftlich im Beratungsvertrag – darüber informiert, dass die Beratung keine Diagnose und keine Behandlung psychischer oder körperlicher Erkrankungen umfasst und eine ärztliche oder psychotherapeutische Behandlung nicht ersetzt.\n- **Abklärung anregen**: Bei Hinweisen auf eine psychische oder körperliche Erkrankung wird eine ärztliche oder psychotherapeutische Abklärung empfohlen und dies dokumentiert.\n- **Bei bestehender Behandlung**: Befindet sich eine Person in Behandlung, kann Beratung zu klar abgegrenzten Lebensthemen begleitend sinnvoll sein. Sie sollte dann nach Möglichkeit mit Einverständnis der Person mit den Behandelnden abgestimmt werden und darf der Behandlung nicht widersprechen.\n- **Keine Empfehlungen zu Medikamenten**: Fragen zu Medikamenten gehören in ärztliche Hand. Beratende raten weder zum Absetzen noch zur Einnahme.\n- **Sprache im Gespräch**: Statt „Sie haben eine Depression“ eher: „Was Sie beschreiben, sollte ärztlich angeschaut werden, damit nichts übersehen wird.“\n\nWer zusätzlich heilkundlich tätig werden will, benötigt die entsprechende Erlaubnis. Auch dann sollte klar getrennt werden, wann beraten und wann behandelt wird."
          },
          {
            typ: "mc",
            frage: "Welche Formulierung auf der Website einer psychologischen Beraterin ohne Heilkundeerlaubnis ist am ehesten unbedenklich?",
            optionen: [
              "„Ich behandle Burnout, Depressionen und Ängste ganzheitlich.“",
              "„Ich begleite Sie bei beruflichen Belastungen, Lebensübergängen und Entscheidungen. Meine Beratung ersetzt keine ärztliche oder psychotherapeutische Behandlung.“",
              "„Mit meiner Methode werden Sie in fünf Sitzungen angstfrei.“",
              "„Psychotherapie ohne Wartezeit – schnell und unbürokratisch.“"
            ],
            richtig: 1,
            erklaerung: "Die richtige Formulierung beschreibt Beratungsanlässe ohne Krankheitsbezug und klärt über die Grenze auf. Die anderen Formulierungen versprechen die Behandlung von Erkrankungen, machen Heilversprechen oder verwenden den Begriff „Psychotherapie“, was ohne Erlaubnis bzw. Approbation unzulässig ist."
          },
          {
            typ: "truefalse",
            aussage: "Die Ausübung der Heilkunde ohne Erlaubnis ist nach § 5 HeilprG strafbar.",
            richtig: true,
            erklaerung: "Richtig. § 5 HeilprG sieht für die Ausübung der Heilkunde ohne Erlaubnis Freiheitsstrafe bis zu einem Jahr oder Geldstrafe vor. Zudem können wettbewerbsrechtliche und zivilrechtliche Folgen entstehen."
          },
          {
            typ: "luecke",
            text: "Die Berufsbezeichnung „Psychotherapeutin“ ist durch das {{Psychotherapeutengesetz|Heilpraktikergesetz|Sozialgesetzbuch VIII}} geschützt. Wer ohne Erlaubnis Heilkunde ausübt, macht sich nach {{§ 5 HeilprG|§ 34 StGB|Art. 9 DSGVO}} strafbar. Beratende ohne Heilkundeerlaubnis sollten bei Hinweisen auf eine Erkrankung eine {{ärztliche oder psychotherapeutische Abklärung|Selbstdiagnose per Fragebogen|Verlängerung der Beratung}} empfehlen.",
            erklaerung: "Das Psychotherapeutengesetz schützt die Berufsbezeichnung, § 5 HeilprG stellt die unerlaubte Heilkundeausübung unter Strafe. Bei Krankheitshinweisen ist die Empfehlung einer fachlichen Abklärung der richtige Weg – auch zum Schutz vor mittelbarer Gesundheitsgefährdung."
          },
          {
            typ: "text",
            titel: "Dokumentation: Wozu und was?",
            text: "Auch wenn für psychologische Beratung außerhalb der Heilkunde nicht dieselben gesetzlichen Dokumentationspflichten gelten wie für ärztliche oder psychotherapeutische Behandlungen, ist eine **sorgfältige Dokumentation** fachlich geboten. Sie erfüllt mehrere Funktionen:\n\n- **Gedächtnisstütze und Kontinuität**: Was wurde besprochen, vereinbart, ausprobiert?\n- **Qualitätssicherung und Reflexion**: Verläufe werden sichtbar und können in Supervision besprochen werden.\n- **Nachweis**: Bei Beschwerden oder rechtlichen Auseinandersetzungen kann belegt werden, wie gehandelt wurde – etwa dass eine ärztliche Abklärung empfohlen oder eine Gefährdung eingeschätzt wurde.\n\nInhaltlich bewährt sich eine schlanke Struktur:\n\n- Datum, Dauer und Form des Kontakts,\n- Anlass und Anliegen,\n- zentrale Themen und Interventionen in Stichworten,\n- Vereinbarungen und nächste Schritte,\n- Empfehlungen (z. B. ärztliche Abklärung) und die Reaktion darauf,\n- bei Krisen: Einschätzung der Gefährdung, Äußerungen der Person (möglichst wörtlich), getroffene Maßnahmen, Zeitpunkte, beteiligte Stellen.\n\nGrundsätze guter Dokumentation sind **Sachlichkeit**, die **Trennung von Beobachtung und Interpretation**, **Datensparsamkeit** und eine respektvolle Sprache. Schreiben Sie so, dass Sie jede Formulierung auch vor der betroffenen Person vertreten könnten – denn Ratsuchende haben nach der DSGVO grundsätzlich ein Recht auf Auskunft über die zu ihnen gespeicherten Daten. Für die Aufbewahrung sollten klare Fristen in einem Löschkonzept festgelegt werden; steuerrechtliche Aufbewahrungspflichten für Rechnungen gelten gesondert."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Dokumentationseinträge zu.",
            kategorien: ["sachgerecht formuliert", "problematisch formuliert"],
            elemente: [
              { text: "„Klientin berichtet, seit drei Wochen schlecht zu schlafen. Ärztliche Abklärung empfohlen; Klientin will Termin bei Hausärztin vereinbaren.“", kat: 0 },
              { text: "„Klient ist offensichtlich narzisstisch gestört.“", kat: 1 },
              { text: "„Auf Nachfrage verneint Klient Suizidgedanken. Notfallnummern ausgehändigt. Folgetermin am Donnerstag.“", kat: 0 },
              { text: "„Total anstrengende Frau, jammert ständig.“", kat: 1 },
              { text: "„Thema: Konflikt mit Vorgesetztem. Rollenspiel zum Gespräch durchgeführt.“", kat: 0 },
              { text: "Ausführliche Wiedergabe intimer Details aus der Kindheit, die für die Beratung nicht relevant sind", kat: 1 }
            ],
            erklaerung: "Sachgerechte Einträge beschreiben Beobachtungen, Äußerungen, Interventionen und Vereinbarungen nüchtern. Diagnostische Zuschreibungen, abwertende Formulierungen und nicht erforderliche Details sind fachlich, ethisch und datenschutzrechtlich problematisch."
          },
          {
            typ: "fall",
            titel: "Grenzfall in der Beratung",
            fall: "Konstruierte Lehrvignette: Ein Klient, 34 Jahre, kommt wegen Konflikten am Arbeitsplatz. In der dritten Sitzung berichtet er, dass er seit Monaten wegen Panikattacken kaum noch U-Bahn fahren könne und deshalb oft zu spät komme. Er bittet: „Können wir nicht einfach hier an den Panikattacken arbeiten? Zum Arzt will ich nicht, der verschreibt mir nur Tabletten.“",
            frage: "Wie handeln Sie als Beraterin ohne Heilkundeerlaubnis angemessen?",
            optionen: [
              "Sie stimmen zu und arbeiten mit Expositionsübungen an den Panikattacken, da Sie die Methode aus einem Seminar kennen.",
              "Sie beenden die Beratung sofort, da ein Krankheitsverdacht besteht.",
              "Sie erklären, dass die Behandlung von Panikattacken nicht in Ihren Rahmen fällt, nehmen seine Bedenken gegenüber Medikamenten ernst, informieren ihn, dass auch psychotherapeutische Behandlung möglich ist, empfehlen eine Abklärung, dokumentieren dies und bieten an, an den Arbeitsplatzkonflikten weiterzuarbeiten.",
              "Sie raten ihm, auf Medikamente zu verzichten und es mit Atemübungen zu versuchen."
            ],
            richtig: 2,
            erklaerung: "Die Behandlung von Panikattacken ist Heilkunde und gehört in ärztliche oder psychotherapeutische Hand. Angemessen ist es, die Grenze transparent zu machen, die Bedenken des Klienten zu würdigen, über Behandlungsmöglichkeiten zu informieren, eine Abklärung zu empfehlen, dies zu dokumentieren und die Beratung zum nicht-heilkundlichen Anliegen fortzusetzen. Ein abrupter Abbruch oder Empfehlungen zu Medikamenten wären unangemessen."
          },
          {
            typ: "karten",
            titel: "Heilkunde und Dokumentation",
            karten: [
              { vorne: "§ 1 Abs. 2 HeilprG", hinten: "Heilkunde = berufs- oder gewerbsmäßige Tätigkeit zur Feststellung, Heilung oder Linderung von Krankheiten, Leiden oder Körperschäden." },
              { vorne: "Erlaubnis zur Heilkunde", hinten: "Approbation (Ärzte, Psychotherapeuten), Heilpraktikererlaubnis oder auf Psychotherapie beschränkte Heilpraktikererlaubnis." },
              { vorne: "§ 5 HeilprG", hinten: "Strafbarkeit der Heilkundeausübung ohne Erlaubnis: Freiheitsstrafe bis zu einem Jahr oder Geldstrafe." },
              { vorne: "Mittelbare Gesundheitsgefährdung", hinten: "Gefahr, dass durch eine Tätigkeit notwendige ärztliche Behandlung verzögert oder unterlassen wird." },
              { vorne: "Gute Dokumentation", hinten: "Sachlich, Beobachtung und Interpretation getrennt, datensparsam, respektvoll; bei Krisen Einschätzung und Maßnahmen genau festhalten." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Formulieren Sie einen kurzen Absatz für Ihren Beratungsvertrag oder Ihre Website, der klar macht, was Ihre Beratung leistet und wo ihre Grenzen liegen.",
            hinweis: "Leitfragen: Welche Anliegen beschreibe ich? Vermeide ich Krankheitsbegriffe und Heilversprechen? Mache ich deutlich, dass keine Diagnose und Behandlung erfolgen? Wie lade ich dazu ein, bei Bedarf ärztliche oder psychotherapeutische Hilfe in Anspruch zu nehmen?"
          }
        ]
      },
      {
        id: "B8-4",
        titel: "Mehrfachbeziehungen, Selbstfürsorge und Supervision",
        dauer: 25,
        schritte: [
          {
            typ: "text",
            titel: "Mehrfachbeziehungen: Wenn Rollen sich überschneiden",
            text: "Von einer **Mehrfachbeziehung** (auch Doppel- oder Mehrfachrolle) spricht man, wenn zwischen Beratenden und Ratsuchenden neben der beraterischen Beziehung eine weitere Beziehung besteht oder entsteht – etwa eine private, berufliche, geschäftliche oder soziale.\n\nBeispiele sind:\n\n- Freunde, Bekannte, Verwandte oder Kolleginnen als Klienten,\n- Beratung von Mitarbeitenden, denen gegenüber man zugleich Vorgesetzte ist,\n- Geschäftsbeziehungen mit Klienten, etwa wenn ein Klient Handwerker ist und Arbeiten in der Wohnung der Beraterin übernehmen soll,\n- Begegnungen im Verein, in der Kirchengemeinde oder im Freundeskreis, besonders in **kleinen Orten** und überschaubaren Gemeinschaften,\n- Kontakte über **soziale Medien**.\n\nMehrfachbeziehungen sind problematisch, weil sie die **Klarheit der Beratungsrolle** gefährden, das **Machtgefälle** verstärken oder verschleiern, die **Verschwiegenheit** erschweren und **Interessenkonflikte** erzeugen. Ratsuchende können sich nicht mehr frei äußern, wenn sie befürchten, dass das Gesagte in einem anderen Zusammenhang Folgen hat.\n\nNicht jede Überschneidung lässt sich vermeiden, insbesondere im ländlichen Raum oder innerhalb von Organisationen. Entscheidend ist ein **bewusster Umgang**: Risiken reflektieren, Grenzen transparent besprechen, Verschwiegenheit auch im Alltag wahren – etwa beim Grüßen in der Öffentlichkeit die Initiative den Ratsuchenden überlassen – und im Zweifel eine Weitervermittlung anbieten."
          },
          {
            typ: "text",
            titel: "Absolute Grenzen: Abstinenz und sexuelle Kontakte",
            text: "Einige Grenzen sind in allen Ethikrichtlinien eindeutig und nicht verhandelbar:\n\n- **Sexuelle Kontakte** zwischen Beratenden und Ratsuchenden sind **ausnahmslos unzulässig** – unabhängig davon, von wem die Initiative ausgeht und ob die ratsuchende Person zustimmt. Die Verantwortung liegt immer bei der beratenden Person. Wegen des Machtgefälles und der emotionalen Abhängigkeit kann von einer freien Entscheidung nicht ausgegangen werden. Viele Ethikrichtlinien erstrecken dieses Verbot auch auf die Zeit nach Beendigung der Beratung.\n- **Strafrechtlich** stellt **§ 174c StGB** sexuelle Handlungen unter Missbrauch eines Beratungs-, Behandlungs- oder Betreuungsverhältnisses unter Strafe, wenn die Person der beratenden oder behandelnden Person unter anderem wegen einer seelischen Krankheit oder Behinderung oder im Rahmen einer psychotherapeutischen Behandlung anvertraut ist.\n- **Ausnutzung** in jeder anderen Form – finanziell, emotional, sozial oder weltanschaulich – widerspricht dem **Abstinenzgebot**. Dazu zählen etwa die Vermittlung eigener Produkte, das Einwerben für eigene politische oder religiöse Überzeugungen, die Nutzung von Informationen aus der Beratung zum eigenen Vorteil oder der Wunsch, von Ratsuchenden bewundert oder gebraucht zu werden.\n\nGraubereiche sind zum Beispiel **Geschenke**: Kleine, symbolische Aufmerksamkeiten zum Abschluss einer Beratung können Ausdruck von Dankbarkeit sein; wertvolle Geschenke oder regelmäßige Zuwendungen sind dagegen abzulehnen. Hilfreich ist die Frage: Dient das, was hier geschieht, den Ratsuchenden – oder mir?"
          },
          {
            typ: "mc",
            frage: "Ein Klient, dessen Beratung vor zwei Wochen abgeschlossen wurde, lädt seine frühere Beraterin zum Abendessen ein, um sich „privat besser kennenzulernen“. Was ist ethisch angemessen?",
            optionen: [
              "Die Einladung annehmen, da die Beratung abgeschlossen ist.",
              "Die Einladung annehmen, aber das Treffen geheim halten.",
              "Die Einladung freundlich, aber klar ablehnen und die professionelle Grenze erklären; den Vorgang dokumentieren und gegebenenfalls in Supervision reflektieren.",
              "Die Einladung annehmen, wenn der Klient ausdrücklich bestätigt, dass er dies freiwillig wünscht."
            ],
            richtig: 2,
            erklaerung: "Auch nach dem Ende einer Beratung wirken Machtgefälle und emotionale Bindung fort. Viele Ethikrichtlinien schließen private bzw. intime Beziehungen auch nach Beratungsende aus. Die Verantwortung liegt bei der Beraterin. Eine klare, wertschätzende Ablehnung schützt beide Seiten; die Reflexion in Supervision ist sinnvoll."
          },
          {
            typ: "kategorien",
            frage: "Wie sind die folgenden Situationen zu bewerten?",
            kategorien: ["klarer Grenzverstoß", "Graubereich – reflektieren und transparent handhaben", "unproblematisch"],
            elemente: [
              { text: "Eine Beraterin verkauft ihren Klientinnen Nahrungsergänzungsmittel aus ihrem Nebengewerbe.", kat: 0 },
              { text: "Ein Berater in einem kleinen Dorf trifft eine Klientin regelmäßig im Sportverein.", kat: 1 },
              { text: "Eine Klientin schenkt zum Abschluss eine selbst gestaltete Karte.", kat: 2 },
              { text: "Ein Berater nimmt eine Freundschaftsanfrage einer aktuellen Klientin in einem privaten sozialen Netzwerk an.", kat: 1 },
              { text: "Eine Beraterin beginnt eine Liebesbeziehung mit einem Klienten.", kat: 0 },
              { text: "Ein Berater nimmt an einer anonymisierten Fallsupervision teil.", kat: 2 },
              { text: "Eine Teamleiterin übernimmt die psychologische Beratung einer eigenen Mitarbeiterin.", kat: 1 }
            ],
            erklaerung: "Sexuelle Beziehungen und wirtschaftliche Ausnutzung sind eindeutige Grenzverstöße. Begegnungen im Verein, Kontakte in sozialen Medien und Beratung in Vorgesetztenrollen sind Mehrfachbeziehungen, die sorgfältig reflektiert und in der Regel vermieden werden sollten; bei sozialen Medien empfiehlt sich eine klare Regel, private Kontaktanfragen nicht anzunehmen. Kleine symbolische Abschiedsgeschenke und anonymisierte Supervision sind unproblematisch."
          },
          {
            typ: "text",
            titel: "Selbstfürsorge als professionelle Pflicht",
            text: "Beratende sind in ihrer Arbeit regelmäßig mit Leid, Krisen und belastenden Lebensgeschichten konfrontiert. Das kann auf Dauer nicht spurlos bleiben. Beschrieben werden unter anderem:\n\n- **Burnout** im Sinne der in Modul B5 dargestellten Dimensionen,\n- **Mitgefühlserschöpfung** (*compassion fatigue*), ein von **Charles Figley** geprägter Begriff für die Erschöpfung durch fortgesetzte empathische Zuwendung zu leidenden Menschen,\n- **sekundäre Traumatisierung**: traumaähnliche Reaktionen wie Intrusionen, Übererregung oder Vermeidung, die durch das Anhören traumatischer Erfahrungen anderer entstehen können.\n\nWarnzeichen bei sich selbst sind etwa anhaltende Erschöpfung, Zynismus gegenüber Ratsuchenden, Gedankenkreisen um Fälle in der Freizeit, Reizbarkeit, sozialer Rückzug, Schlafprobleme oder der Wunsch, Termine abzusagen.\n\nSelbstfürsorge ist daher **kein privater Luxus, sondern eine ethische Pflicht**: Nur wer selbst stabil ist, kann verantwortlich beraten. Bewährte Elemente sind:\n\n- **Begrenzung der Fallzahl** und Pausen zwischen Terminen,\n- **Rituale des Abschließens** nach dem Arbeitstag,\n- **Ausgleich** durch Bewegung, Erholung, Beziehungen und Tätigkeiten außerhalb des Berufs,\n- **Reflexion** eigener Motive und wunder Punkte,\n- **regelmäßige Supervision und Intervision**,\n- bei eigener Belastung: rechtzeitig **eigene Unterstützung** in Anspruch nehmen und gegebenenfalls die Arbeit vorübergehend reduzieren."
          },
          {
            typ: "truefalse",
            aussage: "Selbstfürsorge ist für Beratende eine Privatangelegenheit und hat mit der Qualität der Beratung nichts zu tun.",
            richtig: false,
            erklaerung: "Falsch. Erschöpfung, Zynismus oder sekundäre Traumatisierung beeinträchtigen Wahrnehmung, Empathie und Urteilsvermögen und können Ratsuchenden schaden. Selbstfürsorge ist daher Teil der berufsethischen Verantwortung."
          },
          {
            typ: "text",
            titel: "Supervision und Intervision",
            text: "**Supervision** ist eine Form der berufsbezogenen Beratung, in der Fachkräfte ihr professionelles Handeln mit einer dafür qualifizierten Person reflektieren. Sie dient der **Qualitätssicherung**, dem **Schutz der Ratsuchenden** und der **Entlastung der Beratenden**. In vielen Beratungsfeldern und Ethikrichtlinien gilt regelmäßige Supervision als professioneller Standard.\n\nUnterschieden werden unter anderem:\n\n- **Fallsupervision**: Besprechung konkreter Beratungsprozesse, etwa bei stockendem Verlauf, ethischen Fragen, starken eigenen Gefühlen oder Krisen.\n- **Teamsupervision**: Reflexion der Zusammenarbeit, Rollen und Konflikte in einem Team.\n- **Einzel- oder Gruppensupervision** je nach Setting.\n- **Balint-Gruppen**: nach dem Psychoanalytiker **Michael Balint** benannte Gruppen, in denen ursprünglich Ärztinnen und Ärzte die Beziehung zu ihren Patientinnen und Patienten reflektierten; das Format wird heute auch in anderen helfenden Berufen genutzt.\n\n**Intervision** bzw. **kollegiale Beratung** findet unter gleichrangigen Kolleginnen und Kollegen ohne externe Leitung statt, häufig nach einem festen Ablauf (Fallvorstellung, Klärungsfragen, Hypothesen und Ideen der Gruppe, Rückmeldung der fallgebenden Person). Sie ist eine wertvolle Ergänzung, ersetzt aber nicht in jedem Fall die Supervision.\n\nFür beide Formen gilt: Fälle werden **anonymisiert** besprochen, sodass die Ratsuchenden nicht identifizierbar sind. Ratsuchende sollten zu Beginn der Beratung darüber informiert werden, dass ihr Anliegen in anonymisierter Form in Supervision besprochen werden kann."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Formen der Reflexion ihrer Beschreibung zu.",
            paare: [
              ["Fallsupervision", "Reflexion eines konkreten Beratungsprozesses mit einer qualifizierten Supervisorin"],
              ["Teamsupervision", "Reflexion von Zusammenarbeit, Rollen und Konflikten in einem Team"],
              ["Intervision / kollegiale Beratung", "Strukturierte Fallbesprechung unter gleichrangigen Kolleginnen und Kollegen ohne externe Leitung"],
              ["Balint-Gruppe", "Gruppenformat zur Reflexion der Beziehung zwischen Helfenden und Hilfesuchenden, benannt nach Michael Balint"]
            ],
            erklaerung: "Die Formen ergänzen sich. Gemeinsam ist ihnen die Anonymisierung der Fälle und das Ziel, professionelles Handeln zu reflektieren und weiterzuentwickeln."
          },
          {
            typ: "luecke",
            text: "Den Begriff der Mitgefühlserschöpfung (compassion fatigue) prägte {{Charles Figley|Michael Balint|Aaron Antonovsky}}. In Supervision und Intervision werden Fälle grundsätzlich {{anonymisiert|namentlich|mit Fotos}} besprochen. Ratsuchende sollten {{zu Beginn der Beratung|erst nach Abschluss|gar nicht}} darüber informiert werden, dass ihr Anliegen in Supervision besprochen werden kann.",
            erklaerung: "Charles Figley prägte den Begriff compassion fatigue; Michael Balint gab den Balint-Gruppen ihren Namen, Aaron Antonovsky begründete die Salutogenese. Anonymisierung und frühzeitige Transparenz schützen das Vertrauen der Ratsuchenden."
          },
          {
            typ: "dialog",
            titel: "Kollegiales Gespräch über eine Grenzsituation",
            einleitung: "Konstruierte Situation: Ihre Kollegin, Frau R., Beraterin in derselben Praxisgemeinschaft, spricht Sie in der Mittagspause an. Sie wirkt erschöpft. Sie möchten ihr kollegial und verantwortungsvoll begegnen.",
            runden: [
              {
                klient: "Ich habe gerade eine Klientin, deren Geschichte mich nicht loslässt. Ich träume sogar davon. Aber das gehört wohl dazu, oder?",
                antworten: [
                  { text: "Ja, das gehört dazu. Da muss man durch.", gut: false, feedback: "Die Antwort normalisiert die Belastung so stark, dass sie übergangen wird. Wiederkehrende Träume über eine Klientin können ein Warnzeichen sein." },
                  { text: "Das klingt, als würde Sie dieser Fall sehr beschäftigen – bis in die Nacht hinein. Wie lange geht das schon so?", gut: true, feedback: "Gut. Sie nehmen die Belastung ernst, spiegeln sie und erkunden behutsam das Ausmaß, ohne zu dramatisieren." },
                  { text: "Erzählen Sie doch mal, was die Klientin genau erlebt hat.", gut: false, feedback: "Eine detaillierte Fallschilderung in der Mittagspause verletzt den Rahmen der Verschwiegenheit und kann die Kollegin zusätzlich belasten. Im Fokus sollte ihre eigene Belastung stehen." }
                ]
              },
              {
                klient: "Seit ein paar Wochen. Ich habe ihr auch schon meine private Handynummer gegeben, weil sie nachts oft Angst hat. Sie schreibt mir jetzt fast jeden Abend.",
                antworten: [
                  { text: "Das ist ein klarer Verstoß, das müsste ich eigentlich melden.", gut: false, feedback: "Die Reaktion ist vorwurfsvoll und wenig hilfreich. Es geht zunächst darum, die Kollegin zur Reflexion und zu angemessenen Schritten zu bewegen." },
                  { text: "Das ist sehr engagiert von Ihnen. Die Klientin braucht Sie offenbar.", gut: false, feedback: "Die Antwort bestärkt eine Grenzaufweichung, die sowohl der Kollegin als auch der Klientin schaden kann." },
                  { text: "Ich höre, wie sehr Sie ihr helfen möchten. Gleichzeitig scheint die Erreichbarkeit am Abend Sie selbst sehr zu belasten – und für die Klientin könnte eine verlässliche Notfallstruktur hilfreicher sein als Ihr privates Handy. Was meinen Sie?", gut: true, feedback: "Gut. Sie würdigen die Motivation, benennen die Grenzproblematik klar und zugleich respektvoll und richten den Blick auf eine bessere Lösung, etwa einen Notfallplan mit Krisendiensten und Telefonseelsorge." }
                ]
              },
              {
                klient: "Sie haben recht … Aber ich kann ihr doch jetzt nicht einfach sagen, dass sie mir nicht mehr schreiben soll.",
                antworten: [
                  { text: "Das wäre ein Schritt, der gut vorbereitet sein will, damit sie sich nicht zurückgewiesen fühlt. Wäre das ein Fall, den Sie in Ihre nächste Supervision mitnehmen könnten – oder vielleicht schon vorher eine Einzelsitzung vereinbaren?", gut: true, feedback: "Gut. Sie anerkennen die Schwierigkeit und verweisen auf den professionellen Rahmen der Supervision, in dem die Grenzsetzung sorgfältig vorbereitet werden kann." },
                  { text: "Doch, blockieren Sie die Nummer einfach heute Abend.", gut: false, feedback: "Ein abrupter Kontaktabbruch ohne Vorbereitung kann die Klientin, die nachts Angst hat, destabilisieren. Die Grenze sollte transparent und mit einer Alternative gesetzt werden." },
                  { text: "Dann lassen Sie es eben so, solange Sie es aushalten.", gut: false, feedback: "Die Antwort lässt die Kollegin mit einem wachsenden Problem allein und gefährdet langfristig sowohl ihre Gesundheit als auch die Beratung." }
                ]
              }
            ]
          },
          {
            typ: "karten",
            titel: "Grenzen und Selbstfürsorge",
            karten: [
              { vorne: "Mehrfachbeziehung", hinten: "Neben der Beratung bestehende private, berufliche, geschäftliche oder soziale Beziehung zu Ratsuchenden; gefährdet Rollenklarheit und Verschwiegenheit." },
              { vorne: "Abstinenzgebot", hinten: "Keine Befriedigung eigener Bedürfnisse auf Kosten der Ratsuchenden; sexuelle Kontakte sind ausnahmslos unzulässig." },
              { vorne: "§ 174c StGB", hinten: "Strafbarkeit sexueller Handlungen unter Missbrauch eines Beratungs-, Behandlungs- oder Betreuungsverhältnisses." },
              { vorne: "Compassion fatigue", hinten: "Von Charles Figley geprägter Begriff für Erschöpfung durch fortgesetzte empathische Zuwendung zu leidenden Menschen." },
              { vorne: "Sekundäre Traumatisierung", hinten: "Traumaähnliche Reaktionen durch das Anhören traumatischer Erfahrungen anderer." },
              { vorne: "Intervision", hinten: "Kollegiale Beratung unter Gleichrangigen nach festem Ablauf, ohne externe Leitung; Fälle werden anonymisiert." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Wie sorgen Sie derzeit für sich selbst in Ihrer beruflichen Tätigkeit? Welche Form der Supervision oder Intervision steht Ihnen zur Verfügung, und wie nutzen Sie sie?",
            hinweis: "Leitfragen: Woran merke ich, dass ich an meine Grenzen komme? Welche Rituale helfen mir, Arbeit und Freizeit zu trennen? In welchen Situationen neige ich dazu, Grenzen aufzuweichen? Wann habe ich zuletzt einen Fall in Supervision besprochen?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "multi",
        frage: "Welche Prinzipien gehören zu den vier Prinzipien nach Beauchamp und Childress? (Mehrere Antworten möglich)",
        optionen: [
          "Respekt vor der Autonomie",
          "Nichtschaden",
          "Effizienz",
          "Fürsorge (Wohltun)",
          "Gerechtigkeit"
        ],
        richtig: [0, 1, 3, 4],
        erklaerung: "Die vier Prinzipien sind Respekt vor der Autonomie, Nichtschaden, Fürsorge und Gerechtigkeit. Effizienz ist kein eigenständiges ethisches Prinzip in diesem Modell."
      },
      {
        typ: "truefalse",
        aussage: "Ohne Einwilligung der ratsuchenden Person darf eine Beraterin deren Angehörigen nicht einmal bestätigen, dass eine Beratung stattfindet – sofern keine Notstandssituation vorliegt.",
        richtig: true,
        erklaerung: "Richtig. Bereits die Tatsache der Beratung ist geschützt. Eine Offenbarung ist nur mit Einwilligung oder in gesetzlich bestimmten Ausnahmefällen wie dem rechtfertigenden Notstand zulässig."
      },
      {
        typ: "mc",
        frage: "Welche Anforderungen sollte eine Schweigepflichtentbindung erfüllen?",
        optionen: [
          "Sie sollte mündlich, allgemein und unbefristet sein.",
          "Sie sollte von Angehörigen unterschrieben werden.",
          "Sie gilt automatisch für alle Stellen, sobald eine Beratung beginnt.",
          "Sie sollte schriftlich, konkret hinsichtlich Empfänger, Inhalt und Zweck, freiwillig und widerrufbar sein."
        ],
        richtig: 3,
        erklaerung: "Eine wirksame und fachlich angemessene Entbindung ist konkret, freiwillig und widerrufbar; die Schriftform dient dem Nachweis. Pauschale oder von Dritten erteilte Entbindungen genügen nicht."
      },
      {
        typ: "mc",
        frage: "Warum unterliegen Informationen über das psychische Befinden von Ratsuchenden einem besonderen Schutz nach der DSGVO?",
        optionen: [
          "Weil sie zu den Gesundheitsdaten und damit zu den besonderen Kategorien personenbezogener Daten nach Art. 9 DSGVO gehören",
          "Weil die DSGVO nur für psychologische Daten gilt",
          "Weil sie nach Art. 28 DSGVO nicht gespeichert werden dürfen",
          "Weil sie grundsätzlich an die Aufsichtsbehörde gemeldet werden müssen"
        ],
        richtig: 0,
        erklaerung: "Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO, deren Verarbeitung nur unter engen Voraussetzungen, in der freien Beratung meist mit ausdrücklicher Einwilligung, zulässig ist. Art. 28 regelt die Auftragsverarbeitung."
      },
      {
        typ: "mc",
        frage: "Was ist nach § 1 Abs. 2 HeilprG unter Ausübung der Heilkunde zu verstehen?",
        optionen: [
          "Jede Beratung von Menschen in schwierigen Lebenslagen",
          "Jede berufs- oder gewerbsmäßige Tätigkeit zur Feststellung, Heilung oder Linderung von Krankheiten, Leiden oder Körperschäden bei Menschen",
          "Ausschließlich die Verordnung von Medikamenten",
          "Ausschließlich operative Eingriffe"
        ],
        richtig: 1,
        erklaerung: "Die gesetzliche Definition umfasst Feststellung, Heilung oder Linderung von Krankheiten, Leiden oder Körperschäden. Beratung bei Lebensfragen gesunder Menschen fällt in der Regel nicht darunter; Heilkunde ist aber weit mehr als Medikamente oder Operationen."
      },
      {
        typ: "multi",
        frage: "Welche Verhaltensweisen helfen Beratenden ohne Heilkundeerlaubnis, die Grenze zur Heilkunde einzuhalten? (Mehrere Antworten möglich)",
        optionen: [
          "Keine Diagnosen psychischer Störungen stellen",
          "Auf der Website „Therapie bei Depression“ anbieten",
          "Bei Hinweisen auf Erkrankungen eine ärztliche oder psychotherapeutische Abklärung empfehlen und dies dokumentieren",
          "Im Beratungsvertrag darauf hinweisen, dass die Beratung keine Behandlung ersetzt",
          "Ratsuchenden empfehlen, verordnete Medikamente abzusetzen, wenn die Beratung gut läuft"
        ],
        richtig: [0, 2, 3],
        erklaerung: "Verzicht auf Diagnosen, Empfehlung und Dokumentation von Abklärung sowie klare Aufklärung helfen, die Grenze einzuhalten. Werbung mit der Behandlung von Krankheiten und Empfehlungen zu Medikamenten überschreiten die Grenze und können schaden."
      },
      {
        typ: "truefalse",
        aussage: "Sexuelle Kontakte zu Ratsuchenden sind berufsethisch zulässig, wenn die Initiative eindeutig von der ratsuchenden Person ausgeht und diese erwachsen ist.",
        richtig: false,
        erklaerung: "Falsch. Sexuelle Kontakte zu Ratsuchenden sind ausnahmslos unzulässig. Die Verantwortung liegt immer bei der beratenden Person, weil Machtgefälle und emotionale Abhängigkeit eine freie Entscheidung infrage stellen. Unter den Voraussetzungen des § 174c StGB sind sie zudem strafbar."
      },
      {
        typ: "mc",
        frage: "Was kennzeichnet Intervision im Unterschied zur Supervision?",
        optionen: [
          "Sie wird immer von einer externen, besonders qualifizierten Leitung durchgeführt.",
          "Sie dient ausschließlich der Konfliktlösung im Team.",
          "Sie findet unter gleichrangigen Kolleginnen und Kollegen ohne externe Leitung statt.",
          "Sie ist nur mit nicht anonymisierten Fällen sinnvoll."
        ],
        richtig: 2,
        erklaerung: "Intervision bzw. kollegiale Beratung erfolgt unter Gleichrangigen nach einem festen Ablauf ohne externe Leitung. Supervision wird von einer qualifizierten Person geleitet. In beiden Formen werden Fälle anonymisiert besprochen."
      }
    ]
  }


]);
