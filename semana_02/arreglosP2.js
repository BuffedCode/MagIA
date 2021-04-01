//ARREGLOS PARTE_02 
//Sesion modulo_02 semana_02 marzo_13 2021



//Sort-Ordenar los elementos de un arreglo y devolver el arreglo ordenado
// Usar sort para texto, con numero se generan conflictos
var fruits_01 =["Mango","Fresa","Kiwi","Durazno"];
var fruits_02 =["Mango","Fresa","Manzana","Durazno"];
var arreNum =[100,900,756,10,1452];

fruits_01.sort();
fruits_02.sort();
arreNum.sort();

console.log(fruits_01);
console.log(fruits_02);
console.log(arreNum);


//Estructuras de control interaticas (Ciclos)

//For
//for(inicializacion;expresion;incremento){instrucciones}
for(var i=0; i<=5; i++){
    console.log("Ciclo: " + i);
}

for(var i=0; i<arreNum.length; i++){
    console.log("El valor del arreglo en la pocision " + i + " es: " + arreNum[i]);
}