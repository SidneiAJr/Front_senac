function reb(){
    const rec = document.getElementById("valorIni").value
    const rec2 = document.getElementById("rend").value
     
    const calc = (rec2*100)/rec


    if(rec&&isNaN(rec)||rec2&&isNaN(rec2)){
        document.getElementById("res1").innerHTML = `O Juros atual é %${calc.toFixed(2)}` 
    }else{
        document.getElementById("res1").innerHTML = "Favor Inserir o valor correto" 
    }
    }
