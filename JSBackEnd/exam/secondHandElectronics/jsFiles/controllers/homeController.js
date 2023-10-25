const router = require('express').Router();
const electronicService = require('../survices/electronicService.js');

router.get('/', async (req, res) => {
    res.render('home');
});

router.get('/catalog', async (req, res) => {
    const electronics = await electronicService.getAll();
    res.render('catalog', {electronics});
});

router.get('/search', async (req, res) => {
    const electronics = await electronicService.getAll();
    res.render('search', {electronics});
});

router.post('/search', async (req, res) => {
    const {name, type} = req.body;
    let electronics = await electronicService.getAll();
    if (name) {
        electronics = electronics.filter((electronic) => 
        electronic.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (type) {
        electronics = electronics.filter((electronic) => 
        electronic.type.toLowerCase().includes(type.toLowerCase())
        );
    }
    res.render('search', {electronics});
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;