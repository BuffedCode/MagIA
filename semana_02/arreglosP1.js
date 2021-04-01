//ARREGLOS PARTE_01 
//Sesion modulo_02 semana_02 marzo_11 2021



//var nombreArreglo =[1,2,3,4,5,6,7];
//Arreglo numerico
var arreNum = [1,2,3,4,5];
console.log (arreNum);
//Arreglo mixto
var arreMix = [98,"papas",8,"drake", true, false, ,];
console.log(arreMix);
//Arreglo string
var arreName = ["Pepe","Pepa","Papo","Popo"];
console.log (arreName [2]);
//Cambiando un dato del arreglo
arreName [2] ="Pedro";
console.log(arreName [2]);
//Eliminando un dato del arreglo
delete arreName[2];
console.log(arreName[2]);
//Contando cuantos datos ahi en un arreglo
console.log("La cantidad de elementos en el arreglo es: " + arreName.length);
//Agregar dato al final del arreglo
arreName.push("push");
console.log(arreName);
//Eliminar dato final del arreglo
arreName.pop()
console.log(arreName)
//Agregar elementos a un arrelgo
arreName.splice(0,0,"splice");
console.log(arreName);
//Eliminar o sustituir elementos a un arreglo
arreName.splice(1,4,);
console.log(arreName);
//Concatenear arreglos en un nuevo arreglo
var animal_1 = ["dog","cat","cow"];
var animal_2 = ["horse","pig"];
console.log(animal_1.concat(animal_2));


//Ejercicio 
//Realizar un programa que lea por teclado 5 notas y muestre el promedio de estas

const prompt=require('prompt-sync')();
var notes =[];
notes[0] = prompt("Porfavor dame tu primera calificacion: ");
notes[1] = prompt("Porfavor dame tu segunda calificacion: ");
notes[2] = prompt("Porfavor dame tu tercera calificacion: ");
notes[3] = prompt("Porfavor dame tu cuarta calificacion: ");
notes[4] = prompt("Porfavor dame tu quinta calificacion: ");
console.log(notes);
var resultado =(parseInt(notes[0])+parseInt(notes[1])+parseInt(notes[2])+parseInt(notes[3])+parseInt(notes[4]))
console.log("Tu promedio es: " + resultado/5);
