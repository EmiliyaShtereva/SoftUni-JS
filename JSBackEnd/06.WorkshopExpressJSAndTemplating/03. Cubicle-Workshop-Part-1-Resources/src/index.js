// Imports
const express = require('express');
const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');
const {PORT} = require('./constants.js');

// Local veriables
const app = express();

// Configs
expressConfig(app);
handlebarsConfig(app);

// Routing
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));