const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('post/create');
});

router.get('/details', (req, res) => {
    res.render('post/details');
});

router.get('/edit', (req, res) => {
    res.render('post/edit');
});

module.exports = router;