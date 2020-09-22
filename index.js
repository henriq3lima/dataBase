const { SIGTERM } = require('constants');
const express = require('express');
const app = express();
const http = require('http');

//const livrosRouter = require('./livros/livros.js');
//const gravarRouter = require('./BD/gravar.js');
//const manipularRouter = require('./BD/manipular.js');
//const manipularRouter = require('./BD/ler.js');
/*
livros router index livros
BD/gravar router input arq.txt in BD
BD/manipular return data select BD
BD/ler print BD in page
*/

//global.caminhoDados = 'dados/';
//app.use('/livros',livrosRouter);
//app.use('/gravar/BD',gravarRouter);
//app.use('/manipular/BD',manipularRouter);
const dados = [
    {
        info1: 1,
        info2: 2
    }, {
        info1: 1,
        info2: 2
    }, {
        info1: 1,
        info2: 2
    }, {
        info1: 1,
        info2: 2
    }
];
app.listen(3000, function () {
    console.log('A API está funcionando!');
});
http.createServer(function (request, response) {
    //response.setHeader("Access-Control-Allow-Origin", "*");
    response.end(`
        {
            "info1": "1",
            "info2": "2"
        }`);
}).listen(process.env.PORT || 8000)

// Imprime no console a URL de acesso ao servidor
console.log('Servidor executando em http://127.0.0.1:8000/');
