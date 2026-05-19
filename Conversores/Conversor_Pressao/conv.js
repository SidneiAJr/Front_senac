function converter(){
    let valor = Number(document.getElementById("valor").value);
    let pa = valor * 101325
    let psi = valor * 14.696
    let bar = valor * 1.01325
    let atm = valor * 1
    let mmhg = valor * 760

    let receberesultados = `
        PA: ${pa.toFixed(2)} (Pascal (Pa))<br>
        PSI: ${psi.toFixed(2)} (PSI)<br>
        Bar: ${bar.toFixed(2)} (BAR)<br>
        ATM: ${atm.toFixed(2)}<br>
        MMHG: ${mmhg.toFixed(2)}<br>
    `;

    if (!isNaN(valor)) {
        document.getElementById("res").innerHTML = receberesultados;
    } else {
        document.getElementById("res").innerHTML = `Favor informar um número válido.`;
    }
}
