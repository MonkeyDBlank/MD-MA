export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  const sh = slide.shapes.add({
    geometry: 'rect',
    position: {left: 60, top: 60, width: 1160, height: 100},
    fill: '#ffffff',
    fontSize: 40,
    color: '#111111'
  });
  sh.text = 'Hello world';
  return slide;
}
