const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,BTC-BRL,EUR-BRL,CNY-BRL,GBP-BRL,ARS-BRL,JPY-BRL,RUB-BRL"
async function consultar() {
    try {
        const resposta = await fetch(url); // Faz a requisição
        const dados = await resposta.json(); // Converte a resposta para JSON
        console.log(dados); // Mostra os dados no console
        // Exibe os dados no HTML
        document.getElementById("dolar").innerHTML = `
        Dólar: R$ ${Number(dados.USDBRL.bid).toFixed(2)}<br>
        Euro: R$ ${Number(dados.EURBRL.bid).toFixed(2)}<br>
        Bitcoin: R$ ${Number(dados.BTCBRL.bid).toFixed(2)}<br>
        Yuan: R$ ${Number(dados.CNYBRL.bid).toFixed(2)}<br>
        Iene R$ ${Number(dados.JPYBRL.bid).toFixed(2)}<br>
        Peso Argentino R$ ${Number(dados.ARSBRL.bid).toFixed(2)}<br>
        Rublo Ruso R$ ${Number(dados.RUBBRL.bid).toFixed(2)}<br>
`
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}
