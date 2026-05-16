const fundo_menu = document.getElementById('menu');
const titulos = document.querySelectorAll('a');
const textos = document.querySelector('h1');
const textos2 = document.querySelectorAll('h2');
const textos3 = document.querySelectorAll('h4');
const corpo = document.querySelector('body');
const caixa = document.getElementById('caixa')
const caixa2 = document.getElementById('caixa2')
const caixa3 = document.getElementById('caixa3')
const imgs = document.querySelectorAll('img');

let modoAtivo = false; 

function modonoturno() {
    if (modoAtivo === false) {
        fundo_menu.style.background = "rgba(23, 19, 21, 0.8)";
        fundo_menu.style.opacity = "90%";
        textos.style.fontSize = "50px";
        textos2.forEach(h2 => {
            h2.style.color = 'white';
            h2.style.fontWeight = 'bold';
        });
        textos3.forEach(h4 => {
            h4.style.color = 'black';
            h4.style.fontWeight = 'bold';
            h4.style.fontFamily = "arial";
        });
        titulos.forEach(a => {
            a.style.fontStyle = "italic";
            a.style.color = "rgba(76, 245, 92, 0.8)";
            a.style.fontWeight = "bold";
        });
        document.body.style.background = "url('https://images.unsplash.com/photo-1760458365440-6931ab0ae9b6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        caixa.style.background = "rgba(255, 255, 255, 0.13)";
        caixa.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        caixa2.style.background = "rgba(255, 255, 255, 0.13)";
        caixa2.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        caixa3.style.background = "rgba(255, 255, 255, 0.13)";
        caixa3.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        imgs.forEach(img => {
            img.style.borderRadius = '20px';
        });
        modoAtivo = true; 
    } else {
        fundo_menu.style.background = "";
        fundo_menu.style.opacity = "";
        textos.style.fontSize = "";
        textos2.forEach(h2 => {
            h2.style.color = "";
            h2.style.fontWeight = "";
        });
        textos3.forEach(h4 => {
            h4.style.color = "";
            h4.style.fontWeight = "";
            h4.style.fontFamily = "";
        });
        titulos.forEach(a => {
            a.style.fontStyle = "";
            a.style.color = "";
            a.style.fontWeight = "";
        });
        document.body.style.background = "";
        caixa.style.background = "";
        caixa.style.boxShadow = "";
        caixa2.style.background = "";
        caixa2.style.boxShadow = "";
        caixa3.style.background = "";
        caixa3.style.boxShadow = "";
        imgs.forEach(img => {
            img.style.borderRadius = "";
        });
        modoAtivo = false; 
    }
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
