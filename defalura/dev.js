function reb(){
    const rebinfo = document.getElementById("e").value  
    document.getElementById("sd").innerHTML = `Ola ${rebinfo} , para verificar seu amigo secreto click no botão de Sorteio`;
}

function gera(){
    const nomes = ["Joao","Pedro","Maria","Aline","Ana"]

    const i = Math.floor(Math.random() * nomes.length);
    
    // Atualiza o conteúdo HTML do elemento com id "amigo"
    document.getElementById("amigo").innerHTML = `Seu Amigo secreto é: ${nomes[i]}`;
}
