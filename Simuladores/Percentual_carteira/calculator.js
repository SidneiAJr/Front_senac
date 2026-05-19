function calculador(){
    let patrimonio = parseFloat(document.getElementById("patri").value)
    let acoes = parseFloat(document.getElementById("ac").value)
    let fii = parseFloat(document.getElementById("fii").value)
    let Rf = parseFloat(document.getElementById("rf").value)
    let Cripto = parseFloat(document.getElementById("cripto").value)
    let Percentual = 0
    let Percentual2 = 0
    let Percentual3 = 0
    let Percentual4 = 0
    if(!isNaN(patrimonio)&&!isNaN(acoes)&&!isNaN(fii)&&!isNaN(Rf)&&!isNaN(Cripto)){
            Percentual = (acoes/patrimonio)*100
            Percentual2 = (fii/patrimonio)*100
            Percentual3 = (Rf/patrimonio)*100
            Percentual4 = (Cripto/patrimonio)*100
            document.getElementById("res").innerHTML=`
            Percentual da carteira em ações: ${Percentual.toFixed(2)}% <br>
            Percentual da carteira em FII: ${Percentual2.toFixed(2)}%<br>
            Percentual da carteira em Renda Fixa: ${Percentual3.toFixed(2)}%<br>
            Percentual da carteira em Cripto: ${Percentual4.toFixed(2)}%<br>
            `
        }else{
             document.getElementById("res").innerHTML=`Melhore!!`
        }
    }
