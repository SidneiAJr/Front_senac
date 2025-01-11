// Cria a função para converter
function receb(){  // função para calcular
    const valor = document.getElementById("valorIni").value
    const juros = document.getElementById("juros").value
    const tempo = document.getElementById("tempo").value

    if(valor&& !isNaN(valor)||tempo&& !isNaN(tempo)){

        const divjuros = juros/100
        const valorfuturo = valor*(1+divjuros)**tempo
        const mes = tempo*12
        document.getElementById("vf").innerHTML = `Valor total no Vencimento R$:${valorfuturo.toFixed(2)}` 
        if(mes<=12){
        const ir = valorfuturo*0.20
        const liq = valorfuturo -ir
        document.getElementById("ir").innerHTML = `Impostos R$:${ir.toFixed(2)}` 
        document.getElementById("liq").innerHTML = `Valor Liquido R$:${liq.toFixed(2)}` 
        }else if(mes>24){
        const ir = valorfuturo*0.175
        const liq = valorfuturo -ir
        document.getElementById("ir").innerHTML = `Impostos R$:${ir.toFixed(2)}` 
        document.getElementById("liq").innerHTML = `Valor Liquido R$:${liq.toFixed(2)}` 
        }else{
        const ir = valorfuturo*0.15
        const liq = valorfuturo -ir
        document.getElementById("ir").innerHTML = `Impostos R$:${ir.toFixed(2)}` 
        document.getElementById("liq").innerHTML = `Valor Liquido R$:${liq.toFixed(2)}` 
        } 
    }else{
        document.getElementById("res1").innerHTML = "Por Favor insira um valor valido"
    }
    }
    
    function gerapdf(){ //Não esquecer da função se não não gera
        const btn_imp = document.getElementById("btn_gera");
        btn_imp.addEventListener("click", (evt) => {
            const conteudo = document.getElementById("vf").innerHTML;
            const conteudo2 = document.getElementById("ir").innerHTML;
            const conteudo3 = document.getElementById("liq").innerHTML;
        
            // Criando uma nova instância do jsPDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
        
            // Adicionando o conteúdo da div ao PDF
            doc.text(conteudo, 5, 5);
            doc.text(conteudo2, 10, 10);
            doc.text(conteudo3, 15, 15);
        
            // Salvando o PDF
            doc.save('documento.pdf');
        });
    }
    
    
