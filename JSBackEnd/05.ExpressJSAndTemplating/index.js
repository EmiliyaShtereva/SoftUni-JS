const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
let PORT = 5050;

const {getKittens, addKitten} = require('./kittens.js');

// View Engine
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');

// middleware
// third party middleware
const bodyParser = express.urlencoded({extended: false});
app.use(bodyParser);

const staticFile = express.static('public');
app.use(staticFile);

// global routing middleware
app.use((req, res, next) => {
    console.log(`HTTP Request: ${req.method}, Request Path: ${req.path}`);
    next();
})

// partial routing middleware
app.use('/kittens', (req, res, next) => {
    console.log('Kittens Middleware has been invoked');
    next();
});

// concrete routing middleware
const specificMiddleware = (req, res, next) => {
        console.log('This is the specific routes MIDDLEWARE');
        next();
    };

// Routing START

// app HTTP methods - get, post, put, patch, delete (most used...)
app.get('/', (req, res) => {
    // res.send('Welcome to home page');
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/specific', specificMiddleware, (req, res) => {
    res.send('This is specific route!');
});

// Endpoint -> method, path, action
// get - method
// '/kittens' - path, route
// action - (req, res) => {}
app.get('/kittens', (req, res) => {
    const kittens = getKittens();
    res.render('kittens', {kittens});
});

app.get('/kittens/:kittenId', (req, res) => {
    const kittenId = Number(req.params.kittenId);

    if (!kittenId) {
        res.status(404).send('Bad kitten id: ' + req.params.kittenId);
        return;
    }

    res.send({ id: kittenId, name: 'kosatka' + kittenId});
})

app.post('/kittens', (req, res) => {
    console.log((req.body));
    const name = req.body.name;
    const age = Number(req.body.age);
    addKitten(name, age);
    res.send('Kitten has been created!');
});

app.get('/download-jpg', (req, res) => {
    // ENds the stearm by itself
    // res.download('./ghost.jpg');
    // You need to end the stream because you can attach multiple files.
    // res.attachment('./ghost.jpg');
    // res.end();
    // res.sendFile(path.resolve(__dirname, './ghost.jpg'));
})

app.get('/route-for-rediraction', (req, res) => {
    res.redirect('/kittens');
})

// WILDCARD *
app.get('*', (req, res) => {
    res.status(404).send('Sorry page is not found');
});
// Routing END

// listening on port
app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`));

