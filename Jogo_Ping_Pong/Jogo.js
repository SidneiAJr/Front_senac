const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")
const scoreDisplay = document.getElementById("score")
let pontuacao = 0

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
    
}
