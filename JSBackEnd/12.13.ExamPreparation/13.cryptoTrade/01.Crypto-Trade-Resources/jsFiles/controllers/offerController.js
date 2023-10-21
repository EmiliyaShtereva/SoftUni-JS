const router = require('express').Router();
const cryptoService = require('../survices/cryptoService.js');
const {isAuth} = require('../authMiddleware.js');
const { extractErrorMsgs } = require('../errorHandler.js');

router.get('/create', (req, res) => {
    res.render('offer/create');
});

router.post('/create', isAuth, async (req, res) => {
    const {name, image, price, description, paymentMethod} = req.body;
    const payload = {name, image, price: Number(price), description, paymentMethod, owner: req.user};
    try {
        await cryptoService.create(payload);
        res.redirect('/catalog');
    } catch(error) {
        const errorMessages = extractErrorMsgs(error).join('\n');
        res.status(404).render('offer/create', {errorMessages});
    }
});

router.get('/:cryptoId/details', async (req, res) => {
    const {cryptoId} = req.params;
    const coin = await cryptoService.singleCrypto(cryptoId);
    const {user} = req;
    const {owner} = coin;
    const isOwner = user?._id === owner._id.toString();
    const hasBought = coin.bought?.some((b) => b?._id.toString() === user?._id);
    res.render('offer/details', {coin, isOwner, hasBought});
});

router.get('/:cryptoId/edit', isAuth, async (req, res) => {
    const {cryptoId} = req.params;
    const coin = await cryptoService.singleCrypto(cryptoId);
    res.render('offer/edit', {coin});
});

router.post('/:cryptoId/edit', isAuth, async (req, res) => {
    const {cryptoId} = req.params;
    const {name, image, price, description, paymentMethod} = req.body;
    const payload = {name, image, price: Number(price), description, paymentMethod, owner: req.user};

    await cryptoService.update(cryptoId, payload);
    res.redirect(`/offers/${cryptoId}/details`);
});

router.get('/:cryptoId/delete', isAuth, async (req, res) => {
    const {cryptoId} = req.params;
    await cryptoService.delete(cryptoId);
    res.redirect('/catalog');
});

router.get('/:cryptoId/buy', isAuth, async (req, res) => {
    const {cryptoId} = req.params;
    const {_id} = req.user;

    await cryptoService.addBoughtTocrypto(cryptoId, _id);
    res.redirect(`/offers/${cryptoId}/details`);
});

module.exports = router;