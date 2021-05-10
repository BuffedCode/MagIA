//SERVICIOS REST PARTE_02 
//Sesion modulo_03 semana_07 13/04/2021

const https = require("https");

https.get("https://api.openweathermap.org/data/2.5/weather?q=Cota&lang=en&appid=dcf83fa17319d26e2314122478ddf9c2",(answer)=>{
    let information ="";

    answer.on("data", (chunk)=>{
        information += chunk;
    });

    answer.on("end", () => {
        var JSONdates = JSON.parse(information)["weather"];
        console.log(JSONdates[0]["description"]);
    });


}).on("error", (error) =>{
    console.log( "Error: ")
});