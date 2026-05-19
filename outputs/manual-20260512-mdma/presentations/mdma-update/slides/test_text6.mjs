import { textStyle } from '/Users/timdonnerhak/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/presentation-jsx/index.mjs';
export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  const sh = slide.shapes.add({
    geometry: 'rect',
    position: {left: 60, top: 60, width: 1160, height: 100},
    fill: '#ffffff'
  });
  sh.text = 'Hello world';
  sh.textStyle = textStyle('font: 36px Arial; color: #111111;');
  return slide;
}
