function calcular(){
    const valoratual = Number(document.getElementById("valorat").value)
    const meta = Number(document.getElementById("meta").value)
    const valormes = Number(document.getElementById("invmes").value)
    const saida = document.getElementById("saida")

    let acumulado1 = valoratual + (valormes*12);
    let acumulado2 = valoratual + (valormes*24);
    let acumulado3 = valoratual + (valormes*36);
    let acumulado4 = valoratual + (valormes*48);
    let acumulado5 = valoratual + (valormes*60);
    let acumulado6 = valoratual + (valormes*72);
    let acumulado7 = valoratual + (valormes*84);

    let faltando1 = meta - acumulado1
    let faltando2 = meta - acumulado2
    let faltando3 = meta - acumulado3
    let faltando4 = meta - acumulado4
    let faltando5 = meta - acumulado5
    let faltando6 = meta - acumulado6
    let faltando7 = meta - acumulado7

    saida.innerHTML = `
    Faltando para Atingir Meta de 1 Ano R$ ${faltando1.toFixed(2)} | Valor Atual R$ ${acumulado1}</br>
    Faltando para Atingir Meta de 2 Ano R$ ${faltando2.toFixed(2)} | Valor Atual R$ ${acumulado2}</br>
    Faltando para Atingir Meta de 3 Ano R$ ${faltando3.toFixed(2)} | Valor Atual R$ ${acumulado3}</br>
    Faltando para Atingir Meta de 4 Ano R$ ${faltando4.toFixed(2)} | Valor Atual R$ ${acumulado4}</br>
    Faltando para Atingir Meta de 5 Ano R$ ${faltando5.toFixed(2)} | Valor Atual R$ ${acumulado5}</br>
    Faltando para Atingir Meta de 6 Ano R$ ${faltando6.toFixed(2)} | Valor Atual R$ ${acumulado6}</br>
    Faltando para Atingir Meta de 7 Ano R$ ${faltando7.toFixed(2)} | Valor Atual R$ ${acumulado7}</br>
    `
    

}
