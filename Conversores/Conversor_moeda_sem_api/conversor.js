// Cria a função para converter
function converter(){
    const valor = document.getElementById("valor").value
    const moeda = document.getElementById("moeda").value
    const taxas = {
        "USD": 0.17,
        "EUR": 0.16,
        "GBP": 0.13,
        "CNY": 0.79,
        "Gold": 0.0291,
    }
    if(valor&& !isNaN(valor)){
        const convertido = valor*taxas[moeda]
        document.getElementById("resultado").innerHTML = `O Valor da Conversão Será:${convertido.toFixed(2)}${moeda}`  
    }else{
        document.getElementById("resultado").innerHTML = "Por Favor insira um valor valido"
    }
    }
