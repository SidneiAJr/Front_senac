function conv(){
   const ha = document.getElementById("ha").value
   const km = ha/100
   const m = ha *10000
   const cm = ha * 1000000000
   const mm = ha*100000000000
   const jardas = ha*119599
   const milhas = ha/25899891738


   if(!isNaN(ha)&&ha>0){
   document.getElementById("res1").innerHTML=`A conversão em KM² ${km}`
   document.getElementById("res2").innerHTML=`A conversão em M² ${m}`
   document.getElementById("res3").innerHTML=`A conversão em CM² ${cm}`
   document.getElementById("res4").innerHTML=`A conversão em MM² ${mm}`
   document.getElementById("res5").innerHTML=`A conversão em Jardas² ${jardas}`
   document.getElementById("res6").innerHTML=`A conversão em Milhas² ${milhas}`

   }else{
   document.getElementById("res1").innerHTML="Insira um Numero correto"
   document.getElementById("res2").innerHTML="Insira um Numero correto"
   document.getElementById("res3").innerHTML="Insira um Numero correto"
   document.getElementById("res4").innerHTML="Insira um Numero correto"
   document.getElementById("res5").innerHTML="Insira um Numero correto"
   document.getElementById("res6").innerHTML="Insira um Numero correto"
   }


}
