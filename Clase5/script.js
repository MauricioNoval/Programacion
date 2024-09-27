// Calcular el perimetro de un rectanglo. 2x(L + A)

function calcularPermietro(largo, ancho) {
    return (2*(largo + ancho))

}

var n = prompt("Ingrese el largo del rectangulo")
var m = prompt("Ingrese el ancho del rectangulo")

var n1 = Number(n)
var m1 = Number(m)

console.log(calcularPermietro(n1, m1))

console.log("hola")