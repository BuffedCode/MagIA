//EJERCICIO DE REFORZAMIENTO SEMANA_02
//Modulo_02-2021



/*Últimamente ha habido muchos incidentes de seguridad en tu escuela, esto es 
porque se ha reportado que ciertas personas leen mensajes ajenos,para
evitar esto, tienes que crear un sistema de cifrado, el cual ocultará el 
mensaje y una vez que la persona indicada reciba el mensaje, esta 
pueda saber el contenido del mensaje oculto.Para lograr esto, debemos hacerlo 
de la siguiente forma, el abecedario se dividirá en 2 partes iguales  
de 13 letras cada una, estas estarán relacionadas entre sí, por lo que, 
si tenemos la letra “a”, al realizar el proceso para ocultar el mensaje, 
esta se convertirá en una “n”, la “b” se transformará en “o” y así sucesivamente. 

Para  poder  visualizarlo  mejor,  el  siguiente  diagrama  ilustrará  el procedimiento:

abcdefghijklm
|||||||||||||
nopqrstuvwxyz

En dado caso que ingresemos un valor distinto a una letra minúscula(letra 
mayúscula, número), será necesario mostrar un mensaje de error y pedir 
que ingrese un valor correcto.

Cada vez que queramos ocultar o revelar un mensaje, debemos aplicar el 
procedimiento  anterior,  con  ello,  podremos  evitar  que  cualquier 
persona pueda leer nuestros mensajes.*/


const prompt = require("prompt-sync")();
const part1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
const part2 = ["n","o","p","q","r","s","t","u","v","w","x","y","z"];
var message = prompt("Introduce tu mensaje: ");
var option = prompt("Deseas encriptar(Escribe 1) o desencriptar(Escribe 2): ");




if (option == 1){
    encrypt();
}
else if (option == 2){
    desencrypt();
}
else{
    console.log("Valor invalido \nPorfavor ingresa 1 si deseas encriptar o 2 si quieres desencriptar");
}


function encrypt(){
    order();
    
    for(i=0; i<=part1.length; i++){
        if (part1.includes(message[i])) {
            var resultado = part1.findIndex(elemento => elemento == message[i]); //.findIndex busca elemento y retorna su index 
            console.log(part2[resultado]); //Muestra el resultado en el index del Array contrario para ocultar MSN
        }
        else if(part2.includes(message[i])) { //Else if continua buscando en otra mitad del alfabeto 
            var resultado = part2.findIndex(elemento => elemento == message[i]);
            console.log(part1[resultado]);
        }
        
    }
}



function desencrypt(){
    order();
    
    for(i=0;i<=part2.length;i++){
        if (part2.includes(message[i])) {
            let resultado = part2.findIndex(elemento => elemento == message[i]);
            console.log(part1[resultado]);
        } 
        else if (part1.includes(message[i])) {
            let resultado = part1.findIndex(elemento => elemento == message[i]);
            console.log(part2[resultado]);
        }
    }
}



function order(){
    message = message.toLowerCase();
    message = message.split("");
}
