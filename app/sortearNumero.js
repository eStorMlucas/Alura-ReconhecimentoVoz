const limiteValores = [1, 1000]
const valorSorteio = sorteioNumero();

function sorteioNumero() {
    return parseInt(Math.random() * limiteValores[1] + limiteValores[0])
}

const elementoMenorValor = document.getElementById('valor-menor')
elementoMenorValor.innerText = limiteValores[0]

const elementoMaiorValor = document.querySelector('#valor-maior')
elementoMaiorValor.innerText = limiteValores[1]

console.log(`Número secreto é igual a: ${valorSorteio}`)
