const express = require('express');
const dbConnect = require('../mongodb');
const mongodb = require('mongodb');

const app = express();

// for json
app.use(express.json());


// GET Api
app.get("/", async (req, res) => {
    const db = await dbConnect();
    const data = await db.find().toArray();
    res.send(data);
    console.log(data);
    // console.log("GET Api...!");
})

// POST Api
app.post("/", async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result);
    console.log(result);
    // console.log("POST Api..!");
})

// PUT Api
app.put("/:name", async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    res.send(result);
    console.log(result);
    // console.log("PUT Api..!");
})


app.listen(5000);