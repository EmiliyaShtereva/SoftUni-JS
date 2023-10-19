const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('guest/login');
});

router.get('/register', (req, res) => {
    res.render('guest/register');
});

router.get('/logout', (req, res) => {
    res.redirect('/');
});

module.exports = router;