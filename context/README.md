# Kontext Dateien

Dieses Verzeichnis ist die kompakte Einstiegsschicht fuer neue Personen und neue Agenten im Repo.

## Dateien

- `project-context.snapshot.json`: maschinenlesbarer Schnellueberblick ueber Scope, Datenstand, Hauptdateien und Arbeitsregeln

## Nutzung

Empfohlene Reihenfolge fuer neue Arbeit:

1. `AGENTS.md`
2. `AGENT_START_HERE.md`
3. `context/project-context.snapshot.json`
4. `PROJECT_CONTEXT.md`

## Aktualisierung

Nach inhaltlichen Aenderungen am Projektkontext oder an den finalen JSON-Dateien:

```bash
node scripts/refresh_project_context_snapshot.mjs
```
