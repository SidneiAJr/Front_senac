// Pegar cada elemento que vamos usar
// Como podemos identificar estes elementos

const titulo = document.getElementById("titulo")
const titulo2 = document.getElementById("titulo2")
const titulo3 = document.getElementById("titulo3")
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const fundo = document.getElementById("body")
const img = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const btnVoltar = document.getElementById("btnVoltar");


function trocarCor(){
    // Troca a cor para vermelho
    titulo.style.color = 'yellow';
    titulo.style.fontSize = '40px';
    titulo2.style.color = 'yellow';
    titulo3.style.color = 'yellow';
    titulo2.style.fontSize = '40px';
    titulo3.style.fontSize = '40px';

    titulo.textContent = "Texto BRABO DE MAIS!"
    titulo2.textContent = "Texto BRABO DE MAIS!"
    titulo3.textContent = "Texto BRABO DE MAIS!"

    // trocar a cor do botão
    btn.style.fontStyle = 'bolder';
    btn2.style.fontStyle = 'bolder';
    btn3.style.fontStyle = 'bolder';

    fundo.style.backgroundColor ="black";

    img.style.opacity = '20%';
    img2.style.opacity = '20%';
    img3.style.opacity = '20%';
}

function voltarCor() {
    // Restaurar textos
    titulo.textContent = "Hello Word";
    titulo2.textContent = "Hello Word2";
    titulo3.textContent = "Hello Word3";

    // Restaurar cores e tamanhos
    titulo.style.color = 'black';
    titulo2.style.color = 'black';
    titulo3.style.color = 'black';

    fundo.style.backgroundColor ="black";

    titulo.style.fontSize = '20px';
    titulo2.style.fontSize = '20px';
    titulo3.style.fontSize = '20px';

    // Restaurar botões
    btn.style.fontWeight = 'normal';
    btn2.style.fontWeight = 'normal';
    btn3.style.fontWeight = 'normal';
    
    // Restaurar imagens
    img.style.opacity = '100%';
    img2.style.opacity = '100%';
    img3.style.opacity = '100%';
}


btn.addEventListener('click',trocarCor);
btnVoltar.addEventListener('click', voltarCor);
