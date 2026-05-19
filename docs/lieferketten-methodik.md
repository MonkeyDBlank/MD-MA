# Methodik Für Lieferkettenbewertungen

## Problem

Unser Projekt baut keine App. Wir liefern recherchierte und bewertete Informationen als JSON. Trotzdem ist das spätere Nutzungsszenario wichtig: Wenn die JSON-Daten später in einer Produktumgebung genutzt werden, dürfen sie keine falsche Produktgenauigkeit vortäuschen.

Aktueller Scope dieser Methodik:

- Nahrungsmittel
- Drogerieprodukte

Nicht im aktiven Scope:

- Textilien
- reine Verpackungs- und Forstsiegel ohne direkten Produktbezug
- allgemeine Unternehmenszertifizierungen ohne klaren Produkt- oder Rohstoffbezug

Für viele Produkte ist eine echte Produkt- oder Chargenlieferkette öffentlich nicht verfügbar. Gleichzeitig wäre eine reine Unternehmensbewertung zu grob: Eine Cola, ein Fischprodukt und eine Schokolade desselben Händlers haben völlig unterschiedliche Lieferkettenrisiken.

## Empfehlung

Die Bewertung sollte nicht auf Ebene `jedes einzelne Produkt` und nicht nur auf Ebene `Unternehmen insgesamt` erfolgen, sondern auf einer mittleren Ebene:

`Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell`

Das ist präzise genug für eine App-Anzeige und realistisch genug für Recherche.

## Drei-Ebenen-Modell

### 1. Produkt-Scan-Ebene

Was kann der Scan direkt erkennen?

- Produktname
- Marke/Händler
- Warengruppe
- sichtbare Qualitätssiegel
- Herkunftsangaben
- QR-/Tracking-Code, falls vorhanden
- Zutaten/Rohstoffe, falls aus Datenbank verfügbar

Diese Ebene liefert Fakten über das konkrete Produkt, aber meistens keine vollständige Lieferkette.

### 2. Rohstoff-/Warengruppen-Ebene

Welche typischen Risiken hängen an der Warengruppe?

- Kakao: Kinderarbeit, Armutslöhne, Entwaldung, Mass Balance
- Kaffee: Einkommen, Arbeitsrechte, Pestizide, Klimarisiken
- Palmöl: Entwaldung, Torfmoorzerstörung, Landrechte, Derivate
- Soja: Entwaldung im Cerrado/Amazonas, indirekte Futtermittelketten
- Fisch: Überfischung, Beifang, Fangmethode, Beobachterdaten
- Fleisch/Milch: Tierhaltung, Futtermittel, Soja, Antibiotika, Haltungsform

Diese Ebene erklärt, warum ein Produkt grundsätzlich riskant oder weniger riskant ist.

### 3. Unternehmens-/Marken-Ebene

Was tut das Unternehmen nachweislich?

- Lieferantenlisten
- Sorgfaltspflichten nach LkSG
- Beschwerdemechanismen
- Tracking-Portale
- externe Zertifizierungen
- NGO-Kritik
- konkrete Programme, z. B. Living Wage, CLMRS, entwaldungsfreie Beschaffung

Diese Ebene bewertet nicht das konkrete Produkt allein, sondern die Glaubwürdigkeit und Kontrolltiefe des Unternehmens für diese Warengruppe.

## Aussagearten

Jede App-Ausgabe sollte markieren, wie sicher eine Aussage ist:

| Aussageart | Bedeutung | Beispiel |
|---|---|---|
| `belegt` | Direkt aus Produktdaten, Trackingcode oder Quelle nachweisbar | Produkt trägt EU-Bio und Fairtrade |
| `abgeleitet` | Plausible Bewertung aus Warengruppe, Rohstoff und Unternehmensprogramm | Kakao hat hohes Kinderarbeitsrisiko, Fairtrade senkt Risiko teilweise |
| `unbekannt` | Keine belastbaren Informationen verfügbar | Farm-Level-Herkunft nicht öffentlich |

## Beispiel Cola

Bei Cola wäre eine produktgenaue Lieferkette meist nicht öffentlich rekonstruierbar. Eine ehrliche Anzeige könnte so aussehen:

- Produkt: Cola, Marke X
- Qualitätssiegel: keine oder vorhandene Siegel
- relevante Rohstoffe: Zucker/Süßungsmittel, Wasser, Verpackung, ggf. Koffein/Aromen
- Lieferkettenbewertung: überwiegend Unternehmens-/Warengruppenbewertung
- Unsicherheit: mittel bis hoch, wenn keine konkreten Herkunfts- oder Trackingdaten vorhanden sind

Nicht sinnvoll wäre: Eine scheinbar genaue Farm- oder Fabrikkette zu behaupten, wenn nur Unternehmensberichte vorliegen.

## Beispiel Schokolade

Schokolade eignet sich besser:

- Produkt trägt Fairtrade oder Rainforest Alliance
- Rohstoff Kakao hat bekannte Hochrisiken
- Matrix kann Mass Balance, Living Income, Kinderarbeitsmonitoring und NGO-Kritik berücksichtigen
- Unternehmen kann zusätzlich anhand eigener Programme bewertet werden

## Beispiel Naturkosmetik

Auch Drogerieprodukte lassen sich auf dieser mittleren Ebene sinnvoll bewerten:

- sichtbare Produktsiegel: z. B. `NATRUE`, `COSMOS Organic`, `COSMOS Natural`, `V-Label`
- relevante Rohstoffe: Pflanzenöle, Palm- und Palmkernölderivate, Duftstoffe, Tenside
- Lieferkettenbewertung: meist rohstoff- und standardbasiert, selten chargengenau
- Unsicherheit: häufig mittel, weil Derivate und Vorstufen öffentlich nur begrenzt transparent sind

Wichtig ist hier vor allem, nicht so zu tun, als sei bei einem Drogerieprodukt jede einzelne Vorstufe öffentlich rückverfolgbar.

## Priorisierte Themenfelder Im Scope

Für die nächsten Lieferketten-Drafts sind besonders sinnvoll:

1. Schokolade/Kakao
2. Fisch/Wildfang/Aquakultur
3. Kaffee und Tee
4. Palmöl in Nahrung und Drogerie
5. Tierprodukte und Futtermittel
6. Naturkosmetik und zertifizierte Drogerieprodukte

## Empfohlenes Datenmodell

```json
{
  "id": "unternehmen-warengruppe-rohstoff",
  "unternehmen": "Aldi Süd",
  "marke": "Eigenmarke oder Marke",
  "warengruppe": "Schokolade",
  "rohstoffe": ["Kakao", "Zucker", "Palmöl"],
  "produktbezug": {
    "produktgenauigkeit": "konkret|warengruppe|unternehmen",
    "scan_fakten": ["Fairtrade-Siegel"],
    "tracking_code_verfuegbar": false
  },
  "lieferkettenmodell": "identity_preserved|segregation|mass_balance|book_and_claim|unbekannt",
  "risiken": [],
  "unternehmensmassnahmen": [],
  "scoring": {
    "basis": 0,
    "plus": 0,
    "minus": 0,
    "final": 0
  },
  "aussage_sicherheit": "niedrig|mittel|hoch",
  "hinweis_fuer_app": "Diese Bewertung kombiniert Produktmerkmale mit Warengruppen- und Unternehmensinformationen."
}
```

## Konsequenz Für Das Projekt

Die Studienarbeit kann gerade daraus einen starken methodischen Beitrag machen: Sie zeigt, dass Lieferkettentransparenz selten produktgenau verfügbar ist und dass seriöse JSON-Daten deshalb mit Ebenen, Belegstatus und Unsicherheit arbeiten müssen.

## Verhältnis Zum Glossar

Das Glossar ist ein eigener JSON-Baustein. Siegel- und Lieferketteneinträge müssen nicht auf Glossarbegriffe referenzieren.

Wenn bei der Recherche relevante neue Fachbegriffe auftauchen, wird `glossar.json` nach gleichem Muster erweitert. Nicht jeder Fachbegriff wird aufgenommen, sondern nur Begriffe, die für Bewertung, Verständnis oder Präsentation wichtig sind.
