const express = require("express");

const sendRouter = require("./mongodb/send.js");
const scrapRouter = require("./scrap/scrap.js");

const app = express();

app.use("/send", sendRouter);
app.use("/scrap", scrapRouter);

app.listen(process.env.PORT || 8000, function () {
  console.log("A API está funcionando!");
});

app.get("/", (_, res) => {
  res.status(200).send("API-Banco NoSQL SQL");
});
