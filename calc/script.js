// Cria a função para converter
function receb(){
    const valor = document.getElementById("salario").value
    const tempo = document.getElementById("horastrab").value

    if(valor&& !isNaN(valor)||tempo&& !isNaN(tempo)){
        const tempotrampo = tempo*30
        const res = valor/tempotrampo
        const fgts = valor*0.08
        const alm = valor*0.01
        const trans = valor*0.08
        const desc = valor - trans - alm 
        const salbruto = valor

        document.getElementById("res4").innerHTML = `Salario Bruto R$:${salbruto}`  
        document.getElementById("res1").innerHTML = `Valor por Hora R$:${res.toFixed(2)}` 
        document.getElementById("res2").innerHTML = `FGTS R$:${fgts.toFixed(2)}`  
        document.getElementById("res3").innerHTML = `Descontos R$:${desc.toFixed(2)}`  
        document.getElementById("res5").innerHTML = `Total de Horas:${tempotrampo}`  
        
    }else{
        document.getElementById("res1").innerHTML = "Por Favor insira um valor valido"
    }
    }
