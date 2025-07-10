function calculador(){
    let valor = Number(document.getElementById("valor").value);
    let juros = Number(document.getElementById("Juros").value);
    let parcelas = Number(document.getElementById("Parcelas").value);
    let total = 0;
    let valor_Parcelas = 0;
    let anos = 0;
    let jurosmensal = 0;

    if(!isNaN(valor) && !isNaN(juros) && !isNaN(parcelas)){
        jurosmensal = Math.pow(1 + juros / 100, 1 / 12) - 1;
        total = valor * Math.pow(1 + jurosmensal, parcelas);
        valor_Parcelas = total / parcelas;
        anos = parcelas / 12;
        document.getElementById("res").innerHTML=`
            Total R$: ${total.toFixed(2)} <br>
            Valor da Parcela: ${valor_Parcelas.toFixed(2)}<br> 
            Anos até o Fim: ${anos.toFixed(2)}<br>
            Juros Mensal: ${(jurosmensal*100).toFixed(2)}%
        `;
    } else {
        document.getElementById("res").innerHTML=`Melhore!!`;
    }
}
