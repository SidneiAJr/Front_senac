function verificarNivel() {
    let previsaoChuva = Number(document.getElementById("chuvamm").value);
    let areaDrenagem = Number(document.getElementById("areaBacia").value);
    let nivelAtualRio = Number(document.getElementById("nivelAtualRio").value);
    let coeficienteEscoamento = Number(document.getElementById("coefEscoamento").value);
    let rioSelecionado = document.getElementById("rios").value;

    let volumePorMetro;
    let nivelAtencao, nivelAlerta, nivelTransbordamento, nivelAlarme;

    if (rioSelecionado === "sinos") {
        volumePorMetro = 100_000_000;
        nivelAtencao = 3.5;
        nivelAlerta = 4.3;
        nivelTransbordamento = 4.5;
        nivelAlarme = 5.1;
    } else if (rioSelecionado === "jacui") {
        volumePorMetro = 1_500_000_000;
        nivelAtencao = 10.0;
        nivelAlerta = 12.0;
        nivelTransbordamento = 12.5;
        nivelAlarme = 13.5;
    } else if (rioSelecionado === "taquari") {
        volumePorMetro = 1_000_000_000;
        nivelAtencao = 17.0;
        nivelAlerta = 18.5;
        nivelTransbordamento = 19.0;
        nivelAlarme = 20.0;
    } else {
        document.getElementById("res").innerHTML = `Selecione um rio válido.`;
        return;
    }

    if (previsaoChuva > 0 && areaDrenagem > 0 && nivelAtualRio >= 0 && coeficienteEscoamento > 0 && coeficienteEscoamento <= 1) {

        let alturaChuvaMetros = previsaoChuva / 1000;
        let volumeAguaTotal = alturaChuvaMetros * areaDrenagem;
        let volumeRealParaRio = volumeAguaTotal * coeficienteEscoamento;

        let aumentoNivelRio = volumeRealParaRio / volumePorMetro;
        let novoNivelRio = nivelAtualRio + aumentoNivelRio;

        let resultado = `Volume Total de Chuva: ${volumeAguaTotal.toLocaleString()} m³.<br>`;
        resultado += `Volume Que Realmente Chega no Rio: ${volumeRealParaRio.toLocaleString()} m³.<br>`;
        resultado += `Nível Do Rio Pode Subir Até Aproximadamente: ${novoNivelRio.toFixed(2)} metros.<br><br>`;

        if (novoNivelRio >= nivelAlarme) {
            resultado += `🚨 <strong style="color:red;">ALERTA MÁXIMO!</strong>`;
        } else if (novoNivelRio >= nivelTransbordamento) {
            resultado += `⚠️ <strong style="color:red;">ALERTA Nível Crítico! !</strong>`;
        } else if (novoNivelRio >= nivelAlerta) {
            resultado += `⚠️ <strong style="color:orange;">Aviso: Nível de Atenção Elevado! Monitorar de Perto!</strong>`;
        } else if (novoNivelRio >= nivelAtencao) {
            resultado += `🔎 <strong style="color:gold;">Atenção: Monitoramento Recomendado!</strong>`;
        } else {
            resultado += `✅ <strong style="color:green;">Situação dentro dos limites de segurança.</strong>`;
        }

        document.getElementById("res").innerHTML = resultado;

    } else {
        document.getElementById("res").innerHTML = `Por favor, insira valores válidos e positivos.`;
    }
}
