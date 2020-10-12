const express = require("express"),
  router = express.Router(),
  request = require("request"),
  cheerio = require("cheerio");

router.get("/", (_, res) => {
  var tagBr = "https://pt.stackoverflow.com/tags";
  var tagEn = "https://stackoverflow.com/tags";
  scrapStack(tagEn);
  scrapStack(tagBr);
  res.status(200).send("Realizando Scrap");
});

global.scrapStack = function scrapStack(urlTags) {
  var url = urlTags;
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
            .replace(/ .*/g, "");
          numero = i;
        });
        for (let i = 0; i <= numero; i++) {
          resultado[i] = {
            tag: tag[i],
            contagem: contagem[i],
            indice: i,
            data: Date(),
            url: urlTags,
          };
        }
        return await resultado;
      }

      loadData().then((resultado) => {
        console.log(resultado);
        sendMongo(resultado);
      });
    }
  });
};

module.exports = router;
