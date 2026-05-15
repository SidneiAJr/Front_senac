const fundo_menu = document.getElementById('menu');
const titulos = document.querySelector('a');
const textos = document.querySelector('h1');
const textos2 = document.querySelector('h2');
const textos3 = document.querySelector('h4');
const corpo = document.querySelector('body');

function modonoturno(){
   fundo_menu.style.background = "rgba(23, 19, 21, 0.8)";
   fundo_menu.style.opacity = "90%";
   titulos.style.fontWeight = "bold";
   textos.style.fontSize = "50px";
   textos2.style.fontSize = "50px";
   textos2.style.color = "black";
   textos2.style.fontStyle = "bolder";
   textos3.style.fontSize = "50px";
   textos3.style.color = "black";
   textos3.style.fontStyle = "bolder";
   document.body.style.background = "url(https://images.unsplash.com/photo-1760458365440-6931ab0ae9b6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

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
