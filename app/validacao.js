function verificaValidadeChute(chute) {
    const numero = +chute

    if (seChuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>VALOR INVÁLIDO</div>'
    } else 
        if (verificaNumeroMaiorMenor == false) {
            elementoChute.innerHTML += `
                VALOR INVÁLIDO: O número precisar estar entre 
                ${limiteValores[0]} e ${limiteValores[1]}
                `
    } else {
        indicaValor(numero)
    }
}

function seChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function verificaNumeroMaiorMenor(numero) {
    return numero > limiteValores[1] || numero < limiteValores[0]
}

function indicaValor(chute) {
    if (chute < valorSorteio) {
        elementoChute.innerHTML += `
            <div class="arrow"> O número secreto é maior </div>
        `
    } else {
        elementoChute.innerHTML += `
            <div class="arrow"> O número secreto é menor </div>
        `
    }
}

