// Estructura for
// for(let i = 0 ; i < 10 ; i++){
//      console.log(i)
// }

// for (let i = 1; i <= 20 ; i++){
//     console.log(i)
// }

// let i = 25
// while(i <= 10){
//      console.log(i)
//      i++
// }

// let i=25
// do {
//     console.log(i)
//     i++
// }while(i <= 12)

// Imprimir la tabla de multiplicar de un numero que sea ingresado

//et n1 = prompt("Ingrese un número")

// console.log(typeof(n1))
// console.log(!isNaN(n1))

// if(!isNaN(n1)){
//     for(let i = 0; i <= 10; i++){
//         console.log(`${n1} x ${i} = ${n1*i}`)
//     }
// }else{
//     console.log("Ingrese un numero correcto")
// }

// Sumar numero del 1 al 100, que sean pares

// var suma = 0

// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         suma += i;
//     }

// }

// console.log(suma)

// Contar cuantos numeros del 1 al 50 son multiplos de 5

// let i = 1
// let a = 0

// while(i <= 50){
//     if(i % 5 == 0){
//         a++;
//     }
//     i++
// }
// console.log(a)

// Pedir al usuario la contraseña, hasta que sea correcta

// let pass = "1234"


// do{
//     var n = prompt("Ingrese la contraseña")

// } while (n !== pass)

// console.log("la contraseña es correcta")

// Imprimir los primeros 10 numeros en orden inverso. (do while)

// var n = 10
// do{
//     console.log(n)
//     n --
// }while(n>0)


// var n = prompt("Ingrese un numero")
// var contador = 0
// do{
//     console.log(n)
//     n --
//     contador++ 
//  }while(contador <= 9)
    
// Pedir al usuario numeros, hasta que ingrese un numero negativo.

let n = 1
do{
    n = prompt("Ingrese un numero")
}while(n>0)
    console.log("El numero ingresado es negativo")
    