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
document.addEventListener('keydown',(evento)=>{
    if(evento.key === 'ArrowUp'){
        teclas.ArrowUp = true
    } else if(evento.key === 'ArrowDown'){
        teclas.ArrowDown = true
    }
})
document.addEventListener('keyup',(evento)=>{
    if(evento.key === 'ArrowUp'){
        teclas.ArrowUp = false
    } else if(evento.key === 'ArrowDown'){
        teclas.ArrowDown = false
    }
})
function desenharRaquete() {
    ctx.fillStyle = "white"
    ctx.fillRect(raquete.x, raquete.y, raquete.largura, raquete.altura)
}
function desenharBola() {               
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2)
    ctx.fill()
}
function atualizar(){
    if(jogoAcabou) return
    if(teclas.ArrowUp)raquete.y -= raquete.velocidade
    if(teclas.ArrowDown)raquete.y += raquete.velocidade
    if(raquete.y<0)raquete.y=0
    if(raquete.y+raquete.altura>canvas.height){
        raquete.y=canvas.height-raquete.altura
    }
    bola.x += bola.dx
    bola.y += bola.dy
    if(bola.y - bola.raio < 0){
        bola.dy *= -1 // Inverte a direção vertical da bola
    }
    if(bola.y + bola.raio > canvas.height){
        bola.dy *= -1 // Inverte a direção vertical da bola
    }
    if(bola.x - bola.raio < raquete.x + raquete.largura && bola.y > raquete.y && bola.y < raquete.y + raquete.altura){
        bola.dx *= -1 // Inverte a direção horizontal da bola
        pontuacao += 1 // Incrementa a pontuação
        scoreDisplay.textContent = `Pontuação: ${pontuacao}` // Atualiza o display de pontuação
    }
    if(bola.x - bola.raio<0){
        jogoAcabou = true
        setTimeout(() => {
            alert("Fim de jogo! Sua pontuação final é: " + pontuacao)
            location.reload() // Reinicia o jogo
        }, 100)
    }
}





