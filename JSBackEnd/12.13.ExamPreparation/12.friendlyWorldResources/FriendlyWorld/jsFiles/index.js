const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// express configurations
app.use(express.static(path.resolve(__dirname, '../static')));
app.use(express.urlencoded({extended: false}));

// handlebars configurations
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'templates');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} ...`));