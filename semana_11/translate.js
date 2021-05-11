//INTELIGENCIA COGNITIVA PARTE 1 [Caso practico]
//Sesion modulo_04 semana_11 11/05/2021
//Practice Translate-Translate




const axios = require("axios");
const prompt = require("prompt-sync")();
var direction = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=es&to=en&to=zh-hans";
var message = prompt("Introdusca su mensaje a traducir: ");
var data = [{"Text": message}];

axios.post(direction, data, {
    headers: {
        "Ocp-Apim-Subscription-Key" : "58f9f4075c9c46bca61a78cfc71a45b6",
        "Ocp-Apim-Subscription-Region" : "southcentralus",
        "Content-Type" : "application/json"
    }
})
.then(answer => console.log(answer.data[0].translations[0]))
.catch(error => console.log("" + error))

