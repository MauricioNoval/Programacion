function sumarNumeros(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    
    if(isNaN(n1) || isNaN(n2)){
        document.getElementById("resultado").textContent = "Por favor ingresa números validos";
        return;
    }
    var suma = n1 + n2;
    document.getElementById("resultado").textContent = `El resultado es ${suma}`;

}

