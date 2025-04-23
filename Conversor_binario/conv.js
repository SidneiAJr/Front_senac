function convert(){
    const texto = document.getElementById("info").value;
    const tipo = document.getElementById("tipo").value;
    let res = "";
    if(tipo=="textToBin"){
        res = texto.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' '); // Espaço entre bytes
    } 
    else if(tipo=="binToText"){
        res = texto.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join(''); // Conversão correta
    }else{
        res = "Escolha a opção Valida"
    }
    document.getElementById("res").innerHTML=`O Resultado é: ${res}`
}
