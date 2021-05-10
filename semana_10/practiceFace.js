//RECONOCIMIENTO FACIAL PARTE 01 [Caso practico]
//Sesion modulo_04 semana_10 05/05/2021
//Practice case Face



/*Utilizar los servicios de Microsoft Azure para crear un programa que nos permita 
acceder a un edificio al mostrar los datos de nuestra identificacion, si los datos 
son correctos nos mostrara un mensaje de que podemos pasar, en caso contrario no
nos dejara acceder al edificio*/



const axios = require("axios");

var employeeData = [{ name: "Pepe", key: 1234, photo: '39f5eee9-625f-44ab-84c5-9920e169e9e8'}];
var directionDetect = "https://servicioface.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender&returnFaceLandmarks=false&faceIdTimeToLive=86400";
var directionVerify = "https://servicioface.cognitiveservices.azure.com/face/v1.0/verify?=";
var data = {url:"https://awarenessact.com/wp-content/uploads/2018/03/stephen-hawking-_-abc13-houston.jpg"};

function detect (callback){
    //POST Petition - Face services (Face detection)
    axios.post(directionDetect, data, {
        headers: {
            "Ocp-Apim-Subscription-Key":"326d364a0fbe4a39998455172d1a3b46",
            "Content-Type":"application/json"}
    })
    .then(answer => {
        callback(answer.data[0].faceId);
    })
    .catch(error => console.log("" + error));
}

function verify (credentialData){
    var dataVerify = {
        faceId1: employeeData[0].photo,
        faceId2: credentialData
    };
    //POST Petition - Face services (Face verification)
    axios.post(directionVerify, dataVerify, {
        headers: {
            "Ocp-Apim-Subscription-Key": "326d364a0fbe4a39998455172d1a3b46",
            "Content-Type": "application/json"
        }
    })
    .then(answer => {
        if(answer.data.isIdentical == true){
            console.log("Credenciales validas, tenga un buen dia")
        }
        else{
            console.log("Credenciales no validas, vuelva a intentarlo")
        }
    })
    .catch(error => console.log("" + error));
}
detect(verify);