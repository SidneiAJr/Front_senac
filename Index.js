
const menu = document.getElementById('navegacao');
const elemento = document.getElementById('rodape');
const titulos = document.querySelectorAll('h3');

function modonoturno(){
    document.body.style.background = "linear-gradient(135deg, #0a0a0a 0%, #0f0f1a 50%, #050510 100%)"
    menu.style.background = "linear-gradient(135deg, #0a0a0a 0%, #0f0f1a 50%, #050510 100%)"
    elemento.style.background = "linear-gradient(135deg, #0a0a0a 0%, #0f0f1a 50%, #050510 100%)"
    titulos.forEach(h3=>{
      h3.style.fontSize = "25px"
      h3.style.fontWeight = 'bold'
      h3.style.fontFamily = 'Arial'
    })
}
