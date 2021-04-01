//CICLOS
//Sesion modulo_02 semana_03 marzo_16 2021



//While
var counterN0 = 5;
var counterN1 = 30;
while(counterN0 <= 10 && counterN1 >= 25){
    console.log ("CounterN0: " + counterN0, "CounterN1: " + counterN1 );
    counterN0++;
    counterN1--;
};


//Do-While
var counterN2 = 0;
var conditionN0 = "hello";

do{
    console.log("Entraste al ciclo, te felicito")
    if(counterN2 == 2){
        condition ="bye"
    };
    counterN2++;
}while(counterN2=="hello");

//-----------------------

var conditionN1 = 5;

do{
    console.log("Valor: " + conditionN1);
    conditionN1 -= 5;
}while(conditionN1 >= 5)


/*Ejercicio Do-while
Crear un programa que lea tantos numeros como 
como se quiera hasta que se reciaba un cero, 
y se mostrara un resultado, que sera la
suma de todos los numero ingresados*/


//Con do-whilew
const prompt = require("prompt-sync")();
var number;
var sum = 0;
do{
    number = prompt("Ingresa tu numero (do-while): ");
    sum += parseInt(number);
}while(number != 0);
console.log("La suma total es: " + sum);


//Con while
while(number != 0){
    number = prompt("Ingresa tu numero (while): ");
    sum += parseInt(number);
};
console.log("La suma total es: " + sum);
