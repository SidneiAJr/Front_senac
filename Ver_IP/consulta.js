async function verip() {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    document.getElementById("saida").innerHTML = `
          🌍 IP: ${data.ip}<br>
          🏙️ Cidade: ${data.city}<br>
          📍 País: ${data.country}<br>
          📡 Provedor: ${data.org}<br>
          📡 Provedor: ${data.timezone}<br>
          🪙 Moeda: ${data.currency}<br>
        `;
}
