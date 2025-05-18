// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Animação para .intro-description a
  const introLink = document.querySelector('.intro-description a');

  if (introLink) {
    introLink.addEventListener('mouseenter', () => {
      introLink.classList.remove('animate-out');
      introLink.classList.add('animate-in');
    });

    introLink.addEventListener('mouseleave', () => {
      introLink.classList.remove('animate-in');
      introLink.classList.add('animate-out');
    });
  }

  // Animação para .project-title a
  const projectLink = document.querySelector('.project-title a');

  if (projectLink) {
    projectLink.addEventListener('mouseenter', () => {
      projectLink.classList.remove('animate-out');
      projectLink.classList.add('animate-in');
    });

    projectLink.addEventListener('mouseleave', () => {
      projectLink.classList.remove('animate-in');
      projectLink.classList.add('animate-out');
    });
  }
});
