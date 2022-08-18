const express = require("express");
const app = express();

// Pages
app.get("", (req, res) => {

    console.log("Req data by query ", req.query.name == null ? "Denny" : req.query.name);
    res.send(`
        <h1>Hello ${req.query.name == null ? "Denny" : req.query.name} This is Home Page</h1>
        <a href="/about">Go to About Page</a>
    `);
});

app.get("/about", (req, res) => {
    res.send(`
            <h1>This is About Page</h1>
            <input type="text" placeholder="Enter your Name" value="${req.query.name}">
            <button>Click Here</button>
            <a href="/contact">Go to Contact Page</a>
        `);
});

app.get("/contact", (req, res) => {
    res.send(`
            <h1>This is Contact Page</h1>
            <a href="/">Go to Home Page</a>
        `);
});

// Server
app.listen(5000);
