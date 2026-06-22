# MD&MA Bewertungsautomation

Lokales Arbeitsprojekt zur Automatisierung der Recherche und Bewertung von Qualitaetssiegeln und Lieferketten auf Basis des urspruenglichen Notion-Projektstands `MD&MA`.

## Ziel

Das Projekt soll aus Recherchequellen strukturierte Bewertungen erzeugen:

- Qualitaetssiegel: Standard, Traeger, Kontrollsystem, Rueckverfolgbarkeit, NGO-Bewertung, Kritik, Score.
- Lieferketten: Unternehmen/Marke, Warengruppe/Rohstoff, Lieferkettenmodell, Herkunftsrisiken, Kontrolltiefe, Monitoring, Score.
- Jede Bewertung braucht Belege und einen Unsicherheitsgrad; interne Review-Stati bleiben in Drafts und werden nicht in finale JSONs geschrieben.

Aktiver fachlicher Scope:

- Nahrungsmittel
- Drogerieprodukte

Nicht aktiv sind Textilien, rein verpackungsbezogene Forst-/Papiersiegel ohne direkten Produktbezug und reine Unternehmenszertifizierungen ohne klaren Produktbezug.

## Ordnerstruktur

- `docs/`: Projektstand, Methodik, Uebergabedoku und Wiki-Spiegel.
- `matrices/`: Bewertungsmatrizen als maschinennahe Regeln.
- `agents/`: Agentenrollen, Zustaendigkeiten und Uebergabeformate.
- `workflows/`: End-to-end-Ablaeufe fuer Recherche, Bewertung und Review.
- `data/raw/`: Rohdaten aus Notion oder Web-Recherche.
- `data/drafts/`: interne Arbeitsstaende und Agentenlaeufe.
- `data/processed/`: finale JSON-Daten fuer App oder Auswertung.
- `research/sources/`: Quellenlisten und Quellenbewertung.
- `research/findings/`: Einzelfunde, Recherche-Notizen, offene Evidenzfragen und Laufprotokolle.
- `context/`: maschinenlesbarer Projektkontext fuer neue Agentenlaeufe.

## Aktueller Stand in einem Satz

Die GitHub-first-Arbeitsbasis steht: `qualitaetssiegel.json` enthaelt 569 aktive Eintraege, `lieferketten.json` 200 belastbare Pilotfaelle und `glossar.json` 112 relevante Begriffe.

Neu im Stand `2026.6` sind unter anderem Tierhaltungs- und Verbraucherkennzeichnungen wie `fuer-mehr-tierschutz`, `staatliche-tierhaltungskennzeichnung`, `nutri-score` und `pro-weideland` sowie die Lieferkettenfaelle `ritter-sport-schokolade-kakao-el-cacao-nicaragua`, `rewe-bio-cafe-mujer-kaffee-peru` und `alnatura-peru-cafe-bio-kaffee`.

## GitHub-First-Doku

Die laufende Projektdokumentation fuer die Abloesung von Notion liegt unter:

- `AGENTS.md`
- `AGENT_START_HERE.md`
- `PROJECT_CONTEXT.md`
- `context/project-context.snapshot.json`
- `docs/wiki/Home.md`
- `docs/wiki/Projektstand.md`
- `docs/wiki/Projektgeschichte-Zeitstrahl.md`
- `docs/wiki/Methodik-Qualitaetssiegel.md`
- `docs/wiki/Methodik-Lieferketten.md`
- `docs/wiki/JSON-Formate.md`
- `docs/wiki/Agenten-Workflow.md`
- `docs/wiki/Repo-Nutzung-und-Kontext.md`

## Kontext Fuer Neue Agents

Neue Personen oder neue Agenten sollen bei einem frischen Clone in dieser Reihenfolge starten:

1. `AGENTS.md`
2. `AGENT_START_HERE.md`
3. `context/project-context.snapshot.json`
4. `PROJECT_CONTEXT.md`
5. `docs/wiki/Home.md`
6. `docs/wiki/Projektstand.md`

Der Snapshot kann nach inhaltlichen Aenderungen mit folgendem Befehl aktualisiert werden:

```bash
node scripts/refresh_project_context_snapshot.mjs
```
