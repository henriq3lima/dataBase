const express = require("express"),
  router = express.Router(),
  request = require("request"),
  cheerio = require("cheerio");

router.get("/", (_, res) => {
  //  scrapStackPt();
});

// global.scrapStackPt = function scrapStackPt() {
//   var url = "https://pt.stackoverflow.com/tags";
//   request(url, function (erro, response, html) {
//     if (!erro) {
//       async function loadData() {
//         var $ = await cheerio.load(html);
//         var tag = [];
//         var contagem = [];
//         var numero = [];
//         var resultado = [];

//         $(".s-card").each(function (i) {
//           tag[i] = $(this).find(".grid--cell > a.post-tag").text();
//           contagem[i] = $(this)
//             .find(".mt-auto > div:nth-child(1)")
//             .text()
//             .replace(" perguntas", "");
//           numero = i;
//         });
//         for (let i = 0; i <= numero; i++) {
//           resultado[i] = {
//             tag: tag[i],
//             contagem: contagem[i],
//             indice: i,
//             data: Date(),
//           };
//         }
//         return await resultado;
//       }

//       loadData().then((resultado) => {
//         console.log(resultado);
//       });
//     }
//   });
// };

module.exports = router;
