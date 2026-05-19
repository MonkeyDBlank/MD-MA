const palette = {
  ink: "#0F172A",
  slate: "#334155",
  muted: "#64748B",
  line: "#CBD5E1",
  soft: "#E2E8F0",
  panel: "#F8FAFC",
  accent: "#0F766E",
  accentSoft: "#CCFBF1",
  accentMid: "#5EEAD4",
  white: "#FFFFFF",
};

function bullet(ctx, slide, { left, top, text }) {
  ctx.addShape(slide, {
    left,
    top: top + 8,
    width: 10,
    height: 10,
    fill: palette.accent,
    line: ctx.line(palette.accent, 0),
  });
  ctx.addText(slide, {
    left: left + 24,
    top,
    width: 520,
    height: 48,
    text,
    fontSize: 18,
    color: palette.slate,
  });
}

function barRow(ctx, slide, { left, top, label, value, width, fill }) {
  ctx.addText(slide, {
    left,
    top,
    width: 220,
    height: 24,
    text: label,
    fontSize: 16,
    color: palette.slate,
  });
  ctx.addText(slide, {
    left: left + 226,
    top,
    width: 52,
    height: 24,
    text: String(value),
    fontSize: 16,
    bold: true,
    color: palette.ink,
    align: "right",
  });
  ctx.addShape(slide, {
    left,
    top: top + 34,
    width: 280,
    height: 14,
    fill: "#E2E8F0",
    line: ctx.line("#E2E8F0", 0),
  });
  ctx.addShape(slide, {
    left,
    top: top + 34,
    width,
    height: 14,
    fill,
    line: ctx.line(fill, 0),
  });
}

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();

  ctx.addShape(slide, {
    left: 0,
    top: 0,
    width: ctx.W,
    height: ctx.H,
    fill: palette.white,
    line: ctx.line(palette.white, 0),
  });

  ctx.addText(slide, {
    left: 60,
    top: 52,
    width: 640,
    height: 44,
    text: "Was lokal erweitert wurde",
    fontSize: 28,
    bold: true,
    color: palette.ink,
  });

  ctx.addText(slide, {
    left: 60,
    top: 106,
    width: 520,
    height: 64,
    text: "Seit der Notion-Anbindung wurde aus dem Projektstand eine belastbare lokale Datenbasis mit sauber getrennten Enddateien aufgebaut.",
    fontSize: 19,
    color: palette.muted,
  });

  ctx.addShape(slide, {
    left: 60,
    top: 212,
    width: 560,
    height: 404,
    fill: palette.panel,
    line: ctx.line("#D8E1EA", 1),
  });

  ctx.addText(slide, {
    left: 88,
    top: 238,
    width: 340,
    height: 28,
    text: "Inhaltliche Erweiterungen",
    fontSize: 20,
    bold: true,
    color: palette.ink,
  });

  bullet(ctx, slide, {
    left: 88,
    top: 292,
    text: "bestehende Notion-Siegel lokal bereinigt und in ein einheitliches JSON ueberfuehrt",
  });
  bullet(ctx, slide, {
    left: 88,
    top: 358,
    text: "neue Siegel im Scope Nahrung und Drogerie recherchiert, bewertet und eingearbeitet",
  });
  bullet(ctx, slide, {
    left: 88,
    top: 424,
    text: "Lieferketten als Pilotbasis fuer konkrete Rohstoff- und Markenfaelle aufgebaut",
  });
  bullet(ctx, slide, {
    left: 88,
    top: 490,
    text: "Glossar lokal als dritte JSON sauber abgegrenzt und ausbaubar gemacht",
  });

  ctx.addShape(slide, {
    left: 680,
    top: 212,
    width: 540,
    height: 404,
    fill: "#FFFFFF",
    line: ctx.line("#D8E1EA", 1),
  });

  ctx.addText(slide, {
    left: 710,
    top: 238,
    width: 320,
    height: 28,
    text: "Aktueller Datenstand",
    fontSize: 20,
    bold: true,
    color: palette.ink,
  });

  barRow(ctx, slide, {
    left: 710,
    top: 300,
    label: "Qualitaetssiegel",
    value: 19,
    width: 280,
    fill: palette.accent,
  });
  barRow(ctx, slide, {
    left: 710,
    top: 390,
    label: "Lieferketten",
    value: 8,
    width: 118,
    fill: palette.accentMid,
  });
  barRow(ctx, slide, {
    left: 710,
    top: 480,
    label: "Glossarbegriffe",
    value: 14,
    width: 205,
    fill: "#99F6E4",
  });

  ctx.addText(slide, {
    left: 710,
    top: 560,
    width: 420,
    height: 46,
    text: "Lieferketten aktuell als belastbare Pilotbasis, nicht als Vollbestand des Marktes.",
    fontSize: 16,
    color: palette.muted,
  });

  return slide;
}
