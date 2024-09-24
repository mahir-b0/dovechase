let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function changeSlide(n) {
  showSlide(currentSlideIndex += n);
}

function showSlide(n) {
  let slides = document.querySelectorAll('.slide');
  
  // Loop back to the first or last slide
  if (n >= slides.length) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = slides.length - 1;
  }

  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Display the current slide
  slides[currentSlideIndex].style.display = 'block';
}
