function calcular() {
    const salario = parseFloat(document.getElementById("salario").value);
    const pib = parseFloat(document.getElementById("pib").value);
    const inflacao = parseFloat(document.getElementById("infla").value);
    const usd = parseFloat(document.getElementById("usd").value);
    const salario_atual = parseFloat(document.getElementById("salario_atual").value);

    // Verifica se todos os campos são números válidos
    if (!isNaN(salario) && !isNaN(pib) && !isNaN(inflacao) && !isNaN(usd) && !isNaN(salario_atual)) {
        const reajuste_infla = (inflacao / 100) * salario;
        const salario_infla = salario + reajuste_infla;
        const salario_dolar = salario_infla / usd;
        let resultado = "";
        const diferenca = salario_infla- salario
       const percentual_reajuste = ((salario_infla - salario) / salario) * 100;

        if (pib < 0) {
            resultado += ` Salário reajustado apenas pela inflação: R$ ${salario_infla.toFixed(2)}<br>`;
            resultado += ` Em dólar: $${salario_dolar.toFixed(2)}<br>`;
        } else {
            const reajuste_total = (inflacao + pib) / 100;
            const salario_reajustado = salario * (1 + reajuste_total);
            const salario_dolar2 = salario_reajustado / usd;
            resultado += `Salário reajustado (inflação + PIB): R$ ${salario_reajustado.toFixed(2)}<br>`
            resultado += `Em dólar: $${salario_dolar2.toFixed(2)}<br>`
            resultado += `Reajuste de Salario em R$ ${diferenca.toFixed(2)}<br>`
            resultado += `Reajuste em % ${percentual_reajuste.toFixed(2)}<br>`
        }

        document.getElementById("res").innerHTML = resultado;
    } else {
        document.getElementById("res").innerHTML = `⚠️ Favor informar números válidos em todos os campos.`;
    }
}
