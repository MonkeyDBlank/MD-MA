import * as art from '/Users/timdonnerhak/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.shapes.add({
    geometry: 'rect',
    x: 100,
    y: 100,
    width: 300,
    height: 200,
    fill: '#ff0000'
  });
  return slide;
}
