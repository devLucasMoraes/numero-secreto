function verificaSeChutePossuiValorValido(chute){
    const numero = +chute
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }
    if(numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto e maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto e menor <i class="fa-solid fa-down-long"></i></div>
    `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero){
    return  numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
