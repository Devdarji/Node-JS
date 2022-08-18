const express = require('express');
const checkAge = require("./middleware")
const app = express();

// Group Route level Middleware
const route = express.Router();

// app.use(checkAge); ====> Application level middleware

route.use(checkAge);

// Route Level Middleware
app.get('', checkAge,(req, res) => {
    res.send(`
        <h1>This is Home Page</h1>
    `)
});


app.get('/profile', (req, res) => {
    res.send(`
        <h1>This is Profile Page</h1>
    `)
});


app.get('/contact', (req, res) => {
    res.send(`
        <h1>This is Contact Page</h1>
    `)
});


route.get('/about', (req, res) => {
    res.send(`
        <h1>This is About Page</h1>
    `)
});

route.get('/user', (req, res) => {
    res.send(`
        <h1>This is User Page</h1>
    `)
});

app.use('/', route)

// Server
app.listen(5000);