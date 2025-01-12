const key = ""

function btn() {
    const input = document.querySelector(".caixa-info").value
    if (input.trim() === "") {
        alert("Por favor, insira o nome de uma cidade.");
        return;
    }
    receb(input)
}

async function receb(input) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`);
    if (!response.ok) {
        alert("Cidade não encontrada ou erro na requisição!");
        return;
    }
    const dados = await response.json();
    console.log(dados);
    tela(dados);
}

function tela(dados) {
    document.querySelector(".titulo").innerHTML = "Cidade: " + dados.name
    document.querySelector(".clima").innerHTML = "Clima " + dados.weather[0].description
    document.querySelector(".subti").innerHTML = "Temperatura Minima " + Math.floor(dados.main.temp_min) + "C°"
    document.querySelector(".umid").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".subti2").innerHTML = "Temperatura Maxima " + Math.floor(dados.main.temp_max) + "C°"
    document.querySelector(".visi").innerHTML = "Visiblidade " + dados.visibility
    document.querySelector(".time").innerHTML = "TimeZone/FusoHorario " + dados.timezone

}
