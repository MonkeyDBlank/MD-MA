# JSON-Schemas

Arbeitsentwurf für die drei zentralen Datenpakete des Projekts.

## Qualitätssiegel

Datei: `data/processed/qualitaetssiegel.json`

Wichtig: `data/processed/` enthält nur finale JSONs für das App-Team. Interne Stati wie `draft`, `reviewed` oder `approved` gehören nicht in die finale Datei.

```json
{
  "version": "2026.1",
  "typ": "qualitaetssiegel",
  "eintraege": [
    {
      "id": "fairtrade",
      "name": "Fairtrade",
      "kategorie": "Hoher Standard / Fairer Handel",
      "region": ["global"],
      "typ_tags": ["fairtrade", "sozial"],
      "vertrauensniveau": "mittel",
      "scoring": {
        "basis": 7,
        "plus": 1,
        "minus": 4,
        "final": 4
      },
      "faktoren": [
        {
          "id": "externe-ngo-validierung",
          "name": "Externe NGO-Validierung",
          "wert": 1,
          "aussage_status": "belegt",
          "quelle_ids": ["q1"]
        },
        {
          "id": "mass-balance",
          "name": "Mass Balance",
          "wert": -4,
          "aussage_status": "belegt",
          "quelle_ids": ["q2"]
        }
      ],
      "begruendung": "Kurze Bewertungsbegründung.",
      "quellen": [],
      "unsicherheit": "mittel"
    }
  ]
}
```

## Lieferketten

Datei: `data/processed/lieferketten.json`

Wichtig: Die finale Datei enthält keine internen Review-Stati.

Aktueller Scope:

- `Nahrungsmittel`
- `Drogerieprodukte`

Bewertungseinheit ist nicht jedes Einzelprodukt, sondern:

`Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell`

```json
{
  "version": "2026.1",
  "typ": "lieferketten",
  "eintraege": [
    {
      "id": "rewe-fisch-eigenmarke",
      "unternehmen": "REWE Group",
      "marke": "REWE Eigenmarke",
      "warengruppe": "Fisch",
      "rohstoffe": ["Fisch"],
      "bewertungsebene": "unternehmen_warengruppe_rohstoff",
      "produktgenauigkeit": "warengruppe",
      "lieferkettenmodell": "chain_of_custody",
      "relevante_siegel": [
        {
          "id": "msc",
          "rolle": "Mindeststandard oder Vergleichsrahmen",
          "einordnung": "Erklaert, wie sich ein konkreter Lieferkettenfall zum generischen Siegelscore verhaelt."
        }
      ],
      "scoring": {
        "basis": 6,
        "plus": 1,
        "minus": 0,
        "final": 7
      },
      "risiken": [
        {
          "id": "beifang",
          "beschreibung": "Beifang und Überfischung sind relevante Risiken bei Wildfisch.",
          "aussage_status": "abgeleitet",
          "quelle_ids": ["q1"]
        }
      ],
      "unternehmensmassnahmen": [],
      "quellen": [],
      "unsicherheit": "mittel"
    }
  ]
}
```

## Glossar

Datei: `data/processed/glossar.json`

```json
{
  "version": "2026.1",
  "sprache": "de",
  "typ": "glossar",
  "begriffe": [
    {
      "id": "mass-balance",
      "begriff": "Mass Balance",
      "kurzdefinition": "Ein Bilanzierungsverfahren, bei dem zertifizierte und nicht-zertifizierte Rohstoffe rechnerisch verrechnet werden können.",
      "ausfuehrliche_erklaerung": "Bei Mass Balance müssen zertifizierte Rohstoffe nicht zwingend physisch getrennt verarbeitet werden.",
      "bewertungsrelevanz": "Mass Balance kann die Transparenz schwächen, weil der zertifizierte Rohstoff nicht zwingend physisch im Endprodukt enthalten ist.",
      "beispiel": "Ein Schokoriegel kann Fairtrade-Kakao ausweisen, obwohl der konkret enthaltene Kakao aus einem gemischten Rohstoffstrom stammt.",
      "kategorie": "Lieferkette & Rückverfolgbarkeit"
    }
  ]
}
```

## Zentrale Modellregel

Das Glossar ist eine separate dritte JSON-Datei. Siegel- und Lieferketteneinträge referenzieren Glossarbegriffe nicht zwingend. Neue Glossarbegriffe werden nur ergänzt, wenn sie in der Recherche relevant werden und für Bewertung oder Verständnis wichtig sind.

Für den aktuellen Projektstand werden nur Begriffe aufgenommen, die für Nahrungsmittel und Drogerieprodukte wirklich relevant sind.

## Interne Arbeitsdateien

Interne Arbeitsstände können in `data/drafts/` liegen und dort zusätzliche Felder wie `review_status`, `offene_fragen` oder `matrixentscheidung_noetig` enthalten. Diese Felder werden vor Übergabe an das App-Team entfernt.
