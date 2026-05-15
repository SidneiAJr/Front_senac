const fundo = document.getElementById('menu');
const titulos = document.querySelector('a');
const icones = document.getElementById('icons');
const textos = document.querySelector('h1');
const textos2 = document.querySelector('h2');
const textos3 = document.querySelector('h4');

function modonoturno(){
   fundo.style.background = "rgba(23, 19, 21, 0.8)";
   fundo.style.opacity = "90%";
   titulos.style.fontWeight = "bold";
   icones.style.background = "white";
   icones.style.borderRadius = "20px";
   textos.style.fontSize = "50px";
   textos2.style.fontSize = "50px";
   textos2.style.color = "black";
   textos2.style.fontStyle = "bolder";
   textos3.style.fontSize = "50px";
   textos3.style.color = "black";
   textos3.style.fontStyle = "bolder";

}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
