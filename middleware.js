module.exports = checkAge = (req, res, next) => {
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