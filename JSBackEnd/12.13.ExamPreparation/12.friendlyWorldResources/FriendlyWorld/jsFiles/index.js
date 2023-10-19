const express = require('express');

const {expressConfig, handlebarsConfig} = require('./configs.js')

const app = express();
const PORT = 3000;

// Configs
expressConfig(app);
handlebarsConfig(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} ...`));