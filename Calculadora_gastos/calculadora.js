function calculadora() {
    const salario = Number(document.getElementById("salario").value);
    const gastos = Number(document.getElementById("conta").value);
    const gastos2 = Number(document.getElementById("conta2").value);
    const gastos3 = Number(document.getElementById("conta3").value);
    const gastos4 = Number(document.getElementById("conta4").value);

    if (
        !isNaN(salario) && salario > 0 &&
        !isNaN(gastos) && gastos >= 0 &&
        !isNaN(gastos2) && gastos2 >= 0 &&
        !isNaN(gastos3) && gastos3 >= 0 &&
        !isNaN(gastos4) && gastos4 >= 0
    ) {
        const somagastos = gastos + gastos2 + gastos3 + gastos4;
        const salarioLiquido = salario - somagastos;
        const reserva = salarioLiquido * 0.30;
        const sobraSalario = salarioLiquido - reserva;

        document.getElementById("res").innerHTML = `
            Gastos Totais R$: ${somagastos.toFixed(2)}<br>
            Salário Líquido R$: ${salarioLiquido.toFixed(2)}<br>
            Reserva 30% R$: ${reserva.toFixed(2)}<br>
            Salário com desconto da Reserva R$: ${sobraSalario.toFixed(2)}<br>
        `;
    } else {
        document.getElementById("res").innerHTML = "Por favor, insira apenas números válidos maiores que zero.";
    }
}
