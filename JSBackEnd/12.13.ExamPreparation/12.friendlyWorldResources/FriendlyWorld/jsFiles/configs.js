const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

exports.expressConfig = (app) => {
    app.use(express.static(path.resolve(__dirname, '../static')));
    app.use(express.urlencoded({extended: false}));
};

exports.handlebarsConfig = (app) => {
    app.engine('hbs', handlebars.engine({extname: 'hbs'}));
    app.set('view engine', 'hbs');
    app.set('views', 'templates');
};