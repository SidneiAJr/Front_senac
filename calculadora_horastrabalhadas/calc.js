function receb(){
   const valor = Number(document.getElementById("salario").value); // Convertendo para número
    const tempo = Number(document.getElementById("horastrab").value); // Convertendo para número
    const diassemana = Number(document.getElementById("diassemana").value); // Convertendo para número
    // Verifica se os valores são números válidos e maiores que zero
    if (valor && !isNaN(valor) && valor > 0 && tempo && !isNaN(tempo) && tempo > 0 && diassemana && !isNaN(diassemana) && diassemana > 0) {
        const tempotrampo = tempo * diassemana
        const res = valor / tempotrampo
        const fgts = valor * 0.08
        const trans = valor * 0.06
        const salbruto = valor

        if (valor <= 2259.20) {
            const desc = valor - trans
            document.getElementById("res3").innerHTML = `Total Liquido com descontos R$:${desc.toFixed(2)}`
        } else if (valor >= 2259.21 && valor <= 2826.65) {
            const ir = valor * 0.075
            const desc = valor - trans - ir
            document.getElementById("res3").innerHTML = `Total Liquido com descontos R$:${desc.toFixed(2)}`
        } else if (valor > 2826.65 && valor <= 3751.05) {
            const ir = valor * 0.15
            const desc = valor - trans - ir
            document.getElementById("res3").innerHTML = `Total Liquido com descontos R$:${desc.toFixed(2)}`
        } else if (valor > 3751.05 && valor <= 4664.68) {
            const ir = valor * 0.225
            const desc = valor - trans - ir
            document.getElementById("res3").innerHTML = `Total Liquido com descontos R$:${desc.toFixed(2)}`
        } else {
            const ir = valor * 0.275
            const desc = valor - trans - ir
            document.getElementById("res3").innerHTML = `Total Liquido com descontos R$:${desc.toFixed(2)}`
        }

        document.getElementById("res4").innerHTML = `Salario Bruto R$:${salbruto}`
        document.getElementById("res1").innerHTML = `Valor por Hora R$:${res.toFixed(2)}`
        document.getElementById("res2").innerHTML = `FGTS R$:${fgts.toFixed(2)}`

        document.getElementById("res5").innerHTML = `Total de Horas Trabalhadas:${tempotrampo}`

    } else {
        document.getElementById("res1").innerHTML = "Por Favor insira um valor válido (não pode ser negativo)"
    }
}
