const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const {auth} = require('./authMiddleware.js')

const URL = 'mongodb://localhost:27017/friendly-world';

exports.expressConfig = (app) => {
    app.use(express.static(path.resolve(__dirname, '../static')));
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(auth);
};

exports.handlebarsConfig = (app) => {
    app.engine('hbs', handlebars.engine({extname: 'hbs'}));
    app.set('view engine', 'hbs');
    app.set('views', 'templates');
};

exports.dbConnect = async () => {
    await mongoose.connect(URL);
};