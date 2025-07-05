async function verip() {
const geo = await fetch("https://ipapi.co/json/")
const geoData = await geo.json()
const cidade = geoData.city
const res = await fetch(`https://wttr.in/${cidade}?format=j1`)
const clima = await res.json()
const temperatura = clima.current_condition[0].temp_C
const humidade = clima.current_condition[0].humidity
const tipoclima = clima.current_condition[0].lang_pt[0].value
document.getElementById("saida").innerHTML = `🌤️ ${cidade} → ${tipoclima}, ${temperatura}°C Humidade ${humidade}%`
}
