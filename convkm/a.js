function conv(){
   const ha = parseFloat(document.getElementById("ha").value);
   const km = ha/100
   const m = ha *10000
   const cm = ha * 1000000000
   const mm = ha*100000000000

   if(!isNaN(ha)&&ha>0){
   document.getElementById("res1").innerHTML=`A conversão em KM² ${km}`
   document.getElementById("res2").innerHTML=`A conversão em M² ${m}`
   document.getElementById("res3").innerHTML=`A conversão em CM² ${cm}`
   document.getElementById("res4").innerHTML=`A conversão em MM² ${mm}`
   }else{
   document.getElementById("res1").innerHTML="Insira um Numero correto"
   document.getElementById("res2").innerHTML="Insira um Numero correto"
   document.getElementById("res3").innerHTML="Insira um Numero correto"
   document.getElementById("res4").innerHTML="Insira um Numero correto"
   }


}
