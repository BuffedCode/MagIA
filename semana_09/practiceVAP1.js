//VISION ARTIFICIAL PARTE 01 [Caso Practico] 
//Sesion modulo_04 semana_09 27/04/2021



const axios = require("axios");

//Data
var data = {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg"};

//Request Addres 
var direction = "https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Categories,Description,Color&details=Celebrities&language=en";

//Request Post
axios.post(direction, data, 
    {headers:
        {"Ocp-Apim-Subscription-Key":"9f8839e9bd4e446c8d1bfad49bd6db72", 
        "Content-type":"application/json"}})
        .then(answer => console.log(answer.data.categories[0].detail.celebrities[0].faceRectangle.height))
        .catch(error => {console.log(error)});