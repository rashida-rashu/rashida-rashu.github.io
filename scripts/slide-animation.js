  const slides = document.querySelectorAll('.fade-slide');
  let currentIndex = 0;
  let isScrolling = false;

 function scrollToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  isScrolling = true;

  // remove active class from all
  slides.forEach(slide => slide.classList.remove('active'));

  // add active to current
  slides[index].classList.add('active');

  slides[index].scrollIntoView({ behavior: 'smooth' });
  currentIndex = index;

  setTimeout(() => isScrolling = false, 1000);
}


// Initialize first visible slide
slides[0].classList.add('active');


  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    if (e.deltaY > 0) {
      scrollToSlide(currentIndex + 1);
    } else {
      scrollToSlide(currentIndex - 1);
    }
  }, { passive: true });
  window.addEventListener('keydown', (e) => {
  if (isScrolling) return;
  if (e.key === 'ArrowDown') {
    scrollToSlide(currentIndex + 1);
  } else if (e.key === 'ArrowUp') {
    scrollToSlide(currentIndex - 1);
  }
});


  // Optional: Touch support
  let startY = 0;

  window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });

  window.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (isScrolling) return;
    if (startY - endY > 50) {
      scrollToSlide(currentIndex + 1);
    } else if (endY - startY > 50) {
      scrollToSlide(currentIndex - 1);
    }
  });