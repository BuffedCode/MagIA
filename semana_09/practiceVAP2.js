//VISION ARTIFICIAL PARTE 02 [Caso Practico] 
//Sesion modulo_04 semana_09 28/04/2021




/*Crear un programa utilizando los servicios cognitivos de Microsoft Azure, logrando analizar
fotos en distintos horarios y nos diga en que momento del dia hay menor numero de gente.*/



const axios = require("axios");
//const prompt = require("prompt-sync")();
var photos = [];
    photos [0] = "https://imagenes.milenio.com/10zznD-XQNjlZA_HzoB8aXyRRgs=/936x566/https://www.milenio.com/uploads/media/2021/03/26/metro-cdmx-cerrara-estaciones-linea.jpeg";
    photos [1] = "https://centrourbano.com/revista/wp-content/uploads/Metro_Medidas-anti-covid-735x400.jpg";
    photos [2] = "https://i.pinimg.com/originals/c4/88/23/c48823ec2c8f5594f72f8b2b157029fc.jpg";
    photos [3] = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Insurgentes_Sur_metro_station.jpg/1200px-Insurgentes_Sur_metro_station.jpg";
    photos [4] = "https://fastly.4sqi.net/img/general/600x600/15982566_DFtpG9ChwzeLhPEbrW8tVUIwxJLmt7UEi3bITdTqMSA.jpg";
    photos [5] = "https://i.pinimg.com/originals/0e/af/31/0eaf316649985512be0f28089098726b.jpg";
//var photos = prompt("Ingrese su imagen a analizar: ");
var direction = "https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Categories,Description,Color&details=Landmarks&language=en";


function petition(counter, callback){
    var infoAnswer;
    var data = {url: photos[counter]}

    axios.post(direction, data,{
        headers: {
            "Ocp-Apim-Subscription-Key":"9f8839e9bd4e446c8d1bfad49bd6db72", 
            "Content-type":"application/json"
        }
    })
    .then(answer => {
        infoAnswer = answer.data;
        //console.log(infoAnswer);
        callback(infoAnswer, counter + 1);
    })
    .catch(error => {console.log("" + error)})
}

function printData(dataAnswer, numPhoto){
    var j = 0;
    do{
        if (dataAnswer[j] == "gente"){
            console.log("Hay personas en la estacion" + " en la foto n: " + numPhoto);
            break;
        }
        else if(dataAnswer[j] !== "gente" && (j == dataAnswer.length)){
            console.log("No hay personas en la estacion " + " en la foto n: " + numPhoto);
            break;
        }
        j++;
    }while(j < dataAnswer.length)

    console.log(dataAnswer);
}

for(var i = 0; i < 1; i++){
    petition(i, printData);
}

petition(printData);