# Agent Start Here

Wenn dieses Repo geklont und mit Codex oder einem aehnlichen Agenten bearbeitet wird, ist dies der schnellste Einstieg.

## 1. Erst lesen

- `AGENTS.md`
- `context/project-context.snapshot.json`
- `PROJECT_CONTEXT.md`
- `docs/wiki/Home.md`
- `docs/wiki/Projektstand.md`
- `docs/wiki/JSON-Formate.md`

## 2. Source of Truth

GitHub-first-Dokumentation:

- Wiki-Inhalte liegen im Repo unter `docs/wiki/`
- dieselben Inhalte koennen zusaetzlich im GitHub-Wiki gespiegelt sein

Fachliche Hauptartefakte:

- `data/processed/qualitaetssiegel.json`
- `data/processed/lieferketten.json`
- `data/processed/glossar.json`
- `context/project-context.snapshot.json`

Interne Arbeitsstaende:

- `data/drafts/`

## 3. Scope-Regel

Aktiver Scope:

- Nahrungsmittel
- Drogerieprodukte

Nicht aktiv:

- Textilien
- rein verpackungsbezogene Forst-/Papiersiegel ohne direkten Produktbezug
- reine Unternehmenszertifizierungen ohne klaren Produktbezug

## 4. Arbeitsregeln

- Finale Uebergabedateien liegen nur in `data/processed/`
- Interne Arbeitsstaende liegen in `data/drafts/`
- Keine internen Review-Stati in finale JSONs schreiben
- Keine neuen JSON-Felder ohne explizite Entscheidung, weil jede Strukturänderung an App- und Datenbankteam kommuniziert werden muss
- Lieferkettenscores nicht mit generischen Siegelscores gleichsetzen
- Glossar nur erweitern, wenn neue Begriffe wirklich relevant sind

## 5. Wichtige Doku

- `docs/lieferketten-methodik.md`
- `docs/siegel-lieferketten-abgleich.md`
- `research/findings/agent-runs.md`
- `research/findings/lieferketten-runs.md`

## 6. Typischer Arbeitsablauf

1. Projektkontext lesen
2. Aktiven Scope pruefen
3. Vorhandene Eintraege gegen Duplikate abgleichen
4. Recherche mit Primaerquellen beginnen
5. JSON erst in `data/drafts/` erweitern
6. Nach Konsolidierung nach `data/processed/` uebernehmen
7. Doku und Wiki spiegeln
8. `node scripts/refresh_project_context_snapshot.mjs` ausfuehren
