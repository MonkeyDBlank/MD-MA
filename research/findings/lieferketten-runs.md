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

## Lauf 005 - Eier und Wasch-/Reinigungsrohstoffe

Datum: 2026-05-19

Ziel: Den Pilotbestand um einen alltagsnahen Eier-Fall und einen staerkeren Wasch-/Reinigungsfall erweitern.

## Neue Eintraege

- `eifrisch-schaleneier-kat-deutschland`
- `sonett-seifen-und-waschmittel-rohstoffkette`

## Auswahlgrund

- `Eifrisch`: deutsche Alltagsware mit KAT-basierter Herkunftssicherung, Eiercode-Logik und oeffentlich beschriebener Warenflussarchitektur
- `Sonett`: fuer Drogerie ungewoehnlich starke Produkt- und Rohstoffkommunikation mit konkreten Oelherkuenften und offener Palm-Einordnung

## Eingesetzte Subagents

| Agent-ID | Thema | Aufgabe | Ergebnis |
|---|---|---|---|
| `019e401d-e991-7940-a12c-d1d7a798504b` | Eifrisch / KAT | Neuer Eier-Pilotfall | `eifrisch-schaleneier-kat-deutschland` empfohlen |
| `019e401d-e89b-7ec1-a9d7-777d123f2ff8` | Sonett | Neuer Wasch-/Reinigungs-Pilotfall | `sonett-seifen-und-waschmittel-rohstoffkette` empfohlen |

## Entstandene Dateien

- `data/drafts/lieferketten.agent-run-005.draft.json`
- aktualisiert: `data/drafts/lieferketten.master.draft.json`
- aktualisiert: `data/processed/lieferketten.json`

## Ergebnis

`data/processed/lieferketten.json` enthaelt jetzt 12 aktive Pilot-Eintraege.

## Methodische Hinweise

- `Eifrisch` wird bewusst als `Unternehmen/Marke + Warengruppe + Rueckverfolgbarkeitssystem` gefuehrt, nicht als packungsscharfer Eier-Eintrag ohne Eiercode.
- `Sonett` bleibt ein produktliniennaher Rohstofffall mit starker Teiltransparenz, aber ohne chargengenaue Offenlegung aller Tensidvorstufen.

## Lauf 006 - Handelsfall Fisch mit bestehendem Schema erweitert

Datum: 2026-05-19

Ziel: Einen alltagsnahen Handelsfall fuer Fischprodukte hinzufuegen, ohne das Lieferkettenformat zu aendern.

## Neue Eintraege

- `kaufland-eigenmarken-fisch-ftrace`

## Auswahlgrund

- `Kaufland`: klarer Verbraucherzugang ueber QR-/GTIN-/LOT-Eingabe, Eigenmarkenbezug und veroeffentlichte Fischleitlinie mit Rueckverfolgbarkeits- und IUU-Regeln

## Eingesetzte Subagents

| Agent-ID | Thema | Aufgabe | Ergebnis |
|---|---|---|---|
| `019e4046-6098-79a1-80b7-9a34d0a3d599` | Kaufland / fTRACE | Alltagsnahen Handels-Fischfall im bestehenden Schema ausarbeiten | `kaufland-eigenmarken-fisch-ftrace` empfohlen |

## Entstandene Dateien

- `data/drafts/lieferketten.agent-run-006.draft.json`
- aktualisiert: `data/drafts/lieferketten.master.draft.json`
- aktualisiert: `data/processed/lieferketten.json`

## Ergebnis

`data/processed/lieferketten.json` enthaelt jetzt 13 aktive Pilot-Eintraege.

## Methodische Hinweise

- `Kaufland` wird als produktliniennaher Handelsfall modelliert, weil die oeffentliche Rueckverfolgbarkeit stark am konkreten QR-/LOT-Bezug haengt.
- Das bestehende Lieferkettenformat blieb unveraendert; es wurde nur ein weiterer Eintrag im vorhandenen Schema ergaenzt.

## Lauf 007 - Lieferketten Kakao/Schokolade (2026-05-19)

Neue Eintraege: `gepa-schokolade-kakao-cooproagro` und `lidl-way-to-go-schokolade-kakao-ghana`. GEPA wurde wegen physischer Rueckverfolgbarkeit und Verzicht auf Mengenausgleich fuer Schokolade/Gebaeck hoch bewertet; Trinkschokolade ist wegen kommunizierter Ausnahme ausgeklammert. Lidl wurde als Discount-Pilotfall mit Fairtrade-, Way-To-Go- und Living-Income-Programm aufgenommen, aber wegen programmbezogener statt chargengenauer Transparenz unter GEPA/Tony's eingeordnet.

## Lauf 008 - Lieferketten Kakao/Kaffee (2026-06-02)

Neue Eintraege: `ritter-sport-schokolade-kakao-el-cacao-nicaragua`, `rewe-bio-cafe-mujer-kaffee-peru`, `alnatura-peru-cafe-bio-kaffee`. Die Bewertungen bleiben auf Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell begrenzt; keine chargengenaue Herkunft wird behauptet, wenn sie nicht oeffentlich belegt ist.

## Lauf 009 - Lieferketten Nahrung/Drogerie (2026-06-22)

Ziel: Die Lieferkettenbasis von 18 auf 35 aktive Pilotfaelle erweitern.

### Eingesetzte Agentenlogik

- `discovery-agent`: neue Pilotfaelle gegen bestehende IDs und Scope abgeglichen
- `research-agent`: Primaerquellen, Unternehmensseiten, Standards und Risikokontexte gesammelt
- `source-audit-agent`: zwischen Unternehmensangaben, Standardquellen und unabhaengigem Risikokontext unterschieden
- `scoring-agent`: Lieferkettenmatrix angewendet
- `review-agent`: keine produktscharfe Aussage zugelassen, wenn nur Warengruppen- oder Unternehmensdaten belegt sind
- `output-agent`: Draft und finale JSONs im bestehenden Schema erstellt

### Neue Dateien

- `data/drafts/lieferketten.agent-run-009.draft.json`
- aktualisiert: `data/drafts/lieferketten.master.draft.json`
- aktualisiert: `data/processed/lieferketten.json`

### Neue Eintraege

- `aldi-nord-eigenmarken-kaffee-kakao-tee-zertifiziert`
- `aldi-sued-choceur-choco-changer-kakao`
- `dm-denkmit-spuelmittel-tenside-circular-feedstock`
- `dmbio-kaffee-bio-fairtrade`
- `edeka-eigenmarken-fisch-ftrace`
- `fair-rubber-kondome-naturkautschuk`
- `kaufland-fleisch-eigenmarke-ftrace`
- `lavera-naturkosmetik-palmoel-derivate`
- `lebensbaum-tee-gewuerze-we-care`
- `lidl-bananen-living-wage-kolumbien`
- `lidl-eigenmarken-palmoel-rspo`
- `pukka-kraeutertee-fairwild`
- `rewe-bananen-pro-planet-qr`
- `rewe-pro-planet-ananas`
- `rossmann-alterra-palmoel-derivate`
- `teekampagne-darjeeling-tee`
- `voelkel-direktsaft-streuobst`

### Methodische Hinweise

- Neue Handelsfaelle mit Tracking oder Warengruppenprogrammen wurden niedriger bewertet als Direktbezug oder chargennahe Systeme.
- Palm- und Tensidfaelle in Drogerieprodukten bleiben wegen Derivaten, Mass-Balance-Modellen und begrenzter Produktschaerfe bewusst im niedrigen bis mittleren Bereich.
- Kakao-, Kaffee-, Tee- und Bananenfaelle enthalten Rohstoffrisiko-Abzuege, wenn keine starke Sonderlogik die Risiken ausreichend adressiert.
