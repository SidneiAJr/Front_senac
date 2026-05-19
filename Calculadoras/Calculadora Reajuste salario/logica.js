function calc(){
    const salario = Number(document.getElementById("valor").value)
    const reajuste = Number(document.getElementById("reajuste").value)
    const h1 = document.getElementById("saida")

    if(isNaN(salario)||isNaN(reajuste)||reajuste<=0){
       h1.innerHTML =` Insira um valor em numeros`
    }else{
    const divirej = reajuste/100;
    const soma = salario*divirej;
    const total = soma + salario;
    h1.innerHTML = `
    Valor do Reajuste R$ ${soma.toFixed(2)}<br>
    Salario com Reajuste R$ ${total.toFixed(2)}<br>
    `
    }
}
