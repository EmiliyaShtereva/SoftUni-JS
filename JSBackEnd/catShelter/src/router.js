const router = require('express').Router();
const homeController = require('./controllers/homeController.js');
const catsController = require('./controllers/catsController.js');

router.use(homeController);
router.use('/cats', catsController);

module.exports = router;