function convert(){
    const info = document.getElementById("info").value
    const quantidade = Math.pow(2,(32-info))-2
    if(!isNaN(info)&& info >= 0 && info <=32){
        document.getElementById("res").innerHTML =`Quantidade de maquinas é: ${quantidade}`
    }else{
        document.getElementById("res").innerHTML="Favor Inserir um valor valido"
    }
}
