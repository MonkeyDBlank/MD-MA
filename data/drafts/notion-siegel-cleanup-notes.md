# Notion-Siegel Bereinigung

Stand: 2026-05-12

## Ziel

Vorhandene Notion-Siegel lokal in ein sauberes JSON-Format bringen, ohne Notion zu verändern.

## Quelle

Gelesene Notion-Seiten:

- `Bewertung Qualitätssiegel`
- `JSON Qualitätssiegel 1.1`
- `JSONs -> Qualitätssiegel`
- `Ökologische Basissiegel (Research)`

## Vorgehen

1. Vorhandene Siegel aus Notion identifizieren.
2. Kaputte JSON-Struktur lokal bereinigen.
3. Platzhalterquellen wie `link` durch echte Quellen ersetzen oder als Quellenproblem markieren.
4. Matrixkategorie und Score gegen erweiterte Matrix prüfen.
5. Nur belastbare Einträge in finale `data/processed/qualitaetssiegel.json` übernehmen.

## Zuerst Zu Bereinigende Notion-Siegel

Kernset aus den vorhandenen Bewertungen:

- Demeter
- Naturland / Naturland Fair
- Bioland
- EU-Bio
- Fairtrade
- Rainforest Alliance
- MSC
- VLOG / Ohne Gentechnik
- QS-Prüfsystem
- Haltungsform Stufe 1 & 2

Zusätzliche vorhandene Siegel:

- ASC
- GlobalG.A.P.
- UTZ
- Biokreis
- V-Label
- Fair for Life
- Fair Wear Foundation
- RSPO
- FSC
- GOTS
- B Corp
- Blauer Engel
- EU Ecolabel
- SA8000
- Grüner Knopf

## Aktuelle Agentenrunde Zur Bereinigung

Lauf 002:

- Agent 1: Demeter, Naturland, Bioland, EU-Bio
- Agent 2: Fairtrade, Rainforest Alliance, MSC, ASC
- Agent 3: VLOG, QS, Haltungsform Stufe 1 & 2, GlobalG.A.P.

## Wichtige Regeln

- Keine Notion-Änderungen.
- Finales JSON enthält keine internen Stati wie `draft`, `reviewed`, `approved`.
- `data/drafts/` darf interne Hinweise enthalten.
- `data/processed/` nur für finale, geprüfte JSONs.
