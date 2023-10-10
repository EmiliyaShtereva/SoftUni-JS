const express = require('express');
const {isNameValid, isPasswordValid} = require('./utils/validator');
const {isPasswordValidLength} = require('./middlewares/midleware');
const isStrongPassword = require('validator/lib/isStrongPassword');
const isEmail = require('validator/lib/isEmail');
const {body, validationResult} = require('express-validator');

const app = express();
app.use(express.urlencoded({extended: false}));

const PORT = 5050;

app.get('/', (req,res) => {
    res.send(`<form method="POST">
    <label for="name">Name</label>
    <input type="name" name="name" id="name" />

    <label for="email">Email</label>
    <input type="email" name="email" id="email" /> 

    <label for="password">Password</label>
    <input type="password" name="password" id="password" /> 

    <input type="submit" name="value" />
</form>`)
});

const bodyValidatePassword = body('password')
    .isLength({min: 4, max: 15})
    .withMessage('invalid password from express validator');

const bodyValidateEmail = body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('invalid password from express validator');

app.post('/', bodyValidatePassword, bodyValidateEmail, (req, res) => {
    const {name, email, password} = req.body;

    const errors = validationResult(req);
    console.log(errors);

    if (!isNameValid(name)) {
        return res.status(400).send('Invalid name from custom validator!');
    } 

    // if (!isPasswordValid(password)) {
    //     return res.status(400).send('Invalid password from custom validator!');
    // } 

    // if (!isEmail(email)) {
    //     return res.status(404).send('email s not valid!');
    // } 

    // if (!isStrongPassword(password)) {
    //     return res.status(404).send('weak password!');
    // } 

    if (!errors.isEmpty) {
        return res.status(404).send(`Error msg: ${errors.array()[0].msg}`);
    } 
    // console.log(name, password);

    res.send('ok');
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));