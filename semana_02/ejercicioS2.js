//EJERCICIO DE REPASO SEMANA_02
//Asesoria modulo_02 semana_02 marzo_13 2021



/*Crea un progrma en donde tengas que adivinar las letras de una palabra 
de 4 letras, tendras solo 4 intentos para adivinarla,
en un inicio la palabra estara oculta, pero cada vez que aciertes, 
se mostrara la letra, si adivinas la palabra antes de que se te
acaben los intentos ganas, sino pierdes*/


const prompt = require("prompt-sync")();
var hidden = [];
var discovered = ["_","_","_","_"];
var errorCounter = 4;
var hitCounter = 0;

console.log("\nLas reglas del juego son simples solo debes de escribir la\n" + 
            "palabra que quieres ocultar (Todo en minuscula ), despues\n" +
            "dejar una pista y al final intentar descifrarla.\n\n")
console.log("Escribe tu palabra de cuatro letras que quieres ocultar")
hidden[0] = prompt("Dame la primera letra: "); 
hidden[1] = prompt("Dame la segunda letra: "); 
hidden[2] = prompt("Dame la tercera letra: "); 
hidden[3] = prompt("Dame la cuarta letra: "); 
clue = prompt("Deja una pista para descubrir la palabra: ");


console.log("\n\nAqui te dejamos una pista: " + clue + "\nTrata de decifrar la palabra oculta de cuatro letras\n" );

for( i=0; i<(hidden.length*2); i++ ){
    var tried = prompt("Ingresa una letra: ");
    switch(tried){
        case hidden[0]:
            discovered[0] = hidden[0];
            console.log(discovered);
            hidden[0] = null;
            hitCounter++;
            break
        case hidden[1]:
            discovered[1] = hidden[1];
            console.log(discovered);
            hidden[1] = null;
            hitCounter++;
            break
        case hidden[2]:
            discovered[2] = hidden[2];
            console.log(discovered);
            hidden[2] = null;
            hitCounter++;
            break
        case hidden[3]:
            discovered[3] = hidden[3];
            console.log(discovered);
            hidden[3] = null;
            hitCounter++;
            break
        default:
            errorCounter--
            console.log("Te equivocaste :(");
            console.log("Te quedan " + errorCounter + " intentos")
            console.log(discovered);
            break
    }
    if(hitCounter == 4){
        break;
    }
    else if(errorCounter == 0){
        break;
    }
}
if((errorCounter == 0 && hitCounter < 4)){
    console.log("\n\nYOU LOST :v");
}
else if(hitCounter == 4){
    console.log("\n\nYOU WIN ☺☻")
}