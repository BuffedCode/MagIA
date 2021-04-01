//PPOO - PARADIGMA DE PROGRAMACION ORIENTADO A OBJETOS
//Sesion modulo_02 semana_03 marzo_20 2021



const prompt = require('prompt-sync')();


//Creacion de un objeto
var celular = {
    color: "Negro",
    peso: "90g",
    numCamaras: 3,
    sistema: "Android",
    duracionBateria: 12,
    prender: function(){return "Prendiendo..."},
    reiniciar: function(){return "Reiniciando.."}
}
console.log(celular.sistema + "\n" + celular.color);
console.log(celular.prender())

//Clase
//Class es usado para crear una plantilla para objeto
class galleta{
    constructor(tamaño, forma, sabor, ){
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;
        this.hornear = function(){return "horneando..."}
    }
}
//var galletaChocolate = new galleta("5x5 cm", "Cuadrada", "Chocolate");
//var galletaFresa = new galleta("4cm", "Circular", "Fresa"); 

//console.log(galletaChocolate,"\n",galletaFresa);
//console.log(galletaChocolate.sabor,"\n",galletaFresa.sabor)

tamaño=prompt("Dame el tamaño de tu galleta: ")
forma=prompt("Dame la forma de tu galleta: ")
sabor=prompt("Dame el sabor de tu galleta: ")

var escogeGalleta = new galleta(tamaño , forma , sabor);
//console.log(escogeGalleta);


//-------------------------------------------
var fruta = {
   nombre: "manzana"
}
var frutaN2 = {
    nombre: "manzana"
}
var resultado = (fruta == frutaN2);
console.log(resultado);

var frutaN3 = fruta;
var resultadoN2 = (frutaN3 == fruta);
console.log(resultadoN2);