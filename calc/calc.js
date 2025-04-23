// Cria a função para converter
function receb(){
    const valor = document.getElementById("salario").value
    const tempo = document.getElementById("horastrab").value
    const diassemana = document.getElementBYId("diassemana").value

    if(valor&& !isNaN(valor)||tempo&& !isNaN(tempo)){
        const tempotrampo = tempo*diassemana
        const res = valor/tempotrampo
        const fgts = valor*0.08
        const trans = valor*0.06
        const desc = valor - trans
        const salbruto = valor

        document.getElementById("res4").innerHTML = `Salario Bruto R$:${salbruto}`  
        document.getElementById("res1").innerHTML = `Valor por Hora R$:${res.toFixed(2)}` 
        document.getElementById("res2").innerHTML = `FGTS R$:${fgts.toFixed(2)}`  
        document.getElementById("res3").innerHTML = `Total Liquido com descontos R$:${desc.toFixed(2)}`  
        document.getElementById("res5").innerHTML = `Total de Horas Trabalhadas:${tempotrampo}`  
        
    }else{
        document.getElementById("res1").innerHTML = "Por Favor insira um valor valido"
    }
    }
