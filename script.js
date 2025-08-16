const botaoSoltaMagia = document.querySelector('#botao-magia');

botaoSoltaMagia.addEventListener('click', liberarMagiaTexto);

function liberarMagiaTexto() {
    const textoEncantado = document.querySelector('#entrada-feitico').value;
    const campoEncantado = document.querySelector('#resultado-magia');
    const palavrasMisteriosas = decifrarTexto(textoEncantado);

    campoEncantado.textContent = palavrasMisteriosas.join(", ");
}

function decifrarTexto(textoEncantado) {
    let termos = textoEncantado.split(/\P{L}+/u);
    return termos;
}