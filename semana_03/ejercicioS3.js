//EJERCICIOS DE REPASO SEMANA_03
//Asesoria modulo_02 semana_03 marzo_20 2021



const prompt = require('prompt-sync')();


//ParseInt
//Funcion utilizada para pasar una string o numero con punto flotante a entero
var parse = prompt("Ingrese un numero") //el prompt si se ingresa un numero, lo ingresara como string 
                                        //por lo que se necesitara usar parseInt para convertirlo a 
                                        //numero y poder hacer operaciones aritmetica
console.log(parseInt(parse));

//toString
//Funcion utilizada para pasar un numero a un texto
var string = 50;
console.log(string.toString());

