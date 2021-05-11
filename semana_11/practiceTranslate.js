//INTELIGENCIA COGNITIVA PARTE 1 [Caso practico]
//Sesion modulo_04 semana_11 11/05/2021
//Practice Translate-Practice case




/*Crear un programa para que Spenser pueda ayudar a los pasajeros dando
instrucciones sobre donde deben de ir dependiendo de la pregunta inicial,
estas instrucciones deben de estar en el idioma que el pasajero uso para
su pregunta inicial.*/



const axios = require("axios");
const prompt = require("prompt-sync")();
const indications = [
    "Sube",
    "Baja",
    "Gira",
    "Salta"
];
//var message = prompt("Que necesitas ?");
var data = [{
    "Text": "Parque" //message
}];
var directionTranslateDetect = "https://api.cognitive.microsofttranslator.com/detect?api-version=3.0";
var directionTranslate = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en";





/*if (data ){

}*/
/*function detect (callback){
    axios.post(directionTranslateDetect, data, {
        headers: {
            "Ocp-Apim-Subscription-Key" : "58f9f4075c9c46bca61a78cfc71a45b6",
            "Ocp-Apim-Subscription-Region" : "southcentralus",
            "Content-Type" : "application/json"
        }
    })
    .then(answer =>{
        callback(answer.data[0].language);
    })
    .catch(error => console.log("" + error))
}*/

/*switch(indication){
    case "park":
        console.log(indications[0])
        break;
    case "restroom":
        console.log(indications[1])
        break;
    case "airport":
        console.log(indications[2])
        break;
    case "parking":
        console.log(indications[3])
        break;
}*/


/*function translate(){
    axios.post(directionTranslate, data, {
        headers: {
            "Ocp-Apim-Subscription-Key" : "58f9f4075c9c46bca61a78cfc71a45b6",
            "Ocp-Apim-Subscription-Region" : "southcentralus",
            "Content-Type" : "application/json"
        }
    })
    .then(answer => console.log(answer.data[0].translations))
    .catch(error => console.log("" + error))
}
translate();*/
