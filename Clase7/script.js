// // Objetos

// var usuario = {nombre:"Carlos",edad:30,email:"carlos@gmail.com",activo:false}
// var estado 

// if(usuario.activo == true){
//     estado = "activo"
// } else{
//     estado = "inactivo"
// }

// console.log(`El usuario ${usuario.nombre} tiene ${usuario.edad} y está ${estado}`)


// var auto = {
//     marca:"ferrari",
//     modelo:"360 modena",
//     year:2010,
//     detalles:function(){
//         console.log(`Mi auto favorito es el ${this.marca} ${auto.modelo} del año ${auto.year}`)
//     }
// }

// auto.detalles()

// const numeros = [{edad:30},{apellido:"Noval"},{nombre:"Mauricio"}]

// var numMultiplicados = numeros.map(num => num.apellido)

// console.log(numMultiplicados)

// var edades = [14,12,35,42]
// var mayores = edades.filter(x => x >= 18)

// console.log(mayores)

// console.log(edades)

// Programación orientada a objetos.

// class Persona{
//     constructor(nombre,edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    
//     }
// }


// var persona1 = new Persona("Mauricio",30)
// var persona2 = new Persona("Carlos",35)

// persona1.saludar()

// class Animal{
//     constructor(nombre,edad){
//         this.nombre = nombre;
//         this.edad = edad
//     }
//     hacerSonido(){
//         console.log(`Este ${this.nombre} hace un sonido, y tiene ${this.edad} años`)
//     }
// }

// var animal1 = new Animal("tigre",3)

// animal1.hacerSonido()

// class Perro extends Animal{
//     constructor(nombre,edad){
//         super(nombre,edad);
//     }
// //     hacerSonido(){
// //         console.log("Guau guau")
// //     }
//  }

// var perro = new Perro("Apolo",2)


// perro.hacerSonido()


class Auto{
    constructor(modelo){
        this.modelo = modelo;
        this.enMovimiento = false;
    }
    avanzar(){
        if(this.enMovimiento == false){
            this.enMovimiento = true
            console.log(`El ${this.modelo} esta avanzando`)
        }else {
        console.log(`El ${this.modelo} ya esta avanzando`)

    }
    }
    frenar(){
        if(this.enMovimiento == true){
            this.enMovimiento = false
            console.log(`El ${this.modelo} esta frenando`)
        }else {
            console.log(`El ${this.modelo} ya esta frenando`)
        }
    }
}

var auto1 = new Auto("ferrari")

auto1.avanzar()
auto1.frenar()

// Tarea hacer lo mismo, pero que cuando llegue a los 80 km/hr que frene, y que la velocidad quede en 0.