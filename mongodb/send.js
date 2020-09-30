const express = require("express"),
  router = express.Router();

console.log("mongodb/send");
router.get("/", (_, res) => {
  res.status(200).send("Modulo de envio de scrap");
});

// global.sendMongo = function sendMongo(dados) {
//   const { MongoClient } = require("mongodb");
//   console.log("functionSendMong");

//   const mongodbURL =
//     "mongodb+srv://CARAMELOAMARELO:H6395tQp7zKufkLf@2020um.yy4g6.gcp.mongodb.net/DADOSAMOSTRAGEM?retryWrites=true&w=majority";
//   const client = new MongoClient(mongodbURL);
//   const dbName = "2020UM";
//   async function run() {
//     try {
//       await client.connect();
//       console.log("Connected correctly to server");
//       const db = client.db(dbName);
//       const col = db.collection("questionPtStack");
//       for (i = 0; i < dados.length; i++) {
//         const p = await col.insertOne(dados[i]);
//         const myDoc = await col.findOne();
//       }
//     } catch (err) {
//       console.log(err.stack);
//     } finally {
//       await client.close();
//     }
//   }

//   run().catch(console.dir);
// };

module.exports = router;
