# Quellenstrategie

## Ziel

Jede Bewertung muss mit Quellen nachvollziehbar sein. Quellen sollen nicht nur genannt, sondern einem konkreten Bewertungsfaktor zugeordnet werden.

## Bevorzugte Quellen

- Standarddokumente und Richtlinien der Siegelgeber
- Verordnungen und Behördeninformationen
- Audit- und Zertifizierungsregeln
- NGO-Reports und Verbraucherorganisationen
- Nachhaltigkeitsberichte nur als Unternehmensselbstauskunft, nicht als alleiniger Beleg für Wirksamkeit

## Quellenfelder

```json
{
  "id": "q1",
  "titel": "Quelle",
  "url": "https://...",
  "herausgeber": "Organisation",
  "jahr": 2026,
  "quelle_typ": "primaer|regulatorisch|ngo|wissenschaft|unternehmen|medien",
  "rating": "A|B|C|D",
  "belegt_kriterien": ["Mass Balance"],
  "notiz": "Warum relevant?"
}
```

## Problem Aus Notion

Mehrere vorhandene Einträge haben nur `link` als URL. Diese Einträge sind für eine finale Bewertung noch nicht ausreichend.

