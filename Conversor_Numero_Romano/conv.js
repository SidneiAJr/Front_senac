function convert(){
    const texto = document.getElementById("info").value;
    let res = "";
    // Verifica se o valor contém apenas números inteiros
    const regex = /^[0-9]+$/;  // Regex para verificar números inteiros
    if (!regex.test(texto)) {
        res = "Entrada inválida! Apenas números inteiros são permitidos.";
    } else {
        let num = parseInt(texto);
        
        // Verifica se o número está dentro do intervalo permitido
        if(num <= 0 || num > 3999){
            res = "Número inválido! Favor informar um valor entre 1 e 3999.";
        } else {
            const numerosRomanos = [
                { valor: 1000, simbolo: "M" },
                { valor: 900, simbolo: "CM" },
                { valor: 500, simbolo: "D" },
                { valor: 400, simbolo: "CD" },
                { valor: 100, simbolo: "C" },
                { valor: 90, simbolo: "XC" },
                { valor: 50, simbolo: "L" },
                { valor: 40, simbolo: "XL" },
                { valor: 10, simbolo: "X" },
                { valor: 9, simbolo: "IX" },
                { valor: 5, simbolo: "V" },
                { valor: 4, simbolo: "IV" },
                { valor: 1, simbolo: "I" }
            ];

            // Conversão para número romano
            numerosRomanos.forEach(({valor, simbolo}) => {
                while(num >= valor) {
                    res += simbolo;
                    num -= valor;
                }
            });
        }
    }

    document.getElementById("res").innerHTML = `O Resultado é: ${res}`;
}
