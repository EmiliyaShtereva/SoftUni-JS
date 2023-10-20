const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
});

userSchema.virtual('repeatPassword').set(function(value) {
    if (value !== this.password) {
        throw new Error('Password missmatch!');
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;