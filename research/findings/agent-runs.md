# Agentenlauf-Protokoll

Dieses Protokoll dokumentiert, wann welche Subagents fuer das MD&MA-Projekt genutzt wurden, welche Aufgabe sie hatten und welche Artefakte daraus entstanden sind.

## Lauf 001 - Neue Qualitätssiegel

Datum: 2026-05-12

Ziel: Neue bzw. noch nicht sauber eingepflegte Qualitätssiegel recherchieren, vorbewerten und als Draft in `qualitaetssiegel.json` aufnehmen.

### Gestartete Subagents

| Agent-ID | Thema | Aufgabe | Ergebnis |
|---|---|---|---|
| `019e1acb-0544-7ae3-a881-b89d208de4c3` | NATRUE | Recherche zu Natur-/Biokosmetikstandard, Träger, Kriterien, Kontrolle, Kritik, Score-Faktoren | Draft-Bewertung für `natrue` |
| `019e1acb-1ca1-7c13-9caa-b176add6795d` | COSMOS | Recherche zu COSMOS Organic/Natural, Standardvarianten, Bio-Anteilen, Kontrolle, Kritik, Score-Faktoren | Empfehlung zur getrennten Bewertung von `cosmos-organic` und `cosmos-natural` |
| `019e1acb-3194-7771-9256-18dcefb0d5d8` | PEFC | Recherche zu Forst-/Chain-of-Custody-Standard, CoC-Methoden, NGO-Kritik, Score-Faktoren | Draft-Bewertung für `pefc` |

### Entstandene Dateien

- `data/drafts/qualitaetssiegel.agent-run-001.draft.json`
- `data/drafts/glossar.agent-run-001.draft.json`

### Neue JSON-Einträge

In `data/drafts/qualitaetssiegel.agent-run-001.draft.json`:

- `natrue`
- `cosmos-organic`
- `cosmos-natural`
- `pefc`

In `data/drafts/glossar.agent-run-001.draft.json`:

- `mass-balance`
- `chain-of-custody`
- `drittzertifizierung`
- `naturkosmetik`
- `biokosmetik`

### Methodische Entscheidungen

- COSMOS wurde in `COSMOS Organic` und `COSMOS Natural` getrennt, weil die Bio-Mindestanteile unterschiedlich sind.
- NATRUE und COSMOS bekommen keinen pauschalen vollen Mass-Balance-Abzug, obwohl palmbasierte Rohstoffe mit Mass Balance relevant sein können. Das bleibt ein Review-Punkt.
- PEFC wird nach aktueller Matrix niedrig bewertet, weil PEFC nicht zwingend physische Produkttrennung garantiert und starke NGO-Kritik vorliegt.
- Alle Einträge sind interne Drafts und nicht für die App-Team-Übergabe bestimmt.

### Offene Review-Punkte

- Prüfen, ob Kosmetikstandards wirklich in die Kategorie `Hoher Standard / Fairer Handel` fallen oder ob eine eigene Kategorie `Natur-/Biokosmetikstandard` gebraucht wird.
- Entscheiden, wie Mass Balance bei einzelnen Rohstoffgruppen innerhalb eines sonst strengeren Standards gewertet wird.
- Prüfen, ob PEFC eine eigene Kategorie `Forst-/Rohstoffstandard mit CoC` braucht, statt als `Industrie- & Prozessstandard` zu starten.
- Quellenrating ergänzen, falls die Daten in Richtung `reviewed` oder `approved` gehoben werden.

### Validierung

Die JSON-Dateien wurden syntaktisch validiert:

- `data/drafts/qualitaetssiegel.agent-run-001.draft.json`: valide
- `data/drafts/glossar.agent-run-001.draft.json`: valide

Nach Nutzerentscheidung wurden die Dateien nach `data/drafts/` verschoben, weil `data/processed/` nur finale JSONs ohne interne Stati enthalten soll.

## Lauf 002 - Bereinigung Vorhandener Notion-Siegel

Datum: 2026-05-12

Ziel: Vorhandene Notion-Siegel lokal bereinigen, Quellen prüfen und in saubere JSON-Objekte überführen. Notion wird nicht verändert.

### Gestartete Subagents

| Agent-ID | Thema | Aufgabe | Ergebnis |
|---|---|---|---|
| `019e1adb-a320-78f2-9503-b23be4e6de3a` | Bio-Kernset | Demeter, Naturland/Naturland Fair, Bioland, EU-Bio prüfen und als JSON-Objekte vorbereiten | abgeschlossen |
| `019e1adb-d743-7692-9f81-20459616f0e5` | Fair/Fisch | Fairtrade, Rainforest Alliance, MSC, ASC prüfen und als JSON-Objekte vorbereiten | abgeschlossen |
| `019e1adc-806d-7660-bbec-c62e5a918e43` | Prozess/Tier/GlobalG.A.P. | VLOG, QS, Haltungsform Stufe 1 & 2, GlobalG.A.P. prüfen und als JSON-Objekte vorbereiten | abgeschlossen |

### Entstehende Dateien

- `data/drafts/notion-siegel-cleanup-notes.md`
- `data/drafts/qualitaetssiegel.notion-cleaned.draft.json`

### Neue Bereinigte Einträge

In `data/drafts/qualitaetssiegel.notion-cleaned.draft.json`:

- `demeter`
- `naturland-naturland-fair`
- `bioland`
- `eu-bio`
- `fairtrade`
- `rainforest-alliance`
- `msc`
- `asc`
- `vlog-ohne-gentechnik`
- `qs-pruefsystem`
- `haltungsform-stufe-1-2`
- `globalgap`

### Validierung

- `data/drafts/qualitaetssiegel.notion-cleaned.draft.json`: valide

### Hinweise

- Notion wurde nicht geändert.
- Scores über 10 wurden lokal auf 10 gedeckelt.
- Einige Quellenprobleme bleiben bestehen, insbesondere bei Naturland-Primärquellen, älteren ASC-Kritikquellen und Fairtrade-Mass-Balance-Anwendung nach Produktgruppe.

## Konsolidierung Nach Lauf 001 und 002

Datum: 2026-05-12

Ziel: Die getrennten Drafts aus Notion-Bereinigung und Agentenrecherche in einen einheitlichen internen Arbeitsstand überführen.

### Entstandene Datei

- `data/drafts/qualitaetssiegel.master.draft.json`

### Inhaltliche Normalisierung

- `review_status` aus Agenten-Drafts entfernt
- `belegt_kriterien` auf gemeinsames Feld `belegt` gemappt
- fehlendes `aussage_status` bei Faktoren mit `belegt` ergänzt
- `traeger`-Felder auf String-Format vereinheitlicht
- `PEFC` auf die aktualisierte Matrixkategorie `Forst-/Rohstoffstandard mit CoC` umgestellt
- `NATRUE`, `COSMOS Organic` und `COSMOS Natural` der Kategorie `Natur-/Biokosmetikstandard` zugeordnet

### Ergebnis

Der konsolidierte Master-Draft enthält 16 Qualitätssiegel und ist aktuell die zentrale interne Arbeitsdatei fuer weitere Agentenlaeufe und fuer die spaetere Ableitung der finalen `data/processed/qualitaetssiegel.json`.

## Lauf 003 - Neue Siegelrunde

Datum: 2026-05-12

Ziel: Die nächste priorisierte Siegelrunde parallel recherchieren und in die lokale Qualitätssiegel-Basis übernehmen.

### Beauftragte Themen

- `FSC`
- `RSPO`
- `GOTS`
- `Gruener Knopf`
- `Blauer Engel`
- `EU Ecolabel`

### Agenteneinsatz

- Bestehende Subagents wurden wiederverwendet.
- Zwei Teilaufträge (`GOTS`, ein erster `GOTS`-Lauf; sowie ein früher `GOTS`/`GOTS`-naher Versuch) liefen in Modellkapazitätsprobleme.
- `GOTS` wurde deshalb lokal mit Primaerquellen und oeffentlichen Sekundaerquellen nachgezogen und in denselben Lauf integriert.

### Entstandene Dateien

- `data/drafts/qualitaetssiegel.agent-run-003.draft.json`
- Aktualisierung von `data/drafts/qualitaetssiegel.master.draft.json`

### Neue Einträge

In `data/drafts/qualitaetssiegel.agent-run-003.draft.json`:

- `fsc`
- `rspo`
- `gots`
- `gruener-knopf`
- `blauer-engel`
- `eu-ecolabel`

### Ergebnis

- `qualitaetssiegel.master.draft.json` enthält nach Merge jetzt 22 Einträge.
- Die neue Runde deckt Rohstoff-/Forststandards, Textilstandards und öffentliche Umweltzeichen breiter ab.

### Validierung

- `data/drafts/qualitaetssiegel.agent-run-003.draft.json`: valide
- `data/drafts/qualitaetssiegel.master.draft.json`: valide

## Lauf 004 - Weitere Siegel und Uebergabeableitung

Datum: 2026-05-12

Ziel: Weitere relevante Siegel bzw. standardnahe Systeme recherchieren und danach eine erste uebergabefaehige `qualitaetssiegel.json` aus dem Master-Draft ableiten.

### Recherchierte Einträge

- `fair-for-life`
- `fair-wear-foundation`
- `sa8000`
- `b-corp`
- `v-label`
- `biokreis`

### Hinweise zur Einordnung

- `Fair Wear Foundation`, `SA8000` und `B Corp` sind fachlich keine klassischen Produktsiegel.
- Sie wurden trotzdem aufgenommen, aber in Begründung, Standardtyp und Kategorien sauber als Marken-/Unternehmens- bzw. Standortstandards kenntlich gemacht.
- Die Matrix wurde lokal um `Sozial-/Arbeitsstandard` und `Unternehmenszertifizierung / ESG-Impact-Standard` ergänzt, damit diese Einträge nicht methodisch falsch in bestehende Kategorien gepresst werden.

### Entstandene Dateien

- `data/drafts/qualitaetssiegel.agent-run-004.draft.json`
- aktualisiert: `data/drafts/qualitaetssiegel.master.draft.json`
- neu abgeleitet: `data/processed/qualitaetssiegel.json`

### Ergebnis

- `qualitaetssiegel.master.draft.json` enthaelt jetzt 28 Eintraege.
- `data/processed/qualitaetssiegel.json` ist die aktuelle uebergabefaehige Datei ohne interne Review-Felder.

### Validierung

- `data/drafts/qualitaetssiegel.agent-run-004.draft.json`: valide
- `data/drafts/qualitaetssiegel.master.draft.json`: valide
- `data/processed/qualitaetssiegel.json`: valide

## Scope-Korrektur Nahrung und Drogerie

Datum: 2026-05-12

Nach Nutzerhinweis wurde der aktive Scope fuer Qualitätssiegel geschärft:

- nur `Nahrungsmittel`
- nur `Drogerieprodukte`
- keine Textilsiegel
- keine rein verpackungsbezogenen Forst-/Papiersiegel als aktive Produktsiegel
- keine reinen Unternehmenszertifizierungen als aktive Produktsiegel

### Konsequenz

- `data/processed/qualitaetssiegel.json` wurde auf 19 aktive Eintraege reduziert.
- 9 bereits recherchierte, aber aktuell fachlich out-of-scope Eintraege wurden nach `data/drafts/qualitaetssiegel.out-of-scope.archive.json` verschoben.

### Out-of-scope archiviert

- `blauer-engel`
- `b-corp`
- `eu-ecolabel`
- `fair-wear-foundation`
- `fsc`
- `gots`
- `gruener-knopf`
- `pefc`
- `sa8000`
