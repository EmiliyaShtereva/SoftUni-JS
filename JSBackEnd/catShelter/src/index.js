const express = require('express');

const routes = require('./router.js');
const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');
const dbConnect = require('./config/dbConfig.js');

const app = express();
const PORT = 5555;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('Successfully connected to the DB!'))
    .catch((err) => console.log(`Error while connecting in DB: ${err}`));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));