const router = require('express').Router();
const animalService = require('../survices/animalService.js');

router.get('/', async (req, res) => {
    const animals = await animalService.getAll();
    let lastAnimals = animals.slice(animals.length - 3);
    if (animals.length < 3) {
        lastAnimals = animals;
    }
    res.render('home', {lastAnimals});
});

router.get('/dashboard', async (req, res) => {
    const animals = await animalService.getAll();
    res.render('dashboard', {animals});
});

router.get('/search', async (req, res) => {
    const animals = await animalService.getAll();
    res.render('search', {animals});
});

router.post('/search', async (req, res) => {
    const {location} = req.body;
    let animals = await animalService.getAll();
    animals = animals.filter((animal) => 
        animal.location.toLowerCase().includes(location.toLowerCase())
      );
      console.log(animals)
    res.render('search', {animals});
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;