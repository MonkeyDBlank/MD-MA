# Agenten-Pipeline

## Workflow A: Neues Qualitätssiegel Bewerten

1. `discovery-agent` findet Kandidat.
2. `research-agent` sammelt Richtlinien, Auditmodell, NGO-Bewertungen und Kritik.
3. `source-audit-agent` bewertet Quellen.
4. `scoring-agent` wendet `matrices/qualitaetssiegel.md` an.
5. `review-agent` prüft Score, Belege und Konsistenz.
6. `output-agent` schreibt validiertes Ergebnis.

## Workflow B: Lieferkette Bewerten

1. Produkt/Rohstoff/Unternehmen festlegen.
2. `research-agent` sammelt Herkunft, Tracking, Zertifizierung, Risiko und Monitoring.
3. `source-audit-agent` prüft vor allem Unternehmensangaben gegen NGO/regulatorische Quellen.
4. `scoring-agent` wendet `matrices/lieferketten.md` an.
5. `review-agent` prüft, ob der Kettentyp nicht zu optimistisch gewählt wurde.
6. `output-agent` schreibt validiertes Ergebnis.

## Workflow C: Notion-Daten Bereinigen

1. JSON-artige Notion-Blöcke extrahieren.
2. Syntax bereinigen.
3. Quellen-Platzhalter markieren.
4. Daten gegen Matrix prüfen.
5. Nur geprüfte Datensätze nach `data/processed/` übernehmen.

## Quality Gates

- Kein finaler Score ohne mindestens zwei Quellen, davon mindestens eine starke Quelle (`A` oder `B`).
- Kein Bonus ohne direkten Beleg.
- Kein Abzug für Kritik ohne konkrete Quelle.
- Jede Bewertung bekommt `unsicherheit`.
- Jede neue Kategorie muss erst in der Matrix ergänzt werden.

