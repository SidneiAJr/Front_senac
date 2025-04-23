function calc(){
    const w = parseFloat(document.getElementById("w").value)
    const t = parseInt(document.getElementById("t").value)
    const calc = (w*t)/1000
    const tarifa = 0.72
    const total = calc*tarifa

    if(w && !isNaN(w)||t && !isNaN(t)){
        document.getElementById("res").innerHTML =`O valor do consumo em R$:${total.toFixed(2)}`
    }else{
        document.getElementById("res").innerHTML = `Erro Favor inserir corretamente`
    }
    
}
