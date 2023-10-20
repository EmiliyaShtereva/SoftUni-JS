const Animal = require("../models/Animal.js");

exports.create = (createData) => Animal.create(createData);

exports.getAll = () => Animal.find().lean();