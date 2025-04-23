function conv(){
    const n = document.getElementById("num").value
    
    if(!isNaN(n)){
        let res = `<h2>Tabuada de ${n}</h2>`
        for(let i = 1; i <=10; i++){
        res += `<p>${n}x${i}=${n*i}</p>`
        }
        document.getElementById("res").innerHTML= res
    }else{
    document.getElementById("res").innerHTML=`Favor informar um valor valido`
    }
    
}
