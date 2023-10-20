const User = require("../models/User.js");

exports.register = async (userData) => {
    await User.create(userData);
}

