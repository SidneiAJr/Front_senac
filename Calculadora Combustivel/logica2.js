function calc() {
    const litros = Number(document.getElementById("litros").value);
    const preco = Number(document.getElementById("preco").value);
    const saida = document.getElementById("saida")

    const precototal = litros*preco;

    saida.style.fontWeight = 'bold'
    saida.style.fontSize = '20px'
    saida.style.color = 'white'

    saida.innerHTML = `Preço Total | Tanque Cheio R$ ${precototal}`
   
}
