# Uebergabedoku App-Team

Stand: 2026-05-19

## Zweck

Dieses Dokument beschreibt die drei aktuell uebergabefaehigen JSON-Dateien fuer das App-Team:

- `data/processed/qualitaetssiegel.json`
- `data/processed/lieferketten.json`
- `data/processed/glossar.json`

Die Daten wurden lokal aus dem Notion-Projektstand weiterentwickelt. Notion selbst wurde dabei nicht veraendert.

## Scope

Aktiver Scope:

- `Nahrungsmittel`
- `Drogerieprodukte`

Nicht im aktiven Scope:

- Textilien
- reine Verpackungs- und Forstsiegel ohne direkten Produktbezug
- reine Unternehmenszertifizierungen ohne klaren Produktbezug

## Dateien

### 1. `qualitaetssiegel.json`

Inhalt:

- bewertete Siegel mit Score
- Begründung
- Faktoren
- Quellen
- Unsicherheit

Aktueller Stand:

- 23 aktive Einträge
- nur Siegel im Scope Nahrung und Drogerie

Wichtige Felder:

- `id`
- `name`
- `kategorie`
- `produktbereich`
- `scoring`
- `faktoren`
- `begruendung`
- `quellen`
- `unsicherheit`

Wichtig:

- Die Datei enthält keine internen Arbeitsstati.
- Siegel werden generisch als Standards bewertet, nicht als konkrete Produktfälle.

### 2. `lieferketten.json`

Inhalt:

- konkrete Lieferkettenfälle auf mittlerer Ebene
- nicht auf Ebene „jedes einzelne Produkt“, sondern:
  - `Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell`

Aktueller Stand:

- 10 aktive Pilot-Einträge
- bewusst als belastbare Pilotbasis, noch kein Vollbestand

Wichtige Felder:

- `id`
- `unternehmen`
- `marke`
- `warengruppe`
- `rohstoffe`
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

Wichtig:

- Diese Datei bewertet konkrete Fälle, nicht generische Standards.
- Deshalb können Lieferkettenscores vom Siegelscore abweichen.
- Das Feld `relevante_siegel` erklärt diese Beziehung.

### 3. `glossar.json`

Inhalt:

- kurze Fachbegriffserklärungen für App, Team und Nutzerverständnis

Aktueller Stand:

- 16 relevante Begriffe
- nur Begriffe im Scope Nahrung und Drogerie

Wichtige Begriffe:

- `mass-balance`
- `chain-of-custody`
- `living-wage`
- `living-income`
- `naturkosmetik`
- `biokosmetik`
- `identity-preserved`
- `segregation`
- `book-and-claim`

## Wichtige methodische Regeln

### 1. Siegelscore und Lieferkettenscore sind nicht dasselbe

- `qualitaetssiegel.json` bewertet den Standard an sich
- `lieferketten.json` bewertet den konkreten Anwendungsfall

Beispiel:

- ein generischer `RSPO`-Score kann niedrig sein
- ein konkreter Fall wie `ferrero-nutella-palmoel` kann trotzdem besser ausfallen, wenn segregierte Lieferketten, Mühlenlisten und Monitoring belegt sind

### 2. Keine Scheingenauigkeit

Wenn keine produktgenaue Lieferkette öffentlich belegbar ist, wird das nicht simuliert.

Stattdessen wird auf einer ehrlichen mittleren Ebene gearbeitet:

- Marke/Unternehmen
- Warengruppe/Rohstoff
- Lieferkettenmodell

### 3. Unsicherheit gehört zur Datenlogik

Nicht jede Aussage ist gleich sicher.

Darum enthalten die Datensätze:

- `aussage_status`
- `aussage_sicherheit`
- `unsicherheit`

## Aktuelle Pilotbasis in `lieferketten.json`

Derzeit enthalten:

- `tonys-chocolonely-schokolade-kakao`
- `followfood-thunfisch-malediven`
- `rapunzel-kaffee-cafe-capitan-mexiko`
- `andechser-bio-weidemilch-38`
- `weleda-naturkosmetik-palmoel-derivate`
- `gepa-tee-tpi-darjeeling`
- `followfood-bio-lachs-norwegen`
- `ferrero-nutella-palmoel`
- `banafair-bio-bananen-urocal-ecuador`
- `dr-bronner-reine-naturseife-rohstoffkette`

## Wichtige Zusatzdokumente

- [data/json-schemas.md](/Users/timdonnerhak/Documents/New%20project/data/json-schemas.md)
- [docs/siegel-lieferketten-abgleich.md](/Users/timdonnerhak/Documents/New%20project/docs/siegel-lieferketten-abgleich.md)
- [docs/lieferketten-methodik.md](/Users/timdonnerhak/Documents/New%20project/docs/lieferketten-methodik.md)

## Technischer Hinweis fuer die Nutzung

Empfohlene Leselogik in der App oder im Backend:

1. Produkt/Warengruppe erkennen
2. passende Siegel aus `qualitaetssiegel.json` aufloesen
3. passende Lieferkettenfälle aus `lieferketten.json` zuordnen
4. Fachbegriffe bei Bedarf aus `glossar.json` anzeigen

## Aktuelle Grenzen

- `lieferketten.json` ist noch kein Marktvollbestand
- einige Lieferkettenfälle sind marken- oder warengruppenbasiert, nicht chargengenau
- weitere Ausbaupfade sind bereits lokal vorbereitet, aber noch nicht recherchiert
