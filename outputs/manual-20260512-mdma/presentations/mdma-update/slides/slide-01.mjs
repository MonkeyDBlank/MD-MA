const palette = {
  ink: "#0F172A",
  slate: "#334155",
  muted: "#64748B",
  line: "#CBD5E1",
  soft: "#E2E8F0",
  panel: "#F8FAFC",
  accent: "#0F766E",
  accentSoft: "#CCFBF1",
  dark: "#0B1220",
  darkSoft: "#111827",
  white: "#FFFFFF",
};

function metricCard(ctx, slide, { left, top, value, label, tone = "light" }) {
  const dark = tone === "dark";
  ctx.addShape(slide, {
    left,
    top,
    width: 300,
    height: 130,
    fill: dark ? "#111827" : "#FFFFFF",
    line: ctx.line(dark ? "#1F2937" : "#D8E1EA", 1),
  });
  ctx.addText(slide, {
    left: left + 24,
    top: top + 20,
    width: 252,
    height: 56,
    text: value,
    fontSize: 36,
    bold: true,
    color: dark ? palette.white : palette.ink,
  });
  ctx.addText(slide, {
    left: left + 24,
    top: top + 82,
    width: 252,
    height: 28,
    text: label,
    fontSize: 16,
    color: dark ? "#CBD5E1" : palette.muted,
  });
}

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();

  ctx.addShape(slide, {
    left: 0,
    top: 0,
    width: ctx.W,
    height: ctx.H,
    fill: palette.dark,
    line: ctx.line(palette.dark, 0),
  });

  ctx.addShape(slide, {
    left: 58,
    top: 56,
    width: 94,
    height: 10,
    fill: palette.accent,
    line: ctx.line(palette.accent, 0),
  });

  ctx.addText(slide, {
    left: 60,
    top: 88,
    width: 840,
    height: 78,
    text: "Update seit Notion-Anbindung",
    fontSize: 31,
    bold: true,
    color: palette.white,
  });

  ctx.addText(slide, {
    left: 60,
    top: 170,
    width: 760,
    height: 92,
    text: "Wir arbeiten lokal mit Agenten, um Recherche, Bewertung und Konsolidierung der JSON-Daten deutlich staerker zu automatisieren.",
    fontSize: 22,
    color: "#D6DEE8",
  });

  metricCard(ctx, slide, {
    left: 60,
    top: 330,
    value: "19",
    label: "bewertete Qualitaetssiegel",
    tone: "dark",
  });
  metricCard(ctx, slide, {
    left: 390,
    top: 330,
    value: "8",
    label: "Lieferketten-Pilotfaelle",
    tone: "dark",
  });
  metricCard(ctx, slide, {
    left: 720,
    top: 330,
    value: "14",
    label: "relevante Glossarbegriffe",
    tone: "dark",
  });

  ctx.addText(slide, {
    left: 60,
    top: 616,
    width: 880,
    height: 26,
    text: "Scope: Nahrungsmittel und Drogerieprodukte. Notion blieb unveraendert und dient weiter nur als inhaltliche Quelle.",
    fontSize: 15,
    color: "#94A3B8",
  });

  return slide;
}
