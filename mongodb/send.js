const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.status(200).send('sem problemas aqui');
    console.log("ok")

});

module.exports = router;




/*
const { MongoClient } = require("mongodb");
// Replace the following with your Atlas connection string
const mongodbURL = "mongodb+srv://CARAMELOAMARELO:H6395tQp7zKufkLf@2020um.yy4g6.gcp.mongodb.net/DADOSAMOSTRAGEM?retryWrites=true&w=majority";
const client = new MongoClient(mongodbURL);
const dbName = "2020UM";
const colDoc = "people2";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "people" equivalente a tabela
        const col = db.collection("people");

        // Construct a document
        let personDocument = {
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // June 23, 1912
            "death": new Date(1954, 5, 7),  // June 7, 1954
            "contribs": ["Turing machine", "Turing test", "Turingery"],
            "views": 1250000
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

run().catch(console.dir);

*/
