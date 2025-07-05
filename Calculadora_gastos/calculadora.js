function calculadora() {
    const salario = Number(document.getElementById("salario").value);
    const gastos = Number(document.getElementById("conta").value);
    const gastos2 = Number(document.getElementById("conta2").value);
    const gastos3 = Number(document.getElementById("conta3").value);
    const gastos4 = Number(document.getElementById("conta4").value);
    let imposto = 0;

    // Verifica se os valores são válidos
    if (
        isNaN(salario) || isNaN(gastos) || isNaN(gastos2) || 
        isNaN(gastos3) || isNaN(gastos4)
    ) {
        document.getElementById("res").innerHTML = "Por favor, insira apenas números.";
        return;
    }

    // Verifica se algum valor é negativo ou salário zerado
    if (
        salario <= 0 || gastos < 0 || gastos2 < 0 || 
        gastos3 < 0 || gastos4 < 0
    ) {
        document.getElementById("res").innerHTML = "Não são permitidos valores negativos ou salário zerado.";
        return;
    }

    // Cálculo do imposto com base na tabela atual (alíquota - dedução)
    if (salario <= 2259.20) {
        imposto = 0;
    } else if (salario <= 2826.65) {
        imposto = (salario * 0.075) - 169.44;
    } else if (salario <= 3751.05) {
        imposto = (salario * 0.15) - 381.44;
    } else if (salario <= 4664.68) {
        imposto = (salario * 0.225) - 662.77;
    } else {
        imposto = (salario * 0.275) - 896.00;
    }

    if (imposto < 0) imposto = 0; // Proteção contra imposto negativo

    // Cálculos
    const somagastos = gastos + gastos2 + gastos3 + gastos4;
    const salarioAposDescontos = salario - somagastos - imposto;
    const reserva = salarioAposDescontos * 0.30;
    const sobraSalario = salarioAposDescontos - reserva;

    // Resultado final
    document.getElementById("res").innerHTML = `
        IR sobre Salário: R$ ${imposto.toFixed(2)}<br>
        Gastos Totais (sem IR): R$ ${somagastos.toFixed(2)}<br>
        Salário Líquido (após IR e Gastos): R$ ${salarioAposDescontos.toFixed(2)}<br>
        Reserva (30% do líquido): R$ ${reserva.toFixed(2)}<br>
        Salário Final com Reserva: R$ ${sobraSalario.toFixed(2)}
    `;
}
