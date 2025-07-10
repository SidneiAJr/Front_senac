function calculador(){
    let valor1 = Number(document.getElementById("val_atual").value)
    let valor2 = Number(document.getElementById("val_reajust").value)
    let reajuste = 0
    let Percentual = 0

    if(!isNaN(valor1)||!isNaN(valor2)){
        reajuste = valor2 - valor1
        Percentual = (valor1/valor2)*100
            document.getElementById("res").innerHTML=`
            Diferença R$: ${reajuste} <br>
            Percentual de Reajuste: ${Percentual.toFixed(2)} %
            `
        }else{
             document.getElementById("res").innerHTML=`Melhore!!`
        }
    }
