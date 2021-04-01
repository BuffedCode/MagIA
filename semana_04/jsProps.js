//UTILERIAS EN JAVA SCRIPT
//Sesion modulo_02 semana_04 marzo_24 2021



//Math.random 
//Da un valor aleatorio entre 0 y 1 
console.log(Math.round(Math.random()*10)); 


//Exportando una funcion 
exports.randomNum = () =>{
    return result = Math.round(Math.random()*10)
}


//Metodos de cadenas de texto

var textString = "KONG es mejor que Godzilla"; 
console.log("Este es el texto original: \n" + textString);

// length: Cuenta los caracteres de la cadena de texto (Los espacios tambien cuentan como caracteres)
console.log(textString.length);

// indexOf: Cuenta los caracteres hasta que se llegue a la palabra deseada
console.log(textString.indexOf("mejor"));  

// replace: Reemplaza un valor por otro en una cadena
console.log(textString.replace("Godzilla","MechaGodzilla"));  //(Valor a reemplazar, nuevo valor)

// slice: Extrae una parte de una cadena y devuelve la parte extraida en una nueva cadena
var kong = textString.slice(0,13);  //(Inicio,Fin de la parte extraible)
console.log(kong);

//toUpperCase: Convertir todas las letras a mayusculas
console.log(textString.toUpperCase());

//tolowerCase: Convertit las letras a minusculas
console.log(textString.toLowerCase());

//concat: Concatenar dos cadenas de texto
var textStringN2 = " ☺☻♥♦♣♠♪♫";
console.log(textString.concat(textStringN2))