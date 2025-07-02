function soft() {
    let pergunta = prompt("Qual sua Softskill preferida?")
    let pergunta3 = prompt("Qual sua Softskill preferida?")
    document.getElementById("peg").innerHTML = `Sua resposta é: ${pergunta}. Está certo? Obrigado por usar o questionador dos guri.`
    document.getElementById("peg").innerHTML = `Sua resposta é: ${pergunta3}. Está certo? Obrigado por usar o questionador dos guri.`
}

function hard() {
    let pergunta2 = prompt("Qual Hard Skill você gosta?")
    let pergunta4 = prompt("Qual Hard Skill você gosta?")
    document.getElementById("peg2").innerHTML = `Sua resposta é: ${pergunta2}. Está certo? Obrigado por usar o questionador dos guri.`
    document.getElementById("peg").innerHTML = `Sua resposta é: ${pergunta4}. Está certo? Obrigado por usar o questionador dos guri.`
}
