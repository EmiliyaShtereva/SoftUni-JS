const router = require('express').Router();
const animalService = require('../survices/animalService.js');

router.get('/', async (req, res) => {
    const animals = await animalService.getAll();
    const lastAnimals = animals.slice(animals.length - 3);
    if (animals.length < 3) {
        const lastAnimals = animals;
        res.render('home', {lastAnimals});
        return;
    }
    res.render('home', {lastAnimals});
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