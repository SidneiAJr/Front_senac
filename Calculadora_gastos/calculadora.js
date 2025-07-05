function calculadora(){
    const salario = document.getElementById("salario").value
    let gastos = Number(document.getElementById("conta").value)
    let gastos2 = Number(document.getElementById("conta2").value)
    let gastos3 = Number(document.getElementById("conta3").value)
    let gastos4 = Number(document.getElementById("conta4").value)
    let somagastos = gastos+gastos2+gastos3+gastos4
    let salarioLiquido = salario-somagastos
    let reserva = salarioLiquido*0.30
    let sobraSalario = salarioLiquido-reserva
    document.getElementById("res").innerHTML=`
    Gastos Totais R$ :${somagastos.toFixed(2)}<br>
    Salario Liquido R$ ${salarioLiquido.toFixed(2)}<br>
    Reserva 30% R$${reserva.toFixed(2)}<br>
    Salario com desconto da Reserva R$${sobraSalario.toFixed(2)}<br>
    `
}
