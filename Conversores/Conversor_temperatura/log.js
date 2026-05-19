function calc(){
    const c = Number(document.getElementById("temp").value)
    const k = 273
    const calcK = k+c
    const calcF = (c*9/5)+32

    document.getElementById("calc").innerHTML = `A temperatura em Kelvin:${calcK.toFixed(2)}` 
    document.getElementById("calc2").innerHTML = `A temperatura em Fahrenheit:${calcF.toFixed(2)}` 

}
