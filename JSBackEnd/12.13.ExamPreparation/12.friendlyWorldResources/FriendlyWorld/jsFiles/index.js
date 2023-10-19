const express = require('express');

const {expressConfig, handlebarsConfig} = require('./configs.js');
const routes = require('./router.js');

const app = express();
const PORT = 3000;

// Configs
expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} ...`));