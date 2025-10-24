function calcularpmt() {
    let valorPix = parseFloat(document.getElementById("valorpix").value);
    let juros = parseFloat(document.getElementById("juros").value);
    let valorParcelado = parseFloat(document.getElementById("valorparcelado").value);
    let n = parseInt(document.getElementById("quantidadeparcelas").value);

    if(!isNaN(valorPix) && !isNaN(juros) && !isNaN(valorParcelado) && !isNaN(n)) {

        let jurosMensal = juros / 100;

        // Calcula parcela mensal
        let parcelaMensal = valorParcelado * jurosMensal / (1 - Math.pow(1 + jurosMensal, -n));

        // Total pago
        let totalPago = parcelaMensal * n;

        // Juros total sobre o PIX
        let jurosTotal = totalPago - valorPix;

        // Valor presente (antecipando todas as parcelas)
        let valorPresente = parcelaMensal * (1 - Math.pow(1 + jurosMensal, -n)) / jurosMensal;
        let desconto = totalPago - valorPresente;

        // Mostra resultado no HTML
        document.getElementById("res").innerHTML = `
            Valor Pix: R$ ${valorPix.toFixed(2)}<br>
            Parcela Mensal: R$ ${parcelaMensal.toFixed(2)}<br>
            Total Pago: R$ ${totalPago.toFixed(2)}<br>
            Juros Total: R$ ${jurosTotal.toFixed(2)}<br>
            Valor Antecipado: R$ ${valorPresente.toFixed(2)}<br>
            Desconto ao Antecipar: R$ ${desconto.toFixed(2)}
        `;
    } else {
        alert("Preencha todos os campos com números válidos!");
    }
}
