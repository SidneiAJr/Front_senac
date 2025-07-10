const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")
const scoreDisplay = document.getElementById("score")
let pontuacao = 0
let jogoAcabou = false

//objeto raquete
const raquete={
    x:10,
    y:canvas.height/2 - 40, // Posição vertifical inicial (centralizada)
    largura:10,
    altura:80,
    velocidade: 12 // Velocidade de movimento da raquete
}
//objeto bola
const bola={ 
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 10,
    dx:4, // velocidade horizontal da bola (4 pixel por frame)
    dy:4 // velocidade vertical da bola (4 pixel por frame)
}

const teclas ={
    ArrowUp:false,
    ArrowDown:false
}
