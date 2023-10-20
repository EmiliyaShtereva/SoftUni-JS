const router = require('express').Router();
const animalService = require('../survices/animalService.js');
const {isAuth} = require('../authMiddleware.js');
const { extractErrorMsgs } = require('../errorHandler.js');

router.get('/create', (req, res) => {
    res.render('post/create');
});

router.post('/create', isAuth, async (req, res) => {
    const {name, years, kind, image, need, location, description} = req.body;
    const payload = {name, years, kind, image, need, location, description, owner: req.user};
    try {
        await animalService.create(payload);
        res.redirect('/dashboard');
    } catch(error) {
        const errorMessages = extractErrorMsgs(error).join('\n');
        res.status(404).render('post/create', {errorMessages});
    }
});

router.get('/details', (req, res) => {
    res.render('post/details');
});

router.get('/edit', (req, res) => {
    res.render('post/edit');
});

module.exports = router;