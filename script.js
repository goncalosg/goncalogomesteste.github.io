const lenis = new Lenis({
    wrapper: document.querySelector('#lenis-root'),
    content: document.body,
    smooth: true, // Ativa o scroll suave
    lerp: 0.07,  // Suaviza o scroll (quanto mais baixo, mais suave)
})

function raf(time) {
    lenis.raf(time) // Atualiza o Lenis
    requestAnimationFrame(raf) // Chama novamente no próximo quadro
}

requestAnimationFrame(raf)
