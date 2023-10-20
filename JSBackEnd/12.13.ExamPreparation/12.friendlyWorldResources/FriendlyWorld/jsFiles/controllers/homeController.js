const router = require('express').Router();
const animalService = require('../survices/animalService.js');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', async (req, res) => {
    const animals = await animalService.getAll();
    res.render('dashboard', {animals});
});

router.get('/search', (req, res) => {
    res.render('search');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;