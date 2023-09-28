const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const uniqid = require('uniqid');
const app = express();
const fs = require('fs/promises');
const PORT = 5555;

let cats = [
    {
        id:0,
        imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
        name: 'Tsunami',
        breed: 'ulichna',
        description: 'Very cute cat1!'
    },
    {
        id:1,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg',
        name: 'Pesho',
        breed: 'ulichna',
        description: 'Very cute cat2!'
    },
    {
        id:2,
        imageUrl: 'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg',
        name: 'Kosatka',
        breed: 'ulichna',
        description: 'Very cute cat3!'
    },
    {
        id:3,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        name: 'Darko',
        breed: 'ulichna',
        description: 'Very cute cat4!'
    },
    {
        id:4,
        imageUrl: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
        name: 'hina',
        breed: 'ulichna',
        description: 'Very cute cat4!'
    },
]

let breeds = ['Unknown breed', 'Persian cat', 'Cutie', 'ulichna'];

    app.engine('hbs', handlebars.engine({extname: 'hbs'}));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');

    app.use(express.urlencoded({extended: false}));

    app.use(express.static(path.resolve(__dirname, 'public')));

    app.get('/', (req, res) => {
        res.render('index', {cats});
    });

    app.get('/cats/add-breed', (req, res) => {
        res.render('addBreed');
    });

    app.post('/cats/add-breed', (req, res) => {
        const {breed} = req.body;
        breeds.push(breed);
        res.redirect('/');
        console.log(breeds);
    });

    app.get('/cats/add-cat', (req, res) => {
        res.render('addCat');
    });

    app.post('/cats/add-cat', (req, res) => {
        const {name, description, image, breed} = req.body;
        cats.push({id:uniqid(), name, description, image, breed});
        res.redirect('/');
    });

    app.get('/cats-edit/:catId', (req, res) => {
        const {catId} = req.params;
        const cat = cats.find((cat) => cat.id == catId);
        console.log(cat);
        res.render('editCat', {...cat});
    });

    app.post('/cats-edit/:catId', (req, res) => {
        res.redirect('/');
    });

    app.get('/cats-find-new-home/:catId', (req, res) => {
        res.render('catShelter');
    });

    app.post('/cats-find-new-home/:catId', (req, res) => {
        res.redirect('/');
    });

    app.get('*', (req, res) => {
        res.status(404).send('Page not found');
    });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));