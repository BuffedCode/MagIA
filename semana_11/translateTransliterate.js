//INTELIGENCIA COGNITIVA PARTE 1 [Caso practico]
//Sesion modulo_04 semana_11 11/05/2021
//Practice Translate-Transliterate




const axios = require("axios");
var data = [{"Text": "我有一个红色的日历，它有一个狗的画"}];
var direction = "https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=zh-hans&fromScript=Hans&toScript=Latn";

axios.post(direction, data, {
    headers: {
        "Ocp-Apim-Subscription-Key" : "58f9f4075c9c46bca61a78cfc71a45b6",
        "Ocp-Apim-Subscription-Region" : "southcentralus",
        "Content-Type" : "application/json"
    }
})
.then(answer => console.log(answer.data))
.catch(error => console.log("" + error))