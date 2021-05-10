//SERVICIOS CON NODE JS PARTE_01
//SERVICIOS CON NODE JS PARTE_02
//Sesion modulo_03 semana_07 14/04/2021-15/04/2021




const http = require ("http");
const host = "localhost";
const port = 8080;


//Web server 
const messageServer = function (request, answer){
    answer.setHeader("Content-Type","application/json");

    switch(request.url){
        case "/messageChristmas":
            answer.writeHead(200);
            answer.end(JSON.stringify({message: "Happy Christmas"}));
            break
        case "/greetings":
            answer.writeHead(200);
            answer.end(JSON.stringify({message: "'Greetings'"}));
            break
        default:
            answer.writeHead(400)
            answer.end(JSON.stringify({message: "Error"}))
    }

    answer.writeHead(200);
    answer.end(JSON.stringify({message : "Hello to all participants"}));
}

//Web server creation
const server = http.createServer(messageServer);

server.listen(port, host, (messageServer) => {
    console.log("Server is up and running");
    console.log("on http://" + host + ": " + port);
});