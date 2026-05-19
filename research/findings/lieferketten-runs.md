# Lieferkettenlauf-Protokoll

## Lauf 001 - Pilotfaelle Nahrung und Drogerie

Datum: 2026-05-12

Ziel: Eine erste belastbare Lieferkettenbasis fuer den Scope `Nahrungsmittel` und `Drogerieprodukte` anlegen.

## Ausgewaehlte Pilotfaelle

- `tonys-chocolonely-schokolade-kakao`
- `followfood-thunfisch-malediven`

## Auswahlgrund

Beide Faelle wurden gewaehlt, weil sie fuer den Projektstart ueberdurchschnittlich gut oeffentlich dokumentierte Lieferketteninformationen bereitstellen.

- `Tony's Chocolonely`: starke Kakao-Transparenz, Bean Tracker, Living-Income-Ansatz, CLMRS, langfristige Kooperativenbeziehungen
- `followfood`: Tracking-Code auf Produktbasis, Herkunfts- und Fangdaten, eigene Fischereirichtlinien oberhalb des MSC-Mindeststandards

## Entstandene Dateien

- `data/drafts/lieferketten.agent-run-001.draft.json`
- `data/drafts/lieferketten.master.draft.json`
- `data/processed/lieferketten.json`

## Ergebnis

`data/processed/lieferketten.json` enthaelt derzeit 2 uebergabefaehige Pilot-Eintraege. Die Datei ist valide, aber noch kein Vollbestand.

## Methodische Hinweise

- Beide Eintraege sind bewusst als `Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell` angelegt.
- `Tony's Chocolonely` ist marken- und rohstoffbasiert, aber nicht chargengenau.
- `followfood` ist durch Tracking-Code naeher an einer konkreten Produktaussage als viele andere Fischprodukte.
- Die hohen Scores zeigen vor allem die Transparenzqualitaet dieser beiden Pilotfaelle, nicht den Branchendurchschnitt.

## Lauf 002 - Ausbau auf Kaffee, Milch und Drogerie

Datum: 2026-05-12

Ziel: Die Pilotbasis auf weitere fuer den Scope wichtige Cluster erweitern:

- Kaffee
- Tierprodukte / Milch
- Drogerieprodukte / Naturkosmetik mit Palmbezug

## Neue Eintraege

- `rapunzel-kaffee-cafe-capitan-mexiko`
- `andechser-bio-weidemilch-38`
- `weleda-naturkosmetik-palmoel-derivate`

## Auswahlgrund

- `Rapunzel`: firmeneigenes HAND IN HAND-Programm mit direktem Ursprungseinkauf, externer Zertifizierung und physischer Rueckverfolgbarkeit in den Kriterien
- `Andechser Natur`: konkrete Produktrueckverfolgung bis zum Bio-Bauern, transparenter Futterkreislauf und bekannter Lieferkreis
- `Weleda`: fuer Drogerie ungewoehnlich offene Rohstoff- und Palmkommunikation mit UEBT- und RSPO-Bezug

## Entstandene Dateien

- `data/drafts/lieferketten.agent-run-002.draft.json`
- aktualisiert: `data/drafts/lieferketten.master.draft.json`
- aktualisiert: `data/processed/lieferketten.json`

## Ergebnis

`data/processed/lieferketten.json` enthaelt jetzt 5 aktive Pilot-Eintraege.

## Methodische Hinweise

- `Rapunzel` ist deutlich besser belegt als typische Kaffeemarken, bleibt aber auf Partnerprogramm-Ebene und nicht chargengenau.
- `Andechser` ist fuer Milch ueberdurchschnittlich transparent, aber nicht vollstaendig offen bis in jede Futtermittel-Vorstufe.
- `Weleda` ist als Drogeriefall bewusst nur auf Unternehmens-/Warengruppenebene bewertet, weil Palmderivate in Naturkosmetik selten produktscharf oeffentlich rueckverfolgbar sind.

## Lauf 003 - Tee, Aquakultur und Palm in Lebensmitteln

Datum: 2026-05-12

Ziel: Die Lieferkettenbasis in drei weiteren Clustern verbreitern:

- Tee
- Aquakultur
- Palmöl in Lebensmitteln

## Neue Einträge

- `gepa-tee-tpi-darjeeling`
- `followfood-bio-lachs-norwegen`
- `ferrero-nutella-palmoel`

## Auswahlgrund

- `GEPA`: langjährige, offen beschriebene Tee-Partnerschaft mit Tea Promoters India
- `followfood Bio-Lachs`: Tracking-Code, Bio-Aquakultur als Mindeststandard und Herkunftsangaben bis zur Farm-/Länderebene
- `Ferrero/Nutella`: im Branchenvergleich ungewöhnlich offen dokumentierte Palmöl-Lieferkette mit segregiertem RSPO-Modell und Satellitenmonitoring

## Entstandene Dateien

- `data/drafts/lieferketten.agent-run-003.draft.json`
- aktualisiert: `data/drafts/lieferketten.master.draft.json`
- aktualisiert: `data/processed/lieferketten.json`

## Ergebnis

`data/processed/lieferketten.json` enthaelt jetzt 8 aktive Pilot-Eintraege.

## Methodische Hinweise

- `GEPA` bleibt ein Partnerprogramm-Fall und keine chargengenaue Tee-Rueckverfolgung.
- `followfood Bio-Lachs` ist fuer Aquakultur stark, aber die Futtermittel-Vorstufen bleiben nur teilweise oeffentlich.
- `Ferrero/Nutella` ist bewusst nur fuer den Palm-Rohstoff und nicht fuer die Gesamtlieferkette aller Nutella-Zutaten bewertet.

## Lauf 004 - Obst und Drogerie-Rohstoffketten

Datum: 2026-05-19

Ziel: Die Pilotbasis um einen belastbaren Obstfall und einen weiteren starken Drogeriefall erweitern.

## Neue Eintraege

- `banafair-bio-bananen-urocal-ecuador`
- `dr-bronner-reine-naturseife-rohstoffkette`

## Auswahlgrund

- `BanaFair`: klarer Deutschlandbezug, spezialisierte Bananenmarke, langjaehrige Partnerschaft mit UROCAL sowie Bio-/Fairtrade-/Naturland-Einbettung
- `Dr. Bronner's`: fuer Drogerie ungewoehnlich offene Rohstoffkommunikation zu Palm, Kokos und Olive mit Fair-Trade- und teils regenerativen Projektketten

## Eingesetzte Subagents

| Agent-ID | Thema | Aufgabe | Ergebnis |
|---|---|---|---|
| `019e4002-5ae7-7f60-a14f-8fd0f7c7601b` | BanaFair | Neuer Obst-Pilotfall | `banafair-bio-bananen-urocal-ecuador` empfohlen |
| `019e4002-5bd7-7e41-aaee-200b2890f054` | Dr. Bronner | Neuer Drogerie-Pilotfall | `dr-bronner-reine-naturseife-rohstoffkette` empfohlen |

## Entstandene Dateien

- `data/drafts/lieferketten.agent-run-004.draft.json`
- aktualisiert: `data/drafts/lieferketten.master.draft.json`
- aktualisiert: `data/processed/lieferketten.json`

## Ergebnis

`data/processed/lieferketten.json` enthaelt jetzt 10 aktive Pilot-Eintraege.

## Methodische Hinweise

- `BanaFair` bleibt bewusst ein Marken-/Produktgruppenfall und nicht die chargengenaue Lieferkette jeder Banane.
- `Dr. Bronner's` wurde auf Produktlinien- und Kernrohstoffebene aufgenommen, nicht auf Ebene einer einzelnen Seifencharge.
