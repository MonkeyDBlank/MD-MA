# Repo Nutzung und Kontext

Diese Seite ist fuer Personen gedacht, die das Repo klonen und mit Codex oder einem anderen Agenten weiterarbeiten.

## Was dieses Repo liefert

Das Repo ist kein App-Repo, sondern die Daten- und Methodikbasis fuer:

- Qualitaetssiegel
- Lieferketten
- Glossarbegriffe

Die App selbst ist nicht der Liefergegenstand dieses Projekts.

## Wo man anfangen sollte

Empfohlene Reihenfolge:

1. `AGENTS.md`
2. `AGENT_START_HERE.md`
3. `context/project-context.snapshot.json`
4. `PROJECT_CONTEXT.md`
5. `docs/wiki/Home.md`
6. `docs/wiki/Projektstand.md`
7. `data/processed/*.json`

## Was aktiv gepflegt wird

- `docs/wiki/` als GitHub-first-Dokumentation
- `data/processed/` als finaler Datenstand
- `data/drafts/` als Werkbank
- `research/findings/` fuer Agenten- und Rechercheprotokolle
- `context/project-context.snapshot.json` als kompakter maschinenlesbarer Projektstand

## Was bei neuer Arbeit wichtig ist

- zuerst Scope pruefen
- dann auf Duplikate in bestehenden JSONs achten
- neue Eintraege nie direkt ungeprueft in `data/processed/`
- erst in Drafts, dann in finalen Stand uebernehmen
- Doku immer mitziehen
- nach inhaltlichen Aenderungen den Snapshot mit `node scripts/refresh_project_context_snapshot.mjs` aktualisieren

## Notion-Rolle

Notion war die Ausgangsbasis des Projekts. Die laufende Hauptdokumentation soll jetzt aber im Repo und im GitHub-Wiki liegen.
