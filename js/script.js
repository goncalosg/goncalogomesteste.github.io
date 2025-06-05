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

  // Locomotive Scroll
let scrollAmount = window.scrollY || 0;
let targetScroll = scrollAmount;
let isScrolling = false;

window.addEventListener('wheel', function(event) {
  event.preventDefault();  // Evita scroll padrão
  targetScroll += event.deltaY;
  
  // Limita o scroll ao tamanho da página
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
  
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothScroll);
  }
}, { passive: false });

function smoothScroll() {
  scrollAmount += (targetScroll - scrollAmount) * 0.09; // acelera a interpolação

  window.scrollTo(0, scrollAmount);

  if (Math.abs(scrollAmount - targetScroll) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}


});
