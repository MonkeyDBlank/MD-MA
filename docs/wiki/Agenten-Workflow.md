# Agenten-Workflow

## Ziel

Die Arbeit soll nicht an einem einzelnen undurchsichtigen KI-Output haengen, sondern ueber nachvollziehbare Teilrollen organisiert werden.

## Rollenmodell

Aktuell sinnvoll getrennte Rollen:

- Discovery / Recherche
- Quellenpruefung
- Bewertung gegen Matrix
- Review / Konsolidierung
- Ausgabe in JSON

## Praktischer Ablauf

1. Themen oder Siegel identifizieren
2. Quellen recherchieren
3. Primaer- und Sekundaerquellen trennen
4. Bewertungsfaktoren gegen Matrix pruefen
5. Ergebnis begruenden
6. JSON-Objekt bauen
7. Konsolidierung in Draft-Datei
8. Uebernahme in `data/processed/` nur bei ausreichender Verlaesslichkeit

## Dokumentation

Agentenlaeufe werden lokal protokolliert:

- `research/findings/agent-runs.md`
- `research/findings/lieferketten-runs.md`

Dadurch bleibt sichtbar:

- welcher Lauf gestartet wurde
- welche Rolle welcher Agent hatte
- welche Artefakte daraus entstanden sind
- welche Entscheidungen offen geblieben sind

## Warum dieser Ansatz

Der Agenten-Workflow ist fuer das Projekt sinnvoll, weil:

- mehr Recherche parallelisiert werden kann
- Bewertungen nicht unkontrolliert direkt in Enddateien laufen
- Quellenlage und Unsicherheit sauberer getrennt werden
- der Prozess fuer Studienzwecke besser dokumentierbar ist

