const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('./../services/accessoryService.js');
const {difficultyLevelOptionsViewData} = require('../utils/viewData.js');
const {isAuth} = require('./../middlewares/authMiddleware.js');

router.get('/create', isAuth, (req, res) => {
    res.render('cube/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    await cubeService.create({
        name, 
        description, 
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),
        owner: req.user,
    });
    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId);

    if (!cube) {
        res.redirect('/404');
        return;
    }

    const isOwner = cube.owner?.toString() === req.user._id;
    const hasAccessories = cube.accessories?.length > 0;
    res.render('cube/details', {cube, hasAccessories, isOwner});
});

// accessory attachment
router.get('/:cubeId/attach-accessory', async(req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId);
    const accessoryIds = cube.accessories ? cube.accessories.map((a) => a._id) : [];
    
    const accessories = await accessoryService.getWithoutOwned(accessoryIds);
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', {cube, accessories, hasAccessories});
});

router.post('/:cubeId/attach-accessory', async(req, res) => {
    const {cubeId} = req.params;
    const {accessory: accessoryId} = req.body;

    await cubeService.attachAcessory(cubeId, accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);
});

router.get('/:cubeId/edit', async (req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId);

    if (cube.owner?.toString() !== req.user._id) {
        return res.redirect('/404');
    }

    const options = difficultyLevelOptionsViewData(cube.difficultyLevel);

    res.render('cube/edit', {cube, options});
});

router.post('/:cubeId/edit', async (req, res) => {
    const {cubeId} = req.params;
    const {name, description, imageUrl, difficultyLevel} = req.body;
    const payload = {name, description, imageUrl, difficultyLevel};

    await cubeService.update(cubeId, payload);

    res.redirect(`/cubes/${cubeId}/details`);
});

router.get('/:cubeId/delete', async (req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId);
    const options = difficultyLevelOptionsViewData(cube.difficultyLevel);

    res.render('cube/delete', {cube, options});
});

router.post('/:cubeId/delete', async (req, res) => {
    const {cubeId} = req.params;
    await cubeService.delete(cubeId);

    res.redirect(`/`);
});

module.exports = router;