//EJERCICIO DE REPASO SEMANA 1
//Asesoria modulo_02 semana_01 marzo_06 2021



/*Enunciado
Para calcular el promedio de prácticas de un curso 
se tomará la calificación de las 4 prácticas que se 
hicieron, de estas 4 se va a eliminar la práctica con 
menor calificación y se obtendrá el promedio de las 3 
prácticas restantes.*/


const practice_01 = 100;
const practice_02 = 90;
const practice_03 = 80;
const practice_04 = 70;
var lowerGrade = practice_01;
var result = 0;



/*Esta es la forma como mostraron en la sesion, pero esta mal, ya que 
si el valor 1 es mayor a los demas este dara un promedio falso, lo 
mismo pasara con el valor 2,3 y 4*/
if( practice_02 < practice_01){
    lowerGrade =  practice_02;
}
else if(practice_03 < lowerGrade){
    lowerGrade = practice_03;
}
else if(practice_04 < lowerGrade){
    lowerGrade = practice_04;
}
result =(practice_01 +  practice_02 + practice_03 + practice_04 - lowerGrade)/3;
console.log("//-------------------------------------------------------------------//\n");
console.log("Esto esta mal: " + lowerGrade);
console.log("Esto esta mal: " + result);
console.log("//-------------------------------------------------------------------//\n");


//Mejor asi
if( practice_02 < lowerGrade){  
    lowerGrade =  practice_02
} 
if(practice_03 < lowerGrade){  
    lowerGrade = practice_03
} 
if(practice_04 < lowerGrade){  
    lowerGrade = practice_04
} 
result =(practice_01 +  practice_02 + practice_03 + practice_04 - lowerGrade)/3;
console.log("Esta es la calificacion menor y se descarta: " + lowerGrade)
console.log("Este es el promedio de las practicas: " + result)
console.log("//-------------------------------------------------------------------//\n")


//O tambien se puede asi
if( practice_02<lowerGrade&&practice_03&&practice_04){
     practice_02=lowerGrade;
}
else if(practice_03<lowerGrade&&practice_04){
    practice_03=lowerGrade;
}
else if(practice_04<lowerGrade){
    practice_04=lowerGrade;
}
result =(practice_01 +  practice_02 + practice_03 + practice_04 - lowerGrade)/3;
console.log ("Tambien se puede asi: "+lowerGrade)
console.log ("Tambien se puede asi: "+result)
console.log("//-------------------------------------------------------------------//")
