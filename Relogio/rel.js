function atualizarRelogio() {
  const agora = new Date(); //é uma função construtora usada para criar objetos do tipo Date, que representam datas e horas.

  let h = String(agora.getHours()).padStart(2, '0');
  let m = String(agora.getMinutes()).padStart(2, '0');
  let s = String(agora.getSeconds()).padStart(2, '0');

  document.getElementById("horas").textContent = `Horas: ${h}`;
  document.getElementById("minutos").textContent = `Minutos: ${m}`;
  document.getElementById("segundos").textContent = `Segundos: ${s}`;
}

setInterval(atualizarRelogio, 1000);
