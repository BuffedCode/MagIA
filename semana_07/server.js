const http = require ("http");

const host = "localhost";
const port = 8080;

const serverMessage = function (request, answer){
    answer.seHeader("Content-Type","application/json");
    answer.writeHead(200);
    answer.end({message : "Hello to every participant"});
}