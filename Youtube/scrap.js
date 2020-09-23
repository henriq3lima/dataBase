//scrap you tube usando api deles
const express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();

router.get('/', (_, res) => {

    console.log("ok");
    url = 'https://viagemeturismo.abril.com.br/materias/os-100-lugares-mais-lindos-do-mundo/';
    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            // Objeto que irá armazenar a tabela
            var resultado = [];
            $('.slides > li > strong').each(function (i) {
                // Obtendo as propriedades da tabela. 
                // O método .trim() garante que irá remover espaço em branco
                var titulo = $(this).text().trim();
                // Inserindo os dados obtidos no nosso objeto
                resultado.push({
                    titulo: titulo
                });
            });
            console.log(resultado);
            async function f(res) {
                await res;
            };
            f(resultado).then(res.send(resultado));

        }

    });

});
module.exports = router;

