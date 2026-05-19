# JSON-Formate

## Ueberblick

Das Projekt liefert drei zentrale JSON-Dateien:

- `qualitaetssiegel.json`
- `lieferketten.json`
- `glossar.json`

Diese Dateien liegen im finalen Zustand unter:

- `data/processed/`

Interne Arbeitsstaende liegen getrennt unter:

- `data/drafts/`

## 1. qualitaetssiegel.json

Zweck:

- Bewertung von Standards und Siegeln

Kernelemente:

- `id`
- `name`
- `kategorie`
- `typ_tags`
- `produktbereich`
- `traeger`
- `standardtyp`
- `vertrauensniveau`
- `scoring`
- `faktoren`
- `begruendung`
- `quellen`
- `unsicherheit`

Aktiver Stand:

- 26 Eintraege

## 2. lieferketten.json

Zweck:

- Bewertung konkreter Lieferkettenfaelle auf mittlerer Ebene

Kernelemente:

- `id`
- `unternehmen`
- `marke`
- `warengruppe`
- `rohstoffe`
- `bewertungsebene`
- `produktbezug`
- `lieferkettenmodell`
- `kettentyp`
- `scoring`
- `risiken`
- `unternehmensmassnahmen`
- `relevante_siegel`
- `quellen`
- `aussage_sicherheit`
- `unsicherheit`

Aktiver Stand:

- 12 Eintraege

## 3. glossar.json

Zweck:

- Erklaerung relevanter Fachbegriffe

Kernelemente:

- `id`
- `begriff`
- `kurzdefinition`
- `ausfuehrliche_erklaerung`
- `bewertungsrelevanz`
- `beispiel`
- `kategorie`

Aktiver Stand:

- 18 Begriffe

## Modellregel

Das Glossar wird nur dann erweitert, wenn neue Begriffe in der Recherche wirklich relevant werden.
