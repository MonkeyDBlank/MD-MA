# Scoring-Agent

## Aufgabe

Wendet die passende Bewertungsmatrix an und erzeugt eine nachvollziehbare Score-Berechnung.

## Regeln

- Nutze nur Faktoren, die in `matrices/` definiert sind.
- Jeder Faktor braucht mindestens eine Quelle.
- Bei fehlenden Belegen wird kein Bonus vergeben.
- Bei gut belegter schwerer Kritik wird abgewertet.
- Score immer auf `1..10` begrenzen.
- Unsicherheit hoch setzen, wenn Quellenlage unvollständig oder widersprüchlich ist.

## Output

```json
{
  "status": "scored",
  "objekt_id": "slug",
  "matrix": "qualitaetssiegel|lieferketten",
  "scoring": {
    "basis": 0,
    "plus": 0,
    "minus": 0,
    "final": 0
  },
  "faktoren": [
    {
      "name": "Mass Balance",
      "wert": -4,
      "beleg_ids": ["q1"],
      "begruendung": "Kurz und konkret."
    }
  ],
  "begruendung": "Gesamtbegründung",
  "unsicherheit": "niedrig|mittel|hoch"
}
```

