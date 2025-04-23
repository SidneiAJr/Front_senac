function conv(){
   const anos = document.getElementById("ano").value
   
   if(!isNaN(anos)&&anos>0){
   const ano = anos*365
   const meses = anos *12
   const horas = anos*8766
   
   document.getElementById("res1").innerHTML=`Anos em Dias:${ano}`
   document.getElementById("res2").innerHTML=`Anos em Meses:${meses}`
   document.getElementById("res3").innerHTML=`Anos em Horas:${horas}`
   }else{
    document.getElementById("res1").innerHTML="Favor inserir corretamente"
    document.getElementById("res2").innerHTML="Favor inserir corretamente"
    document.getElementById("res3").innerHTML="Favor inserir corretamente"
   }
   
}
