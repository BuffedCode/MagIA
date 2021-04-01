//DESCONMPOSICION DE OBJETOS
//Sesion modulo_02 semana_04 marzo_23 2021



let persona = {
    nombre:"Pepe",
    apellido:"Qwerty",
    edad:25
}

//Con descompocision
let {nombre, apellido} = persona;
console.log("El nombre del participante con descomposicion es: " + nombre + " " + apellido);


// Sin descompocision
var nombreN2 = persona.nombre;
var apellidoN2 = persona.apellido;
console.log("El nombre del participante sin descomposicion es: " + nombreN2 + " " + apellidoN2);


//Ejemplo #2
let celular = {color: "rojo", marca: "Xiaomi", bateria: 20}
let {color, bateria} = celular;
console.log(color , bateria);


//Ejemplo #3
var perro = {
    raza:"Buldog",
    color:"Rosado",
    tamaño: "0.7m", 
    peso:"45kg", 
    nameDog:"Perrote"
}
//forma #1
var {raza,nameDog} = perro;
console.log("Forma #1: " + raza, nameDog);
//forma #2
var dog;
({raza, nameDog} = perro)
console.log("Forma #2: " + raza, nameDog);


//Ejemplo de valor por defecto 
var fruit = {nameFruit: "Kiwi", colorFruit: "Verde"}
var {nameFruit, sizeFruit = 10} = fruit;
console.log("El nombre de la furta es: " + nameFruit + "\ny su tamaño es: " + sizeFruit);

//Descomposicion en Funciones
var shipment = {
    numShipment: 456, 
    product: "Mesa",
    postalCode: 54
}
function shipmentN2 ({numShipment, product}){
    console.log("El producto a enviar es: " + product + "\nCon numero de ennvio " + numShipment);
}
shipmentN2(shipment);