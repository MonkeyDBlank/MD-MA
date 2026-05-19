# Bewertungsmatrix Qualitätssiegel

Version: abgeleitet aus Notion `Bewertungsmatrix`, Stand 2026-05-12

## Score-Grenzen

- Mindestscore: `1`
- Maximalscore: `10`
- Formel: `final = clamp(basis + plus + minus, 1, 10)`

## Basis-Scores

| Kategorie | Startwert | Beispiele |
|---|---:|---|
| Premium-Öko & Sozial | 10 | Demeter, Naturland |
| Hoher Standard / Fairer Handel | 7 | GEPA, Fairtrade |
| Natur-/Biokosmetikstandard | 7 | COSMOS Organic, NATRUE |
| Sozial-/Arbeitsstandard | 7 | SA8000 |
| Umweltzeichen / Produktstandard | 7 | Blauer Engel, EU Ecolabel |
| Forst-/Rohstoffstandard mit CoC | 6 | FSC, PEFC, RSPO |
| Unternehmenszertifizierung / ESG-Impact-Standard | 4 | B Corp |
| Gesetzlicher Mindeststandard | 5 | EU-Bio |
| Industrie- & Prozessstandard | 2 | QS, GlobalG.A.P. |
| Eigenlabels / Marketing | 1 | Regionale Qualität, Haltungsform niedrig |

## Boni

| Faktor | Effekt | Beleganforderung |
|---|---:|---|
| Physische Rückverfolgbarkeit | +1 | Standarddokument oder verlässliche Chain-of-Custody-Beschreibung |
| Externe NGO-Validierung | +1 | NGO-Quelle mit positiver Einordnung, z. B. Greenpeace, Oxfam, Verbraucherzentrale |
| Existenzsichernde Löhne | +1 | Standard fordert und prüft Living Wage/Living Income oder belastbarer Programmnachweis |

## Abzüge

| Faktor | Effekt | Beleganforderung |
|---|---:|---|
| Mass Balance | -4 | Standard oder bewertete Produkt-/Rohstoffgruppe erlaubt rechnerische Bilanzierung ohne physische Trennung |
| Mangelnde Unabhängigkeit | -2 | industriegetragenes System, schwache Trennung von Standardgeber/Kontrolle/wirtschaftlichem Interesse |
| Schwere NGO-Kritik | -2 | gut belegte Kritik an Greenwashing, Arbeitsbedingungen, Umweltwirkung oder Kontrollversagen |

## Anwendung Von Mass Balance

Mass Balance wird nicht automatisch auf ein ganzes Siegel angewendet, wenn nur einzelne Rohstoffe betroffen sind. Der Abzug gilt nur, wenn eine der folgenden Bedingungen erfüllt ist:

- Das Siegel erlaubt Mass Balance grundsätzlich für den zentralen Zertifizierungsanspruch.
- Die konkrete bewertete Produktgruppe ist vom Mass-Balance-Modell betroffen.
- Verbraucher könnten durch die Siegelnutzung produktbezogene physische Rückverfolgbarkeit erwarten, obwohl diese nicht gegeben ist.

Wenn Mass Balance nur eine Randbedingung für einzelne Rohstoffe ist, wird sie als Hinweis oder Risikofaktor dokumentiert, aber nicht pauschal mit `-4` gewertet.

## Noch Zu Klärende Erweiterungen

Die vorhandenen Notion-Daten nutzen Faktoren, die in der Matrix noch nicht sauber definiert sind:

- `Teilweise NGO-Kritik`
- `Industrienähe`
- `Einzelfallkritik an Umsetzung`
- `Systemkritik`
- `Transparente Vergabekriterien`
- `Starker Arbeitsrechtsstandard`
- `Staatliches Siegel mit Unternehmensprüfung`
- `Kein produktspezifischer Lieferkettenstandard`

Diese Faktoren sollten entweder als offizielle Regeln aufgenommen oder aus den Bewertungen entfernt werden.

## Mindest-Ausgabe Pro Bewertung

```json
{
  "id": "siegel-id",
  "name": "Siegelname",
  "kategorie": "Kategorie aus Matrix",
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
      "beleg_ids": ["quelle-1"]
    }
  ],
  "begruendung": "Kurze, prüfbare Bewertung.",
  "quellen": [],
  "unsicherheit": "niedrig|mittel|hoch"
}
```
