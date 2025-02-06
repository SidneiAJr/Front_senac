function convert(){
    const texto = document.getElementById("info").value;
    let res = "";
    let num = parseInt(texto);
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
    if(isNaN(num)||num<=0 || num >3999){
        res = "Numero Invalido favor informar 1 a 3999";
    }else{
        numerosRomanos.forEach(({valor,simbolo})=> {
        while(num>=valor){
            res += simbolo;
            num -= valor;
        }
        });
    }


    document.getElementById("res").innerHTML=`O Resultado é: ${res}`
}
