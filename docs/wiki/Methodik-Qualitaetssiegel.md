# Methodik Qualitaetssiegel

## Ziel

Qualitaetssiegel werden als Standards bewertet, nicht als konkrete Produktfaelle.

Die JSON-Datei `qualitaetssiegel.json` soll fuer jedes aktive Siegel eine nachvollziehbare Bewertung mit Quellenbasis und Unsicherheitsangabe liefern.

## Bewertungslogik

Typische Elemente der Bewertung:

- Traeger und Governance
- Standardtyp
- Kontrollsystem
- Rueckverfolgbarkeit
- Produktnaehe
- bekannte Kritik
- externe Einordnung
- Unsicherheit

## Grundsatz

Es wird nicht nur das Label beschrieben, sondern der zugrunde liegende Standard bewertet.

Deshalb enthalten die Eintraege:

- `scoring`
- `faktoren`
- `begruendung`
- `quellen`
- `unsicherheit`

## Aktive Kategorien im Projekt

Beispiele fuer aktuell genutzte Kategorien:

- `Premium-Oeko & Sozial`
- `Industrie- & Prozessstandard`
- `Forst-/Rohstoffstandard mit CoC`
- `Natur-/Biokosmetikstandard`

## Mass Balance

Mass Balance wird nicht pauschal ueber alle Siegel hinweg als Abzug gesetzt.

Regel:

- Abwertung nur dann, wenn Mass Balance fuer das konkrete Siegel oder die relevante Produkt-/Rohstoffgruppe belastbar belegt ist

Das ist wichtig, weil manche Standards nur in Teilbereichen oder fuer einzelne Rohstoffe Mass-Balance-Modelle zulassen.

## Scope-Regel

Aktiv bewertet werden nur Siegel mit Bezug zu:

- Nahrung
- Drogerie

Out-of-scope-Eintraege werden nicht geloescht, sondern nur lokal archiviert.

## Wichtige Ausgabe-Regel

`data/processed/qualitaetssiegel.json` enthaelt nur den finalen Stand.

Interne Stati wie:

- `draft`
- `reviewed`
- `approved`

gehoeren nicht in diese Datei.

