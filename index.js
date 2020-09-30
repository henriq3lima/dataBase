const express = require("express");
const CronJob = require("cron").CronJob;

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

let dateStart = new Date("2020-09-30T08:00:00.000Z");

const job = new CronJob(dateStart, function () {
  inicial();
});
job.start();

function inicial() {
  var tagBr = "https://pt.stackoverflow.com/tags";
  var tagEn = "https://stackoverflow.com/tags";

  const trabalho = new CronJob("0 0 0/1 1/1 * *", function () {
    const d = new Date();
    console.log("Every second:", d);
    scrapStack(tagEn);
    scrapStack(tagBr);
  });
  console.log("After job instantiation");
  trabalho.start();
}
