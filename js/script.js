// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Animação para .intro-description a
  const introLink = document.querySelector('.intro-description a');

   // Verifica se o link existe antes de adicionar os listeners
  if (introLink) {
    // Quando o rato entra no link, aplica a classe de animação de entrada
    introLink.addEventListener('mouseenter', () => {
      introLink.classList.remove('animate-out'); // Tira a animação de saída
      introLink.classList.add('animate-in'); // Adiciona a animação de entrada
    });

    // Quando o rato sai do link, aplica a classe de animação de saída
    introLink.addEventListener('mouseleave', () => {
      introLink.classList.remove('animate-in');
      introLink.classList.add('animate-out');
    });
  }

 // Seleciona o link dentro do título do projeto (caso exista)
  const projectLink = document.querySelector('.project-title a');

  // Verifica se o link existe antes de adicionar os listeners
  if (projectLink) {
     // Animação ao passar o rato por cima do link do projeto
    projectLink.addEventListener('mouseenter', () => {
      projectLink.classList.remove('animate-out');
      projectLink.classList.add('animate-in');
    });

    // Animação ao retirar o rato do link do projeto
    projectLink.addEventListener('mouseleave', () => {
      projectLink.classList.remove('animate-in');
      projectLink.classList.add('animate-out');
    });
  }

});
