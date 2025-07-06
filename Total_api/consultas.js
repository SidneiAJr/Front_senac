async function getcdi() {
/*
433 - IPCA
4390 - CDI
*/
const res = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=01/01/2014&dataFinal=31/12/2025')
  const res2 = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json&dataInicial=01/01/2014&dataFinal=31/12/2025");
  const res3 = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.7326/dados?formato=json&dataInicial=01/01/2014&dataFinal=31/12/2025");
  const dados = await res.json();
  const dados2 = await res2.json();
  const dados3 = await res3.json();
  const anoSelecionado = document.getElementById("ipcacdi").value
  let html = ``
  let html2 = ``
  let html3 = ``
  for (let i = 0; i < dados.length; i++) {
    if(dados[i].data.includes(anoSelecionado)){
      html += `IPCA Mes 📅 ${dados[i].data} -> ${dados[i].valor}%<br>`
    }
  }
  for (let i = 0; i < dados2.length; i++) {
    if(dados2[i].data.includes(anoSelecionado)){
      html2 += `CDI Mes 📅 ${dados2[i].data} -> ${dados2[i].valor} % <br>`
    }
  }
  for (let i = 0; i < dados3.length; i++) {
    if(dados3[i].data.includes(anoSelecionado)){
      html3 += `PIB Mes 📅 ${dados3[i].data} -> ${dados3[i].valor} % <br>`
    }
  }
  document.getElementById("saida").innerHTML = html;
  document.getElementById("saida2").innerHTML = html2;
  document.getElementById("saida3").innerHTML = html3;
}
