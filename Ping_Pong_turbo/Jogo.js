const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")
const scoreDisplay = document.getElementById("score")
let pontuacao = 0
let jogoAcabou = false

// Raquete
const raquete = {
    x: 10,
    y: canvas.height / 2 - 40,
    largura: 10,
    altura: 90,
    velocidade: 18
}

// Bola 1
const bola = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    raio: 15,
    dx: 3,
    dy: 3
}

// Bola 2
const bola2 = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    raio: 15,
    dx: 6,
    dy: 6
}
//Bola 3
const bola3 = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    raio: 15,
    dx: 4,
    dy: 4
}

const teclas = {
    ArrowUp: false,
    ArrowDown: false
}

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowUp') teclas.ArrowUp = true
    if (evento.key === 'ArrowDown') teclas.ArrowDown = true
})
document.addEventListener('keyup', (evento) => {
    if (evento.key === 'ArrowUp') teclas.ArrowUp = false
    if (evento.key === 'ArrowDown') teclas.ArrowDown = false
})

function atualizar() {
    if (jogoAcabou) return

    // Movimento da raquete
    if (teclas.ArrowUp) raquete.y -= raquete.velocidade
    if (teclas.ArrowDown) raquete.y += raquete.velocidade
    if (raquete.y < 0) raquete.y = 0
    if (raquete.y + raquete.altura > canvas.height) {
        raquete.y = canvas.height - raquete.altura
    }

    moverEBater(bola)
    moverEBater(bola2)
    moverEBater(bola3)
}

function moverEBater(b) {
    b.x += b.dx
    b.y += b.dy

    // Bate nas paredes superior e inferior
    if (b.y - b.raio < 0 || b.y + b.raio > canvas.height) {
        b.dy *= -1
    }

    // Bate na raquete
    if (
        b.x - b.raio < raquete.x + raquete.largura &&
        b.y > raquete.y &&
        b.y < raquete.y + raquete.altura
    ) {
        b.dx *= -1
        pontuacao += 1
        scoreDisplay.textContent = `Pontuação: ${pontuacao}`
    }

    // Sai da tela pela esquerda = fim de jogo
    if (b.x - b.raio < 0) {
        jogoAcabou = true
        setTimeout(() => {
            alert("Fim de jogo! Sua pontuação final é: " + pontuacao)
            location.reload()
        }, 100)
    }

    // Rebater na parede direita
    if (b.x + b.raio > canvas.width) {
        b.dx *= -1
    }
}

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Raquete
    ctx.fillStyle = "black"
    ctx.fillRect(raquete.x, raquete.y, raquete.largura, raquete.altura)


    // Bola 1
    ctx.beginPath()
    ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()

    // Bola 2
    ctx.beginPath()
    ctx.arc(bola2.x, bola2.y, bola2.raio, 0, Math.PI * 2)
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(bola3.x, bola3.y, bola3.raio, 0, Math.PI * 2)
    ctx.fillStyle = "green"
    ctx.fill()
    ctx.closePath()
}

function loopDojo() {
    atualizar()
    desenhar()
    if (!jogoAcabou) {
        requestAnimationFrame(loopDojo)
    }
}

loopDojo()
