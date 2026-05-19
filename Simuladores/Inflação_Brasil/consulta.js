async function getIPCA() {
  const res = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=01/01/2014&dataFinal=31/12/2025');
  const dados = await res.json();
  const anoSelecionado = document.getElementById("ipca").value
  let html = ``
  for (let i = 0; i < dados.length; i++) {
    const mes = dados[i].data;
    const valor = dados[i].valor;
    // Filtra apenas os meses do ano selecionado
    if (mes.includes(anoSelecionado)) {
      html += `📅 Mês ${mes} → ${valor}% <br>`;
    }
  }

  document.getElementById("tamanho").innerHTML = html;
}
