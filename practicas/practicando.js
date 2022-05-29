// function primero(segundo){ 
//     setTimeout(function(){
//         console.log ("PRIMERO")
//         segundo();
//     }, 3000);
// }

// function segundo(){
//     console.log ("SEGUNDO")
// }
// primero(segundo)

// let doble = n => n * 2;
// let triple = n => n * 3;
// let aplicarCallBack = (n, operacion) => operacion(n)

// console.log(aplicarCallBack(5, triple))

//Metodo de array  "Map":

// let numeros = [2, 4, 5];

// let sumandoDos = numeros.map (function (unNumero) {
//  return unNumero + 2
// }) 
// console.log(sumandoDos)
//cuando declaramos como callback "function" sin denominacion
//estamos hablando de una función anonima.

//Metodo "filter":

// let edades = [20, 14, 18, 4, 40, 8, 20, 55, 50, 2];

// let mayores = edades.filter(function (unaEdad){
//     return unaEdad >= 18
// })
// console.log(mayores)
// /* dentro del callback ponemos las condiciones necesarias para filtrar
// el array */

//Metodo "reduce":
// let numeros = [71, 45, 70];
// let resultado = numeros.reduce(function (acumulador, numero){
//     return acumulador * numero;
// })
// console.log(resultado)

//Metodo "forEach":

// let estudiantes = [
//     {nombre: 'John', promedio: 8.5, aprobado: true},
//     {nombre: 'Jane', promedio: 7, aprobado: true},
//     {nombre: 'June', promedio: 3, aprobado: false},
// ]
// let aprobados = estudiantes.filter(function (estudiantes){
//     return estudiantes.promedio >= 7;
// })
// console.log(aprobados)


// console.log(fechaActual.getFullYear())

// let miCumple = new Date(1990, 11, 08);

// let fechaActual = new Date()
// let anio = fechaActual.getFullYear();
// let mes = fechaActual.getMonth();
// let dia = fechaActual.getDate();

// console.log("Hoy es el " + dia + " de " + mes + " de " + anio)

// Destructuring:
// permite extraer un dato concreto de un array o un objeto literal.
// let colores = ["azul", "violeta", "rojo", "negro"];
// let [ , , color3] = colores;

let persona ={
    nombre: "facundo",
    edad: 31,
    profesion: "abogado"
}
let { nombre, actividadFavorita} = persona;
console.log(color3)
let frutas = ["2", "5"];
let buscando = frutas.map(function(numero){
 return numero * 75
})
console.log(buscando);