function verificarBatimentos() {
    const pressao_baixa = parseInt(document.getElementById("pressao_baixa").value)
    const pressao_alta = parseInt(document.getElementById("pressao_alta").value)
    const batimento = parseInt(document.getElementById("Batimento").value)
    if (!isNaN(pressao_alta) && !isNaN(pressao_baixa) && !isNaN(batimento)) {
        let mensagem = ""
        if (pressao_alta >= 180 || pressao_baixa >= 120) {
            mensagem = "Emergência! Pressão muito alta! Procure um médico ou ligue 193."
        } else if (pressao_alta >= 140 || pressao_baixa >= 90) {
            mensagem = "Pressão Alta (Hipertensão Estágio 1)"
        } else if (pressao_alta >= 130 || pressao_baixa >= 85) {
            mensagem = "Pré-Hipertensão. Comece a cuidar da saúde."
        } else {
            mensagem = "✅ Pressão dentro da faixa normal."
        }
        document.getElementById("res").innerHTML = mensagem
    } else {
        document.getElementById("res").innerHTML = "Preencha todos os campos corretamente!"
    }
}
