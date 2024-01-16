

// var numero = prompt("Digite um número de 1 a 5")
// console.log(numero)
// console.log(typeof (numero))
// if(numero == 5){
//     alert("Cinco")
// } else if (numero == 4){
//     alert("Quatro")
// } else if (numero == 3) {
//     alert("Três")
// } else if (numero == 2){
//     alert("Dois")
// } else if (numero == 1){
//     alert("Um")
// } else (
//     alert("Você não digitou um número entre 1 e 5.")
// )

var numero = prompt("Digite um numero entre 1 e 50:")
// numero = parseInt(numero)

if (numero >= 0 && numero <= 10) {
    alert("Numero entre 0 e 10")
} else if ( numero >= 11 && numero <= 20){
    alert("Numero entre 11 e 20")
} else if ( numero >= 21 && numero <= 30){
    alert("Numero entre 21 e 30")
} else if ( numero >= 31 && numero <= 40){
    alert("Numero entre 31 e 40")
} else if ( numero >= 41 && numero <= 50){
    alert("Numero entre 41 e 50")
} else {
    alert("Número Inválido.")
}