//FUNCIONES_P1
//Sesion modulo_02 semana_03 marzo_17 2021



//Declaracion de una funcion
function multiplica(primerOperando , segundoOperando){
    var resultado = primerOperando * segundoOperando;
    console.log("Declaracion de una funcion: " + resultado);
}
multiplica(10, 7);

function multiplicaN2(){
    var resultadoN2 = 12 * 12;
    console.log("Declaracion de otra funcion: " + resultadoN2);
}
multiplicaN2();


//Declaracion de una funcion como una expresion
var resultado = function multiplicaN3(primerOperando){
    return 2 * primerOperando;
}
console.log("Declaracion de una funcion como una expresion: " + resultado(25));


//Funciones flecha
const saludaPersona = (nombre) => console.log("Hola " + nombre + " esto es una funcion flecha");
saludaPersona("Pepe");

const suma = (numero) => console.log ("Otra funcion flecha: " + numero * 2)
suma(12);


/*Ejercicio #1
Escribir un programa que tenga la funcion a la
que se le pasa como parametro un numero y devuelve como 
resultado un texto que idica si el numero es para o impar*/

function insertNumber(number){
    if(number % 2 == 0){
        console.log(number + " es un numero PAR");
    }
    else{
        console.log(number + " es un numero IMPAR");
    }
}
insertNumber(11);



/*Ejercicio #2
Definir una funcion que muestre la informacion
de un texto que se introduce como argumento y determina
si el texto contiene mayusculas, minusculas o ambas.*/

function insertText(text){
    if(text == text.toUpperCase()){
        console.log("El texto esta completamente en mayuscula");
    }
    else if(text == text.toLowerCase()){
    // esta parte tambien se puede como (text !== text.toUpperCase()) pero no se podria ejecutar la ultima condicion else.
        console.log("El texto esta completamente en minuscula")
    }
    else{
        console.log("El texto esta en minuscula y mayuscula");
    }

}
insertText("anQUIlosauRIO");