const router = require('express').Router();
const homeController = require('./controllers/homeController.js');
const usersController = require('./controllers/usersController.js');
const offerController = require('./controllers/offerController.js');

router.use(homeController);
router.use('/users', usersController);
router.use('/offers', offerController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;