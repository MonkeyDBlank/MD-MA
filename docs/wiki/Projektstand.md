# Projektstand

## Ausgangspunkt

Das Projekt wurde zunaechst auf Basis des Notion-Projektstands `MD&MA` aufgebaut. Seit der Anbindung wurde der fachliche und technische Stand lokal konsolidiert und in eine GitHub-taugliche Struktur ueberfuehrt.

Notion war dabei Quelle fuer vorhandene Inhalte, Matrizen und Arbeitsstaende. Die eigentliche Bereinigung, Bewertung und Strukturierung wurde lokal umgesetzt.

## Was umgesetzt wurde

### 1. Projektstruktur aufgebaut

Es gibt jetzt eine klare lokale Struktur fuer:

- Dokumentation
- Bewertungsmatrizen
- Agentenrollen
- Workflows
- finale JSON-Dateien
- interne Drafts
- Rechercheprotokolle

### 2. Scope geschaerft

Der aktive Scope ist jetzt klar begrenzt auf:

- Nahrungsmittel
- Drogerieprodukte

Dadurch wurden aus dem aktiven Siegelbestand mehrere out-of-scope-Eintraege entfernt und nur noch lokal archiviert.

### 3. Qualitaetssiegel bereinigt und erweitert

Vorhandene Notion-Siegel wurden in ein konsistentes JSON-Format ueberfuehrt. Danach wurden weitere relevante Siegel im Scope recherchiert, bewertet und integriert.

Aktiver Stand:

- `data/processed/qualitaetssiegel.json`
- 28 aktive Eintraege

### 4. Lieferkettenmodell aufgebaut

Die Lieferkettenlogik wurde nicht auf Ebene jedes Einzelprodukts, sondern auf mittlerer Ebene aufgebaut:

`Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell`

Dadurch konnten belastbare Pilotfaelle aufgebaut werden, ohne falsche Produktschaerfe vorzutaeuschen.

Aktiver Stand:

- `data/processed/lieferketten.json`
- 13 aktive Pilotfaelle

### 5. Glossar als dritte JSON abgegrenzt

Das Glossar ist eine eigenstaendige dritte JSON mit relevanten Begriffen fuer Nahrung und Drogerie.

Aktiver Stand:

- `data/processed/glossar.json`
- 19 Begriffe

### 6. Agenten-Workflow eingefuehrt

Recherche und Bewertung laufen nicht mehr nur als Einzelausgabe, sondern ueber einen dokumentierten Mehr-Schritt-Prozess mit Agentenrollen fuer Recherche, Quellenpruefung, Bewertung und Konsolidierung.

### 7. GitHub-first-Dokumentation und Wiki

- `docs/wiki/` als versionierbare Dokuquelle aufgebaut
- GitHub-Wiki mit derselben Grundstruktur befuellt
- Einstieg fuer neue Agenten in `AGENT_START_HERE.md`
- kompakter maschinenlesbarer Projektstand in `context/project-context.snapshot.json`
- zusaetzliche Repo-Root-Datei `AGENTS.md` fuer Agenten, die solche Dateien automatisch oder halbautomatisch als Einstieg nutzen

## Wichtige methodische Entscheidungen

- Matrix durfte erweitert werden, wenn vorhandene Kategorien nicht ausreichen.
- Mass Balance wird nur dann abgewertet, wenn das Siegel oder die Produkt-/Rohstoffgruppe wirklich betroffen ist.
- Finale Dateien enthalten keine internen Review-Stati.
- Lieferkettenscore und generischer Siegelscore sind bewusst getrennt.

## Aktuelle Hauptdateien

- `PROJECT_CONTEXT.md`
- `docs/uebergabedoku-app-team.md`
- `docs/lieferketten-methodik.md`
- `docs/siegel-lieferketten-abgleich.md`
- `research/findings/agent-runs.md`
- `research/findings/lieferketten-runs.md`
