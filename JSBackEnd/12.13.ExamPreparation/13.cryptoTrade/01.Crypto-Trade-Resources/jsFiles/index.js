const express = require('express');

const {expressConfig, handlebarsConfig, dbConnect} = require('./configs.js');
const routes = require('./router.js');

const app = express();
const PORT = 3000;

// Configs
expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('Successfully connected to the DB!'))
    .catch((err) => console.log(`Error while connecting in DB: ${err}`));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} ...`));