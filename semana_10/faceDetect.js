//RECONOCIMIENTO FACIAL PARTE 01 [Caso practico]
//Sesion modulo_04 semana_10 05/05/2021
//FACE




const axios = require("axios");

var data = {url : "https://awarenessact.com/wp-content/uploads/2018/03/stephen-hawking-_-abc13-houston.jpg"};
//Url #1 = https://celebwiki.org/wp-content/uploads/2018/07/stephen-hawking_90551.jpeg
//Url #2 = https://awarenessact.com/wp-content/uploads/2018/03/stephen-hawking-_-abc13-houston.jpg
var direction = "https://servicioface.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender&returnFaceLandmarks=false&faceIdTimeToLive=86400";

//Post Petition
axios.post(direction, data,{
    headers:{
       "Ocp-Apim-Subscription-Key" : "326d364a0fbe4a39998455172d1a3b46",
       "Content-Type" : "application/json"
    }
})
.then(answer => console.log(answer.data))
.catch(error => console.log("" + error))