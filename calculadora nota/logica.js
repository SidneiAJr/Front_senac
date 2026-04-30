function calc() {
    const prova1 = Number(document.getElementById("pr1").value)
    const prova2 = Number(document.getElementById("pr2").value)
    const prova3 = Number(document.getElementById("pr3").value)
    const prova4 = Number(document.getElementById("pr4").value)
    const prova5 = Number(document.getElementById("pr5").value)
    const prova6 = Number(document.getElementById("pr6").value)
    const quantidade_prova = Number(document.getElementById("quantprova").value)
    const media = Number(document.getElementById("media").value)

    const saida = document.getElementById("saida");

    const soma = (prova1 + prova2 + prova3 + prova4 + prova5 + prova6) / quantidade_prova

    if (soma >= media) {
        saida.innerHTML = `Media Final ${soma.toFixed(2)} | Aprovado!`
        saida.style.fontSize = '30px'
        saida.style.font = 'bold'
    } else {
        saida.innerHTML = `Media Final ${soma.toFixed(2)} | Reprovado ⚔`
        saida.style.fontSize = '30px'
        saida.style.color = 'black'
        saida.style.font = 'bold'
    }
}
