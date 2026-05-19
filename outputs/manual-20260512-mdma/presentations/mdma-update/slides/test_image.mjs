export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.images.add({
    src: '/Users/timdonnerhak/Documents/New project/outputs/manual-20260512-mdma/presentations/mdma-update/assets/test.svg',
    position: {left: 0, top: 0, width: 1280, height: 720}
  });
  return slide;
}
