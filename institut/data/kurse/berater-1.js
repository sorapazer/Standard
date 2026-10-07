/* Zertifikatsprogramm „Psychologische Beratung“ · Teil 1: Module B1–B4 */
window.KURS_MODULE = (window.KURS_MODULE || []).concat([

  /* =========================================================
     B1 · Psychologische Grundlagen
     ========================================================= */
  {
    kurs: "berater",
    id: "B1",
    titel: "Psychologische Grundlagen",
    beschreibung: "Das Modul vermittelt das psychologische Grundwissen, auf dem jede seriöse Beratung aufbaut: wie Emotionen entstehen und reguliert werden, was Menschen antreibt, wie sie denken und lernen, wie sich Persönlichkeit beschreiben lässt und wie sich Menschen über die Lebensspanne entwickeln. Im Mittelpunkt steht stets die Frage, was dieses Wissen für das Verstehen und Begleiten ratsuchender Menschen bedeutet.",
    lernziele: [
      "Sie können Emotionen als Mehrkomponentenprozesse beschreiben und Strategien der Emotionsregulation nach dem Prozessmodell unterscheiden.",
      "Sie können die Selbstbestimmungstheorie mit ihren drei psychologischen Grundbedürfnissen und dem Kontinuum der Verhaltensregulation erläutern.",
      "Sie können zentrale Lernformen sowie typische kognitive Verzerrungen erkennen und auf Beratungssituationen beziehen.",
      "Sie können das Fünf-Faktoren-Modell der Persönlichkeit darstellen und seine Grenzen benennen.",
      "Sie können Grundannahmen der Bindungstheorie und der Entwicklungspsychologie der Lebensspanne für die Beratungspraxis nutzen."
    ],
    lektionen: [
      /* ---------- B1-1 ---------- */
      {
        id: "B1-1",
        titel: "Emotionen verstehen und regulieren",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Was ist eine Emotion?",
            text: "Im Alltag sprechen wir von Gefühlen, als handle es sich um einen inneren Zustand, der einfach „da“ ist. Die Emotionspsychologie beschreibt Emotionen dagegen als **zeitlich begrenzte, koordinierte Reaktionsprozesse** auf ein Ereignis, das für eine Person bedeutsam ist. Diese Prozesse umfassen mehrere Komponenten, die eng zusammenwirken:\n\n- **Subjektives Erleben** – das, was wir als Gefühl wahrnehmen und benennen\n- **Kognitive Bewertung** – die Einschätzung, was das Ereignis für mich bedeutet\n- **Physiologische Aktivierung** – etwa Herzschlag, Atmung, Muskelspannung\n- **Ausdruck** – Mimik, Stimme, Körperhaltung\n- **Handlungstendenz** – der Impuls, sich zu nähern, zu fliehen, anzugreifen oder sich zurückzuziehen\n\nKlaus Scherer hat diese Sichtweise in seinem Komponenten-Prozess-Modell ausgearbeitet. Von Emotionen abzugrenzen sind **Stimmungen**, die länger andauern, weniger intensiv sind und oft keinen klaren Auslöser haben, sowie **Affekte** als Oberbegriff für gefühlsartige Zustände.\n\nFür die Beratung ist diese Unterscheidung praktisch bedeutsam: Wer weiß, dass eine Emotion aus mehreren Komponenten besteht, kann an verschiedenen Stellen ansetzen – bei der Bewertung, beim Körper, beim Ausdruck oder beim Verhalten."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie den Komponenten einer Emotion das passende Beispiel aus einer Prüfungssituation zu.",
            paare: [
              ["Kognitive Bewertung", "„Wenn ich hier durchfalle, verliere ich meinen Ausbildungsplatz.“"],
              ["Physiologische Aktivierung", "Herzrasen und feuchte Hände"],
              ["Ausdruck", "Angespannter Gesichtsausdruck, leise Stimme"],
              ["Handlungstendenz", "Der Impuls, den Raum zu verlassen"],
              ["Subjektives Erleben", "„Ich fühle mich ängstlich und unter Druck.“"]
            ],
            erklaerung: "Alle fünf Komponenten gehören zu einer einzigen Angstepisode. Die Bewertung („Was bedeutet das für mich?“) stößt die übrigen Komponenten an, die sich gegenseitig verstärken können. Deshalb lassen sich Emotionen über mehrere Zugänge beeinflussen."
          },
          {
            typ: "text",
            titel: "Bewertung als Schlüssel: Appraisal-Theorien",
            text: "Warum reagieren zwei Menschen auf dasselbe Ereignis mit völlig unterschiedlichen Gefühlen? Die **Bewertungstheorien (Appraisal-Theorien)** geben eine Antwort: Nicht das Ereignis selbst, sondern seine **Bewertung** durch die Person bestimmt die Emotion.\n\nRichard Lazarus unterschied in seinem transaktionalen Stressmodell zwei Bewertungsschritte:\n\n- **Primäre Bewertung:** Ist das Ereignis für mich relevant – und wenn ja, ist es positiv, bedrohlich, schädigend oder eine Herausforderung?\n- **Sekundäre Bewertung:** Welche Möglichkeiten habe ich, damit umzugehen? Reichen meine Ressourcen aus?\n\nStress entsteht nach Lazarus dann, wenn Anforderungen als die eigenen Bewältigungsmöglichkeiten übersteigend erlebt werden. Eine Kündigung kann so für die eine Person Verlust und Verzweiflung bedeuten, für eine andere Erleichterung oder eine Herausforderung.\n\nNeben den Bewertungstheorien gibt es Ansätze, die eine kleine Zahl kulturübergreifend erkennbarer **Basisemotionen** annehmen. Paul Ekman beschrieb unter anderem Freude, Trauer, Angst, Ärger, Ekel und Überraschung, deren Gesichtsausdruck in vielen Kulturen wiedererkannt wird. Diese Annahme ist in der Forschung allerdings umstritten; konstruktivistische Ansätze betonen stärker die Rolle von Kontext, Sprache und Lernerfahrung.\n\nFür die Beratung folgt daraus: Gefühle sind **verständlich**, wenn man die Bewertung kennt, die ihnen zugrunde liegt. Die Frage „Was bedeutet diese Situation für Sie?“ öffnet oft mehr als die Frage „Was ist passiert?“."
          },
          {
            typ: "mc",
            frage: "Eine Klientin erzählt, ihre Abteilung werde umstrukturiert. Sie sagt: „Ich habe keine Ahnung, wie ich das mit meinen Kindern und den neuen Arbeitszeiten schaffen soll.“ Welche Bewertung nach Lazarus steht hier im Vordergrund?",
            optionen: [
              "Die primäre Bewertung, weil sie das Ereignis als irrelevant einstuft",
              "Die sekundäre Bewertung, weil sie ihre Bewältigungsmöglichkeiten als unzureichend einschätzt",
              "Eine Basisemotion, weil Angst kulturübergreifend vorkommt",
              "Eine Neubewertung, weil sie die Situation bereits positiv umdeutet"
            ],
            richtig: 1,
            erklaerung: "Die Klientin hat die Situation bereits als relevant und belastend eingestuft (primäre Bewertung) und fragt sich nun, ob ihre Ressourcen ausreichen – das ist die sekundäre Bewertung. Von Irrelevanz oder positiver Umdeutung ist keine Rede; der Hinweis auf Basisemotionen beschreibt keinen Bewertungsschritt."
          },
          {
            typ: "text",
            titel: "Funktionen von Emotionen",
            text: "Emotionen sind keine Störungen der Vernunft, sondern erfüllen wichtige **Funktionen**. Sie bereiten den Organismus schnell auf Handlungen vor, lenken die Aufmerksamkeit auf das Bedeutsame und teilen anderen Menschen mit, wie es uns geht.\n\n- **Angst** signalisiert Gefahr und mobilisiert Schutzverhalten.\n- **Ärger** zeigt an, dass ein Ziel blockiert oder eine Grenze verletzt wurde, und mobilisiert Energie zur Durchsetzung.\n- **Trauer** begleitet Verlust, verlangsamt, lädt zum Rückzug und zugleich zur Unterstützung durch andere ein.\n- **Scham** reguliert soziale Zugehörigkeit und signalisiert, dass man gegen Normen verstoßen haben könnte.\n- **Freude** verstärkt Verhalten und fördert Bindung.\n\nBarbara Fredrickson hat mit ihrer **Broaden-and-Build-Theorie** beschrieben, dass positive Emotionen das Denk- und Handlungsrepertoire erweitern und langfristig persönliche Ressourcen aufbauen können.\n\nProblematisch werden Emotionen meist nicht durch ihr Auftreten, sondern wenn sie in Intensität, Dauer oder Anlass **nicht mehr zur Situation passen** oder wenn Menschen sie dauerhaft unterdrücken. In der Beratung lohnt es sich daher, Gefühle zunächst als **sinnvolle Signale** zu würdigen: Wofür steht dieser Ärger? Was schützt diese Angst? Was zeigt diese Trauer über das, was wichtig war?"
          },
          {
            typ: "luecke",
            text: "Ärger zeigt typischerweise an, dass ein {{Ziel blockiert oder eine Grenze verletzt|Verlust eingetreten|Normverstoß begangen}} wurde. Nach der Broaden-and-Build-Theorie {{erweitern|verengen|neutralisieren}} positive Emotionen das Denk- und Handlungsrepertoire.",
            erklaerung: "Ärger mobilisiert Energie, um Hindernisse zu überwinden oder Grenzen zu schützen. Verlust ist das Thema der Trauer, ein eigener Normverstoß das der Scham. Fredrickson beschreibt, dass positive Emotionen den Möglichkeitsraum erweitern, während etwa Angst die Aufmerksamkeit eher verengt."
          },
          {
            typ: "text",
            titel: "Emotionsregulation: das Prozessmodell nach Gross",
            text: "Unter **Emotionsregulation** versteht man alle Prozesse, mit denen Menschen beeinflussen, welche Emotionen sie haben, wann sie sie haben und wie sie sie erleben und ausdrücken. James Gross hat ein einflussreiches **Prozessmodell** vorgelegt, das fünf Ansatzpunkte entlang der Entstehung einer Emotion unterscheidet:\n\n1. **Situationsauswahl** – bestimmte Situationen aufsuchen oder meiden\n2. **Situationsmodifikation** – die Situation aktiv verändern\n3. **Aufmerksamkeitslenkung** – den Fokus verschieben, etwa durch Ablenkung\n4. **Kognitive Veränderung** – die Bedeutung der Situation neu bewerten (Neubewertung, engl. *reappraisal*)\n5. **Reaktionsmodulation** – den Ausdruck oder die körperliche Reaktion beeinflussen, etwa durch Unterdrücken, Atemtechniken oder Bewegung\n\nDie ersten vier Strategien setzen an, **bevor** die Emotion voll entfaltet ist; die fünfte setzt an der bereits laufenden Reaktion an.\n\nIn der Forschung zeigt sich wiederholt, dass **Neubewertung** im Durchschnitt mit günstigeren Folgen für Wohlbefinden und Beziehungen verbunden ist als das dauerhafte **Unterdrücken** des Gefühlsausdrucks. Allerdings ist keine Strategie per se gut oder schlecht: Entscheidend ist die **Flexibilität**, eine zur Situation passende Strategie wählen zu können. Auch Vermeidung kann kurzfristig sinnvoll sein, wird aber zum Problem, wenn sie das Leben dauerhaft einengt."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Verhaltensweisen den Strategien des Prozessmodells zu.",
            kategorien: ["Situationsauswahl/-modifikation", "Aufmerksamkeitslenkung", "Kognitive Veränderung", "Reaktionsmodulation"],
            elemente: [
              { text: "Eine Pflegekraft bittet darum, das schwierige Gespräch zu zweit statt allein zu führen.", kat: 0 },
              { text: "Ein Vater geht der Familienfeier mit dem streitlustigen Onkel aus dem Weg.", kat: 0 },
              { text: "Eine Lehrerin konzentriert sich während der Elternbeschwerde bewusst auf ihre Notizen.", kat: 1 },
              { text: "Ein Klient hört im Wartezimmer Musik, um nicht an die Diagnose zu denken.", kat: 1 },
              { text: "Eine Bewerberin sagt sich: „Das Gespräch ist auch eine Chance, die Firma kennenzulernen.“", kat: 2 },
              { text: "Ein Teamleiter deutet Kritik als Hinweis, der ihm hilft, besser zu werden.", kat: 2 },
              { text: "Eine Sozialarbeiterin atmet vor dem Hausbesuch mehrmals langsam aus.", kat: 3 },
              { text: "Ein Mitarbeiter lässt sich seinen Ärger im Meeting nicht anmerken.", kat: 3 }
            ],
            erklaerung: "Situationsauswahl und -modifikation verändern die Situation selbst, Aufmerksamkeitslenkung den Fokus innerhalb der Situation, kognitive Veränderung deren Bedeutung. Atemregulation und das Verbergen des Ärgers setzen an der bereits laufenden Reaktion an und gehören zur Reaktionsmodulation."
          },
          {
            typ: "truefalse",
            aussage: "Nach dem Forschungsstand ist das konsequente Unterdrücken des Gefühlsausdrucks die gesündeste Form der Emotionsregulation, weil es Konflikte vermeidet.",
            richtig: false,
            erklaerung: "Habituelles Unterdrücken ist im Durchschnitt mit ungünstigeren Folgen für Wohlbefinden und Beziehungen verbunden als Neubewertung. Kurzfristig kann Unterdrücken in bestimmten Situationen angemessen sein – entscheidend ist eine flexible, situationsangemessene Regulation."
          },
          {
            typ: "text",
            titel: "Emotionen in der Beratung: Konsequenzen für die Praxis",
            text: "Was folgt aus der Emotionspsychologie für das Beratungsgespräch? Mehrere Grundsätze haben sich bewährt:\n\n- **Gefühle benennen helfen.** Viele Ratsuchende erleben einen diffusen Druck. Das Benennen („Das klingt nach großer Enttäuschung“) kann bereits entlastend wirken; in der Forschung wird dieser Effekt als *affect labeling* diskutiert.\n- **Bewertungen erkunden.** Hinter einer starken Emotion stehen oft Bewertungen, die der Person selbst nicht voll bewusst sind. Fragen wie „Was befürchten Sie, was passieren könnte?“ machen sie zugänglich.\n- **Emotionen validieren, nicht bewerten.** Die Botschaft „Es ist nachvollziehbar, dass Sie so empfinden“ bedeutet nicht, dass jedes Verhalten gutgeheißen wird. Gefühl und Handlung sind zu unterscheiden.\n- **Regulationsrepertoire erweitern.** Ratsuchende nutzen oft nur ein oder zwei Strategien. Gemeinsam lassen sich Alternativen entlang des Prozessmodells erarbeiten.\n- **Eigene Emotionen wahrnehmen.** Auch Beratende reagieren emotional – mit Mitgefühl, Ungeduld, Hilflosigkeit oder Ärger. Diese Reaktionen sind wertvolle Informationen, sollten aber reflektiert und gegebenenfalls in Supervision besprochen werden.\n\nSchließlich gilt: Sehr intensive, lang anhaltende oder das Funktionieren stark beeinträchtigende Gefühlszustände können Hinweise auf eine psychische Störung sein. Sie gehören dann in fachärztliche oder psychotherapeutische Abklärung – ein Thema, das in Modul B2 vertieft wird."
          },
          {
            typ: "merke",
            text: "Gefühle sind Signale, keine Fehler. Wer die Bewertung hinter einem Gefühl versteht, versteht das Gefühl – und findet Ansatzpunkte für Veränderung."
          },
          {
            typ: "fall",
            titel: "Ärger im Elterngespräch",
            fall: "Konstruierte Lehrvignette: Herr K., 41 Jahre, kommt in die Erziehungsberatung. Er berichtet aufgebracht, die Lehrerin seines Sohnes habe ihn vor anderen Eltern „bloßgestellt“, weil sie die Hausaufgabenprobleme seines Sohnes angesprochen habe. Er spricht laut, ballt die Fäuste und sagt: „Da gehe ich nicht mehr hin.“",
            frage: "Welche Reaktion der beratenden Person ist aus emotionspsychologischer Sicht am hilfreichsten?",
            optionen: [
              "„Beruhigen Sie sich bitte erst einmal, so kommen wir nicht weiter.“",
              "„Die Lehrerin hat sicher nur das Beste für Ihren Sohn gewollt.“",
              "„Sie haben sich vor den anderen Eltern bloßgestellt gefühlt – das war offenbar sehr kränkend für Sie.“",
              "„Dann gehen Sie eben nicht mehr hin, das ist Ihr gutes Recht.“"
            ],
            richtig: 2,
            erklaerung: "Die dritte Antwort benennt das Gefühl und die dahinterliegende Bewertung (Bloßstellung, Kränkung) und validiert sie, ohne das angekündigte Vermeidungsverhalten zu bestätigen. Die Aufforderung zur Beruhigung übergeht das Gefühl, die Verteidigung der Lehrerin wirkt entwertend, und die Bestätigung des Rückzugs verstärkt eine Vermeidung, die dem Sohn langfristig schaden kann."
          },
          {
            typ: "reflexion",
            frage: "Welche Emotion fällt es Ihnen in Gesprächen mit anderen am schwersten auszuhalten – und welche Regulationsstrategie nutzen Sie dann typischerweise?",
            hinweis: "Denken Sie an eine konkrete Situation aus Ihrem Berufsalltag. Welche Bewertung lag Ihrer eigenen Reaktion zugrunde? Welche alternative Strategie aus dem Prozessmodell wäre denkbar gewesen?"
          }
        ]
      },

      /* ---------- B1-2 ---------- */
      {
        id: "B1-2",
        titel: "Motivation und Selbstbestimmung",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Was Menschen antreibt",
            text: "**Motivation** bezeichnet in der Psychologie die Prozesse, die Verhalten **anregen, ausrichten und aufrechterhalten**. Sie erklärt, warum jemand ein Ziel verfolgt, wie intensiv er sich anstrengt und wie lange er durchhält.\n\nTraditionell unterscheidet man **Motive** als relativ überdauernde Bereitschaften – etwa das Leistungs-, Macht- oder Anschlussmotiv, wie sie David McClelland beschrieben hat – von der aktuellen **Motivation** in einer konkreten Situation. Diese ergibt sich aus dem Zusammenspiel von Person und Situation.\n\nEin klassisches Erklärungsmodell ist das **Erwartung-mal-Wert-Prinzip**: Menschen strengen sich besonders an, wenn sie erwarten, ein Ziel erreichen zu können (Erwartung), und wenn ihnen das Ziel wichtig ist (Wert). Fällt einer der beiden Faktoren weg, sinkt die Motivation stark – auch ein hoch bewertetes Ziel wird nicht verfolgt, wenn es als unerreichbar gilt.\n\nAußerdem unterscheidet man **Annäherungsmotivation** (auf etwas Erwünschtes hin) von **Vermeidungsmotivation** (von etwas Unerwünschtem weg). Vermeidungsziele wie „nicht mehr so gestresst sein“ sind oft weniger handlungsleitend als Annäherungsziele wie „zweimal pro Woche einen ruhigen Abend für mich haben“.\n\nIn der Beratung begegnet Motivation selten als „vorhanden“ oder „nicht vorhanden“. Häufiger zeigt sich ein vielschichtiges Gefüge aus Wünschen, Befürchtungen, Erwartungen und Werten – mit dem man arbeiten kann."
          },
          {
            typ: "mc",
            frage: "Ein Klient möchte unbedingt seinen Schulabschluss nachholen, meldet sich aber nicht zum Kurs an. Er sagt: „Ich habe das früher schon nicht geschafft, das wird wieder nichts.“ Welcher Faktor des Erwartung-mal-Wert-Prinzips ist hier vor allem beeinträchtigt?",
            optionen: [
              "Der Wert, weil ihm der Abschluss offenbar gleichgültig ist",
              "Die Annäherungsmotivation, weil er nur Vermeidungsziele hat",
              "Die Erwartung, weil er nicht an einen Erfolg glaubt",
              "Das Anschlussmotiv, weil ihm soziale Kontakte fehlen"
            ],
            richtig: 2,
            erklaerung: "Der Abschluss ist ihm wichtig (hoher Wert), doch seine Erfolgserwartung ist niedrig. Nach dem multiplikativen Prinzip reicht ein niedriger Faktor, um die Motivation insgesamt zu senken. Beratung würde hier an der Erwartung ansetzen, etwa durch kleine Erfolgserfahrungen und Unterstützung."
          },
          {
            typ: "text",
            titel: "Die Selbstbestimmungstheorie nach Deci und Ryan",
            text: "Die **Selbstbestimmungstheorie** (Self-Determination Theory, SDT) wurde von Edward Deci und Richard Ryan ab den 1980er-Jahren entwickelt und gehört heute zu den am besten untersuchten Motivationstheorien. Sie geht davon aus, dass Menschen eine natürliche Tendenz zu Wachstum, Integration und Entfaltung haben – vorausgesetzt, ihre **drei grundlegenden psychologischen Bedürfnisse** werden erfüllt:\n\n- **Autonomie:** das Erleben, das eigene Handeln selbst zu bestimmen und hinter ihm zu stehen. Autonomie bedeutet nicht Unabhängigkeit von anderen, sondern Freiwilligkeit und innere Zustimmung.\n- **Kompetenz:** das Erleben, wirksam zu sein und Herausforderungen bewältigen zu können.\n- **Soziale Eingebundenheit:** das Erleben, mit anderen verbunden zu sein, sich zugehörig und angenommen zu fühlen.\n\nNach der SDT sind diese Bedürfnisse **universell**, auch wenn sie kulturell unterschiedlich ausgedrückt und befriedigt werden. Werden sie in Familie, Schule, Arbeit oder Beratung unterstützt, fördert das Wohlbefinden, Ausdauer und Qualität des Engagements. Werden sie dauerhaft frustriert – durch Kontrolle, Abwertung oder Zurückweisung –, steigt das Risiko für Rückzug, Widerstand und psychische Belastung.\n\nFür die Beratung ist das unmittelbar relevant: Eine beratende Haltung, die **Wahlmöglichkeiten** lässt, **Fortschritte sichtbar** macht und eine **tragfähige Beziehung** bietet, spricht alle drei Bedürfnisse an."
          },
          {
            typ: "zuordnen",
            frage: "Welches Grundbedürfnis nach der Selbstbestimmungstheorie wird durch die jeweilige Beraterintervention besonders angesprochen?",
            paare: [
              ["„Welche der beiden Möglichkeiten passt für Sie besser?“", "Autonomie"],
              ["„Sie haben es diese Woche dreimal geschafft, früher ins Bett zu gehen – wie ist Ihnen das gelungen?“", "Kompetenz"],
              ["„Ich bin froh, dass Sie heute gekommen sind, und ich begleite Sie gern dabei.“", "Soziale Eingebundenheit"]
            ],
            erklaerung: "Wahlmöglichkeiten stärken das Autonomieerleben, das Sichtbarmachen eigener Erfolge das Kompetenzerleben und eine wertschätzende, zugewandte Beziehung die soziale Eingebundenheit. Gute Beratung spricht meist alle drei Bedürfnisse zugleich an."
          },
          {
            typ: "text",
            titel: "Intrinsisch, extrinsisch – und dazwischen",
            text: "Häufig wird Motivation in **intrinsisch** (aus Freude an der Tätigkeit selbst) und **extrinsisch** (wegen äußerer Konsequenzen) eingeteilt. Die Selbstbestimmungstheorie differenziert genauer. Sie beschreibt ein **Kontinuum der Verhaltensregulation** von fremd- bis selbstbestimmt:\n\n- **Amotivation:** keine Handlungsabsicht, oft verbunden mit dem Gefühl, ohnehin nichts bewirken zu können.\n- **Externale Regulation:** Handeln wegen Belohnung oder Strafe („Ich gehe zur Beratung, weil das Jobcenter es verlangt.“).\n- **Introjizierte Regulation:** Handeln aus innerem Druck, Schuld oder Stolz („Ich muss das schaffen, sonst bin ich ein Versager.“).\n- **Identifizierte Regulation:** Handeln, weil man den Wert der Sache für sich erkennt („Bewegung ist mir wichtig für meine Gesundheit.“).\n- **Integrierte Regulation:** Das Verhalten ist mit den eigenen Werten und dem Selbstbild stimmig verbunden.\n- **Intrinsische Motivation:** Handeln aus Interesse und Freude an der Tätigkeit selbst.\n\nWichtig ist: Auch extrinsische Motivation kann **weitgehend selbstbestimmt** sein, wenn eine Person sich mit dem Ziel identifiziert. Viele notwendige Tätigkeiten – Medikamente einnehmen, Bewerbungen schreiben, Konflikte ansprechen – machen keinen Spaß, können aber als persönlich wichtig erlebt werden.\n\nDie SDT nennt den Prozess, in dem äußere Anforderungen zu eigenen werden, **Internalisierung**. Beratung kann sie unterstützen, indem sie nach den **persönlichen Gründen** fragt, statt Gründe vorzugeben."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Formen der Verhaltensregulation nach der Selbstbestimmungstheorie in die Reihenfolge von „am wenigsten“ bis „am stärksten selbstbestimmt“.",
            elemente: [
              "Amotivation",
              "Externale Regulation",
              "Introjizierte Regulation",
              "Identifizierte Regulation",
              "Integrierte Regulation",
              "Intrinsische Motivation"
            ],
            erklaerung: "Das Kontinuum reicht von fehlender Handlungsabsicht über Regulation durch äußere Konsequenzen und inneren Druck bis zu Formen, bei denen das Verhalten als persönlich wichtig erlebt, mit dem Selbst integriert oder um seiner selbst willen ausgeführt wird."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Aussagen von Ratsuchenden der passenden Regulationsform zu.",
            kategorien: ["Externale Regulation", "Introjizierte Regulation", "Identifizierte Regulation"],
            elemente: [
              { text: "„Ich komme nur, weil das Gericht es angeordnet hat.“", kat: 0 },
              { text: "„Wenn ich nicht abnehme, streicht mir die Kasse den Zuschuss.“", kat: 0 },
              { text: "„Ich würde mich schämen, wenn meine Eltern erfahren, dass ich abgebrochen habe.“", kat: 1 },
              { text: "„Eine gute Mutter muss das einfach aushalten.“", kat: 1 },
              { text: "„Ich will mit dem Trinken aufhören, weil ich meine Enkel aufwachsen sehen möchte.“", kat: 2 },
              { text: "„Die Weiterbildung ist anstrengend, aber sie bringt mich meinem Berufsziel näher.“", kat: 2 }
            ],
            erklaerung: "Extern reguliert ist Verhalten, das an äußere Konsequenzen gebunden ist. Introjiziert ist es, wenn innerer Druck, Scham oder ein „Muss“ antreibt. Identifiziert ist es, wenn die Person einen eigenen, bejahten Grund nennt – dies ist die stabilste der drei Formen."
          },
          {
            typ: "text",
            titel: "Untergrabung und Förderung von Motivation",
            text: "Eine frühe und vielbeachtete Beobachtung aus der Forschung von Deci ist der sogenannte **Untergrabungseffekt** (*undermining effect*): Unter bestimmten Bedingungen kann eine an die Tätigkeit geknüpfte, als **kontrollierend** erlebte Belohnung die intrinsische Motivation für eine zuvor interessante Tätigkeit verringern. Belohnungen sind also nicht grundsätzlich schädlich – problematisch wird es, wenn sie das Erleben verschieben von „Ich tue das, weil es mich interessiert“ zu „Ich tue das, weil ich etwas dafür bekomme“. Informierendes, ehrliches Feedback über Kompetenz kann dagegen motivierend wirken.\n\nAus der SDT lassen sich Merkmale eines **autonomieunterstützenden Stils** ableiten, die sich in Erziehung, Schule, Führung und Gesundheitsversorgung als förderlich erwiesen haben:\n\n- die Perspektive der anderen Person ernst nehmen\n- Wahlmöglichkeiten anbieten, wo sie bestehen\n- Begründungen geben, wenn etwas nicht verhandelbar ist\n- kontrollierende Sprache vermeiden („Sie müssen …“, „Sie sollten …“)\n- negative Gefühle über Anforderungen anerkennen\n\nIn der Beratung bedeutet das: Auch in einem **Zwangskontext** – etwa bei gerichtlich angeordneter Beratung – lassen sich Spielräume für Selbstbestimmung finden. Die Frage „Wenn Sie schon hier sein müssen: Was könnte diese Zeit für Sie nützlich machen?“ ist ein Beispiel dafür."
          },
          {
            typ: "truefalse",
            aussage: "Nach der Selbstbestimmungstheorie bedeutet Autonomie, möglichst unabhängig von anderen Menschen zu handeln.",
            richtig: false,
            erklaerung: "In der SDT meint Autonomie das Erleben von Freiwilligkeit und innerer Zustimmung zum eigenen Handeln. Man kann sehr autonom handeln und zugleich auf andere angewiesen sein oder sich bewusst nach ihnen richten. Autonomie und soziale Eingebundenheit ergänzen sich."
          },
          {
            typ: "multi",
            frage: "Welche Formulierungen entsprechen einem autonomieunterstützenden Beratungsstil? (Mehrere Antworten möglich)",
            optionen: [
              "„Sie sollten wirklich endlich mit dem Rauchen aufhören.“",
              "„Was wäre für Sie ein guter Grund, etwas zu verändern – falls es einen gibt?“",
              "„Ich kann verstehen, dass Sie die Auflage als lästig empfinden. Die Teilnahme ist Voraussetzung für die Rückkehr an den Arbeitsplatz.“",
              "„Wenn Sie nicht mitmachen, kann ich Ihnen auch nicht helfen.“",
              "„Es gibt mehrere Wege – möchten Sie, dass ich Ihnen einige vorstelle?“"
            ],
            richtig: [1, 2, 4],
            erklaerung: "Autonomieunterstützend sind Fragen nach eigenen Gründen, das Anerkennen negativer Gefühle verbunden mit einer Begründung für nicht verhandelbare Vorgaben sowie das Anbieten von Wahlmöglichkeiten mit Erlaubnisfrage. „Sie sollten …“ ist kontrollierende Sprache; die Drohung mit Hilfeentzug setzt Druck statt Motivation."
          },
          {
            typ: "text",
            titel: "Motivation, Sinn und Werte",
            text: "Die Selbstbestimmungstheorie berührt sich an einer wichtigen Stelle mit sinnzentrierten Ansätzen: Die stabilsten Formen der Motivation sind jene, bei denen eine Person **Werte** erkennt, die sie selbst bejaht. Viktor Frankl stellte den **Willen zum Sinn** als grundlegende menschliche Motivation heraus – das Bestreben, im eigenen Leben etwas Sinnvolles zu verwirklichen. Auch wenn SDT und Logotherapie unterschiedliche Theorietraditionen sind, treffen sie sich in der Beobachtung, dass Menschen nicht nur durch Lust und Unlust oder äußere Anreize, sondern durch **Bedeutung** bewegt werden.\n\nIn der Forschung zu **Lebenszielen** unterscheiden Ryan und Kollegen intrinsische Ziele (etwa persönliches Wachstum, Beziehungen, Beitrag zur Gemeinschaft) von extrinsischen Zielen (etwa Reichtum, Ansehen, äußeres Erscheinungsbild). Ein starker Vorrang extrinsischer Lebensziele geht in Studien tendenziell mit geringerem Wohlbefinden einher.\n\nFür die Beratung heißt das:\n\n- nach dem **Wofür** fragen, nicht nur nach dem Was\n- die Werte hinter Zielen erkunden („Was wäre dann anders? Was wäre Ihnen daran wichtig?“)\n- Ambivalenz ernst nehmen: Oft konkurrieren mehrere bejahte Werte miteinander\n\nDiese Perspektive wird in Modul B3 (Motivational Interviewing) und B4 (Zielklärung) praktisch vertieft."
          },
          {
            typ: "merke",
            text: "Motivation lässt sich nicht von außen „einpflanzen“. Beratung kann aber Bedingungen schaffen, unter denen Menschen ihre eigenen Gründe entdecken: Wahlfreiheit, Kompetenzerleben und eine tragfähige Beziehung."
          },
          {
            typ: "reflexion",
            frage: "Denken Sie an eine Veränderung, die Sie selbst erfolgreich umgesetzt haben. Welche Form der Regulation stand am Anfang, welche am Ende?",
            hinweis: "War die Veränderung zunächst von außen angestoßen? Wann und wodurch wurde sie zu Ihrer eigenen? Welche Rolle spielten Autonomie, Kompetenz und Eingebundenheit?"
          }
        ]
      },

      /* ---------- B1-3 ---------- */
      {
        id: "B1-3",
        titel: "Kognition, Lernen und Persönlichkeit",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Lernen durch Verknüpfung: klassische und operante Konditionierung",
            text: "Lernen bezeichnet in der Psychologie eine **relativ dauerhafte Veränderung von Verhalten oder Verhaltenspotenzial aufgrund von Erfahrung**. Zwei grundlegende Formen wurden früh erforscht.\n\nBei der **klassischen Konditionierung**, beschrieben von Iwan Pawlow, wird ein ursprünglich neutraler Reiz mit einem Reiz gekoppelt, der automatisch eine Reaktion auslöst. Nach wiederholter Kopplung löst der vormals neutrale Reiz die Reaktion selbst aus. So kann etwa der Geruch eines Krankenhauses Übelkeit auslösen, wenn er mit belastenden Behandlungen verbunden war. Viele Angstreaktionen lassen sich teilweise so verstehen.\n\nBei der **operanten Konditionierung**, systematisch von B. F. Skinner untersucht, wird Verhalten durch seine **Konsequenzen** geformt:\n\n- **Positive Verstärkung:** Ein angenehmer Reiz folgt – das Verhalten wird häufiger.\n- **Negative Verstärkung:** Ein unangenehmer Reiz fällt weg – das Verhalten wird ebenfalls häufiger.\n- **Bestrafung:** Ein unangenehmer Reiz folgt oder ein angenehmer fällt weg – das Verhalten wird seltener.\n- **Löschung:** Die Verstärkung bleibt aus – das Verhalten nimmt allmählich ab.\n\nBesonders bedeutsam für die Beratung ist die **negative Verstärkung durch Vermeidung**: Wer einer angstauslösenden Situation ausweicht, erlebt sofortige Erleichterung. Diese Erleichterung verstärkt das Vermeiden – und verhindert zugleich die Erfahrung, dass die Situation bewältigbar gewesen wäre. So können Ängste sich stabilisieren."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Beispiele dem passenden Lernprinzip zu.",
            paare: [
              ["Ein Kind bekommt nach dem Aufräumen Lob und räumt künftig häufiger auf.", "Positive Verstärkung"],
              ["Eine Frau sagt Treffen ab, fühlt sich dadurch sofort erleichtert und sagt künftig noch häufiger ab.", "Negative Verstärkung"],
              ["Ein Jugendlicher verliert nach dem Zuspätkommen seinen Ausgang und kommt seltener zu spät.", "Bestrafung"],
              ["Ein Kollege erhält auf ständige Beschwerdemails keine Reaktion mehr; die Mails werden allmählich seltener.", "Löschung"],
              ["Der Klingelton des Diensthandys löst nach vielen nächtlichen Notfalleinsätzen Herzklopfen aus.", "Klassische Konditionierung"]
            ],
            erklaerung: "„Positiv“ und „negativ“ bezeichnen bei der Verstärkung das Hinzufügen oder Wegnehmen eines Reizes, nicht eine Wertung – beide machen Verhalten häufiger. Bestrafung macht Verhalten seltener, Löschung ebenfalls, aber durch das Ausbleiben jeder Konsequenz. Der Klingelton wurde durch Kopplung mit belastenden Einsätzen zum Auslöser einer Stressreaktion."
          },
          {
            typ: "text",
            titel: "Lernen am Modell und Selbstwirksamkeit",
            text: "Albert Bandura zeigte, dass Menschen nicht nur durch eigene Konsequenzen lernen, sondern auch durch **Beobachtung** anderer. Beim **Modelllernen** werden Verhaltensweisen übernommen, wenn das Modell als ähnlich, kompetent oder attraktiv erlebt wird und das beobachtete Verhalten erfolgreich ist. Bandura beschrieb dafür Aufmerksamkeits-, Behaltens-, Reproduktions- und Motivationsprozesse.\n\nEin zentrales Konzept seiner sozial-kognitiven Theorie ist die **Selbstwirksamkeitserwartung**: die Überzeugung, ein bestimmtes Verhalten auch unter schwierigen Bedingungen erfolgreich ausführen zu können. Selbstwirksamkeit ist **bereichsspezifisch** – jemand kann sich im Beruf sehr kompetent, bei der Konfliktlösung in der Familie aber hilflos fühlen.\n\nBandura nannte vier **Quellen der Selbstwirksamkeit**:\n\n- **eigene Erfolgserfahrungen** (die stärkste Quelle)\n- **stellvertretende Erfahrungen** durch Beobachtung ähnlicher Personen\n- **verbale Ermutigung** durch andere\n- **Interpretation körperlicher und emotionaler Zustände** (etwa Aufregung als Bereitschaft statt als Versagenszeichen)\n\nFür die Beratung ist das ein wertvoller Leitfaden. Kleine, sicher erreichbare Schritte schaffen Erfolgserfahrungen; Berichte von Menschen in ähnlicher Lage – etwa in Gruppen – können ermutigen; und ehrliches, konkretes Zutrauen der beratenden Person kann helfen, sofern es nicht unrealistisch ist."
          },
          {
            typ: "mc",
            frage: "Welche Quelle der Selbstwirksamkeit gilt nach Bandura als die stärkste?",
            optionen: [
              "Verbale Ermutigung durch eine vertraute Person",
              "Stellvertretende Erfahrungen durch Beobachtung anderer",
              "Die Interpretation körperlicher Erregung",
              "Eigene Erfolgserfahrungen"
            ],
            richtig: 3,
            erklaerung: "Eigene Bewältigungserfahrungen liefern den überzeugendsten Beleg für die eigene Wirksamkeit. Die anderen Quellen sind ebenfalls bedeutsam, wirken aber in der Regel schwächer; verbale Ermutigung verpufft, wenn sie nicht durch Erfahrungen gestützt wird."
          },
          {
            typ: "text",
            titel: "Denken unter Unsicherheit: Heuristiken und Verzerrungen",
            text: "Menschliches Denken ist leistungsfähig, aber nicht fehlerfrei. Daniel Kahneman und Amos Tversky beschrieben **Heuristiken** – gedankliche Abkürzungen, die schnelle Urteile ermöglichen, aber systematische Fehler begünstigen:\n\n- **Verfügbarkeitsheuristik:** Wir schätzen Ereignisse als häufiger ein, wenn uns Beispiele leicht einfallen.\n- **Bestätigungsfehler** (*confirmation bias*): Wir suchen und gewichten bevorzugt Informationen, die unsere Annahmen stützen.\n- **Ankereffekt:** Eine zuerst genannte Zahl oder Information beeinflusst nachfolgende Schätzungen.\n\nIn der kognitiven Therapie hat Aaron T. Beck beschrieben, wie **automatische Gedanken** und **kognitive Verzerrungen** Gefühle prägen, besonders bei Depression und Angst. Typische Muster sind:\n\n- **Katastrophisieren:** das Schlimmste als wahrscheinlich annehmen\n- **Schwarz-Weiß-Denken:** nur Extreme sehen\n- **Übergeneralisierung:** aus einem Ereignis eine allgemeine Regel ableiten („immer“, „nie“)\n- **Gedankenlesen:** zu wissen glauben, was andere denken\n- **Personalisierung:** sich für Ereignisse verantwortlich fühlen, die nicht in der eigenen Hand lagen\n\nBeratende sind von solchen Verzerrungen nicht ausgenommen. Der Bestätigungsfehler kann dazu führen, dass man eine erste Hypothese über eine Person nicht mehr revidiert. Professionelle Haltung bedeutet daher auch, eigene Annahmen als **vorläufig** zu behandeln."
          },
          {
            typ: "kategorien",
            frage: "Welche kognitive Verzerrung zeigt sich in der jeweiligen Aussage?",
            kategorien: ["Katastrophisieren", "Übergeneralisierung", "Gedankenlesen"],
            elemente: [
              { text: "„Wenn ich die Präsentation vermassle, bin ich meinen Job los und finde nie wieder etwas.“", kat: 0 },
              { text: "„Der Knoten ist bestimmt bösartig, ich werde das nicht überleben.“", kat: 0 },
              { text: "„Die Beziehung ist gescheitert – ich bin einfach nicht beziehungsfähig.“", kat: 1 },
              { text: "„Schon wieder vergessen, ich vergesse immer alles.“", kat: 1 },
              { text: "„Die Kollegin hat nicht gegrüßt, sie hält mich bestimmt für inkompetent.“", kat: 2 },
              { text: "„Mein Chef hat beim Gespräch so geschaut – er will mich loswerden.“", kat: 2 }
            ],
            erklaerung: "Katastrophisieren malt die schlimmstmögliche Folge als wahrscheinlich aus. Übergeneralisierung zieht aus einem oder wenigen Ereignissen eine umfassende Schlussfolgerung über sich selbst oder die Welt. Gedankenlesen unterstellt anderen ohne ausreichende Belege bestimmte Gedanken oder Absichten."
          },
          {
            typ: "text",
            titel: "Persönlichkeit beschreiben: das Fünf-Faktoren-Modell",
            text: "Persönlichkeitspsychologie fragt, worin sich Menschen **relativ überdauernd** in ihrem Erleben und Verhalten unterscheiden. Das heute einflussreichste Beschreibungsmodell ist das **Fünf-Faktoren-Modell**, häufig „Big Five“ genannt. Es entstand unter anderem aus dem **lexikalischen Ansatz**: Die Annahme ist, dass sich wichtige Persönlichkeitsunterschiede in der Alltagssprache niedergeschlagen haben. Faktorenanalysen von Eigenschaftswörtern und Fragebögen führten wiederholt zu fünf breiten Dimensionen, die unter anderem von Paul Costa und Robert McCrae ausgearbeitet wurden:\n\n- **Offenheit für Erfahrungen:** Neugier, Fantasie, Interesse an Neuem und an Ideen\n- **Gewissenhaftigkeit:** Ordnung, Zuverlässigkeit, Selbstdisziplin, Zielstrebigkeit\n- **Extraversion:** Geselligkeit, Aktivität, Durchsetzungsfreude, Erleben positiver Gefühle\n- **Verträglichkeit:** Wohlwollen, Kooperationsbereitschaft, Vertrauen, Mitgefühl\n- **Neurotizismus** (Gegenpol: emotionale Stabilität): Neigung zu Ängstlichkeit, Reizbarkeit, Niedergeschlagenheit und Stressanfälligkeit\n\nAls Merkhilfe dient das englische Akronym **OCEAN**. Jede Dimension ist ein **Kontinuum**: Menschen sind nicht „extravertiert“ oder „introvertiert“, sondern liegen irgendwo dazwischen, die meisten im mittleren Bereich.\n\nWichtig: Keine Ausprägung ist an sich gut oder schlecht. Hohe Verträglichkeit erleichtert Kooperation, kann aber das Vertreten eigener Interessen erschweren; niedrige Extraversion ist kein Defizit, sondern beschreibt eine Präferenz für weniger Stimulation."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Beschreibungen den Big-Five-Dimensionen zu.",
            paare: [
              ["Plant Termine genau, hält Absprachen zuverlässig ein", "Hohe Gewissenhaftigkeit"],
              ["Grübelt viel, ist schnell beunruhigt und leicht gekränkt", "Hoher Neurotizismus"],
              ["Liebt neue Ideen, Kunst und ungewohnte Erfahrungen", "Hohe Offenheit für Erfahrungen"],
              ["Ist gern unter Menschen und tankt dort Energie", "Hohe Extraversion"],
              ["Ist hilfsbereit, nachsichtig und vermeidet Konfrontationen", "Hohe Verträglichkeit"]
            ],
            erklaerung: "Die fünf Dimensionen beschreiben breite Tendenzen. In der Beratung helfen sie zu verstehen, warum bestimmte Situationen für eine Person besonders anstrengend oder besonders leicht sind – sie sind jedoch keine Diagnosen."
          },
          {
            typ: "text",
            titel: "Stabilität, Veränderung und Grenzen des Modells",
            text: "Wie stabil ist Persönlichkeit? Längsschnittstudien zeigen ein differenziertes Bild:\n\n- Die **relative Rangordnung** zwischen Menschen ist im Erwachsenenalter recht stabil – wer mit 30 vergleichsweise gewissenhaft ist, ist es mit 50 meist auch.\n- Zugleich verändern sich die **mittleren Ausprägungen** über die Lebensspanne. Im jungen und mittleren Erwachsenenalter nehmen Gewissenhaftigkeit und Verträglichkeit im Durchschnitt zu, Neurotizismus nimmt ab. Diese Tendenz wird als **Reifungsprinzip** beschrieben und mit der Übernahme sozialer Rollen in Verbindung gebracht.\n- Persönlichkeit ist durch genetische Faktoren **und** Umwelterfahrungen geprägt; neuere Studien deuten darauf hin, dass gezielte Interventionen und einschneidende Lebenserfahrungen sie in begrenztem Maß verändern können.\n\nDas Modell hat auch **Grenzen**. Es beschreibt Eigenschaften, erklärt aber nicht, wie sie entstehen oder wie sie im Einzelfall zusammenwirken. Es sagt wenig über Werte, Ziele, Lebensgeschichte und Sinnorientierung einer Person. Zudem verhält sich niemand in allen Situationen gleich: Verhalten entsteht aus der **Wechselwirkung von Person und Situation**.\n\nFür die Beratung empfiehlt sich deshalb Zurückhaltung beim Etikettieren („Sie sind eben ein Neurotiker“). Hilfreicher ist es, Persönlichkeitsmerkmale als **Neigungen** zu verstehen, mit denen Menschen bewusst umgehen können – und sie stets im Kontext der individuellen Lebenssituation zu betrachten."
          },
          {
            typ: "truefalse",
            aussage: "Im Durchschnitt nehmen Gewissenhaftigkeit und Verträglichkeit im Laufe des Erwachsenenalters eher zu, Neurotizismus eher ab.",
            richtig: true,
            erklaerung: "Diese mittleren Veränderungen sind in Längsschnittstudien wiederholt gefunden worden und werden als Reifungsprinzip bezeichnet. Sie gelten für Gruppendurchschnitte; einzelne Personen können davon abweichen."
          },
          {
            typ: "luecke",
            text: "Die Fünf-Faktoren-Struktur wurde unter anderem über den {{lexikalischen Ansatz|psychoanalytischen Ansatz|behavioristischen Ansatz}} gefunden. Die Dimension, die für Ängstlichkeit und Stressanfälligkeit steht, heißt {{Neurotizismus|Verträglichkeit|Offenheit}}.",
            erklaerung: "Der lexikalische Ansatz untersucht Eigenschaftswörter der Alltagssprache. Neurotizismus beschreibt die Neigung zu negativen Emotionen und Stressanfälligkeit; der Gegenpol ist emotionale Stabilität."
          },
          {
            typ: "merke",
            text: "Persönlichkeitsmerkmale beschreiben Neigungen, keine Schicksale. Verhalten entsteht immer im Zusammenspiel von Person, Situation und den Entscheidungen, die ein Mensch trifft."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Kognition, Lernen, Persönlichkeit",
            karten: [
              { vorne: "Negative Verstärkung", hinten: "Ein unangenehmer Reiz fällt weg; das vorausgehende Verhalten wird häufiger. Beispiel: Erleichterung nach Vermeidung." },
              { vorne: "Selbstwirksamkeitserwartung", hinten: "Bereichsspezifische Überzeugung (Bandura), ein Verhalten auch unter Schwierigkeiten erfolgreich ausführen zu können." },
              { vorne: "Bestätigungsfehler", hinten: "Tendenz, Informationen zu suchen und zu gewichten, die eigene Annahmen stützen – betrifft auch Beratende." },
              { vorne: "Big Five (OCEAN)", hinten: "Offenheit, Gewissenhaftigkeit, Extraversion, Verträglichkeit, Neurotizismus." },
              { vorne: "Reifungsprinzip", hinten: "Durchschnittliche Zunahme von Gewissenhaftigkeit und Verträglichkeit sowie Abnahme von Neurotizismus im Erwachsenenalter." },
              { vorne: "Person-Situation-Interaktion", hinten: "Verhalten ergibt sich aus dem Zusammenwirken stabiler Merkmale und situativer Bedingungen." }
            ]
          }
        ]
      },

      /* ---------- B1-4 ---------- */
      {
        id: "B1-4",
        titel: "Entwicklung über die Lebensspanne und Bindung",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Entwicklung als lebenslanger Prozess",
            text: "Lange wurde Entwicklungspsychologie vor allem als Psychologie der Kindheit und Jugend verstanden. Heute dominiert die Perspektive der **Lebensspanne**: Entwicklung findet von der Geburt bis ins hohe Alter statt. Paul Baltes hat dafür Leitsätze formuliert, die für die Beratung sehr fruchtbar sind:\n\n- **Entwicklung ist lebenslang** – kein Lebensabschnitt hat einen Vorrang.\n- **Entwicklung ist multidirektional** – manche Fähigkeiten nehmen zu, andere ab.\n- **Entwicklung ist immer Gewinn und Verlust zugleich** – mit dem Alter verschiebt sich das Verhältnis, doch auch im hohen Alter gibt es Gewinne, etwa an Erfahrungswissen.\n- **Plastizität** – Menschen bleiben in allen Lebensphasen veränderbar, wenn auch in unterschiedlichem Maß.\n- **Kontextualismus** – Entwicklung ist eingebettet in Geschichte, Kultur und individuelle Lebensereignisse.\n\nBaltes und Margret Baltes beschrieben zudem das Modell der **Selektion, Optimierung und Kompensation (SOK)**: Erfolgreich altern Menschen, wenn sie Ziele auswählen (Selektion), ihre Mittel zur Zielerreichung stärken (Optimierung) und Verluste durch alternative Mittel ausgleichen (Kompensation). Ein oft genanntes Beispiel ist der Pianist Arthur Rubinstein, der im Alter weniger Stücke spielte, diese intensiver übte und schnelle Passagen durch vorheriges Verlangsamen kontrastreicher wirken ließ.\n\nFür die Beratung heißt das: Krisen in jedem Lebensalter sind **Entwicklungsaufgaben**, keine Endpunkte."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Strategien des SOK-Modells der passenden Situation einer 68-jährigen Frau zu, die trotz nachlassender Kräfte weiter im Ehrenamt tätig sein möchte.",
            paare: [
              ["Sie gibt die Leitung des Vereins ab und konzentriert sich auf die Lesepatenschaft.", "Selektion"],
              ["Sie bereitet sich gezielt mit Fortbildungen auf die Arbeit mit Leseanfängern vor.", "Optimierung"],
              ["Sie nutzt eine Lesebrille mit Leuchte und plant Pausen zwischen den Terminen ein.", "Kompensation"]
            ],
            erklaerung: "Selektion bedeutet, Ziele und Bereiche auszuwählen; Optimierung, die Mittel für diese Ziele zu verbessern; Kompensation, Einbußen durch alternative Mittel oder Hilfen auszugleichen. Das Modell gilt nicht nur im Alter, sondern in jeder Phase mit begrenzten Ressourcen."
          },
          {
            typ: "text",
            titel: "Entwicklungsaufgaben und psychosoziale Krisen",
            text: "Zwei klassische Konzepte helfen, Lebensphasen zu ordnen. Robert Havighurst beschrieb **Entwicklungsaufgaben**: Anforderungen, die sich in einer Lebensphase aus körperlicher Reifung, gesellschaftlichen Erwartungen und eigenen Zielen ergeben – etwa Ablösung vom Elternhaus, Berufswahl, Partnerschaft, Elternschaft oder die Anpassung an den Ruhestand.\n\nErik H. Erikson entwarf ein Modell von **acht psychosozialen Krisen** über die Lebensspanne. Jede Phase ist durch ein Spannungsfeld gekennzeichnet, dessen Bewältigung die weitere Entwicklung prägt:\n\n- Ur-Vertrauen vs. Ur-Misstrauen (Säuglingsalter)\n- Autonomie vs. Scham und Zweifel (Kleinkindalter)\n- Initiative vs. Schuldgefühl (Spielalter)\n- Werksinn vs. Minderwertigkeitsgefühl (Schulalter)\n- Identität vs. Identitätsdiffusion (Adoleszenz)\n- Intimität vs. Isolierung (frühes Erwachsenenalter)\n- Generativität vs. Stagnation (mittleres Erwachsenenalter)\n- Ich-Integrität vs. Verzweiflung (höheres Alter)\n\nEriksons Modell ist empirisch nur eingeschränkt überprüft und kulturell geprägt; als **heuristischer Rahmen** ist es aber nach wie vor nützlich. Es erinnert daran, dass etwa ein 50-jähriger Klient, der sich fragt, was er weitergeben möchte, vor einer anderen Lebensfrage steht als eine 20-Jährige, die herausfinden will, wer sie ist.\n\nIn der Beratung lohnt es sich, Anliegen auch **lebensphasenbezogen** zu betrachten: Welche Entwicklungsaufgabe steht gerade an? Welche frühere Aufgabe wirkt nach?"
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die folgenden psychosozialen Krisen nach Erikson in ihre Abfolge über die Lebensspanne.",
            elemente: [
              "Ur-Vertrauen vs. Ur-Misstrauen",
              "Werksinn vs. Minderwertigkeitsgefühl",
              "Identität vs. Identitätsdiffusion",
              "Intimität vs. Isolierung",
              "Generativität vs. Stagnation",
              "Ich-Integrität vs. Verzweiflung"
            ],
            erklaerung: "Erikson ordnet die Krisen von der frühen Kindheit bis ins höhere Alter. Ausgelassen sind hier die Phasen „Autonomie vs. Scham und Zweifel“ und „Initiative vs. Schuldgefühl“, die zwischen Ur-Vertrauen und Werksinn liegen."
          },
          {
            typ: "text",
            titel: "Bindungstheorie: Grundlagen nach Bowlby und Ainsworth",
            text: "Die **Bindungstheorie** wurde von dem britischen Psychiater John Bowlby begründet. Er beschrieb Bindung als ein **angeborenes Verhaltenssystem**, das darauf ausgerichtet ist, bei Gefahr, Schmerz oder Verunsicherung die Nähe einer vertrauten, schützenden Person herzustellen. Diese **Bindungsperson** dient als **sicherer Hafen**, zu dem das Kind bei Belastung zurückkehrt, und als **sichere Basis**, von der aus es die Welt erkundet. Bindungs- und Erkundungsverhalten stehen in einem dynamischen Gleichgewicht.\n\nAus wiederholten Erfahrungen mit Bindungspersonen entwickeln Kinder **innere Arbeitsmodelle**: verinnerlichte Erwartungen darüber, ob andere verfügbar und zuverlässig sind und ob man selbst Zuwendung verdient.\n\nMary Ainsworth entwickelte die **Fremde Situation**, ein standardisiertes Beobachtungsverfahren für Kinder im Alter von etwa einem Jahr mit kurzen Trennungen und Wiedervereinigungen. Sie beschrieb drei Muster, später ergänzt durch ein viertes von Mary Main und Judith Solomon:\n\n- **Sicher:** Das Kind zeigt bei Trennung Kummer, sucht bei Rückkehr Nähe, lässt sich trösten und spielt weiter.\n- **Unsicher-vermeidend:** Das Kind zeigt wenig sichtbaren Kummer und ignoriert die Bindungsperson bei der Rückkehr eher.\n- **Unsicher-ambivalent:** Das Kind ist stark belastet, sucht Nähe und widersetzt sich zugleich dem Trost.\n- **Desorganisiert:** Das Kind zeigt widersprüchliche, bizarr wirkende oder erstarrte Verhaltensweisen; dieses Muster tritt gehäuft im Zusammenhang mit beängstigendem oder misshandelndem Verhalten von Bezugspersonen auf."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Beobachtungen aus der Fremden Situation dem Bindungsmuster zu.",
            kategorien: ["Sicher", "Unsicher-vermeidend", "Unsicher-ambivalent", "Desorganisiert"],
            elemente: [
              { text: "Weint bei der Trennung, läuft bei Rückkehr auf die Mutter zu, beruhigt sich rasch und spielt weiter.", kat: 0 },
              { text: "Spielt scheinbar unbeeindruckt weiter und wendet sich bei Rückkehr des Vaters ab.", kat: 1 },
              { text: "Klammert sich an die Mutter und schlägt sie zugleich wütend, lässt sich lange nicht beruhigen.", kat: 2 },
              { text: "Läuft auf die Bindungsperson zu, hält auf halbem Weg inne und erstarrt.", kat: 3 },
              { text: "Nutzt die Mutter als Ausgangspunkt, um den Raum zu erkunden, und schaut immer wieder zu ihr.", kat: 0 },
              { text: "Ist bei der Rückkehr der Mutter untröstlich und kann nicht zum Spiel zurückfinden.", kat: 2 }
            ],
            erklaerung: "Sichere Kinder nutzen die Bindungsperson als sicheren Hafen und sichere Basis. Vermeidende Kinder unterdrücken sichtbaren Kummer. Ambivalente Kinder zeigen gleichzeitig Nähewunsch und Ärger und sind schwer zu beruhigen. Desorganisiertes Verhalten zeigt sich in widersprüchlichen, unterbrochenen oder erstarrten Handlungen."
          },
          {
            typ: "text",
            titel: "Bindung im Erwachsenenalter – und was sie nicht bedeutet",
            text: "Bindungserfahrungen wirken über die Kindheit hinaus. Im Erwachsenenalter zeigt sich das Bindungssystem besonders in Partnerschaften, in Krisen, bei Krankheit und Verlust. Die Forschung beschreibt Unterschiede häufig entlang zweier Dimensionen: **Bindungsangst** (Sorge vor Zurückweisung und Verlassenwerden) und **Bindungsvermeidung** (Unbehagen mit Nähe und Abhängigkeit). Zur Erfassung der Bindungsrepräsentation Erwachsener wurde unter anderem das **Adult Attachment Interview** von Mary Main und Kollegen entwickelt.\n\nFür die Beratung sind einige Klarstellungen wichtig:\n\n- **Bindungsmuster sind keine Diagnosen.** Unsichere Bindung ist häufig und für sich genommen keine Störung.\n- **Bindung ist nicht Schicksal.** Innere Arbeitsmodelle können sich durch neue, korrigierende Beziehungserfahrungen verändern – in Partnerschaften, Freundschaften und auch in professionellen Beziehungen.\n- **Kontinuität ist nur mäßig.** Der Zusammenhang zwischen frühkindlicher und erwachsener Bindung ist nachweisbar, aber deutlich schwächer als oft angenommen; spätere Lebensereignisse spielen eine wichtige Rolle.\n- **Vorsicht vor Etikettierung.** Populärwissenschaftliche Bindungstypen-Tests ersetzen keine fachliche Einschätzung.\n\nPraktisch bedeutsam ist, dass die **beratende Beziehung selbst** Bindungsthemen aktivieren kann. Manche Ratsuchende suchen schnell intensive Nähe, andere halten auffällig Distanz. Beide Reaktionen lassen sich als nachvollziehbare Schutzstrategien verstehen, nicht als Mangel an Kooperation."
          },
          {
            typ: "truefalse",
            aussage: "Ein im ersten Lebensjahr beobachtetes unsicheres Bindungsmuster legt die Beziehungsfähigkeit eines Menschen für sein ganzes Leben unveränderlich fest.",
            richtig: false,
            erklaerung: "Frühe Bindungserfahrungen sind bedeutsam, doch die Kontinuität über die Lebensspanne ist nur mäßig. Innere Arbeitsmodelle können sich durch spätere Beziehungserfahrungen, Lebensereignisse und reflektierende Auseinandersetzung verändern."
          },
          {
            typ: "text",
            titel: "Resilienz und Schutzfaktoren",
            text: "Warum entwickeln sich manche Kinder trotz schwerer Belastungen gut? Diese Frage begründete die **Resilienzforschung**. Bekannt ist die Kauai-Längsschnittstudie von Emmy Werner und Ruth Smith, die einen Geburtsjahrgang auf der hawaiianischen Insel Kauai über Jahrzehnte begleitete. Auch viele Kinder mit mehrfachen Risiken entwickelten sich zu kompetenten Erwachsenen.\n\nResilienz wird heute nicht mehr als feste Eigenschaft verstanden, sondern als **Prozess** einer gelingenden Anpassung trotz Belastung. Sie entsteht aus dem Zusammenspiel individueller, familiärer und sozialer **Schutzfaktoren**, etwa:\n\n- mindestens eine stabile, zugewandte Bezugsperson\n- Problemlösefähigkeiten und Selbstwirksamkeitserleben\n- Fähigkeit zur Emotionsregulation\n- soziale Unterstützung außerhalb der Familie, etwa durch Lehrkräfte oder Mentoren\n- Erleben von Sinn, Zugehörigkeit oder Glauben\n\nResilienz ist **bereichs- und zeitspezifisch**: Ein Mensch kann in einer Lebensphase widerstandsfähig sein und in einer anderen an seine Grenzen kommen. Zudem darf das Konzept nicht dazu führen, Verantwortung zu individualisieren – strukturelle Belastungen wie Armut oder Diskriminierung bleiben gesellschaftliche Aufgaben.\n\nFür Beratende ist die Resilienzperspektive eine Einladung, neben Belastungen stets auch **Schutzfaktoren und Ressourcen** systematisch zu erfragen – ein Gedanke, der in Modul B4 ausführlich aufgegriffen wird."
          },
          {
            typ: "multi",
            frage: "Welche Aussagen zur Resilienz entsprechen dem heutigen Forschungsverständnis? (Mehrere Antworten möglich)",
            optionen: [
              "Resilienz ist eine angeborene, unveränderliche Eigenschaft.",
              "Resilienz wird als Prozess gelingender Anpassung trotz Belastung verstanden.",
              "Eine stabile, zugewandte Bezugsperson gilt als wichtiger Schutzfaktor.",
              "Wer resilient ist, braucht keine Unterstützung durch andere.",
              "Resilienz kann sich je nach Lebensbereich und Lebensphase unterscheiden."
            ],
            richtig: [1, 2, 4],
            erklaerung: "Resilienz ist kein fixes Persönlichkeitsmerkmal, sondern ein dynamischer Prozess, der stark von sozialen Beziehungen und Kontexten abhängt. Gerade die Verfügbarkeit von Unterstützung ist ein zentraler Schutzfaktor. Sie kann sich je nach Bereich und Zeitpunkt unterscheiden."
          },
          {
            typ: "fall",
            titel: "Distanz in der Pflegeberatung",
            fall: "Konstruierte Lehrvignette: Frau M., 56 Jahre, pflegt seit einem Jahr ihre an Demenz erkrankte Mutter. In der Pflegeberatung wirkt sie sachlich und kühl, beantwortet Fragen knapp und betont mehrfach: „Ich komme schon klar, ich brauche eigentlich nur die Formulare.“ Gegen Ende erwähnt sie beiläufig, dass sie seit Wochen kaum schlafe.",
            frage: "Welche Einschätzung und Reaktion ist aus entwicklungs- und bindungspsychologischer Sicht am angemessensten?",
            optionen: [
              "Frau M. hat eindeutig eine vermeidende Bindungsstörung; die Beraterin sollte ihr dies erklären.",
              "Frau M. braucht offenbar tatsächlich nur Formulare; der Hinweis auf den Schlaf ist nebensächlich.",
              "Die Beraterin sollte Frau M. mit Nachdruck auffordern, endlich über ihre Gefühle zu sprechen.",
              "Die betonte Selbstständigkeit kann eine Schutzstrategie sein; die Beraterin respektiert sie, greift den Schlafhinweis behutsam auf und bietet Unterstützung an, ohne zu drängen."
            ],
            richtig: 3,
            erklaerung: "Die Betonung von Selbstständigkeit kann – muss aber nicht – mit einer eher vermeidenden Beziehungsstrategie zusammenhängen. Eine Diagnose aus wenigen Beobachtungen wäre unzulässig und keine Aufgabe der Beratung. Der beiläufige Hinweis auf Schlafprobleme ist bei pflegenden Angehörigen ein wichtiges Belastungssignal und sollte respektvoll aufgegriffen werden. Drängen würde die Distanz eher verstärken."
          },
          {
            typ: "merke",
            text: "Jede Lebensphase bringt eigene Aufgaben, Verluste und Gewinne mit sich. Bindungserfahrungen prägen, aber sie determinieren nicht – neue Beziehungserfahrungen, auch in der Beratung, können korrigierend wirken."
          },
          {
            typ: "reflexion",
            frage: "Mit Ratsuchenden welcher Lebensphase arbeiten Sie am häufigsten – und welche Entwicklungsaufgaben stehen dort typischerweise im Vordergrund?",
            hinweis: "Überlegen Sie, welche Schutzfaktoren Sie in dieser Gruppe besonders häufig beobachten und welche fehlen. Wie könnte Ihre Beratung dazu beitragen, diese Schutzfaktoren zu stärken?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "mc",
        frage: "Welche Strategie der Emotionsregulation setzt nach dem Prozessmodell von Gross an der bereits laufenden emotionalen Reaktion an?",
        optionen: ["Situationsauswahl", "Kognitive Neubewertung", "Reaktionsmodulation", "Aufmerksamkeitslenkung"],
        richtig: 2,
        erklaerung: "Reaktionsmodulation – etwa das Unterdrücken des Ausdrucks oder Atemtechniken – setzt an der bereits entfalteten Reaktion an. Die anderen Strategien wirken früher im Entstehungsprozess."
      },
      {
        typ: "multi",
        frage: "Welche drei psychologischen Grundbedürfnisse nennt die Selbstbestimmungstheorie? (Mehrere Antworten möglich)",
        optionen: ["Autonomie", "Sicherheit", "Kompetenz", "Soziale Eingebundenheit", "Selbstverwirklichung"],
        richtig: [0, 2, 3],
        erklaerung: "Deci und Ryan nennen Autonomie, Kompetenz und soziale Eingebundenheit. Sicherheit und Selbstverwirklichung sind Begriffe aus anderen Modellen, etwa der Bedürfnishierarchie nach Maslow."
      },
      {
        typ: "truefalse",
        aussage: "Nach der Selbstbestimmungstheorie kann auch extrinsisch motiviertes Verhalten weitgehend selbstbestimmt sein, wenn sich eine Person mit seinem Wert identifiziert.",
        richtig: true,
        erklaerung: "Identifizierte und integrierte Regulation sind extrinsische Formen, die dennoch als selbstbestimmt erlebt werden. Entscheidend ist der Grad der Internalisierung, nicht die Freude an der Tätigkeit."
      },
      {
        typ: "mc",
        frage: "Eine Person meidet seit Monaten Bus und Bahn und fühlt sich jedes Mal erleichtert, wenn sie stattdessen zu Fuß geht. Welcher Lernmechanismus trägt am ehesten zur Aufrechterhaltung der Vermeidung bei?",
        optionen: ["Positive Verstärkung", "Negative Verstärkung", "Löschung", "Bestrafung"],
        richtig: 1,
        erklaerung: "Die Erleichterung entsteht durch den Wegfall der unangenehmen Angst – das ist negative Verstärkung. Sie macht das Vermeiden wahrscheinlicher und verhindert korrigierende Erfahrungen."
      },
      {
        typ: "mc",
        frage: "Welche Aussage über das Fünf-Faktoren-Modell der Persönlichkeit trifft zu?",
        optionen: [
          "Es teilt Menschen in fünf klar voneinander getrennte Persönlichkeitstypen ein.",
          "Es erklärt vollständig, wie Persönlichkeit in der Kindheit entsteht.",
          "Hohe Verträglichkeit ist grundsätzlich vorteilhaft, niedrige grundsätzlich problematisch.",
          "Es beschreibt fünf breite Dimensionen, auf denen sich Menschen kontinuierlich unterscheiden."
        ],
        richtig: 3,
        erklaerung: "Die Big Five sind Dimensionen, keine Typen. Das Modell beschreibt, erklärt aber nicht vollständig die Entstehung von Persönlichkeit, und keine Ausprägung ist an sich gut oder schlecht."
      },
      {
        typ: "multi",
        frage: "Welche Merkmale gehören zu den Leitsätzen der Entwicklungspsychologie der Lebensspanne nach Baltes? (Mehrere Antworten möglich)",
        optionen: [
          "Entwicklung ist ein lebenslanger Prozess.",
          "Entwicklung ist mit dem Ende der Adoleszenz abgeschlossen.",
          "Entwicklung umfasst stets Gewinne und Verluste.",
          "Menschen bleiben in allen Lebensphasen in gewissem Maß veränderbar (Plastizität).",
          "Entwicklung verläuft bei allen Menschen in gleicher Richtung und gleichem Tempo."
        ],
        richtig: [0, 2, 3],
        erklaerung: "Baltes betont Lebenslänglichkeit, Multidirektionalität mit Gewinnen und Verlusten, Plastizität und Kontextabhängigkeit. Ein Abschluss der Entwicklung mit der Jugend oder ein universell gleicher Verlauf widersprechen diesem Ansatz."
      },
      {
        typ: "mc",
        frage: "Was versteht die Bindungstheorie unter „inneren Arbeitsmodellen“?",
        optionen: [
          "Verinnerlichte Erwartungen über die Verfügbarkeit anderer und den eigenen Wert, die aus Bindungserfahrungen entstehen",
          "Bewusste Pläne, mit denen Erwachsene ihre Partnerwahl steuern",
          "Kognitive Schemata, die ausschließlich die Berufswahl betreffen",
          "Angeborene Reflexe, die in der Fremden Situation beobachtet werden"
        ],
        richtig: 0,
        erklaerung: "Innere Arbeitsmodelle sind weitgehend unbewusste Erwartungsstrukturen über sich selbst und andere in Beziehungen. Sie entstehen aus wiederholten Bindungserfahrungen und können sich durch neue Erfahrungen verändern."
      },
      {
        typ: "truefalse",
        aussage: "Desorganisiertes Bindungsverhalten wurde von Mary Ainsworth als eines ihrer drei ursprünglichen Muster beschrieben.",
        richtig: false,
        erklaerung: "Ainsworth beschrieb ursprünglich die Muster sicher, unsicher-vermeidend und unsicher-ambivalent. Die desorganisierte Kategorie wurde später von Mary Main und Judith Solomon ergänzt."
      }
    ]
  },

  /* =========================================================
     B2 · Klinisches Basiswissen
     ========================================================= */
  {
    kurs: "berater",
    id: "B2",
    titel: "Klinisches Basiswissen",
    beschreibung: "Psychologische Beratung ist keine Psychotherapie – aber Beratende begegnen täglich Menschen mit psychischen Belastungen und Störungen. Dieses Modul vermittelt, was eine psychische Störung ausmacht, wie die ICD-11 aufgebaut ist und woran sich häufige Störungsbilder sowie Warnzeichen erkennen lassen. Ein besonderer Schwerpunkt liegt auf den Grenzen der Beratung und auf einer verantwortungsvollen Weiterverweisung.",
    lernziele: [
      "Sie können erläutern, was unter einer psychischen Störung verstanden wird, und die Grundzüge der ICD-11 beschreiben.",
      "Sie können Kernmerkmale von Depression, Angststörungen, Traumafolgestörungen und Abhängigkeitserkrankungen benennen.",
      "Sie können das Vulnerabilitäts-Stress-Modell auf Fallbeispiele anwenden.",
      "Sie können Warnzeichen für Suizidalität und andere akute Krisen erkennen und angemessen ansprechen.",
      "Sie können die rechtlichen und fachlichen Grenzen psychologischer Beratung benennen und eine Weiterverweisung verantwortungsvoll gestalten."
    ],
    lektionen: [
      /* ---------- B2-1 ---------- */
      {
        id: "B2-1",
        titel: "Was ist eine psychische Störung? Modelle und ICD-11",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Normal oder gestört? Eine schwierige Grenze",
            text: "Wann ist ein Erleben oder Verhalten „gestört“? Diese Frage ist schwieriger, als sie klingt. Trauer nach einem Verlust, Angst vor einer Operation oder Erschöpfung nach monatelanger Pflege eines Angehörigen sind **normale menschliche Reaktionen** – auch wenn sie sehr belastend sind.\n\nIn der klinischen Psychologie werden verschiedene Kriterien diskutiert, die häufig als die **„vier D“** zusammengefasst werden:\n\n- **Devianz:** Abweichung von statistischen oder sozialen Normen\n- **Distress:** subjektives Leiden der Person\n- **Dysfunktion:** Beeinträchtigung im Alltag, in Beruf, Familie oder sozialen Beziehungen\n- **Danger (Gefährdung):** Gefahr für die Person selbst oder für andere\n\nKeines dieser Kriterien reicht für sich genommen aus. Normabweichung allein ist kein Krankheitszeichen – Hochbegabung oder unkonventionelle Lebensweisen sind ebenfalls „abweichend“. Und gesellschaftliche Normen wandeln sich: Homosexualität wurde lange als psychische Störung klassifiziert, was heute als schweres fachliches und ethisches Versäumnis gilt.\n\nJerome Wakefield schlug vor, eine Störung als **„schädliche Dysfunktion“** zu verstehen: Ein psychischer Mechanismus funktioniert nicht so, wie er sollte (Dysfunktion), und dies führt zu einem Nachteil, der nach gesellschaftlichen Maßstäben als schädlich bewertet wird.\n\nFür Beratende ist dieses Problembewusstsein zentral. Es schützt vor zwei Fehlern: **Pathologisieren** normaler Lebenskrisen einerseits und **Übersehen** behandlungsbedürftiger Störungen andererseits."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Beobachtungen dem jeweils angesprochenen Kriterium der „vier D“ zu.",
            paare: [
              ["„Ich leide jeden Tag darunter, ich halte das kaum noch aus.“", "Distress"],
              ["Seit Monaten kann der Klient nicht mehr arbeiten und verlässt kaum die Wohnung.", "Dysfunktion"],
              ["Die Klientin äußert, sie habe darüber nachgedacht, sich das Leben zu nehmen.", "Danger (Gefährdung)"],
              ["Das Verhalten weicht deutlich von dem ab, was im sozialen Umfeld üblich ist.", "Devianz"]
            ],
            erklaerung: "Die vier Kriterien beleuchten unterschiedliche Aspekte. In der Praxis sind subjektives Leiden, Beeinträchtigung im Alltag und Gefährdung für die Einschätzung, ob fachliche Abklärung nötig ist, aussagekräftiger als die bloße Normabweichung."
          },
          {
            typ: "text",
            titel: "Die ICD-11: Aufbau und Grundgedanken",
            text: "Psychische Störungen werden international vor allem mit zwei Systemen klassifiziert: der **ICD** (International Classification of Diseases) der Weltgesundheitsorganisation (WHO) und dem **DSM** (Diagnostic and Statistical Manual of Mental Disorders) der American Psychiatric Association, aktuell in der Fassung DSM-5-TR.\n\nDie **ICD-11** ist am **1. Januar 2022** international in Kraft getreten. Psychische Störungen finden sich im **Kapitel 6 „Psychische Störungen, Verhaltensstörungen oder neuronale Entwicklungsstörungen“**; ihre Codes beginnen mit der Ziffer 6, etwa **6A70** für eine einzelne depressive Episode oder **6B40** für die Posttraumatische Belastungsstörung. In Deutschland wird für Abrechnung und Dokumentation im Gesundheitswesen derzeit noch die ICD-10-GM verwendet; der Umstieg erfolgt schrittweise.\n\nGegenüber der ICD-10 bringt die ICD-11 einige Neuerungen:\n\n- neue Diagnosen, etwa die **komplexe Posttraumatische Belastungsstörung**, die **anhaltende Trauerstörung** und die **Computerspielstörung**\n- ein stärker **dimensionaler Ansatz** bei Persönlichkeitsstörungen, die vor allem nach Schweregrad beschrieben werden\n- **Burnout** wird nicht als psychische Störung, sondern als arbeitsbezogenes Phänomen im Kapitel der Faktoren, die den Gesundheitszustand beeinflussen, aufgeführt\n\nDie ICD-11 enthält zu den psychischen Störungen **klinische Beschreibungen und diagnostische Anforderungen**, die bewusst Raum für klinisches Urteil lassen.\n\n**Wichtig für die Beratung:** Diagnosen nach ICD dürfen nur von dafür qualifizierten Fachpersonen gestellt werden, insbesondere von Ärztinnen und Ärzten sowie approbierten Psychotherapeutinnen und Psychotherapeuten. Kenntnisse der ICD helfen Beratenden, Belastungen einzuordnen und anschlussfähig zu kommunizieren – nicht, selbst zu diagnostizieren."
          },
          {
            typ: "mc",
            frage: "Wie wird Burnout in der ICD-11 eingeordnet?",
            optionen: [
              "Als eigenständige depressive Störung in Kapitel 6",
              "Als Angststörung mit arbeitsbezogenem Auslöser",
              "Als arbeitsbezogenes Phänomen unter den Faktoren, die den Gesundheitszustand beeinflussen, nicht als psychische Störung",
              "Gar nicht – der Begriff kommt in der ICD-11 nicht vor"
            ],
            richtig: 2,
            erklaerung: "Die WHO beschreibt Burnout in der ICD-11 als Folge von chronischem, nicht erfolgreich bewältigtem Stress am Arbeitsplatz und ordnet es den Faktoren zu, die den Gesundheitszustand beeinflussen. Es ist ausdrücklich keine medizinische Diagnose einer psychischen Störung. Hinter Burnout-Beschwerden kann sich dennoch eine Depression verbergen, die abgeklärt werden sollte."
          },
          {
            typ: "truefalse",
            aussage: "Psychologische Beraterinnen und Berater ohne Approbation oder Heilpraktikererlaubnis dürfen ICD-Diagnosen stellen, wenn sie die diagnostischen Kriterien gut kennen.",
            richtig: false,
            erklaerung: "Das Stellen von Diagnosen psychischer Störungen ist Teil der Ausübung der Heilkunde. Es ist approbierten Ärztinnen und Ärzten, Psychotherapeutinnen und Psychotherapeuten sowie im Rahmen ihrer Erlaubnis Heilpraktikerinnen und Heilpraktikern vorbehalten. Gute Kenntnisse befähigen zur Einschätzung des Abklärungsbedarfs, nicht zur Diagnose."
          },
          {
            typ: "text",
            titel: "Das Vulnerabilitäts-Stress-Modell",
            text: "Warum erkrankt ein Mensch unter Belastung, ein anderer nicht? Das **Vulnerabilitäts-Stress-Modell** bietet einen integrativen Erklärungsrahmen. Joseph Zubin und Bonnie Spring formulierten es 1977 ursprünglich für die Schizophrenie; heute wird es für nahezu alle psychischen Störungen herangezogen.\n\nDas Modell nimmt an, dass psychische Störungen aus dem **Zusammenwirken** zweier Faktorengruppen entstehen:\n\n- **Vulnerabilität (Verletzlichkeit):** eine individuelle Anfälligkeit, die biologisch (z. B. genetische Faktoren), psychologisch (z. B. frühe belastende Beziehungserfahrungen, ungünstige Denkmuster) oder sozial (z. B. Armut, Isolation) bedingt sein kann.\n- **Stress (Belastung):** aktuelle Auslöser wie kritische Lebensereignisse, chronische Überforderung, Konflikte oder körperliche Erkrankungen.\n\nÜberschreitet die Summe aus Vulnerabilität und Belastung eine individuelle **Schwelle**, kann eine Störung ausbrechen. Eine Person mit hoher Vulnerabilität kann bereits bei geringer Belastung erkranken, eine Person mit geringer Vulnerabilität erst bei sehr hoher Belastung.\n\nErweiterte Fassungen berücksichtigen **Schutzfaktoren** – etwa soziale Unterstützung, Bewältigungsfähigkeiten, Sinnerleben –, die die Schwelle anheben. Damit verbindet sich das Modell mit dem **biopsychosozialen Modell** nach George Engel, das Krankheit stets als Zusammenspiel biologischer, psychischer und sozialer Faktoren versteht.\n\nFür die Beratung ist das Modell **entlastend und handlungsleitend** zugleich: Es nimmt Schuldzuschreibungen die Grundlage und zeigt, wo angesetzt werden kann – bei der Reduktion von Belastungen und beim Aufbau von Schutzfaktoren."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Faktoren im Vulnerabilitäts-Stress-Modell zu.",
            kategorien: ["Vulnerabilität", "Aktuelle Belastung", "Schutzfaktor"],
            elemente: [
              { text: "Depressive Erkrankungen bei mehreren Verwandten ersten Grades", kat: 0 },
              { text: "Emotionale Vernachlässigung in der Kindheit", kat: 0 },
              { text: "Plötzlicher Tod des Partners", kat: 1 },
              { text: "Drohender Verlust der Wohnung", kat: 1 },
              { text: "Ein verlässlicher Freundeskreis", kat: 2 },
              { text: "Erfahrung, frühere Krisen aus eigener Kraft bewältigt zu haben", kat: 2 },
              { text: "Dauerhafter Konflikt mit der Vorgesetzten", kat: 1 }
            ],
            erklaerung: "Vulnerabilitäten sind länger bestehende Anfälligkeiten, Belastungen sind aktuelle Auslöser, Schutzfaktoren puffern die Wirkung von Belastungen ab. In der Beratung lassen sich vor allem Belastungen und Schutzfaktoren beeinflussen."
          },
          {
            typ: "text",
            titel: "Kategorial und dimensional denken",
            text: "Klassifikationssysteme wie die ICD arbeiten überwiegend **kategorial**: Eine Störung liegt vor oder nicht. Dafür werden Kriterien wie Anzahl, Dauer und Schwere von Symptomen sowie die Beeinträchtigung festgelegt. Diese Logik ist für Verständigung, Forschung und Versorgungsplanung unverzichtbar.\n\nZugleich zeigt die Forschung, dass viele psychische Phänomene **dimensional** verteilt sind: Niedergeschlagenheit, Ängstlichkeit oder Misstrauen kommen in allen Abstufungen vor. Die Grenze zwischen „noch normal“ und „schon krank“ ist daher eine fachliche Setzung, keine Naturtatsache. Neuere Ansätze wie die **Hierarchical Taxonomy of Psychopathology (HiTOP)** versuchen, psychische Probleme konsequent dimensional zu beschreiben. Die ICD-11 geht diesen Weg teilweise mit, etwa bei den Persönlichkeitsstörungen.\n\nFür die Beratungspraxis ergeben sich daraus wichtige Konsequenzen:\n\n- **Unterschwellige Belastungen ernst nehmen.** Auch wer die Kriterien einer Störung nicht erfüllt, kann erheblich leiden und von Unterstützung profitieren.\n- **Diagnosen nicht verdinglichen.** Eine Diagnose beschreibt ein Muster von Erleben und Verhalten, nicht das Wesen eines Menschen. Sprachlich drückt sich das etwa in „eine Person mit Depression“ statt „ein Depressiver“ aus.\n- **Stigmatisierung vermeiden.** Psychische Störungen sind häufig; die Angst vor Etikettierung hält viele Betroffene davon ab, Hilfe zu suchen. Eine sachliche, nicht dramatisierende Sprache erleichtert den Weg ins Hilfesystem.\n\nSo verstanden ist klinisches Wissen ein Werkzeug, das genaues Hinsehen ermöglicht – ohne den Menschen auf seine Symptome zu reduzieren."
          },
          {
            typ: "luecke",
            text: "Die ICD-11 ist seit dem {{1. Januar 2022|1. Januar 2018|1. Januar 2025}} international in Kraft. Psychische Störungen finden sich dort in Kapitel {{6|5|F}}. Das Vulnerabilitäts-Stress-Modell wurde ursprünglich von {{Zubin und Spring|Deci und Ryan|Kahneman und Tversky}} formuliert.",
            erklaerung: "Die ICD-11 gilt seit dem 1. Januar 2022. Das F-Kapitel war die Bezeichnung in der ICD-10 (Kapitel V); in der ICD-11 beginnen die Codes psychischer Störungen mit der Ziffer 6. Zubin und Spring formulierten das Vulnerabilitäts-Stress-Modell 1977."
          },
          {
            typ: "fall",
            titel: "Erschöpft nach der Pflege",
            fall: "Konstruierte Lehrvignette: Herr T., 62 Jahre, hat seine Frau über zwei Jahre bis zu ihrem Tod gepflegt. Drei Monate danach kommt er in die Beratungsstelle. Er weint viel, schläft schlecht, isst wenig und sagt: „Ich weiß nicht, wofür ich morgens aufstehen soll.“ Er versorgt sich aber selbst, trifft sich regelmäßig mit seiner Tochter und geht zur Arbeit. Gedanken, sich das Leben zu nehmen, verneint er auf Nachfrage glaubhaft.",
            frage: "Welche Einschätzung ist fachlich am angemessensten?",
            optionen: [
              "Herr T. hat eindeutig eine schwere Depression; die Beratung muss sofort beendet werden.",
              "Es handelt sich um normale Trauer; eine ärztliche Abklärung ist grundsätzlich überflüssig.",
              "Die Beschwerden sind nach einem schweren Verlust verständlich. Beratung kann begleiten; dabei sollte der Verlauf aufmerksam beobachtet und eine hausärztliche Abklärung angeregt werden, insbesondere wenn die Beschwerden zunehmen oder anhalten.",
              "Die Beraterin sollte eine anhaltende Trauerstörung diagnostizieren, um ihm Klarheit zu geben."
            ],
            richtig: 2,
            erklaerung: "Trauer nach einem schweren Verlust kann depressionsähnliche Beschwerden einschließen, ohne krankhaft zu sein. Gleichzeitig können Schlaf- und Appetitstörungen sowie Hoffnungslosigkeit auf eine beginnende Depression hinweisen. Angemessen ist daher Begleitung mit wachem Blick und Anregung einer ärztlichen Abklärung. Diagnosen zu stellen ist nicht Aufgabe der Beratung – und eine anhaltende Trauerstörung setzt nach ICD-11 zudem in der Regel einen deutlich längeren Zeitraum seit dem Verlust voraus."
          },
          {
            typ: "merke",
            text: "Beratende diagnostizieren nicht – aber sie erkennen, wann eine Diagnostik nötig ist. Dafür brauchen sie fundiertes klinisches Grundwissen und eine klare Vorstellung von ihren eigenen Grenzen."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Grundbegriffe",
            karten: [
              { vorne: "Vier D", hinten: "Devianz, Distress, Dysfunktion, Danger (Gefährdung) – Kriterien zur Beurteilung psychischer Auffälligkeit, keines allein hinreichend." },
              { vorne: "Schädliche Dysfunktion", hinten: "Störungsbegriff nach Wakefield: Fehlfunktion eines psychischen Mechanismus, die als schädlich bewertet wird." },
              { vorne: "ICD-11, Kapitel 6", hinten: "„Psychische Störungen, Verhaltensstörungen oder neuronale Entwicklungsstörungen“; seit 1. Januar 2022 in Kraft." },
              { vorne: "Vulnerabilitäts-Stress-Modell", hinten: "Störungen entstehen aus dem Zusammenwirken von Anfälligkeit und Belastung; Schutzfaktoren heben die Schwelle." },
              { vorne: "Biopsychosoziales Modell", hinten: "Nach George Engel: Gesundheit und Krankheit als Zusammenspiel biologischer, psychischer und sozialer Faktoren." }
            ]
          }
        ]
      },

      /* ---------- B2-2 ---------- */
      {
        id: "B2-2",
        titel: "Depression und Angststörungen",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Depression: mehr als Traurigkeit",
            text: "Depressive Störungen gehören zu den häufigsten psychischen Erkrankungen weltweit und sind eine der Hauptursachen für gesundheitliche Beeinträchtigung. Umgangssprachlich wird „depressiv“ oft für schlechte Laune gebraucht – klinisch ist eine Depression jedoch ein **anhaltender Zustand**, der Fühlen, Denken, Körper und Verhalten umfassend beeinträchtigt.\n\nDie ICD-11 beschreibt eine **depressive Episode** als einen Zeitraum von **mindestens zwei Wochen**, in dem an fast allen Tagen über den größten Teil des Tages mehrere charakteristische Symptome bestehen. Mindestens eines davon stammt aus dem **affektiven Bereich**:\n\n- **gedrückte Stimmung** (bei Kindern und Jugendlichen auch Reizbarkeit)\n- **deutlich verminderte Freude oder Interesse** an Aktivitäten\n\nHinzu kommen Symptome aus dem **kognitiv-behavioralen** und dem **neurovegetativen** Bereich, etwa:\n\n- Konzentrations- und Entscheidungsschwierigkeiten\n- Gefühle von Wertlosigkeit oder übermäßiger Schuld\n- Hoffnungslosigkeit bezüglich der Zukunft\n- wiederkehrende Gedanken an den Tod oder Suizidgedanken\n- Schlafstörungen und Appetitveränderungen\n- psychomotorische Unruhe oder Verlangsamung\n- verminderte Energie, Erschöpfbarkeit\n\nNach Schweregrad werden leichte, mittelgradige und schwere Episoden unterschieden. Zu differenzieren sind einzelne und **rezidivierende** depressive Störungen, die **Dysthymie** als länger anhaltende, meist mildere Form sowie depressive Episoden im Rahmen **bipolarer Störungen**, bei denen auch manische oder hypomanische Phasen auftreten.\n\nDepressionen sind gut **behandelbar**, insbesondere mit Psychotherapie und – je nach Schweregrad – Medikamenten. Für Deutschland bietet die Nationale VersorgungsLeitlinie Unipolare Depression eine verlässliche Orientierung."
          },
          {
            typ: "multi",
            frage: "Welche der folgenden Beschwerden gehören zu den charakteristischen Symptomen einer depressiven Episode? (Mehrere Antworten möglich)",
            optionen: [
              "Deutlich verminderte Freude oder Interesse an Aktivitäten",
              "Wiederkehrende, plötzlich einsetzende Anfälle intensiver Angst mit Herzrasen",
              "Gefühle von Wertlosigkeit oder übermäßiger Schuld",
              "Schlafstörungen und verminderte Energie",
              "Ausgeprägt gehobene Stimmung mit vermindertem Schlafbedürfnis"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Interessenverlust, Wertlosigkeits- und Schuldgefühle sowie Schlafstörungen und Energieverlust sind typische depressive Symptome. Plötzliche Angstanfälle sind charakteristisch für Panikattacken; gehobene Stimmung mit vermindertem Schlafbedürfnis weist auf eine (hypo)manische Phase hin – ein wichtiger Hinweis auf eine mögliche bipolare Störung."
          },
          {
            typ: "text",
            titel: "Depression verstehen und begegnen",
            text: "Depressionen entstehen im Sinne des Vulnerabilitäts-Stress-Modells aus dem Zusammenspiel vieler Faktoren. Zu den psychologischen Erklärungsansätzen gehören unter anderem:\n\n- die **kognitive Theorie** nach Aaron T. Beck mit der **kognitiven Triade**: eine negative Sicht auf sich selbst, die Welt bzw. die Erfahrungen und die Zukunft\n- das **Verstärkerverlust-Modell** nach Peter Lewinsohn: Wenn positive Erfahrungen wegfallen, zieht sich die Person zurück, wodurch noch weniger positive Erfahrungen möglich werden – ein Teufelskreis\n- das Konzept der **erlernten Hilflosigkeit** nach Martin Seligman, später zur Hoffnungslosigkeitstheorie weiterentwickelt\n- **interpersonelle** Faktoren wie Verluste, Konflikte und Rollenwechsel\n\nFür den Umgang mit depressiven Menschen in der Beratung haben sich einige Grundsätze bewährt:\n\n- **Ernst nehmen, ohne zu dramatisieren:** „Das klingt, als ginge es Ihnen seit längerer Zeit sehr schlecht.“\n- **Keine Ratschläge wie „Reiß dich zusammen“** oder „Denk positiv“ – sie verstärken Schuldgefühle.\n- **Psychoedukation:** Depression als behandelbare Erkrankung erklären, nicht als Charakterschwäche.\n- **Suizidalität aktiv ansprechen** (siehe Lektion B2-4).\n- **Zu Diagnostik und Behandlung ermutigen** und konkret dabei helfen.\n- **Wichtige Entscheidungen** möglichst nicht in einer schweren depressiven Phase treffen lassen.\n\nBeratung kann bei leichteren Belastungen und begleitend zu einer Behandlung hilfreich sein. Bei Verdacht auf eine depressive Störung ersetzt sie jedoch weder ärztliche noch psychotherapeutische Abklärung."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Erklärungsansätze der Depression ihrer Kernidee zu.",
            paare: [
              ["Kognitive Triade (Beck)", "Negative Sicht auf sich selbst, die Welt und die Zukunft"],
              ["Verstärkerverlust (Lewinsohn)", "Wegfall positiver Erfahrungen führt zu Rückzug und weiterem Verstärkerverlust"],
              ["Erlernte Hilflosigkeit (Seligman)", "Erfahrung, dass eigenes Handeln nichts bewirkt, führt zu Passivität"],
              ["Interpersoneller Ansatz", "Verluste, Rollenwechsel und Beziehungskonflikte als Auslöser und aufrechterhaltende Faktoren"]
            ],
            erklaerung: "Die Ansätze schließen einander nicht aus, sondern beleuchten verschiedene Seiten. In der Praxis wirken meist mehrere Faktoren zusammen."
          },
          {
            typ: "text",
            titel: "Angst und Angststörungen",
            text: "Angst ist eine überlebenswichtige Emotion. Zur **Angststörung** wird sie, wenn sie **unangemessen stark**, **zu häufig** oder **zu lang anhaltend** auftritt, mit starkem Leiden verbunden ist und zu Vermeidung führt, die das Leben einschränkt. Angststörungen gehören zu den häufigsten psychischen Störungen überhaupt.\n\nDie ICD-11 fasst sie in der Gruppe der **Angst- oder furchtbezogenen Störungen** zusammen. Wichtige Formen sind:\n\n- **Generalisierte Angststörung:** anhaltende, übermäßige Sorgen über viele Lebensbereiche, oft mit Anspannung, Unruhe, Schlafproblemen\n- **Panikstörung:** wiederkehrende, unerwartete Panikattacken mit intensiven körperlichen Symptomen und anhaltender Sorge vor weiteren Attacken\n- **Agoraphobie:** Angst vor Situationen, in denen Flucht schwierig oder Hilfe nicht verfügbar sein könnte, etwa Menschenmengen, öffentliche Verkehrsmittel, Reisen allein\n- **Soziale Angststörung:** ausgeprägte Angst vor Bewertung durch andere in sozialen Situationen\n- **Spezifische Phobie:** auf bestimmte Objekte oder Situationen beschränkte Angst, etwa vor Tieren, Höhe, Spritzen\n- **Trennungsangststörung:** übermäßige Angst vor der Trennung von Bindungspersonen, auch im Erwachsenenalter möglich\n\nViele Angstreaktionen haben **körperliche Begleiterscheinungen** wie Herzrasen, Atemnot, Schwindel oder Brustschmerz. Deshalb ist eine **ärztliche Abklärung** wichtig, um körperliche Ursachen – etwa Herz- oder Schilddrüsenerkrankungen – auszuschließen.\n\nAngststörungen sind mit kognitiv-verhaltenstherapeutischen Verfahren, insbesondere mit Konfrontation, gut behandelbar."
          },
          {
            typ: "kategorien",
            frage: "Welche Angststörung liegt dem beschriebenen Erleben am ehesten zugrunde? (Es handelt sich um Lernübungen, keine Diagnosen.)",
            kategorien: ["Generalisierte Angststörung", "Panikstörung", "Soziale Angststörung", "Spezifische Phobie"],
            elemente: [
              { text: "Sorgt sich seit Monaten fast ständig um Gesundheit, Finanzen und die Kinder und kann die Sorgen nicht abstellen.", kat: 0 },
              { text: "Erlebt aus heiterem Himmel Herzrasen, Atemnot und Todesangst und fürchtet seitdem jede neue Attacke.", kat: 1 },
              { text: "Meidet Teamsitzungen, weil sie fürchtet, sich zu blamieren und negativ bewertet zu werden.", kat: 2 },
              { text: "Kann wegen intensiver Angst vor Spritzen keine Blutabnahme zulassen.", kat: 3 },
              { text: "Isst nie in der Kantine, aus Sorge, andere könnten bemerken, dass seine Hände zittern.", kat: 2 },
              { text: "Grübelt jeden Abend über alles, was schiefgehen könnte, und ist tagsüber angespannt und erschöpft.", kat: 0 }
            ],
            erklaerung: "Die generalisierte Angststörung ist durch frei flottierende, viele Bereiche betreffende Sorgen gekennzeichnet; die Panikstörung durch unerwartete Angstanfälle und Erwartungsangst; die soziale Angststörung durch Furcht vor Bewertung; die spezifische Phobie durch Angst vor klar umgrenzten Auslösern."
          },
          {
            typ: "text",
            titel: "Der Teufelskreis der Angst und die Rolle der Vermeidung",
            text: "Wie Angst sich selbst verstärken kann, zeigt das psychophysiologische Modell der Panikstörung, das im deutschsprachigen Raum vor allem durch Jürgen Margraf und Silvia Schneider als **Teufelskreis der Angst** bekannt wurde:\n\n1. Eine **körperliche Veränderung** wird wahrgenommen (z. B. Herzklopfen nach dem Treppensteigen).\n2. Sie wird als **gefährlich bewertet** („Ich bekomme einen Herzinfarkt!“).\n3. Es entsteht **Angst**.\n4. Die Angst führt zu weiteren **körperlichen Symptomen** (schnellerer Puls, Atemnot).\n5. Diese werden wiederum als Bestätigung der Gefahr gedeutet – der Kreis schließt sich und kann sich bis zur Panikattacke aufschaukeln.\n\nLangfristig aufrechterhalten werden Ängste vor allem durch **Vermeidung und Sicherheitsverhalten**. Wer angstauslösende Situationen meidet oder nur mit Begleitung, Notfallmedikament oder Wasserflasche aufsucht, erlebt kurzfristige Erleichterung (negative Verstärkung, vgl. Modul B1) – macht aber nie die Erfahrung, dass die befürchtete Katastrophe ausbleibt.\n\nFür die Beratung bedeutet das:\n\n- Angst als nachvollziehbare Reaktion **validieren**\n- Psychoedukativ erklären, dass Angst unangenehm, aber in der Regel **nicht gefährlich** ist und von selbst wieder abklingt\n- Vermeidung nicht unterstützen, etwa indem man Ratsuchenden alle angstbesetzten Aufgaben abnimmt\n- Bei ausgeprägten Ängsten an **Psychotherapie** vermitteln, wo Konfrontationsverfahren fachgerecht durchgeführt werden"
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Schritte des Teufelskreises der Angst in die richtige Reihenfolge.",
            elemente: [
              "Wahrnehmung einer körperlichen Veränderung",
              "Bewertung als gefährlich",
              "Entstehung von Angst",
              "Zunahme körperlicher Symptome",
              "Deutung als Bestätigung der Gefahr"
            ],
            erklaerung: "Der Kreislauf beginnt mit einer harmlosen Körperempfindung, die katastrophisierend bewertet wird. Die Angst steigert die Körpersymptome, die wiederum als Beweis der Gefahr gelten. An der Bewertung setzt die kognitive Therapie an, an der Vermeidung die Konfrontation."
          },
          {
            typ: "truefalse",
            aussage: "Wer einer Person mit Angststörung konsequent alle angstauslösenden Situationen abnimmt, unterstützt langfristig ihre Genesung.",
            richtig: false,
            erklaerung: "Kurzfristig entlastet das Abnehmen, langfristig verstärkt es die Vermeidung und verhindert korrigierende Erfahrungen. Hilfreicher sind Verständnis, Ermutigung und die Vermittlung an fachgerechte Behandlung."
          },
          {
            typ: "fall",
            titel: "Herzrasen im Supermarkt",
            fall: "Konstruierte Lehrvignette: Frau S., 34 Jahre, berichtet in der betrieblichen Sozialberatung, sie habe vor einigen Wochen im Supermarkt plötzlich Herzrasen, Schwindel und große Angst bekommen, „als würde ich sterben“. Seitdem kauft nur noch ihr Mann ein. Inzwischen fürchtet sie auch die Fahrt zur Arbeit. Beim Hausarzt war sie bisher nicht.",
            frage: "Welches Vorgehen ist am angemessensten?",
            optionen: [
              "Sofort ein Expositionstraining im Supermarkt mit ihr durchführen.",
              "Ihr raten, sich zu schonen und Einkäufe weiterhin dem Mann zu überlassen.",
              "Ihr erklären, dass ihre Beschwerden eindeutig psychisch bedingt sind und keine ärztliche Abklärung nötig ist.",
              "Ihre Angst würdigen, psychoedukativ über Angst informieren, eine hausärztliche Abklärung körperlicher Ursachen anregen und auf psychotherapeutische Unterstützung hinweisen."
            ],
            richtig: 3,
            erklaerung: "Die Beschwerden können auf eine Panikstörung mit beginnender Agoraphobie hindeuten. Körperliche Ursachen müssen jedoch ärztlich ausgeschlossen werden. Konfrontationsbehandlung gehört in psychotherapeutische Hände. Schonung würde die Vermeidung verstärken."
          },
          {
            typ: "merke",
            text: "Vermeidung lindert Angst kurzfristig und erhält sie langfristig. Beratende unterstützen Mut zur Begegnung mit der Angst – und vermitteln an Behandlung, wenn die Angst das Leben bestimmt."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Depression und Angst",
            karten: [
              { vorne: "Depressive Episode (ICD-11)", hinten: "Mindestens zwei Wochen, fast täglich; mindestens ein affektives Kernsymptom: gedrückte Stimmung oder deutlich verminderte Freude bzw. Interesse." },
              { vorne: "Kognitive Triade", hinten: "Nach Beck: negative Sicht auf sich selbst, die Welt bzw. die eigenen Erfahrungen und die Zukunft." },
              { vorne: "Hinweis auf bipolare Störung", hinten: "Phasen gehobener oder gereizter Stimmung mit vermindertem Schlafbedürfnis und gesteigertem Antrieb – immer erfragen und ärztlich abklären lassen." },
              { vorne: "Panikstörung", hinten: "Wiederkehrende, unerwartete Panikattacken und anhaltende Sorge vor weiteren Attacken." },
              { vorne: "Sicherheitsverhalten", hinten: "Verhaltensweisen wie Begleitung oder Notfallmedikament, die kurzfristig beruhigen, aber korrigierende Erfahrungen verhindern." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Welche Sätze haben Sie selbst schon gegenüber niedergeschlagenen oder ängstlichen Menschen gesagt, die gut gemeint, aber vielleicht wenig hilfreich waren?",
            hinweis: "Denken Sie an Formulierungen wie „Kopf hoch“ oder „Da musst du einfach durch“. Wie könnten Sie dieselbe Zuwendung so ausdrücken, dass sie das Erleben der Person anerkennt und den Weg zu Unterstützung öffnet?"
          }
        ]
      },

      /* ---------- B2-3 ---------- */
      {
        id: "B2-3",
        titel: "Traumafolgen und Abhängigkeitserkrankungen",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Was ist ein Trauma?",
            text: "Der Begriff „Trauma“ wird im Alltag inflationär gebraucht. Fachlich bezeichnet ein **traumatisches Ereignis** ein Ereignis von **außergewöhnlich bedrohlicher oder entsetzlicher Natur**, etwa Gewalt, sexuelle Übergriffe, schwere Unfälle, Krieg, Folter, Naturkatastrophen oder das Miterleben des gewaltsamen Todes anderer.\n\nWichtig sind zwei Unterscheidungen:\n\n- **Ereignis und Folge:** Nicht das Ereignis allein, sondern die Reaktion darauf ist klinisch bedeutsam. Viele Menschen erleben nach einem Trauma vorübergehend starke Belastungsreaktionen – Schlafprobleme, Bilder, die sich aufdrängen, Schreckhaftigkeit –, die sich bei einem großen Teil in den folgenden Wochen bis Monaten **von selbst zurückbilden**.\n- **Einmalige und wiederholte Traumatisierung:** Häufig wird zwischen einmaligen, plötzlichen Ereignissen (Typ-I-Trauma) und wiederholten, lang andauernden Traumatisierungen, etwa fortgesetzter Gewalt in der Kindheit (Typ-II-Trauma), unterschieden. Letztere gehen häufiger mit komplexen Folgen einher.\n\nOb sich nach einem Trauma eine Störung entwickelt, hängt von vielen Faktoren ab: Art und Schwere des Ereignisses, frühere Belastungen, peritraumatische Reaktionen wie Dissoziation – und sehr wesentlich von der **sozialen Unterstützung danach**. Anerkennung, Sicherheit und Zuwendung sind starke Schutzfaktoren.\n\nFür Beratende gilt: **Nicht jedes belastende Erlebnis ist ein Trauma, und nicht jedes Trauma führt zu einer Störung.** Beides vorschnell anzunehmen, kann ebenso schaden wie das Übersehen."
          },
          {
            typ: "truefalse",
            aussage: "Die meisten Menschen, die ein traumatisches Ereignis erleben, entwickeln eine Posttraumatische Belastungsstörung.",
            richtig: false,
            erklaerung: "Akute Belastungsreaktionen sind häufig, bilden sich aber bei vielen Menschen im Verlauf zurück. Nur ein Teil der Betroffenen entwickelt eine PTBS; das Risiko hängt unter anderem von der Art des Ereignisses, früheren Belastungen und der sozialen Unterstützung ab."
          },
          {
            typ: "text",
            titel: "PTBS und komplexe PTBS nach ICD-11",
            text: "Die ICD-11 beschreibt die **Posttraumatische Belastungsstörung (PTBS, 6B40)** über drei Kernmerkmale, die nach einem traumatischen Ereignis auftreten und mindestens mehrere Wochen anhalten:\n\n- **Wiedererleben im Hier und Jetzt:** lebhafte, sich aufdrängende Erinnerungen, Flashbacks oder Albträume, begleitet von starken Gefühlen wie Angst oder Entsetzen und körperlichen Reaktionen\n- **Vermeidung:** von Gedanken und Erinnerungen an das Ereignis oder von Aktivitäten, Situationen und Personen, die daran erinnern\n- **Anhaltendes Gefühl gegenwärtiger Bedrohung:** etwa übermäßige Wachsamkeit (Hypervigilanz) und verstärkte Schreckreaktionen\n\nNeu in der ICD-11 ist die **komplexe PTBS (6B41)**. Sie umfasst alle Merkmale der PTBS und zusätzlich anhaltende **Störungen der Selbstorganisation**:\n\n- **Probleme der Affektregulation**, etwa heftige Gefühlsausbrüche oder emotionale Taubheit\n- ein **negatives Selbstbild**, verbunden mit Gefühlen von Scham, Schuld oder Wertlosigkeit\n- **Beziehungsschwierigkeiten**, etwa Mühe, Nähe zuzulassen oder Beziehungen aufrechtzuerhalten\n\nDie komplexe PTBS tritt typischerweise nach lang andauernden oder wiederholten Traumatisierungen auf, denen schwer oder gar nicht zu entkommen war.\n\nIm Spektrum der stressbezogenen Störungen finden sich außerdem die **Anpassungsstörung** – eine belastende Reaktion auf eine identifizierbare Lebensveränderung wie Trennung oder Arbeitsplatzverlust – und die **anhaltende Trauerstörung**.\n\nTraumafokussierte Psychotherapien, etwa traumafokussierte kognitive Verhaltenstherapie oder EMDR, sind gut wirksam. Sie gehören in die Hände entsprechend qualifizierter Psychotherapeutinnen und Psychotherapeuten."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Beschreibungen den Merkmalen der PTBS bzw. den zusätzlichen Merkmalen der komplexen PTBS zu.",
            kategorien: ["Kernmerkmal der PTBS", "Zusätzliches Merkmal der komplexen PTBS"],
            elemente: [
              { text: "Plötzliche Bilder des Unfalls, als passiere er gerade jetzt", kat: 0 },
              { text: "Umgehen der Straße, in der der Überfall stattfand", kat: 0 },
              { text: "Ständige Wachsamkeit und starkes Zusammenzucken bei Geräuschen", kat: 0 },
              { text: "Tiefes, dauerhaftes Gefühl, wertlos und beschmutzt zu sein", kat: 1 },
              { text: "Heftige Gefühlsausbrüche, die kaum zu beruhigen sind", kat: 1 },
              { text: "Anhaltende Schwierigkeiten, anderen Menschen nahe zu kommen", kat: 1 }
            ],
            erklaerung: "Wiedererleben, Vermeidung und ein anhaltendes Bedrohungsgefühl sind die drei Kernmerkmale der PTBS. Die komplexe PTBS umfasst diese und zusätzlich Störungen der Selbstorganisation: Affektregulation, negatives Selbstbild und Beziehungsschwierigkeiten."
          },
          {
            typ: "text",
            titel: "Traumasensibel beraten",
            text: "Beratende begegnen traumatisierten Menschen häufig – in der Jugendhilfe, in der Flüchtlingsarbeit, in der Pflege, im Personalwesen. Eine **traumasensible Haltung** bedeutet nicht, Traumatherapie zu betreiben, sondern so zu arbeiten, dass keine zusätzliche Belastung entsteht. Bewährte Prinzipien sind:\n\n- **Sicherheit vor Aufarbeitung:** Zunächst geht es um äußere und innere Stabilität – Schutz vor weiterer Gewalt, verlässliche Strukturen, Orientierung.\n- **Kontrolle zurückgeben:** Ratsuchende entscheiden, was und wie viel sie erzählen. Detailliertes Nachfragen nach traumatischen Inhalten ist in der Beratung **nicht** angezeigt und kann zu Überflutung führen.\n- **Transparenz und Verlässlichkeit:** Abläufe erklären, Zusagen einhalten, Überraschungen vermeiden.\n- **Psychoedukation:** Traumafolgen als normale Reaktionen auf ein unnormales Ereignis verständlich machen.\n- **Ressourcen stärken:** Was hilft, sich sicher zu fühlen? Welche Menschen, Orte, Tätigkeiten stabilisieren?\n- **Auf Anzeichen von Überflutung achten:** abwesender Blick, Erstarren, plötzliche Unruhe. Dann hilft eine Orientierung im Hier und Jetzt – etwa die Aufmerksamkeit auf den Raum, die Füße auf dem Boden oder die aktuelle Uhrzeit zu lenken.\n\nWeitervermittlung an traumatherapeutisch qualifizierte Fachpersonen ist angezeigt, wenn deutliche Traumafolgesymptome bestehen. Für Betroffene von Gewalt gibt es zudem spezialisierte Beratungsstellen und Opferhilfeeinrichtungen.\n\nAuch Beratende selbst können durch das Anhören traumatischer Erfahrungen belastet werden (**sekundäre Traumatisierung**). Supervision und Selbstfürsorge sind daher keine Kür, sondern professionelle Pflicht."
          },
          {
            typ: "dialog",
            titel: "Überflutung im Gespräch",
            einleitung: "Konstruierte Situation: Ein 19-jähriger Mann, Herr A., ist vor einem Jahr aus einem Kriegsgebiet geflüchtet. Im Gespräch mit der Sozialberaterin über seine Ausbildung erwähnt er die Flucht. Plötzlich wird er still, sein Blick wird starr.",
            runden: [
              {
                klient: "(leise) „Auf dem Boot … da waren so viele … ich sehe sie immer noch …“",
                antworten: [
                  { text: "„Was genau ist auf dem Boot passiert? Erzählen Sie mir alles, das hilft beim Verarbeiten.“", gut: false, feedback: "Detailliertes Nachfragen kann zu weiterer Überflutung führen. Die Verarbeitung traumatischer Inhalte gehört in einen geschützten therapeutischen Rahmen und folgt nach Stabilisierung." },
                  { text: "„Herr A., Sie sind jetzt hier bei mir in der Beratungsstelle, in Sicherheit. Spüren Sie Ihre Füße auf dem Boden?“", gut: true, feedback: "Die Orientierung im Hier und Jetzt hilft, aus dem Wiedererleben herauszufinden. Ansprache mit Namen, ruhige Stimme und Bezug auf Körper und Raum sind bewährte Mittel." },
                  { text: "„Das ist vorbei, daran sollten Sie jetzt nicht mehr denken.“", gut: false, feedback: "Gut gemeint, aber wenig hilfreich: Das Wiedererleben geschieht unwillkürlich. Die Aufforderung, nicht daran zu denken, kann Scham erzeugen." }
                ]
              },
              {
                klient: "(atmet schneller, schaut auf) „Ja … ja. Entschuldigung. Das passiert manchmal.“",
                antworten: [
                  { text: "„Sie müssen sich nicht entschuldigen. Solche Erinnerungen können sich nach schlimmen Erlebnissen plötzlich aufdrängen – das ist eine bekannte Reaktion.“", gut: true, feedback: "Normalisierung und Psychoedukation entlasten: Die Reaktion wird als nachvollziehbare Traumafolge verständlich, nicht als persönliches Versagen." },
                  { text: "„Das ist ganz klar eine PTBS, die müssen Sie behandeln lassen.“", gut: false, feedback: "Eine Diagnose zu stellen ist nicht Aufgabe der Beratung. Ein vorschnelles Etikett kann zudem verunsichern." },
                  { text: "„Kein Problem. Also, zurück zur Ausbildung: Haben Sie die Unterlagen dabei?“", gut: false, feedback: "Der schnelle Themenwechsel übergeht das Erlebte. Herr A. könnte daraus schließen, dass seine Belastung hier keinen Platz hat." }
                ]
              },
              {
                klient: "„Manchmal kann ich nachts nicht schlafen. Und in der Schule kann ich mich nicht konzentrieren.“",
                antworten: [
                  { text: "„Da sollten Sie abends einfach mal einen Tee trinken.“", gut: false, feedback: "Alltagstipps greifen bei möglichen Traumafolgesymptomen zu kurz und können den Eindruck vermitteln, die Belastung werde nicht ernst genommen." },
                  { text: "„Das hat bestimmt nichts mit der Flucht zu tun, das ist bei jungen Leuten normal.“", gut: false, feedback: "Die Verbindung zur Flucht vorschnell auszuschließen, kann eine behandlungsbedürftige Traumafolge übersehen lassen." },
                  { text: "„Es gibt Fachleute, die sich mit solchen Belastungen nach der Flucht gut auskennen. Wäre es für Sie in Ordnung, wenn ich Ihnen zeige, wie Sie Kontakt aufnehmen können?“", gut: true, feedback: "Die Weitervermittlung wird mit Erlaubnisfrage angeboten, was die Kontrolle bei Herrn A. lässt. Spezialisierte Angebote, etwa psychosoziale Zentren für Geflüchtete, sind hier eine geeignete Anlaufstelle." }
                ]
              }
            ]
          },
          {
            typ: "text",
            titel: "Abhängigkeitserkrankungen: Grundlagen",
            text: "Abhängigkeitserkrankungen gehören zu den häufigsten psychischen Störungen und betreffen in Deutschland vor allem Tabak und Alkohol, daneben Medikamente, illegale Drogen und Verhaltenssüchte. Die ICD-11 unterscheidet bei **Störungen durch Substanzgebrauch** unter anderem:\n\n- **Schädliches Gebrauchsmuster:** Der Konsum hat bereits zu körperlichen oder psychischen Schäden geführt oder andere geschädigt, ohne dass eine Abhängigkeit vorliegt.\n- **Abhängigkeit:** eine Störung der Regulation des Substanzgebrauchs. Die ICD-11 nennt drei Kernmerkmale: **beeinträchtigte Kontrolle** über den Konsum, **zunehmender Vorrang** des Konsums gegenüber anderen Interessen und Pflichten trotz Schäden sowie **körperliche Merkmale** wie Toleranzentwicklung und Entzugserscheinungen. Für die Diagnose müssen in der Regel mindestens zwei der drei Merkmale über einen Zeitraum von mindestens zwölf Monaten vorliegen; bei täglichem oder nahezu täglichem Konsum genügt ein kürzerer Zeitraum.\n\nAls **Verhaltenssüchte** führt die ICD-11 die **Glücksspielstörung** und die **Computerspielstörung** auf.\n\nAbhängigkeit ist **keine Willensschwäche**, sondern eine Erkrankung, an deren Entstehung biologische, psychische und soziale Faktoren beteiligt sind. Stigmatisierende Sprache wie „Säufer“ oder „Junkie“ erschwert Betroffenen den Weg ins Hilfesystem.\n\nEin wichtiger Hinweis zur Sicherheit: Bei Alkohol- und Benzodiazepinabhängigkeit kann ein **abrupter Entzug lebensgefährlich** sein, etwa durch Krampfanfälle oder ein Delir. Ein Entzug sollte daher ärztlich begleitet werden."
          },
          {
            typ: "multi",
            frage: "Welche Merkmale nennt die ICD-11 als Kernmerkmale einer Abhängigkeit? (Mehrere Antworten möglich)",
            optionen: [
              "Beeinträchtigte Kontrolle über den Konsum",
              "Konsum ausschließlich am Wochenende",
              "Zunehmender Vorrang des Konsums gegenüber anderen Interessen und Pflichten",
              "Körperliche Merkmale wie Toleranz und Entzugserscheinungen",
              "Konsum gemeinsam mit anderen Menschen"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Die drei Kernmerkmale sind beeinträchtigte Kontrolle, zunehmender Vorrang des Konsums und körperliche Merkmale. Ob jemand am Wochenende oder in Gesellschaft konsumiert, ist für sich genommen kein diagnostisches Kriterium."
          },
          {
            typ: "text",
            titel: "Veränderungsbereitschaft: das Transtheoretische Modell",
            text: "Viele Menschen mit problematischem Konsum sind hin- und hergerissen: Sie sehen Nachteile, wollen aber auf die Vorteile nicht verzichten. James Prochaska und Carlo DiClemente beschrieben im **Transtheoretischen Modell** typische **Stadien der Veränderung**:\n\n1. **Absichtslosigkeit:** Ein Problem wird nicht gesehen oder eine Veränderung nicht in Erwägung gezogen.\n2. **Absichtsbildung:** Das Problem wird wahrgenommen, die Person ist ambivalent und wägt ab.\n3. **Vorbereitung:** Es gibt eine Entscheidung zur Veränderung und erste konkrete Pläne.\n4. **Handlung:** Die Veränderung wird aktiv umgesetzt.\n5. **Aufrechterhaltung:** Das neue Verhalten wird stabilisiert, Rückfällen wird vorgebeugt.\n\n**Rückfälle** gelten im Modell nicht als Scheitern, sondern als häufiger Teil des Veränderungsprozesses; viele Menschen durchlaufen die Stadien mehrfach.\n\nDer praktische Nutzen liegt in der **Passung der Intervention**: Einer Person in Absichtslosigkeit hilft kein Abstinenzplan, sondern eher eine respektvolle, nicht konfrontative Auseinandersetzung mit ihrer Sicht. Wer sich schon vorbereitet, profitiert dagegen von konkreter Planung. Das Modell ist empirisch nicht unumstritten – Stadien sind weniger klar voneinander abgrenzbar, als das Schema nahelegt –, als Orientierung ist es in der Suchtberatung aber weit verbreitet.\n\nIn Deutschland stehen mit den **Suchtberatungsstellen** niedrigschwellige, meist kostenfreie Anlaufstellen zur Verfügung, die auch Angehörige beraten. Das Vorgehen bei Ambivalenz wird in Modul B3 mit dem **Motivational Interviewing** vertieft."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Stadien des Transtheoretischen Modells in die richtige Reihenfolge.",
            elemente: ["Absichtslosigkeit", "Absichtsbildung", "Vorbereitung", "Handlung", "Aufrechterhaltung"],
            erklaerung: "Die Stadien beschreiben einen typischen, aber nicht zwingend linearen Verlauf. Rückfälle in frühere Stadien sind häufig und können als Lernerfahrung genutzt werden."
          },
          {
            typ: "luecke",
            text: "Ein Klient sagt: „Ja, ich trinke zu viel, aber ich weiß nicht, ob ich das überhaupt ändern will.“ Er befindet sich am ehesten im Stadium der {{Absichtsbildung|Absichtslosigkeit|Handlung}}. Ein abrupter Alkoholentzug bei Abhängigkeit sollte {{ärztlich begleitet|selbstständig zu Hause|in der Beratungsstelle}} erfolgen.",
            erklaerung: "Der Klient erkennt das Problem, ist aber ambivalent – das kennzeichnet die Absichtsbildung. Wegen möglicher lebensgefährlicher Komplikationen wie Krampfanfällen oder Delir gehört ein Alkoholentzug bei Abhängigkeit in ärztliche Begleitung."
          },
          {
            typ: "merke",
            text: "Trauma und Sucht verlangen besondere Sorgfalt: Sicherheit geht vor Aufarbeitung, Verständnis vor Konfrontation – und fachgerechte Behandlung gehört in die Hände dafür qualifizierter Fachpersonen."
          }
        ]
      },

      /* ---------- B2-4 ---------- */
      {
        id: "B2-4",
        titel: "Warnzeichen, Krisen und die Grenzen der Beratung",
        dauer: 40,
        schritte: [
          {
            typ: "text",
            titel: "Suizidalität erkennen",
            text: "Suizidalität ist das wichtigste Warnzeichen, dem Beratende begegnen können. Sie reicht von passiven Todeswünschen („Es wäre mir egal, wenn ich morgens nicht mehr aufwache“) über Suizidgedanken und -pläne bis zu konkreten Vorbereitungen und Suizidversuchen.\n\n**Risikofaktoren** sind unter anderem:\n\n- frühere Suizidversuche (einer der stärksten Risikofaktoren)\n- psychische Erkrankungen, insbesondere Depression, Abhängigkeit, Psychosen\n- Suizide in Familie oder Umfeld\n- akute Krisen wie Trennung, Arbeitsplatzverlust, Verschuldung, Scham- und Kränkungserlebnisse\n- soziale Isolation, chronische Schmerzen und schwere körperliche Erkrankungen\n- Zugang zu Suizidmitteln\n\n**Warnzeichen** können sein: direkte oder indirekte Ankündigungen („Bald habt ihr Ruhe vor mir“), ausgeprägte Hoffnungslosigkeit, sozialer Rückzug, Verschenken wichtiger Dinge, Regeln letzter Angelegenheiten sowie eine plötzliche, unerklärliche Ruhe nach einer Phase großer Verzweiflung.\n\nErwin Ringel beschrieb das **präsuizidale Syndrom** mit drei Merkmalen: zunehmende **Einengung** (situativ, emotional, in Beziehungen und Werten), gehemmte und **gegen die eigene Person gerichtete Aggression** sowie **Suizidfantasien**, die sich zunehmend aufdrängen. Walter Pöldinger unterschied die Stadien **Erwägung, Ambivalenz und Entschluss**.\n\nWichtig: Die Ambivalenz – ein Teil will sterben, ein Teil will leben – ist bei vielen suizidalen Menschen lange vorhanden. Genau hier kann ein Gespräch ansetzen."
          },
          {
            typ: "truefalse",
            aussage: "Wer eine Person direkt fragt, ob sie daran denkt, sich das Leben zu nehmen, bringt sie erst auf diesen Gedanken und erhöht so das Risiko.",
            richtig: false,
            erklaerung: "Dies ist ein verbreiteter Mythos. Die Forschung findet keine Hinweise, dass das direkte Ansprechen von Suizidgedanken das Risiko erhöht. Viele Betroffene erleben es im Gegenteil als Entlastung, offen darüber sprechen zu können."
          },
          {
            typ: "text",
            titel: "Suizidalität ansprechen und handeln",
            text: "Bei Hinweisen auf Suizidalität sollte die beratende Person das Thema **offen, ruhig und direkt** ansprechen. Eine schrittweise Annäherung hat sich bewährt:\n\n- „Wenn es Ihnen so schlecht geht – haben Sie manchmal das Gefühl, dass das Leben keinen Sinn mehr hat?“\n- „Denken Sie manchmal daran, sich das Leben zu nehmen?“\n- Bei Bejahung: „Wie konkret sind diese Gedanken? Haben Sie schon darüber nachgedacht, wie oder wann?“ – „Haben Sie schon Vorbereitungen getroffen?“\n- „Was hat Sie bisher davon abgehalten?“ – die Frage nach **Gründen zu leben** stärkt den lebensbejahenden Teil der Ambivalenz.\n\n**Wie handeln?**\n\n- Bei **Suizidgedanken ohne konkrete Pläne** und tragfähiger Absprachefähigkeit: zeitnahe fachärztliche oder psychotherapeutische Abklärung vereinbaren, Krisenkontakte mitgeben, Unterstützungspersonen einbeziehen, nächsten Kontakt verbindlich festlegen.\n- Bei **konkreten Plänen, Vorbereitungen oder fehlender Distanzierung**: Die Person nicht allein lassen, **Notruf 112** wählen oder Begleitung in eine psychiatrische Klinik bzw. Notaufnahme organisieren.\n\nRund um die Uhr erreichbar und kostenfrei ist in Deutschland die **TelefonSeelsorge** unter 0800 111 0 111 und 0800 111 0 222 sowie 116 123. Viele Regionen verfügen über **Krisendienste** und **Sozialpsychiatrische Dienste**.\n\n**Dokumentation** des Gesprächs und der getroffenen Maßnahmen sowie **kollegiale Beratung oder Supervision** sind nach einer solchen Situation unverzichtbar. Niemand sollte eine Suizidkrise allein verantworten."
          },
          {
            typ: "dialog",
            titel: "Suizidgedanken ansprechen",
            einleitung: "Konstruierte Situation: Frau B., 47 Jahre, kommt in die Schuldnerberatung. Ihr Mann hat sie vor kurzem verlassen, die Schulden wachsen. Im Gespräch wirkt sie erschöpft und hoffnungslos.",
            runden: [
              {
                klient: "„Ich weiß gar nicht, warum ich mir das alles noch antue. Es hat doch alles keinen Zweck mehr.“",
                antworten: [
                  { text: "„Kopf hoch, für die Schulden finden wir schon eine Lösung!“", gut: false, feedback: "Vorschnelle Aufmunterung übergeht die Hoffnungslosigkeit und kann dazu führen, dass Frau B. sich nicht ernst genommen fühlt und ihre Gedanken verschweigt." },
                  { text: "„Sie klingen sehr verzweifelt. Wenn Sie sagen, es hat alles keinen Zweck mehr – denken Sie manchmal daran, nicht mehr leben zu wollen?“", gut: true, feedback: "Die Antwort greift das Gefühl auf und fragt offen und direkt nach Suizidgedanken. Das ermöglicht eine Einschätzung und signalisiert, dass auch dieses Thema hier Platz hat." },
                  { text: "„Lassen Sie uns lieber bei den Fakten bleiben, sonst kommen wir nicht weiter.“", gut: false, feedback: "Die Rückführung auf Sachthemen ignoriert ein mögliches Warnzeichen für Suizidalität." }
                ]
              },
              {
                klient: "(nach einer Pause) „Ja … manchmal denke ich, es wäre besser, wenn ich einfach nicht mehr da wäre.“",
                antworten: [
                  { text: "„So etwas dürfen Sie nicht sagen, denken Sie an Ihre Kinder!“", gut: false, feedback: "Moralisieren erzeugt Schuld und Scham und verschließt das Gespräch. Die Kinder können später als Grund zu leben erkundet werden – aber nicht als Vorwurf." },
                  { text: "„Das klingt nach einer Phase, die bald vorbeigeht.“", gut: false, feedback: "Bagatellisieren verhindert eine sorgfältige Einschätzung des Risikos." },
                  { text: "„Danke, dass Sie mir das so offen sagen. Wie konkret sind diese Gedanken? Haben Sie schon darüber nachgedacht, wie Sie es tun würden?“", gut: true, feedback: "Wertschätzung für die Offenheit und die ruhige Frage nach der Konkretheit sind zentrale Schritte der Einschätzung: Gedanken, Pläne und Vorbereitungen unterscheiden sich deutlich im Risiko." }
                ]
              },
              {
                klient: "„Nein, einen Plan habe ich nicht. Wegen meiner Tochter würde ich das auch nicht tun. Aber die Gedanken kommen immer wieder.“",
                antworten: [
                  { text: "„Ihre Tochter ist Ihnen sehr wichtig. Ich möchte, dass Sie mit diesen Gedanken nicht allein bleiben. Können wir gemeinsam überlegen, wie Sie zeitnah ärztliche Unterstützung bekommen, und Sie nehmen die Nummer der TelefonSeelsorge mit?“", gut: true, feedback: "Die Antwort würdigt den Grund zu leben, nimmt die wiederkehrenden Gedanken ernst und leitet konkrete nächste Schritte ein: zeitnahe fachliche Abklärung und erreichbare Krisenkontakte." },
                  { text: "„Gut, dann ist ja alles in Ordnung. Kommen wir zum Haushaltsplan.“", gut: false, feedback: "Fehlende Pläne bedeuten nicht, dass kein Handlungsbedarf besteht. Wiederkehrende Suizidgedanken erfordern eine fachliche Abklärung." },
                  { text: "„Ich rufe jetzt sofort gegen Ihren Willen den Notarzt.“", gut: false, feedback: "Bei glaubhafter Distanzierung, fehlenden Plänen und einem klaren Grund zu leben ist eine Notfalleinweisung in der Regel nicht angezeigt. Angemessen ist eine verbindliche, zeitnahe Abklärung. Bei akuter Gefährdung wäre der Notruf dagegen richtig." }
                ]
              },
              {
                klient: "„Ja … das wäre wohl gut. Ich weiß nur nicht, ob ich mich traue, beim Arzt anzurufen.“",
                antworten: [
                  { text: "„Das müssen Sie schon selbst schaffen, Sie sind ja erwachsen.“", gut: false, feedback: "Hoffnungslose Menschen haben oft wenig Energie für Schritte, die anderen leicht fallen. Konkrete Unterstützung ist hier angemessen." },
                  { text: "„Wenn Sie möchten, können wir den Anruf jetzt gemeinsam von hier aus machen. Und wir vereinbaren gleich einen nächsten Termin.“", gut: true, feedback: "Konkrete Hilfe bei der Kontaktaufnahme senkt die Hürde erheblich. Ein verbindlicher Folgetermin sichert die Kontinuität." },
                  { text: "„Dann warten wir einfach ab, vielleicht wird es von allein besser.“", gut: false, feedback: "Abwarten ohne Absprachen lässt Frau B. mit einem erheblichen Risiko allein." }
                ]
              }
            ]
          },
          {
            typ: "text",
            titel: "Weitere Warnzeichen und Krisensituationen",
            text: "Neben Suizidalität gibt es weitere Situationen, in denen Beratende rasch handeln oder an Fachstellen vermitteln müssen:\n\n- **Psychotische Symptome:** Wahnideen (etwa die feste Überzeugung, verfolgt oder überwacht zu werden), Halluzinationen (z. B. Stimmenhören), stark desorganisiertes Denken oder Verhalten. Diskutieren Sie nicht über Wahninhalte, sondern bleiben Sie ruhig, nehmen Sie die Angst ernst und vermitteln Sie an ärztliche, in der Regel psychiatrische Hilfe.\n- **Manische Symptome:** stark gehobene oder gereizte Stimmung, extremes Redebedürfnis, kaum Schlafbedürfnis, riskante Entscheidungen, etwa große Geldausgaben.\n- **Selbstverletzendes Verhalten:** etwa Ritzen; es dient oft der Spannungsregulation und ist nicht mit Suizidalität gleichzusetzen, sollte aber ernst genommen und fachlich abgeklärt werden.\n- **Fremdgefährdung:** konkrete Drohungen gegenüber anderen Personen.\n- **Kindeswohlgefährdung:** gewichtige Anhaltspunkte für Misshandlung, Vernachlässigung oder sexuellen Missbrauch. Für Fachkräfte der Kinder- und Jugendhilfe regelt § 8a SGB VIII das Vorgehen; für Berufsgeheimnisträger wie Ärztinnen, Psychologen oder Sozialarbeiterinnen schafft § 4 KKG eine Befugnis zur Beratung mit einer insoweit erfahrenen Fachkraft und gegebenenfalls zur Information des Jugendamts.\n- **Häusliche Gewalt:** Schutz hat Vorrang; das bundesweite Hilfetelefon „Gewalt gegen Frauen“ ist unter 116 016 rund um die Uhr erreichbar.\n- **Akute körperliche Notfälle**, etwa Intoxikation oder schwere Entzugssymptome.\n\nIn akuten Gefahrensituationen gilt immer: Eigenschutz beachten und den **Notruf 112** bzw. die **Polizei 110** verständigen. Jede Einrichtung sollte über einen klaren **Krisenplan** verfügen, den alle Mitarbeitenden kennen."
          },
          {
            typ: "kategorien",
            frage: "Wie dringlich ist die jeweilige Situation? Ordnen Sie zu.",
            kategorien: ["Sofort handeln (Notruf/Notfallversorgung)", "Zeitnahe fachliche Abklärung anregen"],
            elemente: [
              { text: "Ein Klient berichtet, er habe Tabletten gesammelt und wolle sie heute Abend nehmen.", kat: 0 },
              { text: "Eine Klientin erzählt, sie schlafe seit Wochen schlecht und habe die Freude an fast allem verloren.", kat: 1 },
              { text: "Ein Klient wirkt stark verwirrt, hat Schaum vor dem Mund und reagiert kaum noch auf Ansprache.", kat: 0 },
              { text: "Ein Jugendlicher erwähnt, dass er sich seit einigen Monaten gelegentlich ritzt, um Druck abzubauen.", kat: 1 },
              { text: "Ein Mann kündigt im Gespräch an, er werde seine Ex-Frau „heute noch fertigmachen“, und zeigt ein Messer.", kat: 0 },
              { text: "Eine Klientin berichtet von anhaltenden Sorgen und Anspannung, die sie seit Monaten nicht abstellen kann.", kat: 1 }
            ],
            erklaerung: "Konkrete Suizidpläne mit Vorbereitungen, akute körperliche Notfälle und konkrete Fremdgefährdung erfordern sofortiges Handeln. Depressive Symptome, nicht-suizidale Selbstverletzung ohne akute Gefahr und anhaltende Ängste erfordern eine zeitnahe fachliche Abklärung, die aktiv angeregt und unterstützt werden sollte."
          },
          {
            typ: "text",
            titel: "Rechtliche und fachliche Grenzen der Beratung",
            text: "Psychologische Beratung bewegt sich in Deutschland in einem klar umrissenen rechtlichen Rahmen. Nach dem **Heilpraktikergesetz** ist die **Ausübung der Heilkunde** – die Feststellung, Heilung oder Linderung von Krankheiten, auch psychischen – approbierten Berufen (Ärztinnen und Ärzte, Psychologische Psychotherapeutinnen und -therapeuten, Kinder- und Jugendlichenpsychotherapeutinnen und -therapeuten bzw. Psychotherapeutinnen und Psychotherapeuten nach neuem Recht) oder Personen mit einer **Heilpraktikererlaubnis**, auch der auf Psychotherapie beschränkten, vorbehalten.\n\nDaraus folgt für eine nicht heilkundliche psychologische Beratung:\n\n- Sie richtet sich an Menschen mit **Lebensfragen, Konflikten, Krisen und Entscheidungen**, nicht an die Behandlung psychischer Störungen.\n- Sie stellt **keine Diagnosen** und verspricht **keine Heilung**.\n- Sie verzichtet auf heilkundliche Bezeichnungen wie „Therapie“ für das eigene Angebot, sofern keine entsprechende Berechtigung besteht.\n- Sie kann **begleitend** zu einer Behandlung stattfinden, wenn dies abgestimmt ist und keine konkurrierenden Interventionen entstehen.\n\nWeitere Grenzen betreffen die **Schweigepflicht**: Für bestimmte Berufsgruppen, etwa staatlich anerkannte Sozialarbeiterinnen und Sozialpädagogen oder Berufspsychologen mit staatlich anerkannter wissenschaftlicher Abschlussprüfung, ist die Verletzung von Privatgeheimnissen nach **§ 203 StGB** strafbar. Unabhängig davon gebieten Berufsethik und Datenschutz Vertraulichkeit. Ausnahmen bestehen etwa bei Einwilligung und in Notstandssituationen.\n\nFachlich sind die eigenen **Kompetenzgrenzen** zu achten: Was übersteigt meine Qualifikation? Wo brauche ich Supervision? Wo bin ich persönlich zu verstrickt, etwa bei Doppelbeziehungen?"
          },
          {
            typ: "multi",
            frage: "Welche Aussagen beschreiben die Grenzen einer nicht heilkundlichen psychologischen Beratung zutreffend? (Mehrere Antworten möglich)",
            optionen: [
              "Sie darf keine Diagnosen psychischer Störungen stellen.",
              "Sie darf eine diagnostizierte Depression eigenverantwortlich behandeln, wenn die Klientin keine Therapie möchte.",
              "Sie kann Menschen in Lebenskrisen und bei Entscheidungen begleiten.",
              "Sie kann begleitend zu einer Psychotherapie stattfinden, wenn dies abgestimmt ist.",
              "Sie darf ihr Angebot als „Psychotherapie“ bezeichnen, wenn die Methoden therapeutisch sind."
            ],
            richtig: [0, 2, 3],
            erklaerung: "Beratung ohne heilkundliche Erlaubnis begleitet bei Lebensfragen und Krisen, auch begleitend und abgestimmt zu einer Behandlung. Die Behandlung psychischer Störungen und die Verwendung heilkundlicher Bezeichnungen für das eigene Angebot sind ohne Approbation bzw. Heilpraktikererlaubnis unzulässig."
          },
          {
            typ: "text",
            titel: "Weiterverweisung verantwortungsvoll gestalten",
            text: "Weiterverweisung ist **kein Abschieben**, sondern eine professionelle Leistung. Studien und Praxiserfahrung zeigen, dass viele Vermittlungen scheitern, weil die Hürden zu hoch sind oder sich Ratsuchende zurückgewiesen fühlen. Eine gute Weiterverweisung umfasst:\n\n- **Begründung und Transparenz:** „Was Sie beschreiben, sollte fachlich genauer angeschaut werden, weil es gut behandelbar ist. Das kann ich in meiner Rolle nicht leisten.“\n- **Beziehung halten:** Klarmachen, dass die Weiterverweisung kein Ende der Unterstützung bedeutet, wenn eine begleitende Beratung sinnvoll und abgestimmt ist.\n- **Konkrete Wege aufzeigen:** In Deutschland sind wichtige Anlaufstellen die **Hausärztin bzw. der Hausarzt**, die **psychotherapeutische Sprechstunde** bei niedergelassenen Psychotherapeutinnen und Psychotherapeuten, die **Terminservicestellen** der Kassenärztlichen Vereinigungen (Telefon 116 117), **psychiatrische Institutsambulanzen**, **Sozialpsychiatrische Dienste**, **Suchtberatungsstellen** und spezialisierte Fachberatungsstellen.\n- **Hürden senken:** Kontaktdaten mitgeben, gemeinsam anrufen, auf Wartezeiten vorbereiten.\n- **Einverständnis einholen:** Informationen an andere Stellen nur mit Einwilligung der ratsuchenden Person weitergeben – außer in akuten Notfällen.\n- **Nachfassen:** Im nächsten Kontakt fragen, ob die Vermittlung geklappt hat.\n\nEine gut gepflegte, aktuelle **Liste regionaler Hilfsangebote** gehört zur Grundausstattung jeder Beratungstätigkeit."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Schritte einer gelungenen Weiterverweisung in eine sinnvolle Reihenfolge.",
            elemente: [
              "Beobachtungen und Anlass transparent und wertschätzend benennen",
              "Möglichkeiten und geeignete Anlaufstellen gemeinsam besprechen",
              "Einverständnis für den nächsten Schritt und eine eventuelle Informationsweitergabe einholen",
              "Kontaktaufnahme konkret unterstützen, etwa durch gemeinsames Anrufen",
              "Im Folgekontakt nachfragen, ob die Vermittlung gelungen ist"
            ],
            erklaerung: "Eine gelungene Weiterverweisung beginnt mit Transparenz, bezieht die Person in die Auswahl ein, respektiert ihre Entscheidung, senkt praktische Hürden und endet nicht mit der Übergabe einer Telefonnummer, sondern mit dem Nachfassen."
          },
          {
            typ: "merke",
            text: "Die eigenen Grenzen zu kennen ist kein Zeichen von Schwäche, sondern von Professionalität. Gute Beratung weiß, wann sie begleitet – und wann sie den Weg zu anderer Hilfe ebnet."
          },
          {
            typ: "reflexion",
            frage: "Welche Krisen- und Fachstellen gibt es in Ihrer Region, und wie aktuell ist Ihr Wissen darüber?",
            hinweis: "Notieren Sie Anlaufstellen für Suizidkrisen, Sucht, Gewalt, psychiatrische Notfälle und Kinderschutz. Wissen Sie, wie Sie diese außerhalb der Bürozeiten erreichen? Gibt es in Ihrer Einrichtung einen Krisenplan?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "mc",
        frage: "Welche Aussage zum Vulnerabilitäts-Stress-Modell trifft zu?",
        optionen: [
          "Psychische Störungen entstehen ausschließlich durch genetische Faktoren.",
          "Psychische Störungen entstehen aus dem Zusammenwirken individueller Anfälligkeit und aktueller Belastungen.",
          "Belastungen spielen nur bei Menschen ohne Vulnerabilität eine Rolle.",
          "Das Modell gilt ausschließlich für Angststörungen."
        ],
        richtig: 1,
        erklaerung: "Das Modell nach Zubin und Spring betont das Zusammenwirken von Vulnerabilität und Stress. Es wird auf nahezu alle psychischen Störungen angewendet und durch Schutzfaktoren ergänzt."
      },
      {
        typ: "truefalse",
        aussage: "Die komplexe Posttraumatische Belastungsstörung ist in der ICD-11 als eigene Diagnose enthalten.",
        richtig: true,
        erklaerung: "Die komplexe PTBS (6B41) wurde mit der ICD-11 neu eingeführt. Sie umfasst die Kernmerkmale der PTBS sowie Störungen der Selbstorganisation."
      },
      {
        typ: "multi",
        frage: "Welche gehören zu den drei Kernmerkmalen der PTBS nach ICD-11? (Mehrere Antworten möglich)",
        optionen: [
          "Wiedererleben des Traumas im Hier und Jetzt",
          "Gehobene, euphorische Stimmung",
          "Vermeidung von Erinnerungen und Erinnerungsreizen",
          "Anhaltendes Gefühl gegenwärtiger Bedrohung",
          "Wahnhafte Überzeugungen"
        ],
        richtig: [0, 2, 3],
        erklaerung: "Die ICD-11 beschreibt die PTBS über Wiedererleben, Vermeidung und ein anhaltendes Gefühl gegenwärtiger Bedrohung. Euphorie und Wahn gehören nicht dazu."
      },
      {
        typ: "mc",
        frage: "Was trägt nach lerntheoretischem Verständnis am stärksten zur Aufrechterhaltung von Angststörungen bei?",
        optionen: [
          "Häufige Konfrontation mit angstauslösenden Situationen",
          "Psychoedukation über Angst",
          "Soziale Unterstützung",
          "Vermeidung und Sicherheitsverhalten"
        ],
        richtig: 3,
        erklaerung: "Vermeidung und Sicherheitsverhalten verschaffen kurzfristig Erleichterung, verhindern aber die korrigierende Erfahrung, dass die befürchtete Katastrophe ausbleibt."
      },
      {
        typ: "truefalse",
        aussage: "Das direkte Ansprechen von Suizidgedanken erhöht nach dem Forschungsstand das Suizidrisiko.",
        richtig: false,
        erklaerung: "Es gibt keine Belege für diese verbreitete Annahme. Das offene Ansprechen ermöglicht eine Einschätzung und wird von Betroffenen häufig als entlastend erlebt."
      },
      {
        typ: "mc",
        frage: "Ein Klient berichtet, er habe einen konkreten Plan, sich heute Nacht das Leben zu nehmen, und die Mittel bereits besorgt. Was ist die angemessene Reaktion?",
        optionen: [
          "Ihn nicht allein lassen und den Notruf 112 verständigen bzw. eine sofortige Notfallversorgung organisieren",
          "Ihm die Nummer der TelefonSeelsorge geben und einen Termin in zwei Wochen vereinbaren",
          "Das Thema wechseln, um ihn nicht weiter zu belasten",
          "Ihm erklären, dass er an seine Familie denken muss"
        ],
        richtig: 0,
        erklaerung: "Konkrete Pläne und Vorbereitungen bedeuten akute Gefahr. Die Person darf nicht allein gelassen werden; eine sofortige Notfallversorgung ist erforderlich. Die anderen Optionen lassen das akute Risiko unbehandelt oder wirken moralisierend."
      },
      {
        typ: "multi",
        frage: "Welche Merkmale beschreibt das präsuizidale Syndrom nach Ringel? (Mehrere Antworten möglich)",
        optionen: [
          "Zunehmende Einengung",
          "Gehemmte, gegen die eigene Person gerichtete Aggression",
          "Gesteigerte Geselligkeit",
          "Sich aufdrängende Suizidfantasien",
          "Ausgeprägte Zukunftsplanung"
        ],
        richtig: [0, 1, 3],
        erklaerung: "Ringel beschrieb Einengung, gehemmte bzw. gegen die eigene Person gerichtete Aggression und Suizidfantasien. Gesteigerte Geselligkeit und Zukunftsplanung sprechen eher gegen ein präsuizidales Syndrom."
      },
      {
        typ: "mc",
        frage: "Welche Tätigkeit ist nach dem Heilpraktikergesetz Personen ohne Approbation oder Heilpraktikererlaubnis untersagt?",
        optionen: [
          "Menschen bei einer beruflichen Entscheidung zu begleiten",
          "Über regionale Hilfsangebote zu informieren",
          "Psychische Krankheiten festzustellen und zu behandeln",
          "Aktiv zuzuhören und Gefühle zu verbalisieren"
        ],
        richtig: 2,
        erklaerung: "Die Feststellung, Heilung oder Linderung von Krankheiten – auch psychischen – ist Ausübung der Heilkunde. Begleitung bei Lebensfragen, Information und Gesprächsführung sind dagegen Kernbestandteile nicht heilkundlicher Beratung."
      }
    ]
  },

  /* =========================================================
     B3 · Gesprächsführung
     ========================================================= */
  {
    kurs: "berater",
    id: "B3",
    titel: "Gesprächsführung",
    beschreibung: "Das Gespräch ist das zentrale Werkzeug jeder Beratung. Dieses Modul führt in die klientenzentrierten Grundhaltungen nach Carl Rogers ein und trainiert die Basistechniken aktives Zuhören, Paraphrasieren, Verbalisieren emotionaler Erlebnisinhalte und gezieltes Fragen. Darauf aufbauend lernen Sie das Motivational Interviewing kennen und strukturieren einen Beratungsprozess vom Erstkontakt über den Kontrakt bis zum Abschluss – geübt in mehreren Gesprächssimulationen.",
    lernziele: [
      "Sie können die klientenzentrierten Grundhaltungen Empathie, bedingungslose Wertschätzung und Kongruenz erläutern und in Gesprächsbeispielen erkennen.",
      "Sie können Paraphrasieren und das Verbalisieren emotionaler Erlebnisinhalte gezielt einsetzen und unterscheiden.",
      "Sie können offene und geschlossene Fragen situationsangemessen verwenden und typische Fragefallen vermeiden.",
      "Sie können Grundhaltung, OARS-Techniken und den Umgang mit Ambivalenz und Change Talk im Motivational Interviewing anwenden.",
      "Sie können einen Beratungsprozess in Phasen strukturieren und einen Beratungskontrakt transparent vereinbaren."
    ],
    lektionen: [
      /* ---------- B3-1 ---------- */
      {
        id: "B3-1",
        titel: "Klientenzentrierte Grundhaltungen nach Rogers",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Carl Rogers und der personzentrierte Ansatz",
            text: "Der US-amerikanische Psychologe **Carl R. Rogers** (1902–1987) entwickelte ab den 1940er-Jahren die **klientenzentrierte**, später **personzentrierte** Gesprächspsychotherapie. Sie gehört zur humanistischen Psychologie und hat die Beratung in sozialen, pädagogischen und pflegerischen Berufen wie kaum ein anderer Ansatz geprägt.\n\nRogers' Menschenbild ist von einem grundlegenden Vertrauen getragen: Jeder Mensch verfügt über eine **Aktualisierungstendenz**, ein inneres Streben nach Wachstum, Entfaltung und Selbstverwirklichung. Psychisches Leiden entsteht nach Rogers vor allem aus einer **Inkongruenz** zwischen dem **Selbstkonzept** – dem Bild, das ein Mensch von sich hat – und seinen tatsächlichen Erfahrungen. Wer etwa gelernt hat, nur als „starke“ Person liebenswert zu sein, wird Gefühle von Schwäche und Angst abwehren oder verzerren.\n\nDaraus folgt ein radikaler Perspektivwechsel: Nicht die beratende Person weiß, was für die ratsuchende Person richtig ist. Sie schafft vielmehr ein **Beziehungsklima**, in dem die Person ihre Erfahrungen zulassen, ihr Selbstkonzept erweitern und eigene Lösungen finden kann. Rogers sprach deshalb bewusst vom „Klienten“ statt vom „Patienten“.\n\nIm deutschsprachigen Raum wurde der Ansatz insbesondere durch **Reinhard und Anne-Marie Tausch** als **Gesprächspsychotherapie** verbreitet und empirisch erforscht. Die Grundhaltungen sind heute auch in Verfahren wie dem Motivational Interviewing und in der allgemeinen Psychotherapieforschung zur therapeutischen Beziehung fest verankert."
          },
          {
            typ: "luecke",
            text: "Nach Rogers entsteht psychisches Leiden vor allem aus einer {{Inkongruenz|Übertragung|Konditionierung}} zwischen Selbstkonzept und Erfahrung. Das angenommene innere Streben nach Wachstum nannte er {{Aktualisierungstendenz|Wille zur Macht|Lustprinzip}}.",
            erklaerung: "Inkongruenz und Aktualisierungstendenz sind Schlüsselbegriffe der personzentrierten Theorie. Der „Wille zur Macht“ geht auf Nietzsche zurück und wird in der Psychotherapiegeschichte mit Adlers Individualpsychologie in Verbindung gebracht; Lustprinzip und Übertragung sind psychoanalytische Begriffe."
          },
          {
            typ: "text",
            titel: "Die drei Grundhaltungen",
            text: "Rogers beschrieb 1957 sechs Bedingungen, die er für eine konstruktive Persönlichkeitsveränderung als notwendig und hinreichend ansah. Drei davon betreffen die Haltung der beratenden Person und sind als **Grundhaltungen** bekannt geworden:\n\n- **Empathie (einfühlendes Verstehen):** Die beratende Person versucht, die innere Welt der ratsuchenden Person so zu verstehen, **als ob** es ihre eigene wäre – ohne die „Als-ob“-Qualität zu verlieren. Empathie ist kein Mitleiden, sondern ein genaues, mitschwingendes Verstehen, das auch mitgeteilt wird.\n- **Bedingungslose positive Wertschätzung (Akzeptanz):** Die Person wird als Mensch angenommen, unabhängig davon, was sie erlebt, denkt oder getan hat. Wertschätzung bedeutet nicht, jedes Verhalten gutzuheißen, sondern den Menschen nicht an Bedingungen zu knüpfen.\n- **Kongruenz (Echtheit):** Die beratende Person ist in der Beziehung echt. Was sie innerlich erlebt, steht im Einklang mit dem, was sie zeigt. Sie versteckt sich nicht hinter einer professionellen Fassade.\n\nDie drei Haltungen bedingen einander: Empathie ohne Echtheit wirkt technisch, Wertschätzung ohne Empathie bleibt oberflächlich, Echtheit ohne Wertschätzung kann verletzend sein.\n\nEmpirisch zeigen Metaanalysen zur therapeutischen Beziehung, dass **Empathie** und **positive Wertschätzung** über verschiedene Verfahren hinweg mit besseren Ergebnissen zusammenhängen; für **Kongruenz** liegen ebenfalls positive, wenn auch schmalere Befunde vor. Ob die Bedingungen – wie Rogers annahm – auch **hinreichend** sind, ist umstritten. Unbestritten ist, dass sie eine tragfähige Grundlage jeder Beratung bilden."
          },
          {
            typ: "zuordnen",
            frage: "Welche Grundhaltung wird in der jeweiligen Beraterhandlung vor allem sichtbar?",
            paare: [
              ["Die Beraterin versucht, die Situation ganz aus der Sicht des Jugendlichen nachzuvollziehen und teilt ihm ihr Verständnis mit.", "Empathie"],
              ["Der Berater begegnet einer Mutter, die ihr Kind geschlagen hat, respektvoll als Mensch, ohne die Tat gutzuheißen.", "Bedingungslose positive Wertschätzung"],
              ["Die Beraterin sagt offen, dass sie gerade den Faden verloren hat, statt Verständnis vorzutäuschen.", "Kongruenz"]
            ],
            erklaerung: "Empathie zeigt sich im mitgeteilten Verstehen der inneren Welt, Wertschätzung in der Trennung von Person und Verhalten, Kongruenz in der Übereinstimmung von innerem Erleben und äußerem Ausdruck."
          },
          {
            typ: "text",
            titel: "Missverständnisse über die Grundhaltungen",
            text: "Die Grundhaltungen klingen einfach – und werden gerade deshalb oft missverstanden. Einige häufige Fehldeutungen:\n\n- **„Empathie heißt, die gleichen Gefühle zu haben.“** Nein. Wer mitweint, mitleidet oder sich mit dem Ärger der ratsuchenden Person verbündet, verliert die Als-ob-Qualität. Empathie braucht Nähe **und** Abstand.\n- **„Wertschätzung heißt, alles gut zu finden.“** Nein. Wertschätzung gilt der Person, nicht jedem Verhalten. Eine beratende Person kann Gewalt klar ablehnen und dem Menschen dennoch respektvoll begegnen.\n- **„Echtheit heißt, alles zu sagen, was man denkt.“** Nein. Kongruenz bedeutet, keine Fassade aufzubauen, nicht jedoch, jede Regung ungefiltert mitzuteilen. Selbstoffenbarungen sind dann sinnvoll, wenn sie der ratsuchenden Person dienen.\n- **„Klientenzentriert heißt passiv.“** Nein. Genaues Verstehen und dessen Mitteilung sind hoch aktive Leistungen, die Konzentration und Übung erfordern.\n- **„Die Grundhaltungen sind Techniken.“** Nur bedingt. Rogers betonte, dass es um eine **Haltung** geht. Techniken wie das Verbalisieren sind Ausdrucksformen dieser Haltung; ohne sie wirken sie mechanisch.\n\nFür Fachkräfte in sozialen und pflegerischen Berufen ist besonders die Verbindung von Wertschätzung und **klarer Grenzsetzung** bedeutsam. In Zwangskontexten oder bei Kinderschutzfragen schließen sich beides nicht aus – im Gegenteil: Transparente Grenzen, die respektvoll vermittelt werden, sind Ausdruck von Echtheit."
          },
          {
            typ: "truefalse",
            aussage: "Bedingungslose Wertschätzung im Sinne von Rogers bedeutet, dass die beratende Person jedes Verhalten der ratsuchenden Person billigen muss.",
            richtig: false,
            erklaerung: "Wertschätzung gilt der Person als Mensch, nicht jedem Verhalten. Die beratende Person kann ein Verhalten klar problematisieren und der Person dennoch mit Respekt und Annahme begegnen."
          },
          {
            typ: "mc",
            frage: "Ein Berater ist innerlich ungeduldig, weil der Klient zum dritten Mal dieselbe Geschichte erzählt. Was entspricht am ehesten dem Prinzip der Kongruenz?",
            optionen: [
              "Er lächelt weiter freundlich und lässt sich nichts anmerken, um die Beziehung nicht zu gefährden.",
              "Er sagt: „Sie langweilen mich, kommen Sie endlich zum Punkt.“",
              "Er beendet das Gespräch vorzeitig mit einer Ausrede.",
              "Er nimmt seine Ungeduld wahr und spricht wertschätzend an: „Mir fällt auf, dass wir immer wieder bei dieser Situation landen. Mich interessiert, was daran für Sie so wichtig ist.“"
            ],
            richtig: 3,
            erklaerung: "Kongruenz bedeutet, das eigene Erleben wahrzunehmen und es – wo hilfreich – in einer Form einzubringen, die der Person dient. Die Fassade (Option 1) widerspricht der Echtheit, die ungefilterte Abwertung (Option 2) der Wertschätzung, die Ausrede (Option 3) beiden."
          },
          {
            typ: "text",
            titel: "Grundhaltungen im beruflichen Alltag",
            text: "Viele Teilnehmende dieses Programms beraten nicht in einer Beratungsstelle mit 50-Minuten-Terminen, sondern **im laufenden Berufsalltag**: zwischen Tür und Angel auf der Station, im Elterngespräch, im Personalgespräch, beim Hausbesuch. Gerade dort können die Grundhaltungen viel bewirken.\n\n- **Kurze Momente zählen.** Auch ein zweiminütiges Gespräch kann empathisch sein, wenn die beratende Person wirklich zuhört und ihr Verständnis zurückmeldet.\n- **Rollenklarheit hilft der Echtheit.** Eine Führungskraft, eine Lehrkraft oder eine Pflegekraft hat neben der beratenden auch eine bewertende oder entscheidende Rolle. Es ist kongruent, diese Rolle transparent zu machen („Als Ihre Vorgesetzte muss ich auch auf die Abläufe achten. Gleichzeitig möchte ich verstehen, was Sie gerade belastet.“).\n- **Wertschätzung zeigt sich in Kleinigkeiten:** Pünktlichkeit, ungeteilte Aufmerksamkeit, das Merken von Namen und Details, ein respektvoller Ton auch in Konflikten.\n- **Selbstwahrnehmung ist Voraussetzung.** Wer erschöpft, gereizt oder persönlich betroffen ist, kann die Grundhaltungen nur eingeschränkt verwirklichen. Selbstfürsorge, kollegialer Austausch und Supervision sind deshalb Teil professioneller Gesprächsführung.\n\nDie Grundhaltungen sind keine Zustände, die man einmal erreicht, sondern **Richtungen**, um die man sich immer wieder bemüht. Sie werden durch Übung, Feedback und Reflexion vertieft."
          },
          {
            typ: "dialog",
            titel: "Ein Gespräch auf der Station",
            einleitung: "Konstruierte Situation: Sie arbeiten als Pflegefachkraft im Krankenhaus. Die Tochter einer schwer erkrankten Patientin, Frau L., spricht Sie auf dem Flur an. Sie wirkt aufgewühlt.",
            runden: [
              {
                klient: "„Niemand sagt mir hier, was los ist! Ich renne seit zwei Tagen hinter den Ärzten her.“",
                antworten: [
                  { text: "„Die Ärzte haben eben sehr viel zu tun, da müssen Sie Geduld haben.“", gut: false, feedback: "Die Rechtfertigung der Abläufe übergeht das Erleben von Frau L. und wirkt wie eine Zurechtweisung." },
                  { text: "„Sie fühlen sich allein gelassen mit Ihren Fragen und machen sich große Sorgen um Ihre Mutter.“", gut: true, feedback: "Die Antwort verbalisiert Gefühl und Anliegen. Frau L. fühlt sich verstanden, was die Voraussetzung dafür ist, dass das Gespräch konstruktiv weitergehen kann." },
                  { text: "„Beruhigen Sie sich bitte, wir sind hier auf einer Station.“", gut: false, feedback: "Die Aufforderung zur Ruhe wirkt abwertend und verstärkt den Ärger eher, statt ihn zu lindern." }
                ]
              },
              {
                klient: "„Ja … genau. Ich habe einfach Angst, dass ich etwas verpasse. Dass es ihr schlechter geht und ich es nicht weiß.“",
                antworten: [
                  { text: "„Das brauchen Sie nicht, wir kümmern uns doch gut um Ihre Mutter.“", gut: false, feedback: "Die Beruhigung ist gut gemeint, nimmt die Angst aber nicht ernst und kann sie sogar verstärken, weil sie nicht verstanden wird." },
                  { text: "„Hinter dem Ärger steckt viel Angst – die Angst, nicht da zu sein, wenn es darauf ankommt.“", gut: true, feedback: "Das Verbalisieren vertieft das Verstehen und benennt das zugrunde liegende Gefühl. Das ist einfühlendes Verstehen im Sinne von Rogers." },
                  { text: "„Ich verstehe Sie total, mir ging es mit meinem Vater genauso, das war schrecklich.“", gut: false, feedback: "Die Selbstoffenbarung lenkt den Fokus auf die beratende Person. Empathie heißt, bei der Erfahrung des Gegenübers zu bleiben." }
                ]
              },
              {
                klient: "„Was kann ich denn jetzt tun?“",
                antworten: [
                  { text: "„Ich kann Ihnen keine medizinischen Auskünfte geben, aber ich kann jetzt die Stationsärztin informieren, dass Sie ein Gespräch wünschen, und Sie anschließend auf den Stand bringen, wann sie Zeit hat. Wäre das hilfreich?“", gut: true, feedback: "Die Antwort ist kongruent im Hinblick auf die eigene Rolle, macht ein konkretes, umsetzbares Angebot und lässt Frau L. die Wahl." },
                  { text: "„Da kann ich leider gar nichts machen, das ist Sache der Ärzte.“", gut: false, feedback: "Die Rollengrenze wird zwar benannt, aber ohne Unterstützung – Frau L. bleibt mit ihrer Not allein." },
                  { text: "„Ich sage Ihnen jetzt mal, wie es um Ihre Mutter steht.“", gut: false, feedback: "Medizinische Aufklärung über Diagnose und Prognose ist ärztliche Aufgabe. Das Überschreiten der Rolle wäre nicht kongruent und kann rechtliche Probleme verursachen." }
                ]
              }
            ]
          },
          {
            typ: "merke",
            text: "Rogers zufolge entsteht Veränderung in einer Beziehung, in der ein Mensch sich verstanden, angenommen und einem echten Gegenüber begegnet fühlt. Techniken sind Ausdruck dieser Haltung – kein Ersatz für sie."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Personzentrierter Ansatz",
            karten: [
              { vorne: "Aktualisierungstendenz", hinten: "Angenommenes inneres Streben jedes Menschen nach Wachstum, Entfaltung und Selbstverwirklichung." },
              { vorne: "Inkongruenz", hinten: "Widerspruch zwischen Selbstkonzept und Erfahrung; nach Rogers eine Hauptquelle psychischen Leidens." },
              { vorne: "Empathie", hinten: "Einfühlendes Verstehen der inneren Welt des anderen, „als ob“ es die eigene wäre – und dessen Mitteilung." },
              { vorne: "Bedingungslose positive Wertschätzung", hinten: "Annahme der Person ohne Bedingungen; nicht gleichbedeutend mit Billigung jedes Verhaltens." },
              { vorne: "Kongruenz", hinten: "Echtheit: Übereinstimmung von innerem Erleben und äußerem Verhalten der beratenden Person." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Welche der drei Grundhaltungen fällt Ihnen im Berufsalltag am leichtesten, welche am schwersten – und in welchen Situationen?",
            hinweis: "Denken Sie an Begegnungen, in denen Sie innerlich abgelehnt, ungeduldig oder überfordert waren. Was hat es erschwert, wertschätzend, empathisch oder echt zu bleiben? Was könnte Ihnen künftig helfen?"
          }
        ]
      },

      /* ---------- B3-2 ---------- */
      {
        id: "B3-2",
        titel: "Aktives Zuhören, Verbalisieren und Fragen",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Aktives Zuhören",
            text: "Zuhören scheint selbstverständlich – und ist doch eine der anspruchsvollsten Beratungskompetenzen. Im Alltag hören wir oft nur so lange zu, bis uns eine eigene Geschichte, ein Rat oder eine Bewertung einfällt. **Aktives Zuhören**, ein Begriff, der auf Rogers zurückgeht und unter anderem von Thomas Gordon popularisiert wurde, meint dagegen ein **ungeteiltes, verstehendes Zuhören**, das dem Gegenüber auch zurückgemeldet wird.\n\nAktives Zuhören umfasst mehrere Ebenen:\n\n- **Nonverbale Zuwendung:** zugewandte Körperhaltung, angemessener Blickkontakt, ruhiges Tempo, Nicken\n- **Ermutigende Signale:** kurze Laute oder Worte wie „mhm“, „ja“, „ich verstehe“, die zum Weitersprechen einladen\n- **Rückmeldung des Verstandenen:** durch Paraphrasieren (Inhalt) und Verbalisieren (Gefühle)\n- **Nachfragen bei Unklarheit:** „Habe ich Sie richtig verstanden, dass …?“\n- **Aushalten von Pausen:** Schweigen gibt Raum zum Nachdenken und Nachspüren\n\nGenauso wichtig ist zu wissen, was aktives Zuhören **behindert**. Thomas Gordon beschrieb typische Kommunikationssperren, etwa Befehlen, Warnen, Moralisieren, vorschnelles Ratgeben, Kritisieren, Interpretieren, Beruhigen und Ablenken. Sie sind oft gut gemeint, signalisieren aber: „Ich weiß besser als du, was gut für dich ist.“\n\nAktives Zuhören hat mehrere **Wirkungen**: Ratsuchende fühlen sich verstanden, ordnen beim Sprechen ihre Gedanken, kommen mit eigenen Gefühlen in Kontakt – und die beratende Person überprüft fortlaufend ihr Verständnis."
          },
          {
            typ: "kategorien",
            frage: "Handelt es sich um aktives Zuhören oder um eine Kommunikationssperre?",
            kategorien: ["Aktives Zuhören", "Kommunikationssperre"],
            elemente: [
              { text: "„Mhm … erzählen Sie ruhig weiter.“", kat: 0 },
              { text: "„Das wird schon wieder, machen Sie sich keine Sorgen.“", kat: 1 },
              { text: "„Habe ich Sie richtig verstanden, dass es vor allem die Abende sind, die schwer sind?“", kat: 0 },
              { text: "„An Ihrer Stelle würde ich sofort kündigen.“", kat: 1 },
              { text: "„Das liegt bestimmt an Ihrer Kindheit.“", kat: 1 },
              { text: "(Schweigt einige Sekunden, bleibt zugewandt und lässt der Klientin Zeit.)", kat: 0 },
              { text: "„So etwas sagt man aber nicht über die eigene Mutter.“", kat: 1 }
            ],
            erklaerung: "Ermutigende Signale, Verständnisrückfragen und zugewandtes Schweigen fördern das Gespräch. Beruhigen, Ratgeben, Interpretieren und Moralisieren gehören zu den Kommunikationssperren nach Gordon: Sie lenken weg vom Erleben der Person."
          },
          {
            typ: "text",
            titel: "Paraphrasieren: den Inhalt spiegeln",
            text: "Beim **Paraphrasieren** gibt die beratende Person den **sachlichen Kern** einer Aussage **mit eigenen Worten** wieder. Sie fasst zusammen, was sie verstanden hat, ohne zu bewerten, zu interpretieren oder etwas hinzuzufügen.\n\nBeispiel:\n\n- Klient: „Mein Chef gibt mir ständig neue Aufgaben, aber die alten sind noch gar nicht fertig. Und dann wundert er sich, dass nichts rechtzeitig fertig wird.“\n- Paraphrase: „Sie bekommen laufend neue Aufgaben, bevor die alten erledigt sind – und am Ende werden die Verzögerungen Ihnen angelastet.“\n\nGutes Paraphrasieren ist:\n\n- **kurz** – kürzer als die ursprüngliche Aussage\n- **in eigenen Worten** – kein bloßes Nachplappern, das schnell mechanisch wirkt\n- **tentativ** – als Angebot formuliert, das korrigiert werden darf („Wenn ich Sie richtig verstehe …“)\n- **auf das Wesentliche fokussiert** – es wählt aus, was zentral erscheint\n\nParaphrasen erfüllen mehrere Funktionen: Sie **überprüfen** das Verständnis, **strukturieren** längere Erzählungen, **verlangsamen** das Gespräch und geben der ratsuchenden Person die Möglichkeit, das Gesagte von außen zu hören. Häufig ergänzen Ratsuchende nach einer Paraphrase von sich aus Wichtiges („Ja, genau – und eigentlich ist das Schlimmste, dass …“).\n\nEine Sonderform ist die **Zusammenfassung**, die längere Gesprächsabschnitte bündelt. Sie eignet sich besonders an Übergängen, etwa vor einem Themenwechsel oder am Ende einer Sitzung."
          },
          {
            typ: "mc",
            frage: "Eine Klientin sagt: „Seit meine Schwiegermutter bei uns wohnt, habe ich keinen Raum mehr für mich. Sie mischt sich in alles ein, in die Erziehung, ins Kochen, sogar in die Wäsche.“ Welche Antwort ist eine gelungene Paraphrase?",
            optionen: [
              "„Seit Ihre Schwiegermutter bei Ihnen wohnt, mischt sie sich in viele Bereiche Ihres Alltags ein, und Sie haben kaum noch Raum für sich.“",
              "„Ihre Schwiegermutter ist offenbar sehr dominant und kontrollierend.“",
              "„Haben Sie schon mal mit Ihrem Mann darüber gesprochen?“",
              "„Seit meine Schwiegermutter bei uns wohnt, habe ich keinen Raum mehr für mich.“"
            ],
            richtig: 0,
            erklaerung: "Die erste Antwort gibt den Kern in eigenen Worten wieder, ohne zu bewerten. Option 2 interpretiert und bewertet die Schwiegermutter, Option 3 ist eine Frage, die das Thema verschiebt, Option 4 wiederholt wörtlich und wirkt dadurch mechanisch."
          },
          {
            typ: "text",
            titel: "Verbalisieren emotionaler Erlebnisinhalte (VEE)",
            text: "Während das Paraphrasieren den Inhalt spiegelt, richtet sich das **Verbalisieren emotionaler Erlebnisinhalte** auf das **gefühlsmäßige Erleben** der Person. Der Begriff wurde vor allem durch Reinhard und Anne-Marie Tausch geprägt; im Englischen spricht man von *reflection of feelings*.\n\nDie beratende Person benennt dabei Gefühle, Wünsche, Befürchtungen und Bewertungen, die in der Aussage **mitschwingen**, aber oft nicht ausdrücklich ausgesprochen werden.\n\nBeispiel:\n\n- Klient: „Mein Chef gibt mir ständig neue Aufgaben, aber die alten sind noch gar nicht fertig. Und dann wundert er sich, dass nichts rechtzeitig fertig wird.“\n- Verbalisierung: „Das ärgert Sie, und vielleicht fühlen Sie sich auch ungerecht behandelt.“\n\nHilfreiche Hinweise für das Verbalisieren:\n\n- **Gefühle möglichst genau benennen:** „enttäuscht“, „gekränkt“, „erschöpft“ sind präziser als „schlecht“.\n- **Intensität treffen:** Nicht dramatisieren („Sie sind verzweifelt“), wenn die Person leicht verunsichert ist – und nicht verharmlosen, wenn sie tief erschüttert ist.\n- **Tentativ formulieren:** „Mir scheint …“, „Kann es sein, dass …?“ – die Person ist die Expertin für ihr Erleben.\n- **Nahe am Erleben bleiben:** Verbalisieren ist keine Deutung („Das hat mit Ihrem Vater zu tun“), sondern ein Aussprechen dessen, was gerade da ist.\n- **Ambivalenzen aufgreifen:** „Einerseits sind Sie erleichtert, andererseits auch traurig.“\n\nVerbalisieren vertieft die Selbstexploration und gilt als Kernstück einfühlenden Verstehens. Es setzt eine aufmerksame Wahrnehmung auch nonverbaler Signale voraus: Tonfall, Pausen, Mimik, Körperhaltung."
          },
          {
            typ: "kategorien",
            frage: "Handelt es sich um eine Paraphrase oder um ein Verbalisieren emotionaler Erlebnisinhalte?",
            kategorien: ["Paraphrase (Inhalt)", "Verbalisieren (Gefühl)"],
            elemente: [
              { text: "„Sie haben die Prüfung zweimal verschoben und jetzt steht der letzte Termin an.“", kat: 0 },
              { text: "„Da ist viel Druck – und vielleicht auch die Angst, es wieder nicht zu schaffen.“", kat: 1 },
              { text: "„Ihr Sohn ist vor drei Monaten ausgezogen und meldet sich seitdem selten.“", kat: 0 },
              { text: "„Es klingt, als vermissten Sie ihn sehr – und als täte es weh, dass er sich so selten meldet.“", kat: 1 },
              { text: "„Sie arbeiten seit dem Frühjahr in zwei Teams gleichzeitig.“", kat: 0 },
              { text: "„Sie wirken erleichtert, wenn Sie davon erzählen.“", kat: 1 }
            ],
            erklaerung: "Paraphrasen geben Fakten und Sachverhalte wieder, Verbalisierungen benennen Gefühle, Wünsche und Befürchtungen. In der Praxis werden beide oft kombiniert, etwa: „Sie arbeiten in zwei Teams – und das erschöpft Sie zunehmend.“"
          },
          {
            typ: "text",
            titel: "Offene und geschlossene Fragen",
            text: "Fragen lenken die Aufmerksamkeit – und damit das Gespräch. Grundlegend ist die Unterscheidung zwischen offenen und geschlossenen Fragen.\n\n**Offene Fragen** lassen sich nicht mit einem Wort beantworten. Sie beginnen häufig mit **W-Wörtern** wie „Wie“, „Was“, „Wann“, „Wo“ oder mit Aufforderungen wie „Erzählen Sie …“. Sie laden zur Exploration ein und überlassen der ratsuchenden Person, was sie für wichtig hält.\n\n- „Wie geht es Ihnen mit der neuen Situation?“\n- „Was hat Sie heute zu uns geführt?“\n\n**Geschlossene Fragen** lassen sich mit Ja/Nein oder einer kurzen Information beantworten. Sie sind sinnvoll, um **Fakten zu klären**, **Entscheidungen** herbeizuführen oder in **Krisen** gezielt einzuschätzen.\n\n- „Wie alt sind Ihre Kinder?“\n- „Haben Sie schon einmal daran gedacht, sich das Leben zu nehmen?“\n\nProblematisch werden Fragen in folgenden Formen:\n\n- **Fragenkaskaden:** Mehrere Fragen hintereinander überfordern („Wie war das, und was haben Sie dann gemacht, und hat Ihr Mann etwas gesagt?“).\n- **Suggestivfragen:** Sie legen die Antwort nahe („Sie sind doch sicher auch der Meinung, dass …?“).\n- **Warum-Fragen:** Sie können als Rechtfertigungsdruck erlebt werden („Warum haben Sie das getan?“). Oft hilft eine Umformulierung: „Was hat Sie dazu bewogen?“ oder „Wie kam es dazu?“.\n- **Verhörcharakter:** Eine Abfolge vieler geschlossener Fragen lässt die Person passiv werden.\n\nEine Faustregel aus dem Motivational Interviewing lautet: **mehr Reflexionen als Fragen**. Wer nach einer Frage zunächst das Gehörte spiegelt, vertieft das Gespräch und vermeidet ein Frage-Antwort-Spiel."
          },
          {
            typ: "multi",
            frage: "Welche der folgenden Fragen sind offene Fragen? (Mehrere Antworten möglich)",
            optionen: [
              "„Was wünschen Sie sich von unserem Gespräch?“",
              "„Haben Sie mit Ihrer Vorgesetzten gesprochen?“",
              "„Wie erleben Sie die Situation zu Hause?“",
              "„Erzählen Sie mir, wie ein typischer Tag bei Ihnen aussieht.“",
              "„Sind Sie mit der Lösung zufrieden?“"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Offene Fragen und Erzählaufforderungen laden zu ausführlicheren Antworten ein. „Haben Sie …?“ und „Sind Sie …?“ sind geschlossene Fragen, die meist mit Ja oder Nein beantwortet werden. Beide Fragearten haben ihren Platz – entscheidend ist der bewusste Einsatz."
          },
          {
            typ: "luecke",
            text: "Die Frage „Warum haben Sie den Termin abgesagt?“ kann als {{Rechtfertigungsdruck|Wertschätzung|Paraphrase}} erlebt werden. Eine hilfreichere Formulierung wäre: „{{Wie kam es dazu, dass Sie den Termin abgesagt haben?|Sie haben doch sicher keinen Grund gehabt, oder?|Warum genau war das so?}}“",
            erklaerung: "Warum-Fragen klingen leicht nach Vorwurf. Eine „Wie kam es dazu“-Frage lädt zum Erzählen ein, ohne Rechtfertigung einzufordern. Die beiden anderen Optionen sind suggestiv bzw. bleiben bei der Warum-Struktur."
          },
          {
            typ: "dialog",
            titel: "Zuhören statt Ratschläge",
            einleitung: "Konstruierte Situation: Sie arbeiten in der Personalabteilung. Herr D., 52 Jahre, langjähriger Mitarbeiter, kommt nach einer Umstrukturierung zu Ihnen.",
            runden: [
              {
                klient: "„Jetzt arbeite ich seit 25 Jahren hier, und auf einmal soll ich mich einem 30-jährigen Teamleiter unterordnen, der mir erklärt, wie ich meine Arbeit zu machen habe.“",
                antworten: [
                  { text: "„Das ist heute nun mal so, die Jungen bringen frischen Wind rein.“", gut: false, feedback: "Die Antwort relativiert und bewertet. Herr D. dürfte sich weder gehört noch ernst genommen fühlen." },
                  { text: "„Warum haben Sie sich nicht selbst auf die Stelle beworben?“", gut: false, feedback: "Eine Warum-Frage zu diesem Zeitpunkt wirkt wie ein Vorwurf und lenkt vom Erleben ab." },
                  { text: "„Nach 25 Jahren Erfahrung fühlt es sich offenbar kränkend an, von jemand deutlich Jüngerem Anweisungen zu bekommen.“", gut: true, feedback: "Paraphrase und Verbalisieren verbinden sich: Der sachliche Kern (25 Jahre, jüngerer Vorgesetzter) und das mögliche Gefühl (Kränkung) werden zurückgemeldet." }
                ]
              },
              {
                klient: "„Kränkend, ja. Als ob das alles nichts wert wäre, was ich hier aufgebaut habe.“",
                antworten: [
                  { text: "„Sie haben Sorge, dass Ihre Leistung und Ihre Erfahrung nicht mehr gesehen werden.“", gut: true, feedback: "Die Verbalisierung greift die tiefer liegende Befürchtung auf – fehlende Anerkennung – und vertieft das Verstehen." },
                  { text: "„Das stimmt doch nicht, natürlich ist das etwas wert!“", gut: false, feedback: "Der Widerspruch ist gut gemeint, übergeht aber sein Erleben. Herr D. muss sich nun eher verteidigen." },
                  { text: "„Wie viele Mitarbeitende haben Sie früher eingearbeitet, und in welchen Abteilungen?“", gut: false, feedback: "Faktenfragen sind hier verfrüht und lenken vom emotionalen Kern ab." }
                ]
              },
              {
                klient: "„Genau. Und ehrlich gesagt weiß ich gar nicht, ob ich so noch bis zur Rente durchhalten will.“",
                antworten: [
                  { text: "„Dann sollten Sie über eine Altersteilzeit nachdenken.“", gut: false, feedback: "Ein vorschneller Rat überspringt die Klärung. Herr D. hat noch nicht gesagt, was er sich wünscht." },
                  { text: "„Da steht für Sie gerade eine grundsätzliche Frage im Raum. Was wäre Ihnen wichtig, damit Sie hier wieder gern arbeiten könnten?“", gut: true, feedback: "Die Antwort spiegelt die Tragweite und öffnet mit einer offenen Frage den Raum für seine eigenen Wünsche und Werte." },
                  { text: "„Das sagen viele, aber am Ende bleiben doch alle.“", gut: false, feedback: "Die Verallgemeinerung entwertet seine Aussage und verschließt das Gespräch." }
                ]
              }
            ]
          },
          {
            typ: "merke",
            text: "Paraphrasieren spiegelt, was gesagt wurde; Verbalisieren spiegelt, was dabei erlebt wird. Offene Fragen öffnen Räume, geschlossene klären Fakten – und mehr Spiegeln als Fragen hält das Gespräch bei der ratsuchenden Person."
          },
          {
            typ: "reflexion",
            frage: "Welche Kommunikationssperren nach Gordon nutzen Sie selbst am häufigsten, wenn Sie unter Zeitdruck stehen?",
            hinweis: "Achten Sie in den nächsten Tagen bewusst auf Ihre spontanen Reaktionen in Gesprächen. Wie oft geben Sie Ratschläge, beruhigen oder lenken ab? Wie könnten Sie stattdessen paraphrasieren oder verbalisieren?"
          }
        ]
      },

      /* ---------- B3-3 ---------- */
      {
        id: "B3-3",
        titel: "Motivational Interviewing",
        dauer: 40,
        schritte: [
          {
            typ: "text",
            titel: "Was ist Motivational Interviewing?",
            text: "**Motivational Interviewing (MI)**, auf Deutsch auch **motivierende Gesprächsführung**, wurde von **William R. Miller** und **Stephen Rollnick** entwickelt. Miller beschrieb erste Grundzüge 1983 im Kontext der Behandlung von Alkoholproblemen; 1991 erschien das gemeinsame Grundlagenwerk, das seitdem mehrfach überarbeitet wurde. Heute wird MI in Suchthilfe, Medizin, Sozialarbeit, Bewährungshilfe, Schule und vielen weiteren Feldern eingesetzt und ist durch zahlreiche Studien gut untersucht.\n\nMiller und Rollnick beschreiben MI sinngemäß als einen **kooperativen, zielorientierten Gesprächsstil**, der die **eigene Motivation** einer Person und ihre **Verpflichtung zur Veränderung** stärkt, indem er ihre eigenen Gründe für Veränderung erkundet – in einer Atmosphäre von Akzeptanz und Mitgefühl.\n\nDer Ansatz baut auf der personzentrierten Haltung von Rogers auf, ist aber **bewusst richtungsweisend**: Die beratende Person hört besonders aufmerksam auf Äußerungen, die in Richtung Veränderung weisen, und verstärkt diese.\n\nAusgangspunkt ist ein Phänomen, das jede Fachkraft kennt: Menschen sind oft **ambivalent**. Sie wollen sich verändern und zugleich nicht. Wer in dieser Lage gedrängt wird, verteidigt meist die Seite des Nicht-Veränderns. Miller und Rollnick nennen den Impuls von Helfenden, Probleme sofort zu korrigieren, den **Korrekturreflex** (*righting reflex*). Ihn bewusst zurückzuhalten, ist eine der wichtigsten Lernaufgaben im MI."
          },
          {
            typ: "text",
            titel: "Der Geist des MI",
            text: "Miller und Rollnick betonen, dass MI vor allem eine **Haltung** ist, die sie als „Geist“ (*spirit*) des MI bezeichnen. In der dritten Auflage ihres Grundlagenwerks beschreiben sie vier Elemente:\n\n- **Partnerschaft:** MI geschieht *mit* der Person, nicht *an* ihr. Die beratende Person bringt Fachwissen ein, die ratsuchende Person ist Expertin für ihr eigenes Leben.\n- **Akzeptanz:** Sie umfasst den absoluten Wert der Person, einfühlendes Verstehen, die Anerkennung ihrer **Autonomie** – sie entscheidet selbst – und die **Würdigung** ihrer Stärken und Bemühungen.\n- **Mitgefühl:** Die beratende Person setzt sich aktiv für das Wohlergehen der ratsuchenden Person ein und stellt deren Interessen über eigene.\n- **Evokation (Hervorrufen):** Motivation wird nicht von außen eingebracht, sondern **hervorgerufen**. Die Annahme ist, dass Menschen bereits Gründe, Werte und Fähigkeiten für Veränderung in sich tragen.\n\nDiese Haltung grenzt MI deutlich von **konfrontativen** Ansätzen ab, die lange in der Suchthilfe verbreitet waren. Miller selbst beobachtete, dass ein konfrontativer Stil eher mit Gegenreden und schlechteren Ergebnissen einhergehen kann.\n\nGleichzeitig ist MI **nicht beliebig**: Die beratende Person hat eine Richtung im Blick, etwa einen gesünderen Umgang mit Alkohol. Sie verfolgt diese aber, indem sie die Gründe der Person hervorruft, nicht indem sie ihre eigenen Gründe überträgt."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Elemente des MI-Geistes der passenden Beraterhaltung zu.",
            paare: [
              ["Partnerschaft", "„Sie kennen Ihr Leben am besten – lassen Sie uns gemeinsam überlegen.“"],
              ["Akzeptanz (Autonomie)", "„Ob und was Sie verändern, entscheiden letztlich Sie.“"],
              ["Evokation", "„Was wären für Sie selbst gute Gründe, etwas zu verändern?“"],
              ["Mitgefühl", "Die Beraterin richtet ihr Handeln am Wohl der Klientin aus, nicht am eigenen Erfolgserlebnis."]
            ],
            erklaerung: "Partnerschaft betont die Zusammenarbeit, Akzeptanz unter anderem die Autonomie der Person, Evokation das Hervorrufen eigener Gründe und Mitgefühl die Ausrichtung am Wohl der Person."
          },
          {
            typ: "text",
            titel: "Die Basistechniken: OARS",
            text: "Die kommunikativen Grundfertigkeiten des MI werden im Englischen mit dem Akronym **OARS** zusammengefasst (*oars* = Ruder):\n\n- **O – Open questions (offene Fragen):** Sie laden zur Exploration ein. „Was beunruhigt Sie an Ihrem Trinkverhalten – wenn überhaupt?“\n- **A – Affirmations (Würdigung):** Ehrliche Anerkennung von Stärken, Werten und Bemühungen der Person – nicht pauschales Lob. „Sie haben es trotz allem geschafft, heute hierherzukommen. Das zeigt, dass Ihnen Ihre Familie wichtig ist.“\n- **R – Reflections (reflektierendes Zuhören):** Das zentrale Werkzeug. Man unterscheidet **einfache Reflexionen**, die das Gesagte wiedergeben, und **komplexe Reflexionen**, die Bedeutung, Gefühle oder unausgesprochene Aspekte hinzufügen. Eine wichtige Form ist die **doppelseitige Reflexion**, die beide Seiten einer Ambivalenz zusammenführt: „Einerseits entspannt Sie das Rauchen, andererseits machen Sie sich Sorgen um Ihre Lunge.“\n- **S – Summaries (Zusammenfassungen):** Sie bündeln Gesagtes, heben Veränderungsäußerungen hervor und leiten über. Eine **Sammelzusammenfassung** kann alle von der Person genannten Gründe für Veränderung zusammentragen.\n\nIm deutschsprachigen Raum werden die Fertigkeiten teils auch mit den Begriffen offene Fragen, Würdigen, Reflektierendes Zuhören und Zusammenfassen beschrieben. Hinzu kommt das **Informieren und Beraten mit Erlaubnis**: Fachliche Informationen werden angeboten, nicht aufgedrängt – etwa nach dem Muster **Erfragen – Informieren – Erfragen** („Was wissen Sie bereits über …? Darf ich Ihnen etwas dazu sagen? … Was denken Sie darüber?“)."
          },
          {
            typ: "kategorien",
            frage: "Welcher OARS-Technik entspricht die jeweilige Äußerung?",
            kategorien: ["Offene Frage", "Würdigung", "Reflexion", "Zusammenfassung"],
            elemente: [
              { text: "„Wie würde Ihr Leben aussehen, wenn Sie weniger trinken würden?“", kat: 0 },
              { text: "„Sie haben sich in einer sehr schweren Zeit um Ihre Kinder gekümmert. Das zeigt viel Verantwortungsgefühl.“", kat: 1 },
              { text: "„Sie sind es leid, ständig darauf angesprochen zu werden.“", kat: 2 },
              { text: "„Lassen Sie mich zusammentragen: Sie schlafen schlecht, Ihre Frau macht sich Sorgen, und Sie möchten fit bleiben für Ihre Enkel. Gleichzeitig ist das Feierabendbier für Sie ein wichtiges Ritual. Habe ich etwas vergessen?“", kat: 3 },
              { text: "„Was hat bei früheren Versuchen geholfen, auch wenn es nur kurz war?“", kat: 0 },
              { text: "„Einerseits hilft Ihnen das Spielen am Abend abzuschalten, andererseits ärgern Sie sich über die verlorenen Stunden.“", kat: 2 }
            ],
            erklaerung: "Offene Fragen laden zur Exploration ein, Würdigungen erkennen konkrete Stärken an, Reflexionen spiegeln – die letzte als doppelseitige Reflexion –, und Zusammenfassungen bündeln mehrere Aspekte, oft mit Hervorhebung der Veränderungsgründe."
          },
          {
            typ: "text",
            titel: "Ambivalenz, Change Talk und Sustain Talk",
            text: "Ambivalenz ist im MI **kein Hindernis, sondern ein normaler Teil von Veränderung**. In ambivalenten Menschen sprechen gleichsam zwei Stimmen: eine für, eine gegen die Veränderung.\n\nÄußerungen, die in Richtung Veränderung weisen, heißen **Change Talk** (Veränderungssprache). Äußerungen zugunsten des Status quo heißen **Sustain Talk** (Beibehaltungssprache). Miller und Rollnick fassen Formen des Change Talk mit dem Akronym **DARN-CAT** zusammen:\n\n**Vorbereitende Veränderungssprache (DARN):**\n- **Desire (Wunsch):** „Ich möchte gern wieder fitter sein.“\n- **Ability (Fähigkeit):** „Ich könnte vermutlich weniger rauchen.“\n- **Reasons (Gründe):** „Wenn ich weniger trinke, schlafe ich besser.“\n- **Need (Notwendigkeit):** „Ich muss etwas ändern, so geht es nicht weiter.“\n\n**Mobilisierende Veränderungssprache (CAT):**\n- **Commitment (Verpflichtung):** „Ich werde ab Montag keinen Alkohol mehr trinken.“\n- **Activation (Bereitschaft):** „Ich bin bereit, es zu versuchen.“\n- **Taking steps (erste Schritte):** „Ich habe diese Woche schon zweimal auf das Bier verzichtet.“\n\nForschungsbefunde deuten darauf hin, dass insbesondere die Stärke der Veränderungssprache im Gespräch mit späterer Veränderung zusammenhängt. Daraus folgt die Kernstrategie des MI: **Change Talk hervorrufen, aufgreifen und verstärken**, Sustain Talk respektvoll reflektieren, ohne dagegen zu argumentieren.\n\nVon Sustain Talk zu unterscheiden ist **Dissonanz** in der Beziehung – Zeichen dafür, dass die Zusammenarbeit gestört ist, etwa durch Drängen der beratenden Person. Frühere Auflagen sprachen hier von „Widerstand“; Miller und Rollnick betonen inzwischen, dass Dissonanz ein Beziehungsphänomen ist, an dem beide Seiten beteiligt sind."
          },
          {
            typ: "kategorien",
            frage: "Handelt es sich um Change Talk oder Sustain Talk?",
            kategorien: ["Change Talk", "Sustain Talk"],
            elemente: [
              { text: "„Ich möchte nicht, dass meine Tochter mich so sieht.“", kat: 0 },
              { text: "„Ohne die Zigarette nach dem Essen halte ich das nicht aus.“", kat: 1 },
              { text: "„Ich habe gestern das erste Mal seit Monaten nicht gespielt.“", kat: 0 },
              { text: "„Alle in meinem Freundeskreis trinken so viel, das ist normal.“", kat: 1 },
              { text: "„Wenn ich mir Mühe gebe, schaffe ich es vielleicht, abends früher abzuschalten.“", kat: 0 },
              { text: "„Ich habe einfach keine Zeit, mich um meine Gesundheit zu kümmern.“", kat: 1 },
              { text: "„Ich werde nächste Woche den Termin bei der Suchtberatung machen.“", kat: 0 }
            ],
            erklaerung: "Change Talk zeigt Wunsch, Fähigkeit, Gründe, Notwendigkeit, Verpflichtung, Bereitschaft oder erste Schritte in Richtung Veränderung. Sustain Talk begründet, warum alles so bleiben soll. Beide Formen sind im ambivalenten Erleben normal."
          },
          {
            typ: "text",
            titel: "Change Talk hervorrufen und der Prozess des MI",
            text: "Wie lässt sich Change Talk **hervorrufen**? MI nutzt dafür gezielte Fragen und Techniken:\n\n- **Evozierende Fragen:** „Was spricht aus Ihrer Sicht dafür, etwas zu verändern?“ – „Was wäre das Beste daran?“\n- **Wichtigkeits- und Zuversichtsskalen:** „Auf einer Skala von 0 bis 10, wie wichtig ist es Ihnen, etwas zu verändern?“ Nennt die Person etwa eine 4, folgt die Frage: „Warum eine 4 und nicht eine 1?“ – Die Antwort enthält fast immer Change Talk. Die umgekehrte Frage („Warum nicht 8?“) würde dagegen Sustain Talk hervorrufen.\n- **Rückblick und Vorausblick:** „Wie war es früher, bevor das Trinken so viel Raum einnahm?“ – „Wie soll Ihr Leben in fünf Jahren aussehen?“\n- **Werte erkunden:** „Was ist Ihnen im Leben besonders wichtig? Wie passt Ihr Konsum dazu?“\n- **Extreme erfragen:** „Was wäre das Schlimmste, das passieren könnte, wenn alles so bleibt?“\n\nMiller und Rollnick beschreiben zudem vier **Prozesse**, die aufeinander aufbauen und sich überlappen:\n\n1. **Beziehungsaufbau** (*engaging*): eine tragfähige Arbeitsbeziehung herstellen\n2. **Fokussierung** (*focusing*): eine gemeinsame Richtung finden\n3. **Evokation** (*evoking*): die eigenen Gründe für Veränderung hervorrufen\n4. **Planung** (*planning*): bei ausreichender Bereitschaft einen konkreten Veränderungsplan entwickeln\n\nWird zu früh geplant, bevor die Ambivalenz ausreichend bearbeitet ist, entsteht häufig Sustain Talk. Hinweise auf Planungsbereitschaft sind etwa zunehmender mobilisierender Change Talk, Fragen nach dem Wie und ein Nachlassen des Sustain Talk."
          },
          {
            typ: "mc",
            frage: "Ein Klient schätzt die Wichtigkeit, mit dem Rauchen aufzuhören, auf 3 von 10 ein. Welche Anschlussfrage ruft am wahrscheinlichsten Change Talk hervor?",
            optionen: [
              "„Warum nur eine 3 und nicht eine 8?“",
              "„Was müsste passieren, damit Sie auf 10 kommen?“",
              "„Was führt dazu, dass Sie bei 3 sind und nicht bei 0?“",
              "„Finden Sie 3 nicht etwas wenig angesichts der Gesundheitsrisiken?“"
            ],
            richtig: 2,
            erklaerung: "Die Frage nach dem Abstand zum niedrigeren Wert führt dazu, dass der Klient seine eigenen Gründe für Veränderung nennt. Die Frage nach einem höheren Wert lädt dazu ein, Gründe gegen Veränderung aufzuzählen. Ein Sprung auf 10 überfordert, und Option 4 ist eine Konfrontation, die Dissonanz erzeugt."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die vier Prozesse des Motivational Interviewing in ihre typische Abfolge.",
            elemente: ["Beziehungsaufbau", "Fokussierung", "Evokation", "Planung"],
            erklaerung: "Die Prozesse bauen aufeinander auf: Ohne Beziehung kein gemeinsamer Fokus, ohne Fokus keine gezielte Evokation, ohne ausreichende Veränderungsbereitschaft keine tragfähige Planung. In der Praxis wird oft zwischen den Prozessen gewechselt."
          },
          {
            typ: "dialog",
            titel: "Ambivalenz beim Alkohol",
            einleitung: "Konstruierte Situation: Herr F., 45 Jahre, kommt auf Drängen seiner Partnerin in die Beratung. Er trinkt nach eigenen Angaben jeden Abend mehrere Flaschen Bier.",
            runden: [
              {
                klient: "„Meine Frau übertreibt. Ich trinke ja nicht mehr als meine Kollegen. Ich bin nur hier, damit sie Ruhe gibt.“",
                antworten: [
                  { text: "„Mehrere Flaschen jeden Abend sind aber deutlich über den empfohlenen Grenzen. Sie haben ein Alkoholproblem.“", gut: false, feedback: "Konfrontation und Etikettierung rufen meist Gegenwehr hervor. Herr F. wird nun eher argumentieren, warum er kein Problem hat." },
                  { text: "„Sie sind hier, weil Ihre Frau es wollte, und aus Ihrer Sicht ist Ihr Trinken ganz normal.“", gut: true, feedback: "Die einfache Reflexion nimmt seine Sicht ernst, ohne zuzustimmen oder zu widersprechen. Das senkt Dissonanz und lädt zum Weitersprechen ein." },
                  { text: "„Warum glauben Sie, dass Ihre Frau übertreibt?“", gut: false, feedback: "Die Warum-Frage lädt dazu ein, die Position des Nicht-Veränderns weiter zu begründen – also Sustain Talk." }
                ]
              },
              {
                klient: "„Genau. Na ja … manchmal bin ich morgens schon ziemlich kaputt. Aber das liegt an der Arbeit.“",
                antworten: [
                  { text: "„Da sehen Sie es, das kommt vom Alkohol.“", gut: false, feedback: "Der Korrekturreflex: Die beratende Person übernimmt die Argumentation für Veränderung – Herr F. wird die Gegenseite vertreten." },
                  { text: "„Wie viele Stunden arbeiten Sie denn pro Woche?“", gut: false, feedback: "Die Faktenfrage überhört den aufkeimenden Change Talk und lenkt auf die Arbeit als Erklärung." },
                  { text: "„Morgens kaputt zu sein, gefällt Ihnen nicht. Was bemerken Sie da sonst noch?“", gut: true, feedback: "Die Antwort greift den Change Talk (Unzufriedenheit mit der Morgenerschöpfung) selektiv auf und lädt mit einer offenen Frage zur Vertiefung ein." }
                ]
              },
              {
                klient: "„Ich bin unkonzentriert. Und mit meinem Sohn spiele ich am Wochenende kaum noch Fußball, weil ich so schlapp bin. Früher haben wir das immer gemacht.“",
                antworten: [
                  { text: "„Die Zeit mit Ihrem Sohn ist Ihnen sehr wichtig, und Sie vermissen das gemeinsame Fußballspielen.“", gut: true, feedback: "Die komplexe Reflexion hebt den Wert hervor, der hinter der Äußerung steht – ein starker persönlicher Grund für Veränderung." },
                  { text: "„Dann sollten Sie unter der Woche einfach weniger trinken.“", gut: false, feedback: "Ein vorschneller Rat überspringt die Evokation. Herr F. hat noch nicht selbst formuliert, was er verändern möchte." },
                  { text: "„Viele Väter haben wenig Zeit für ihre Kinder, das ist normal.“", gut: false, feedback: "Die Normalisierung entwertet seinen Change Talk und nimmt ihm einen wichtigen Grund für Veränderung." }
                ]
              },
              {
                klient: "„Ja. Das fehlt mir wirklich. Vielleicht sollte ich mal schauen, ob ich unter der Woche ein paar Abende ohne Bier hinkriege.“",
                antworten: [
                  { text: "„Prima, dann machen wir jetzt gleich einen strengen Abstinenzplan für die nächsten drei Monate.“", gut: false, feedback: "Das überfordert und übergeht die Autonomie. Ein Plan sollte gemeinsam und im Tempo von Herrn F. entstehen." },
                  { text: "„Sie überlegen, ein paar Abende ohne Bier auszuprobieren – auch, um wieder fitter für Ihren Sohn zu sein. Wie könnte ein erster Schritt aussehen, der für Sie gut machbar ist?“", gut: true, feedback: "Die Zusammenfassung verknüpft den Change Talk mit seinem Wert und leitet behutsam in die Planung über – mit Respekt vor seiner Entscheidung." },
                  { text: "„Na, ob das klappt? Bisher haben Sie es ja auch nicht geschafft.“", gut: false, feedback: "Zweifel an seiner Fähigkeit schwächen die Zuversicht und damit die Veränderungsbereitschaft." }
                ]
              }
            ]
          },
          {
            typ: "truefalse",
            aussage: "Im Motivational Interviewing ist es Aufgabe der beratenden Person, möglichst überzeugende Argumente für die Veränderung vorzutragen.",
            richtig: false,
            erklaerung: "MI zielt darauf, die eigenen Gründe der Person hervorzurufen. Argumentiert die beratende Person für Veränderung, übernimmt die ambivalente Person häufig die Gegenseite (Korrekturreflex). Fachinformationen werden mit Erlaubnis angeboten, nicht als Überzeugungsarbeit eingesetzt."
          },
          {
            typ: "merke",
            text: "Menschen werden eher durch das überzeugt, was sie selbst sagen, als durch das, was andere ihnen sagen. Darum hört MI aufmerksam auf Change Talk – und hält den Korrekturreflex zurück."
          }
        ]
      },

      /* ---------- B3-4 ---------- */
      {
        id: "B3-4",
        titel: "Den Beratungsprozess strukturieren: Phasen und Kontrakt",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Warum Struktur?",
            text: "Gute Beratung ist **beziehungsorientiert und strukturiert zugleich**. Ohne Struktur besteht die Gefahr, dass Gespräche im Kreis laufen, Erwartungen unausgesprochen bleiben und am Ende niemand weiß, ob und was erreicht wurde. Struktur ist dabei kein starres Korsett, sondern eine **Orientierung**, die Sicherheit gibt – den Ratsuchenden wie den Beratenden.\n\nIn der Beratungsliteratur finden sich verschiedene Phasenmodelle, die sich in ihren Grundzügen ähneln. Ein bewährtes Grundmuster umfasst:\n\n1. **Kontakt und Beziehungsaufbau:** Begrüßung, Orientierung über Rahmen und Ablauf, erste Vertrauensbildung\n2. **Anliegen- und Auftragsklärung:** Worum geht es? Wer will was von wem? Was soll am Ende anders sein?\n3. **Kontrakt:** verbindliche Vereinbarung über Ziele, Rahmen, Rollen und Vorgehen\n4. **Situations-, Problem- und Ressourcenanalyse:** genaues Verstehen der Lage, inklusive Stärken und Unterstützungsmöglichkeiten\n5. **Zielklärung:** konkrete, erreichbare und für die Person bedeutsame Ziele\n6. **Lösungsentwicklung und Umsetzung:** Möglichkeiten erarbeiten, bewerten, erste Schritte planen und ausprobieren\n7. **Transfer und Evaluation:** Was hat sich verändert? Was hat geholfen? Was braucht es noch?\n8. **Abschluss:** Rückblick, Würdigung, Ausblick, gegebenenfalls Hinweis auf weitere Angebote\n\nDiese Phasen verlaufen nicht streng linear. Häufig zeigt sich etwa in der Analysephase, dass das Anliegen neu geklärt werden muss. Die Struktur hilft dann, solche **Rückschleifen** bewusst zu machen, statt unbemerkt das Thema zu wechseln.\n\nAuch **einzelne Sitzungen** lassen sich strukturieren: Ankommen, Rückblick auf die Zeit seit dem letzten Termin, Fokus der heutigen Sitzung, Arbeitsphase, Zusammenfassung und Vereinbarungen."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Phasen eines Beratungsprozesses in eine sinnvolle Grundreihenfolge.",
            elemente: [
              "Kontakt und Beziehungsaufbau",
              "Anliegen- und Auftragsklärung",
              "Kontrakt",
              "Situations- und Ressourcenanalyse",
              "Zielklärung",
              "Lösungsentwicklung und Umsetzung",
              "Evaluation und Abschluss"
            ],
            erklaerung: "Die Reihenfolge bildet ein Grundmuster ab. Ohne Beziehung gelingt keine offene Auftragsklärung, ohne geklärten Auftrag kein tragfähiger Kontrakt, und Lösungen setzen Verständnis und Ziele voraus. In der Praxis gibt es Rückschleifen."
          },
          {
            typ: "text",
            titel: "Anliegen und Auftrag klären",
            text: "Die **Auftragsklärung** ist eine der wichtigsten und am häufigsten unterschätzten Phasen. Viele Beratungen scheitern nicht an fehlender Methodik, sondern an **unklaren oder widersprüchlichen Aufträgen**.\n\nZu unterscheiden sind:\n\n- **Anlass:** Was hat dazu geführt, dass die Person jetzt kommt? („Die Kita hat mich geschickt.“)\n- **Anliegen:** Was möchte die Person selbst? („Ich will, dass mein Sohn wieder gern in die Kita geht.“)\n- **Auftrag:** Was soll die beratende Person konkret tun? („Ich möchte Ideen, wie ich die Morgensituation entspannter gestalten kann.“)\n\nBesonders in sozialen Arbeitsfeldern gibt es oft **mehrere Auftraggebende**: das Jugendamt, die Schule, Angehörige, der Arbeitgeber, die ratsuchende Person selbst. Arist von Schlippe hat für die Klärung solcher Konstellationen das Bild des **Auftragskarussells** vorgeschlagen: Die beratende Person macht sich bewusst, welche Erwartungen von welchen Seiten an sie herangetragen werden, und prüft, welche davon sie annehmen kann.\n\nHilfreiche Fragen zur Auftragsklärung:\n\n- „Was führt Sie zu mir – und warum gerade jetzt?“\n- „Wer hatte die Idee, dass Sie hierherkommen?“\n- „Woran würden Sie am Ende merken, dass sich die Beratung gelohnt hat?“\n- „Was sollte ich auf keinen Fall tun?“\n\nBei Personen, die **nicht freiwillig** kommen, ist es sinnvoll, den Zwangskontext offen zu benennen und gemeinsam nach einem eigenen Anliegen innerhalb dieses Rahmens zu suchen. Dieser Gedanke wird in Modul B4 mit der Unterscheidung von Besuchern, Klagenden und Kunden vertieft."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Aussagen einer Mutter in der Erziehungsberatung den Begriffen zu.",
            paare: [
              ["„Die Lehrerin meinte, ich solle mir Hilfe holen.“", "Anlass"],
              ["„Ich möchte, dass es abends bei uns nicht mehr ständig Streit gibt.“", "Anliegen"],
              ["„Ich wünsche mir von Ihnen konkrete Ideen für eine Abendroutine.“", "Auftrag"]
            ],
            erklaerung: "Der Anlass ist der äußere Auslöser, das Anliegen der Wunsch der Person, der Auftrag die konkrete Erwartung an die beratende Person. Erst wenn alle drei geklärt sind, kann ein tragfähiger Kontrakt entstehen."
          },
          {
            typ: "text",
            titel: "Der Beratungskontrakt",
            text: "Der **Kontrakt** (Beratungsvertrag) ist die **verbindliche Vereinbarung** zwischen beratender und ratsuchender Person. Er kann mündlich oder schriftlich geschlossen werden; bei freiberuflicher Tätigkeit ist ein schriftlicher Vertrag empfehlenswert. Inhaltlich lassen sich mehrere Ebenen unterscheiden:\n\n- **Formaler Rahmen:** Ort, Dauer und Häufigkeit der Termine, Anzahl der vereinbarten Sitzungen, Kosten und Zahlungsmodalitäten, Regelungen bei Absagen, Erreichbarkeit zwischen den Terminen\n- **Vertraulichkeit und ihre Grenzen:** Was bleibt im Raum? Wann besteht eine Offenbarungsbefugnis oder Handlungspflicht, etwa bei akuter Selbst- oder Fremdgefährdung oder bei Kindeswohlgefährdung? Wie wird dokumentiert, und wer hat Zugang zu den Aufzeichnungen?\n- **Inhaltliche Ziele:** Worauf wird hingearbeitet? Woran wird man merken, dass die Beratung erfolgreich ist?\n- **Rollen und Vorgehen:** Was ist Beratung – und was nicht? Welche Methoden werden genutzt? Welche Verantwortung tragen beide Seiten?\n- **Überprüfung und Beendigung:** Wann wird Zwischenbilanz gezogen? Wie kann die Beratung von beiden Seiten beendet werden?\n\nIm Kontrakt sollte auch transparent werden, dass psychologische Beratung **keine Psychotherapie** ist und dass bei Anzeichen einer behandlungsbedürftigen Störung eine Weiterverweisung erfolgt (vgl. Modul B2).\n\nEin gut geklärter Kontrakt hat eine wichtige **beziehungsstiftende** Funktion: Er schafft Sicherheit, verteilt Verantwortung fair und schützt beide Seiten vor Missverständnissen und Enttäuschungen. Er ist zugleich Ausdruck der **Kongruenz** – die beratende Person macht ihre Bedingungen und Grenzen offen."
          },
          {
            typ: "multi",
            frage: "Welche Punkte gehören typischerweise in einen Beratungskontrakt? (Mehrere Antworten möglich)",
            optionen: [
              "Dauer, Häufigkeit und Kosten der Termine",
              "Die Diagnose der ratsuchenden Person nach ICD-11",
              "Vertraulichkeit und ihre Grenzen",
              "Vereinbarte Ziele und Zeitpunkte der Zwischenbilanz",
              "Eine Garantie, dass das Problem gelöst wird"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Rahmenbedingungen, Vertraulichkeit mit ihren Grenzen sowie Ziele und Überprüfung sind Kernelemente eines Kontrakts. Diagnosen sind nicht Aufgabe nicht heilkundlicher Beratung, und Erfolgsgarantien sind unseriös."
          },
          {
            typ: "dialog",
            titel: "Ein Erstgespräch strukturieren",
            einleitung: "Konstruierte Situation: Frau H., 38 Jahre, meldet sich in einer psychologischen Beratungspraxis. Es ist das erste Gespräch.",
            runden: [
              {
                klient: "„Hallo … ich weiß gar nicht genau, wo ich anfangen soll. Es ist gerade alles irgendwie zu viel.“",
                antworten: [
                  { text: "„Erzählen Sie mal der Reihe nach alles von Anfang an, Ihre Kindheit, Ihre Familie, Ihren Beruf.“", gut: false, feedback: "Eine umfassende Anamnese gleich zu Beginn kann überfordern und geht am aktuellen Erleben vorbei." },
                  { text: "„Schön, dass Sie da sind. Wir haben heute etwa eine Stunde. Ich möchte zuerst verstehen, was Sie herführt, und am Ende überlegen wir gemeinsam, ob und wie wir weiterarbeiten. Was ist gerade am meisten zu viel?“", gut: true, feedback: "Die Antwort gibt Orientierung über Zeit und Ablauf (Struktur), lädt mit einer offenen, fokussierenden Frage ein und lässt Frau H. die Wahl, wo sie beginnt." },
                  { text: "„Da sind Sie bei mir genau richtig, das kriegen wir schon hin.“", gut: false, feedback: "Ein Heilsversprechen vor jeder Klärung ist unseriös und kann später enttäuschen." }
                ]
              },
              {
                klient: "„Vor allem die Arbeit. Ich bin Teamleiterin geworden und habe das Gefühl, es niemandem recht zu machen. Meine Hausärztin meinte, eine Beratung könne helfen.“",
                antworten: [
                  { text: "„Sie haben eine neue Führungsrolle und erleben dabei viel Druck, es allen recht zu machen. Ihre Hausärztin hat die Beratung angeregt – was wünschen Sie sich selbst davon?“", gut: true, feedback: "Die Paraphrase fasst den Kern zusammen, unterscheidet den Anlass (Empfehlung der Ärztin) vom eigenen Anliegen und lädt zur Auftragsklärung ein." },
                  { text: "„Da müssen Sie lernen, Grenzen zu setzen.“", gut: false, feedback: "Ein vorschneller Rat ersetzt die Klärung. Noch ist unklar, was Frau H. braucht und will." },
                  { text: "„Hat Ihre Hausärztin eine Diagnose gestellt? Welche?“", gut: false, feedback: "Die Frage, ob eine ärztliche Behandlung läuft, ist legitim; als erste Reaktion lenkt sie aber vom Anliegen weg. Sie kann später im Rahmen der Klärung gestellt werden." }
                ]
              },
              {
                klient: "„Ich möchte lernen, souveräner mit Konflikten im Team umzugehen. Und ich möchte abends wieder abschalten können.“",
                antworten: [
                  { text: "„Gut, dann fangen wir gleich mit einer Konfliktübung an.“", gut: false, feedback: "Vor der Umsetzung fehlt die Vereinbarung über Rahmen, Ziele und Vorgehen. Ohne Kontrakt bleibt unklar, worauf man sich einlässt." },
                  { text: "„Das sind zwei wichtige Ziele. Bevor wir einsteigen, würde ich gern mit Ihnen den Rahmen besprechen: wie viele Termine wir zunächst vereinbaren, was vertraulich bleibt und wo die Grenzen dieser Beratung liegen. Ist das für Sie in Ordnung?“", gut: true, feedback: "Die Antwort würdigt die Ziele und leitet transparent zur Kontraktphase über – mit Erlaubnisfrage." },
                  { text: "„Abschalten ist doch ganz einfach, gehen Sie abends spazieren.“", gut: false, feedback: "Ein Alltagstipp übergeht die Komplexität und überspringt die Strukturierung des Prozesses." }
                ]
              }
            ]
          },
          {
            typ: "text",
            titel: "Abschluss und Evaluation",
            text: "Der **Abschluss** einer Beratung verdient ebenso viel Sorgfalt wie ihr Beginn. Gerade nach intensiven Prozessen kann ein abruptes Ende Ratsuchende verunsichern oder alte Verlusterfahrungen berühren. Ein guter Abschluss umfasst:\n\n- **Rückblick:** Wo stand die Person zu Beginn, wo steht sie jetzt? Skalierungen vom Anfang können wiederholt werden.\n- **Würdigung:** Was hat die Person selbst zur Veränderung beigetragen? Die Zuschreibung von Fortschritten an die **eigene Leistung** stärkt die Selbstwirksamkeit.\n- **Sicherung des Erreichten:** Was hilft, die Veränderungen beizubehalten? Woran würde die Person einen Rückfall in alte Muster frühzeitig bemerken, und was könnte sie dann tun?\n- **Ausblick:** Welche Themen sind offen? Gibt es weitere Angebote, die hilfreich sein könnten?\n- **Verabschiedung:** Ein bewusster, persönlicher Abschied, gegebenenfalls mit dem Angebot einer späteren Kontaktaufnahme.\n\n**Evaluation** sollte nicht erst am Ende stattfinden. Die Psychotherapieforschung zeigt, dass regelmäßiges, strukturiertes **Feedback der Ratsuchenden** zur Beziehung und zum Fortschritt helfen kann, ungünstige Verläufe frühzeitig zu erkennen. Einfache Fragen am Ende jeder Sitzung – „Was war heute hilfreich? Was hat gefehlt?“ – sind ein guter Anfang.\n\nSchließlich gehört zur Strukturierung auch die **Dokumentation**: knapp, sachlich, datenschutzkonform und so formuliert, dass die ratsuchende Person sie bei Einsicht nachvollziehen könnte. Beratende sollten die für ihr Arbeitsfeld geltenden Aufbewahrungs- und Datenschutzregeln kennen."
          },
          {
            typ: "mc",
            frage: "Welche Maßnahme stärkt beim Abschluss einer Beratung besonders die Selbstwirksamkeit der ratsuchenden Person?",
            optionen: [
              "Die beratende Person betont, welche Methoden sie erfolgreich eingesetzt hat.",
              "Fortschritte werden ausdrücklich auf die eigenen Beiträge und Fähigkeiten der ratsuchenden Person zurückgeführt.",
              "Die Beratung wird ohne Rückblick beendet, um die Person nicht zu belasten.",
              "Die ratsuchende Person erhält das Angebot, bei jeder künftigen Schwierigkeit sofort wiederzukommen."
            ],
            richtig: 1,
            erklaerung: "Wenn Veränderungen den eigenen Beiträgen zugeschrieben werden, wächst die Überzeugung, auch künftig etwas bewirken zu können. Die Betonung der eigenen Methoden verschiebt das Verdienst zur beratenden Person, ein Abschluss ohne Rückblick verschenkt Lerngewinne, und eine pauschale Rückkehrempfehlung kann Abhängigkeit fördern."
          },
          {
            typ: "truefalse",
            aussage: "Die Grenzen der Vertraulichkeit sollten erst angesprochen werden, wenn tatsächlich eine Gefährdungssituation eintritt, um das Vertrauen am Anfang nicht zu stören.",
            richtig: false,
            erklaerung: "Transparenz über die Grenzen der Vertraulichkeit gehört an den Anfang, in den Kontrakt. Werden sie erst in der Krise benannt, kann das als Vertrauensbruch erlebt werden. Offenheit von Beginn an ist Ausdruck von Kongruenz und schützt die Beziehung."
          },
          {
            typ: "merke",
            text: "Ein klarer Kontrakt ist keine Formalität, sondern das Fundament der Zusammenarbeit: Er schafft Sicherheit, verteilt Verantwortung und macht Grenzen von Anfang an transparent."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Prozess und Kontrakt",
            karten: [
              { vorne: "Anlass – Anliegen – Auftrag", hinten: "Äußerer Auslöser – eigener Wunsch der Person – konkrete Erwartung an die beratende Person." },
              { vorne: "Auftragskarussell", hinten: "Bild nach Arist von Schlippe für die Vielzahl von Erwartungen verschiedener Auftraggebender an die beratende Person." },
              { vorne: "Kontrakt", hinten: "Verbindliche Vereinbarung über Rahmen, Vertraulichkeit, Ziele, Rollen, Vorgehen, Überprüfung und Beendigung." },
              { vorne: "Sitzungsstruktur", hinten: "Ankommen – Rückblick – Fokus – Arbeitsphase – Zusammenfassung – Vereinbarungen." },
              { vorne: "Guter Abschluss", hinten: "Rückblick, Würdigung eigener Beiträge, Sicherung des Erreichten, Ausblick und bewusste Verabschiedung." }
            ]
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "multi",
        frage: "Welche drei Grundhaltungen beschrieb Carl Rogers für die beratende Person? (Mehrere Antworten möglich)",
        optionen: ["Empathie", "Konfrontation", "Bedingungslose positive Wertschätzung", "Kongruenz", "Neutralität"],
        richtig: [0, 2, 3],
        erklaerung: "Rogers nannte einfühlendes Verstehen, bedingungslose positive Wertschätzung und Kongruenz (Echtheit). Konfrontation widerspricht dem Ansatz, Neutralität ist ein Begriff aus anderen Schulen, insbesondere der systemischen und psychodynamischen Tradition."
      },
      {
        typ: "mc",
        frage: "Ein Klient sagt: „Seit der Trennung sitze ich abends allein in der Wohnung und starre an die Wand.“ Welche Antwort ist ein Verbalisieren emotionaler Erlebnisinhalte?",
        optionen: [
          "„Seit der Trennung verbringen Sie die Abende allein zu Hause.“",
          "„Warum unternehmen Sie nichts mit Freunden?“",
          "„Es klingt, als fühlten Sie sich sehr einsam und leer.“",
          "„Das geht vorbei, nach einer Trennung ist das normal.“"
        ],
        richtig: 2,
        erklaerung: "Die dritte Antwort benennt das mitschwingende Gefühl. Die erste ist eine Paraphrase des Inhalts, die zweite eine Warum-Frage mit implizitem Rat, die vierte eine Beruhigung und damit eine Kommunikationssperre."
      },
      {
        typ: "truefalse",
        aussage: "Geschlossene Fragen sind in der Beratung grundsätzlich zu vermeiden.",
        richtig: false,
        erklaerung: "Geschlossene Fragen sind sinnvoll, um Fakten zu klären, Entscheidungen herbeizuführen oder in Krisen gezielt einzuschätzen, etwa bei der Frage nach Suizidgedanken. Problematisch ist ihr übermäßiger oder unreflektierter Einsatz."
      },
      {
        typ: "mc",
        frage: "Wofür steht das Akronym OARS im Motivational Interviewing?",
        optionen: [
          "Offene Fragen, Würdigung, reflektierendes Zuhören, Zusammenfassungen",
          "Orientierung, Analyse, Ressourcen, Strategien",
          "Ordnen, Abwägen, Reflektieren, Steuern",
          "Offenheit, Akzeptanz, Respekt, Selbstbestimmung"
        ],
        richtig: 0,
        erklaerung: "OARS steht für Open questions, Affirmations, Reflections und Summaries. Diese Basistechniken dienen dem Beziehungsaufbau und dem Hervorrufen von Change Talk."
      },
      {
        typ: "multi",
        frage: "Welche Äußerungen sind Change Talk? (Mehrere Antworten möglich)",
        optionen: [
          "„Ich will wieder mehr Zeit mit meinen Kindern verbringen.“",
          "„Das Rauchen ist das Einzige, was mich entspannt.“",
          "„Ich glaube, ich könnte es schaffen, die Spielhalle zu meiden.“",
          "„Letzte Woche habe ich zweimal auf den Wein verzichtet.“",
          "„Ich sehe überhaupt keinen Grund, etwas zu ändern.“"
        ],
        richtig: [0, 2, 3],
        erklaerung: "Wunsch, Fähigkeit und erste Schritte sind Formen des Change Talk (DARN-CAT). Die beiden anderen Aussagen sind Sustain Talk, also Äußerungen zugunsten des Status quo."
      },
      {
        typ: "mc",
        frage: "Was bezeichnen Miller und Rollnick als „Korrekturreflex“?",
        optionen: [
          "Die Neigung von Klientinnen und Klienten, Rückfälle zu verschweigen",
          "Den Impuls von Helfenden, Probleme sofort zu korrigieren und für Veränderung zu argumentieren",
          "Eine Technik, mit der Sustain Talk in Change Talk umgewandelt wird",
          "Die automatische Korrektur fehlerhafter Paraphrasen durch die ratsuchende Person"
        ],
        richtig: 1,
        erklaerung: "Der Korrekturreflex ist der gut gemeinte Drang, die Dinge richtigzustellen. Bei ambivalenten Menschen führt er häufig dazu, dass sie die Gegenseite vertreten. MI übt deshalb, diesen Reflex zurückzuhalten."
      },
      {
        typ: "truefalse",
        aussage: "Im Beratungskontrakt sollten auch die Grenzen der Vertraulichkeit transparent gemacht werden.",
        richtig: true,
        erklaerung: "Transparenz über Vertraulichkeit und deren Grenzen, etwa bei akuter Selbst- oder Fremdgefährdung oder Kindeswohlgefährdung, gehört zu einem fairen und tragfähigen Kontrakt."
      },
      {
        typ: "mc",
        frage: "Eine Mutter sagt: „Das Jugendamt hat mich geschickt.“ Was beschreibt diese Aussage im Sinne der Auftragsklärung?",
        optionen: ["Das Anliegen", "Den Auftrag", "Den Kontrakt", "Den Anlass"],
        richtig: 3,
        erklaerung: "Die Aussage benennt den äußeren Auslöser, also den Anlass. Das eigene Anliegen der Mutter und ihr konkreter Auftrag an die Beratung müssen erst noch geklärt werden, bevor ein Kontrakt geschlossen werden kann."
      }
    ]
  },

  /* =========================================================
     B4 · Lösungs- und Ressourcenorientierung
     ========================================================= */
  {
    kurs: "berater",
    id: "B4",
    titel: "Lösungs- und Ressourcenorientierung",
    beschreibung: "Statt Probleme bis in ihre Ursachen zu analysieren, fragen lösungs- und ressourcenorientierte Ansätze: Was soll stattdessen sein, was funktioniert schon, und worauf kann eine Person zurückgreifen? Das Modul stellt die lösungsorientierte Kurzberatung nach Steve de Shazer und Insoo Kim Berg mit ihren zentralen Fragetechniken vor, ergänzt sie um systemische Methoden wie zirkuläres Fragen und Reframing und vermittelt Werkzeuge der Ressourcenanalyse und Zielklärung.",
    lernziele: [
      "Sie können die Grundannahmen der lösungsorientierten Kurzberatung nach de Shazer und Kim Berg erläutern.",
      "Sie können Wunderfrage, Skalierungsfragen, Ausnahmefragen und Bewältigungsfragen situationsgerecht formulieren.",
      "Sie können zirkuläre Fragen und Reframing als systemische Interventionen einsetzen.",
      "Sie können eine Ressourcenanalyse strukturiert durchführen.",
      "Sie können gemeinsam mit Ratsuchenden gut formulierte, überprüfbare Ziele entwickeln."
    ],
    lektionen: [
      /* ---------- B4-1 ---------- */
      {
        id: "B4-1",
        titel: "Grundlagen der lösungsorientierten Kurzberatung",
        dauer: 30,
        schritte: [
          {
            typ: "text",
            titel: "Von Problemen zu Lösungen: Entstehung des Ansatzes",
            text: "Die **lösungsorientierte Kurztherapie** (*Solution-Focused Brief Therapy*, SFBT) wurde ab Ende der 1970er-Jahre von **Steve de Shazer** und **Insoo Kim Berg** gemeinsam mit Kolleginnen und Kollegen am **Brief Family Therapy Center in Milwaukee** (USA) entwickelt. Sie steht in der Tradition der systemischen Familientherapie und der Kurztherapie des Mental Research Institute in Palo Alto sowie der Arbeiten des Psychiaters Milton H. Erickson.\n\nDas Team beobachtete in vielen Sitzungen, was tatsächlich zu Veränderungen beitrug. Eine zentrale Einsicht lautete: **Lösungen müssen nicht zwingend aus einer genauen Analyse des Problems abgeleitet werden.** Oft hängen Problem und Lösung weniger eng zusammen, als man annimmt. Statt zu fragen „Warum ist das so?“, fragt der Ansatz: „Was soll stattdessen sein?“ und „Was funktioniert schon?“.\n\nIm Beratungskontext spricht man meist von **lösungsorientierter Kurzberatung** oder **lösungsfokussierter Beratung**. Der Ansatz wird in Jugendhilfe, Schule, Sozialarbeit, Coaching, Organisationsberatung und Psychotherapie eingesetzt.\n\nDie Evidenzlage ist **heterogen**: Übersichtsarbeiten berichten überwiegend positive, häufig kleine bis mittlere Effekte, allerdings bei oft eingeschränkter methodischer Qualität der Studien. Für die Behandlung schwerer psychischer Störungen ersetzt der Ansatz keine leitliniengerechte Therapie – für die Beratung bei Lebensfragen und Alltagsproblemen bietet er jedoch ein besonders praxisnahes und respektvolles Instrumentarium."
          },
          {
            typ: "luecke",
            text: "Die lösungsorientierte Kurzberatung wurde von {{Steve de Shazer und Insoo Kim Berg|Carl Rogers und Abraham Maslow|William Miller und Stephen Rollnick}} am Brief Family Therapy Center in {{Milwaukee|Palo Alto|Heidelberg}} entwickelt.",
            erklaerung: "De Shazer und Kim Berg entwickelten den Ansatz in Milwaukee. Palo Alto ist der Sitz des Mental Research Institute, dessen Kurztherapie den Ansatz beeinflusste. Miller und Rollnick entwickelten das Motivational Interviewing, Rogers den personzentrierten Ansatz."
          },
          {
            typ: "text",
            titel: "Grundannahmen und Leitsätze",
            text: "Der lösungsorientierte Ansatz beruht auf einigen Grundannahmen, die die Haltung der beratenden Person prägen:\n\n- **Die ratsuchende Person ist Expertin für ihr Leben.** Sie weiß am besten, was für sie passt. Die beratende Person ist Expertin für den Prozess – für hilfreiche Fragen und Gesprächsführung.\n- **Jeder Mensch verfügt über Ressourcen.** Auch in schwierigen Lagen gibt es Fähigkeiten, Erfahrungen und Unterstützung, auf die aufgebaut werden kann.\n- **Veränderung ist unvermeidlich.** Kein Problem tritt immer mit gleicher Intensität auf. Kleine Veränderungen geschehen ständig und können größere anstoßen.\n- **Es gibt Ausnahmen.** Zeiten, in denen das Problem weniger stark oder gar nicht auftritt, enthalten Hinweise auf Lösungen.\n- **Kleine Schritte genügen.** Ein kleiner, erreichbarer Schritt kann eine positive Dynamik auslösen.\n\nIn der lösungsorientierten Literatur werden häufig drei pragmatische **Leitsätze** zitiert, die de Shazer und Kim Berg zugeschrieben werden – sinngemäß:\n\n1. **Was nicht kaputt ist, muss man nicht reparieren.**\n2. **Wenn etwas funktioniert, mach mehr davon.**\n3. **Wenn etwas nicht funktioniert, mach etwas anderes.**\n\nDiese Sätze klingen schlicht, haben aber weitreichende Folgen: Beratende verzichten darauf, Probleme zu „finden“, wo die Person keine sieht, verstärken gezielt Gelingendes und ermutigen zum Experimentieren, wenn Lösungsversuche festgefahren sind. Viele Probleme werden nach dieser Sicht gerade durch **„mehr desselben“** aufrechterhalten – durch wiederholte Lösungsversuche, die nicht wirken."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Beratungssituationen dem passenden lösungsorientierten Leitsatz zu.",
            paare: [
              ["Eine Mutter berichtet, dass das gemeinsame Vorlesen am Abend ihre Tochter zuverlässig beruhigt.", "Wenn etwas funktioniert, mach mehr davon."],
              ["Ein Vater schimpft seit Monaten jeden Morgen lauter, doch der Sohn steht trotzdem nicht auf.", "Wenn etwas nicht funktioniert, mach etwas anderes."],
              ["Eine Klientin ist mit ihrer Wohnsituation zufrieden; die Beraterin sieht keinen Grund, sie zu problematisieren.", "Was nicht kaputt ist, muss man nicht reparieren."]
            ],
            erklaerung: "Gelingendes wird verstärkt, festgefahrene Lösungsversuche nach dem Muster „mehr desselben“ werden durch neue Experimente ersetzt, und Bereiche, die für die Person in Ordnung sind, werden nicht zum Problem gemacht."
          },
          {
            typ: "text",
            titel: "Problemsprache und Lösungssprache",
            text: "Ein Kernelement des Ansatzes ist der bewusste Wechsel von der **Problemsprache** zur **Lösungssprache**. Problemgespräche (*problem talk*) drehen sich um Ursachen, Schuld, Defizite und das, was nicht geht. Lösungsgespräche (*solution talk*) richten sich auf das Gewünschte, auf Fortschritte, Fähigkeiten und nächste Schritte.\n\nDas bedeutet **nicht**, Probleme zu ignorieren oder schönzureden. Ratsuchende brauchen in der Regel zunächst Raum, ihr Anliegen und ihre Belastung zu schildern – und die Anerkennung dieser Belastung. Lösungsorientierte Beratende hören respektvoll zu und **würdigen**, was die Person bereits durchgestanden hat. Sie lenken das Gespräch dann aber behutsam auf Fragen wie:\n\n- „Was soll stattdessen sein?“\n- „Woran würden Sie merken, dass es ein kleines bisschen besser geworden ist?“\n- „Was hat Ihnen bisher geholfen, das alles durchzustehen?“\n\nMehrere sprachliche Mittel unterstützen diesen Wechsel:\n\n- **Präsuppositionen** (Vorannahmen): „**Wenn** die Situation sich verbessert …“ statt „**Falls** …“ – das unterstellt, dass Veränderung möglich ist.\n- **Vergangenheitsform für Probleme:** „Bisher hat es Sie oft geärgert …“ öffnet die Möglichkeit, dass es künftig anders sein könnte.\n- **Positive Zielformulierungen:** „Was wollen Sie stattdessen?“ statt „Was soll aufhören?“\n- **Komplimente:** ehrliche, auf konkrete Beobachtungen gestützte Anerkennung von Stärken und Bemühungen\n\nKomplimente sind im Ansatz ein eigenständiges Element. Sie sollten **glaubwürdig** und **spezifisch** sein, sonst wirken sie floskelhaft."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Fragen der Problem- oder der Lösungssprache zu.",
            kategorien: ["Problemsprache", "Lösungssprache"],
            elemente: [
              { text: "„Seit wann geht das schon so schlecht?“", kat: 0 },
              { text: "„Woran würden Sie merken, dass es ein kleines bisschen besser läuft?“", kat: 1 },
              { text: "„Wer ist Ihrer Meinung nach schuld an dem Streit?“", kat: 0 },
              { text: "„Was haben Sie in der letzten Woche getan, das geholfen hat?“", kat: 1 },
              { text: "„Was genau stört Sie alles an Ihrem Kollegen?“", kat: 0 },
              { text: "„Was möchten Sie stattdessen mit Ihrem Kollegen erleben?“", kat: 1 }
            ],
            erklaerung: "Problemsprache fokussiert auf Dauer, Schuld und Defizite, Lösungssprache auf Erwünschtes, Gelingendes und Unterschiede. Beide haben ihren Platz: Zunächst braucht die Belastung Anerkennung, dann hilft der Wechsel zur Lösungssprache."
          },
          {
            typ: "text",
            titel: "Besucher, Klagende, Kunden: Arten der Beratungsbeziehung",
            text: "De Shazer und Kim Berg unterschieden – ursprünglich mit Blick auf die Beziehung zwischen beratender und ratsuchender Person, nicht auf Eigenschaften der Person – drei typische Beziehungsformen:\n\n- **Besucherbeziehung:** Die Person ist nicht aus eigenem Antrieb gekommen und sieht (noch) kein eigenes Anliegen, etwa bei einer Auflage durch Gericht, Jugendamt oder Arbeitgeber. Hier geht es zunächst um Respekt, Komplimente für das Erscheinen und die Suche nach etwas, das für die Person selbst nützlich sein könnte. Hausaufgaben sind unangebracht.\n- **Klagendenbeziehung:** Die Person beschreibt ein Problem, sieht die Lösung aber vor allem bei anderen („Mein Mann müsste sich ändern“). Hier helfen Würdigung, Beobachtungsaufgaben („Achten Sie darauf, wann es ein bisschen besser ist“) und die vorsichtige Frage nach eigenen Möglichkeiten.\n- **Kundenbeziehung:** Die Person hat ein Anliegen und ist bereit, selbst etwas dafür zu tun. Hier können konkrete Handlungsaufgaben und Experimente vereinbart werden.\n\nDiese Beziehungsformen sind **nicht statisch**: Aus einer Besucher- kann im Laufe eines Gesprächs eine Kundenbeziehung werden. Sie beziehen sich zudem auf ein bestimmtes **Thema** – jemand kann bei einem Anliegen Kunde, bei einem anderen Besucher sein.\n\nDie Unterscheidung schützt vor einem häufigen Fehler: Beratende setzen voraus, dass Ratsuchende Veränderung wollen, und geben Aufgaben, die nicht passen. Wenn Ratsuchende diese nicht umsetzen, wird das dann als „Widerstand“ gedeutet – obwohl eigentlich das Angebot nicht zur Beziehung passte. Hier zeigt sich eine Nähe zum Motivational Interviewing und zum Transtheoretischen Modell."
          },
          {
            typ: "mc",
            frage: "Ein Jugendlicher sitzt auf Anweisung der Schule in der Beratung und sagt: „Ich habe kein Problem. Die Lehrer haben ein Problem mit mir.“ Welche Reaktion entspricht dem lösungsorientierten Umgang mit einer Besucherbeziehung?",
            optionen: [
              "„Dann schreiben Sie bis zur nächsten Woche auf, was Sie alles falsch gemacht haben.“",
              "„Wenn Sie nicht mitarbeiten, muss ich das der Schule melden.“",
              "„Doch, Sie haben ein Problem, sonst wären Sie nicht hier.“",
              "„Respekt, dass Sie trotzdem gekommen sind. Was müsste passieren, damit die Lehrer Ihnen weniger auf die Nerven gehen?“"
            ],
            richtig: 3,
            erklaerung: "In einer Besucherbeziehung helfen Wertschätzung für das Erscheinen und die Suche nach einem eigenen, für die Person attraktiven Anliegen – hier etwa, dass die Lehrer ihn in Ruhe lassen. Aufgaben, Drohungen und das Aufdrängen einer Problemsicht verfehlen die Beziehung."
          },
          {
            typ: "truefalse",
            aussage: "Lösungsorientierte Beratung bedeutet, dass über Probleme und Belastungen grundsätzlich nicht gesprochen werden darf.",
            richtig: false,
            erklaerung: "Ratsuchende brauchen Raum, ihre Belastung zu schildern, und Anerkennung dafür. Der lösungsorientierte Ansatz verzichtet lediglich darauf, Probleme ausführlich nach Ursachen zu analysieren, und lenkt das Gespräch behutsam auf Ziele, Ausnahmen und Ressourcen."
          },
          {
            typ: "merke",
            text: "Die ratsuchende Person ist Expertin für ihr Leben, die beratende Person Expertin für hilfreiche Fragen. Wenn etwas funktioniert: mehr davon. Wenn nicht: etwas anderes."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Lösungsorientierte Grundlagen",
            karten: [
              { vorne: "Brief Family Therapy Center", hinten: "Institut in Milwaukee, an dem Steve de Shazer und Insoo Kim Berg den lösungsorientierten Ansatz entwickelten." },
              { vorne: "Mehr desselben", hinten: "Wiederholung eines Lösungsversuchs, der nicht wirkt, und dadurch Aufrechterhaltung des Problems." },
              { vorne: "Problemsprache vs. Lösungssprache", hinten: "Fokus auf Ursachen, Schuld und Defizite vs. Fokus auf Erwünschtes, Gelingendes und nächste Schritte." },
              { vorne: "Besucherbeziehung", hinten: "Kein eigenes Anliegen (noch nicht); Respekt, Komplimente für das Erscheinen, Suche nach etwas Nützlichem – keine Aufgaben." },
              { vorne: "Klagendenbeziehung", hinten: "Problem wird gesehen, Lösung bei anderen vermutet; Würdigung und Beobachtungsaufgaben." },
              { vorne: "Kundenbeziehung", hinten: "Eigenes Anliegen und Bereitschaft, selbst etwas zu tun; Handlungsaufgaben und Experimente möglich." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Denken Sie an ein Problem, an dem Sie selbst oder ein Team länger festhingen. Wo zeigt sich dort das Muster „mehr desselben“?",
            hinweis: "Welche Lösungsversuche wurden immer wieder wiederholt, obwohl sie nicht wirkten? Was wäre ein kleines Experiment, bei dem man „etwas anderes“ ausprobieren könnte?"
          }
        ]
      },

      /* ---------- B4-2 ---------- */
      {
        id: "B4-2",
        titel: "Wunderfrage, Skalierung und Ausnahmen",
        dauer: 40,
        schritte: [
          {
            typ: "text",
            titel: "Die Wunderfrage",
            text: "Die **Wunderfrage** ist die wohl bekannteste Intervention des lösungsorientierten Ansatzes. Sie wird dem Umfeld von de Shazer und Kim Berg zugeschrieben und lautet sinngemäß:\n\n*„Ich möchte Ihnen eine etwas ungewöhnliche Frage stellen. Angenommen, Sie gehen heute Abend nach Hause, gehen zu Bett und schlafen ein. Während Sie schlafen, geschieht ein Wunder – und das Problem, das Sie hierhergeführt hat, ist gelöst. Weil Sie geschlafen haben, wissen Sie nicht, dass das Wunder geschehen ist. Woran würden Sie morgen früh als Erstes merken, dass sich etwas verändert hat?“*\n\nDie Frage zielt darauf, eine **konkrete, detaillierte Beschreibung einer erwünschten Zukunft** zu erhalten. Wichtig ist dabei:\n\n- **Langsam und mit Pausen** stellen – die Person braucht Zeit, sich in die Vorstellung hineinzuversetzen.\n- **Das Wunder bezieht sich auf das Problem, nicht auf Unmögliches.** Antwortet jemand „Mein verstorbener Mann wäre wieder da“, wird das respektvoll gewürdigt und anschließend gefragt, was dann anders wäre und was davon vielleicht auch ohne ihn ein wenig möglich ist.\n- **Nach beobachtbaren Unterschieden fragen:** „Was würden Sie als Erstes anders machen? Wer würde es noch bemerken? Woran?“\n- **Interaktionen erfragen:** „Wenn Ihr Partner das bemerkt – wie würde er reagieren? Und was würden Sie dann tun?“\n\nDie Antworten liefern oft erstaunlich konkrete Bilder, die als **Orientierung für Ziele** dienen. Häufig zeigt sich zudem, dass Teile des „Wunders“ bereits gelegentlich vorkommen – eine Brücke zu den Ausnahmefragen."
          },
          {
            typ: "multi",
            frage: "Welche Anschlussfragen nach der Wunderfrage sind hilfreich? (Mehrere Antworten möglich)",
            optionen: [
              "„Was würden Sie am Morgen nach dem Wunder als Erstes anders machen?“",
              "„Warum ist das Wunder bisher nicht geschehen?“",
              "„Wer aus Ihrer Familie würde den Unterschied als Erstes bemerken – und woran?“",
              "„Wann gab es schon einmal einen Tag, an dem ein kleines Stück dieses Wunders passiert ist?“",
              "„Glauben Sie wirklich, dass so ein Wunder realistisch ist?“"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Hilfreich sind Fragen nach konkretem eigenem Verhalten, nach der Wahrnehmung durch andere und nach bereits erlebten Teilen des Wunders. Die Warum-Frage führt zurück in die Problemanalyse, die Realitätsprüfung entwertet die Vorstellung und bricht den Prozess ab."
          },
          {
            typ: "text",
            titel: "Skalierungsfragen",
            text: "**Skalierungsfragen** machen Unterschiede sichtbar und messbar. Typischerweise wird eine Skala von **0 bis 10** angeboten:\n\n*„Auf einer Skala von 0 bis 10, wobei 10 bedeutet, das Wunder ist geschehen, und 0 der Moment, als es am schlimmsten war – wo stehen Sie heute?“*\n\nDie Zahl selbst ist weniger wichtig als die **Gespräche, die sie eröffnet**:\n\n- **Würdigung des Erreichten:** „Sie sagen 3. Was ist schon da, dass es 3 ist und nicht 0?“ Diese Frage lenkt den Blick auf vorhandene Ressourcen und bisher Erreichtes.\n- **Der nächste kleine Schritt:** „Woran würden Sie merken, dass Sie bei 4 sind?“ – nicht bei 10! Kleine, konkrete Schritte sind leichter vorstellbar und umsetzbar.\n- **Zielklärung:** „Bei welcher Zahl wären Sie zufrieden genug, um die Beratung zu beenden?“ Oft nennen Menschen nicht 10, sondern 7 oder 8.\n- **Verlaufsmessung:** In Folgesitzungen kann erneut skaliert werden: „Wo stehen Sie heute im Vergleich zum letzten Mal?“\n\nSkalen lassen sich vielseitig einsetzen: für Zuversicht („Wie zuversichtlich sind Sie, dass sich etwas ändern lässt?“), Motivation („Wie viel sind Sie bereit, dafür zu tun?“) oder für die Einschätzung durch andere („Was würde Ihre Kollegin sagen, wo Sie stehen?“).\n\nBei Kindern können Skalen mit Bildern, Treppen oder Bewegung im Raum dargestellt werden. In **Krisen** ist zu beachten, dass eine sehr niedrige Zahl Anlass sein kann, behutsam nach Hoffnungslosigkeit und Suizidgedanken zu fragen (vgl. Modul B2)."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Schritte einer typischen Arbeit mit der Skalierungsfrage in eine sinnvolle Reihenfolge.",
            elemente: [
              "Skala erklären und Endpunkte festlegen",
              "Aktuellen Wert erfragen",
              "Erkunden, was schon da ist, dass es nicht weniger ist",
              "Nach Merkmalen des nächsthöheren Werts fragen",
              "Einen kleinen nächsten Schritt vereinbaren"
            ],
            erklaerung: "Zunächst wird die Skala eingeführt, dann der aktuelle Stand erfragt. Die Frage nach dem bereits Erreichten würdigt Ressourcen, bevor der Blick auf den nächsten Schritt gerichtet wird, aus dem sich eine konkrete Vereinbarung ergibt."
          },
          {
            typ: "text",
            titel: "Ausnahmefragen",
            text: "Kein Problem tritt **immer** und mit gleicher Stärke auf. **Ausnahmen** sind Zeiten, in denen das Problem weniger stark, seltener oder gar nicht vorkommt – oder in denen die Person besser damit umgehen konnte. Lösungsorientierte Beratung sucht systematisch nach solchen Ausnahmen, weil in ihnen bereits **Teile der Lösung** stecken.\n\nTypische **Ausnahmefragen**:\n\n- „Wann war das Problem in letzter Zeit einmal etwas weniger stark?“\n- „Gab es Tage, an denen Sie besser mit Ihrem Sohn ausgekommen sind? Was war da anders?“\n- „Was haben Sie an diesem Tag anders gemacht?“\n- „Wer hat dazu beigetragen? Wie haben Sie das geschafft?“\n\nWurde eine Ausnahme gefunden, wird sie **genau erkundet**: Was war vorher, was währenddessen, was danach? Wer war beteiligt? Was hat die Person selbst dazu beigetragen? Ziel ist es, Muster zu erkennen, die **wiederholt** werden können – ganz im Sinne des Leitsatzes „Wenn etwas funktioniert, mach mehr davon“.\n\nMan unterscheidet **gewollte** Ausnahmen, die durch eigenes Handeln entstanden sind, und **zufällige**, die ohne erkennbares eigenes Zutun auftraten. Bei gewollten Ausnahmen kann die Person ermutigt werden, das Hilfreiche bewusst häufiger zu tun. Bei zufälligen Ausnahmen bietet sich eine **Beobachtungs- oder Vorhersageaufgabe** an: „Achten Sie bis zum nächsten Mal darauf, wann es besser läuft und was dann anders ist.“\n\nViele Ratsuchende bemerken Ausnahmen zunächst gar nicht, weil das Problem ihre Wahrnehmung dominiert. Geduldiges Nachfragen ist daher oft nötig."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Fragen der passenden Fragetechnik zu.",
            kategorien: ["Wunderfrage", "Skalierungsfrage", "Ausnahmefrage"],
            elemente: [
              { text: "„Angenommen, über Nacht wäre das Problem gelöst – woran würden Sie es morgens merken?“", kat: 0 },
              { text: "„Wo stehen Sie heute zwischen 0 und 10?“", kat: 1 },
              { text: "„Wann war es in den letzten Wochen ein wenig besser?“", kat: 2 },
              { text: "„Was wäre bei 5 anders als jetzt bei 4?“", kat: 1 },
              { text: "„Was haben Sie an dem Abend, an dem es keinen Streit gab, anders gemacht?“", kat: 2 },
              { text: "„Wenn das Wunder geschehen wäre – wer würde es als Erster bemerken?“", kat: 0 }
            ],
            erklaerung: "Die Wunderfrage entwirft eine erwünschte Zukunft, die Skalierungsfrage macht Unterschiede und Schritte messbar, die Ausnahmefrage sucht nach Zeiten, in denen das Problem schwächer war, und nach dem, was dazu beigetragen hat."
          },
          {
            typ: "text",
            titel: "Bewältigungsfragen und Komplimente",
            text: "Nicht immer finden sich Ausnahmen, und manchmal ist die Lage so schwer, dass Wunderfragen zynisch wirken könnten – etwa nach einem Todesfall oder bei schwerer Krankheit. Für solche Situationen hat der lösungsorientierte Ansatz die **Bewältigungsfragen** (*coping questions*) entwickelt.\n\nSie würdigen, **was die Person trotz allem leistet**, und machen dadurch verborgene Ressourcen sichtbar:\n\n- „Wie schaffen Sie es, bei all dem morgens aufzustehen?“\n- „Was hilft Ihnen, nicht völlig aufzugeben?“\n- „Wie ist es Ihnen gelungen, dass es nicht noch schlimmer gekommen ist?“\n- „Wer oder was gibt Ihnen in dieser Zeit Halt?“\n\nBewältigungsfragen wirken häufig **entlastend**: Die Person erlebt, dass ihr Durchhalten gesehen wird. Zugleich wird die implizite Botschaft vermittelt, dass sie über Kräfte verfügt – auch wenn sie sich gerade kraftlos fühlt.\n\nEng verbunden sind **Komplimente**. Lösungsorientierte Beratende geben am Ende eines Gesprächs oft eine kurze Rückmeldung, die mit ehrlicher Anerkennung beginnt und dann zu einer Anregung überleitet. Man unterscheidet:\n\n- **direkte Komplimente:** „Ich finde es beeindruckend, wie klar Sie Ihre Ziele benennen.“\n- **indirekte Komplimente** in Frageform: „Wie haben Sie das geschafft?“ – sie laden die Person ein, ihre eigenen Stärken zu formulieren.\n- **Selbstkomplimente:** wenn die Person selbst ihre Leistungen benennt; diese werden aufgegriffen und verstärkt.\n\nIndirekte Komplimente gelten als besonders wirksam, weil die Person ihre Stärken **selbst** ausspricht."
          },
          {
            typ: "fall",
            titel: "Pflege und Erschöpfung",
            fall: "Konstruierte Lehrvignette: Frau R., 59 Jahre, pflegt ihren Mann nach einem Schlaganfall. Sie wirkt erschöpft und sagt: „Es gibt nichts, was besser läuft. Jeder Tag ist gleich schlimm. Eine Wunderfrage brauche ich nicht – mein Mann wird nicht wieder gesund.“",
            frage: "Welche Frage ist in dieser Situation am angemessensten?",
            optionen: [
              "„Wie schaffen Sie es, Tag für Tag für Ihren Mann da zu sein, obwohl es so schwer ist?“",
              "„Stellen Sie sich trotzdem vor, ein Wunder geschieht – woran würden Sie es merken?“",
              "„Auf einer Skala von 0 bis 10: Wie schnell möchten Sie bei 10 sein?“",
              "„Sie sollten unbedingt mehr an sich denken und positiver sein.“"
            ],
            richtig: 0,
            erklaerung: "Die Bewältigungsfrage würdigt die Leistung von Frau R. und eröffnet einen Zugang zu ihren Ressourcen, ohne das Unveränderliche zu leugnen. Die Wunderfrage hat sie ausdrücklich abgelehnt; sie zu wiederholen, würde sie übergehen. Der Sprung zu 10 ist unrealistisch, und Ratschläge zum positiven Denken wirken entwertend."
          },
          {
            typ: "dialog",
            titel: "Skalieren und kleine Schritte",
            einleitung: "Konstruierte Situation: Herr P., 33 Jahre, Erzieher, kommt in die Beratung, weil er sich im Job zunehmend überfordert fühlt. Im ersten Gespräch hat er die Wunderfrage beantwortet: Nach dem Wunder würde er morgens ausgeruht und mit Vorfreude zur Arbeit gehen.",
            runden: [
              {
                klient: "„Wenn 10 das Wunder ist … dann bin ich heute vielleicht bei 3.“",
                antworten: [
                  { text: "„Nur 3? Das ist ja ziemlich wenig.“", gut: false, feedback: "Die Bewertung der Zahl als „wenig“ verstärkt den Problemfokus und kann entmutigen." },
                  { text: "„Was ist schon da, dass Sie bei 3 sind und nicht bei 0?“", gut: true, feedback: "Die Frage richtet den Blick auf vorhandene Ressourcen und bereits Erreichtes – ein Kernschritt der Skalierungsarbeit." },
                  { text: "„Was müssten Sie tun, um auf 10 zu kommen?“", gut: false, feedback: "Der Sprung auf 10 ist zu groß. Lösungsorientierte Beratung fragt nach dem nächsten kleinen Schritt." }
                ]
              },
              {
                klient: "„Na ja … die Kinder in meiner Gruppe mag ich wirklich. Und mit meiner Kollegin Anna verstehe ich mich gut.“",
                antworten: [
                  { text: "„Die Beziehung zu den Kindern und zu Anna tragen Sie also. Woran würden Sie merken, dass Sie bei 4 sind?“", gut: true, feedback: "Die Ressourcen werden zusammengefasst und gewürdigt; dann folgt die Frage nach dem nächsten kleinen Schritt auf der Skala." },
                  { text: "„Und was ist mit den anderen Kolleginnen und Kollegen? Gibt es da Konflikte?“", gut: false, feedback: "Die Frage lenkt zurück in die Problemsuche, statt die genannten Ressourcen aufzugreifen." },
                  { text: "„Das ist schön. Aber das reicht ja offenbar nicht.“", gut: false, feedback: "Die Abwertung der Ressourcen entmutigt und widerspricht der lösungsorientierten Haltung." }
                ]
              },
              {
                klient: "„Bei 4 … da würde ich vielleicht einmal in der Woche pünktlich Feierabend machen, statt immer noch Dokumentation nachzuholen.“",
                antworten: [
                  { text: "„Das ist zu wenig, Sie sollten jeden Tag pünktlich gehen.“", gut: false, feedback: "Die beratende Person übergeht das von Herrn P. selbst gewählte, erreichbare Ziel und setzt einen eigenen, unrealistischen Maßstab." },
                  { text: "„Warum schaffen Sie das denn bisher nicht?“", gut: false, feedback: "Die Warum-Frage führt zurück in die Problemanalyse und kann Rechtfertigungsdruck erzeugen." },
                  { text: "„Gab es in letzter Zeit schon einmal einen Tag, an dem Ihnen das gelungen ist? Was war da anders?“", gut: true, feedback: "Die Ausnahmefrage sucht nach bereits erlebten Teilen des gewünschten Zustands – und damit nach Hinweisen, wie der Schritt gelingen kann." }
                ]
              },
              {
                klient: "„Einmal, ja. Da hatte Anna mir angeboten, das Elterngespräch zu übernehmen, und ich habe morgens die Dokumentation in der Ruhezeit erledigt.“",
                antworten: [
                  { text: "„Interessant. Da haben Sie Unterstützung angenommen und die Ruhezeit genutzt. Wie könnten Sie davon in der nächsten Woche ein kleines Stück wiederholen?“", gut: true, feedback: "Die Ausnahme wird präzise gewürdigt; die eigenen Beiträge werden benannt, und es folgt eine Einladung, das Funktionierende zu wiederholen – „mehr davon“." },
                  { text: "„Das war bestimmt nur Zufall.“", gut: false, feedback: "Die Ausnahme wird entwertet, obwohl sie wichtige Hinweise auf mögliche Lösungen enthält." },
                  { text: "„Sie dürfen sich aber nicht immer auf Anna verlassen.“", gut: false, feedback: "Die Bewertung lenkt auf ein mögliches Problem, statt die Ressource Unterstützung und das eigene Handeln zu würdigen." }
                ]
              }
            ]
          },
          {
            typ: "truefalse",
            aussage: "Bei der Skalierungsfrage ist es in der Regel hilfreicher, nach Merkmalen des nächsthöheren Werts zu fragen als danach, was zum Erreichen der 10 nötig wäre.",
            richtig: true,
            erklaerung: "Kleine Schritte sind leichter vorstellbar, konkreter und eher umsetzbar. Die Frage nach der 10 lädt dazu ein, die große Distanz zum Ziel zu betonen, und kann entmutigen. Viele Menschen wären zudem schon mit einem Wert unter 10 zufrieden."
          },
          {
            typ: "merke",
            text: "Nicht die Zahl auf der Skala ist entscheidend, sondern die Frage, was sie schon trägt – und was der nächste kleine Schritt wäre."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Lösungsorientierte Fragen",
            karten: [
              { vorne: "Wunderfrage", hinten: "Entwurf einer konkreten, beobachtbaren erwünschten Zukunft: „Woran würden Sie morgen früh merken, dass das Wunder geschehen ist?“" },
              { vorne: "Skalierungsfrage", hinten: "0–10-Skala; Fragen nach dem schon Erreichten („Warum 3 und nicht 0?“) und dem nächsten kleinen Schritt („Woran merken Sie 4?“)." },
              { vorne: "Ausnahmefrage", hinten: "Suche nach Zeiten, in denen das Problem schwächer war, und nach dem, was die Person dazu beigetragen hat." },
              { vorne: "Bewältigungsfrage", hinten: "Würdigt das Durchhalten in schweren Lagen: „Wie schaffen Sie es trotz allem …?“" },
              { vorne: "Indirektes Kompliment", hinten: "Anerkennung in Frageform („Wie haben Sie das geschafft?“), die die Person ihre Stärken selbst benennen lässt." }
            ]
          }
        ]
      },

      /* ---------- B4-3 ---------- */
      {
        id: "B4-3",
        titel: "Zirkuläres Fragen und Reframing",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Systemisches Denken in der Beratung",
            text: "Lösungsorientierte Beratung ist eng mit dem **systemischen Denken** verwandt. Systemische Ansätze betrachten Menschen nicht isoliert, sondern als Teil von **Beziehungssystemen** – Familie, Team, Schulklasse, Organisation. Verhalten wird als Element wechselseitiger Interaktionen verstanden, nicht als bloße Eigenschaft einer Person.\n\nEinige Grundgedanken:\n\n- **Zirkularität statt Linearität:** Statt „A verursacht B“ wird angenommen, dass sich Verhaltensweisen wechselseitig bedingen. Ein Beispiel: Je mehr die Mutter kontrolliert, desto mehr zieht sich der Sohn zurück – und je mehr er sich zurückzieht, desto mehr kontrolliert sie. Wer „angefangen hat“, ist oft nicht zu klären und für die Lösung unerheblich.\n- **Symptome haben Funktionen:** Ein Problemverhalten kann im System eine – oft unbeabsichtigte – Funktion erfüllen, etwa Eltern im Streit über die Sorge um ein Kind zu verbinden.\n- **Wirklichkeit wird konstruiert:** Jede Person hat ihre eigene Sicht auf das Geschehen. Beratende suchen nicht die „wahre“ Version, sondern neue, hilfreichere Sichtweisen.\n- **Neutralität und Allparteilichkeit:** Die beratende Person ergreift nicht Partei für einzelne Mitglieder eines Systems, sondern bemüht sich, allen gerecht zu werden.\n\nAus diesem Denken sind Fragetechniken entstanden, die Beziehungsmuster sichtbar machen und neue Perspektiven eröffnen. Die bekannteste ist das **zirkuläre Fragen**. In Deutschland ist die **Systemische Therapie** seit 2020 als Psychotherapieverfahren für Erwachsene in der gesetzlichen Krankenversicherung zugelassen; systemische Methoden sind aber auch in Beratung und Sozialarbeit weit verbreitet."
          },
          {
            typ: "truefalse",
            aussage: "Systemisches Denken geht davon aus, dass sich in Beziehungskonflikten in der Regel eindeutig klären lässt, wer den Konflikt verursacht hat.",
            richtig: false,
            erklaerung: "Systemisches Denken betont Zirkularität: Verhaltensweisen bedingen sich wechselseitig. Die Frage nach dem „Anfang“ führt oft in Schuldzuweisungen und ist für die Lösung meist nicht entscheidend."
          },
          {
            typ: "text",
            titel: "Zirkuläres Fragen",
            text: "Das **zirkuläre Fragen** wurde von der **Mailänder Gruppe** um Mara Selvini Palazzoli, Luigi Boscolo, Gianfranco Cecchin und Giuliana Prata in der Familientherapie entwickelt. In ihrem einflussreichen Aufsatz von 1980 beschrieben sie **Hypothetisieren, Zirkularität und Neutralität** als Leitlinien für das Gespräch.\n\nBeim zirkulären Fragen wird eine Person gebeten, **aus der Perspektive einer anderen** über Beziehungen, Gedanken oder Gefühle zu sprechen. Typische Formen:\n\n- **Fragen nach der Sicht anderer:** „Was glauben Sie, wie Ihr Mann die Situation sieht?“\n- **Triadische Fragen:** Eine Person wird über die Beziehung zweier anderer befragt: „Wenn Ihre Tochter und Ihr Mann streiten – wie reagiert Ihr Sohn darauf?“\n- **Unterschiedsfragen:** „Wer in der Familie macht sich die meisten Sorgen, wer die wenigsten?“ – „Was ist seit der Geburt Ihres zweiten Kindes anders?“\n- **Hypothetische Fragen:** „Angenommen, Ihre Mutter würde nicht mehr anrufen – was würde sich zwischen Ihnen und Ihrem Partner verändern?“\n- **Fragen nach Auswirkungen:** „Wenn Ihr Kollege so reagiert – was tun Sie dann? Und was macht er daraufhin?“\n\nZirkuläre Fragen haben eine **doppelte Funktion**: Sie liefern der beratenden Person Informationen über Beziehungsmuster – und sie regen bei den Beteiligten neue Sichtweisen an. Wer sich vorstellt, wie die Situation für den anderen aussieht, erweitert die eigene Perspektive.\n\nAuch in der **Einzelberatung** sind zirkuläre Fragen gut einsetzbar: Abwesende Personen werden gleichsam „in den Raum geholt“ („Was würde Ihre beste Freundin sagen, wenn sie Sie jetzt hören könnte?“)."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die zirkulären Fragen ihrer Form zu.",
            paare: [
              ["„Was meinen Sie, wie Ihre Vorgesetzte Ihre Arbeit einschätzt?“", "Frage nach der Sicht anderer"],
              ["„Wenn Ihr Vater und Ihr Bruder streiten – was macht dann Ihre Mutter?“", "Triadische Frage"],
              ["„Wer im Team leidet am meisten unter der Situation, wer am wenigsten?“", "Unterschiedsfrage"],
              ["„Angenommen, Sie würden die Elternzeit nehmen – wie würde sich die Beziehung zu Ihrer Schwiegermutter verändern?“", "Hypothetische Frage"]
            ],
            erklaerung: "Alle Formen laden dazu ein, über die eigene Perspektive hinauszudenken. Triadische Fragen beleuchten Beziehungen zwischen Dritten, Unterschiedsfragen machen Abstufungen sichtbar, hypothetische Fragen öffnen Möglichkeitsräume."
          },
          {
            typ: "text",
            titel: "Reframing: einen neuen Rahmen geben",
            text: "**Reframing** (Umdeutung) bedeutet, einem Verhalten, einer Situation oder einem Erleben einen **neuen Bedeutungsrahmen** zu geben. Paul Watzlawick, John Weakland und Richard Fisch beschrieben das Vorgehen 1974 in ihrem Buch „Lösungen“ (*Change*) als eine Form der Veränderung, bei der nicht die Fakten, sondern ihre **Bedeutung** verändert wird.\n\nIn der Praxisliteratur werden häufig zwei Formen unterschieden:\n\n- **Bedeutungsreframing:** Das Verhalten bleibt gleich, aber seine Bedeutung wird anders gesehen. „Meine Tochter widerspricht ständig“ – „Ihre Tochter lernt gerade, eine eigene Meinung zu vertreten.“\n- **Kontextreframing:** Es wird gefragt, in welchem Zusammenhang ein vermeintlich problematisches Verhalten nützlich wäre. „Ich bin so pingelig“ – „Wo im Leben ist Ihre Genauigkeit ein Vorteil?“\n\nReframing wirkt, weil Bewertungen Gefühle und Handlungen prägen (vgl. Appraisal-Theorien, Modul B1). Wird ein „sturer“ Teenager als „durchsetzungsstark“ gesehen, verändern sich oft auch der Umgang und die Beziehung.\n\nWichtige **Gelingensbedingungen**:\n\n- Das Reframing muss für die Person **plausibel** und an ihre Sichtweise anschlussfähig sein.\n- Es darf **Leid nicht beschönigen** oder schädliches Verhalten rechtfertigen. Gewalt oder Selbstschädigung werden nicht „positiv umgedeutet“.\n- Es sollte als **Angebot** formuliert werden: „Könnte man es auch so sehen …?“\n- Es setzt eine **tragfähige Beziehung** voraus; vorschnell eingesetzt, wirkt es wie ein Wegreden des Problems.\n\nEine verwandte Technik ist die **positive Konnotation**, wie sie die Mailänder Gruppe nutzte: Sie würdigt die gute Absicht hinter einem Verhalten aller Beteiligten."
          },
          {
            typ: "mc",
            frage: "Eine Mutter klagt: „Mein Sohn ist so ein Sturkopf, er gibt nie nach.“ Welche Antwort ist ein gelungenes Bedeutungsreframing?",
            optionen: [
              "„Sturheit muss man Kindern konsequent abgewöhnen.“",
              "„Er hat offenbar eine Störung des Sozialverhaltens.“",
              "„Könnte es sein, dass Ihr Sohn sehr beharrlich ist, wenn ihm etwas wichtig ist – eine Fähigkeit, die ihm später auch nützen kann?“",
              "„Das bilden Sie sich bestimmt nur ein.“"
            ],
            richtig: 2,
            erklaerung: "Die dritte Antwort bietet eine neue Bedeutung (Beharrlichkeit) als Angebot an und verbindet sie mit einer Perspektive. Die anderen Antworten bleiben im Problemrahmen, pathologisieren unzulässig oder entwerten das Erleben der Mutter."
          },
          {
            typ: "kategorien",
            frage: "Handelt es sich um Bedeutungsreframing oder Kontextreframing?",
            kategorien: ["Bedeutungsreframing", "Kontextreframing"],
            elemente: [
              { text: "„Ihr Partner ruft ständig an – vielleicht zeigt er so, wie wichtig Sie ihm sind.“", kat: 0 },
              { text: "„In welcher Situation wäre Ihr Misstrauen ein guter Schutz?“", kat: 1 },
              { text: "„Ihr Grübeln könnte auch ein Zeichen dafür sein, dass Sie Entscheidungen sehr ernst nehmen.“", kat: 0 },
              { text: "„Wo wäre Ihre Ungeduld genau die richtige Eigenschaft?“", kat: 1 },
              { text: "„Dass Ihr Team so heftig diskutiert, zeigt, wie viel den Kolleginnen an der Sache liegt.“", kat: 0 },
              { text: "„In welchem Beruf wäre Ihre Detailversessenheit gefragt?“", kat: 1 }
            ],
            erklaerung: "Das Bedeutungsreframing gibt demselben Verhalten eine neue Bedeutung. Das Kontextreframing sucht nach Situationen, in denen das Verhalten nützlich wäre. Beide Formen erweitern Sichtweisen, ohne das Erleben der Person abzuwerten."
          },
          {
            typ: "text",
            titel: "Zirkuläre Fragen und Reframing in der Praxis",
            text: "Wie lassen sich diese Methoden im Berufsalltag von Fachkräften einsetzen? Einige Anwendungsbeispiele:\n\n- **In der Pflege:** Ein Angehöriger beschwert sich ständig über das Personal. Eine zirkuläre Frage („Was meinen Sie, wie Ihre Mutter es erlebt, wenn Sie sich für sie einsetzen?“) und ein Reframing („Ihr Einsatz zeigt, wie sehr Ihnen ihr Wohl am Herzen liegt“) können die Situation entschärfen und den Weg zur Zusammenarbeit öffnen.\n- **In der Schule:** Eine Lehrkraft fragt eine Schülerin: „Wer in deiner Klasse würde als Erstes merken, dass es dir besser geht?“ – und hilft so, soziale Ressourcen sichtbar zu machen.\n- **In der Personalarbeit:** Bei Konflikten im Team helfen Unterschiedsfragen („Wer ist am meisten, wer am wenigsten zufrieden mit der neuen Schichtplanung?“), Positionen zu differenzieren, statt das Team in zwei Lager zu teilen.\n- **In der Erziehungsberatung:** Ein „Problemkind“ wird als „Seismograf“ der Familie umgedeutet, der Spannungen besonders früh anzeigt – eine Umdeutung, die Schuld verringern und den Blick auf das ganze System lenken kann.\n\n**Grenzen** sind zu beachten: Bei Gewalt in Beziehungen ist **Allparteilichkeit nicht angebracht**, wenn sie Schutz und Verantwortung verwischt. Bei Hinweisen auf Kindeswohlgefährdung oder akute Gefährdung haben Schutzmaßnahmen Vorrang vor systemischen Interventionen. Und Reframing ist kein Ersatz für die Anerkennung realen Leids: Erst muss sich eine Person verstanden fühlen, dann kann eine neue Sicht hilfreich sein."
          },
          {
            typ: "dialog",
            titel: "Konflikt im Team",
            einleitung: "Konstruierte Situation: Frau N., 44 Jahre, leitet ein Team in einer Wohneinrichtung der Behindertenhilfe. Sie bittet um Beratung, weil eine langjährige Mitarbeiterin, Frau K., jede Neuerung blockiert.",
            runden: [
              {
                klient: "„Frau K. ist einfach gegen alles. Egal was ich vorschlage, sie findet einen Grund, warum es nicht geht. Das ganze Team leidet darunter.“",
                antworten: [
                  { text: "„Was meinen Sie, wie Frau K. selbst die Veränderungen der letzten Zeit erlebt?“", gut: true, feedback: "Die zirkuläre Frage lädt Frau N. ein, die Perspektive der Mitarbeiterin einzunehmen. Das kann neue Sichtweisen eröffnen, ohne das Erleben von Frau N. zu übergehen." },
                  { text: "„Dann müssen Sie ihr eine Abmahnung geben.“", gut: false, feedback: "Ein vorschneller Rat überspringt die Klärung und verengt die Handlungsmöglichkeiten auf Sanktionen." },
                  { text: "„Das klingt nach einer schwierigen Persönlichkeit.“", gut: false, feedback: "Die Zuschreibung einer Eigenschaft verfestigt das Problem und widerspricht dem systemischen Blick auf Interaktionen." }
                ]
              },
              {
                klient: "„Hm. Vielleicht hat sie Angst, dass ihre Erfahrung nichts mehr zählt. Sie ist seit zwanzig Jahren dabei.“",
                antworten: [
                  { text: "„Angst ist doch keine Entschuldigung für ihr Verhalten.“", gut: false, feedback: "Die Bewertung schließt die gerade eröffnete Perspektive wieder und bringt das Gespräch zurück in den Konflikt." },
                  { text: "„Könnte man ihre Einwände dann auch als Ausdruck ihrer Sorge um eine gute Betreuung sehen – gestützt auf viel Erfahrung?“", gut: true, feedback: "Das Reframing wird als Angebot formuliert und knüpft an die Überlegung von Frau N. an. Aus „Blockade“ kann so „Sorgfalt aus Erfahrung“ werden." },
                  { text: "„Wie lange wollen Sie sich das noch gefallen lassen?“", gut: false, feedback: "Die Frage verschärft den Konflikt und lenkt von den neuen Einsichten ab." }
                ]
              },
              {
                klient: "„So habe ich das noch nicht gesehen. Sie kennt die Bewohner wirklich am besten.“",
                antworten: [
                  { text: "„Schön, dann ist das Problem ja gelöst.“", gut: false, feedback: "Eine neue Sicht ist ein Anfang, aber noch keine Lösung. Konkrete nächste Schritte fehlen." },
                  { text: "„Trotzdem sollten Sie klare Grenzen setzen.“", gut: false, feedback: "Der Hinweis kommt zur Unzeit und entwertet die gerade gewonnene Perspektive." },
                  { text: "„Angenommen, Sie würden Frau K. bei der nächsten Neuerung als Expertin für die Bewohner einbeziehen – was würde sich im Team verändern?“", gut: true, feedback: "Die hypothetische Frage überführt die neue Sichtweise in eine Handlungsmöglichkeit und lädt Frau N. ein, deren Auswirkungen auf das System durchzudenken." }
                ]
              }
            ]
          },
          {
            typ: "merke",
            text: "Zirkuläre Fragen holen andere Perspektiven in den Raum, Reframing eröffnet neue Bedeutungen. Beides wirkt nur, wenn sich die Person zuvor verstanden fühlt – und es ersetzt nie den Schutz bei Gefährdung."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Systemische Methoden",
            karten: [
              { vorne: "Zirkularität", hinten: "Verhaltensweisen in Beziehungen bedingen sich wechselseitig; die Frage nach dem „Anfang“ ist meist nicht lösungsrelevant." },
              { vorne: "Mailänder Leitlinien (1980)", hinten: "Hypothetisieren, Zirkularität, Neutralität – beschrieben von Selvini Palazzoli, Boscolo, Cecchin und Prata." },
              { vorne: "Triadische Frage", hinten: "Eine Person wird zur Beziehung zweier anderer befragt: „Wenn A und B streiten, was tut C?“" },
              { vorne: "Bedeutungsreframing", hinten: "Gleiches Verhalten, neue Bedeutung: „Widerspruch“ als „eigene Meinung vertreten“." },
              { vorne: "Kontextreframing", hinten: "Frage nach dem Zusammenhang, in dem ein Verhalten nützlich wäre." },
              { vorne: "Allparteilichkeit", hinten: "Bemühen, allen Mitgliedern eines Systems gerecht zu werden; endet dort, wo Schutz vor Gewalt Vorrang hat." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Welches Verhalten einer Person aus Ihrem Berufsalltag ärgert oder irritiert Sie regelmäßig? Versuchen Sie ein Bedeutungs- und ein Kontextreframing.",
            hinweis: "Was könnte die gute Absicht hinter dem Verhalten sein? In welchem Zusammenhang wäre es nützlich? Wie verändert die neue Sicht Ihre Gefühle und Handlungsmöglichkeiten?"
          }
        ]
      },

      /* ---------- B4-4 ---------- */
      {
        id: "B4-4",
        titel: "Ressourcenanalyse und Zielklärung",
        dauer: 35,
        schritte: [
          {
            typ: "text",
            titel: "Was sind Ressourcen?",
            text: "Unter **Ressourcen** versteht man alle Mittel, auf die ein Mensch zurückgreifen kann, um Anforderungen zu bewältigen, Ziele zu erreichen und sein Wohlbefinden zu erhalten. Ressourcenorientierung ist ein **Querschnittsprinzip** vieler Beratungs- und Therapieansätze, vom lösungsorientierten Ansatz über das Salutogenese-Modell bis zur Resilienzforschung.\n\nÜblicherweise unterscheidet man:\n\n- **Personale Ressourcen:** Fähigkeiten, Wissen, Erfahrungen, Charakterstärken, Gesundheit, Humor, Werte, Glaube, Selbstwirksamkeit\n- **Soziale Ressourcen:** Familie, Freundschaften, Kolleginnen und Kollegen, Nachbarschaft, Vereine, Gemeinden, professionelle Unterstützung\n- **Materielle Ressourcen:** Einkommen, Wohnung, Zeit, Mobilität, Zugang zu Bildung und Information\n- **Sozialräumliche oder institutionelle Ressourcen:** Beratungsstellen, Freizeitangebote, Selbsthilfegruppen, Rechtsansprüche auf Leistungen\n\nIn der Psychotherapieforschung hat Klaus Grawe die **Ressourcenaktivierung** als einen von mehreren allgemeinen Wirkfaktoren beschrieben: Veränderung gelingt besser, wenn die Stärken, Fähigkeiten und motivationalen Bereitschaften einer Person aktiv genutzt werden, statt sich allein auf Defizite zu konzentrieren.\n\nAaron Antonovsky entwickelte mit der **Salutogenese** einen Gegenentwurf zur rein krankheitsorientierten Sicht. Er fragte, was Menschen gesund hält, und beschrieb das **Kohärenzgefühl** mit den Komponenten **Verstehbarkeit**, **Handhabbarkeit** und **Bedeutsamkeit**.\n\nWichtig ist: Ob etwas eine Ressource ist, hängt vom **Kontext** und von der **Bewertung** der Person ab. Eine große Familie kann tragen – oder belasten."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Ressourcen den Kategorien zu.",
            kategorien: ["Personale Ressource", "Soziale Ressource", "Materielle/institutionelle Ressource"],
            elemente: [
              { text: "Humor, auch in schwierigen Situationen", kat: 0 },
              { text: "Erfahrung, schon einmal einen Umzug in eine fremde Stadt gemeistert zu haben", kat: 0 },
              { text: "Eine Nachbarin, die bei der Kinderbetreuung einspringt", kat: 1 },
              { text: "Regelmäßige Treffen in einer Selbsthilfegruppe", kat: 1 },
              { text: "Anspruch auf Pflegegeld und Entlastungsbetrag", kat: 2 },
              { text: "Ein Auto, mit dem Arzttermine erreichbar sind", kat: 2 },
              { text: "Tiefe Überzeugung, dass das eigene Engagement sinnvoll ist", kat: 0 }
            ],
            erklaerung: "Personale Ressourcen liegen in der Person selbst, soziale Ressourcen in ihren Beziehungen, materielle und institutionelle in äußeren Mitteln und Ansprüchen. Selbsthilfegruppen werden hier als soziale Ressource gefasst, weil die Unterstützung durch andere Betroffene im Vordergrund steht; sie lassen sich auch als institutionelles Angebot sehen."
          },
          {
            typ: "text",
            titel: "Methoden der Ressourcenanalyse",
            text: "Ressourcen sind Ratsuchenden oft **nicht bewusst** – besonders in Krisen, wenn der Blick auf das Problem verengt ist. Eine systematische **Ressourcenanalyse** hilft, sie sichtbar und nutzbar zu machen. Bewährte Methoden sind:\n\n- **Ressourceninterview:** gezielte Fragen nach Stärken und Erfahrungen, etwa: „Was können Sie gut?“ – „Worauf sind Sie stolz?“ – „Welche schwierige Situation haben Sie schon gemeistert, und wie?“ – „Was würde Ihre beste Freundin über Ihre Stärken sagen?“\n- **Netzwerkkarte (Ecomap):** Die Person zeichnet sich in die Mitte und trägt Menschen und Institutionen in Kreisen nach Nähe ein. Linien können unterstützende, belastende oder ambivalente Beziehungen markieren. So werden soziale Ressourcen – und Lücken – anschaulich.\n- **Lebenslinie / Ressourcenbiografie:** Entlang der Lebensgeschichte werden Höhen und Tiefen eingetragen und gefragt, was in schwierigen Phasen geholfen hat.\n- **Ressourcenbaum oder -landkarte:** kreative, visuelle Methoden, bei denen Wurzeln (Herkunft, Werte), Stamm (Fähigkeiten) und Krone (Ziele, Wünsche) gestaltet werden.\n- **Beobachtungsaufgaben:** Die Person achtet bis zum nächsten Termin darauf, was ihr guttut und was gut gelingt.\n\nEine Ressourcenanalyse ist **kein einmaliger Schritt**, sondern eine Haltung, die den gesamten Prozess begleitet. Entscheidend ist, die gefundenen Ressourcen **mit dem Anliegen zu verknüpfen**: „Wie könnte Ihnen Ihre Erfahrung aus dem Umzug bei der jetzigen Situation helfen?“\n\nBeratende sollten zudem darauf achten, **Ressourcen nicht zu verordnen**. Nicht jede „Stärke“, die von außen sichtbar ist, erlebt die Person selbst als solche."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Methoden ihrem Hauptzweck zu.",
            paare: [
              ["Netzwerkkarte (Ecomap)", "Soziale Beziehungen nach Nähe und Qualität sichtbar machen"],
              ["Lebenslinie", "Bewältigungserfahrungen aus früheren Lebensphasen erschließen"],
              ["Ressourceninterview", "Stärken und Fähigkeiten durch gezielte Fragen erkunden"],
              ["Beobachtungsaufgabe", "Im Alltag bewusst wahrnehmen, was gelingt und guttut"]
            ],
            erklaerung: "Die Methoden ergänzen sich: Die Netzwerkkarte bildet das soziale Umfeld ab, die Lebenslinie die Biografie, das Interview die aktuellen Stärken, und Beobachtungsaufgaben übertragen die Ressourcensuche in den Alltag."
          },
          {
            typ: "text",
            titel: "Ziele klären: Warum Zielformulierung so wichtig ist",
            text: "Ein klares Ziel gibt Beratung **Richtung**, macht Fortschritte **überprüfbar** und stärkt die **Motivation**. Unklare Ziele („Es soll mir besser gehen“) sind ein häufiger Grund, warum Beratungen versanden.\n\nDie Zielpsychologie unterscheidet zwischen dem **Abwägen** von Zielen und ihrer **Umsetzung**. Das **Rubikonmodell der Handlungsphasen** von Heinz Heckhausen und Peter Gollwitzer beschreibt vier Phasen: Abwägen, Planen, Handeln und Bewerten. Der Übergang vom Abwägen zum Planen gleicht dem „Überschreiten des Rubikon“: Mit der Entscheidung wird aus einem Wunsch eine Absicht. Beratung sollte erkennen, in welcher Phase eine Person sich befindet – wer noch abwägt, braucht Raum für Ambivalenz (vgl. MI), wer entschieden hat, braucht Unterstützung beim Planen.\n\nFür die Umsetzung hat Gollwitzer die **Durchführungsintentionen** (*implementation intentions*) untersucht: Pläne in der Form „**Wenn** Situation X eintritt, **dann** werde ich Y tun“. Studien zeigen, dass solche konkreten Wenn-dann-Pläne die Wahrscheinlichkeit der Umsetzung deutlich erhöhen können.\n\nZusätzlich wichtig ist die **Passung zwischen Ziel und Person**: Ziele, die mit den eigenen Werten und Bedürfnissen übereinstimmen, werden ausdauernder verfolgt und tragen mehr zum Wohlbefinden bei (vgl. Selbstbestimmungstheorie, Modul B1). Die Frage „Wofür ist Ihnen dieses Ziel wichtig?“ verbindet Zielklärung mit Sinn und Motivation."
          },
          {
            typ: "luecke",
            text: "Ein Plan der Form „{{Wenn ich nach Hause komme, dann ziehe ich sofort die Laufschuhe an|Ich sollte mehr Sport machen|Irgendwann fange ich wieder an zu laufen}}“ wird als Durchführungsintention bezeichnet. Im Rubikonmodell markiert der Übergang vom Abwägen zum {{Planen|Bewerten|Vergessen}} die Entscheidung für ein Ziel.",
            erklaerung: "Durchführungsintentionen verknüpfen eine konkrete Situation mit einer konkreten Handlung. Im Rubikonmodell folgt auf das Abwägen mit der Entscheidung das Planen; danach kommen Handeln und Bewerten."
          },
          {
            typ: "text",
            titel: "Gut formulierte Ziele: SMART und lösungsorientierte Kriterien",
            text: "Eine verbreitete Orientierung bietet die **SMART-Formel**, die aus dem Projektmanagement stammt und in verschiedenen Varianten verwendet wird. In der Beratung bewährt sich etwa folgende Lesart:\n\n- **S – spezifisch:** konkret und eindeutig beschrieben\n- **M – messbar:** woran erkennbar ist, dass das Ziel erreicht ist\n- **A – attraktiv bzw. akzeptiert:** für die Person selbst bedeutsam und gewollt\n- **R – realistisch:** mit den vorhandenen Ressourcen erreichbar\n- **T – terminiert:** mit einem Zeitrahmen versehen\n\nAus der lösungsorientierten Tradition kommen ergänzende Kriterien für **wohlgeformte Ziele**:\n\n- **positiv formuliert:** Anwesenheit von etwas Erwünschtem statt Abwesenheit des Unerwünschten („Ich gehe abends eine halbe Stunde spazieren“ statt „Ich will nicht mehr so viel grübeln“)\n- **im eigenen Einflussbereich:** „Ich spreche meinen Kollegen an“ statt „Mein Kollege soll netter sein“\n- **klein und konkret:** der Anfang von etwas, nicht das Ende\n- **in Verhalten beschreibbar:** Was würde eine Kamera aufzeichnen?\n- **in Kontexte eingebettet:** wo, wann, mit wem\n\nIn der Praxis wird ein **Leitziel** („Ich möchte wieder Freude an meiner Arbeit haben“) in **Teilziele** und **erste Schritte** übersetzt. Dabei hilft es, regelmäßig zu prüfen, ob die Ziele noch passen: Ziele dürfen im Prozess angepasst werden, wenn sich die Situation oder die Prioritäten der Person ändern.\n\nAuch gut formulierte Ziele bleiben **Ziele der ratsuchenden Person**. Beratende unterstützen bei der Formulierung, geben aber keine Ziele vor."
          },
          {
            typ: "mc",
            frage: "Welche Zielformulierung erfüllt die Kriterien eines gut formulierten Ziels am besten?",
            optionen: [
              "„Ich will nicht mehr so gestresst sein.“",
              "„Mein Chef soll mir weniger Aufgaben geben.“",
              "„Ab nächster Woche mache ich montags und donnerstags um 17 Uhr pünktlich Feierabend und gehe dann eine halbe Stunde spazieren.“",
              "„Ich möchte ein komplett neues Leben anfangen.“"
            ],
            richtig: 2,
            erklaerung: "Die dritte Formulierung ist positiv, konkret, messbar, terminiert und liegt im eigenen Einflussbereich. Die erste ist ein Vermeidungsziel, die zweite liegt beim Chef, die vierte ist zu groß und unkonkret."
          },
          {
            typ: "fall",
            titel: "Vom Wunsch zum ersten Schritt",
            fall: "Konstruierte Lehrvignette: Herr J., 28 Jahre, ist seit einem Jahr arbeitssuchend und lebt sehr zurückgezogen. In der Beratung im Jobcenter sagt er: „Ich will endlich mein Leben in den Griff kriegen.“ Auf Nachfrage erzählt er, dass er früher gern Fahrrad repariert hat und ein Freund ihm angeboten hat, in dessen Werkstatt vorbeizuschauen.",
            frage: "Welches Vorgehen entspricht am besten einer ressourcen- und zielorientierten Beratung?",
            optionen: [
              "Die Beraterin formuliert für ihn das Ziel „zehn Bewerbungen pro Woche“, weil das den Vorgaben entspricht.",
              "Die Beraterin würdigt das handwerkliche Geschick und das Angebot des Freundes und erarbeitet mit ihm einen kleinen, konkreten ersten Schritt, etwa: „Ich rufe bis Freitag meinen Freund an und vereinbare einen Besuch in der Werkstatt.“",
              "Die Beraterin analysiert zunächst ausführlich, warum er sich so zurückgezogen hat.",
              "Die Beraterin übernimmt seinen Satz „Mein Leben in den Griff kriegen“ als Ziel und vereinbart einen Folgetermin in drei Monaten."
            ],
            richtig: 1,
            erklaerung: "Die zweite Option verbindet personale (Geschick) und soziale Ressourcen (Freund) mit einem kleinen, konkreten, terminierten Schritt im eigenen Einflussbereich. Vorgegebene Ziele berücksichtigen nicht seine Motivation, eine ausführliche Ursachenanalyse ist nicht zwingend nötig, und das Leitziel allein ist zu unkonkret, um handlungsleitend zu sein. Bei anhaltendem Rückzug sollte zudem behutsam geprüft werden, ob eine depressive Entwicklung vorliegt, die fachlich abgeklärt werden sollte."
          },
          {
            typ: "multi",
            frage: "Welche Zielformulierungen erfüllen das Kriterium „im eigenen Einflussbereich“? (Mehrere Antworten möglich)",
            optionen: [
              "„Ich bitte meine Schwester am Sonntag, mich bei der Pflege unserer Mutter einmal im Monat zu vertreten.“",
              "„Meine Schwester soll endlich mehr Verantwortung übernehmen.“",
              "„Ich melde mich bis Ende des Monats bei einem Yogakurs an.“",
              "„Mein Sohn soll bessere Noten schreiben.“",
              "„Ich setze mich dreimal pro Woche 20 Minuten mit meinem Sohn an die Hausaufgaben.“"
            ],
            richtig: [0, 2, 4],
            erklaerung: "Ziele im eigenen Einflussbereich beschreiben eigenes Handeln. Das Verhalten anderer – Schwester, Sohn – kann man nicht direkt steuern; man kann aber eigene Schritte planen, die eine Veränderung wahrscheinlicher machen, etwa eine Bitte äußern oder Unterstützung anbieten."
          },
          {
            typ: "merke",
            text: "Ressourcen geben Kraft, Ziele geben Richtung. Gut formulierte Ziele sind positiv, konkret, im eigenen Einflussbereich – und vor allem: Ziele der ratsuchenden Person selbst."
          },
          {
            typ: "reflexion",
            frage: "Formulieren Sie für sich selbst ein berufliches Entwicklungsziel nach den Kriterien dieser Lektion.",
            hinweis: "Beginnen Sie mit einem Leitziel und übersetzen Sie es in ein positives, konkretes, terminiertes Teilziel im eigenen Einflussbereich. Welche Ressourcen helfen Ihnen dabei? Wie lautet ein passender Wenn-dann-Plan?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "mc",
        frage: "Welche Grundannahme ist charakteristisch für die lösungsorientierte Kurzberatung?",
        optionen: [
          "Lösungen setzen immer eine vollständige Analyse der Problemursachen voraus.",
          "Die beratende Person weiß am besten, was für die ratsuchende Person richtig ist.",
          "Probleme treten stets mit gleicher Intensität auf.",
          "Lösungen müssen nicht zwingend aus einer genauen Problemanalyse abgeleitet werden."
        ],
        richtig: 3,
        erklaerung: "Der Ansatz geht davon aus, dass Lösungen oft unabhängig von einer detaillierten Ursachenanalyse entwickelt werden können. Die ratsuchende Person gilt als Expertin für ihr Leben, und Probleme schwanken in ihrer Intensität – Ausnahmen sind der Ansatzpunkt."
      },
      {
        typ: "multi",
        frage: "Welche Fragen sind typische Ausnahmefragen? (Mehrere Antworten möglich)",
        optionen: [
          "„Wann war das Problem in letzter Zeit einmal weniger stark?“",
          "„Seit wann besteht das Problem?“",
          "„Was haben Sie an dem Tag, an dem es besser lief, anders gemacht?“",
          "„Wer ist schuld an der Situation?“",
          "„Gab es Momente, in denen Sie gut mit der Situation umgehen konnten?“"
        ],
        richtig: [0, 2, 4],
        erklaerung: "Ausnahmefragen suchen nach Zeiten, in denen das Problem schwächer war oder besser bewältigt wurde, und nach den eigenen Beiträgen dazu. Fragen nach Dauer und Schuld gehören zur Problemsprache."
      },
      {
        typ: "mc",
        frage: "Eine Klientin skaliert ihre Situation auf 2. Welche Anschlussfrage ist im lösungsorientierten Sinne am hilfreichsten?",
        optionen: [
          "„Was hat dazu beigetragen, dass Sie bei 2 sind und nicht bei 0?“",
          "„Warum sind Sie nicht weiter?“",
          "„Was müsste passieren, damit Sie morgen bei 10 sind?“",
          "„Ist 2 nicht ein Zeichen, dass Sie dringend eine Therapie brauchen?“"
        ],
        richtig: 0,
        erklaerung: "Die Frage nach dem Abstand zur 0 würdigt bereits Erreichtes und macht Ressourcen sichtbar. Warum-Fragen führen in die Problemanalyse, der Sprung auf 10 überfordert. Ein niedriger Wert sollte zwar aufmerksam machen und gegebenenfalls Anlass für eine behutsame Nachfrage nach Belastung und Gefährdung sein, ist aber für sich allein keine Indikation."
      },
      {
        typ: "truefalse",
        aussage: "Das zirkuläre Fragen wurde von der Mailänder Gruppe um Mara Selvini Palazzoli in der Familientherapie entwickelt.",
        richtig: true,
        erklaerung: "Die Mailänder Gruppe beschrieb 1980 Hypothetisieren, Zirkularität und Neutralität als Leitlinien. Das zirkuläre Fragen ist seither ein Kernelement systemischer Beratung und Therapie."
      },
      {
        typ: "mc",
        frage: "Was kennzeichnet ein Reframing?",
        optionen: [
          "Die Fakten einer Situation werden verändert.",
          "Einem Verhalten oder einer Situation wird ein neuer Bedeutungsrahmen gegeben.",
          "Ein Problem wird so lange analysiert, bis die Ursache feststeht.",
          "Die beratende Person übernimmt die Sichtweise der ratsuchenden Person ohne Ergänzung."
        ],
        richtig: 1,
        erklaerung: "Beim Reframing bleiben die Fakten gleich, verändert wird ihre Bedeutung. Das kann neue Gefühle und Handlungsmöglichkeiten eröffnen, sofern das Angebot für die Person plausibel ist."
      },
      {
        typ: "truefalse",
        aussage: "Reframing eignet sich auch dazu, Gewalt in einer Partnerschaft positiv umzudeuten, um die Beziehung zu stabilisieren.",
        richtig: false,
        erklaerung: "Reframing darf schädliches Verhalten nicht rechtfertigen oder Leid beschönigen. Bei Gewalt haben Schutz und Verantwortungsklärung Vorrang; eine positive Umdeutung wäre fachlich und ethisch unvertretbar."
      },
      {
        typ: "multi",
        frage: "Welche Merkmale kennzeichnen ein gut formuliertes Ziel im lösungsorientierten Sinne? (Mehrere Antworten möglich)",
        optionen: [
          "Positiv formuliert (Anwesenheit des Erwünschten)",
          "Auf das Verhalten anderer Personen gerichtet",
          "Klein und konkret",
          "Im eigenen Einflussbereich",
          "Möglichst umfassend und langfristig"
        ],
        richtig: [0, 2, 3],
        erklaerung: "Wohlgeformte Ziele sind positiv formuliert, klein, konkret und liegen im eigenen Einflussbereich. Ziele, die sich auf das Verhalten anderer richten oder sehr umfassend sind, eignen sich schlecht als handlungsleitende Schritte."
      },
      {
        typ: "mc",
        frage: "Welche Komponenten umfasst das Kohärenzgefühl nach Aaron Antonovsky?",
        optionen: [
          "Autonomie, Kompetenz und soziale Eingebundenheit",
          "Selektion, Optimierung und Kompensation",
          "Verstehbarkeit, Handhabbarkeit und Bedeutsamkeit",
          "Empathie, Wertschätzung und Kongruenz"
        ],
        richtig: 2,
        erklaerung: "Antonovsky beschrieb das Kohärenzgefühl als Kern der Salutogenese mit den Komponenten Verstehbarkeit, Handhabbarkeit und Bedeutsamkeit. Die anderen Triaden stammen aus der Selbstbestimmungstheorie, dem SOK-Modell und dem personzentrierten Ansatz."
      }
    ]
  }

]);
