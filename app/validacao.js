function verificaSeEhValido(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if(chuteMAiorOuMenorQueLimite(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre
         ${menorValor} e ${maiorValor}</div>` 
         return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Ihuuuuul, você acertou !</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior &#8657;</div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é menor &#8659;</div>
        `
    }
    
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function chuteMAiorOuMenorQueLimite(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', event =>{
    if(event.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})