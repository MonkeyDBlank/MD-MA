# Präsentationen

Fertige Foliendecks und ihre Build-Quellen für das MD&MA-Projekt. Jedes Deck liegt in einem eigenen, datierten Unterordner.

## Konvention pro Deck

```
<deck-name>-<datum>/
├── *.pptx                  # fertiges Deck (Übergabe-/Vortragsdatei)
├── *-contact-sheet.png     # Übersicht aller Folien auf einen Blick
├── preview/                # PNG-Vorschau je Folie
└── src/                    # Build-Quellen (zum Reproduzieren des Decks)
    ├── data.json           # Inhalts-/Kennzahlenquelle des Decks
    ├── slides/             # Folien-Renderskripte (.mjs)
    ├── layout/             # Layoutdefinitionen je Folie
    ├── profile-plan.txt    # Deck-Profil und QA-Vorgaben
    ├── source-notes.txt    # zugrunde liegende Projektquellen
    └── artifact-build-manifest.json
```

## Vorhandene Decks

| Deck | Stand | Folien | Inhalt |
| --- | --- | --- | --- |
| `mdma-update-2026-05-12` | 2026-05-12 | 3 | Interner Update-Vortrag: Scope, Agenten-Automatisierung und Datenausbau seit der Notion-Anbindung. |

## Hinweise

- Die `.pptx` ist die maßgebliche Vortrags-/Übergabedatei.
- Inhaltliche Kennzahlen im Deck beziehen sich auf den jeweiligen Stand und können von den aktuellen Werten in `data/processed/` abweichen.
- Temporäre Test-Artefakte (`test_*`) gehören nicht ins Repo und werden über `.gitignore` ausgeschlossen.
