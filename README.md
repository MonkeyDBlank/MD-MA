# MD&MA – Bewertungsautomation für Qualitätssiegel & Lieferketten

Lokales Arbeitsprojekt zur Automatisierung der Recherche und Bewertung von **Qualitätssiegeln** und **Lieferketten** auf Basis des ursprünglichen Notion-Projektstands `MD&MA`. Die Dokumentation ist GitHub-first: alle maßgeblichen Inhalte liegen im Repo.

| | |
| --- | --- |
| **Fachlicher Scope** | Nahrungsmittel, Drogerieprodukte |
| **Datenformat** | strukturierte JSON-Dateien mit Belegen und Unsicherheitsgrad |
| **Doku-Modus** | GitHub-first (Repo ist Source of Truth) |
| **Aktueller Datenstand** | siehe [Aktueller Datenstand](#aktueller-datenstand) |

## Inhalt

- [Ziel](#ziel)
- [Scope](#scope)
- [Repo-Struktur](#repo-struktur)
- [Aktueller Datenstand](#aktueller-datenstand)
- [Einstieg für neue Personen & Agenten](#einstieg-für-neue-personen--agenten)
- [Arbeitsregeln](#arbeitsregeln)
- [Dokumentation](#dokumentation)
- [Lizenz & Nutzung](#lizenz--nutzung)

## Ziel

Aus Recherchequellen strukturierte, belegbare Bewertungen erzeugen:

- **Qualitätssiegel:** Standard, Träger, Kontrollsystem, Rückverfolgbarkeit, NGO-Bewertung, Kritik, Score.
- **Lieferketten:** Unternehmen/Marke, Warengruppe/Rohstoff, Lieferkettenmodell, Herkunftsrisiken, Kontrolltiefe, Monitoring, Score.

Jede Bewertung braucht Belege und einen Unsicherheitsgrad. Interne Review-Stati bleiben in den Drafts und werden **nicht** in finale JSONs geschrieben.

## Scope

**Aktiv:** Nahrungsmittel · Drogerieprodukte

**Nicht aktiv** (sofern nicht ausdrücklich wieder geöffnet): Textilien · rein verpackungsbezogene Forst-/Papiersiegel ohne direkten Produktbezug · reine Unternehmenszertifizierungen ohne klaren Produktbezug.

## Repo-Struktur

```text
.
├── README.md                 # dieses Dokument
├── AGENTS.md                 # Einstieg & Regeln für Agenten (zuerst lesen)
├── AGENT_START_HERE.md       # Schnellstart für neue Bearbeitung
├── PROJECT_CONTEXT.md        # ausführlicher Projektkontext
├── agents/                   # Agentenrollen, Zuständigkeiten, Übergabeformate
├── context/                  # maschinenlesbarer Projektkontext (Snapshot)
├── data/
│   ├── raw/                  # Rohdaten aus Notion/Web (ungeprüft)
│   ├── drafts/               # interne Arbeitsstände & Agentenläufe
│   ├── processed/            # finale JSON-Daten für App/Auswertung
│   └── json-schemas.md       # Feldbeschreibung der finalen JSONs
├── docs/                     # Methodik, Übergabedoku & Wiki-Spiegel (docs/wiki/)
├── matrices/                 # Bewertungsmatrizen als maschinennahe Regeln
├── presentations/            # fertige Foliendecks + Build-Quellen
├── research/
│   ├── sources/              # Quellenlisten & Quellenbewertung
│   └── findings/             # Einzelfunde, Notizen, offene Fragen, Laufprotokolle
├── scripts/                  # Hilfsskripte (z. B. Snapshot-Refresh)
└── workflows/                # End-to-end-Abläufe für Recherche, Bewertung, Review
```

Die finalen Übergabedateien liegen ausschließlich in `data/processed/`. Maschinennahe Details zu den Feldern stehen in `data/json-schemas.md` bzw. `docs/wiki/JSON-Formate.md`.

## Aktueller Datenstand

Stand `2026.13` (2026-06-22):

| Datensatz | Datei | Einträge |
| --- | --- | --- |
| Qualitätssiegel | `data/processed/qualitaetssiegel.json` | 569 aktive Einträge |
| Lieferketten | `data/processed/lieferketten.json` | 200 belastbare Pilotfälle |
| Glossar | `data/processed/glossar.json` | 112 Begriffe |

Die jeweils aktuellen Zahlen werden maschinenlesbar in `context/project-context.snapshot.json` gepflegt. Die Versionshistorie steht in `docs/wiki/Projektgeschichte-Zeitstrahl.md`.

## Einstieg für neue Personen & Agenten

Bei einem frischen Clone in dieser Reihenfolge starten:

1. `AGENTS.md`
2. `AGENT_START_HERE.md`
3. `context/project-context.snapshot.json`
4. `PROJECT_CONTEXT.md`
5. `docs/wiki/Home.md`
6. `docs/wiki/Projektstand.md`

Den Snapshot nach inhaltlichen Änderungen aktualisieren:

```bash
node scripts/refresh_project_context_snapshot.mjs
```

## Arbeitsregeln

- Neue oder geänderte Einträge zuerst in `data/drafts/` anlegen; erst nach Konsolidierung nach `data/processed/` übernehmen.
- Keine internen Review-Stati in finale JSONs schreiben.
- JSON-Felder im finalen Schema nicht hinzufügen, entfernen oder umbenennen, ohne dass die Schnittstelle mit dem App-/Datenteam ausdrücklich geändert wird.
- Primärquellen bevorzugen und Unsicherheiten ehrlich kennzeichnen.
- Lieferkettenscores nicht mit generischen Siegelscores gleichsetzen.
- Dokumentation und Wiki-Spiegel mit Datenänderungen synchron halten.

## Dokumentation

GitHub-first-Dokumentation (Wiki-Spiegel unter `docs/wiki/`):

- `docs/wiki/Home.md` – Einstieg
- `docs/wiki/Projektstand.md` – aktueller Stand
- `docs/wiki/Projektgeschichte-Zeitstrahl.md` – Versionshistorie
- `docs/wiki/Methodik-Qualitaetssiegel.md` / `docs/wiki/Methodik-Lieferketten.md` – Bewertungsmethodik
- `docs/wiki/JSON-Formate.md` – Datenschemata
- `docs/wiki/Agenten-Workflow.md` – Agentenablauf
- `docs/wiki/Repo-Nutzung-und-Kontext.md` – Repo-Nutzung

Weitere Fachdoku: `docs/lieferketten-methodik.md`, `docs/siegel-lieferketten-abgleich.md`, `docs/standbewertung.md`, `docs/uebergabedoku-app-team.md`.

## Lizenz & Nutzung

Akademisches Abschlussprojekt. Keine offene Lizenz – alle Rechte vorbehalten. Nutzung, Weitergabe oder Veröffentlichung nur nach Absprache mit den Projektbeteiligten.
