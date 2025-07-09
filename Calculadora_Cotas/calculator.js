function calculador(){
    let cotas_atuais = parseInt(document.getElementById("cotas_at").value)
    let preco_medio = parseFloat(document.getElementById("preco_cota").value)
    let provento = parseFloat(document.getElementById("prove").value)
    let disponivel_aplicar = parseFloat(document.getElementById("disp").value)
    let quant_compras = 0 
    let totalCotas = 0 
    let proventototal = 0
    let proventoanterior = 0
    let percentual_aumento_provento = 0

    if(!isNaN(cotas_atuais)||!isNaN(preco_medio)||!isNaN(provento)){
        quant_compras = disponivel_aplicar/preco_medio
        totalCotas =quant_compras+cotas_atuais
        proventototal = totalCotas*provento
        proventoanterior = provento
        percentual_aumento_provento = (proventoanterior/proventototal)*100
            document.getElementById("res").innerHTML=`
            Quantidade de Cotas para Aqusição: ${quant_compras.toFixed(0)} <br>
            Total de Cotas: ${totalCotas.toFixed(0)}<br>
            Provento Anterior R$: ${proventoanterior}<br>
            Provento Atual R$: ${proventototal.toFixed(2)}<br>
            Percentual de Aumento do provento ${proventototal.toFixed(2)}%<br>
            `
        }else{
             document.getElementById("res").innerHTML=`Melhore!!`
        }
    }