function calculador(){
    let cotas_atuais = parseInt(document.getElementById("cotas_at").value)
    let preco_medio = parseFloat(document.getElementById("preco_cota").value)
    let provento = parseFloat(document.getElementById("prove").value)
    let disponivel_aplicar = parseFloat(document.getElementById("disp").value)
    let salario_minimo_bruto = parseFloat(document.getElementById("minimo").value)
    let quant_compras = 0 
    let totalCotas = 0 
    let proventototal = 0
    let proventoanterior = 0
    let salario_minimo = 0
    let cotas_salario = 0


    if(!isNaN(cotas_atuais)||!isNaN(preco_medio)||!isNaN(provento)){
        quant_compras = disponivel_aplicar/preco_medio
        totalCotas =quant_compras+cotas_atuais
        proventototal = totalCotas*provento
        proventoanterior = provento
        salario_minimo = salario_minimo_bruto/provento
        cotas_salario = salario_minimo*preco_medio
            document.getElementById("res").innerHTML=`
            Quantidade de Cotas para Aqusição: ${quant_compras.toFixed(0)} <br>
            Total de Cotas: ${totalCotas.toFixed(0)}<br>
            Provento Anterior R$: ${proventoanterior}<br>
            Provento Atual R$: ${proventototal.toFixed(2)}<br>
            Salario Minimo em cotas :${salario_minimo.toFixed(0)}<br>
            Custo para ter um salario Minimo em cotas ${cotas_salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>
            `
        }else{
             document.getElementById("res").innerHTML=`Melhore!!`
        }
    }
