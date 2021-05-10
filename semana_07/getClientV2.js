//SERVICIOS CON NODE JS PARTE_02
//Sesion modulo_03 semana_07 15/04/2021



const axios = require("axios"); 
var information;
axios.get("http://localhost:8080")
.then(answer => {
    information = answer.data;
    console.log(information);
})
.catch(error => {
    console.log(error);
});


var information = {num1: 10, num2: 100};

axios.post("http://localhost:8080", information)
.then(answer =>{
    console.log(answer.data);
})