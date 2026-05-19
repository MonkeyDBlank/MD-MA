export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.shapes.add({
    geometry: 'rect',
    x: 60,
    y: 60,
    width: 1160,
    height: 100,
    fill: '#ffffff',
    text: 'Hello world',
    fontSize: 40,
    color: '#111111'
  });
  return slide;
}
