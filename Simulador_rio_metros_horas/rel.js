let horas = 0;
let nivel = 0;
let subida_m_h = 0;
let intervalo = null;

function startMonitor() {
  clearInterval(intervalo); // limpa se já estiver rodando

  let cm = parseFloat(document.getElementById("cm").value);
  nivel = parseFloat(document.getElementById("nivel_atual").value);
  if (!isNaN(cm) && !isNaN(nivel)) {
    subida_m_h = cm / 100;
    horas = 0;
    document.getElementById("saida").textContent = "";
    intervalo = setInterval(simularHora, 1000);
  } else {
    document.getElementById("saida").innerHTML = `Por favor Insira um numero!`
  }

}

function simularHora() {
  let direcao = subida_m_h >= 0 ? "Subindo" : "Descendo";
  let linha = `Nível ${direcao} por Hora Estimado ${horas}: ${nivel.toFixed(2)} m\n`;
  document.getElementById("saida").textContent += linha;
  nivel += subida_m_h;
  horas++;
}
function stopMonitor() {
  clearInterval(intervalo);
  intervalo = null;
  document.getElementById("saida").textContent += "Monitoramento Finalizado";
}
