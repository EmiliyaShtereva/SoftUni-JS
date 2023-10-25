const router = require('express').Router();
const electronicService = require('../survices/electronicService.js');
const {isAuth} = require('../authMiddleware.js');
const { extractErrorMsgs } = require('../errorHandler.js');

router.get('/create', (req, res) => {
    res.render('offer/create');
});

router.post('/create', isAuth, async (req, res) => {
    const {name, type, production, exploitation, damages, image, price, description} = req.body;
    const payload = {
        name, 
        type, 
        production: Number(production), 
        exploitation: Number(exploitation), 
        damages, 
        image, 
        price: Number(price), 
        description, 
        owner: req.user
    };
    try {
        await electronicService.create(payload);
        res.redirect('/catalog');
    } catch(error) {
        const errorMessages = extractErrorMsgs(error).join('\n');
        res.status(404).render('offer/create', {errorMessages});
    }
});

router.get('/:electronicId/details', async (req, res) => {
    const {electronicId} = req.params;
    const electronic = await electronicService.singleElectronic(electronicId);
    const {user} = req;
    const {owner} = electronic;
    const isOwner = user?._id === owner._id.toString();
    const hasBought = electronic.buyingList?.some((b) => b?._id.toString() === user?._id);
    res.render('offer/details', {electronic, isOwner, hasBought});
});

router.get('/:electronicId/edit', isAuth, async (req, res) => {
    const {electronicId} = req.params;
    const electronic = await electronicService.singleElectronic(electronicId);
    res.render('offer/edit', {electronic});
});

router.post('/:electronicId/edit', isAuth, async (req, res) => {
    const {electronicId} = req.params;
    const {name, type, production, exploitation, damages, image, price, description} = req.body;
    const payload = {
        name, 
        type, 
        production: Number(production), 
        exploitation: Number(exploitation), 
        damages, 
        image, 
        price: Number(price), 
        description, 
        owner: req.user
    };

    await electronicService.update(electronicId, payload);
    res.redirect(`/offers/${electronicId}/details`);
});

router.get('/:electronicId/delete', isAuth, async (req, res) => {
    const {electronicId} = req.params;
    await electronicService.delete(electronicId);
    res.redirect('/catalog');
});

router.get('/:electronicId/buy', isAuth, async (req, res) => {
    const {electronicId} = req.params;
    const {_id} = req.user;

    await electronicService.addBoughtToElectronic(electronicId, _id);
    res.redirect(`/offers/${electronicId}/details`);
});

module.exports = router;