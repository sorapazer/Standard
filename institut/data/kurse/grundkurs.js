/* Grundkurs: Einführung in die Logotherapie (Module G1–G3) */
window.KURS_MODULE = (window.KURS_MODULE || []).concat([
  {
    kurs: "grundkurs",
    id: "G1",
    titel: "Viktor Frankl und die Frage nach dem Sinn",
    beschreibung: "Das Modul führt in Leben und Werk Viktor E. Frankls ein – von den Wiener Anfängen über die Jahre in den nationalsozialistischen Lagern bis zur weltweiten Verbreitung der Logotherapie. Im Mittelpunkt stehen die tragenden Grundbegriffe: Wille zum Sinn, Freiheit, Verantwortung und das Menschenbild in drei Dimensionen.",
    lernziele: [
      "Sie können die wichtigsten Stationen in Viktor Frankls Leben sachlich und zeitlich korrekt einordnen.",
      "Sie können erklären, welche Rolle die Lagererfahrung für die Logotherapie spielte – und welche nicht.",
      "Sie können die drei Grundannahmen Freiheit des Willens, Wille zum Sinn und Sinn des Lebens erläutern.",
      "Sie können das Verhältnis von Freiheit und Verantwortung im Sinne Frankls beschreiben.",
      "Sie können die somatische, psychische und noetische Dimension unterscheiden und die Dimensionalontologie in Grundzügen darstellen."
    ],
    lektionen: [
      {
        id: "G1-1",
        titel: "Ein Wiener Arzt im 20. Jahrhundert: Frankls Weg bis 1942",
        dauer: 20,
        schritte: [
          {
            typ: "text",
            titel: "Herkunft und frühe Fragen",
            text: "Viktor Emil Frankl wurde am 26. März 1905 in Wien geboren und starb dort am 2. September 1997. Er wuchs in einer jüdischen Beamtenfamilie auf und erlebte als Kind die Not des Ersten Weltkriegs. Schon als Gymnasiast beschäftigte ihn die Frage, was einem Leben Sinn gibt – eine Frage, die ihn nach eigener Aussage nie wieder losließ.\n\nIn seiner Schulzeit interessierte er sich intensiv für Philosophie und Psychologie. Er stand im Briefwechsel mit **Sigmund Freud**, der einen Beitrag des jungen Frankl an die *Internationale Zeitschrift für Psychoanalyse* weiterleitete; er erschien 1924. Frankl war damals also noch ein Schüler der Psychoanalyse – zumindest gedanklich.\n\nWichtig für das Verständnis seines späteren Werks: Frankl war von Beginn an **Arzt und Naturwissenschaftler** und zugleich philosophisch interessiert. Diese doppelte Perspektive prägt die Logotherapie bis heute. Sie will die biologischen und psychischen Bedingungen des Menschen ernst nehmen, ohne den Menschen auf sie zu reduzieren."
          },
          {
            typ: "text",
            titel: "Von Freud über Adler zum eigenen Weg",
            text: "Bald wandte sich Frankl der **Individualpsychologie Alfred Adlers** zu. 1925 veröffentlichte er in Adlers Zeitschrift einen Aufsatz über Psychotherapie und Weltanschauung. Doch auch hier blieb er nicht: Frankl betonte zunehmend, dass Sinn- und Wertfragen nicht einfach auf Minderwertigkeitsgefühle oder Machtstreben zurückgeführt werden können. 1927 wurde er aus dem Verein für Individualpsychologie ausgeschlossen.\n\nNoch als Medizinstudent organisierte Frankl ab 1928 **Jugendberatungsstellen** in Wien und weiteren Städten, in denen junge Menschen in Krisen kostenlos Rat erhielten. Besonders bekannt wurde eine Aktion rund um die Zeugnisausgabe, die der Vorbeugung von Schülersuiziden diente.\n\nIn dieser Zeit begann Frankl, von **Logotherapie** zu sprechen. Das griechische *logos* verstand er dabei als *Sinn*. Die Grundidee: Neben dem Streben nach Lust und dem Streben nach Geltung gibt es im Menschen ein noch grundlegenderes Streben – das nach Sinn."
          },
          {
            typ: "mc",
            frage: "Warum trennte sich Frankl schließlich auch von der Individualpsychologie Alfred Adlers?",
            optionen: [
              "Weil er die Bedeutung der Kindheit für die Persönlichkeitsentwicklung grundsätzlich bestritt.",
              "Weil er Sinn- und Wertfragen als eigenständig ansah und sie nicht auf Machtstreben oder Minderwertigkeitsgefühle zurückführen wollte.",
              "Weil er sich wieder vollständig der Psychoanalyse Freuds anschloss.",
              "Weil er Psychotherapie für wirkungslos hielt und sich nur noch der Neurologie widmen wollte."
            ],
            richtig: 1,
            erklaerung: "Frankl bestand darauf, dass das Streben nach Sinn eine eigenständige menschliche Grundmotivation ist. Die Kindheit hat er nicht für bedeutungslos erklärt, zur Psychoanalyse kehrte er nicht zurück, und er blieb zeitlebens Psychotherapeut und Neurologe zugleich."
          },
          {
            typ: "text",
            titel: "Klinische Jahre und Bedrohung",
            text: "1930 wurde Frankl zum Doktor der Medizin promoviert und spezialisierte sich auf Neurologie und Psychiatrie. Von 1933 bis 1937 arbeitete er in der psychiatrischen Klinik **Am Steinhof** in Wien und leitete dort eine Station für suizidgefährdete Frauen. Diese Arbeit konfrontierte ihn täglich mit Verzweiflung und der Frage, was Menschen am Leben hält.\n\n1937 eröffnete er eine eigene Praxis. Nach dem sogenannten „Anschluss“ Österreichs 1938 durften jüdische Ärzte nur noch jüdische Patientinnen und Patienten behandeln. Ab 1940 leitete Frankl die neurologische Abteilung des **Rothschild-Spitals**, des damals einzigen Krankenhauses in Wien, in dem Jüdinnen und Juden noch behandelt wurden. Nach eigener Darstellung versuchte er dort, psychiatrische Patienten durch bewusst abgeschwächte Diagnosen vor den nationalsozialistischen Krankenmorden zu schützen.\n\n1941 hätte Frankl mit einem Visum in die USA ausreisen können. Er ließ es nach eigener Schilderung verfallen, um seine betagten Eltern nicht allein zurückzulassen. Im selben Jahr heiratete er Tilly Grosser, eine Krankenschwester des Spitals."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Stationen in Frankls Leben bis 1942 in die richtige zeitliche Reihenfolge.",
            elemente: [
              "Veröffentlichung eines Beitrags in Freuds Zeitschrift für Psychoanalyse",
              "Ausschluss aus dem Verein für Individualpsychologie",
              "Promotion zum Doktor der Medizin",
              "Tätigkeit an der Klinik Am Steinhof",
              "Leitung der neurologischen Abteilung am Rothschild-Spital"
            ],
            erklaerung: "1924 erschien der Beitrag in der psychoanalytischen Zeitschrift, 1927 folgte der Ausschluss bei Adler, 1930 die Promotion, 1933–1937 die Arbeit Am Steinhof und ab 1940 die Leitung am Rothschild-Spital."
          },
          {
            typ: "merke",
            text: "Die Logotherapie ist nicht erst im Konzentrationslager entstanden. Ihre Grundideen hatte Frankl bereits in den späten 1920er- und den 1930er-Jahren entwickelt – in der Jugendberatung und in der klinischen Arbeit mit suizidgefährdeten Menschen."
          },
          {
            typ: "truefalse",
            aussage: "Frankl verstand das griechische Wort „logos“ in der Bezeichnung Logotherapie vor allem im Sinne von „Logik“ oder „rationales Denken“.",
            richtig: false,
            erklaerung: "Frankl übersetzte „logos“ ausdrücklich mit „Sinn“. Logotherapie bedeutet also sinnzentrierte Therapie – nicht eine Therapie durch logisches Argumentieren."
          },
          {
            typ: "text",
            titel: "Die „Dritte Wiener Richtung“",
            text: "In der Psychotherapiegeschichte wird die Logotherapie oft als **Dritte Wiener Richtung der Psychotherapie** bezeichnet – nach der Psychoanalyse Sigmund Freuds und der Individualpsychologie Alfred Adlers. Vereinfacht lässt sich das an den angenommenen Grundmotiven verdeutlichen:\n\n- Bei Freud steht in Frankls zugespitzter Lesart das **Lustprinzip** im Zentrum, oft als „Wille zur Lust“ bezeichnet.\n- Bei Adler steht das Streben nach Überwindung von Minderwertigkeit und nach Geltung im Zentrum, von Frankl als „Wille zur Macht“ bezeichnet.\n- Frankl selbst stellt den **Willen zum Sinn** in den Mittelpunkt.\n\nDiese Gegenüberstellung ist eine Vereinfachung, die Frankl selbst zur Profilierung nutzte. Weder Freud noch Adler hätten ihre Theorien so knapp zusammengefasst. Für den Einstieg hilft sie dennoch, den Kern zu erkennen: Die Logotherapie fragt nicht nur, *woher* ein Mensch kommt und was ihn antreibt, sondern auch, *wofür* er lebt.\n\nFrankl sah seinen Ansatz nicht als Ersatz, sondern als **Ergänzung** der bestehenden Psychotherapie."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie den Begründern der drei Wiener Richtungen das jeweils zentrale Motiv zu – so, wie Frankl es zugespitzt formuliert hat.",
            paare: [
              ["Sigmund Freud", "Wille zur Lust"],
              ["Alfred Adler", "Wille zur Macht"],
              ["Viktor E. Frankl", "Wille zum Sinn"]
            ],
            erklaerung: "Diese Zuordnung stammt aus Frankls eigener, bewusst zugespitzter Darstellung. Sie dient der Orientierung, ersetzt aber keine differenzierte Auseinandersetzung mit Psychoanalyse und Individualpsychologie."
          },
          {
            typ: "luecke",
            text: "Ab 1928 organisierte Frankl in Wien {{Jugendberatungsstellen|Arbeitslosenküchen|Musikschulen}}. Später leitete er Am Steinhof eine Station für {{suizidgefährdete Frauen|Kinder mit Epilepsie|Kriegsheimkehrer}}.",
            erklaerung: "Beide Tätigkeiten brachten Frankl in direkten Kontakt mit Menschen in existenziellen Krisen – ein wichtiger Erfahrungshintergrund für die Logotherapie."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Frankls frühe Jahre",
            karten: [
              { vorne: "Geburts- und Sterbedaten", hinten: "26. März 1905 in Wien – 2. September 1997 in Wien." },
              { vorne: "Logotherapie – Wortbedeutung", hinten: "Von griechisch „logos“, von Frankl als „Sinn“ verstanden: sinnzentrierte Therapie." },
              { vorne: "Dritte Wiener Richtung", hinten: "Bezeichnung für die Logotherapie nach Psychoanalyse (Freud) und Individualpsychologie (Adler)." },
              { vorne: "Rothschild-Spital", hinten: "Ab 1940 leitete Frankl dort die neurologische Abteilung – das letzte Wiener Krankenhaus, das Jüdinnen und Juden noch behandelte." },
              { vorne: "Verfallenes Visum 1941", hinten: "Frankl blieb nach eigener Schilderung in Wien, um seine Eltern nicht zurückzulassen." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Frankl beschäftigte schon als Jugendlicher die Frage, was einem Leben Sinn gibt. Wann ist Ihnen diese Frage zum ersten Mal bewusst begegnet – und in welcher Situation?",
            hinweis: "Leitfragen: War es ein Verlust, eine Entscheidung, ein Gespräch oder ein Moment der Leere? Welche Antwort hätten Sie damals gegeben, welche heute?"
          }
        ]
      },
      {
        id: "G1-2",
        titel: "Die Jahre in den Lagern – und was daraus wurde",
        dauer: 22,
        schritte: [
          {
            typ: "text",
            titel: "Deportation nach Theresienstadt",
            text: "Im September 1942 wurde Viktor Frankl zusammen mit seiner Frau Tilly und seinen Eltern in das Ghetto **Theresienstadt** deportiert. Frankl arbeitete dort unter anderem als Arzt und beteiligte sich an der Betreuung von Neuankömmlingen, insbesondere an der Suizidprävention. Sein Vater starb 1943 in Theresienstadt an den Folgen der Lebensbedingungen.\n\nDiese Lektion beschreibt Frankls Erfahrungen sachlich. Sie sollen weder dramatisiert noch zu einer Erfolgsgeschichte geglättet werden. Die Schoah war ein Verbrechen, das Millionen Menschen das Leben kostete. Wer überlebte, verdankte dies in erster Linie Umständen, auf die er keinen Einfluss hatte. Frankl selbst hat betont, dass gerade die Besten oft nicht zurückgekehrt sind.\n\nGleichzeitig ist Frankls Bericht ein wichtiges Zeitzeugnis, weil er als Psychiater versuchte, das Erleben der Gefangenen genau zu beobachten und zu beschreiben."
          },
          {
            typ: "text",
            titel: "Auschwitz, Kaufering, Türkheim",
            text: "Im Oktober 1944 wurden Frankl und seine Frau nach **Auschwitz** deportiert. Dort wurden sie getrennt. Frankl blieb nur wenige Tage in Auschwitz und wurde dann in **Kaufering**, ein Außenlager des KZ Dachau, verlegt, wo die Häftlinge unter extremen Bedingungen Zwangsarbeit leisten mussten. Später kam er in das Lager **Türkheim**, wo er an Fleckfieber erkrankte. Ende April 1945 wurde er von US-amerikanischen Truppen befreit.\n\nErst nach der Rückkehr nach Wien erfuhr Frankl das ganze Ausmaß seiner Verluste: Seine Mutter war in Auschwitz ermordet worden, sein Bruder Walter ebenfalls ums Leben gekommen, seine Frau Tilly im Lager **Bergen-Belsen** gestorben. Nur seine Schwester Stella, die rechtzeitig nach Australien emigriert war, überlebte.\n\nFrankl hatte das Manuskript seines ersten Buches, der späteren *Ärztlichen Seelsorge*, in seinen Mantel eingenäht. Es ging in Auschwitz verloren. Während seiner Krankheit in Türkheim begann er nach eigener Schilderung, zentrale Gedanken auf Papierfetzen wieder aufzuschreiben."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Stationen von Frankls Haft in die richtige Reihenfolge.",
            elemente: [
              "Theresienstadt",
              "Auschwitz",
              "Kaufering (Außenlager von Dachau)",
              "Türkheim",
              "Befreiung durch US-Truppen"
            ],
            erklaerung: "1942 Theresienstadt, Oktober 1944 Auschwitz für wenige Tage, danach Kaufering, später Türkheim und Ende April 1945 die Befreiung."
          },
          {
            typ: "text",
            titel: "Was Frankl beobachtete",
            text: "In seinem Bericht *Ein Psycholog erlebt das Konzentrationslager* (1946, später unter dem Titel *… trotzdem Ja zum Leben sagen*) beschreibt Frankl drei Phasen der seelischen Reaktion:\n\n- **Aufnahme:** Schock, Fassungslosigkeit und oft die irreale Hoffnung, es werde schon nicht so schlimm kommen.\n- **Eigentliches Lagerleben:** zunehmende Apathie und emotionale Abstumpfung als Schutzreaktion; das Denken kreist um das unmittelbare Überleben.\n- **Nach der Befreiung:** Gefühle der Unwirklichkeit, mitunter Verbitterung und tiefe Enttäuschung, wenn niemand mehr wartete.\n\nZugleich beobachtete Frankl, dass Menschen selbst unter diesen Bedingungen nicht vollständig festgelegt waren. Manche teilten ihr letztes Stück Brot, manche fanden Halt in der Erinnerung an geliebte Menschen, in einer Aufgabe oder im Glauben. Frankl folgerte daraus, dass dem Menschen eine letzte Freiheit bleibt: die Freiheit, **zu den Umständen Stellung zu nehmen**.\n\nDiese Folgerung ist eine Deutung, keine empirische Studie. Sie bedeutet nicht, dass Überleben eine Frage der richtigen Einstellung gewesen wäre."
          },
          {
            typ: "mc",
            frage: "Welche Aussage gibt Frankls Schlussfolgerung aus seiner Lagererfahrung am treffendsten wieder?",
            optionen: [
              "Wer eine positive Einstellung hatte, überlebte das Lager in aller Regel.",
              "Leiden ist notwendig, damit Menschen Sinn finden können.",
              "Selbst unter extremen äußeren Zwängen bleibt dem Menschen die Freiheit, eine innere Haltung zu den Umständen einzunehmen.",
              "Psychische Reaktionen unter Extrembedingungen sind vollständig durch die Umstände bestimmt."
            ],
            richtig: 2,
            erklaerung: "Frankl spricht von einer letzten inneren Freiheit der Stellungnahme. Er behauptet nicht, dass die Einstellung über das Überleben entschied – das hing vor allem von Zufall und Willkür ab. Leid hielt er nicht für notwendig, und die vollständige Determination bestritt er gerade."
          },
          {
            typ: "merke",
            text: "Frankl griff gern einen Gedanken Friedrich Nietzsches auf: Wer ein Warum zum Leben hat, erträgt fast jedes Wie.",
            quelle: "Sinngemäß nach Nietzsche, zitiert in Frankl, … trotzdem Ja zum Leben sagen"
          },
          {
            typ: "text",
            titel: "Was die Lagererfahrung bedeutet – und was nicht",
            text: "Es wäre ein Missverständnis, die Logotherapie als Produkt des Konzentrationslagers zu sehen. Frankl selbst hat betont, dass er seine Konzeption bereits vorher entwickelt hatte. Das Lager war für ihn eher eine **Bewährungsprobe**: Ließen sich seine Annahmen über Sinn und Freiheit unter extremsten Bedingungen bestätigen?\n\nEbenso wichtig ist, was Frankl **nicht** behauptet hat:\n\n- Er hat Leiden nicht verklärt. Vermeidbares Leid zu beseitigen, ist nach seiner Auffassung immer vorrangig.\n- Er hat nicht gesagt, dass Sinnorientierung das Überleben garantiert.\n- Er hat die Täter nicht entschuldigt, aber sich gegen den Gedanken einer Kollektivschuld ausgesprochen – eine Position, die damals und später auch Widerspruch fand.\n\nIn der historischen Forschung wird zudem diskutiert, wie Frankl seine Biografie in späteren Darstellungen gestaltete; einzelne Details seiner Schilderungen wurden kritisch geprüft. Für die Logotherapie bedeutet das: Ihre Gültigkeit hängt nicht an der Biografie ihres Begründers, sondern an der Überzeugungskraft ihrer Begriffe und an empirischer Prüfung."
          },
          {
            typ: "truefalse",
            aussage: "Frankl entwickelte die Grundideen der Logotherapie erst nach seiner Befreiung als Antwort auf die Lagererfahrung.",
            richtig: false,
            erklaerung: "Die Grundideen stammen aus den späten 1920er- und den 1930er-Jahren. Das Manuskript der Ärztlichen Seelsorge existierte bereits vor der Deportation. Die Lagererfahrung verstand Frankl als Bewährungsprobe seiner Konzeption."
          },
          {
            typ: "multi",
            frage: "Welche Aussagen sind im Sinne Frankls zutreffend? Wählen Sie alle richtigen aus.",
            optionen: [
              "Vermeidbares Leid soll beseitigt werden; nur unvermeidbares Leid stellt die Frage nach der Haltung.",
              "Die innere Haltung eines Häftlings war der entscheidende Faktor für sein Überleben.",
              "Auch unter extremen Bedingungen zeigten Menschen unterschiedliche Haltungen, etwa Mitmenschlichkeit oder Rücksichtslosigkeit.",
              "Frankl verstand seinen Bericht als psychologische Beobachtung, nicht als kontrollierte Studie.",
              "Frankl hielt Leid für eine notwendige Voraussetzung jeder Sinnfindung."
            ],
            richtig: [0, 2, 3],
            erklaerung: "Richtig sind die Vorrangstellung der Leidbeseitigung, die Beobachtung unterschiedlicher Haltungen und der Charakter des Berichts als Beobachtung. Überleben hing vor allem von Umständen ab, nicht von der Haltung. Leid ist nach Frankl keine notwendige Bedingung für Sinn."
          },
          {
            typ: "text",
            titel: "Nach 1945: Werk und Wirkung",
            text: "Nach seiner Rückkehr nach Wien leitete Frankl ab 1946 für 25 Jahre die **Wiener Neurologische Poliklinik**. 1946 erschienen sowohl die *Ärztliche Seelsorge*, sein theoretisches Hauptwerk, als auch der Bericht über die Lagerzeit. 1947 heiratete er Eleonore Schwindt; im selben Jahr wurde die gemeinsame Tochter Gabriele geboren.\n\nFrankl habilitierte sich für Neurologie und Psychiatrie an der Universität Wien und lehrte dort als Professor. Gastprofessuren führten ihn unter anderem in die USA. Die englische Ausgabe seines Lagerberichts, *Man’s Search for Meaning*, wurde zu einem der meistgelesenen Bücher über Psychologie und Lebenssinn.\n\nFrankl schrieb zahlreiche Bücher und erhielt viele Ehrendoktorate. Weltweit entstanden Institute und Gesellschaften für Logotherapie. Seit 1992 besteht in Wien das **Viktor Frankl Institut**. Frankls Werk wirkt bis heute in Psychotherapie, Beratung, Seelsorge, Pädagogik und Palliativversorgung."
          },
          {
            typ: "luecke",
            text: "Frankls theoretisches Hauptwerk heißt {{Ärztliche Seelsorge|Die Traumdeutung|Menschenkenntnis}}. Sein Bericht über die Lagerzeit ist auf Englisch als {{Man’s Search for Meaning|The Courage to Be|On Becoming a Person}} bekannt.",
            erklaerung: "Die Traumdeutung stammt von Freud, Menschenkenntnis von Adler, The Courage to Be von Paul Tillich und On Becoming a Person von Carl Rogers."
          },
          {
            typ: "reflexion",
            frage: "Frankl spricht von der Freiheit, zu Umständen Stellung zu nehmen, die man nicht ändern kann. Denken Sie an eine Situation in Ihrem Leben, die Sie nicht ändern konnten. Wie haben Sie sich dazu gestellt?",
            hinweis: "Es geht nicht darum, die Situation nachträglich gut zu finden. Fragen Sie sich: Welche Haltung habe ich eingenommen? Was hat mir dabei geholfen? Gab es etwas, das trotz allem wichtig blieb?"
          }
        ]
      },
      {
        id: "G1-3",
        titel: "Wille zum Sinn, Freiheit und Verantwortung",
        dauer: 22,
        schritte: [
          {
            typ: "text",
            titel: "Drei Grundannahmen",
            text: "Frankl hat sein Menschenbild in drei Grundannahmen zusammengefasst, die oft als die **drei Säulen der Logotherapie** bezeichnet werden:\n\n- **Freiheit des Willens:** Der Mensch ist nicht vollständig durch Anlage, Umwelt und Triebe festgelegt. Er kann zu seinen Bedingungen Stellung nehmen.\n- **Wille zum Sinn:** Die grundlegende Motivation des Menschen ist das Streben, in seinem Leben Sinn zu finden und zu verwirklichen.\n- **Sinn des Lebens:** Es gibt in jeder Lebenssituation einen Sinn, der entdeckt werden kann – auch unter schwierigen Bedingungen.\n\nDie drei Annahmen hängen zusammen: Weil der Mensch frei ist, kann er sich für oder gegen einen Sinn entscheiden. Weil er nach Sinn strebt, leidet er, wenn er keinen findet. Und weil Sinn in jeder Situation möglich ist, gibt es keine Lage, die von vornherein völlig hoffnungslos sein müsste.\n\nFrankl verstand diese Annahmen nicht als empirisch bewiesene Tatsachen, sondern als **anthropologische Grundlage** – als ein begründetes Bild vom Menschen, aus dem sich therapeutische Haltungen und Methoden ableiten."
          },
          {
            typ: "text",
            titel: "Der Wille zum Sinn",
            text: "Mit dem **Willen zum Sinn** meint Frankl das ursprüngliche Bestreben des Menschen, in seinem Dasein etwas Sinnvolles zu entdecken und zu verwirklichen. Er ist für Frankl kein Trieb, der uns von innen „schiebt“, sondern eine Ausrichtung, die uns von einer Aufgabe oder einem Menschen her „zieht“.\n\nDaraus ergibt sich eine wichtige Unterscheidung: **Lust und Glück** sind nach Frankl keine geeigneten direkten Ziele. Sie stellen sich als *Nebenwirkung* ein, wenn ein Mensch sich einer sinnvollen Sache hingibt. Wer das Glück direkt anstrebt, verfehlt es leicht – ähnlich wie jemand, der krampfhaft versucht einzuschlafen.\n\nWird der Wille zum Sinn frustriert, können nach Frankl Ersatzbefriedigungen in den Vordergrund treten: das Streben nach Macht, Geld, Prestige oder nach Betäubung. Diese These hat Frankl auf gesellschaftliche Phänomene wie Langeweile, Sucht oder Aggressivität angewendet.\n\nEmpirisch wurde das Konstrukt später mit Fragebögen zur Sinnerfüllung untersucht, etwa dem *Purpose-in-Life-Test* von Crumbaugh und Maholick aus den 1960er-Jahren."
          },
          {
            typ: "luecke",
            text: "Nach Frankl ist Glück kein direktes Ziel, sondern eine {{Nebenwirkung|Voraussetzung|Ursache}} der Sinnerfüllung. Wird der Wille zum Sinn frustriert, treten oft {{Ersatzbefriedigungen|Zwangsgedanken|Halluzinationen}} in den Vordergrund.",
            erklaerung: "Glück stellt sich nach Frankl als Folge der Hingabe an eine sinnvolle Aufgabe ein. Bei frustriertem Sinnstreben treten etwa Macht- oder Konsumstreben und Betäubung an seine Stelle."
          },
          {
            typ: "text",
            titel: "Freiheit: nicht frei von, sondern frei zu",
            text: "Frankls Freiheitsbegriff wird oft missverstanden. Er behauptet **nicht**, der Mensch sei frei von Bedingungen. Natürlich ist jeder Mensch von seinen Genen, seiner Lebensgeschichte, seiner Umgebung und seinen Gefühlen geprägt. Frankl spricht von der **Bedingtheit** des Menschen.\n\nDer Mensch ist aber nicht *nur* bedingt. Er kann sich zu seinen Bedingungen verhalten: Er kann zu einer Angst Stellung nehmen, sich von einer Laune distanzieren, gegenüber einem Schicksal eine Haltung finden. Frankl nennt diese Fähigkeit **Selbstdistanzierung**. Die Kraft, sich nicht alles von sich selbst gefallen zu lassen, bezeichnet er als **Trotzmacht des Geistes**.\n\nFreiheit ist daher bei Frankl vor allem eine **Freiheit zu etwas**: zur Stellungnahme, zur Entscheidung, zur Verantwortung. Sie ist eine Freiheit *innerhalb* von Grenzen, nicht jenseits davon.\n\nDieser Freiheitsbegriff ist philosophisch begründet und lässt sich naturwissenschaftlich weder beweisen noch widerlegen. Er hat jedoch praktische Bedeutung: Wer sich als völlig determiniert erlebt, fühlt sich oft auch ohnmächtig."
          },
          {
            typ: "merke",
            text: "Der Mensch ist bedingt, aber nicht vollständig determiniert. Freiheit bedeutet bei Frankl nicht Freiheit von Bedingungen, sondern Freiheit, zu ihnen Stellung zu nehmen."
          },
          {
            typ: "mc",
            frage: "Eine Person sagt: „Ich bin nun mal ein ängstlicher Mensch, das liegt in meiner Familie.“ Welche Antwort entspricht am ehesten Frankls Freiheitsverständnis?",
            optionen: [
              "Ängstlichkeit ist reine Einstellungssache; mit genügend Willen verschwindet sie.",
              "Wenn die Ängstlichkeit familiär bedingt ist, gibt es keinen Spielraum.",
              "Familiäre Prägungen spielen keine Rolle, entscheidend ist allein die Gegenwart.",
              "Die Ängstlichkeit ist eine reale Bedingung, aber die Person kann sich zu ihr verhalten und entscheiden, wie viel Raum sie ihr gibt."
            ],
            richtig: 3,
            erklaerung: "Frankl erkennt Bedingungen an, betont aber den Spielraum der Stellungnahme. Die erste Option leugnet die Bedingtheit, die zweite die Freiheit, die dritte die Bedeutung der Prägung."
          },
          {
            typ: "text",
            titel: "Verantwortung und Gewissen",
            text: "Freiheit ist für Frankl untrennbar mit **Verantwortung** verbunden. Freiheit ohne Verantwortung droht in Willkür umzuschlagen. Frankl regte deshalb einmal an, der Freiheitsstatue an der Ostküste der USA eine „Verantwortlichkeitsstatue“ an der Westküste zur Seite zu stellen.\n\nVerantwortung hat bei Frankl zwei Richtungen: Man ist verantwortlich **für** etwas – für die eigenen Entscheidungen und Taten – und **vor** etwas oder jemandem: vor dem eigenen Gewissen, vor anderen Menschen oder, für religiöse Menschen, vor Gott. Die Logotherapie lässt bewusst offen, wovor sich ein Mensch verantwortlich fühlt.\n\nDas **Gewissen** beschreibt Frankl als eine Art *Sinn-Organ*: eine intuitive Fähigkeit, in einer konkreten Situation zu erspüren, was hier und jetzt das Sinnvolle ist. Das Gewissen kann irren, und es ist nicht mit dem anerzogenen Über-Ich gleichzusetzen. Es ist vielmehr die persönliche, situationsbezogene Wahrnehmung dessen, was „dran“ ist.\n\nDaraus folgt: Niemand kann einem anderen Menschen seinen Sinn vorschreiben – auch keine Beraterin und kein Therapeut."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie zu: Gehört der Aspekt eher zur Bedingtheit des Menschen oder zu seinem Freiraum der Stellungnahme?",
            kategorien: ["Bedingtheit", "Freiraum der Stellungnahme"],
            elemente: [
              { text: "Genetische Veranlagung", kat: 0 },
              { text: "Die Entscheidung, trotz Angst ein schwieriges Gespräch zu führen", kat: 1 },
              { text: "Erfahrungen in der Herkunftsfamilie", kat: 0 },
              { text: "Eine chronische Erkrankung", kat: 0 },
              { text: "Die Haltung, die jemand gegenüber seiner Erkrankung einnimmt", kat: 1 },
              { text: "Sich von einer schlechten Laune nicht bestimmen lassen", kat: 1 },
              { text: "Gesellschaftliche und wirtschaftliche Umstände", kat: 0 }
            ],
            erklaerung: "Zur Bedingtheit gehören Faktoren, die vorgegeben sind. Zum Freiraum gehören Entscheidungen und Haltungen, die eine Person ihnen gegenüber einnimmt. Beides gehört zum vollständigen Menschenbild Frankls."
          },
          {
            typ: "fall",
            titel: "Herr K. und die Pflege der Mutter",
            fall: "Konstruierte Lehrvignette: Herr K., 52 Jahre, pflegt seit einem Jahr seine an Demenz erkrankte Mutter. Er ist erschöpft und sagt: „Ich habe keine Wahl. Wenn ich es nicht mache, macht es keiner. Mein Leben gehört mir nicht mehr.“",
            frage: "Welche Reaktion einer logotherapeutisch orientierten Beraterin wäre am ehesten angemessen?",
            optionen: [
              "Sie erkennt die schwierige Lage an und erkundet mit ihm, wo er Entscheidungsspielräume hat – etwa bei Entlastung, bei der Art der Pflege und bei seiner Haltung zu der Aufgabe.",
              "Sie erklärt ihm, dass er in Wahrheit völlig frei sei und die Pflege jederzeit beenden könne.",
              "Sie bestätigt ihm, dass er tatsächlich keine Wahl habe, und rät ihm, es auszuhalten.",
              "Sie sagt ihm, die Pflege der Mutter sei der Sinn seines Lebens und er solle dankbar dafür sein."
            ],
            richtig: 0,
            erklaerung: "Die erste Option nimmt sowohl die Bedingtheit als auch die verbleibende Freiheit ernst und überlässt die Sinnfindung Herrn K. Die zweite verharmlost seine Lage, die dritte bestärkt die erlebte Ohnmacht, und die vierte schreibt ihm moralisierend einen Sinn vor."
          },
          {
            typ: "text",
            titel: "Der Sinn des Lebens: eine Wende der Frage",
            text: "Die dritte Grundannahme lautet, dass das Leben **unter allen Umständen** Sinn haben kann. Frankl meint damit nicht einen allgemeinen, für alle gleichen Lebenssinn. Sinn ist bei ihm **konkret und situativ**: Jede Situation enthält eine einmalige Möglichkeit, die nur diese Person in diesem Moment verwirklichen kann.\n\nSinn wird nach Frankl **gefunden, nicht erfunden**. Er ist kein beliebiges subjektives Konstrukt, sondern etwas, das in der Situation angelegt ist und entdeckt werden will. Gleichzeitig ist er auf die Person bezogen: Was für den einen sinnvoll ist, muss es für die andere nicht sein.\n\nBerühmt ist Frankls **Umkehrung der Sinnfrage**: Statt zu fragen „Was habe ich vom Leben noch zu erwarten?“, schlägt er vor, die Frage umzudrehen: Was erwartet das Leben – diese Situation, dieser Mensch, diese Aufgabe – von mir? Der Mensch ist dann nicht der Fragende, sondern der Befragte, der durch sein Handeln antwortet.\n\nNeben diesem situativen Sinn spricht Frankl von einem **Übersinn** – einem umfassenden Sinn des Ganzen, der dem Menschen verborgen bleiben kann und eher eine Frage des Glaubens als des Wissens ist."
          },
          {
            typ: "truefalse",
            aussage: "Nach Frankl wird Sinn vom Menschen frei erfunden; jede beliebige Deutung ist gleich gültig.",
            richtig: false,
            erklaerung: "Frankl betont, dass Sinn gefunden und nicht erfunden wird. Er ist zwar personen- und situationsbezogen, aber nicht beliebig: Er liegt als Möglichkeit in der Situation und wird mithilfe des Gewissens erspürt."
          },
          {
            typ: "reflexion",
            frage: "Probieren Sie Frankls Umkehrung der Sinnfrage aus: Was erwartet Ihre gegenwärtige Lebenssituation – Ihre Arbeit, Ihre Beziehungen, Ihre Lage – von Ihnen?",
            hinweis: "Notieren Sie zwei bis drei konkrete Antworten. Achten Sie darauf, ob sich durch die Umkehrung der Frage Ihr Blick verändert. Gibt es eine Aufgabe, die gerade nur Sie übernehmen können?"
          }
        ]
      },
      {
        id: "G1-4",
        titel: "Das Menschenbild in drei Dimensionen",
        dauer: 22,
        schritte: [
          {
            typ: "text",
            titel: "Gegen das „Nichts-als“",
            text: "Frankl setzte sich intensiv mit dem **Reduktionismus** auseinander. Gemeint ist eine Denkweise, die den Menschen auf eine einzige Ebene zurückführt: Der Mensch sei *nichts als* ein biochemischer Mechanismus, *nichts als* ein Bündel von Reflexen oder *nichts als* das Produkt seiner Triebe und seiner Umwelt.\n\nFrankl bestritt nicht, dass biologische, psychologische und soziale Erklärungen richtig und wichtig sind. Sein Einwand richtete sich gegen das „**nichts als**“. Jede Wissenschaft darf sich methodisch auf ihre Ebene beschränken. Problematisch wird es, wenn ein Teilaspekt als das Ganze ausgegeben wird.\n\nFür die Praxis hielt Frankl dies für folgenreich: Wenn ein Mensch nur noch als Summe seiner Symptome oder Prägungen betrachtet wird, geht verloren, was ihn als Person ausmacht – seine Fähigkeit zu Stellungnahme, Entscheidung und Sinnorientierung. Ein reduktionistisches Menschenbild kann nach Frankl sogar zur Sinnlosigkeitserfahrung beitragen, weil es dem Einzelnen nahelegt, er sei ohnehin nur ein Spielball von Kräften."
          },
          {
            typ: "text",
            titel: "Drei Dimensionen des Menschseins",
            text: "Frankl beschreibt den Menschen als Einheit in drei **Dimensionen**:\n\n- **Somatische Dimension (Körper):** Organismus, Physiologie, Gehirn, Erbanlagen, körperliche Gesundheit und Krankheit.\n- **Psychische Dimension (Seele im psychologischen Sinn):** Gefühle, Stimmungen, Triebe, Gewohnheiten, erlernte Muster, Temperament.\n- **Noetische Dimension (Geist):** die spezifisch menschliche Dimension, in der Stellungnahme, Gewissen, Werte, Sinnorientierung, Verantwortung, Humor und Liebe angesiedelt sind. Das Wort leitet sich vom griechischen *nous* ab.\n\nKörper und Psyche bilden für Frankl den **psychophysischen Organismus**, den der Mensch *hat*. Die geistige Person ist das, was der Mensch *ist*. Wichtig: „Geistig“ ist hier nicht religiös gemeint, sondern bezeichnet die Fähigkeit zu Freiheit und Sinnbezug.\n\nDie drei Dimensionen sind keine Schichten wie Stockwerke eines Hauses, die man voneinander trennen könnte. Sie durchdringen sich gegenseitig. Frankl sprach von der **Einheit trotz Vielfalt** des Menschen."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie jeder Dimension ein typisches Beispiel zu.",
            paare: [
              ["Somatische Dimension", "Ein erhöhter Blutdruck"],
              ["Psychische Dimension", "Eine gedrückte Stimmung am Morgen"],
              ["Noetische Dimension", "Die Entscheidung, trotz Müdigkeit einem Freund beizustehen"],
              ["Psychophysischer Organismus", "Körper und Psyche zusammen"]
            ],
            erklaerung: "Blutdruck ist körperlich, Stimmung psychisch. Die wertorientierte Entscheidung gehört zur noetischen Dimension. Körper und Psyche bilden gemeinsam den psychophysischen Organismus."
          },
          {
            typ: "text",
            titel: "Die Dimensionalontologie: das Zylinder-Beispiel",
            text: "Um zu erklären, wie ein Mensch zugleich Einheit und vielschichtig sein kann, entwarf Frankl die **Dimensionalontologie**. Er veranschaulichte sie mit geometrischen Bildern und formulierte zwei Gesetze:\n\n**Erstes Gesetz:** Projiziert man ein und denselben Gegenstand aus seiner Dimension in verschiedene niedrigere Dimensionen, entstehen Abbildungen, die einander widersprechen. Ein Zylinder erscheint in der Draufsicht als Kreis, in der Seitenansicht als Rechteck. Kreis und Rechteck widersprechen sich – und doch handelt es sich um denselben Gegenstand. Übertragen: Biologie und Psychologie zeigen unterschiedliche Bilder desselben Menschen, ohne dass einer der Befunde falsch wäre.\n\n**Zweites Gesetz:** Projiziert man verschiedene Gegenstände in ein und dieselbe niedrigere Dimension, können sie gleich aussehen. Ein Zylinder, ein Kegel und eine Kugel werfen von oben betrachtet denselben kreisförmigen Schatten. Übertragen: Ein Symptom wie Schlaflosigkeit kann auf einer Ebene gleich erscheinen, aber ganz unterschiedliche Hintergründe haben – etwa organische, psychische oder existenzielle.\n\nDie Dimensionalontologie ist ein philosophisches Denkmodell, keine empirische Theorie. Sie soll vor vorschnellen Vereinfachungen schützen."
          },
          {
            typ: "mc",
            frage: "Zwei Menschen leiden an derselben Antriebslosigkeit. Bei der einen liegt eine Schilddrüsenunterfunktion vor, beim anderen eine tiefe Sinnkrise. Welches Gesetz der Dimensionalontologie veranschaulicht das?",
            optionen: [
              "Das erste Gesetz: Ein Gegenstand erzeugt in verschiedenen Dimensionen widersprüchliche Bilder.",
              "Das zweite Gesetz: Verschiedene Gegenstände erzeugen in derselben Dimension gleiche Bilder.",
              "Das Gesetz der Hyperreflexion.",
              "Keines; die Dimensionalontologie bezieht sich nur auf körperliche Krankheiten."
            ],
            richtig: 1,
            erklaerung: "Unterschiedliche Ursachen erscheinen auf der Symptomebene gleich – wie Zylinder, Kegel und Kugel, die denselben Schatten werfen. Das ist das zweite Gesetz. Hyperreflexion ist ein Begriff aus einem anderen Zusammenhang."
          },
          {
            typ: "text",
            titel: "Kann der Geist erkranken?",
            text: "Eine zentrale und zugleich anspruchsvolle These Frankls lautet: Die **geistige Person kann nicht erkranken**. Krank werden können der Körper und die Psyche. Die noetische Dimension kann allerdings durch eine Erkrankung **blockiert** oder verdeckt werden – so wie ein Pianist auf einem verstimmten Instrument nicht gut spielen kann, obwohl er sein Können nicht verloren hat.\n\nFrankl nannte diese Überzeugung sein **psychiatrisches Credo**. Sie hat eine ethische Pointe: Auch ein schwer psychisch erkrankter Mensch behält seine Würde als Person. Hinter der Erkrankung steht immer jemand, der angesprochen werden kann.\n\nAus diesem Gedanken folgt auch der Begriff des **noopsychischen Antagonismus**: Die geistige Person kann sich gegen psychische Zustände stellen, etwa einer Angst trotzen oder eine Stimmung relativieren. Darauf bauen Methoden wie die Paradoxe Intention auf.\n\nKritisch ist anzumerken, dass diese These eine philosophisch-anthropologische Setzung ist. Sie ist nicht empirisch prüfbar im engen Sinn, sondern beschreibt eine Haltung gegenüber dem Patienten."
          },
          {
            typ: "merke",
            text: "Der Mensch hat einen psychophysischen Organismus – aber er ist geistige Person. Erkranken können Körper und Psyche; die geistige Person kann nach Frankl blockiert, nicht aber zerstört werden."
          },
          {
            typ: "truefalse",
            aussage: "Mit der „noetischen Dimension“ meint Frankl ausschließlich den religiösen Glauben eines Menschen.",
            richtig: false,
            erklaerung: "Noetisch heißt bei Frankl „geistig“ im Sinne der spezifisch menschlichen Fähigkeiten: Stellungnahme, Gewissen, Werte, Verantwortung, Humor, Liebe. Religiosität kann dazugehören, die noetische Dimension ist aber nicht darauf beschränkt."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Phänomene der jeweils vorrangig betroffenen Dimension zu.",
            kategorien: ["Somatisch", "Psychisch", "Noetisch"],
            elemente: [
              { text: "Ein gebrochenes Bein", kat: 0 },
              { text: "Angst vor einer Prüfung", kat: 1 },
              { text: "Die Frage, ob der eigene Beruf noch den eigenen Werten entspricht", kat: 2 },
              { text: "Ein Mangel an Vitamin B12", kat: 0 },
              { text: "Eine erlernte Gewohnheit, Konflikten auszuweichen", kat: 1 },
              { text: "Ein Gewissenskonflikt in einer beruflichen Entscheidung", kat: 2 },
              { text: "Humor über die eigene Unsicherheit", kat: 2 }
            ],
            erklaerung: "Körperliche Befunde sind somatisch, Gefühle und erlernte Muster psychisch. Wertfragen, Gewissen und die Fähigkeit, über sich selbst zu lachen, zählen zur noetischen Dimension. In der Wirklichkeit wirken alle drei zusammen."
          },
          {
            typ: "text",
            titel: "Was folgt daraus für die Praxis?",
            text: "Aus dem dreidimensionalen Menschenbild ergeben sich für Beratung und Therapie einige Grundhaltungen:\n\n- **Ganzheitliche Diagnostik:** Ein Problem sollte auf allen Ebenen betrachtet werden. Eine Sinnkrise schließt eine körperliche Erkrankung oder eine Depression nicht aus – und umgekehrt.\n- **Keine Konkurrenz zu Medizin und Psychotherapie:** Medikamente, verhaltenstherapeutische Übungen oder psychodynamische Arbeit sind nicht „unter“ der Logotherapie angesiedelt. Frankl selbst war Neurologe und setzte auch somatische Behandlungen ein.\n- **Die Person ansprechen:** Selbst in schweren Krisen wird die Person als jemand angesprochen, der Stellung nehmen kann.\n- **Ressource Geist:** Die noetische Dimension ist eine Quelle von Widerstandskraft, etwa durch Werte, Beziehungen, Humor und Hoffnung.\n\nFrankl unterschied zudem Störungen nach ihrem Ursprung: **somatogen** (körperlich verursacht), **psychogen** (seelisch verursacht) und **noogen** (aus einem Sinn- oder Wertkonflikt entstanden). Die Logotherapie im engeren Sinn ist vor allem für noogene Probleme zuständig, wirkt aber als Haltung auch bei den anderen mit."
          },
          {
            typ: "multi",
            frage: "Welche Schlussfolgerungen ergeben sich aus Frankls dreidimensionalem Menschenbild? Wählen Sie alle zutreffenden aus.",
            optionen: [
              "Bei Schlafproblemen sollten körperliche, psychische und existenzielle Faktoren geprüft werden.",
              "Psychopharmaka sind mit einem logotherapeutischen Ansatz unvereinbar.",
              "Auch ein schwer erkrankter Mensch wird als Person angesprochen, die Stellung nehmen kann.",
              "Werte, Beziehungen und Humor können als Ressourcen der noetischen Dimension genutzt werden.",
              "Jedes psychische Problem ist im Grunde eine Sinnkrise."
            ],
            richtig: [0, 2, 3],
            erklaerung: "Die ganzheitliche Prüfung, die Achtung der Person und die Nutzung geistiger Ressourcen folgen aus dem Menschenbild. Psychopharmaka sind nicht ausgeschlossen – Frankl setzte selbst somatische Therapien ein. Und nicht jedes Problem ist noogen; das wäre ein neuer Reduktionismus."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Menschenbild",
            karten: [
              { vorne: "Reduktionismus", hinten: "Rückführung des Menschen auf eine einzige Ebene („nichts als …“), von Frankl kritisiert." },
              { vorne: "Noetische Dimension", hinten: "Geistige Dimension (von griech. nous): Stellungnahme, Gewissen, Werte, Sinnorientierung." },
              { vorne: "Dimensionalontologie – 1. Gesetz", hinten: "Ein Gegenstand ergibt in verschiedenen niedrigeren Dimensionen widersprüchliche Bilder (Zylinder: Kreis und Rechteck)." },
              { vorne: "Dimensionalontologie – 2. Gesetz", hinten: "Verschiedene Gegenstände ergeben in derselben niedrigeren Dimension gleiche Bilder (Zylinder, Kegel, Kugel: Kreis)." },
              { vorne: "Psychiatrisches Credo", hinten: "Die geistige Person kann nicht erkranken, nur durch Krankheit blockiert werden." },
              { vorne: "Noogen", hinten: "Aus einem Sinn- oder Wertkonflikt entstanden – im Unterschied zu somatogen und psychogen." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Denken Sie an eine Belastung, die Sie derzeit beschäftigt. Wie zeigt sie sich auf der körperlichen, der psychischen und der geistigen Ebene?",
            hinweis: "Körper: Schlaf, Anspannung, Energie? Psyche: Gefühle, Gedankenmuster, Gewohnheiten? Geist: Welche Werte sind berührt? Wozu möchten Sie sich in dieser Lage verhalten? Was würden Sie gern trotz allem bewahren?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "mc",
        frage: "Wie übersetzte Frankl das griechische Wort „logos“ in der Bezeichnung Logotherapie?",
        optionen: ["Wort", "Vernunft", "Sinn", "Gesetz"],
        richtig: 2,
        erklaerung: "Frankl verstand „logos“ als „Sinn“. Logotherapie ist eine sinnzentrierte Therapie."
      },
      {
        typ: "truefalse",
        aussage: "Frankl hatte die Grundzüge der Logotherapie bereits vor seiner Deportation 1942 entwickelt.",
        richtig: true,
        erklaerung: "Die Grundideen entstanden in den späten 1920er- und den 1930er-Jahren; das Manuskript der Ärztlichen Seelsorge lag vor der Deportation vor."
      },
      {
        typ: "mc",
        frage: "Welche Reihenfolge der Haftstationen Frankls ist korrekt?",
        optionen: [
          "Auschwitz – Theresienstadt – Türkheim – Kaufering",
          "Theresienstadt – Auschwitz – Kaufering – Türkheim",
          "Kaufering – Theresienstadt – Auschwitz – Türkheim",
          "Theresienstadt – Kaufering – Auschwitz – Bergen-Belsen"
        ],
        richtig: 1,
        erklaerung: "Frankl kam 1942 nach Theresienstadt, 1944 kurz nach Auschwitz, dann nach Kaufering und schließlich nach Türkheim, wo er 1945 befreit wurde."
      },
      {
        typ: "multi",
        frage: "Welche drei Grundannahmen bilden die „Säulen“ der Logotherapie?",
        optionen: ["Freiheit des Willens", "Wille zur Macht", "Wille zum Sinn", "Sinn des Lebens", "Lustprinzip"],
        richtig: [0, 2, 3],
        erklaerung: "Freiheit des Willens, Wille zum Sinn und Sinn des Lebens sind die drei Grundannahmen. Wille zur Macht und Lustprinzip ordnete Frankl Adler und Freud zu."
      },
      {
        typ: "mc",
        frage: "Was meint Frankl mit Freiheit des Willens?",
        optionen: [
          "Die Unabhängigkeit des Menschen von allen biologischen und sozialen Bedingungen.",
          "Die Fähigkeit, zu den eigenen Bedingungen Stellung zu nehmen.",
          "Das Recht, ohne Rücksicht auf andere zu handeln.",
          "Die Abwesenheit von Gefühlen bei Entscheidungen."
        ],
        richtig: 1,
        erklaerung: "Frankl spricht von einer Freiheit innerhalb der Bedingtheit: Der Mensch kann sich zu seinen Anlagen, Prägungen und Umständen verhalten."
      },
      {
        typ: "truefalse",
        aussage: "Nach Frankl ist Glück am sichersten zu erreichen, wenn man es direkt zum Lebensziel macht.",
        richtig: false,
        erklaerung: "Glück stellt sich nach Frankl als Nebenwirkung der Hingabe an eine sinnvolle Aufgabe oder einen Menschen ein; direkt angestrebt, wird es leicht verfehlt."
      },
      {
        typ: "mc",
        frage: "Was veranschaulicht Frankl mit dem Bild des Zylinders, der von oben als Kreis und von der Seite als Rechteck erscheint?",
        optionen: [
          "Dass Menschen sich je nach Situation völlig verschieden verhalten.",
          "Dass nur die noetische Dimension wirklich existiert.",
          "Dass ein und derselbe Mensch in verschiedenen Betrachtungsebenen widersprüchlich erscheinen kann, ohne seine Einheit zu verlieren.",
          "Dass psychische Störungen immer körperliche Ursachen haben."
        ],
        richtig: 2,
        erklaerung: "Das ist das erste Gesetz der Dimensionalontologie: Widersprüchliche Teilbilder schließen die Einheit des Ganzen nicht aus."
      },
      {
        typ: "mc",
        frage: "Wie wird das Gewissen in der Logotherapie verstanden?",
        optionen: [
          "Als anerzogenes Über-Ich, das gesellschaftliche Normen durchsetzt.",
          "Als unfehlbare innere Stimme.",
          "Als Gefühl der Schuld nach Fehlverhalten.",
          "Als intuitives „Sinn-Organ“, das in der konkreten Situation das Sinnvolle erspürt, aber irren kann."
        ],
        richtig: 3,
        erklaerung: "Frankl beschreibt das Gewissen als Sinn-Organ. Es ist situationsbezogen, persönlich und fehlbar und nicht mit dem Über-Ich gleichzusetzen."
      }
    ]
  }
,
  {
    kurs: "grundkurs",
    id: "G2",
    titel: "Wege zum Sinn",
    beschreibung: "Wo und wie lässt sich Sinn finden? Das Modul stellt Frankls drei Wertkategorien, das Prinzip der Selbsttranszendenz und das Phänomen des existenziellen Vakuums vor. Es zeigt, wie die Logotherapie mit Leid, Schuld und Vergänglichkeit umgeht, und lädt mit zahlreichen Reflexionsübungen dazu ein, die Konzepte auf das eigene Leben zu beziehen.",
    lernziele: [
      "Sie können schöpferische Werte, Erlebniswerte und Einstellungswerte unterscheiden und mit Beispielen veranschaulichen.",
      "Sie können erklären, warum Selbstverwirklichung und Glück nach Frankl Nebenwirkungen der Selbsttranszendenz sind.",
      "Sie können das existenzielle Vakuum beschreiben und von einer psychischen Erkrankung abgrenzen.",
      "Sie können die tragische Trias und die Grundgedanken des tragischen Optimismus darstellen.",
      "Sie können Sinnmöglichkeiten in alltäglichen Situationen erkennen und reflektieren."
    ],
    lektionen: [
      {
        id: "G2-1",
        titel: "Drei Hauptstraßen zum Sinn: die Wertkategorien",
        dauer: 22,
        schritte: [
          {
            typ: "text",
            titel: "Sinn hat Adressen",
            text: "Wenn Sinn nach Frankl nicht erfunden, sondern gefunden wird, stellt sich eine praktische Frage: **Wo** können wir ihn finden? Frankl antwortete darauf mit drei Kategorien von Werten, die er auch als die drei „Hauptstraßen“ zum Sinn bezeichnete:\n\n- **Schöpferische Werte:** was wir der Welt *geben* – durch Arbeit, Tat, Gestaltung.\n- **Erlebniswerte:** was wir von der Welt *empfangen* – durch Begegnung, Liebe, Natur, Kunst.\n- **Einstellungswerte:** wie wir uns zu einem *unabänderlichen* Schicksal stellen.\n\nDiese Einteilung ist keine Rangordnung, nach der man vorgehen müsste. Sie ist eine Orientierungshilfe, die den Blick weitet. Viele Menschen setzen Sinn unbewusst mit Leistung gleich. Die Wertkategorien zeigen, dass Sinn auch dort möglich ist, wo jemand nichts mehr leisten kann – und sogar dort, wo er nichts mehr ändern kann.\n\nWichtig ist der Begriff **Wert**: Gemeint sind nicht moralische Vorschriften, sondern das, was einer Person in einer Situation als wertvoll und bedeutsam aufscheint und sie anspricht."
          },
          {
            typ: "text",
            titel: "Schöpferische Werte: etwas geben",
            text: "**Schöpferische Werte** verwirklicht ein Mensch, indem er etwas in die Welt einbringt: eine Arbeit, ein Werk, eine Hilfeleistung, eine Idee, eine Entscheidung. Entscheidend ist nach Frankl nicht die Größe oder das Ansehen der Tätigkeit, sondern die Art, wie sie ausgefüllt wird. Der Beruf an sich macht niemanden unersetzlich; unersetzlich ist die persönliche Weise, mit der jemand seinen Platz ausfüllt.\n\nBeispiele sind die sorgfältig ausgeführte Handwerksarbeit, das Großziehen von Kindern, ehrenamtliches Engagement, das Pflegen eines Gartens oder das Schreiben eines Briefes, der einem anderen Menschen hilft.\n\nFrankl warnte zugleich davor, Sinn mit Berufstätigkeit gleichzusetzen. Er beobachtete bei Arbeitslosigkeit eine typische Sinnleere, die nicht allein wirtschaftlich zu erklären ist: Menschen fühlen sich nutzlos und überflüssig. Die Antwort darauf ist nicht, Arbeit zu verklären, sondern den Blick für andere Formen des Gebens zu öffnen – etwa ehrenamtliche Tätigkeit, Weiterbildung oder Aufgaben in Familie und Nachbarschaft."
          },
          {
            typ: "text",
            titel: "Erlebniswerte: etwas empfangen",
            text: "**Erlebniswerte** verwirklicht ein Mensch, indem er sich von etwas berühren lässt: von einem anderen Menschen, von der Schönheit der Natur, von Musik, Kunst, Wissen oder einer religiösen Erfahrung. Hier ist der Mensch nicht aktiv gestaltend, sondern empfangend – und doch wird Sinn verwirklicht.\n\nFrankl schilderte, wie Häftlinge auf einem Transport oder nach der Arbeit einen Sonnenuntergang bewunderten und darin für einen Moment Trost fanden. Er betonte auch, dass ein einziger Augenblick großer Intensität einem Leben Sinn geben kann.\n\nDie höchste Form des Erlebens ist für Frankl die **Liebe**. Lieben bedeutet in seinem Verständnis, einen anderen Menschen in seiner Einzigartigkeit zu erfassen – nicht nur, was er hat oder leistet, sondern wer er ist. Liebe sieht im anderen auch seine Möglichkeiten und hilft ihm, sie zu verwirklichen.\n\nErlebniswerte sind besonders bedeutsam für Menschen, die wenig gestalten können, etwa bei Krankheit oder im hohen Alter. Sie erinnern daran, dass Empfangen keine geringere Form der Sinnerfüllung ist als Leisten."
          },
          {
            typ: "text",
            titel: "Einstellungswerte: sich verhalten",
            text: "Die dritte Kategorie ist für Frankl die bedeutsamste: **Einstellungswerte**. Sie werden dort verwirklicht, wo ein Mensch einem Schicksal begegnet, das sich **nicht ändern** lässt – einer unheilbaren Krankheit, einem endgültigen Verlust, einer unwiderruflichen Situation. Auch dann bleibt die Freiheit, zu wählen, *wie* man diesem Schicksal begegnet: mit Würde, mit Mut, mit Fürsorge für andere, mit Humor oder mit dem Entschluss, nicht zu verbittern.\n\nDarin liegt eine der wichtigsten Botschaften der Logotherapie: Sinn ist **bis zum letzten Atemzug** möglich. Wer nichts mehr gestalten und kaum noch etwas erleben kann, kann immer noch eine Haltung einnehmen.\n\nZwei Missverständnisse gilt es zu vermeiden. Erstens: Einstellungswerte kommen erst ins Spiel, wenn das Leid **unvermeidbar** ist. Wer vermeidbares Leid erträgt, statt es zu ändern, handelt nach Frankl nicht heroisch, sondern masochistisch. Zweitens: Die Einstellung lässt sich nicht von außen verordnen. Eine Beraterin kann Möglichkeiten eröffnen, die Entscheidung bleibt bei der betroffenen Person."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Beispiele der passenden Wertkategorie zu.",
            kategorien: ["Schöpferische Werte", "Erlebniswerte", "Einstellungswerte"],
            elemente: [
              { text: "Eine Lehrerin bereitet eine Unterrichtsstunde mit großer Sorgfalt vor.", kat: 0 },
              { text: "Ein Mann hört ein Konzert und ist tief bewegt.", kat: 1 },
              { text: "Eine schwer kranke Frau entscheidet sich, ihre letzten Wochen nicht in Verbitterung zu verbringen.", kat: 2 },
              { text: "Ein Rentner repariert ehrenamtlich Fahrräder für Geflüchtete.", kat: 0 },
              { text: "Ein Paar erlebt bei einer Wanderung einen stillen Moment der Verbundenheit.", kat: 1 },
              { text: "Ein Mann nach einer Querschnittslähmung beschließt, anderen Betroffenen Mut zu machen.", kat: 2 },
              { text: "Eine Großmutter schaut ihrem Enkel beim Spielen zu und freut sich an ihm.", kat: 1 }
            ],
            erklaerung: "Schöpferische Werte bestehen im Geben und Gestalten, Erlebniswerte im Empfangen und Berührtsein, Einstellungswerte in der Haltung gegenüber einem unabänderlichen Schicksal. Beim Mann mit Querschnittslähmung verbinden sich Einstellung und Tat – der Ausgangspunkt ist aber die Haltung zum Unabänderlichen."
          },
          {
            typ: "merke",
            text: "Sinn kann auf drei Wegen verwirklicht werden: indem wir etwas geben (schöpferische Werte), indem wir etwas empfangen (Erlebniswerte) und indem wir uns zu Unabänderlichem in einer Haltung verhalten (Einstellungswerte)."
          },
          {
            typ: "mc",
            frage: "Warum hielt Frankl die Einstellungswerte für besonders bedeutsam?",
            optionen: [
              "Weil sie leichter zu verwirklichen sind als schöpferische Werte.",
              "Weil sie auch dann noch möglich sind, wenn weder Gestalten noch Erleben möglich ist.",
              "Weil Leiden an sich wertvoller ist als Freude.",
              "Weil sie ausschließlich religiösen Menschen zugänglich sind."
            ],
            richtig: 1,
            erklaerung: "Einstellungswerte bleiben bis zuletzt möglich und begründen damit die These, dass das Leben unter allen Umständen Sinn haben kann. Sie sind nicht leichter, Leiden ist nicht an sich wertvoll, und sie sind nicht an Religiosität gebunden."
          },
          {
            typ: "truefalse",
            aussage: "Nach Frankl sollte man auch vermeidbares Leid tapfer ertragen, weil darin Einstellungswerte verwirklicht werden.",
            richtig: false,
            erklaerung: "Einstellungswerte betreffen nur unvermeidbares Leid. Vermeidbares Leid zu beseitigen hat Vorrang. Vermeidbares Leid zu ertragen, bezeichnete Frankl als masochistisch, nicht als heroisch."
          },
          {
            typ: "luecke",
            text: "Die höchste Form der Erlebniswerte ist für Frankl die {{Liebe|Leistung|Selbstbeobachtung}}. Sie erfasst einen Menschen in seiner {{Einzigartigkeit|Nützlichkeit|Vergangenheit}}.",
            erklaerung: "Liebe bedeutet nach Frankl, das Wesen eines anderen Menschen in seiner Einmaligkeit zu erfassen und dabei auch seine Möglichkeiten zu sehen."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie den Wertkategorien die passende Kurzformel zu.",
            paare: [
              ["Schöpferische Werte", "Was ich der Welt gebe"],
              ["Erlebniswerte", "Was ich von der Welt empfange"],
              ["Einstellungswerte", "Wie ich mich zu Unabänderlichem verhalte"]
            ],
            erklaerung: "Geben, Empfangen und Sich-Verhalten sind die drei Wege, auf denen nach Frankl Sinn verwirklicht werden kann."
          },
          {
            typ: "reflexion",
            frage: "Schöpferische Werte: Wo geben Sie in Ihrem Leben etwas, das ohne Sie fehlen würde?",
            hinweis: "Denken Sie nicht nur an den Beruf. Auch kleine Tätigkeiten zählen: zuhören, etwas reparieren, kochen, jemanden begleiten. Was davon tun Sie mit besonderer Hingabe?"
          },
          {
            typ: "reflexion",
            frage: "Erlebniswerte: Welche Momente der letzten Wochen haben Sie berührt, ohne dass Sie etwas dafür leisten mussten?",
            hinweis: "Eine Begegnung, ein Gespräch, ein Lied, ein Blick in die Natur, ein Buch. Was machte diesen Moment wertvoll? Wie oft geben Sie solchen Momenten bewusst Raum?"
          },
          {
            typ: "reflexion",
            frage: "Einstellungswerte: Gibt es etwas Unabänderliches in Ihrem Leben, zu dem Sie eine Haltung gefunden haben – oder noch suchen?",
            hinweis: "Gehen Sie behutsam vor und wählen Sie ein Thema, mit dem Sie sich jetzt beschäftigen möchten. Welche Haltung wäre Ihnen wichtig? Wer oder was könnte Sie dabei unterstützen?"
          }
        ]
      },
      {
        id: "G2-2",
        titel: "Selbsttranszendenz: über sich hinaus",
        dauer: 20,
        schritte: [
          {
            typ: "text",
            titel: "Menschsein weist über sich hinaus",
            text: "Ein Kernbegriff der Logotherapie ist die **Selbsttranszendenz**. Frankl meint damit, dass Menschsein immer über sich selbst hinaus auf etwas oder jemanden verweist: auf eine Aufgabe, die erfüllt werden will, auf einen Menschen, der geliebt wird, auf eine Sache, der man dient.\n\nDer Mensch ist in dieser Sicht kein geschlossenes System, das nur darauf aus ist, innere Spannungen abzubauen oder ein inneres Gleichgewicht herzustellen. Er ist offen zur Welt hin. Sinn liegt daher nicht *in* uns, sondern in der Begegnung mit der Welt.\n\nFrankl kritisierte damit Modelle, die menschliche Motivation vor allem als Spannungsreduktion beschreiben. Ein gewisses Maß an Spannung – zwischen dem, was ist, und dem, was sein sollte – hielt er sogar für gesund. Er sprach von **Noodynamik**: Die Spannung zwischen Sein und Sollen hält den Menschen lebendig und gerichtet.\n\nSelbsttranszendenz ist neben der **Selbstdistanzierung** eine der zwei grundlegenden Fähigkeiten der geistigen Dimension, auf die logotherapeutische Methoden aufbauen."
          },
          {
            typ: "text",
            titel: "Das Auge, das sich nicht sieht",
            text: "Frankl veranschaulichte die Selbsttranszendenz gern mit dem **Bild des Auges**: Ein gesundes Auge sieht die Welt, nicht sich selbst. Sieht es etwas von sich selbst – etwa einen Schleier oder Lichtringe –, dann ist das meist ein Hinweis auf eine Störung. In gleicher Weise ist der Mensch nach Frankl dann am meisten er selbst, wenn er sich selbst vergisst und einer Sache oder einem Menschen hingibt.\n\nEin zweites Bild ist der **Bumerang**. Man nimmt oft an, ein Bumerang kehre immer zum Werfer zurück. Frankl wies darauf hin, dass er nur dann zurückkehrt, wenn er sein Ziel verfehlt hat. Ebenso kreist ein Mensch nur dann ständig um sich selbst, wenn er seinen Sinn verfehlt hat.\n\nBeide Bilder sind keine Beweise, sondern Veranschaulichungen. Sie helfen aber, eine verbreitete Annahme zu hinterfragen: dass man sich vor allem um sich selbst kümmern müsse, um ein erfülltes Leben zu führen."
          },
          {
            typ: "mc",
            frage: "Was will Frankl mit dem Bild des Auges verdeutlichen?",
            optionen: [
              "Dass der Mensch die Welt nie objektiv wahrnehmen kann.",
              "Dass Selbstbeobachtung die wichtigste Voraussetzung für psychische Gesundheit ist.",
              "Dass Sehstörungen oft psychische Ursachen haben.",
              "Dass der Mensch, ähnlich wie ein gesundes Auge, seine Bestimmung erfüllt, wenn er auf die Welt gerichtet ist statt auf sich selbst."
            ],
            richtig: 3,
            erklaerung: "Das Auge ist ein Gleichnis für die Selbsttranszendenz. Es geht nicht um Erkenntnistheorie oder Augenheilkunde. Übermäßige Selbstbeobachtung sah Frankl gerade als Problem (Hyperreflexion)."
          },
          {
            typ: "text",
            titel: "Selbstverwirklichung als Nebenwirkung",
            text: "Daraus folgt eine These, die zunächst überrascht: **Selbstverwirklichung** ist nach Frankl kein geeignetes direktes Lebensziel. Sie stellt sich ein, wenn sich ein Mensch einer Aufgabe oder einem anderen Menschen widmet – gleichsam als Nebenwirkung. Wer sie direkt anstrebt, gerät leicht in eine Selbstbezogenheit, die das Ziel verfehlt.\n\nDasselbe gilt nach Frankl für **Glück, Lust und Erfolg**. Er formulierte die Idee sinngemäß so: Glück kann man nicht verfolgen, es muss erfolgen. Wer das Glück zum Ziel macht, beobachtet ständig, ob er schon glücklich ist – und gerade diese Beobachtung stört.\n\nFrankl beschrieb zwei damit verbundene Fehlhaltungen:\n\n- **Hyperintention:** das zu angestrengte Wollen eines Zustands, der sich nur spontan einstellen kann, etwa Schlaf, Entspannung oder sexuelles Erleben.\n- **Hyperreflexion:** die übermäßige Selbstbeobachtung, die spontane Vorgänge behindert.\n\nAus diesen Überlegungen leiten sich später die Methoden der Paradoxen Intention und der Dereflexion ab, die Sie in Modul G3 kennenlernen."
          },
          {
            typ: "luecke",
            text: "Das zu angestrengte Wollen eines Zustands wie Schlaf heißt bei Frankl {{Hyperintention|Hyperreflexion|Selbsttranszendenz}}. Die übermäßige Selbstbeobachtung nennt er {{Hyperreflexion|Selbstdistanzierung|Dereflexion}}.",
            erklaerung: "Hyperintention und Hyperreflexion sind die beiden Fehlhaltungen, die die Selbsttranszendenz stören. Dereflexion ist die Methode dagegen, Selbstdistanzierung eine geistige Fähigkeit."
          },
          {
            typ: "merke",
            text: "Selbstverwirklichung, Glück und Lust sind nach Frankl keine Ziele, sondern Nebenwirkungen: Sie stellen sich ein, wenn ein Mensch sich einer Sache hingibt oder einen anderen Menschen liebt."
          },
          {
            typ: "text",
            titel: "Selbsttranszendenz ist keine Selbstaufgabe",
            text: "Der Begriff der Selbsttranszendenz wird manchmal missverstanden, als ob man sich für andere aufopfern und eigene Bedürfnisse ignorieren sollte. Das ist nicht gemeint.\n\nErstens: Selbsttranszendenz bezieht sich auf **Sinn**, nicht auf Gefallsucht oder Pflichterfüllung um jeden Preis. Wer sich bis zur Erschöpfung für andere verausgabt, weil er nicht Nein sagen kann, handelt oft gerade nicht frei und sinnorientiert.\n\nZweitens: Zur Hingabe an eine Aufgabe gehört auch, für die eigenen Kräfte zu sorgen. Ruhe, Gesundheit und Grenzen sind Voraussetzungen dafür, sich längerfristig einer Sache widmen zu können.\n\nDrittens: Selbsttranszendenz braucht **Selbstdistanzierung**. Erst wenn ein Mensch einen gewissen Abstand zu seinen Ängsten und Wünschen gewinnt, kann er frei wählen, wem oder was er sich zuwendet.\n\nIn der neueren Forschung finden sich verwandte Ideen, etwa die Unterscheidung zwischen hedonischem Wohlbefinden (Freude, Genuss) und eudaimonischem Wohlbefinden (Sinn, Wachstum). Frankls Gedanke ist hier anschlussfähig, auch wenn diese Forschung nicht unmittelbar aus der Logotherapie hervorgegangen ist."
          },
          {
            typ: "truefalse",
            aussage: "Selbsttranszendenz im Sinne Frankls bedeutet, eigene Grenzen und Bedürfnisse grundsätzlich hinter die Wünsche anderer zurückzustellen.",
            richtig: false,
            erklaerung: "Selbsttranszendenz meint die Ausrichtung auf Sinn, nicht Selbstaufgabe. Selbstfürsorge und Grenzen können gerade Voraussetzungen dafür sein, sich nachhaltig einer Aufgabe zu widmen."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Begriffe ihren Bedeutungen zu.",
            paare: [
              ["Selbsttranszendenz", "Ausrichtung über sich hinaus auf eine Aufgabe oder einen Menschen"],
              ["Selbstdistanzierung", "Fähigkeit, Abstand zu eigenen Gefühlen und Zuständen zu gewinnen"],
              ["Noodynamik", "Gesunde Spannung zwischen dem, was ist, und dem, was sein soll"],
              ["Hyperintention", "Zu angestrengtes Wollen eines Zustands, der sich nur spontan einstellt"],
              ["Bumerang-Gleichnis", "Wer ständig um sich selbst kreist, hat sein Ziel verfehlt"]
            ],
            erklaerung: "Diese Begriffe bilden das Gerüst von Frankls Motivationslehre. Selbsttranszendenz und Selbstdistanzierung gelten als die beiden Grundfähigkeiten der geistigen Dimension."
          },
          {
            typ: "multi",
            frage: "Welche Aussagen passen zur Idee der Selbsttranszendenz? Wählen Sie alle zutreffenden aus.",
            optionen: [
              "Eine Musikerin vergisst beim Spielen die Zeit und sich selbst.",
              "Ein Mann prüft jede Stunde, ob er inzwischen glücklicher ist.",
              "Ein Vater widmet sich mit Freude der Erziehung seiner Tochter und wächst dabei selbst.",
              "Eine Frau sagt nie Nein, weil sie Angst hat, abgelehnt zu werden.",
              "Ein Wissenschaftler ist ganz in ein Forschungsproblem vertieft."
            ],
            richtig: [0, 2, 4],
            erklaerung: "Hingabe an Musik, an ein Kind oder an eine Fragestellung ist Ausdruck der Selbsttranszendenz. Das ständige Prüfen des eigenen Glücks ist Hyperreflexion. Nie Nein sagen aus Angst ist eher Unfreiheit als sinnorientierte Hingabe."
          },
          {
            typ: "reflexion",
            frage: "Wann haben Sie sich zuletzt ganz in etwas oder jemandem verloren – so sehr, dass Sie sich selbst vergessen haben?",
            hinweis: "Was haben Sie getan? Mit wem? Wie haben Sie sich danach gefühlt? Was sagt das darüber, wofür Sie sich gern einsetzen?"
          },
          {
            typ: "reflexion",
            frage: "Gibt es einen Bereich, in dem Sie eher um sich selbst kreisen – etwa durch ständiges Grübeln oder Selbstbeobachtung?",
            hinweis: "Fragen Sie sich: Worauf könnte ich meine Aufmerksamkeit stattdessen richten? Welche Aufgabe oder welcher Mensch würde davon profitieren?"
          }
        ]
      },
      {
        id: "G2-3",
        titel: "Wenn Sinn fehlt: das existenzielle Vakuum",
        dauer: 22,
        schritte: [
          {
            typ: "text",
            titel: "Ein Gefühl innerer Leere",
            text: "Mit dem Begriff **existenzielles Vakuum** beschrieb Frankl ein Gefühl innerer Leere und Sinnlosigkeit, das er als weit verbreitetes Phänomen seiner Zeit ansah. Betroffene erleben ihr Leben als gleichgültig, inhaltsleer oder ziellos – nicht unbedingt dramatisch, oft eher als dumpfe **Langeweile** und Interesselosigkeit.\n\nFrankl erklärte das Phänomen mit einem doppelten Verlust: Anders als das Tier sagen dem Menschen **keine Instinkte**, was er tun *muss*. Und in modernen Gesellschaften sagen ihm **Traditionen** immer weniger, was er tun *soll*. Ohne innere Orientierung droht der Mensch, entweder das zu tun, was andere tun (**Konformismus**), oder das, was andere ihm vorschreiben (**Totalitarismus**).\n\nDas existenzielle Vakuum ist also nicht in erster Linie ein individuelles Versagen, sondern hat auch gesellschaftliche Ursachen. Frankl sah darin eine Herausforderung: Wenn Instinkte und Traditionen nicht mehr tragen, muss der Mensch lernen, Sinn durch sein **Gewissen** in den konkreten Situationen selbst zu entdecken."
          },
          {
            typ: "text",
            titel: "Erscheinungsformen",
            text: "Das existenzielle Vakuum kann sich auf verschiedene Weise zeigen:\n\n- **Langeweile und Gleichgültigkeit:** Nichts scheint wirklich wichtig.\n- **Sonntagsneurose:** So nannte Frankl die Leere, die manche Menschen erleben, wenn die Arbeitswoche vorbei ist und kein äußerer Rahmen mehr Struktur gibt.\n- **Krise beim Übergang in den Ruhestand** oder nach dem Auszug der Kinder: Gewohnte Aufgaben fallen weg, und die Frage „Wofür eigentlich?“ tritt hervor.\n- **Ersatzbefriedigungen:** Statt Sinn wird Macht, Geld, Konsum, ständige Ablenkung oder Rausch gesucht.\n\nFrankl beschrieb außerdem, dass ein unerfüllter Wille zum Sinn mit Phänomenen wie **Depression, Aggression und Sucht** zusammenhängen kann; er sprach von einer „massenneurotischen Trias“. Diese These ist eine Zeitdiagnose. Sie bedeutet nicht, dass jede Depression, jede Aggression oder jede Sucht auf Sinnlosigkeit zurückgeht – dafür gibt es vielfältige biologische, psychische und soziale Ursachen."
          },
          {
            typ: "mc",
            frage: "Wie erklärte Frankl die Entstehung des existenziellen Vakuums?",
            optionen: [
              "Durch eine angeborene Störung des Gehirnstoffwechsels.",
              "Durch den Verlust von Instinkten, die sagen, was man tun muss, und den Schwund von Traditionen, die sagen, was man tun soll.",
              "Durch eine zu strenge Erziehung in der frühen Kindheit.",
              "Durch eine Überforderung mit zu vielen sinnvollen Aufgaben."
            ],
            richtig: 1,
            erklaerung: "Frankl nannte den doppelten Verlust an Orientierung durch Instinkte und Traditionen. Er sah das Vakuum als existenzielles, nicht primär biologisches oder frühkindlich verursachtes Phänomen."
          },
          {
            typ: "text",
            titel: "Sinnzweifel ist keine Krankheit",
            text: "Eine wichtige Unterscheidung: Frankl betonte, dass das **Fragen nach dem Sinn** und auch der **Zweifel** am Sinn des Lebens zutiefst menschlich und kein Krankheitszeichen sind. Die Sinnfrage zu stellen, ist Ausdruck geistiger Reife. Er unterschied daher:\n\n- **Existenzielle Frustration:** Der Wille zum Sinn wird enttäuscht. Das ist schmerzhaft, aber nicht krankhaft.\n- **Noogene Neurose:** Aus einem Sinn- oder Wertkonflikt erwächst eine behandlungsbedürftige Symptomatik. Hier sah Frankl das eigentliche Indikationsgebiet der Logotherapie.\n\nFür die Praxis bedeutet das: Wer in einer Sinnkrise steckt, sollte nicht vorschnell pathologisiert werden. Gleichzeitig darf nicht übersehen werden, wenn hinter einer erlebten Sinnlosigkeit eine **Depression** oder eine andere psychische Erkrankung steht. Anhaltende Niedergeschlagenheit, Interessenverlust, Schlaf- und Appetitstörungen oder Suizidgedanken gehören in fachliche, gegebenenfalls ärztliche oder psychotherapeutische Abklärung. Bei akuter Suizidalität ist sofortige professionelle Hilfe nötig."
          },
          {
            typ: "truefalse",
            aussage: "Nach Frankl ist bereits der Zweifel am Sinn des Lebens ein Symptom einer psychischen Erkrankung.",
            richtig: false,
            erklaerung: "Frankl sah den Sinnzweifel als zutiefst menschliches Phänomen. Erst wenn daraus eine behandlungsbedürftige Symptomatik entsteht, spricht er von einer noogenen Neurose. Unabhängig davon ist zu prüfen, ob eine Depression vorliegt."
          },
          {
            typ: "kategorien",
            frage: "Handelt es sich eher um ein Zeichen existenzieller Frustration oder um ein Warnsignal, das fachliche Abklärung nahelegt?",
            kategorien: ["Existenzielle Frustration", "Warnsignal für fachliche Abklärung"],
            elemente: [
              { text: "Die Frage, ob der eigene Beruf noch erfüllend ist", kat: 0 },
              { text: "Seit Wochen anhaltende Niedergeschlagenheit mit Schlaf- und Appetitverlust", kat: 1 },
              { text: "Ein Gefühl der Leere am Wochenende", kat: 0 },
              { text: "Äußerungen, nicht mehr leben zu wollen", kat: 1 },
              { text: "Unsicherheit nach dem Eintritt in den Ruhestand", kat: 0 },
              { text: "Zunehmender Alkoholkonsum, um die Leere nicht zu spüren", kat: 1 }
            ],
            erklaerung: "Sinnfragen und Leeregefühle sind häufig Ausdruck existenzieller Frustration. Anhaltende depressive Symptome, Suizidgedanken und problematischer Substanzkonsum sollten dagegen fachlich abgeklärt werden – unabhängig davon, ob zusätzlich Sinnfragen bestehen."
          },
          {
            typ: "text",
            titel: "Kann man Sinnerleben messen?",
            text: "Frankls Begriff des existenziellen Vakuums regte früh empirische Forschung an. Die US-amerikanischen Psychologen James Crumbaugh und Leonard Maholick entwickelten in den 1960er-Jahren den **Purpose-in-Life-Test (PIL)**, einen Fragebogen zum Erleben von Sinnerfüllung. Elisabeth Lukas, eine Schülerin Frankls, entwickelte im deutschsprachigen Raum den **Logo-Test**.\n\nHeute wird international häufig der **Meaning in Life Questionnaire** (Steger und Kollegen, 2006) verwendet. Er unterscheidet zwei Aspekte: das *Vorhandensein* von Sinn (presence) und die *Suche* nach Sinn (search). Diese Unterscheidung ist hilfreich, weil Suchen nicht automatisch ein Mangel ist.\n\nDie Forschung zeigt insgesamt, dass erlebter Lebenssinn mit verschiedenen Indikatoren psychischer Gesundheit und Lebenszufriedenheit zusammenhängt. Dabei handelt es sich überwiegend um Zusammenhänge aus Befragungsstudien; sie erlauben keine einfachen Schlüsse darauf, was Ursache und was Wirkung ist. Kritisch diskutiert wird zudem, wie klar sich Sinnerleben von Wohlbefinden oder Depressivität abgrenzen lässt."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie die Instrumente und Begriffe richtig zu.",
            paare: [
              ["Purpose-in-Life-Test", "Crumbaugh und Maholick, 1960er-Jahre"],
              ["Logo-Test", "Elisabeth Lukas"],
              ["Meaning in Life Questionnaire", "Unterscheidet Vorhandensein und Suche von Sinn"],
              ["Sonntagsneurose", "Leere, wenn der äußere Rahmen der Arbeitswoche wegfällt"]
            ],
            erklaerung: "PIL, Logo-Test und MLQ sind Fragebögen zum Sinnerleben. Die Sonntagsneurose ist Frankls Bezeichnung für eine typische Erscheinungsform des existenziellen Vakuums."
          },
          {
            typ: "fall",
            titel: "Frau M. nach dem Berufsende",
            fall: "Konstruierte Lehrvignette: Frau M., 64 Jahre, war 40 Jahre lang Buchhalterin. Seit drei Monaten ist sie im Ruhestand. Sie berichtet: „Ich habe mich so darauf gefreut. Jetzt sitze ich da und weiß nicht, wofür ich morgens aufstehen soll. Krank bin ich nicht, mir fehlt nur irgendwie alles.“ Sie schläft normal, trifft sich mit Freundinnen und hat keine Suizidgedanken.",
            frage: "Wie lässt sich die Situation von Frau M. im Sinne der Logotherapie am besten einordnen?",
            optionen: [
              "Es handelt sich eindeutig um eine schwere Depression, die sofort medikamentös behandelt werden muss.",
              "Frau M. hat einfach zu wenig Hobbys; sie sollte sich möglichst viele Freizeitaktivitäten suchen.",
              "Es spricht vieles für eine existenzielle Frustration nach dem Wegfall einer sinnstiftenden Struktur; hilfreich wäre, gemeinsam neue Sinnmöglichkeiten zu erkunden und die Lage im Blick zu behalten.",
              "Das Problem ist eine Folge verdrängter Kindheitserlebnisse, die zuerst aufgearbeitet werden müssen."
            ],
            richtig: 2,
            erklaerung: "Die Schilderung passt zu einer existenziellen Frustration: Sinnleere ohne deutliche Zeichen einer schweren Depression. Logotherapeutisch geht es darum, schöpferische, Erlebnis- und Einstellungswerte neu zu erkunden. Bloße Beschäftigung ersetzt keinen Sinn; eine voreilige Pathologisierung oder Kindheitsdeutung ist nicht begründet. Verändert sich die Lage, ist eine fachliche Abklärung sinnvoll."
          },
          {
            typ: "multi",
            frage: "Welche Phänomene nennt Frankl als mögliche Ersatzbefriedigungen bei frustriertem Willen zum Sinn?",
            optionen: [
              "Streben nach Macht",
              "Hingabe an eine Aufgabe",
              "Jagd nach Geld und Konsum",
              "Betäubung durch Rauschmittel",
              "Liebe zu einem anderen Menschen"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Macht, Geld und Konsum sowie Betäubung können nach Frankl an die Stelle eines verfehlten Sinns treten. Hingabe an eine Aufgabe und Liebe sind dagegen Formen der Sinnverwirklichung."
          },
          {
            typ: "reflexion",
            frage: "Kennen Sie Phasen der inneren Leere oder Langeweile? Wann treten sie typischerweise auf?",
            hinweis: "Achten Sie auf Muster: am Wochenende, im Urlaub, nach Abschlüssen, bei Übergängen. Was tun Sie dann meist? Was würde Ihnen stattdessen guttun – im Sinne von Geben, Empfangen oder Haltung?"
          },
          {
            typ: "reflexion",
            frage: "Wo erleben Sie in Ihrer Umgebung Konformismus – das Tun, was alle tun – statt eigener Sinnorientierung?",
            hinweis: "Beziehen Sie sich ruhig auch selbst ein. Gibt es Entscheidungen, die Sie eher getroffen haben, weil man es so macht? Was würde Ihr Gewissen dazu sagen?"
          }
        ]
      },
      {
        id: "G2-4",
        titel: "Tragische Trias, tragischer Optimismus und Sinn im Alltag",
        dauer: 24,
        schritte: [
          {
            typ: "text",
            titel: "Leid, Schuld und Tod",
            text: "Kein menschliches Leben bleibt von drei Grunderfahrungen verschont, die Frankl die **tragische Trias** nannte:\n\n- **Leid:** Schmerz, Krankheit, Verlust, Enttäuschung.\n- **Schuld:** das Wissen, Fehler gemacht, andere verletzt oder Möglichkeiten versäumt zu haben.\n- **Tod** bzw. **Vergänglichkeit:** die Endlichkeit des eigenen Lebens und das Vergehen jedes Augenblicks.\n\nViele Ansätze, die ein gelingendes Leben beschreiben, sparen diese Erfahrungen aus oder behandeln sie nur als Störfaktoren. Frankl dagegen stellte sie ins Zentrum. Seine Frage lautete: Kann ein Leben trotz Leid, Schuld und Tod sinnvoll sein – oder vielleicht sogar gerade im Umgang damit Sinn gewinnen?\n\nDiese Frage ist nicht nur theoretisch. Sie stellt sich in Hospizen und Krankenhäusern, nach Trennungen und Unfällen, nach schweren Fehlentscheidungen und im Alter. Die Logotherapie hat deshalb besondere Bedeutung in der **Palliativversorgung**, in der **Trauerbegleitung** und in der **Seelsorge** erlangt."
          },
          {
            typ: "text",
            titel: "Tragischer Optimismus",
            text: "1984 ergänzte Frankl sein bekanntestes Buch um ein Nachwort mit dem Titel *The Case for a Tragic Optimism*. Unter **tragischem Optimismus** versteht er die Haltung, trotz der tragischen Trias Ja zum Leben zu sagen. Er verband damit drei Möglichkeiten:\n\n- **Leid** kann in eine menschliche Leistung verwandelt werden – etwa in Mitgefühl, Reife oder Hilfe für andere.\n- **Schuld** kann zum Anlass werden, sich zum Besseren zu wandeln und Verantwortung zu übernehmen.\n- **Vergänglichkeit** kann ein Ansporn sein, die eigene Zeit verantwortlich zu nutzen.\n\nTragischer Optimismus ist **kein Zweckoptimismus** und keine Pflicht zur guten Laune. Frankl betonte, dass sich Optimismus nicht befehlen lässt. Wer einem trauernden Menschen sagt, er solle doch das Positive sehen, handelt nicht im Sinne Frankls.\n\nGemeint ist eine Haltung, die das Tragische ernst nimmt und dennoch die verbleibenden Möglichkeiten nicht übersieht. Sie entsteht nicht durch Appelle, sondern – wenn überhaupt – im eigenen Ringen eines Menschen."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie den Elementen der tragischen Trias die Möglichkeit zu, die Frankl im tragischen Optimismus sieht.",
            paare: [
              ["Leid", "Verwandlung in eine menschliche Leistung"],
              ["Schuld", "Anlass zur Wandlung zum Besseren"],
              ["Vergänglichkeit", "Ansporn zu verantwortlichem Handeln"]
            ],
            erklaerung: "So formulierte Frankl den tragischen Optimismus: Jedes Element der Trias birgt eine Möglichkeit, die ergriffen werden kann – aber nicht muss."
          },
          {
            typ: "mc",
            frage: "Eine Freundin hat ihren Partner verloren. Welche Reaktion widerspricht dem Verständnis des tragischen Optimismus am deutlichsten?",
            optionen: [
              "Da sein, zuhören und den Schmerz aushalten, ohne ihn zu bewerten.",
              "Sie fragen, was ihr an ihrem Partner besonders wichtig war.",
              "Ihr sagen: „Sieh es positiv, jetzt bist du frei für etwas Neues.“",
              "Sie in den kommenden Wochen bei praktischen Dingen unterstützen."
            ],
            richtig: 2,
            erklaerung: "Optimismus lässt sich nach Frankl nicht verordnen. Der Appell, das Positive zu sehen, übergeht den Schmerz. Zuhören, Interesse an dem Verstorbenen und praktische Hilfe respektieren die Trauer."
          },
          {
            typ: "text",
            titel: "Die Vergangenheit als Scheune",
            text: "Zur Vergänglichkeit entwickelte Frankl einen bemerkenswerten Gedanken. Oft wird gesagt, alles vergehe und sei deshalb letztlich bedeutungslos. Frankl sah es umgekehrt: Was einmal verwirklicht wurde, ist **unverlierbar** in die Vergangenheit „hineingerettet“. Kein späteres Ereignis kann ungeschehen machen, dass eine Liebe gelebt, eine Tat vollbracht oder ein Leid tapfer getragen wurde.\n\nFrankl verwendete dafür das Bild der **Scheunen der Vergangenheit**: Wer auf ein abgeerntetes Stoppelfeld blickt, sieht nur Leere. Doch die Ernte ist nicht verloren, sie ist in die Scheunen eingebracht. Ebenso ist ein gelebtes Leben nicht leer, nur weil es vergangen ist.\n\nDieser Gedanke kann besonders für ältere Menschen und für Trauernde tröstlich sein. Er lenkt den Blick von dem, was nicht mehr möglich ist, auf das, was bereits verwirklicht wurde.\n\nZugleich folgt daraus eine Mahnung: Weil jede verwirklichte Möglichkeit bleibt und jede versäumte verloren ist, ist der gegenwärtige Augenblick von großer Bedeutung. Vergänglichkeit macht das Leben nicht sinnlos, sondern **verantwortungsvoll**."
          },
          {
            typ: "merke",
            text: "Lebe so, als ob du zum zweiten Male lebtest und das erste Mal alles so falsch gemacht hättest, wie du es zu machen im Begriffe bist.",
            quelle: "Viktor E. Frankl, sinngemäß nach Ärztliche Seelsorge"
          },
          {
            typ: "truefalse",
            aussage: "Nach Frankl macht die Vergänglichkeit alles Erreichte letztlich bedeutungslos.",
            richtig: false,
            erklaerung: "Frankl vertrat das Gegenteil: Verwirklichtes ist in die Vergangenheit gerettet und bleibt unverlierbar. Vergänglichkeit verleiht dem Augenblick gerade Gewicht und ruft zur Verantwortung auf."
          },
          {
            typ: "text",
            titel: "Sinn im Alltag",
            text: "Sinn ist nach Frankl nicht nur in großen Lebensentscheidungen oder Grenzsituationen zu finden. Weil jede Situation eine eigene Sinnmöglichkeit enthält, ist auch der **Alltag** voller kleiner Anfragen: ein Kollege, der Unterstützung braucht; ein Kind, das eine Frage stellt; eine Aufgabe, die gründlich erledigt werden will; ein Abend, an dem man sich bewusst Zeit für etwas Schönes nimmt.\n\nPraktisch lässt sich das in drei einfache Fragen übersetzen, die den drei Wertkategorien entsprechen:\n\n- **Was kann ich heute geben?**\n- **Was kann ich heute empfangen oder würdigen?**\n- **Wie möchte ich mich zu dem stellen, was ich heute nicht ändern kann?**\n\nWichtig ist dabei: Es geht nicht darum, jedem Moment krampfhaft Sinn abzuringen. Das wäre selbst eine Form der Hyperintention. Die Fragen sind eher Einladungen zur Aufmerksamkeit. Sinn zeigt sich oft gerade dann, wenn wir offen sind für das, was eine Situation von uns erbittet.\n\nAuch hier gilt: Niemand kann einem anderen sagen, was in seinem Alltag sinnvoll ist. Die Antwort gibt jeder Mensch durch sein eigenes Handeln."
          },
          {
            typ: "luecke",
            text: "Die tragische Trias besteht aus Leid, {{Schuld|Angst|Langeweile}} und Tod. Frankl verglich die Vergangenheit mit {{Scheunen|Ruinen|Gefängnissen}}, in die das Verwirklichte eingebracht ist.",
            erklaerung: "Leid, Schuld und Tod bilden die tragische Trias. Das Bild der Scheunen zeigt, dass Verwirklichtes in der Vergangenheit sicher aufgehoben ist."
          },
          {
            typ: "multi",
            frage: "Welche der folgenden Fragen passen zur Suche nach Sinn im Alltag im Sinne Frankls? Wählen Sie alle zutreffenden aus.",
            optionen: [
              "Was erbittet diese Situation gerade von mir?",
              "Wie kann ich heute maximal viel Glück erleben?",
              "Wem kann ich heute mit etwas Konkretem helfen?",
              "Was hat mich heute berührt, ohne dass ich es leisten musste?",
              "Wie schaffe ich es, nie wieder Leid zu erfahren?"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Die Fragen nach der Anfrage der Situation, nach dem Geben und nach dem Empfangen entsprechen Frankls Ansatz. Glück direkt zu maximieren wäre Hyperintention; Leid vollständig vermeiden zu wollen, verkennt die tragische Trias."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Tragische Trias und tragischer Optimismus",
            karten: [
              { vorne: "Tragische Trias", hinten: "Leid, Schuld und Tod (Vergänglichkeit) – unausweichliche Grunderfahrungen des Menschen." },
              { vorne: "Tragischer Optimismus", hinten: "Ja zum Leben trotz der tragischen Trias; keine verordnete gute Laune, sondern eine Haltung, die das Tragische ernst nimmt." },
              { vorne: "Leid → ?", hinten: "Verwandlung in eine menschliche Leistung, etwa Mitgefühl oder Reife." },
              { vorne: "Schuld → ?", hinten: "Anlass zur Wandlung zum Besseren und zur Übernahme von Verantwortung." },
              { vorne: "Vergänglichkeit → ?", hinten: "Ansporn, die eigene Zeit verantwortlich zu nutzen." },
              { vorne: "Scheunen der Vergangenheit", hinten: "Verwirklichtes ist unverlierbar in die Vergangenheit gerettet." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Schauen Sie in Ihre „Scheunen der Vergangenheit“: Was haben Sie in Ihrem Leben bereits verwirklicht, das Ihnen niemand mehr nehmen kann?",
            hinweis: "Denken Sie an Beziehungen, Taten, schwierige Zeiten, die Sie durchgestanden haben, Menschen, denen Sie geholfen haben. Schreiben Sie mindestens drei Dinge auf."
          },
          {
            typ: "reflexion",
            frage: "Probieren Sie Frankls Gedankenexperiment: Stellen Sie sich vor, Sie lebten Ihren heutigen Tag zum zweiten Mal. Was würden Sie anders machen?",
            hinweis: "Achten Sie auf konkrete, kleine Dinge: ein Gespräch, eine Entscheidung, ein Moment der Aufmerksamkeit. Was davon können Sie morgen tatsächlich umsetzen?"
          },
          {
            typ: "reflexion",
            frage: "Beantworten Sie für den heutigen Tag die drei Alltagsfragen: Was konnte ich geben? Was konnte ich empfangen? Wie habe ich mich zu dem gestellt, was ich nicht ändern konnte?",
            hinweis: "Diese Übung kann über eine Woche hinweg jeden Abend wiederholt werden. Beobachten Sie, ob sich Ihre Aufmerksamkeit für Sinnmöglichkeiten im Laufe der Zeit verändert."
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "multi",
        frage: "Welche drei Wertkategorien unterscheidet Frankl?",
        optionen: ["Schöpferische Werte", "Materielle Werte", "Erlebniswerte", "Einstellungswerte", "Leistungswerte"],
        richtig: [0, 2, 3],
        erklaerung: "Frankl unterscheidet schöpferische Werte (Geben), Erlebniswerte (Empfangen) und Einstellungswerte (Haltung zu Unabänderlichem)."
      },
      {
        typ: "mc",
        frage: "Wann kommen Einstellungswerte nach Frankl zum Tragen?",
        optionen: [
          "Wenn ein Mensch einem unabänderlichen Schicksal gegenübersteht.",
          "Bei jeder alltäglichen Unannehmlichkeit.",
          "Nur bei religiösen Menschen.",
          "Wenn jemand vermeidbares Leid freiwillig auf sich nimmt."
        ],
        richtig: 0,
        erklaerung: "Einstellungswerte betreffen die Haltung gegenüber unvermeidbarem Leid. Vermeidbares Leid soll beseitigt werden."
      },
      {
        typ: "truefalse",
        aussage: "Nach Frankl ist Selbstverwirklichung eine Nebenwirkung der Hingabe an eine Aufgabe oder einen Menschen.",
        richtig: true,
        erklaerung: "Selbstverwirklichung stellt sich nach Frankl ein, wenn der Mensch sich selbst transzendiert; als direktes Ziel wird sie leicht verfehlt."
      },
      {
        typ: "mc",
        frage: "Was veranschaulicht das Bumerang-Gleichnis?",
        optionen: [
          "Dass gute Taten immer zu einem zurückkommen.",
          "Dass Probleme, die man verdrängt, wiederkehren.",
          "Dass der Mensch nach Krisen zu seinem alten Zustand zurückkehrt.",
          "Dass ein Mensch nur dann ständig um sich selbst kreist, wenn er seinen Sinn verfehlt hat."
        ],
        richtig: 3,
        erklaerung: "Ein Bumerang kehrt nach Frankl nur zurück, wenn er sein Ziel verfehlt hat – ein Bild für Selbstbezogenheit als Folge verfehlter Sinnorientierung."
      },
      {
        typ: "mc",
        frage: "Welche beiden Orientierungsverluste führen nach Frankl zum existenziellen Vakuum?",
        optionen: [
          "Verlust von Wohlstand und Gesundheit",
          "Verlust von Instinkten und Traditionen",
          "Verlust von Familie und Freunden",
          "Verlust von Religion und Wissenschaft"
        ],
        richtig: 1,
        erklaerung: "Instinkte sagen dem Menschen nicht, was er tun muss, und Traditionen immer weniger, was er tun soll."
      },
      {
        typ: "truefalse",
        aussage: "Frankl bezeichnete den Zweifel am Sinn des Lebens als Ausdruck einer psychischen Erkrankung.",
        richtig: false,
        erklaerung: "Für Frankl ist die Sinnfrage zutiefst menschlich. Existenzielle Frustration ist nicht per se krankhaft; erst eine daraus entstehende Symptomatik nennt er noogene Neurose."
      },
      {
        typ: "mc",
        frage: "Woraus besteht die tragische Trias?",
        optionen: ["Angst, Zwang, Depression", "Depression, Aggression, Sucht", "Leid, Schuld, Tod", "Krankheit, Armut, Einsamkeit"],
        richtig: 2,
        erklaerung: "Die tragische Trias umfasst Leid, Schuld und Tod. Depression, Aggression und Sucht nannte Frankl die massenneurotische Trias."
      },
      {
        typ: "multi",
        frage: "Welche Aussagen treffen auf den tragischen Optimismus zu?",
        optionen: [
          "Er nimmt Leid, Schuld und Tod ernst.",
          "Er verlangt, in jeder Lage gute Laune zu zeigen.",
          "Er sieht in Schuld eine Möglichkeit zur Wandlung zum Besseren.",
          "Er kann einem Menschen nicht von außen verordnet werden.",
          "Er bestreitet, dass es unvermeidbares Leid gibt."
        ],
        richtig: [0, 2, 3],
        erklaerung: "Tragischer Optimismus nimmt die Trias ernst, sieht in ihr Möglichkeiten und lässt sich nicht befehlen. Er ist weder Zwang zur guten Laune noch Leugnung des Leids."
      }
    ]
  }
,
  {
    kurs: "grundkurs",
    id: "G3",
    titel: "Methoden im Überblick",
    beschreibung: "Das Modul stellt die zentralen Methoden der Logotherapie vor: den Sokratischen Dialog, die Einstellungsmodulation, die Paradoxe Intention und die Dereflexion. Abschließend wird die Logotherapie mit anderen Verfahren verglichen und ihr Forschungsstand sowie ihre Grenzen werden nüchtern eingeordnet. Der Grundkurs vermittelt ein Verständnis der Methoden, keine Befähigung zu ihrer therapeutischen Anwendung.",
    lernziele: [
      "Sie können Ziel, Haltung und typische Fragen des Sokratischen Dialogs beschreiben.",
      "Sie können erklären, was Einstellungsmodulation ist und wann sie angebracht ist.",
      "Sie können Wirkprinzip, Indikationen und Kontraindikationen der Paradoxen Intention und der Dereflexion darstellen.",
      "Sie können Gemeinsamkeiten und Unterschiede zwischen Logotherapie und anderen Psychotherapieverfahren benennen.",
      "Sie können den Forschungsstand und die Grenzen der Logotherapie sachlich einschätzen."
    ],
    lektionen: [
      {
        id: "G3-1",
        titel: "Der Sokratische Dialog",
        dauer: 24,
        schritte: [
          {
            typ: "text",
            titel: "Hebammenkunst: Wissen zur Welt bringen",
            text: "Der Name **Sokratischer Dialog** geht auf den griechischen Philosophen Sokrates zurück, wie ihn Platon in seinen Dialogen darstellt. Sokrates verglich seine Gesprächsführung mit der Kunst einer Hebamme (*Maieutik*): Er wollte seinen Gesprächspartnern kein fertiges Wissen übergeben, sondern ihnen durch Fragen helfen, Einsichten selbst hervorzubringen.\n\nIn der Logotherapie ist der Sokratische Dialog die **grundlegende Gesprächsform**. Er beruht auf einer einfachen Überzeugung: Sinn kann nicht von außen gegeben werden, sondern muss von der Person selbst entdeckt werden. Die beratende Person ist deshalb nicht diejenige, die weiß, was für den anderen sinnvoll ist. Sie unterstützt ihn dabei, seine eigenen Werte, Möglichkeiten und Antworten zu finden.\n\nFrankl verwendete dafür ein Bild: Ein Logotherapeut solle eher einem **Augenarzt** gleichen als einem **Maler**. Der Maler zeigt die Welt, wie er sie sieht. Der Augenarzt hilft dem Patienten, die Welt selbst klarer zu sehen.\n\nDer Begriff bezeichnet in der Logotherapie also weniger eine einzelne Technik als eine **Haltung** der Gesprächsführung."
          },
          {
            typ: "text",
            titel: "Die Haltung: fragen statt belehren",
            text: "Kennzeichnend für den Sokratischen Dialog sind:\n\n- **Offene Fragen** statt Ratschläge oder Belehrungen.\n- **Echtes Interesse** an der Sichtweise der Person – keine Fragen, deren Antwort man schon vorher festgelegt hat.\n- **Konkretisierung:** Allgemeine Aussagen wie „Alles ist sinnlos“ werden behutsam auf konkrete Situationen, Erfahrungen und Personen bezogen.\n- **Würdigung:** Was die Person bereits geleistet, erlebt und getragen hat, wird wahrgenommen.\n- **Öffnung von Möglichkeiten:** Neben dem Problem werden Spielräume, Werte und Ressourcen sichtbar gemacht.\n\nDer Sokratische Dialog ist keine Technik, um jemanden mit geschickten Fragen zu einer vorher gewünschten Einsicht zu führen. Gerade das wäre eine Form der Manipulation. Elisabeth Lukas und andere Autorinnen und Autoren der Logotherapie haben betont, dass die Antwort offen bleiben muss.\n\nDer Dialog setzt zudem eine tragfähige Beziehung voraus. Wer sich nicht verstanden fühlt, wird sich auf Fragen nach Sinn und Werten kaum einlassen. Deshalb steht am Anfang meist das aufmerksame Zuhören und das Anerkennen des Leids."
          },
          {
            typ: "merke",
            text: "Der Logotherapeut gleicht nach Frankls Bild eher einem Augenarzt als einem Maler: Er zeigt nicht die Welt, wie er sie sieht, sondern hilft dem anderen, selbst klarer zu sehen."
          },
          {
            typ: "text",
            titel: "Typische Fragerichtungen",
            text: "In der logotherapeutischen Literatur werden verschiedene Fragerichtungen beschrieben, die im Sokratischen Dialog hilfreich sein können. Einige Beispiele:\n\n- **Fragen nach Werten:** „Was ist Ihnen in dieser Situation wirklich wichtig?“ – „Wofür hat es sich bisher gelohnt?“\n- **Fragen nach Erfahrungen von Sinn:** „Wann haben Sie sich zuletzt lebendig oder gebraucht gefühlt?“\n- **Fragen nach Freiräumen:** „Was liegt in Ihrer Hand, auch wenn vieles nicht in Ihrer Hand liegt?“\n- **Perspektivwechsel:** „Was würde ein Mensch, der Ihnen nahesteht, Ihnen jetzt sagen?“ – „Wie werden Sie in zehn Jahren auf diese Zeit zurückblicken wollen?“\n- **Fragen nach der Anfrage der Situation:** „Was erwartet diese Situation von Ihnen?“\n\nSolche Fragen sind keine Formeln. Ihre Wirkung hängt davon ab, ob sie im richtigen Moment, in einer passenden Sprache und mit echter Offenheit gestellt werden. Zu früh gestellt, können Sinnfragen wie eine Abwertung des Schmerzes wirken."
          },
          {
            typ: "mc",
            frage: "Welche Frage entspricht am ehesten dem Geist des Sokratischen Dialogs?",
            optionen: [
              "„Finden Sie nicht auch, dass Sie Ihrer Familie gegenüber eine Pflicht haben?“",
              "„Sie sollten sich ein neues Hobby suchen, das hilft bestimmt.“",
              "„Warum machen Sie sich so viele unnötige Sorgen?“",
              "„Was war Ihnen in Ihrem Leben bisher so wichtig, dass Sie dafür auch Mühe in Kauf genommen haben?“"
            ],
            richtig: 3,
            erklaerung: "Die letzte Frage ist offen und lädt zur Entdeckung eigener Werte ein. Die erste ist suggestiv und moralisierend, die zweite ein Ratschlag, die dritte wertet die Sorgen der Person ab."
          },
          {
            typ: "text",
            titel: "Ein bekanntes Beispiel – und seine Grenzen",
            text: "Frankl schilderte ein vielzitiertes Beispiel: Ein älterer Arzt suchte ihn auf, weil er den Tod seiner Frau nicht verwinden konnte. Frankl fragte ihn, was geschehen wäre, wenn er zuerst gestorben wäre und seine Frau ihn hätte überleben müssen. Der Mann antwortete, für sie wäre das furchtbar gewesen. Frankl wies ihn darauf hin, dass ihr dieses Leid erspart geblieben sei – um den Preis, dass nun er trauere. Nach Frankls Darstellung konnte der Mann seinem Schmerz dadurch einen Sinn abgewinnen.\n\nDas Beispiel zeigt, wie eine einzige Frage eine neue Perspektive eröffnen kann. Es darf aber nicht als Muster für eine schnelle Lösung missverstanden werden:\n\n- Frankl berichtet es stark verdichtet; tatsächliche Trauerbegleitung braucht in der Regel Zeit.\n- Die Perspektive ergab sich aus den Werten des Mannes selbst – aus seiner Liebe zu seiner Frau.\n- Dieselbe Frage könnte bei einem anderen Menschen verletzend wirken.\n\nDer Sokratische Dialog ist also kein „Trick“, sondern lebt davon, dass die Fragen an die Werte und die Geschichte einer konkreten Person anknüpfen."
          },
          {
            typ: "dialog",
            titel: "Übung: Ein Sokratischer Dialog",
            einleitung: "Konstruierte Situation: Jonas, 24 Jahre, hat sein Studium vor zwei Monaten abgebrochen. Er kommt in eine psychosoziale Beratungsstelle, weil er sich „wie ein Versager“ fühlt. Akute Gefährdung ist abgeklärt. Wählen Sie jeweils die Antwort, die dem Sokratischen Dialog am besten entspricht.",
            runden: [
              {
                klient: "Ich habe einfach alles hingeschmissen. Jetzt hat sowieso nichts mehr einen Sinn.",
                antworten: [
                  { text: "Das klingt, als würde Sie das gerade sehr belasten. Mögen Sie erzählen, wie es zu dem Abbruch kam?", gut: true, feedback: "Gut. Sie würdigen die Belastung und laden zum Erzählen ein, bevor Sie nach Sinn fragen. So entsteht eine tragfähige Gesprächsgrundlage." },
                  { text: "Aber nein, Sie sind doch noch jung, da hat das Leben noch viel Sinn für Sie!", gut: false, feedback: "Gut gemeint, aber diese Antwort widerspricht dem Erleben von Jonas, ohne es zu verstehen. Sinn lässt sich nicht von außen zusprechen." },
                  { text: "Viele Menschen brechen ihr Studium ab, das ist ganz normal.", gut: false, feedback: "Die Normalisierung kann entlasten, übergeht hier aber Jonas’ persönliches Erleben. Zunächst ist Verstehen wichtiger als Relativieren." }
                ]
              },
              {
                klient: "Ich habe Maschinenbau studiert, weil mein Vater Ingenieur ist. Ich habe mich jeden Morgen gequält. Irgendwann ging es nicht mehr.",
                antworten: [
                  { text: "Dann sollten Sie mit Ihrem Vater ein klärendes Gespräch führen.", gut: false, feedback: "Ein vorschneller Ratschlag. Er lenkt vom eigentlichen Thema ab: Was ist Jonas selbst wichtig?" },
                  { text: "Sie haben sich also lange gegen etwas gezwungen, das nicht Ihres war. Was hat Sie dabei so lange durchhalten lassen?", gut: true, feedback: "Gut. Sie spiegeln das Erleben und fragen nach dem, was Jonas getragen hat. Darin können Werte sichtbar werden, etwa Loyalität oder Ausdauer." },
                  { text: "Warum haben Sie nicht früher gemerkt, dass das nichts für Sie ist?", gut: false, feedback: "Die Warum-Frage wirkt vorwurfsvoll und verstärkt das Gefühl des Versagens." }
                ]
              },
              {
                klient: "Ich wollte meinen Vater nicht enttäuschen. Er hat so viel für mich getan.",
                antworten: [
                  { text: "Da haben Sie sich aber von Ihrem Vater ziemlich unter Druck setzen lassen.", gut: false, feedback: "Diese Deutung wertet ab und unterstellt Schwäche. Sie übersieht den Wert, der in Jonas’ Rücksicht liegt." },
                  { text: "Das ist verständlich. Trotzdem müssen Sie jetzt an sich denken.", gut: false, feedback: "Der Appell ist zu schnell und stellt Selbstbezug als Lösung dar. Er nutzt nicht, was Jonas wichtig ist." },
                  { text: "Es ist Ihnen also wichtig, Menschen, die Ihnen nahestehen, nicht zu enttäuschen. Wo sonst in Ihrem Leben spielt dieser Wert eine Rolle?", gut: true, feedback: "Gut. Sie benennen einen Wert, der in seiner Aussage steckt, und laden ein, ihn über die Situation hinaus zu betrachten. Das öffnet den Blick für Ressourcen." }
                ]
              },
              {
                klient: "Hm. Eigentlich bei meinen Freunden. Und früher habe ich in einer Jugendgruppe mitgeholfen. Das war das Einzige, wo ich mich richtig gut gefühlt habe.",
                antworten: [
                  { text: "Was genau hat diese Arbeit in der Jugendgruppe für Sie so wertvoll gemacht?", gut: true, feedback: "Gut. Sie konkretisieren eine erlebte Sinnerfahrung, ohne voreilig einen Berufsweg vorzuschlagen. Jonas kann selbst entdecken, was ihn anspricht." },
                  { text: "Dann ist doch klar: Sie sollten Sozialpädagogik studieren!", gut: false, feedback: "Die Schlussfolgerung kommt von der Beraterin, nicht von Jonas. Das wäre der Maler, nicht der Augenarzt." },
                  { text: "Schön, aber damit kann man ja kein Geld verdienen.", gut: false, feedback: "Die Antwort entwertet eine wichtige Sinnerfahrung und schließt eine Möglichkeit vorschnell aus." }
                ]
              }
            ]
          },
          {
            typ: "kategorien",
            frage: "Entspricht die Gesprächsäußerung dem Sokratischen Dialog oder eher nicht?",
            kategorien: ["Sokratisch", "Nicht sokratisch"],
            elemente: [
              { text: "„Was würde Ihnen in dieser Lage wirklich am Herzen liegen?“", kat: 0 },
              { text: "„An Ihrer Stelle würde ich sofort kündigen.“", kat: 1 },
              { text: "„Wann haben Sie sich zuletzt gebraucht gefühlt?“", kat: 0 },
              { text: "„Sie müssen das Positive sehen.“", kat: 1 },
              { text: "„Was liegt trotz allem noch in Ihrer Hand?“", kat: 0 },
              { text: "„Geben Sie doch zu, dass Sie eigentlich Angst haben.“", kat: 1 }
            ],
            erklaerung: "Sokratische Äußerungen sind offen und laden zur eigenen Entdeckung ein. Ratschläge, Appelle und suggestive Deutungen nehmen der Person die Antwort ab oder drängen sie in eine Richtung."
          },
          {
            typ: "truefalse",
            aussage: "Ziel des Sokratischen Dialogs ist es, die ratsuchende Person mit geschickten Fragen zu einer Einsicht zu führen, die die beratende Person schon vorher für richtig hält.",
            richtig: false,
            erklaerung: "Das wäre Manipulation. Im Sokratischen Dialog bleibt die Antwort offen; die beratende Person hilft, eigene Werte und Möglichkeiten zu entdecken."
          },
          {
            typ: "luecke",
            text: "Sokrates verglich seine Gesprächsführung mit der Kunst einer {{Hebamme|Richterin|Lehrerin}}. Frankl verglich den Logotherapeuten mit einem {{Augenarzt|Maler|Architekten}}.",
            erklaerung: "Maieutik bedeutet Hebammenkunst. Das Bild des Augenarztes betont, dass der Therapeut dem anderen hilft, selbst zu sehen."
          },
          {
            typ: "text",
            titel: "Grenzen und typische Fehler",
            text: "Auch im Sokratischen Dialog gibt es Fallstricke, auf die in der Fachliteratur immer wieder hingewiesen wird:\n\n- **Zu früh nach Sinn fragen:** Wer in akuter Trauer oder Verzweiflung sofort nach Sinn gefragt wird, kann sich unverstanden fühlen.\n- **Moralisieren:** Fragen, die eine bestimmte Antwort nahelegen („Sollten Sie nicht …?“), schwächen die Eigenverantwortung.\n- **Intellektualisieren:** Ein Dialog über Sinn kann zur abstrakten Diskussion werden, die das Erleben ausblendet.\n- **Überforderung:** Bei schweren psychischen Erkrankungen, akuter Suizidalität oder kognitiven Einschränkungen reicht ein Gesprächsansatz allein nicht aus; dann sind andere, oft auch medizinische Hilfen nötig.\n\nIn Beratung und Therapie wird der Sokratische Dialog deshalb in eine sorgfältige Einschätzung der Situation eingebettet. Er ist eine wertvolle Gesprächshaltung – aber kein Ersatz für Diagnostik und für die Zusammenarbeit mit anderen Fachkräften."
          },
          {
            typ: "reflexion",
            frage: "Erinnern Sie sich an ein Gespräch, in dem Ihnen jemand durch eine Frage – nicht durch einen Rat – weitergeholfen hat. Was war das für eine Frage?",
            hinweis: "Was machte die Frage hilfreich? Der Zeitpunkt, die Person, die Offenheit? Und umgekehrt: Wann haben Sie Ratschläge eher als Last erlebt?"
          }
        ]
      },
      {
        id: "G3-2",
        titel: "Einstellungsmodulation",
        dauer: 22,
        schritte: [
          {
            typ: "text",
            titel: "Die Haltung verändern, wo die Lage bleibt",
            text: "Die **Einstellungsmodulation** knüpft unmittelbar an Frankls Begriff der Einstellungswerte an. Gemeint ist eine Veränderung der inneren Haltung einer Person – von einer Einstellung, die sie lähmt oder verbittert, zu einer Einstellung, die ihr Handlungs- und Sinnmöglichkeiten eröffnet.\n\nDer Begriff wurde vor allem durch **Elisabeth Lukas**, eine bekannte Schülerin Frankls, systematisch beschrieben. Frankl selbst hatte das Prinzip vielfach angewendet, etwa im Umgang mit Schwerkranken oder Trauernden.\n\nDie Einstellungsmodulation ist besonders dort angezeigt, wo ein Schicksal **unabänderlich** ist: eine chronische Krankheit, eine Behinderung, ein Verlust, eine endgültige Trennung. Sie kann aber auch bei veränderbaren Situationen hilfreich sein, wenn eine bestimmte Haltung – etwa Resignation, Selbstmitleid oder Groll – den Menschen daran hindert, seine Spielräume zu nutzen.\n\nWichtig: Die Einstellungsmodulation zielt nicht darauf, etwas schönzureden. Sie arbeitet nicht mit der Frage „Ist das wirklich so schlimm?“, sondern mit der Frage „Wie möchte ich mich zu dem stellen, was so ist?“"
          },
          {
            typ: "text",
            titel: "Zuerst prüfen: Ist es veränderbar?",
            text: "Ein Grundsatz der Logotherapie lautet: **Was geändert werden kann, soll geändert werden.** Einstellungsmodulation ist kein Ersatz für Handeln. Deshalb steht am Anfang die sorgfältige Klärung:\n\n- Welche Aspekte der Situation sind tatsächlich **veränderbar**? Hier sind Handlung, Planung und gegebenenfalls Unterstützung gefragt.\n- Welche Aspekte sind **nicht veränderbar**? Hier ist die Frage nach der Haltung angebracht.\n\nIn der Praxis sind Situationen oft gemischt. Eine Person mit chronischen Schmerzen kann ihre Erkrankung nicht beseitigen, aber vielleicht ihre Behandlung, ihre Tagesstruktur und ihre sozialen Kontakte gestalten. Gleichzeitig kann sie eine Haltung zu dem entwickeln, was bleibt.\n\nDiese Unterscheidung schützt vor zwei Fehlern: vor einer **Passivität**, die Veränderbares als unabänderlich hinnimmt, und vor einem **Machbarkeitsglauben**, der das Unabänderliche nicht wahrhaben will. Frankl formulierte es so, dass vermeidbares Leid zu ertragen nicht heroisch, sondern masochistisch sei."
          },
          {
            typ: "kategorien",
            frage: "Konstruierte Situation: Eine Frau, 45, hat nach einem Unfall eine dauerhafte Gehbehinderung. Was ist eher veränderbar, was nicht?",
            kategorien: ["Eher veränderbar – Handeln gefragt", "Nicht veränderbar – Haltung gefragt"],
            elemente: [
              { text: "Die Tatsache, dass der Unfall geschehen ist", kat: 1 },
              { text: "Die Anpassung der Wohnung an die neue Situation", kat: 0 },
              { text: "Die dauerhafte Einschränkung der Gehfähigkeit", kat: 1 },
              { text: "Die Suche nach einer passenden beruflichen Tätigkeit", kat: 0 },
              { text: "Der Kontakt zu einer Selbsthilfegruppe", kat: 0 },
              { text: "Der Verlust bestimmter früherer Freizeitaktivitäten wie Bergwandern", kat: 1 }
            ],
            erklaerung: "Vergangenes Geschehen und die dauerhafte Einschränkung sind unabänderlich – hier geht es um Haltung. Wohnung, Beruf und soziale Unterstützung lassen sich gestalten. Einstellungsmodulation und Handeln ergänzen sich."
          },
          {
            typ: "text",
            titel: "Wie Einstellungsmodulation vorgeht",
            text: "In der Literatur werden für die Einstellungsmodulation keine starren Schritte vorgeschrieben. Typisch ist aber ein Vorgehen, das sich in etwa so beschreiben lässt:\n\n- **Anerkennen:** Das Leid und die Gefühle der Person werden ernst genommen. Ohne diese Grundlage wirkt jeder Hinweis auf eine andere Haltung wie eine Abwertung.\n- **Die bisherige Einstellung erkunden:** Wie sieht die Person ihre Lage? Welche Sätze sagt sie sich selbst? („Mein Leben ist vorbei.“ – „Ich bin nur noch eine Last.“)\n- **Folgen betrachten:** Wohin führt diese Haltung? Was verhindert sie?\n- **Alternative Haltungen erkunden:** Welche andere Haltung wäre möglich, die zu den eigenen Werten passt? Oft helfen Fragen nach Vorbildern, nach früheren Bewältigungserfahrungen oder nach dem, was der Person trotz allem wichtig ist.\n- **Entscheiden und erproben:** Die Person wählt selbst, welche Haltung sie einnehmen möchte, und erprobt sie im Alltag.\n\nDer Sokratische Dialog ist dabei die tragende Gesprächsform. Die neue Haltung wird nicht vorgegeben, sondern gemeinsam entdeckt."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die typischen Elemente der Einstellungsmodulation in eine sinnvolle Abfolge.",
            elemente: [
              "Leid und Gefühle anerkennen",
              "Die bisherige Einstellung erkunden",
              "Die Folgen dieser Einstellung betrachten",
              "Alternative, wertorientierte Haltungen erkunden",
              "Eine Haltung wählen und im Alltag erproben"
            ],
            erklaerung: "Ohne Anerkennung des Leids fehlt die Grundlage. Danach wird die bisherige Haltung verstanden, ihre Wirkung betrachtet, nach Alternativen gesucht und schließlich eine eigene Wahl getroffen. In der Praxis verläuft dies nicht immer linear."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie den ungünstigen Einstellungen jeweils eine mögliche alternative Haltung zu, wie sie sich in einem Gespräch ergeben könnte.",
            paare: [
              ["„Seit der Diagnose ist mein Leben wertlos.“", "„Mein Leben ist anders geworden, aber was mir wichtig ist, kann ich weiter leben.“"],
              ["„Ich bin für meine Familie nur noch eine Last.“", "„Ich kann meiner Familie immer noch etwas geben – Zeit, Zuwendung, Erfahrung.“"],
              ["„Nach der Trennung werde ich nie wieder jemandem vertrauen.“", "„Ich will vorsichtig sein, mir aber die Möglichkeit von Nähe nicht verschließen.“"],
              ["„Wegen meines Fehlers ist alles verloren.“", "„Ich kann Verantwortung übernehmen und daraus etwas lernen.“"]
            ],
            erklaerung: "Die alternativen Haltungen leugnen die Realität nicht, sondern öffnen Spielräume. Wichtig: In der Praxis werden sie nicht vorgegeben, sondern von der Person selbst gefunden."
          },
          {
            typ: "merke",
            text: "Einstellungsmodulation fragt nicht „Ist es wirklich so schlimm?“, sondern „Wie möchte ich mich zu dem stellen, was so ist?“ Was geändert werden kann, soll zuerst geändert werden."
          },
          {
            typ: "text",
            titel: "Abgrenzung zur kognitiven Umstrukturierung",
            text: "Die Einstellungsmodulation erinnert an Methoden der **kognitiven Verhaltenstherapie**, insbesondere an die **kognitive Umstrukturierung**, wie sie etwa Aaron T. Beck und Albert Ellis entwickelt haben. Beide Ansätze gehen davon aus, dass nicht nur Ereignisse selbst, sondern auch ihre Bewertung unser Erleben beeinflussen.\n\nEs gibt aber unterschiedliche Schwerpunkte:\n\n- Die kognitive Umstrukturierung prüft Gedanken häufig auf ihre **Angemessenheit und Nützlichkeit**: Stimmt das? Welche Belege gibt es? Gibt es eine realistischere Sicht?\n- Die Einstellungsmodulation fragt vor allem nach **Werten und Sinn**: Welche Haltung entspricht dem, was mir wichtig ist? Wofür möchte ich mich in dieser Lage entscheiden?\n\nIn der Praxis überschneiden sich beide Ansätze erheblich, und manche Vertreterinnen und Vertreter sehen sie als einander ergänzend. Die neuere **Akzeptanz- und Commitment-Therapie** (ACT) steht der Logotherapie in ihrer Betonung von Werten und Akzeptanz des Unabänderlichen in manchen Punkten besonders nahe, auch wenn sie aus einer anderen Theorietradition stammt."
          },
          {
            typ: "mc",
            frage: "Worin liegt der Schwerpunkt der Einstellungsmodulation im Vergleich zur klassischen kognitiven Umstrukturierung?",
            optionen: [
              "Sie prüft Gedanken vor allem auf ihren Wahrheitsgehalt und ihre Belege.",
              "Sie verzichtet auf jede Auseinandersetzung mit Gedanken und Bewertungen.",
              "Sie richtet die Haltung vor allem an Werten und Sinnmöglichkeiten aus.",
              "Sie versucht, Gefühle durch Entspannungsübungen zu verändern."
            ],
            richtig: 2,
            erklaerung: "Die Einstellungsmodulation fragt vor allem, welche Haltung zu den Werten der Person passt. Die Prüfung von Belegen ist typisch für die kognitive Umstrukturierung. Bewertungen spielen durchaus eine Rolle, und Entspannung ist kein Kernelement."
          },
          {
            typ: "fall",
            titel: "Herr R. und die Diagnose",
            fall: "Konstruierte Lehrvignette: Herr R., 58 Jahre, hat vor einem halben Jahr die Diagnose Parkinson erhalten. Er ist medizinisch gut versorgt. In der Beratung sagt er: „Ich war immer der, der alles geregelt hat. Jetzt zittern meine Hände. Ich will nicht, dass meine Enkel mich so sehen. Am liebsten würde ich mich zurückziehen.“",
            frage: "Welche Vorgehensweise entspricht einer Einstellungsmodulation am besten?",
            optionen: [
              "Die Beraterin versichert ihm, die Krankheit sei bestimmt nicht so schlimm, wie er denkt.",
              "Die Beraterin rät ihm, sich zurückzuziehen, um sich zu schonen.",
              "Die Beraterin erklärt ihm, dass ein Rückzug egoistisch gegenüber seiner Familie wäre.",
              "Die Beraterin würdigt seinen Schmerz, erkundet, was ihm an der Beziehung zu den Enkeln wichtig ist, und fragt, was er ihnen trotz der Krankheit geben möchte."
            ],
            richtig: 3,
            erklaerung: "Die letzte Option erkennt das Leid an, knüpft an seine Werte an und öffnet den Blick für Einstellungs- und Erlebniswerte. Beschwichtigen leugnet die Realität, der Rat zum Rückzug verstärkt die ungünstige Haltung, und der Vorwurf des Egoismus moralisiert."
          },
          {
            typ: "truefalse",
            aussage: "Einstellungsmodulation ist auch dann die Methode der Wahl, wenn eine belastende Situation durch einfaches Handeln verändert werden könnte.",
            richtig: false,
            erklaerung: "Was veränderbar ist, soll verändert werden. Einstellungsmodulation ist vor allem für Unabänderliches gedacht oder für Haltungen, die das Handeln blockieren – sie ersetzt das Handeln nicht."
          },
          {
            typ: "reflexion",
            frage: "Gibt es eine Haltung, die Sie gegenüber einer schwierigen Lebenssituation eingenommen haben und die Ihnen heute eher schadet als nützt?",
            hinweis: "Formulieren Sie die Haltung als Satz, den Sie sich selbst sagen. Fragen Sie dann: Was ist mir in dieser Situation eigentlich wichtig? Welche Haltung würde dem besser entsprechen?"
          }
        ]
      },
      {
        id: "G3-3",
        titel: "Paradoxe Intention und Dereflexion",
        dauer: 24,
        schritte: [
          {
            typ: "text",
            titel: "Der Teufelskreis der Erwartungsangst",
            text: "Die **Paradoxe Intention** ist die wohl bekannteste Technik der Logotherapie. Frankl hat sie nach eigenen Angaben bereits ab den späten 1920er-Jahren erprobt und 1939 erstmals in einer Fachzeitschrift beschrieben.\n\nAusgangspunkt ist ein Phänomen, das Frankl **Erwartungsangst** nannte. Ein Beispiel: Jemand errötet einmal in einer peinlichen Situation. Beim nächsten Mal fürchtet er, wieder zu erröten. Gerade diese Furcht erhöht die innere Anspannung und macht das Erröten wahrscheinlicher. Tritt es ein, bestätigt das die Befürchtung – und die Angst wächst weiter.\n\nEs entsteht ein **Teufelskreis**: Symptom → Erwartungsangst → Verstärkung des Symptoms → noch stärkere Erwartungsangst.\n\nTypische Reaktionen auf diesen Kreislauf sind **Flucht** (Vermeidung der gefürchteten Situationen) oder **Kampf** (krampfhaftes Unterdrücken des Symptoms). Beides hält den Kreislauf nach Frankl aufrecht: Vermeidung bestätigt die Gefahr, und krampfhaftes Bekämpfen ist selbst eine Form der Hyperintention. Ähnliche Teufelskreise beschreibt auch die heutige Verhaltenstherapie bei Angststörungen."
          },
          {
            typ: "reihenfolge",
            frage: "Bringen Sie die Glieder des Teufelskreises der Erwartungsangst in die richtige Reihenfolge.",
            elemente: [
              "Ein Symptom tritt auf (z. B. Herzklopfen bei einem Vortrag).",
              "Die Person befürchtet, dass es wieder auftritt.",
              "Die Befürchtung erhöht die Anspannung in der nächsten Situation.",
              "Das Symptom tritt verstärkt auf.",
              "Die Befürchtung wird bestätigt und wächst weiter."
            ],
            erklaerung: "Symptom und Erwartungsangst verstärken sich gegenseitig. Die Paradoxe Intention setzt an der Erwartungsangst an."
          },
          {
            typ: "text",
            titel: "Wie die Paradoxe Intention wirkt",
            text: "Die Paradoxe Intention durchbricht den Teufelskreis, indem die Person das, was sie fürchtet, **absichtlich herbeiwünscht** – meist in humorvoll übertriebener Form. Statt „Hoffentlich zittere ich nicht“ nimmt sie sich vor: „Heute zeige ich allen, wie großartig ich zittern kann – das wird das beste Zittern der Saison!“\n\nFrankl berichtet von einem Patienten, der unter starker Angst vor dem Schwitzen litt. Er riet ihm, sich vorzunehmen, den Menschen einmal zu zeigen, wie viel er schwitzen könne. Nach Frankls Darstellung ließ die Angst daraufhin deutlich nach.\n\nDer Wirkmechanismus liegt nach Frankl in der **Selbstdistanzierung**: Durch die Übertreibung und den Humor tritt die Person gleichsam neben ihre Angst. Die Angst verliert ihren bedrohlichen Charakter, weil man sich das Gefürchtete nicht gleichzeitig wünschen und davor fürchten kann.\n\n**Humor** ist dabei kein Beiwerk, sondern zentral. Er darf aber niemals ein Auslachen der Person sein. Die Technik setzt eine vertrauensvolle Beziehung und eine gründliche Klärung der Symptomatik voraus und wird in der Psychotherapie unter fachlicher Anleitung eingesetzt."
          },
          {
            typ: "mc",
            frage: "Worin sah Frankl den wesentlichen Wirkmechanismus der Paradoxen Intention?",
            optionen: [
              "In der Selbstdistanzierung, die durch humorvolle Übertreibung des Gefürchteten entsteht.",
              "In der vollständigen Vermeidung angstauslösender Situationen.",
              "In der Aufdeckung verdrängter Kindheitskonflikte.",
              "In der Gewöhnung an das Symptom durch Medikamente."
            ],
            richtig: 0,
            erklaerung: "Die humorvolle Übertreibung ermöglicht Selbstdistanzierung und entzieht der Erwartungsangst den Boden. Vermeidung hält den Teufelskreis aufrecht; Aufdeckung von Kindheitskonflikten und Medikamente gehören nicht zum Wirkprinzip der Methode."
          },
          {
            typ: "text",
            titel: "Wann ja, wann nein?",
            text: "Als **Anwendungsgebiete** der Paradoxen Intention nannte Frankl vor allem Störungen, bei denen die Erwartungsangst eine zentrale Rolle spielt:\n\n- Ängste und Phobien, etwa Angst vor dem Erröten, Zittern oder Schwitzen\n- bestimmte Zwangsphänomene\n- Schlafstörungen, die durch das krampfhafte Bemühen um Schlaf verstärkt werden\n- Funktionsstörungen, die durch ängstliche Selbstbeobachtung aufrechterhalten werden\n\nAls **Kontraindikationen** gelten insbesondere:\n\n- schwere Depressionen, besonders bei Suizidgedanken – ein paradoxes Herbeiwünschen wäre hier gefährlich\n- psychotische Erkrankungen\n- Situationen, in denen eine reale Gefahr besteht\n\nDie Paradoxe Intention ist keine Selbsthilfetechnik für jede Lebenslage. Bei ausgeprägten Angst- oder Zwangsstörungen gehört die Behandlung in fachkundige Hände. Heute werden ähnliche Prinzipien in der Verhaltenstherapie im Rahmen von Expositionsverfahren genutzt, bei denen sich Menschen gezielt dem Gefürchteten aussetzen, statt es zu vermeiden."
          },
          {
            typ: "multi",
            frage: "Bei welchen der folgenden Situationen wäre die Paradoxe Intention kontraindiziert? Wählen Sie alle zutreffenden aus.",
            optionen: [
              "Schwere Depression mit Suizidgedanken",
              "Angst vor dem Erröten in Gesprächen",
              "Akute psychotische Symptomatik",
              "Einschlafprobleme durch krampfhaftes Bemühen um Schlaf",
              "Angst, die auf eine reale Bedrohung reagiert"
            ],
            richtig: [0, 2, 4],
            erklaerung: "Bei schwerer Depression mit Suizidgedanken, bei Psychosen und bei realer Gefahr ist die Paradoxe Intention nicht angebracht. Erythrophobie und angstverstärkte Einschlafprobleme gehören dagegen zu ihren klassischen Anwendungsfeldern."
          },
          {
            typ: "text",
            titel: "Dereflexion: den Blick vom Problem lösen",
            text: "Die **Dereflexion** richtet sich gegen die **Hyperreflexion**, also gegen die übermäßige Selbstbeobachtung. Manche Vorgänge funktionieren nur, solange man sie nicht genau beobachtet: Einschlafen, Konzentration, flüssiges Sprechen, sexuelles Erleben. Wer sich beim Einschlafen ständig fragt, ob er schon müde genug ist, bleibt wach.\n\nDie Dereflexion besteht darin, die Aufmerksamkeit vom Symptom **weg** und auf etwas Sinnvolles **hin** zu lenken. Frankl betonte, dass bloßes Ignorieren nicht genügt. Wer sich vornimmt, nicht an das Problem zu denken, denkt gerade daran. Entscheidend ist die positive Zuwendung zu einer Aufgabe, einem Menschen oder einem Erleben.\n\nIn Frankls Beispielen aus dem Bereich sexueller Funktionsstörungen ging es etwa darum, den Leistungsdruck herauszunehmen und die Aufmerksamkeit auf die Partnerin oder den Partner zu richten statt auf die eigene Funktionsfähigkeit.\n\nDie Dereflexion beruht auf der Fähigkeit zur **Selbsttranszendenz**. Paradoxe Intention und Dereflexion ergänzen sich: Die eine nutzt die Selbstdistanzierung gegen die Hyperintention, die andere die Selbsttranszendenz gegen die Hyperreflexion."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie zu, was zusammengehört.",
            paare: [
              ["Paradoxe Intention", "Wirkt gegen Hyperintention und Erwartungsangst"],
              ["Dereflexion", "Wirkt gegen Hyperreflexion"],
              ["Selbstdistanzierung", "Geistige Fähigkeit, auf der die Paradoxe Intention beruht"],
              ["Selbsttranszendenz", "Geistige Fähigkeit, auf der die Dereflexion beruht"],
              ["Erwartungsangst", "Furcht vor der Wiederkehr eines Symptoms"]
            ],
            erklaerung: "Die beiden Methoden nutzen jeweils eine der beiden geistigen Grundfähigkeiten des Menschen und richten sich gegen unterschiedliche Fehlhaltungen."
          },
          {
            typ: "merke",
            text: "Paradoxe Intention: das Gefürchtete humorvoll herbeiwünschen, um Abstand zur Angst zu gewinnen. Dereflexion: den Blick vom Symptom lösen und einer sinnvollen Sache zuwenden."
          },
          {
            typ: "fall",
            titel: "Frau S. und die schlaflosen Nächte",
            fall: "Konstruierte Lehrvignette: Frau S., 38 Jahre, schläft seit einigen Wochen schlecht ein. Eine ärztliche Abklärung ergab keine organische Ursache, eine Depression wurde ausgeschlossen. Sie berichtet: „Ich liege im Bett und denke nur: Ich muss jetzt schlafen, sonst bin ich morgen nicht fit. Ich schaue ständig auf die Uhr.“",
            frage: "Welches logotherapeutische Vorgehen liegt hier besonders nahe?",
            optionen: [
              "Frau S. sollte sich noch stärker auf das Einschlafen konzentrieren und es mit aller Kraft versuchen.",
              "Ein Ansatz im Sinne der Paradoxen Intention und Dereflexion: den Druck herausnehmen, etwa durch den Vorsatz, bewusst wach zu bleiben, und die Aufmerksamkeit von der Uhr weg auf etwas Angenehmes oder Sinnvolles lenken.",
              "Frau S. sollte vor allem die Bedeutung ihrer Träume analysieren.",
              "Da keine organische Ursache vorliegt, ist keine Unterstützung nötig."
            ],
            richtig: 1,
            erklaerung: "Frau S. zeigt typische Hyperintention (krampfhaftes Schlafenwollen) und Hyperreflexion (ständiges Beobachten). Paradoxe Intention und Dereflexion setzen genau hier an. Mehr Anstrengung verschärft das Problem, Traumdeutung ist kein logotherapeutischer Ansatz, und das Leiden verdient Unterstützung, auch ohne organische Ursache."
          },
          {
            typ: "truefalse",
            aussage: "Nach Frankl reicht es für eine Dereflexion aus, sich fest vorzunehmen, nicht mehr an das Symptom zu denken.",
            richtig: false,
            erklaerung: "Der bloße Vorsatz, nicht daran zu denken, lenkt die Aufmerksamkeit gerade auf das Symptom. Dereflexion braucht die positive Zuwendung zu etwas anderem, Sinnvollem."
          },
          {
            typ: "reflexion",
            frage: "Gibt es in Ihrem Leben einen Bereich, in dem Sie etwas zu sehr wollen oder sich zu sehr beobachten – und es gerade deshalb schwerer wird?",
            hinweis: "Denken Sie etwa an Prüfungen, Gespräche, Schlaf oder Kreativität. Worauf könnten Sie Ihre Aufmerksamkeit stattdessen richten? Hinweis: Bei ausgeprägten Ängsten oder Schlafstörungen ist fachliche Unterstützung sinnvoll."
          }
        ]
      },
      {
        id: "G3-4",
        titel: "Logotherapie heute: Vergleich, Forschungsstand und Grenzen",
        dauer: 24,
        schritte: [
          {
            typ: "text",
            titel: "Verbreitung und Weiterentwicklung",
            text: "Seit Frankls Tod hat sich die Logotherapie in viele Richtungen weiterentwickelt. Weltweit gibt es Institute, Fachgesellschaften und Ausbildungsangebote. Neben Psychotherapie im engeren Sinn wird sie in **Beratung, Seelsorge, Pädagogik, Pflege, Palliativversorgung, Coaching und Sozialer Arbeit** angewendet.\n\nInnerhalb der Tradition haben sich verschiedene Strömungen herausgebildet. **Elisabeth Lukas** hat die Logotherapie vor allem für Beratung und Familienarbeit praxisnah ausgearbeitet. **Alfred Längle** und die Gesellschaft für Logotherapie und Existenzanalyse (GLE) haben die **Existenzanalyse** zu einem eigenständigen Psychotherapieverfahren weiterentwickelt, das sich in wichtigen Punkten von Frankl unterscheidet, etwa durch eine stärkere Betonung von Gefühlen und Grundmotivationen.\n\nZur rechtlichen Stellung: In **Österreich** sind Existenzanalyse sowie Existenzanalyse und Logotherapie als psychotherapeutische Methoden staatlich anerkannt. In **Deutschland** zählt die Logotherapie nicht zu den sozialrechtlich anerkannten Richtlinienverfahren. Psychotherapie als Heilkunde dürfen dort nur Personen mit entsprechender Erlaubnis ausüben. Logotherapeutisch orientierte Beratung ohne eine solche Erlaubnis muss sich daher auf nicht-heilkundliche Beratung beschränken."
          },
          {
            typ: "text",
            titel: "Im Vergleich: Psychoanalyse und humanistische Verfahren",
            text: "Ein Vergleich mit anderen Verfahren hilft, das Profil der Logotherapie zu erkennen. Dabei geht es um Schwerpunkte, nicht um Wertungen.\n\n**Psychoanalyse und psychodynamische Verfahren** fragen vor allem nach unbewussten Konflikten und ihrer Entstehung in der Lebensgeschichte. Die Logotherapie richtet den Blick stärker auf die Zukunft und auf Sinnmöglichkeiten. Frankl sprach von einer Ergänzung: Neben der Frage „Woher?“ steht die Frage „Wozu?“. Neuere psychodynamische Ansätze haben ihrerseits Sinn- und Wertfragen stärker aufgenommen.\n\n**Humanistische Verfahren** wie die klientenzentrierte Gesprächspsychotherapie nach Carl Rogers teilen mit der Logotherapie das Vertrauen in die Person und die Bedeutung einer wertschätzenden Beziehung. Ein Unterschied liegt im Konzept der **Selbstverwirklichung**: Bei Rogers ist sie eine zentrale Wachstumstendenz, bei Frankl eine Nebenwirkung der Selbsttranszendenz.\n\nVerwandt ist die Logotherapie mit anderen **existenziellen Ansätzen**, etwa von Irvin Yalom oder Rollo May, die ebenfalls Themen wie Freiheit, Tod, Isolation und Sinnlosigkeit behandeln."
          },
          {
            typ: "text",
            titel: "Im Vergleich: Verhaltenstherapie und neuere Ansätze",
            text: "Zur **Verhaltenstherapie** gibt es bemerkenswerte Berührungspunkte. Die Paradoxe Intention wurde von Verhaltenstherapeuten aufgegriffen und in kontrollierten Studien untersucht. Ihr Prinzip – sich dem Gefürchteten zuzuwenden statt es zu vermeiden – ähnelt Expositionsverfahren. Auch die Einstellungsmodulation hat Parallelen zur kognitiven Umstrukturierung.\n\nBesonders auffällig sind die Parallelen zur **Akzeptanz- und Commitment-Therapie** (ACT): Werteorientierung, Akzeptanz des Unabänderlichen und der Abstand zu eigenen Gedanken erinnern an Frankls Begriffe Wertverwirklichung, Einstellungswerte und Selbstdistanzierung. ACT hat jedoch eine eigene, lerntheoretisch begründete Grundlage.\n\nIn der **Positiven Psychologie** und der empirischen Sinnforschung wird Lebenssinn heute intensiv untersucht. Der kanadische Psychologe Paul T. P. Wong hat einen ausdrücklich an Frankl anknüpfenden Ansatz entwickelt.\n\nIn der Psychoonkologie entwickelte William Breitbart mit seinem Team die **Meaning-Centered Psychotherapy**, ein strukturiertes, an Frankl orientiertes Programm für Menschen mit fortgeschrittener Krebserkrankung, das in randomisierten kontrollierten Studien untersucht wurde."
          },
          {
            typ: "zuordnen",
            frage: "Ordnen Sie den Verfahren jeweils einen typischen Schwerpunkt bzw. Berührungspunkt mit der Logotherapie zu.",
            paare: [
              ["Psychoanalyse", "Fragt vor allem nach dem „Woher“ unbewusster Konflikte"],
              ["Klientenzentrierte Psychotherapie", "Selbstverwirklichung als zentrale Wachstumstendenz"],
              ["Verhaltenstherapie", "Exposition als Parallele zur Paradoxen Intention"],
              ["Akzeptanz- und Commitment-Therapie", "Werteorientierung und Akzeptanz des Unabänderlichen"],
              ["Meaning-Centered Psychotherapy", "An Frankl orientiertes Programm für Menschen mit fortgeschrittener Krebserkrankung"]
            ],
            erklaerung: "Die Zuordnungen zeigen Schwerpunkte und Berührungspunkte. Sie sind Vereinfachungen; jedes Verfahren ist in sich vielfältiger."
          },
          {
            typ: "mc",
            frage: "Worin unterscheidet sich Frankls Sicht der Selbstverwirklichung von der Carl Rogers’?",
            optionen: [
              "Frankl lehnte jede Form persönlichen Wachstums ab.",
              "Für Rogers ist Selbstverwirklichung eine zentrale Wachstumstendenz, für Frankl eine Nebenwirkung der Hingabe an Sinn.",
              "Rogers hielt Selbstverwirklichung für unmöglich, Frankl für das höchste Ziel.",
              "Beide sahen Selbstverwirklichung ausschließlich als Ergebnis von Medikamenten."
            ],
            richtig: 1,
            erklaerung: "Rogers sah in der Aktualisierungstendenz eine zentrale Kraft. Frankl hielt Selbstverwirklichung für eine Nebenwirkung der Selbsttranszendenz. Persönliches Wachstum lehnte Frankl nicht ab."
          },
          {
            typ: "text",
            titel: "Was sagt die Forschung?",
            text: "Der Forschungsstand zur Logotherapie ist **uneinheitlich** und sollte nüchtern betrachtet werden:\n\n- **Paradoxe Intention:** Sie wurde vor allem in verhaltenstherapeutischen Studien untersucht, zum Beispiel von Ascher und Turner (1979) bei Einschlafstörungen. Eine Metaanalyse von Shoham-Salomon und Rosenthal (1987) zu paradoxen Interventionen fand insgesamt Hinweise auf Wirksamkeit, wobei die Studien sehr unterschiedlich waren.\n- **Sinnzentrierte Programme:** Für die Meaning-Centered Psychotherapy liegen randomisierte kontrollierte Studien vor, die Verbesserungen etwa im spirituellen Wohlbefinden und im Sinnerleben von Krebspatientinnen und -patienten zeigten. Eine Metaanalyse existenzieller Therapien (Vos, Craig und Cooper, 2015) fand Hinweise auf positive Effekte vor allem strukturierter, sinnzentrierter Ansätze.\n- **Klassische Logotherapie als Gesamtverfahren:** Hierzu gibt es vergleichsweise wenige methodisch hochwertige, kontrollierte Studien. Übersichtsarbeiten sprechen von vielversprechenden, aber methodisch heterogenen Befunden.\n\nZugleich ist die **empirische Sinnforschung** sehr aktiv. Zusammenhänge zwischen erlebtem Lebenssinn und psychischer Gesundheit sind gut dokumentiert, beruhen aber überwiegend auf Befragungsstudien, die keine sicheren Aussagen über Ursache und Wirkung erlauben."
          },
          {
            typ: "kategorien",
            frage: "Ordnen Sie die Aussagen ein: Wie gut ist die jeweilige Annahme empirisch gestützt?",
            kategorien: ["Empirisch vergleichsweise gut untersucht", "Wenig kontrollierte Studien", "Philosophische Grundannahme, empirisch kaum prüfbar"],
            elemente: [
              { text: "Paradoxe Intention bei Einschlafstörungen", kat: 0 },
              { text: "Meaning-Centered Psychotherapy bei fortgeschrittener Krebserkrankung", kat: 0 },
              { text: "Wirksamkeit der klassischen Logotherapie als Gesamtverfahren", kat: 1 },
              { text: "Die geistige Person kann nicht erkranken", kat: 2 },
              { text: "Der Mensch ist frei, zu seinen Bedingungen Stellung zu nehmen", kat: 2 },
              { text: "Zusammenhang zwischen erlebtem Sinn und Lebenszufriedenheit", kat: 0 },
              { text: "Langzeiteffekte logotherapeutischer Einzelberatung", kat: 1 }
            ],
            erklaerung: "Einzelne Techniken und strukturierte Programme sind vergleichsweise gut untersucht; Zusammenhangsbefunde zur Sinnforschung sind zahlreich, aber meist korrelativ. Das Gesamtverfahren und Langzeiteffekte sind weniger erforscht. Anthropologische Grundannahmen wie Willensfreiheit lassen sich empirisch kaum prüfen."
          },
          {
            typ: "text",
            titel: "Grenzen und Kritik",
            text: "Eine seriöse Auseinandersetzung mit der Logotherapie schließt ihre Grenzen ein. In der Fachdiskussion werden unter anderem folgende Punkte genannt:\n\n- **Philosophische Voraussetzungen:** Begriffe wie die noetische Dimension, die Freiheit des Willens oder ein objektiv in der Situation liegender Sinn sind weltanschauliche Setzungen, die nicht alle teilen.\n- **Gefahr des Moralisierens:** Wenn Sinn und Verantwortung betont werden, kann leicht ein Appellcharakter entstehen, der Betroffene unter Druck setzt oder ihnen implizit Schuld an ihrem Leid zuweist.\n- **Verkürzung auf Sinnfragen:** Nicht jedes psychische Problem ist ein Sinnproblem. Wer Depressionen, Traumafolgestörungen oder Psychosen vorwiegend als Sinnkrisen behandelt, kann notwendige Behandlung verzögern.\n- **Empirische Lücken:** Wie gezeigt, ist das Gesamtverfahren weniger gut untersucht als andere Psychotherapieverfahren.\n- **Biografische Debatten:** Historiker wie Timothy Pytell haben Aspekte von Frankls Selbstdarstellung und seiner Rolle in der NS-Zeit kritisch untersucht; diese Debatten werden kontrovers geführt.\n\nFrankl selbst verstand die Logotherapie nicht als Allheilmittel, sondern als **Ergänzung**. Diese Bescheidenheit ist auch heute eine gute Leitlinie."
          },
          {
            typ: "truefalse",
            aussage: "Die Wirksamkeit der klassischen Logotherapie als Gesamtverfahren ist durch zahlreiche große randomisierte Studien ebenso gut belegt wie die der kognitiven Verhaltenstherapie.",
            richtig: false,
            erklaerung: "Für das Gesamtverfahren gibt es vergleichsweise wenige methodisch hochwertige kontrollierte Studien. Besser untersucht sind einzelne Techniken wie die Paradoxe Intention und strukturierte sinnzentrierte Programme."
          },
          {
            typ: "multi",
            frage: "Welche der folgenden Punkte werden in der Fachdiskussion als Grenzen oder Risiken der Logotherapie genannt?",
            optionen: [
              "Die Gefahr, durch Betonung von Verantwortung zu moralisieren",
              "Die vollständige Ablehnung jeder Werteorientierung",
              "Weltanschauliche Voraussetzungen, die nicht alle Menschen teilen",
              "Die Gefahr, schwere psychische Erkrankungen als bloße Sinnkrisen zu verkennen",
              "Die ausschließliche Ausrichtung auf frühkindliche Konflikte"
            ],
            richtig: [0, 2, 3],
            erklaerung: "Moralisieren, weltanschauliche Voraussetzungen und die Verkennung schwerer Erkrankungen sind häufig genannte Kritikpunkte. Die Logotherapie lehnt Werteorientierung gerade nicht ab und richtet sich nicht ausschließlich auf frühkindliche Konflikte."
          },
          {
            typ: "karten",
            titel: "Lernkarten: Logotherapie heute",
            karten: [
              { vorne: "Existenzanalyse nach Längle", hinten: "Eigenständige Weiterentwicklung der Tradition durch Alfred Längle und die GLE, mit stärkerer Betonung von Gefühlen und Grundmotivationen." },
              { vorne: "Meaning-Centered Psychotherapy", hinten: "Von William Breitbart und Team entwickeltes, an Frankl orientiertes Programm für Menschen mit fortgeschrittener Krebserkrankung." },
              { vorne: "Ascher und Turner (1979)", hinten: "Kontrollierte Untersuchung der Paradoxen Intention bei Einschlafstörungen." },
              { vorne: "Rechtliche Stellung in Deutschland", hinten: "Kein Richtlinienverfahren; Psychotherapie als Heilkunde nur mit entsprechender Erlaubnis." },
              { vorne: "Rechtliche Stellung in Österreich", hinten: "Existenzanalyse sowie Existenzanalyse und Logotherapie sind als psychotherapeutische Methoden anerkannt." },
              { vorne: "Frankls Selbstverständnis", hinten: "Logotherapie als Ergänzung, nicht als Ersatz anderer Psychotherapie." }
            ]
          },
          {
            typ: "reflexion",
            frage: "Was hat Sie an der Logotherapie in diesem Grundkurs am meisten überzeugt – und wo haben Sie Zweifel oder offene Fragen?",
            hinweis: "Nehmen Sie beides ernst. Wo möchten Sie weiterlernen? Wie möchten Sie die Ideen in Ihrem privaten oder beruflichen Alltag nutzen – und wo sehen Sie für sich die Grenze zwischen Anregung und fachlicher Behandlung?"
          }
        ]
      }
    ],
    pruefung: [
      {
        typ: "mc",
        frage: "Was kennzeichnet den Sokratischen Dialog in der Logotherapie?",
        optionen: [
          "Die beratende Person erklärt der ratsuchenden Person, worin ihr Lebenssinn besteht.",
          "Durch offene Fragen wird die Person unterstützt, eigene Werte und Sinnmöglichkeiten zu entdecken.",
          "Die ratsuchende Person wird mit logischen Argumenten von ihren Fehlannahmen überzeugt.",
          "Das Gespräch dient vor allem der Deutung von Träumen."
        ],
        richtig: 1,
        erklaerung: "Der Sokratische Dialog ist eine Haltung offener, entdeckender Fragen. Sinn wird nicht vorgegeben."
      },
      {
        typ: "truefalse",
        aussage: "Die Einstellungsmodulation soll auch dort eingesetzt werden, wo sich eine Situation durch Handeln ändern ließe, damit die Person lernt, sie zu akzeptieren.",
        richtig: false,
        erklaerung: "Was veränderbar ist, soll verändert werden. Einstellungsmodulation zielt auf Unabänderliches oder auf Haltungen, die das Handeln blockieren."
      },
      {
        typ: "mc",
        frage: "Gegen welchen Mechanismus richtet sich die Paradoxe Intention in erster Linie?",
        optionen: ["Gegen die Erwartungsangst", "Gegen das existenzielle Vakuum", "Gegen die Selbsttranszendenz", "Gegen den Willen zum Sinn"],
        richtig: 0,
        erklaerung: "Die Paradoxe Intention durchbricht den Teufelskreis aus Symptom und Erwartungsangst."
      },
      {
        typ: "multi",
        frage: "Bei welchen Bedingungen gilt die Paradoxe Intention als kontraindiziert?",
        optionen: [
          "Schwere Depression mit Suizidalität",
          "Angst vor dem Erröten",
          "Psychotische Erkrankungen",
          "Angstverstärkte Einschlafstörungen"
        ],
        richtig: [0, 2],
        erklaerung: "Bei schwerer Depression mit Suizidalität und bei Psychosen ist die Methode nicht angezeigt. Erythrophobie und angstverstärkte Einschlafstörungen sind klassische Anwendungsfelder."
      },
      {
        typ: "mc",
        frage: "Auf welcher geistigen Fähigkeit beruht die Dereflexion?",
        optionen: ["Selbstdistanzierung", "Hyperreflexion", "Erwartungsangst", "Selbsttranszendenz"],
        richtig: 3,
        erklaerung: "Die Dereflexion lenkt die Aufmerksamkeit vom Symptom weg auf etwas Sinnvolles und beruht damit auf der Selbsttranszendenz. Die Paradoxe Intention beruht auf der Selbstdistanzierung."
      },
      {
        typ: "truefalse",
        aussage: "Frankl verglich den Logotherapeuten mit einem Augenarzt, der dem Patienten hilft, die Welt selbst klarer zu sehen, und nicht mit einem Maler, der ihm sein eigenes Weltbild zeigt.",
        richtig: true,
        erklaerung: "Das Bild verdeutlicht, dass Sinn nicht vorgegeben, sondern von der Person selbst entdeckt wird."
      },
      {
        typ: "mc",
        frage: "Welche Aussage beschreibt den Forschungsstand zur Logotherapie am zutreffendsten?",
        optionen: [
          "Die Logotherapie ist als Gesamtverfahren das am besten untersuchte Psychotherapieverfahren.",
          "Es gibt keinerlei empirische Studien zu logotherapeutischen Methoden.",
          "Einzelne Techniken und strukturierte sinnzentrierte Programme sind vergleichsweise gut untersucht, das Gesamtverfahren dagegen weniger.",
          "Die Wirksamkeit der Paradoxen Intention wurde in Studien eindeutig widerlegt."
        ],
        richtig: 2,
        erklaerung: "Die Paradoxe Intention und Programme wie die Meaning-Centered Psychotherapy wurden kontrolliert untersucht; für die klassische Logotherapie als Gesamtverfahren gibt es weniger hochwertige Studien."
      },
      {
        typ: "multi",
        frage: "Welche Parallelen bestehen zwischen Logotherapie und Akzeptanz- und Commitment-Therapie (ACT)?",
        optionen: [
          "Betonung von Werten",
          "Akzeptanz des Unabänderlichen",
          "Gemeinsame lerntheoretische Begründung durch Frankl",
          "Abstand zu eigenen Gedanken und Gefühlen",
          "Deutung unbewusster Kindheitskonflikte als Hauptmethode"
        ],
        richtig: [0, 1, 3],
        erklaerung: "Werteorientierung, Akzeptanz und Abstand zu inneren Zuständen (bei Frankl Selbstdistanzierung) verbinden beide Ansätze. ACT hat jedoch eine eigene, lerntheoretische Grundlage, die nicht auf Frankl zurückgeht, und arbeitet nicht mit der Deutung von Kindheitskonflikten."
      }
    ]
  }

]);
