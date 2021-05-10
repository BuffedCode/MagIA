//RECONOCIMIENTO FACIAL PARTE 01 [Caso practico]
//Sesion modulo_04 semana_10 05/05/2021
//FACE VERIFY 



const axios = require("axios");

var data = {
    faceId1 : '39f5eee9-625f-44ab-84c5-9920e169e9e8',
    faceId2 : 'f5cab479-443c-43f7-b845-a58e8f8b5f01'
}

var direction = "https://servicioface.cognitiveservices.azure.com/face/v1.0/verify?=";

//Post Petition for face verification
axios.post(direction, data,{
    headers : {
        "Ocp-Apim-Subscription-Key" :"326d364a0fbe4a39998455172d1a3b46",
        "Content-Type" : "application/json"
    }
})
.then(answer => console.log(answer.data))
.catch(error => console.log("" + error))