//EJERCICIOS DE REPASO SEMANA_04
//Asesoria modulo_02 semana_04 marzo_27 2021



//Declarar una matriz
var matrizPeces = [
    ["Salmon", "Atun"], ["Cangrejo", "Pez globo"]
];

console.log(matrizPeces[1][0]);

//Descomposicion de objetos
var Vegetable = {
    nameVeg:"Brocoli",
    colorVeg:"Verde",
    amountVeg:10,
    priceVeg: 2000

}
var {nameVeg, colorVeg} = Vegetable;
console.log(nameVeg + " es de color " + colorVeg);
