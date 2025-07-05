const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,BTC-BRL,EUR-BRL,CNY-BRL,GBP-BRL"
async function consultar() {
      try {
        const resposta = await fetch(url); // Faz a requisição

        const dados = await resposta.json(); // Converte a resposta para JSON
        console.log(dados); // Mostra os dados no console

        // Exibe os dados no HTML
        document.getElementById("dolar").innerHTML = "💵Dólar: R$ " + Number(dados.USDBRL.bid).toFixed(2);
        document.getElementById("euro").innerHTML = "💶Euro: R$ " + Number(dados.EURBRL.bid).toFixed(2);
        document.getElementById("btc").innerHTML = "🪙Bitcoin: R$ " + Number(dados.BTCBRL.bid).toFixed(2);
        document.getElementById("yuan").innerHTML = "🇨🇳Yuan: R$ " + Number(dados.CNYBRL.bid).toFixed(2);
        document.getElementById("libra").innerHTML = "🇬🇧Libra Esterlina: R$ " + Number(dados.GBPBRL.bid).toFixed(2);

      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      }
    }
