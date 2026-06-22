# Projektkontext MD&MA

Stand: 2026-06-22

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

## Wichtige Formatregel

Die JSON-Formate gelten aktuell als stabiler Uebergabevertrag zum App- und Datenbankteam.

- keine neuen Felder
- keine Umbenennungen
- keine Entfernungen bestehender Felder

ohne vorherige explizite Entscheidung, weil jede Strukturänderung separat kommuniziert und abgestimmt werden muss. Laufende Arbeit erweitert daher in erster Linie Inhalte, nicht das Format.

## GitHub-First-Status

Seit dem Wechsel weg von Notion wird die laufende Hauptdokumentation im Repo und im GitHub-Wiki gepflegt.

Wichtige Einstiegspunkte:

- `AGENTS.md`
- `AGENT_START_HERE.md`
- `context/project-context.snapshot.json`
- `docs/wiki/Home.md`
- `docs/wiki/Projektstand.md`
- `docs/wiki/Projektgeschichte-Zeitstrahl.md`

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

Der historische Notion-Stand ist mittlerweile weitgehend in eine GitHub-first-Arbeitsbasis ueberfuehrt.

Aktueller Datenstand:

- `data/processed/qualitaetssiegel.json`: 50 aktive Eintraege
- `data/processed/lieferketten.json`: 35 aktive Pilotfaelle
- `data/processed/glossar.json`: 24 relevante Begriffe

Der aktuelle Engpass ist nicht mehr die Grundstruktur, sondern die fortlaufende fachliche Erweiterung mit belastbaren Primaerquellen, sauberer Kategorisierung und guter Doku-Synchronisierung zwischen Repo und GitHub-Wiki.

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

1. Weitere relevante Siegel im Deutschland-/Nahrung-/Drogerie-Scope recherchieren und integrieren.
2. Lieferkettenbasis um weitere belastbare Warengruppenfaelle erweitern, ohne Scheingenauigkeit auf Einzelproduktebene vorzutaeuschen.
3. Glossar nur bei klar relevantem Erkenntnisgewinn erweitern.
4. Repo-Doku und GitHub-Wiki bei jeder inhaltlichen Runde mitziehen.

## Aktuelle Arbeitsrichtung

Agentengestuetzte Erweiterungslaeufe fuer:

- neue relevante Produktsiegel im deutschen Markt
- weitere belastbare Lieferketten-Pilotfaelle
- GitHub-first-Dokumentation statt Notion als Hauptablage

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

Stand nach Lauf 005:

- 23 aktive Siegel-Eintraege in `data/processed/qualitaetssiegel.json`
- neu hinzugekommen:
  - `deutsches-bio-siegel`
  - `neuland`
  - `vegan-trademark-veganblume`
  - `leaping-bunny`

Stand nach Lauf 006:

- 26 aktive Siegel-Eintraege in `data/processed/qualitaetssiegel.json`
- neu hinzugekommen:
  - `bayerisches-bio-siegel`
  - `kat`
  - `regionalfenster`

Stand nach Lauf 007:

- 28 aktive Siegel-Eintraege in `data/processed/qualitaetssiegel.json`
- neu hinzugekommen:
  - `ncp`
  - `ncs`

Stand weitere JSONs:

- aktuelle uebergabefaehige Glossar-Datei: `data/processed/glossar.json`
- aktueller Zaehler: 24 Begriffe
- lokale Lieferketten-Arbeitsbasis: `data/drafts/lieferketten.master.draft.json`
- lokale Lieferketten-Priorisierung: `data/drafts/lieferketten.research-queue.json`
- aktuelle uebergabefaehige Lieferketten-Datei: `data/processed/lieferketten.json`
- aktueller Zaehler: 35 aktive Pilotfaelle
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

Stand Lieferketten nach Lauf 004:

- 10 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen:
  - `banafair-bio-bananen-urocal-ecuador`
  - `dr-bronner-reine-naturseife-rohstoffkette`

Stand Lieferketten nach Lauf 005:

- 12 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen:
  - `eifrisch-schaleneier-kat-deutschland`
  - `sonett-seifen-und-waschmittel-rohstoffkette`

Stand Lieferketten nach Lauf 006:

- 13 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen:
  - `kaufland-eigenmarken-fisch-ftrace`

## Entscheidungen Vom 2026-05-12

- Die Matrix darf erweitert werden, wenn neue Siegeltypen sonst methodisch falsch einsortiert würden.
- Mass Balance wird nicht pauschal abgezogen, sondern nur dann, wenn das konkrete Siegel oder die bewertete Produkt-/Rohstoffgruppe davon betroffen ist.
- Ziel ist: so viele geprüfte Siegel wie möglich, aber nur mit verlässlicher Bewertung.
- Zuerst werden vorhandene Notion-Daten bereinigt und in sauberes JSON gebracht; neue Siegel kommen danach ergänzend.
- `draft`, `reviewed` und `approved` sind interne Arbeitsstati. Sie sollen nicht in finalen JSONs für das App-Team stehen.
- Notion wird aktuell nicht bearbeitet. Alle Änderungen passieren lokal.

Stand nach Lauf 008 / Lieferketten Lauf 007:

- 33 aktive Siegel-Eintraege in `data/processed/qualitaetssiegel.json`
- neu hinzugekommen bzw. reaktiviert: `bio-suisse-knospe`, `blauer-engel`, `ecogarantie`, `ecocert-ecodetergents`, `eu-ecolabel`
- 15 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen: `gepa-schokolade-kakao-cooproagro`, `lidl-way-to-go-schokolade-kakao-ghana`
- 21 Glossar-Begriffe in `data/processed/glossar.json`
- neu hinzugekommen: `typ-i-umweltzeichen`, `baseline-assessment`

Stand nach Lauf 009 / Lieferketten Lauf 008:

- 38 aktive Siegel-Eintraege in `data/processed/qualitaetssiegel.json`
- neu hinzugekommen: `fuer-mehr-tierschutz`, `staatliche-tierhaltungskennzeichnung`, `nutri-score`, `pro-weideland`, `gepruefte-qualitaet-bayern`
- 18 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen: `ritter-sport-schokolade-kakao-el-cacao-nicaragua`, `rewe-bio-cafe-mujer-kaffee-peru`, `alnatura-peru-cafe-bio-kaffee`
- 24 Glossar-Begriffe in `data/processed/glossar.json`
- neu hinzugekommen: `tierhaltungskennzeichnung`, `naehrwertkennzeichnung`, `weidemilch`

Stand nach Lauf 010 / Lieferketten Lauf 009:

- 50 aktive Siegel-Eintraege in `data/processed/qualitaetssiegel.json`
- neu hinzugekommen: `aoecs-crossed-grain`, `bdih-kontrollierte-naturkosmetik`, `bio-zeichen-baden-wuerttemberg`, `biopark`, `donausoja-europe-soya`, `ecoland`, `fair-rubber`, `fairwild`, `friend-of-the-sea`, `gaea`, `qualitaetszeichen-bw`, `uebt-certified`
- 35 aktive Lieferketten-Eintraege in `data/processed/lieferketten.json`
- neu hinzugekommen: `aldi-nord-eigenmarken-kaffee-kakao-tee-zertifiziert`, `aldi-sued-choceur-choco-changer-kakao`, `dm-denkmit-spuelmittel-tenside-circular-feedstock`, `dmbio-kaffee-bio-fairtrade`, `edeka-eigenmarken-fisch-ftrace`, `fair-rubber-kondome-naturkautschuk`, `kaufland-fleisch-eigenmarke-ftrace`, `lavera-naturkosmetik-palmoel-derivate`, `lebensbaum-tee-gewuerze-we-care`, `lidl-bananen-living-wage-kolumbien`, `lidl-eigenmarken-palmoel-rspo`, `pukka-kraeutertee-fairwild`, `rewe-bananen-pro-planet-qr`, `rewe-pro-planet-ananas`, `rossmann-alterra-palmoel-derivate`, `teekampagne-darjeeling-tee`, `voelkel-direktsaft-streuobst`
- Glossar unveraendert bei 24 Begriffen
