function cad(){
    const nm = document.getElementById("nm").value 
    const tel = document.getElementById("tel").value
    const end = document.getElementById("end").value
    const eml = document.getElementById("eml").value
    const vg = parseInt(document.getElementById("vg").value);

    const totalvg = 150
    const dimvagas = totalvg - vg

    const array = 
    [`Nome do Abrigo:${nm},
        Telefone:${tel},
        Endereço:${end}
        Email:${eml}
        `]

        if (dimvagas>=150) {
            document.getElementById("if2").innerHTML = `Vagas:${dimvagas}`
        }else{
           document.getElementById("if2").innerHTML = `Não há mais vagas`
        }
    
        if(nm && isNaN(nm)||tel && isNaN(tel)||end && isNaN(end)||eml && isNaN(eml)||vg && isNaN(vg)){
            document.getElementById("if").innerHTML = `${array}`
        }else{
            document.getElementById("if").innerHTML = `Erro Favor inserir corretamente`
        }

}
