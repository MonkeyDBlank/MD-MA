# Agenten-Setup

Dieses Projekt eignet sich für mehrere spezialisierte Agenten. Wichtig ist: Kein Agent sollte direkt final veröffentlichen. Jeder Agent erzeugt strukturierte Zwischenergebnisse, die der Review-Agent prüft.

## Rollen

1. `discovery-agent`: findet neue Siegel, Standards, Unternehmen oder Produkt-/Rohstoffketten.
2. `research-agent`: sammelt Primär- und Sekundärquellen.
3. `source-audit-agent`: prüft Quellenqualität, Aktualität und Interessenkonflikte.
4. `scoring-agent`: wendet die Matrix an und berechnet Scores.
5. `review-agent`: prüft Rechenlogik, Belege, Widersprüche und Unsicherheit.
6. `output-agent`: bereitet JSON, Markdown oder Notion-Updates vor.

## Grundregel

Eine Bewertung ist erst nutzbar, wenn sie mindestens diese Stufen durchlaufen hat:

`research -> source_audit -> scoring -> review`

## Gemeinsame Ausgabe-Konvention

Alle Agenten liefern:

- `status`
- `objekt_id`
- `annahmen`
- `ergebnisse`
- `quellen`
- `offene_fragen`
- `naechster_schritt`

