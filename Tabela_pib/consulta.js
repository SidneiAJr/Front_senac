async function getcdi() {
  const res = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.7326/dados?formato=json&dataInicial=01/01/2014&dataFinal=31/12/2025');
  const dados = await res.json();
  const anoSelecionado = document.getElementById("pib").value;

  let html = ``;

  for (let i = 0; i < dados.length; i++) {
    const data = dados[i].data;
    const valor = dados[i].valor;
    const ano = data.split("/")[2]; // extrai o ano da data "01/01/2014" → "2014"

    if (ano === anoSelecionado) {
      html += `📅 Ano ${ano} → ${valor}% <br>`;
    }
  }

  document.getElementById("tamanho").innerHTML = html;
}
