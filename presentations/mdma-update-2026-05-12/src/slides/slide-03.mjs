const palette = {
  ink: "#0F172A",
  slate: "#334155",
  muted: "#64748B",
  line: "#CBD5E1",
  panel: "#F8FAFC",
  accent: "#0F766E",
  accentSoft: "#CCFBF1",
  white: "#FFFFFF",
};

function stepRow(ctx, slide, { left, top, number, title, body }) {
  ctx.addShape(slide, {
    left,
    top,
    width: 90,
    height: 90,
    fill: palette.accentSoft,
    line: ctx.line("#99F6E4", 1),
  });
  ctx.addText(slide, {
    left,
    top: top + 18,
    width: 90,
    height: 48,
    text: String(number),
    fontSize: 28,
    bold: true,
    color: palette.accent,
    align: "center",
  });
  ctx.addShape(slide, {
    left: left + 120,
    top,
    width: 960,
    height: 90,
    fill: palette.white,
    line: ctx.line("#D8E1EA", 1),
  });
  ctx.addText(slide, {
    left: left + 146,
    top: top + 14,
    width: 560,
    height: 26,
    text: title,
    fontSize: 19,
    bold: true,
    color: palette.ink,
  });
  ctx.addText(slide, {
    left: left + 146,
    top: top + 42,
    width: 870,
    height: 32,
    text: body,
    fontSize: 16,
    color: palette.slate,
  });
}

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();

  ctx.addShape(slide, {
    left: 0,
    top: 0,
    width: ctx.W,
    height: ctx.H,
    fill: "#F8FAFC",
    line: ctx.line("#F8FAFC", 0),
  });

  ctx.addText(slide, {
    left: 60,
    top: 52,
    width: 780,
    height: 42,
    text: "Prozess- und JSON-Aenderungen",
    fontSize: 28,
    bold: true,
    color: palette.ink,
  });

  ctx.addText(slide, {
    left: 60,
    top: 106,
    width: 760,
    height: 52,
    text: "Die lokale Arbeitsstruktur ist jetzt so angelegt, dass weitere Recherchelaeufe systematischer und mit weniger manuellem Umbau anschliessen koennen.",
    fontSize: 19,
    color: palette.muted,
  });

  stepRow(ctx, slide, {
    left: 80,
    top: 206,
    number: "01",
    title: "Agenten-Workflow statt Einzelrecherche",
    body: "Recherche, Bewertung, Review und Konsolidierung werden lokal ueber dokumentierte Agentenlaeufe vorbereitet.",
  });

  stepRow(ctx, slide, {
    left: 80,
    top: 332,
    number: "02",
    title: "Saubere Trennung von Werkbank und Endstand",
    body: "Interne Arbeitsstaende liegen in data/drafts, uebergabefaehige Dateien ohne Review-Felder in data/processed.",
  });

  stepRow(ctx, slide, {
    left: 80,
    top: 458,
    number: "03",
    title: "Leichte JSON-Erweiterungen fuer bessere Einordnung",
    body: "Vor allem bei Lieferketten kamen genauere Felder wie relevante_siegel und klare Unsicherheitslogik dazu.",
  });

  ctx.addText(slide, {
    left: 80,
    top: 622,
    width: 1040,
    height: 24,
    text: "Ergebnis: konsistentere Daten, klarere Trennung von generischem Siegelscore und konkretem Lieferkettenfall sowie bessere Uebergabefaehigkeit fuer das App-Team.",
    fontSize: 15,
    color: palette.muted,
  });

  return slide;
}
