function conv(){
    const n = Number(document.getElementById("min").value)
    const res = n*60
    const seg = n*3600
    if(!isNaN(n)){
    document.getElementById("res").innerHTML=`A conversão em Minutos será ${res}`
    document.getElementById("res2").innerHTML=`A conversão em Segundos será ${seg}`
    }else{
    document.getElementById("res").innerHTML=`Favor informar um valor valido`
    }
    
}
