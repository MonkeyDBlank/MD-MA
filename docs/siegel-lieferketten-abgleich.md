# Abgleich Siegel und Lieferketten

Stand: 2026-05-12

## Ziel

Dieser Abgleich dokumentiert, wie generische Siegelscores und konkrete Lieferkettenfaelle zusammenpassen.

## Grundregel

Die beiden JSONs bewerten unterschiedliche Dinge:

- `qualitaetssiegel.json` bewertet die generische Qualitaet eines Standards oder Siegels.
- `lieferketten.json` bewertet einen konkreten Fall auf Ebene `Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell`.

Darum muessen Scores nicht identisch sein.

## Wichtige Faelle

### `fairtrade`

- generischer Siegelscore niedrig bis mittel, wenn betroffene Produktgruppen Mass Balance nutzen
- konkrete Lieferkettenfaelle koennen trotzdem deutlich besser sein, wenn zusaetzliche Transparenz- und Kontrollsysteme belegt sind
- Beispiel: `tonys-chocolonely-schokolade-kakao`

### `msc`

- generischer Siegelscore mittel wegen relevanter NGO-Kritik
- konkrete Lieferkettenfaelle koennen hoeher liegen, wenn ueber MSC hinaus Tracking-Code, Herkunft, Fangmethode und eigene strengere Richtlinien belegt sind
- Beispiel: `followfood-thunfisch-malediven`

### `asc`

- generischer Siegelscore mittel
- konkrete Aquakulturfaelle muessen separat danach beurteilt werden, ob sie wirklich auf ASC beruhen oder primaer ueber Bio-/Tracking-Systeme laufen
- Beispiel: `followfood-bio-lachs-norwegen` wird nicht einfach aus dem ASC-Siegelscore abgeleitet

### `rspo`

- generischer Siegelscore niedrig, wenn Mass Balance und Kritik dominieren
- konkrete Faelle koennen besser liegen, wenn ein Unternehmen fuer ein Produkt segregiertes RSPO, Muehlen-/Plantagentransparenz und Monitoring belegt
- Beispiel: `ferrero-nutella-palmoel`
- konkrete Faelle koennen auch beim generischen Befund bleiben oder schlechter wirken, wenn in der Praxis weiter Mass Balance dominiert
- Beispiel: `weleda-naturkosmetik-palmoel-derivate`

### `natrue` und `cosmos`

- generische Siegelscores bleiben relativ hoch, weil Palm-Mass-Balance nicht pauschal auf das ganze Kosmetiksiegel durchschlaegt
- konkrete Lieferkettenfaelle fuer Palm-Derivate in Drogerieprodukten duerfen trotzdem kritischer bewertet werden
- Beispiel: `weleda-naturkosmetik-palmoel-derivate`

## Technische Umsetzung

Lieferketteneintraege koennen optional ein Feld `relevante_siegel` tragen. Dieses Feld erklaert:

- welches Siegel fuer den Fall relevant ist
- welche Rolle es spielt
- warum der konkrete Lieferkettenscore vom generischen Siegelscore abweichen kann

Das verhindert Scheinkonsistenz und macht die beiden JSONs zusammen lesbar.
