// script.js
const imageContainer = document.querySelector('.image-container');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  if (scrollPosition > windowHeight * 0.2 && scrollPosition < windowHeight * 0.8) {
    imageContainer.classList.remove('fade-in');
  } else {
    imageContainer.classList.add('fade-in');
  }
});
