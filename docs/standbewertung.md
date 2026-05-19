# Bewertung Des Aktuellen Projektstands

## Kurzurteil

Der Projektstand ist für ein Studienprojekt stark: Es gibt Matrixlogik, Recherchematerial, Beispiele, ein Glossar und erste strukturierte Daten. Für eine belastbare Automatisierung fehlen aber noch Datenhygiene, Quellenprüfung und ein kontrollierter Agentenprozess.

## Stärken

- Die fachliche Richtung ist klar: Qualitätssiegel werden produktbezogen bewertet, Lieferketten unternehmens- und rohstoffbezogen.
- Die Siegelmatrix ist einfach genug, um automatisiert angewendet zu werden.
- Es gibt bereits bewertete Beispiele, die als Testset für Agenten dienen können.
- Das Glossar deckt zentrale Begriffe ab: Mass Balance, physische Rückverfolgbarkeit, Chain of Custody, NGO-Kritik, Greenwashing, Prozessstandard usw.
- Die Lieferkettenrecherche benennt sinnvolle Datenpunkte: GPS/Polygon, GTIN, Batch, GLN, Zertifizierungsgrad, Living Income, Monitoring, Beschwerdestatistiken.
- Der Projektbezug zur Lehrveranstaltung ist gut sichtbar: rechtlicher Rahmen, Bewertungsmatrix, Agentenauswertung.

## Schwächen

- Notion enthält JSON-artige Blöcke, die nicht direkt maschinenlesbar sind.
- Quellen sind nicht konsequent prüfbar; mehrere Einträge haben Platzhalter-URLs.
- Einige Scores wirken nicht vollständig aus der formalisierten Matrix ableitbar, z. B. zusätzliche Kategorien mit Basiswerten 8 oder 9, obwohl die Matrix diese Werte noch nicht explizit definiert.
- `Teilweise NGO-Kritik`, `Industrienähe`, `Einzelfallkritik` usw. werden in späteren Daten genutzt, stehen aber nicht sauber als Regeln in der ursprünglichen Siegelmatrix.
- Die Lieferkettenmatrix existiert, aber es gibt noch keine ausgefüllten Lieferketten-Evaluationen.
- Es fehlt ein Review-Status: recherchiert, bewertet, quellengeprüft, freigegeben.

## Hauptentscheidung

Die Automatisierung sollte nicht sofort "voll autonom" neue Siegel ins Endergebnis schreiben. Besser ist ein kontrollierter Pipeline-Ansatz:

1. Recherche-Agent sammelt Kandidaten und Quellen.
2. Quellen-Agent bewertet Quellenqualität.
3. Bewertungs-Agent wendet Matrix an.
4. Review-Agent prüft Konsistenz, Rechenlogik und Belege.
5. Output-Agent schreibt nur geprüfte Ergebnisse in JSON/Notion.

## Empfohlene nächste Schritte

1. Siegelmatrix normalisieren und alle tatsächlich verwendeten Faktoren nachtragen.
2. Qualitätssiegel-Daten aus Notion in gültiges JSON überführen.
3. Quellenfelder in Pflichtfelder aufteilen: `url`, `quelle_typ`, `zugriff_am`, `belegt_kriterium`, `vertrauensstufe`.
4. Lieferketten-Datenmodell initial füllen: je ein Beispiel für Kakao, Soja, Fisch, Palmöl.
5. Agenten zunächst auf 3 bis 5 bekannten Siegeln testen und gegen manuelle Bewertung vergleichen.

