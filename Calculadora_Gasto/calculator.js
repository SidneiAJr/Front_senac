function calculador(){
    let salario = Number(document.getElementById("salario").value)
    let cartao = Number(document.getElementById("cartão").value)
    let gasto = Number(document.getElementById("Gasto").value)
    let gastototal = 0
    let salariobruto = salario
    let Percentual = 0

    if(!isNaN(salario)||!isNaN(cartao)||!isNaN(gasto)){
        gastototal = cartao+ gasto
        salariobruto - gastototal
        Percentual=(gastototal/salario)*100
        if(Percentual>50){
            document.getElementById("res").innerHTML=`
            Cuidado esta gastando de mais no cartão!<br>
            Gasto total é R$: ${gastototal.toFixed(2)}<br>
            Salario Bruto é ${salario}<br>
            Percentual sobre o salario de gasto ${Percentual.toFixed(2)} %
            `
        }else{
             document.getElementById("res").innerHTML=`Melhore!!`
        }
    }
}