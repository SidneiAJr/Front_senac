const botoes = document.querySelectorAll("button[data-choice]");
const textoJ1 = document.getElementById("player1-choice");
const textoJ2 = document.getElementById("player2-choice");
const resultado = document.getElementById("winner");
let jogador1 = null;
let jogador2 = null;

function jogar(j1, j2) {
  if (j1 === j2) {
    return "Empate!";
  }
  if (
    (j1 === "pedra" && j2 === "tesoura") ||
    (j1 === "papel" && j2 === "pedra") ||
    (j1 === "tesoura" && j2 === "papel")
  ) {
    return "Jogador 1 venceu! 🥳";
  } else {
    return "Jogador 2 venceu! 🤣";
  }
}

function reiniciar() {
  jogador1 = null;
  jogador2 = null;
  textoJ1.textContent = "Jogador 1: Escolha!";
  textoJ2.textContent = "Jogador 2: Escolha!";
  resultado.textContent = ""
}

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const escolha = botao.getAttribute("data-choice");

    // Verifica se o jogador 1 ainda não fez a escolha
    if (jogador1 === null) {
      jogador1 = escolha;
      textoJ1.textContent = "Jogador 1 já escolheu: " + jogador1;
      resultado.textContent = "Vez do Jogador 2!";
    } else if (jogador2 === null) {
      // Verifica se o jogador 2 ainda não fez a escolha
      jogador2 = escolha;
      textoJ2.textContent = "Jogador 2 já escolheu: " + jogador2;
      const resultadoJogo = jogar(jogador1, jogador2);
      resultado.textContent = `${resultadoJogo} ${jogador1} | ${jogador2}`;
    }
  })
})
reiniciar()

