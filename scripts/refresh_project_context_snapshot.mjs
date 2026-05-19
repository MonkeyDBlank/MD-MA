import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

function readJson(relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
}

const qualitaetssiegel = readJson("data/processed/qualitaetssiegel.json");
const lieferketten = readJson("data/processed/lieferketten.json");
const glossar = readJson("data/processed/glossar.json");

const snapshot = {
  project: {
    name: "MD&MA",
    type: "study-project",
    last_updated: [
      qualitaetssiegel.stand,
      lieferketten.stand,
      glossar.stand
    ].sort().slice(-1)[0],
    documentation_mode: "github-first"
  },
  scope: {
    active: [
      "Nahrungsmittel",
      "Drogerieprodukte"
    ],
    inactive: [
      "Textilien",
      "rein verpackungsbezogene Forst-/Papiersiegel ohne direkten Produktbezug",
      "reine Unternehmenszertifizierungen ohne klaren Produktbezug"
    ]
  },
  deliverables: [
    "qualitaetssiegel.json",
    "lieferketten.json",
    "glossar.json"
  ],
  data_status: {
    qualitaetssiegel: {
      path: "data/processed/qualitaetssiegel.json",
      version: qualitaetssiegel.version,
      stand: qualitaetssiegel.stand,
      count: Array.isArray(qualitaetssiegel.eintraege) ? qualitaetssiegel.eintraege.length : 0
    },
    lieferketten: {
      path: "data/processed/lieferketten.json",
      version: lieferketten.version,
      stand: lieferketten.stand,
      count: Array.isArray(lieferketten.eintraege) ? lieferketten.eintraege.length : 0
    },
    glossar: {
      path: "data/processed/glossar.json",
      version: glossar.version,
      stand: glossar.stand,
      count: Array.isArray(glossar.begriffe) ? glossar.begriffe.length : 0
    }
  },
  core_files: {
    agent_entry: "AGENT_START_HERE.md",
    full_context: "PROJECT_CONTEXT.md",
    wiki_home: "docs/wiki/Home.md",
    wiki_status: "docs/wiki/Projektstand.md",
    timeline: "docs/wiki/Projektgeschichte-Zeitstrahl.md",
    repo_usage: "docs/wiki/Repo-Nutzung-und-Kontext.md"
  },
  work_rules: [
    "Finale JSON-Dateien liegen nur in data/processed/.",
    "Neue oder geaenderte Eintraege zuerst in data/drafts/ bearbeiten.",
    "Keine internen Review- oder Agentenstati in finale JSON-Dateien schreiben.",
    "Keine neuen JSON-Felder ohne explizite Abstimmung mit App- und Datenbankteam.",
    "Repo und Wiki bei inhaltlichen Aenderungen synchron halten.",
    "Primaerquellen vor Sekundaerquellen bevorzugen.",
    "Lieferkettenscore und generischer Siegelscore nicht gleichsetzen."
  ],
  methods: {
    lieferketten_unit: "Unternehmen/Marke + Warengruppe/Rohstoff + Lieferkettenmodell",
    claim_types: [
      "belegt",
      "abgeleitet",
      "unbekannt"
    ]
  },
  current_focus: [
    "weitere relevante Produktsiegel fuer Deutschland recherchieren",
    "belastbare Lieferketten-Pilotfaelle erweitern",
    "Glossar nur bei klar relevantem Erkenntnisgewinn erweitern",
    "Dokumentation in Repo und GitHub-Wiki aktuell halten"
  ]
};

fs.writeFileSync(
  path.join(repoRoot, "context/project-context.snapshot.json"),
  JSON.stringify(snapshot, null, 2) + "\n",
  "utf8"
);

console.log("updated context/project-context.snapshot.json");
