const router = require('express').Router();
const cryptoService = require('../survices/cryptoService.js');

router.get('/', async (req, res) => {
    const coins = await cryptoService.getAll();
    res.render('home', {coins});
});

router.get('/catalog', async (req, res) => {
    const coins = await cryptoService.getAll();
    res.render('catalog', {coins});
});

router.get('/search', async (req, res) => {
    const coins = await cryptoService.getAll();
    res.render('search', {coins});
});

router.post('/search', async (req, res) => {
    const {name, paymentMethod} = req.body;
    let coins = await cryptoService.getAll();
    if (name) {
        coins = coins.filter((coin) => 
        coin.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (paymentMethod) {
        coins = coins.filter((coin) => 
        coin.paymentMethod.toLowerCase().includes(paymentMethod.toLowerCase())
        );
    }
    res.render('search', {coins});
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;