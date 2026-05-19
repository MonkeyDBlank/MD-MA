# Workflow Neue Siegel Mit Agenten

## Ziel

Neue Qualitätssiegel recherchieren, bewerten und nach Review zu `data/processed/qualitaetssiegel.json` hinzufügen.

## Ablauf

1. Kandidat auswählen.
2. Research-Agent sammelt Quellen und Fakten.
3. Source-Audit prüft Quellenqualität.
4. Scoring-Agent berechnet Score nach `matrices/qualitaetssiegel.md`.
5. Review-Agent prüft Matrixlogik, Belege und Unsicherheit.
6. Nur geprüfte Einträge werden in `qualitaetssiegel.json` übernommen.
7. Falls relevante neue Begriffe auftauchen, wird `glossar.json` separat erweitert.

## Erste Agentenrunde

Gestartete Recherche-Kandidaten:

- `NATRUE`
- `COSMOS`
- `PEFC`

## Aufnahmebedingungen Für JSON

- Mindestens eine Primärquelle oder offizielle Standardquelle.
- Für Score-Faktoren jeweils konkrete Quelle.
- Keine Platzhalter-URLs.
- `unsicherheit` muss gesetzt sein.
- `review_status` startet mindestens als `draft`; erst nach Review `reviewed` oder `approved`.

