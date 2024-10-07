// // Arreglos: 
// const frutas = ["manzana","pera","platano"]
// // Metodo - Length
// console.log(frutas.length)

// // Para agregar al final de la lista 
// frutas.push("mandarina")


// // Para Agregar al inicio de la lista
// frutas.unshift("arandanos")

// // Quitar el ultimo elemento
// frutas.pop()

// // Quitar el primer elemento
// frutas.shift()



// for (let i = 0 ; i < frutas.length ; i++){
//     console.log(frutas[i])
// }

// Ex1: Encontrar el número mayor en un arreglo.

// const num = [10,3,15,4,7]

// var mayor = []

// for( let i = 0; i< num.length; i++){
//     let val = num[i]

//         if(val > mayor){
//             mayor.pop()
//             mayor.push(val)
//         }
    
// }
// console.log(mayor)


// Ex2: Hacer un progrmaa que tome un arreglo, y lo invierta creando un nuevo arreglo.

var arreglo1 = ["R","O","M","A"]
var arreglo2 = []

for(let i = 0; i < arreglo1.length; i++){
    arreglo2.unshift(arreglo1[i])
}
    console.log(arreglo2)