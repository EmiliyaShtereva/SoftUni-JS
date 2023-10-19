const router = require('express').Router();
const homeController = require('./controllers/homeController.js');
const guestController = require('./controllers/usersController.js');
const postController = require('./controllers/postController.js');

router.use(homeController);
router.use('/users', guestController);
router.use('/posts', postController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;