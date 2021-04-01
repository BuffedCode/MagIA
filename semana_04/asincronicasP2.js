//FUNCIONES ASINCRONICAS PARTE_02 
//Sesion modulo_02 semana_04 marzo_27 2021



console.log("Hello");
setTimeout(function timeout(){
    console.log("World");
},4*1000)
console.log("Beautiful");



//Callback
/*Es una funcion que se ejecutara despues de que otra lo haga.
Es un mecanismo para asegurar que cierto codigo no se ejecute 
hasta que otro haya terminado, controlando la asincronia*/

function first(callback){
    setTimeout(function(){
        return callback("Primero");
    },5*1000)
}

function second(callback){
    return callback("Segundo");
}

first(function(resultado1){
    console.log(resultado1);
    second(function(resultado2){
        console.log(resultado2)
    });
});
