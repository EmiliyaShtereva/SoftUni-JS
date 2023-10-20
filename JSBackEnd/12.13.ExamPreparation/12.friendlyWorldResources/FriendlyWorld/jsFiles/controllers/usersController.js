const router = require('express').Router();
const userService = require('../survices/userService.js');

router.get('/login', (req, res) => {
    res.render('guest/login');
});

router.get('/register', (req, res) => {
    res.render('guest/register');
});

router.post('/register', async (req, res) => {
    const {email, password, repeatPassword} = req.body;
    const user = await userService.register({email, password, repeatPassword});
    res.cookie('token', user, {httpOnly: true});
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.redirect('/');
});

module.exports = router;