function receb() {
    const valor = document.getElementById("valorIni").value;
    const juros = document.getElementById("juros").value;
    const tempo = document.getElementById("tempo").value;
    const tipoInvestimento = document.getElementById("tipoInvestimento").value; // Captura o tipo de investimento

    if (valor && !isNaN(valor) && tempo && !isNaN(tempo)) {

        const divjuros = juros / 100;
        const valorfuturo = valor * (1 + divjuros) ** tempo;
        const mes = tempo * 12;
        document.getElementById("vf").innerHTML = `Valor total no Vencimento R$: ${valorfuturo.toFixed(2)}`;

        let ir;
        let liq;

        // Definindo a alíquota de impostos com base no tipo de investimento e o tempo
        if (tipoInvestimento === "cdb") {
            if (mes <= 12) {
                ir = valorfuturo * 0.20; // Imposto para CDB de até 12 meses
            } else if (mes > 24) {
                ir = valorfuturo * 0.175; // Imposto para CDB de mais de 24 meses
            } else {
                ir = valorfuturo * 0.15; // Imposto para CDB entre 12 e 24 meses
            }
        } else if (tipoInvestimento === "lci") {
            ir = 0; // LCI é isenta de imposto de renda
        } else if (tipoInvestimento === "tesouro") {
            if (mes <= 12) {
                ir = valorfuturo * 0.225; // Imposto para Tesouro Direto de até 12 meses
            } else if (mes > 24) {
                ir = valorfuturo * 0.175; // Imposto para Tesouro Direto de mais de 24 meses
            } else {
                ir = valorfuturo * 0.20; // Imposto para Tesouro Direto entre 12 e 24 meses
            }
        }

        liq = valorfuturo - ir;
        document.getElementById("ir").innerHTML = `Impostos R$: ${ir.toFixed(2)}`;
        document.getElementById("liq").innerHTML = `Valor Liquido R$: ${liq.toFixed(2)}`;
    } else {
        document.getElementById("res1").innerHTML = "Por favor, insira um valor válido";
    }
}
