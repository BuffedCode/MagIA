//ESTRUCTURAS DE CONTROL PARTE_02
//Sesion modulo_02 semana_02 marzo_09 2021



/* Ejemplo
Dado un numero separarlo en centenas, decenas y unidades
Intercambiar la pocision entre las centenas y las unidades
e imprimir el numero Final */


var num = 935;
if (num <= 999 && num >= 100) {
    var centenas = parseInt (num/100);
    var decenas =  parseInt ((num % 100)/10);
    var unidades = parseInt ((num % 100)-(decenas*10));
    //----------------------------------------------------------------------------//
    console.log("Tu numero es " + num + " una vez separado:");
    console.log("Centenas: " + centenas*100 );
    console.log("Decenas: " + decenas*10 );
    console.log("Unidades: " + unidades);
    console.log("Al intercambiar la pocision de las centenas y las unidades tu numero seria: " + unidades+decenas+centenas);
}
else {
    console.log("Numero no valido, porfavor ingresa un numero de tres digitos");
}


//Switch
var switch1 = "Pepe";
var edad = 18;

switch(switch1){
    case 2:
        console.log("El valor ingresado es 2");
        break;
    case 6: 
        console.log("El valor ingresado es 6");
        break;
    case "Pepe":
            console.log("Hola Pepe")
            if(edad == 18){
                console.log("Felicidades eres mayor de edad");
            }
            break
    default:
        console.log("El valor ingresado es distinto");
        break;
}
