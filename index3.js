const express = require('express');
const app = express();

const checkAge = (req, res, next) => {
    if (!req.query.age) {
        res.send(`
            <h1>Please Enter Your Age.</h1>
        `)
    } else if (req.query.age < 18) {
        res.send(`
            <h1>Your are Under 18, You can't access this Website.</h1>
        `)
    } else (
        next()
    )
}

// This is application level Middleware
app.use(checkAge);

app.get('', (req, res) => {
    res.send(`
        <h1>This is Home Page</h1>
    `)
});


app.get('/profile', (req, res) => {
    res.send(`
        <h1>This is Profile Page</h1>
    `)
});

app.listen(5000);