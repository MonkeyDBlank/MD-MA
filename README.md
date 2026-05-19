# MD&MA Bewertungsautomation

Lokales Arbeitsprojekt zur Automatisierung der Recherche und Bewertung von Qualitätssiegeln und Lieferketten auf Basis des Notion-Projektstands `MD&MA`.

## Ziel

Das Projekt soll aus Recherchequellen strukturierte Bewertungen erzeugen:

- Qualitätssiegel: Standard, Träger, Kontrollsystem, Rückverfolgbarkeit, NGO-Bewertung, Kritik, Score.
- Lieferketten: Unternehmen, Produkt/Rohstoff, Kettentiefe, Herkunftsrisiken, Kontrolltiefe, Monitoring, Score.
- Jede Bewertung braucht Belege, Unsicherheitsgrad und Review-Status.

## Ordnerstruktur

- `docs/`: Projektstand, Notion-Inventar, Bewertung des aktuellen Stands.
- `matrices/`: Bewertungsmatrizen als maschinennahe Regeln.
- `agents/`: Agentenrollen, Zuständigkeiten und Übergabeformate.
- `workflows/`: End-to-end-Abläufe für Recherche, Bewertung und Review.
- `data/raw/`: Rohdaten aus Notion oder Web-Recherche.
- `data/processed/`: bereinigte JSON/CSV-Daten für App oder Auswertung.
- `research/sources/`: Quellenlisten und Quellenbewertung.
- `research/findings/`: Einzelfunde, Recherche-Notizen, offene Evidenzfragen.

## Aktueller Stand in einem Satz

Die GitHub-first-Arbeitsbasis steht: `qualitaetssiegel.json` enthaelt 26 aktive Eintraege, `lieferketten.json` 12 belastbare Pilotfaelle und `glossar.json` 18 relevante Begriffe.

## GitHub-First-Doku

Die laufende Projektdokumentation fuer die Ablösung von Notion liegt unter:

- `AGENTS.md`
- `context/project-context.snapshot.json`
- `docs/wiki/Home.md`
- `docs/wiki/Projektstand.md`
- `docs/wiki/Projektgeschichte-Zeitstrahl.md`
- `docs/wiki/Methodik-Qualitaetssiegel.md`
- `docs/wiki/Methodik-Lieferketten.md`
- `docs/wiki/JSON-Formate.md`
- `docs/wiki/Agenten-Workflow.md`
- `docs/wiki/Repo-Nutzung-und-Kontext.md`
- `AGENT_START_HERE.md`

## Kontext fuer neue Agents

Neue Personen oder neue Agenten sollen bei einem frischen Clone in dieser Reihenfolge starten:

1. `AGENTS.md`
2. `AGENT_START_HERE.md`
3. `context/project-context.snapshot.json`
4. `PROJECT_CONTEXT.md`

Der Snapshot kann nach inhaltlichen Aenderungen mit folgendem Befehl aktualisiert werden:

```bash
node scripts/refresh_project_context_snapshot.mjs
```
