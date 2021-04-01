//FUNCIONES ASINCRONICAS PARTE_01 
//Sesion modulo_02 semana_04 marzo_25 2021



console.log("Inicio");

function two(){
    console.log("Dos");
}

function one(){
    console.log("Uno");
    two();
    console.log("Tres");
}
one();

console.log("Fin");

console.log("Inicio");

function two(){
    setTimeout(function(){
        console.log("Dos");
    },0 ) //1 segundo = 1000 milisegundo
}

function one(){
    setTimeout(function(){
        console.log("Uno");
    },1000 );
    two();
    console.log("Tres");
}
one();

console.log("Fin");