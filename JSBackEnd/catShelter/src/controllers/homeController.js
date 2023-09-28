const router = require('express').Router();
const catService = require('../services/catService.js');

router.get('/', async (req, res) => {
    const cats = await catService.getAllCats();
    res.render('index', {cats});
});

router.get('/cats-edit/:catId', async (req, res) => {
    const {catId} = req.params;
    const cat = await catService.getSingleCat(catId);
    res.render('editCat', {...cat});
});

router.post('/cats-edit/:catId', (req, res) => {
    res.redirect('/');
});

router.get('/cats-find-new-home/:catId', async (req, res) => {
    const {catId} = req.params;
    const cat = await catService.getSingleCat(catId);
    res.render('catShelter', cat);
});

router.post('/cats-find-new-home/:catId', (req, res) => {
    res.redirect('/');
});

router.get('/404', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;