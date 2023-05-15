function verificaValidadeChute(chute) {
    const numero = +chute

    // easter egg
    if (chute == 'game over') {
        document.body.style.backgroundColor = "#141314"
        document.body.innerHTML = 
        `
            <h1 class="gameOver"> GAME OVER </h1>
            <button id="reiniciar" class="botao"> Jogar Novamente </button>
        `
        return 
    }

    if (seChuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>VALOR INVÁLIDO</div>'
        return
    } else 
        if (verificaNumeroMaiorMenor == false) {
            elementoChute.innerHTML += `
            VALOR INVÁLIDO: O número precisar estar entre 
            ${limiteValores[0]} e ${limiteValores[1]}
            `
            return
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
            <div class="arrow"> 
                O número secreto é maior 
                <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah.png" alt="external-chevron-arrows-tanah-basah-basic-outline-tanah-basah"/>
            </div>
        `
        return
    } else 
        if (chute > valorSorteio) {
            elementoChute.innerHTML += `
            <div class="arrow"> 
                O número secreto é menor 
                <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-3.png" alt="external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-3"/>
            </div>
            `
            return    
    } else {
        document.body.innerHTML = `
        <h1 style="color: #fff;"> Parabéns, você acertou!</h1>
        <h3 style="color: #fff;"> O número secreto era ${chute}</h3>

        <button id="reiniciar" class="botao"> Jogar Novamente </button>
        `
        document.body.style.background = '#50CE4C'
    }
}

document.addEventListener('click', (evento) => {
    if (evento.target.id == 'reiniciar') {
        window.location.reload()
    }
})