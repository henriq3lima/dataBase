//scrap you tube usando api deles
const express = require("express"),
  router = express.Router(),
  request = require("request"),
  cheerio = require("cheerio");

router.get("/", (_, res) => {
  console.log("ok");
  url = "https://pt.stackoverflow.com/";
  request(url, function (error, _, html) {
    if (!error) {
      var $ = cheerio.load(html);
      // Objeto que irá armazenar a tabela
      var resultado1 = [];
      var resultado2 = [];
      $("#recent-tags-list > a").each(function (i) {
        var assunto = $(this).text();
        resultado1.push({
          assunto: assunto,
        });
      });

      $("#recent-tags-list > span").each(function (i) {
        var cont = $(this).text();
        resultado2.push({
          cont: cont,
        });
      });

      async function f(entrada1, entrada2) {
        var saida1 = await entrada1;
        var saida2 = await entrada2;
      }
      f(resultado1, resultado2).then(console.log(resultado1));
    }
  });
});
module.exports = router;
