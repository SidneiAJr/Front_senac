function ad(car){
   const valor = document.querySelector('.display').value
   document.querySelector('.display').value = valor + car
}

function limpa(){
    document.querySelector('.display').value = ''
}
function calc(){
    const valor = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valor)
}
function inv(){
    const valor = document.querySelector('.display').value
    document.querySelector('.display').value = valor * -1
}
