const router = require('express').Router();
const userService = require('../survices/userService.js');
const { extractErrorMsgs } = require('../errorHandler.js');

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const token = await userService.login(email, password);
        res.cookie('token', token, {httpOnly: true});
        res.redirect('/');
    } catch(error) {
        const errorMessages = extractErrorMsgs(error).join('\n');
        res.status(404).render('user/login', {errorMessages});
    }
});

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    const {email, username, password, repeatPassword} = req.body;

    try {
        const token = await userService.register({email, username, password, repeatPassword});
        res.cookie('token', token, {httpOnly: true});
        res.redirect('/');
    } catch(error) {
        const errorMessages = extractErrorMsgs(error).join('\n');
        res.status(404).render('user/register', {errorMessages});
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});


module.exports = router;