const router = require('express').Router();
const homeController = require('./controllers/homeController.js');
const usersController = require('./controllers/usersController.js');
const postController = require('./controllers/postController.js');

router.use(homeController);
router.use('/users', usersController);
router.use('/posts', postController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;