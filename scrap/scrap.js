const express = require("express"),
  router = express.Router(),
  request = require("request"),
  cheerio = require("cheerio");

router.get("/", (_, res) => {
  scrapStackPt();
});

global.scrapStackPt = function scrapStackPt() {
  var url = "https://pt.stackoverflow.com/tags";
  request(url, function (erro, response, html) {
    if (!erro) {
      async function loadData() {
        var $ = await cheerio.load(html);
        var tag = [];
        var contagem = [];
        var numero = [];
        var resultado = [];

        $(".s-card").each(function (i) {
          tag[i] = $(this).find(".grid--cell > a.post-tag").text();
          contagem[i] = $(this)
            .find(".mt-auto > div:nth-child(1)")
            .text()
            .replace(" perguntas", "");
          numero = i;
        });
        for (let i = 0; i <= numero; i++) {
          resultado[i] = {
            tag: tag[i],
            contagem: contagem[i],
            indice: i,
            data: Date(),
          };
        }
        return await resultado;
      }

      loadData().then((resultado) => {
        sendMongo(resultado);
      });
    }
  });
};

/* 
console.log("ok");
url =
  "https://viagemeturismo.abril.com.br/materias/os-100-lugares-mais-lindos-do-mundo/";
request(url, function (error, response, html) {
  if (!error) {
    var $ = cheerio.load(html);
    var resultado = [];

    $(".slides > li > strong").each(function (i) {
      var titulo = $(this).text().trim();

      resultado.push({
        titulo: titulo,
      });
    });

    async function f(res) {
      await res;
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    f(resultado).then(res.send(resultado));
  }
});
*/
module.exports = router;
