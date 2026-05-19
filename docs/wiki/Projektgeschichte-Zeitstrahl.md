# Projektgeschichte Zeitstrahl

Diese Seite fasst den bisherigen Projektverlauf in Phasen zusammen und soll den Stand seit Projektbeginn nachvollziehbar machen.

## Phase 1: Projektstart und Matrixgrundlagen

Zeitraum: etwa vor 6 Wochen bis fruehe Arbeitsphase

Schwerpunkte:

- Projektdefinition fuer Qualitaetssiegel und Lieferketten
- erste Bewertungsmatrizen
- Sammlung erster relevanter Siegel
- erste Begriffsarbeit und methodische Vorueberlegungen

Ergebnis:

- Fachliche Grundlogik fuer Bewertungen war vorhanden
- Struktur und Datenformat noch nicht konsistent

## Phase 2: Notion-Arbeitsstand und Materialsammlung

Schwerpunkte:

- Inhalte in Notion gesammelt
- Siegel, Lieferkettenideen, JSON-Ansatze und Glossar vorbereitet
- Projektphasen in `MD&MA` strukturiert

Ergebnis:

- Viel fachliche Vorarbeit vorhanden
- aber uneinheitliche Datenstruktur, teils Platzhalterquellen und Luecken bei finalen JSONs

## Phase 3: Lokale Konsolidierung seit der Agenten-Anbindung

Schwerpunkte:

- Notion-Inhalte lokal gelesen und ausgewertet
- lokale Ordnerstruktur fuer Matrizen, JSONs, Recherche und Workflows aufgebaut
- Projektgedaechtnis in `PROJECT_CONTEXT.md` angelegt

Ergebnis:

- Das Projekt wurde von losem Material in eine reproduzierbare Arbeitsstruktur ueberfuehrt

## Phase 4: Scope-Schaerfung und Siegel-Konsolidierung

Schwerpunkte:

- klarer Scope nur fuer Nahrung und Drogerie
- out-of-scope-Siegel getrennt
- bestehende Notion-Siegel lokal bereinigt
- weitere relevante Siegel mit Agenten recherchiert und bewertet

Ergebnis:

- `data/processed/qualitaetssiegel.json`
- 19 aktive Eintraege im finalen Scope

## Phase 5: Lieferkettenmethodik und Pilotfaelle

Schwerpunkte:

- Arbeitsmodell fuer Lieferketten auf mittlerer Ebene definiert
- keine Scheingenauigkeit auf Einzelproduktniveau
- erste belastbare Pilotfaelle zu Kakao, Fisch, Kaffee, Tee, Palm, Milch und Naturkosmetik aufgebaut

Ergebnis:

- `data/processed/lieferketten.json`
- 8 aktive Pilotfaelle

## Phase 6: Glossar, Abgleich und Uebergabe-Logik

Schwerpunkte:

- Glossar als dritte eigenstaendige JSON abgegrenzt
- Siegellogik und Lieferkettenlogik methodisch abgeglichen
- finale vs. interne Dateiebene getrennt

Ergebnis:

- `data/processed/glossar.json`
- saubere Trennung zwischen `data/drafts/` und `data/processed/`

## Phase 7: GitHub-first-Dokumentation

Schwerpunkte:

- Notion nicht mehr als Hauptablage
- Wiki-Struktur im Repo vorbereitet
- GitHub-Wiki befuellt
- Repo fuer kuenftige Agentennutzung dokumentiert

Ergebnis:

- `docs/wiki/` als versionierbare Dokuquelle
- GitHub-Wiki als lesbare Oberflaeche
- `AGENT_START_HERE.md` fuer neue Agenten im geklonten Repo

## Aktueller Stand

Stand: `2026-05-19`

- GitHub-first-Dokumentation aktiv
- `qualitaetssiegel.json` mit 23 aktiven Eintraegen
- `lieferketten.json` mit 10 aktiven Pilotfaellen
- `glossar.json` mit 16 Begriffen
- Agenten-Workflow dokumentiert
- Repo fuer weitere Recherche- und Bewertungslaeufe vorbereitet
