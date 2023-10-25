const express = require('express');

const {expressConfig, handlebarsConfig, dbConnect} = require('./jsFiles/configs.js');
const routes = require('./jsFiles/router.js');

const app = express();
const PORT = 3000;

// Configs
expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('Connected to the DB!'))
    .catch((err) => console.log(`Error while connecting in DB: ${err}`));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} ...`));