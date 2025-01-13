// Cria a função para converter
function receb(){
    const valor = document.getElementById("valorIni").value
    const rend = document.getElementById("rendimento").value

    if(valor&& !isNaN(valor)||rend&& !isNaN(rend)){
        const total = (rend*100)/valor
        document.getElementById("resultado").innerHTML = ` Até o momento %${total.toFixed(2)}`    
        
    }else{
       alert("Por favor Insira o valor valido, Somento numero")
    }
    }
