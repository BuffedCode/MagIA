//SERVICIOS CON NODE JS PARTE_01
//Sesion modulo_03 semana_07 14/04/2021



const axios = require("axios");

var information;

axios.get("https://api.openweathermap.org/data/2.5/weather?q=Cota&lang=en&appid=dcf83fa17319d26e2314122478ddf9c2")
.then(answer => {
    information = answer;
    console.log(information.data);
})
.catch(error => {
    console.log(error);
})