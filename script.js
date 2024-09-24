let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function changeSlide(n) {
  showSlide(currentSlideIndex += n);
}

function showSlide(n) {
  let slides = document.querySelectorAll('.slide');
  
  if (n >= slides.length) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[currentSlideIndex].style.display = 'block';
}
