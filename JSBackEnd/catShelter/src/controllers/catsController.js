const router = require('express').Router();
const catService = require('../services/catService.js');

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.post('/add-breed', async (req, res) => {
    const {breed} = req.body;
    await catService.createBreed({breed});
    res.redirect('/');
});

router.get('/add-cat', async (req, res) => {
    const breeds = await catService.getAllBreeds();
    res.render('addCat', {breeds});
});

router.post('/add-cat', async (req, res) => {
    const {name, description, image, breed} = req.body;
    await catService.createCat({name, description, imageUrl: image, breed});
    res.redirect('/');
});

module.exports = router;