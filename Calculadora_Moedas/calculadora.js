function calcular() {
    let moeda1 = parseInt(document.getElementById("moeda1").value)
    let moeda050 = parseFloat(document.getElementById("moeda050").value)
    let moeda025 = parseFloat(document.getElementById("moeda025").value)
    let moeda010 = parseFloat(document.getElementById("moeda010").value)
    let moeda005 = parseFloat(document.getElementById("moeda005").value)
    
    const valormoeda1 = 1
    const valormoeda050 = 0.50
    const valormoeda025 = 0.25
    const valormoeda010 = 0.10
    const valormoeda005 = 0.05

    const contamoeda1 = moeda1*valormoeda1
    const contamoeda2 = moeda050*valormoeda050
    const contamoeda3 = moeda025*valormoeda025
    const contamoeda4 = moeda010*valormoeda010
    const contamoeda5 = moeda005*valormoeda005
    const total = contamoeda1+contamoeda2+contamoeda3+contamoeda4+contamoeda5

    document.getElementById("res").innerHTML = `
    Valor Total R$ ${total.toFixed(2)}<br>
    Moedas de 1 ValorR$: ${contamoeda1.toFixed(2)}<br>
    Moedas de 0.50 ValorR$:${contamoeda2.toFixed(2)}<br>
    Moedas de 0.25 ValorR$:${contamoeda3.toFixed(2)}<br>
    Moedas de 0.10 ValorR$: ${contamoeda4.toFixed(2)}<br>
    Moedas de 0.05 ValorR$:${contamoeda5.toFixed(2)}<br>
    `
    
}