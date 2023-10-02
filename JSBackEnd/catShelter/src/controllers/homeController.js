const router = require('express').Router();
const catService = require('../services/catService.js');

router.get('/', async (req, res) => {
    const { search} = req.query;
    const cats = await catService.getAllCats(search);
    res.render('index', {cats});
});

router.get('/cats-edit/:catId', async (req, res) => {
    const {catId} = req.params;
    const cat = await catService.getSingleCat(catId);
    const breeds = await catService.getAllBreeds();
    res.render('editCat', {cat, breeds});
});

router.post('/cats-edit/:catId', async (req, res) => {
    const {catId} = req.params;
    const {name, description, image, breed} = req.body;
    await catService.editCat(catId, {name, description, imageUrl: image, breed});
    res.redirect('/');
});

router.get('/cats-find-new-home/:catId', async (req, res) => {
    const {catId} = req.params;
    const cat = await catService.getSingleCat(catId);
    res.render('catShelter', {cat});
});

router.post('/cats-find-new-home/:catId', async (req, res) => {
    const {catId} = req.params;
    await catService.deleteCat(catId);
    res.redirect('/');
});

module.exports = router;