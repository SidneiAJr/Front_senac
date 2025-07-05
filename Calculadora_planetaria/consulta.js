function planetario(){
    const entrada = Number(document.getElementById("info").value)
    const gravida_planetas={
        terra: 9.81,
        mercurio: 3.7,
        jupiter:24.79,
        satuno:10.44,
        venus:8.87,
        urano:8.69,
        netuno:11.15,
        marte:3.71,
    }
    if(!isNaN(entrada)){
      const pesoterra = entrada
      const pesojup = (entrada*gravida_planetas.jupiter/gravida_planetas.terra).toFixed(2)
      const pesosaturn = (entrada*gravida_planetas.satuno/gravida_planetas.terra).toFixed(2)
      const pesovenus = (entrada*gravida_planetas.venus/gravida_planetas.terra).toFixed(2)
      const pesourano = (entrada*gravida_planetas.urano/gravida_planetas.terra).toFixed(2)
      const pesomerc = (entrada*gravida_planetas.mercurio/gravida_planetas.terra).toFixed(2)
       const pesonetuno = (entrada*gravida_planetas.netuno/gravida_planetas.terra).toFixed(2)
      document.getElementById("tamanho").innerHTML=`
        Peso Terra ${pesoterra} KG<br>
        Peso Jupiter ${pesojup} KG<br>
        Peso Saturno ${pesosaturn} KG<br>
        Peso Marte ${pesovenus} KG<br>
        Peso Urano ${pesourano} KG<br>
        Peso Mercurio ${pesomerc} KG<br>
        Peso Netuno ${pesonetuno} KG<br>
        `
    }else{
        document.getElementById("tamanho").innerHTML="Favor Inserir um Numero correto"
    }
}
