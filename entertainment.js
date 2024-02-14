const slider = document.querySelector('.slider');
  let currentIndex = 0;
function updateSlider() {
  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  updateSlider();
}
setInterval(nextSlide, 3000);