exports.isPasswordValidLength = (req, res, next) => {
    if (!req.body.password || req.body.password.length < 5) {
        return res.status(400).send('Invalid password from Midleware!');
    };
    
    next();
}