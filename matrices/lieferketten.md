# Bewertungsmatrix Lieferketten

Version: abgeleitet aus Notion `Phase 4 - Bewertungsmatrix Lieferketten`, Stand 2026-05-12

## Score-Grenzen

- Mindestscore: `1`
- Maximalscore: `10`
- Formel: `final = clamp(basis + plus + minus, 1, 10)`

## Basis-Scores

| Kettentyp | Startwert | Definition |
|---|---:|---|
| Direktbezug | 10 | vollständiges Mapping bis Ursprung, z. B. Feld, Schiff, Mine |
| Vertikale Integration | 8 | eigene Verarbeitungskapazitäten im Ursprungsland |
| Tier-2-Transparenz | 6 | Prozessoren bekannt, Rohstoffquelle nur regional eingrenzbar |
| Tier-1-Fokus | 4 | nur direkter Vertragspartner bekannt |
| Spot-Markt / Broker | 1 | anonyme Börsen, Broker oder viele unbekannte Zwischenhändler |

## Boni

| Faktor | Effekt | Beleganforderung |
|---|---:|---|
| Echtzeit-Monitoring | +2 | Satellitendaten, AIS, Entwaldungsmonitoring oder vergleichbares System |
| Hebelwirkung | +1 | vertragliche Kaskadierung der Standards bis Tier-N |
| Vor-Ort-Präsenz | +1 | eigene Auditoren, Partner-NGOs oder lokale Beschwerde-/Kontrollstruktur |

## Abzüge

| Faktor | Effekt | Beleganforderung |
|---|---:|---|
| Geographisches Risiko | -4 | ITUC-Kategorie 5, Conflict-Affected Area oder äquivalenter Hochrisiko-Beleg |
| Rohstoff-Spezifik | -2 | systemisches Risiko wie Kinderarbeit bei Kakao, Kobalt, Entwaldung bei Soja/Palmöl ohne Sonderprogramm |
| Mangelnde Kontrolltiefe | -2 | reine Selbstauskunft ohne Drittverifizierung |
| Massenbilanzierung | -1 | keine physische Warentrennung oder Mixing |

## Empfohlene Pflichtdaten

- Unternehmen
- Produkt oder Warengruppe
- Rohstoff
- Herkunftsland/-region
- bekannte Tier-Stufen der Lieferkette
- Tracking-Mechanismus, z. B. GTIN, Batch, QR, GLN, GGN
- Zertifizierungsmodell: Identity Preserved, Segregation, Mass Balance, Book & Claim, unbekannt
- Risikoindikatoren
- Quellen mit Datum

## Mindest-Ausgabe Pro Bewertung

```json
{
  "id": "unternehmen-produkt-rohstoff",
  "unternehmen": "Unternehmen",
  "produkt": "Produkt/Warengruppe",
  "rohstoff": "Kakao|Soja|Palmöl|Fisch|...",
  "kettentyp": "Direktbezug|Vertikale Integration|Tier-2-Transparenz|Tier-1-Fokus|Spot-Markt / Broker",
  "scoring": {
    "basis": 0,
    "plus": 0,
    "minus": 0,
    "final": 0
  },
  "faktoren": [],
  "quellen": [],
  "unsicherheit": "niedrig|mittel|hoch",
  "review_status": "draft|source_checked|reviewed|approved"
}
```

