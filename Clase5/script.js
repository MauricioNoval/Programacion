// Calcular el perimetro de un rectanglo. 2x(L + A)

// var n = prompt("Ingrese el largo del rectangulo")
// var m = prompt("Ingrese el ancho del rectangulo")

// function calcularPermietro(largo, ancho) {
//     return (2*(largo + ancho))

//}

// var n1 = Number(n)
// var m1 = Number(m)

// console.log(calcularPermietro(n1, m1))

// console.log("hola")

// Convertir grados celsius a Farenheit. (C x 9/5) + 32

// function celsiusFarenheit(t){
//     var resultado = t * (9/5) + 32
//     return "La temperatura es "+ resultado +"° Farenheit"
// }

// var t = prompt("Ingrese la temperatura en Celsius")

// console.log(celsiusFarenheit(t))

// Función sumar,restar,multiplicar y dividir

// function sumar(a,b){
//     return a + b
// }

// function restar(a,b){
//     return a-b
// }

// function multiplicar(a,b){
//     return a*b
// }

// function dividir(a,b){
//    if(b == 0){
//     console.log("los numeros ingresados son invalidos")
//     }
//     return a/b
// }

// function calculadora(operacion,x,y){
//     return operacion(x,y)
// }

// console.log(calculadora(sumar,4,5))


// Hacer una calculadora, donde el usuario ingrese la operación que quiere hacer (pendiente)

var timer = prompt("Cuanto te gustaría que durara el tiempo de espera en segundos")
var timer2 = timer*1000

function numeroDos(){
    console.log(`Este es el mensaje luego de ${timer} segundos`)
}

function mostrarMensaje (timer2){
    console.log("procesando mensaje...")
    setTimeout(function(){
        numeroDos()
    },timer2)

     
}
console.log(mostrarMensaje(timer2))
