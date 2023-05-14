const elementoChute = document.querySelector('#chute')

//Suporte para funcionamento
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', detectaFala)

function detectaFala(e) {
    const valorFala = e.results[0][0].transcript
    exibeChute(valorFala)
    verificaValidadeChute(valorFala)
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div> Você disse: </div>
        <span class="box"> ${chute} </span>
    `
}
