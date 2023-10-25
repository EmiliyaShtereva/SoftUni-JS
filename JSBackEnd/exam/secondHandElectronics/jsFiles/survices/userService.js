const bcrypt = require('bcrypt');
const User = require("../models/User.js");
const jwt = require('../jwt.js');

const SECRET = '17e202b3-a059-4eda-8d1f-8314002df69b';

exports.register = async (userData) => {
    const user = await User.create(userData);

    const payload = {_id: user._id, email: user.email};
    const token = await jwt.sign(payload, SECRET, {expiresIn: '3d'});

    return token;
}

exports.login = async (email, password) => {
    const user = await User.findOne({email});

    if (!user) {
        throw new Error('Invalid email or password!');
    };

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    };

    const payload = {_id: user._id, email: user.email};
    const token = await jwt.sign(payload, SECRET, {expiresIn: '3d'});

    return token;
}

