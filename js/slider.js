let currentSlide = 0;

function showSlide(index) {
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;
  currentSlide = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % 5;
  showSlide(currentSlide);
}, 3000);

