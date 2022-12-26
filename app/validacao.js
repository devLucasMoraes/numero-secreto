function verificaSeChutePossuiValorValido(chute){
    const numero = +chute
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>valor inválido</div>'
    }
    if(numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero){
    return  numero > maiorValor || numero < menorValor
}
