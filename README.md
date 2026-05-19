# MD&MA Bewertungsautomation

Lokales Arbeitsprojekt zur Automatisierung der Recherche und Bewertung von Qualitätssiegeln und Lieferketten auf Basis des Notion-Projektstands `MD&MA`.

## Ziel

Das Projekt soll aus Recherchequellen strukturierte Bewertungen erzeugen:

- Qualitätssiegel: Standard, Träger, Kontrollsystem, Rückverfolgbarkeit, NGO-Bewertung, Kritik, Score.
- Lieferketten: Unternehmen, Produkt/Rohstoff, Kettentiefe, Herkunftsrisiken, Kontrolltiefe, Monitoring, Score.
- Jede Bewertung braucht Belege, Unsicherheitsgrad und Review-Status.

## Ordnerstruktur

- `docs/`: Projektstand, Notion-Inventar, Bewertung des aktuellen Stands.
- `matrices/`: Bewertungsmatrizen als maschinennahe Regeln.
- `agents/`: Agentenrollen, Zuständigkeiten und Übergabeformate.
- `workflows/`: End-to-end-Abläufe für Recherche, Bewertung und Review.
- `data/raw/`: Rohdaten aus Notion oder Web-Recherche.
- `data/processed/`: bereinigte JSON/CSV-Daten für App oder Auswertung.
- `research/sources/`: Quellenlisten und Quellenbewertung.
- `research/findings/`: Einzelfunde, Recherche-Notizen, offene Evidenzfragen.

## Aktueller Stand in einem Satz

Die Siegel-Bewertung ist fachlich weit fortgeschritten, aber noch nicht sauber genug belegt und strukturiert; die Lieferketten-Bewertung hat eine gute Matrix und starke Hintergrundrecherche, aber noch kein gefülltes Datenmodell.

