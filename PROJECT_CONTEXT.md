# Projektkontext MD&MA

Stand: 2026-05-12

## Worum Es Geht

Studienprojekt zu Qualitätssiegeln und Lieferketten. Das Team recherchiert Qualitätssiegel zu Produkten und Lieferketten bzw. Sorgfaltspflichten zu Unternehmen/Produktgruppen. Ziel ist eine automatisierbare Bewertung mit Bewertungsmatrix, Quellenbelegen und nachvollziehbarer Begründung.

Aktueller fachlicher Scope fuer Qualitätssiegel:

- nur `Nahrungsmittel`
- nur `Drogerieprodukte`
- keine Textilsiegel
- keine rein verpackungsbezogenen Forst-/Papiersiegel als aktive Produkt-Siegelbasis
- keine reinen Unternehmenszertifizierungen als aktive Produkt-Siegelbasis

Die App selbst wird nicht gebaut und ist nicht unser Liefergegenstand. Unser Liefergegenstand sind strukturierte Informationen und Bewertungen als JSON:

- `qualitaetssiegel.json`: bewertete Siegel inklusive Score, Begründung, Faktoren und Quellen.
- `lieferketten.json`: bewertete Lieferketteninformationen auf sinnvoller Abstraktionsebene.
- `glossar.json`: Begriffserklärungen für Fachbegriffe wie Mass Balance, Chain of Custody, Greenwashing usw.

Das Scan-Szenario dient nur dazu, zu verstehen, wie die Daten später verwendet werden könnten.

## Notion-Kontext

Notion-Zugriff funktioniert. Projektseite:

- `Studium -> SoSe 2026 -> MD&MA`
- Nutzer Sascha ist im Workspace sichtbar.

Wichtige Notion-Seiten:

- `Phase 3 - Bewertungmatrix Siegel`
- `Phase 4 - Bewertungsmatrix Lieferketten`
- `Phase 5 - Siegel`
- `JSONs`
- `Glossar`
- `Qualitätssiegel`
- `Lieferketten`
- `Glossar` / `JSON Glossar`

## Lokale Struktur

- `README.md`: Projektüberblick
- `docs/notion-inventar.md`: gelesene Notion-Seiten und Inhaltsübersicht
- `docs/standbewertung.md`: Bewertung des aktuellen Projektstands
- `matrices/qualitaetssiegel.md`: formalisierte Siegelmatrix
- `matrices/lieferketten.md`: formalisierte Lieferkettenmatrix
- `agents/`: Agentenrollen
- `workflows/agenten-pipeline.md`: Pipeline für Recherche, Bewertung, Review
- `research/sources/quellenstrategie.md`: Quellenstrategie
- `research/findings/offene-fragen.md`: offene Fragen
- `research/findings/agent-runs.md`: Protokoll der genutzten Subagents und Ergebnisse
- `data/drafts/`: interne Agenten- und Bereinigungsstände, nicht an App-Team geben
- `data/drafts/qualitaetssiegel.master.draft.json`: konsolidierter interner Arbeitsstand fuer Qualitätssiegel im Scope Nahrung/Drogerie
- `data/drafts/qualitaetssiegel.out-of-scope.archive.json`: lokal archivierte Eintraege ausserhalb des aktuellen Scopes
- `data/processed/`: finale, geprüfte JSONs fuer App-Team
- `docs/notion-bearbeitungsregeln.md`: aktuelle Regel, dass Notion nur gelesen wird

## Aktueller Befund

Die Qualitätssiegel-Seite ist fachlich fortgeschritten, aber technisch nicht sauber:

- JSON ist in Notion teilweise kaputt/fragmentiert.
- Viele Quellen sind nur Platzhalter wie `link`.
- Einige verwendete Faktoren stehen noch nicht offiziell in der Matrix.

Die Lieferketten-Seite ist methodisch noch offen:

- Es gibt eine gute Lieferkettenmatrix.
- Es gibt starke Hintergrundrecherche zu Kakao, Kaffee, Palmöl, Soja, Fisch und Lebensmitteleinzelhandel.
- Die konkrete Lieferketten-JSON-Seite ist aber leer.

## Wichtige Methodische Entscheidung Zu Lieferketten

Einzelprodukt-Lieferketten für jedes gescannte Produkt vollständig zu recherchieren ist realistisch nicht machbar. Unternehmensweite Lieferkettenbewertungen allein sind aber oft zu unpräzise.

Empfohlener Mittelweg:

Bewertung auf drei Ebenen:

1. Produkt-Scan-Ebene: Was steht konkret auf dem Produkt? Siegel, Marke, Händler, Warengruppe, Rohstoffhinweise.
2. Warengruppe/Rohstoff-Ebene: typische Risiken und Lieferkettenmodelle für Kakao, Kaffee, Palmöl, Soja, Fisch, Fleisch, Textil usw.
3. Unternehmens-/Marken-Ebene: Sorgfaltssysteme, Transparenztools, Lieferantenlisten, Beschwerdemechanismen, Nachhaltigkeitsberichte, NGO-Kritik.

Für die JSON-Daten bedeutet das: Sie sollten keine produktgenaue Lieferkette behaupten, wenn nur Unternehmens- oder Warengruppeninformationen vorhanden sind. Stattdessen müssen die Datensätze kenntlich machen:

- konkret belegbar: Produkt trägt Siegel X, Marke/Unternehmen Y, Warengruppe Z.
- risiko- und systembasiert: Für Rohstoff/Warengruppe Z gelten typische Risiken A/B/C.
- unternehmensbasiert: Unternehmen Y hat Transparenz-/Sorgfaltsniveau N.
- Unsicherheit: niedrig/mittel/hoch.

## Empfohlene Lieferketten-Bewertungseinheit

Nicht `jedes Produkt`, nicht nur `ganzes Unternehmen`, sondern:

`Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell`

Beispiele:

- `Aldi + Kakao/Schokolade + Tony's Open Chain/Fairtrade/Rainforest Alliance`
- `Rewe + Fisch-Eigenmarke + Track'n'Trace/MSC/ASC`
- `Edeka + Fleisch/Fisch + fTrace/Herkunftsedeka`
- `Lidl/Kaufland + Fisch/Fleisch/Eier + check-your-product/fTrace`
- `Beliebige Cola-Marke + Zucker/Kunststoffverpackung + Unternehmensangaben/Siegel, falls vorhanden`

## Kommunikationsregel Für JSON-Ergebnisse

Lieferkettenbewertungen müssen sauber zwischen drei Aussagearten unterscheiden:

- `belegt`: Direkt aus Quelle, Standarddokument, Unternehmensangabe oder Produkt-/Trackingdaten nachweisbar.
- `abgeleitet`: Plausible Bewertung aus Unternehmen, Warengruppe und Rohstoffrisiko.
- `unbekannt`: Nicht recherchierbar oder keine belastbare Quelle.

Keine Scheingenauigkeit. Lieber ehrlich `mittlere Unsicherheit` ausweisen als eine produktgenaue Lieferkette vortäuschen.

## Nächster Sinnvoller Schritt

1. Vorhandene Notion-Siegel in sauberes JSON-Format überführen und Quellen bereinigen.
2. Bewertungen gegen erweiterte Matrix und Quellen prüfen.
3. Nur fertige, verlässliche Einträge in `data/processed/qualitaetssiegel.json` übernehmen.
4. `glossar.json` als dritte eigenständige JSON nur bei relevanten neuen Begriffen erweitern.

## Aktuelle Arbeitsrichtung

Erste Agentenrunde für neue bzw. noch nicht sauber eingepflegte Siegel:

- `NATRUE`
- `COSMOS`
- `PEFC`

Der Lauf ist dokumentiert in `research/findings/agent-runs.md`.

## Aktueller Siegel-Arbeitsstand

Die zentrale Arbeitsdatei fuer Qualitätssiegel ist jetzt:

- `data/drafts/qualitaetssiegel.master.draft.json`

Sie vereint:

- bereinigte vorhandene Notion-Siegel
- neue Agentenrecherchen aus Lauf 001

Der Master-Draft ist intern. Finale Uebergabe-Dateien werden erst spaeter nach weiterer Quellenpruefung aus diesem Stand nach `data/processed/` abgeleitet.

Stand nach Lauf 003:

- 22 Qualitätssiegel im Master-Draft
- neu hinzugekommen: `FSC`, `RSPO`, `GOTS`, `Gruener Knopf`, `Blauer Engel`, `EU Ecolabel`

Stand nach Lauf 004:

- 28 Qualitätssiegel wurden insgesamt recherchiert
- nach Scope-Schaerfung bleiben 19 aktive Eintraege fuer Nahrung/Drogerie im Master-Draft
- 9 Eintraege sind lokal nach `data/drafts/qualitaetssiegel.out-of-scope.archive.json` ausgelagert
- aktuelle uebergabefaehige Datei: `data/processed/qualitaetssiegel.json`

Stand weitere JSONs:

- aktuelle uebergabefaehige Glossar-Datei: `data/processed/glossar.json`
- lokale Lieferketten-Arbeitsbasis: `data/drafts/lieferketten.master.draft.json`
- lokale Lieferketten-Priorisierung: `data/drafts/lieferketten.research-queue.json`
- aktuelle uebergabefaehige Lieferketten-Datei: `data/processed/lieferketten.json`
- methodischer Abgleich zwischen Siegel- und Lieferkettenlogik: `docs/siegel-lieferketten-abgleich.md`

Stand Lieferketten Pilot 001:

- 2 erste belastbare Lieferketten-Eintraege in `data/processed/lieferketten.json`
- `tonys-chocolonely-schokolade-kakao`
- `followfood-thunfisch-malediven`

Stand Lieferketten nach Lauf 002:

- 5 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen:
  - `rapunzel-kaffee-cafe-capitan-mexiko`
  - `andechser-bio-weidemilch-38`
  - `weleda-naturkosmetik-palmoel-derivate`

Stand Lieferketten nach Lauf 003:

- 8 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen:
  - `gepa-tee-tpi-darjeeling`
  - `followfood-bio-lachs-norwegen`
  - `ferrero-nutella-palmoel`

## Entscheidungen Vom 2026-05-12

- Die Matrix darf erweitert werden, wenn neue Siegeltypen sonst methodisch falsch einsortiert würden.
- Mass Balance wird nicht pauschal abgezogen, sondern nur dann, wenn das konkrete Siegel oder die bewertete Produkt-/Rohstoffgruppe davon betroffen ist.
- Ziel ist: so viele geprüfte Siegel wie möglich, aber nur mit verlässlicher Bewertung.
- Zuerst werden vorhandene Notion-Daten bereinigt und in sauberes JSON gebracht; neue Siegel kommen danach ergänzend.
- `draft`, `reviewed` und `approved` sind interne Arbeitsstati. Sie sollen nicht in finalen JSONs für das App-Team stehen.
- Notion wird aktuell nicht bearbeitet. Alle Änderungen passieren lokal.
