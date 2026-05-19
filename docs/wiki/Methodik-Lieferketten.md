# Methodik Lieferketten

## Ziel

Lieferketten werden so bewertet, dass die Aussagen ehrlich, belegbar und fuer eine spaetere App-Nutzung brauchbar bleiben.

## Zentrales Problem

Eine vollstaendige Einzelprodukt-Lieferkette ist fuer die meisten Produkte oeffentlich nicht recherchierbar.

Reine Unternehmensbewertungen sind dagegen oft zu grob.

## Arbeitsloesung

Bewertet wird auf mittlerer Ebene:

`Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell`

Beispielhaft:

- Schokolade / Kakao
- Fisch / Wildfang oder Aquakultur
- Kaffee oder Tee
- Palm in Nahrung oder Drogerie
- Milch und Futtermittel

## Grundregeln

### 1. Keine Scheingenauigkeit

Wenn eine Aussage nur auf Marken-, Unternehmens- oder Warengruppenebene moeglich ist, wird das so ausgewiesen.

### 2. Aussagequalitaet gehoert zur Datenlogik

Die Eintraege arbeiten mit:

- `aussage_status`
- `aussage_sicherheit`
- `unsicherheit`

### 3. Siegelscore und Lieferkettenscore sind getrennt

- `qualitaetssiegel.json` bewertet den Standard an sich
- `lieferketten.json` bewertet den konkreten Anwendungsfall

Darum koennen Scores voneinander abweichen.

## Relevante Zusatzfelder

Besonders wichtig in der Lieferketten-JSON:

- `produktbezug`
- `lieferkettenmodell`
- `kettentyp`
- `unternehmensmassnahmen`
- `relevante_siegel`

## Aktueller Stand

`data/processed/lieferketten.json` ist aktuell eine belastbare Pilotbasis mit 8 Faellen, nicht der Vollbestand des Marktes.

