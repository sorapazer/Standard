window.KURSE = [
  {
    id: "logo",
    kuerzel: "LOGO",
    titel: "Logotherapeutische Beratung und Begleitung",
    zertifikatTitel: "Logotherapeutische Beratung und Begleitung",
    art: "Zertifikatskurs",
    ue: 160,
    preis: 1490,
    raten: "oder 10 Monatsraten à 155 €",
    empfohleneDauer: "6 bis 9 Monate bei 4 bis 6 Stunden pro Woche",
    zielgruppe: "Fachkräfte aus Psychologie, Medizin, Sozialer Arbeit, Pädagogik, Pflege und Seelsorge",
    text: "Der Kurs vermittelt Theorie, Menschenbild und Methodik der Logotherapie nach Viktor E. Frankl und ihre Weiterentwicklungen. Sie lernen, Menschen in Sinn- und Lebenskrisen fachkundig zu begleiten, logotherapeutische Gesprächsführung sicher anzuwenden, die Forschungslage kritisch einzuordnen und die Grenzen der Beratung gegenüber der Heilbehandlung zu erkennen.",
    module: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"],
    pruefungFragen: 32,
    bestehen: 0.7
  },
  {
    id: "berater",
    kuerzel: "PB",
    titel: "Psychologische Beratung",
    zertifikatTitel: "Psychologische Beratung",
    art: "Zertifikatskurs",
    ue: 120,
    preis: 1190,
    raten: "oder 8 Monatsraten à 155 €",
    empfohleneDauer: "4 bis 6 Monate bei 4 bis 6 Stunden pro Woche",
    zielgruppe: "Fachkräfte aus sozialen, pädagogischen, pflegerischen und personalbezogenen Berufen",
    text: "Eine fundierte Qualifizierung für die Beratung von Menschen in Belastungs- und Entscheidungssituationen. Der Schwerpunkt liegt auf psychologischem Grundlagenwissen, evidenzbasierter Gesprächsführung, Krisenintervention und der sicheren Abgrenzung zur Psychotherapie.",
    module: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
    pruefungFragen: 32,
    bestehen: 0.7
  },
  {
    id: "grundkurs",
    kuerzel: "GK",
    titel: "Einführung in die Logotherapie",
    zertifikatTitel: "Einführung in die Logotherapie",
    art: "Grundkurs",
    ue: 24,
    preis: 290,
    raten: "",
    empfohleneDauer: "3 bis 6 Wochen bei 3 bis 4 Stunden pro Woche",
    zielgruppe: "Interessierte und Fachkräfte ohne Vorkenntnisse",
    text: "Ein kompakter, wissenschaftlich fundierter Einstieg in das Denken Viktor E. Frankls: Menschenbild, Sinn- und Wertlehre und die zentralen Methoden der Logotherapie. Der Grundkurs eignet sich auch, um eine Teilnahme am Zertifikatskurs zu prüfen.",
    module: ["G1", "G2", "G3"],
    pruefungFragen: 20,
    bestehen: 0.7
  }
];

/* Gutscheincodes: Groß- und Kleinschreibung wird ignoriert. rabatt 1 = kostenfrei. */
window.GUTSCHEINE = {
  "JESUS": { rabatt: 1, kurse: ["logo", "berater", "grundkurs"], text: "Gutschein für den kostenfreien Zugang" }
};
