const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('./../services/accessoryService.js')

router.get('/create', (req, res) => {
    res.render('cube/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    await cubeService.create({name, description, imageUrl, difficultyLevel: Number(difficultyLevel)});
    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId);
    console.log(cube);

    if (!cube) {
        res.redirect('/404');
        return;
    }

    const hasAccessories = cube.accessories?.length > 0;
    res.render('cube/details', {cube, hasAccessories});
});

// accessory attachment
router.get('/:cubeId/attach-accessory', async(req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId);
    const accessories = await accessoryService.getAll();
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', {cube, accessories, hasAccessories});
});

router.post('/:cubeId/attach-accessory', async(req, res) => {
    const {cubeId} = req.params;
    const {accessory: accessoryId} = req.body;

    await cubeService.attachAcessory(cubeId, accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;