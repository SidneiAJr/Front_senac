function calc(){
    const cargahoraria = Number(document.getElementById("carga").value);
    const saida = document.getElementById("saida");
    const fundo = document.getElementById("fundo");

    fundo.style.background = 'black'
    saida.style.color = 'white'
    saida.style.fontWeight = 'bold'

    const calculo = cargahoraria*0.75;
    const dias  = calculo/4;

    saida.innerHTML = `
    Para ter 75% de Aprovação: ${calculo} Horas<br>
    Dias: ${dias.toFixed(1)}
    `
}
