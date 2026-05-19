import * as art from '/Users/timdonnerhak/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  const sh = slide.shapes.add({
    geometry: 'rect',
    position: {left: 60, top: 60, width: 1160, height: 100},
    fill: '#ffffff'
  });
  sh.text = 'Hello world';
  const ts = new art.TextStyle({ fontSize: 40, typeface: 'Arial', fill: { color: '#111111' } });
  sh.textStyle = new art.TextStyleModel(ts);
  return slide;
}
