const express = require('express');
const routes = require('./router.js');
const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');

const app = express();
const PORT = 5555;

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));