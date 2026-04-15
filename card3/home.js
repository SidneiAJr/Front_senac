// Pegar os elementos
const titulo = document.getElementById("titulo");
const titulo2 = document.getElementById("titulo2");
const titulo3 = document.getElementById("titulo3");
const btn = document.getElementById("btn");
const fundo = document.getElementById("body");
const img = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

// Flag para saber se o estilo já está alterado
let corTrocada = false;

function alternarCor() {
    if (!corTrocada) {
        // Aplicar estilo alterado
        titulo.style.color = 'yellow';
        titulo2.style.color = 'yellow';
        titulo3.style.color = 'yellow';

        titulo.style.fontSize = '40px';
        titulo2.style.fontSize = '40px';
        titulo3.style.fontSize = '40px';

        titulo.textContent = "Texto BRABO DE MAIS!";
        titulo2.textContent = "Texto BRABO DE MAIS!";
        titulo3.textContent = "Texto BRABO DE MAIS!";

        btn.style.fontWeight = 'bolder';
        fundo.style.backgroundColor = "black";

        img.style.opacity = '20%';
        img2.style.opacity = '20%';
        img3.style.opacity = '20%';

        corTrocada = true;
    } else {
        // Restaurar estilo original
        titulo.style.color = 'black';
        titulo2.style.color = 'black';
        titulo3.style.color = 'black';

        titulo.style.fontSize = '20px';
        titulo2.style.fontSize = '20px';
        titulo3.style.fontSize = '20px';

        titulo.textContent = "Hello Word";
        titulo2.textContent = "Hello Word2";
        titulo3.textContent = "Hello Word3";

        btn.style.fontWeight = 'normal';
        fundo.style.backgroundColor = "yellow";

        img.style.opacity = '100%';
        img2.style.opacity = '100%';
        img3.style.opacity = '100%';

        corTrocada = false;
    }
}

// Usar um único botão
btn.addEventListener('click', alternarCor);
