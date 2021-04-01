//CONDICIONES_P3
//Sesion modulo_02 semana_02 marzo_10 2021 



/*Ejercicion_01 
Cada vez que una persona ingrese una hora del dia 
se mostrara un mensaje que diga el deporte que se esta 
realizando en la cancha.*/


const prompt=require('prompt-sync')();
var hour=prompt("Dame la hora: ");
console.log(hour);

if((hour >= 8) && (hour <= 11)){
    console.log("La cancha esta siendo usada por el equipo de Futbol");
}
else if((hour >= 12) && (hour <= 15)){
    console.log("La cancha esta siendo usada por el equipo de Futbol Americano");
}
else if((hour >= 16) && (hour <= 19)){
    console.log("La cancha esta siendo usada por el equipo de Atletismo");
}
else if ((hour<=6)||(hour>=22)){
    console.log("La cancha esta cerrada")
}
else{
    console.log("La cancha no esta reservada")
}


/*Ejercicio_02
Cada vezque una persone ingre un deporte, te dira
el horario que le corresponde para la cancha */

var sport =prompt("A que deporte perteneces: ");
switch(sport){
    case "futbol":
        console.log("Horario: 8 - 11 ")
        break
    case "futbolamericano":
        console.log("Horario: 12 - 15 ")
        break
    case "atletismo":
        console.log("Horario: 16 - 19")
        break
    default:
        console.log("Deporte no reconocido porfavor escribelo todo en minuscula,sin espacios y revisa la ortografia☺☻")
}



var arreNum = [1,2,3,4,5];
console.log (arreNum);
var arreName = ["Pepe","Pepa","Papo","Popo"];
console.log (arreName [0]);
var arreMix = [98,"papas",8,"drake", true, false, ,];
console.log(arreMix);