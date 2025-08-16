const botaoSoltaMagia = document.querySelector('#botao-magia');

botaoSoltaMagia.addEventListener('click', liberarMagiaTexto);

function liberarMagiaTexto() {
    const textoEncantado = document.querySelector('#entrada-feitico').value;
    const campoEncantado = document.querySelector('#resultado-magia');
    const palavrasMisteriosas = processaTexto(textoEncantado);

    campoResultado.textContent = palavrasMisteriosas.join(", ");
}

function processaTexto(textoEncantado) {
    let palavras = textoEncantado.split(/\P{L}+/u);
    return palavras;
}