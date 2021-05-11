//INTELIGENCIA COGNITIVA PARTE 1 [Caso practico]
//Sesion modulo_04 semana_11 11/05/2021
//Practice Translate-Detect




const axios = require("axios");
var data = [{
    "Text": "Hola, me podrias detectar este mensaje"
}];
var direction = "https://api.cognitive.microsofttranslator.com/detect?api-version=3.0";

axios.post(direction, data, {
    headers: {
        "Ocp-Apim-Subscription-Key" : "58f9f4075c9c46bca61a78cfc71a45b6",
        "Ocp-Apim-Subscription-Region" : "southcentralus",
        "Content-Type" : "application/json"
    }
})
.then(answer => console.log("Tu idioma esta en: " + answer.data[0].language))
.catch(error => console.log("" + error))