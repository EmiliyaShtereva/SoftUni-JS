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

router.get('/:animalId/details', async (req, res) => {
    const {animalId} = req.params;
    const animal = await animalService.singleAnimal(animalId);
    const {user} = req;
    const {owner} = animal;
    const isOwner = user?._id === owner._id.toString();
    const hasDonated = animal.donations?.some((d) => d?._id.toString() === user?._id);
    res.render('post/details', {animal, isOwner, hasDonated});
});

router.get('/:animalId/edit', async (req, res) => {
    const {animalId} = req.params;
    const animal = await animalService.singleAnimal(animalId);
    res.render('post/edit', {animal});
});

router.post('/:animalId/edit', async (req, res) => {
    const {animalId} = req.params;
    const {name, years, kind, image, need, location, description} = req.body;
    const payload = {name, years, kind, image, need, location, description, owner: req.user};

    await animalService.update(animalId, payload);
    res.redirect(`/posts/${animalId}/details`);
});

router.get('/:animalId/delete', async (req, res) => {
    const {animalId} = req.params;
    await animalService.delete(animalId);
    res.redirect('/dashboard');
});

router.get('/:animalId/donate', isAuth, async (req, res) => {
    const {animalId} = req.params;
    const {_id} = req.user;

    await animalService.addDonationsToAnimal(animalId, _id);
    res.redirect(`/posts/${animalId}/details`);
});

module.exports = router;