async function getM1() {
    const res = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.24363/dados?formato=json");
    const res2 = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.24364/dados?formato=json");
    const res3 = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.24365/dados?formato=json");
    const dados = await res.json();
    const dados2 = await res2.json();
    const dados3 = await res3.json();
    //Agregado M1:
    const mes1 = dados[dados.length - 1]; // último dado da série
    const mes2 = dados[dados.length - 2]; // último dado da série
    const mes3 = dados[dados.length - 3]; // último dado da série
    const mes4 = dados[dados.length - 4]; // último dado da série
    const mes5 = dados[dados.length - 5]; // último dado da série
    const mes6 = dados[dados.length - 6]; // último dado da série
    //Agregado M2:
    const mes01 = dados2[dados2.length - 1]; // último dado da série
    const mes02 = dados2[dados2.length - 2]; // último dado da série
    const mes03 = dados2[dados2.length - 3]; // último dado da série
    const mes04 = dados2[dados2.length - 4]; // último dado da série
    const mes05 = dados2[dados2.length - 5]; // último dado da série
    const mes06 = dados2[dados2.length - 6]; // último dado da série
    //Agregado M3:
    const mes001 = dados3[dados3.length - 1]; // último dado da série
    const mes002 = dados3[dados3.length - 2]; // último dado da série
    const mes003 = dados3[dados3.length - 3]; // último dado da série
    const mes004 = dados3[dados3.length - 4]; // último dado da série
    const mes005 = dados3[dados3.length - 5]; // último dado da série
    const mes006 = dados3[dados3.length - 6]; // último dado da série

    document.getElementById("m1").innerHTML = `
   Agregado M1 ${mes1.data} foi R$ ${parseFloat(mes1.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M1 ${mes2.data} foi R$ ${parseFloat(mes2.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M1 ${mes3.data} foi R$ ${parseFloat(mes3.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M1 ${mes4.data} foi R$ ${parseFloat(mes4.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M1 ${mes5.data} foi R$ ${parseFloat(mes5.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M1 ${mes6.data} foi R$ ${parseFloat(mes6.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
`
    document.getElementById("m2").innerHTML = `
   Agregado M2 ${mes01.data} foi R$ ${parseFloat(mes01.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
  Agregado M2 ${mes02.data} foi R$ ${parseFloat(mes02.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
  Agregado M2 ${mes03.data} foi R$ ${parseFloat(mes03.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
  Agregado M2 ${mes04.data} foi R$ ${parseFloat(mes04.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
  Agregado M2 ${mes05.data} foi R$ ${parseFloat(mes05.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M2 ${mes06.data} foi R$ ${parseFloat(mes06.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
`
    document.getElementById("m3").innerHTML = `
   Agregado M3 ${mes001.data} foi R$ ${parseFloat(mes001.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M3 ${mes002.data} foi R$ ${parseFloat(mes002.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M3 ${mes003.data} foi R$ ${parseFloat(mes003.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M3 ${mes004.data} foi R$ ${parseFloat(mes004.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M3 ${mes005.data} foi R$ ${parseFloat(mes005.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
   Agregado M3 ${mes005.data} foi R$ ${parseFloat(mes006.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} bilhões<br>
`
}


