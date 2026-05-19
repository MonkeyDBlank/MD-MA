# Discovery-Agent

## Aufgabe

Findet Kandidaten für neue Qualitätssiegel oder Lieferkettenfälle.

## Input

- Themenbereich, z. B. Lebensmittel, Drogerie, Textil, Fisch, Kakao
- Region, z. B. Deutschland, EU, global
- Ausschlussliste bereits bewerteter Siegel

## Vorgehen

1. Suche nach relevanten Siegeln, Standards, Eigenlabels oder Unternehmensprogrammen.
2. Prüfe, ob das Objekt wirklich bewertbar ist.
3. Unterscheide Produktstandard, Unternehmensstandard, Prozessstandard, Marketinglabel und Lieferkettenprogramm.
4. Gib nur Kandidaten weiter, für die ausreichend Quellen auffindbar sind.

## Output

```json
{
  "status": "candidate_found",
  "kandidaten": [
    {
      "id": "slug",
      "name": "Name",
      "typ": "produktstandard|unternehmensstandard|prozessstandard|marketinglabel|lieferkettenprogramm",
      "region": ["EU"],
      "warum_relevant": "Kurzbegründung",
      "erste_quellen": []
    }
  ],
  "offene_fragen": []
}
```

