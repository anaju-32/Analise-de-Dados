const botaoSoltaMagia = document.querySelector('#botao-magia');

botaoSoltaMagia.addEventListener('click', mostraPalavrasChave);

function liberarMagiaTexto() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoEncantado.textContent = palavrasMisteriosas.join(", ");
}

function decifrarTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}