var n1 = prompt("Ingrese el numero")
//var n2 = prompt("Ingrese el segundo numero")
//var n2 = prompt("¿Vienes con un mayor?")


var num1 = Number(n1)
//var num2 = Number(n2)

// var suma = num1+num2
// var resta = num1-num2
// var divid = num1/num2

// console.log(`La suma de ${num1} y ${num2} da como resultado: ${suma}`)
// console.log(`La resta entre ${num1} y ${num2} da como resultado: ${resta}`)
// console.log(`La multiplicación de ${num1} y ${num2} da como resultado: ${num1*num2}`)
// console.log(`La división de ${num1} y ${num2} da como resultado: ${divid}`)

// Buscar un número que sea mayor a 50, pero menor a 100

// if(num2>0){
//     console.log(`La división entre ${num1} y ${num2} es ${num1/num2}`)
// }else{
//     console.log(`El numero ${num2} es negativo, por lo tanto no se puede usar para la división`)
// }

// if(num1>0 && num1<100){
//     console.log(`El numero ${num1} cumple las condiciones`)
// }else{
//     console.log(`El numero ${num1} NO cumple las condiciones`)
// }

// Si la persona es menor a 18 años, pero vinee acompañada con un mayor puede ingresar

// if(num1<18){
//     if(num1<18){
//         var falta = 18 - num1
//         console.log(`No puedes ingresar porque eres menor de edad y no vienes con un mayor, aún te faltan ${falta} años para poder`)
//     }else{if(num2 = "si"){
//         console.log(`Si puedes ingresar`)
//     }
        
//     }
// }


// Como saber si un número es par o impar.

// if(num1 % 2 == 0){
//     console.log(`El numero ${num1} es par`)

// }else{
//     console.log(`El numero ${num1} es impar`)
// }

// switch(true){
//     case(num1>0):
//         console.log(`El ${num1} es positivo`)
//         break;
//     case(num1<0):
//         console.log(`El numero ${num1} es negativo`)
//         break;
//     default:
//         console.log(`el numero es 0`)
// }


// Si la persona es menor a 18 años, pero viene acompañada con un mayor puede ingresar

// switch(true){
//     case(num1<18 && n2 == "no"):
//         console.log(`No puedes ingresar`)
//         break;
//     case(num1<18 && n2 == "si"):
//         console.log(`Si puedes ingresar`)
//         break;
//     case(num1>18):
//         console.log(`Si puedes ingresar`)
//         break;
//     default:
//         console.log(`Error: Ingresa correctamente los datos`)
// }

// Determinar si un numero es divisible por 3 , por 5 o por ambos
// if(num1 % 3 == 0 && num1 % 5 == 0 ){
//         console.log(`El numero ${num1} es divisible por ambos`)
// }else if(num1 % 5 == 0){
//     console.log(`El numero ${num1} es divisible por 5`)
// }else if(num1 % 3 == 0){
//     console.log(`El numero ${num1} es divisible por 3`)
    
// }else{console.log(`El numero ${num1} NO es divisible por 5 ni por 3`)}


// Crear un programa que pida al ussuario ingreesar la T° en Celcius.
// Si es menos de 0 grados esta muy frio
// Si es entre 0 y 15 grados hace frio
// 16-30 el clima esta agradable
// 30+ hace mucho calor

console.log(typeof(num1))
console.log(!isNaN(num1))


if(num1 < 50 && !isNaN(num1)){
    switch(true){
        case(num1 < 0):
            console.log(`Hace mucho frio`)
            break;
        case(num1 > 0 && num1 <= 15 ):
            console.log("Hace frio")
            break;
        case(num1 > 15 && num1 <= 30 ):
            console.log("El clima esta agradable")
            break;
        default:
            console.log("Hace mucho calor")
    
    }
}else{
    console.log("Ingrese una temperatura correcta")
}

