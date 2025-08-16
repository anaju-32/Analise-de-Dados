const btnExibirTermos = document.querySelector('#botao-palavrachave');

btnExibirTermos.addEventListener('click', exibirTermosChave);

function exibirTermosChave() {
    const conteudoDigitado = document.querySelector('#entrada-de-texto').value;
    const areaExibicao = document.querySelector('#resultado-palavrachave');
    const termosExtraidos = separarPalavras(conteudoDigitado);

    areaExibicao.textContent = termosExtraidos.join(", ");
}

function separarPalavras(frase) {
    let listaDeTermos = frase.split(/\P{L}+/u);
    return listaDeTermos;
}