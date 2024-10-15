

console.log(typeof(n1))

function sumar(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);

    let suma = n1 + n2;
    resultado = suma
}

function restar(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);

    let resta = n1 - n2;
    resultado = resta
}

function multiplicar(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);

    let multiplicacion = n1 * n2;
    resultado = multiplicacion
}

function dividir(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);

    if(n2 == 0){
        resultado = `Para realizar una división el divisor no puede ser 0`
        return;
    }
    let division = n1 / n2;
    resultado = division;
}


function mostrarResultado(){
    document.getElementById("resultado").textContent = resultado
    const contenedor = document.getElementById("contenedor");
    contenedor.style.backgroundColor = contenedor.style.backgroundColor === "bisque" ? "blue" : "bisque"
}
