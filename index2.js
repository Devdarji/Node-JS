const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

// Set Template Engine
app.set('view engine', 'ejs');

// Pages
app.get("", (req, res) => {
    res.sendFile(`${publicPath}/Home.html`);
});

app.get("/about", (req, res) => {
    res.sendFile(`${publicPath}/About.html`);
});

app.get("/contact", (req, res) => {
    res.sendFile(`${publicPath}/Contact.html`);
});

app.get("/profile", (req, res) => {
    const user = {
        "name" : "Dev Darji",
        "email": "darjidevendra3@gmail.com",
        "gender": "Male"
    }
    res.render('profile', {user})
})

app.get("/login", (req, res) => {
    res.render('login')
})

app.get("*", (req, res) => {
    res.sendFile(`${publicPath}/404Page.html`);
});

// Server
app.listen(5000);
