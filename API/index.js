const express = require('express');
const dbConnect = require('../mongodb');

const app = express();

// Get Api
app.get("/", async (req, res) => {
    const db = await dbConnect();
    const data = await db.find().toArray();
    res.send(data)
    console.log(data);  
    // console.log("GET Api...!");
})

app.listen(5000);