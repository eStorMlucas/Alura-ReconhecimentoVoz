function verificaValidadeChute(chute) {
    const numero = +chute

    if (seChuteInvalido(numero)) {
        console.log("VALOR INVÁLIDO")
    } else 
        if (verificaNumeroMaiorMenor) {
            console.log(`VALOR INVÁLIDO: O número precisar estar entre ${limiteValores[0]} e ${limiteValores[1]}`)
    }
}

function seChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function verificaNumeroMaiorMenor(numero) {
    return numero > limiteValores[1] || numero < limiteValores[0]
}
