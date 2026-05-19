# AGENTS.md

This repository contains the GitHub-first working base for the MD&MA study project.

## Read First

When starting work in this repository, read these files in order:

1. `AGENT_START_HERE.md`
2. `context/project-context.snapshot.json`
3. `PROJECT_CONTEXT.md`
4. `docs/wiki/Home.md`
5. `docs/wiki/Projektstand.md`

## Scope

Active scope:

- food products (`Nahrungsmittel`)
- drugstore products (`Drogerieprodukte`)

Out of scope unless explicitly reopened:

- textiles
- packaging-only forest/paper labels without direct product relevance
- pure company certifications without clear product linkage

## Source of Truth

Final data:

- `data/processed/qualitaetssiegel.json`
- `data/processed/lieferketten.json`
- `data/processed/glossar.json`

Working drafts:

- `data/drafts/`

Documentation:

- `PROJECT_CONTEXT.md`
- `docs/wiki/`
- `research/findings/`

## Work Rules

- Never write internal review states into final JSON files.
- Start new or changed entries in `data/drafts/` first.
- Move content to `data/processed/` only after consolidation.
- Do not add, remove, or rename JSON fields in the final schema unless the user explicitly decides to change the handoff contract with the app/data team.
- Keep documentation and wiki mirrors aligned with data changes.
- Use primary sources first and flag uncertainty honestly.
- Do not treat a generic seal score as identical to a concrete supply-chain score.

## Current Baseline

Use `context/project-context.snapshot.json` for the latest machine-readable project baseline.
