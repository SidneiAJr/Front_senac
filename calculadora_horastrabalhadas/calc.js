function receb() {
    const valor = Number(document.getElementById("salario").value); 
    const tempo = Number(document.getElementById("horastrab").value); 
    const diassemana = Number(document.getElementById("diassemana").value); 
    const h1 = document.getElementById("saida");

    if (valor <= 0 || tempo <= 0 || diassemana <= 0) {
        h1.innerHTML = "Preencha valores válidos!";
        return;
    }

    const tempototal = tempo * diassemana;
    const valorhora = valor / tempototal;

    h1.innerHTML = `Valor/H R$ ${valorhora.toFixed(2)}`;
}
