const { SIGTERM } = require('constants');
const express = require('express');
const http = require('http');

const sendRouter = require('./mongodb/send.js');
const ytscrapRouter = require('./Youtube/scrap.js');

const app = express();

app.listen(8000, function () {
    console.log('A API está funcionando!')
});
app.get('/', (_, res) => {
    res.status(200).send('API-Banco NoSQL SQL')
});


app.use('/send', sendRouter);
app.use('/ytscrap', ytscrapRouter);
