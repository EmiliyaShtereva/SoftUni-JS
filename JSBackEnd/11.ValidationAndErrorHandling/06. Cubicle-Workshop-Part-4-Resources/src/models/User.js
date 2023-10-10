const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [5, 'Username is too short!'],
        match: [/^[A-Za-z0-9]+$/, 'Username is not with english letters and digits only!'],
        unique: {
            value: true,
            message: 'Username alredy exists'
        }
    },
    password: {
        type: String,
        minLength: [8, 'Password is too short!'],
        validator: function(value) {
            return /^[A-Za-z0-9]+$/.test(value);
        },
        message: 'Username is not with english letters and digits only!'
    }
});

userSchema.path("username").validate(function (username) {
    const user = mongoose.model('User').findOne({username});
    return !!user;
}, 'Username already exists!');

// TODO: if user alredy exists, throw error
userSchema.virtual('repeatPassword').set(function (value) {
    if (value !== this.password) {
        throw new Error('Password missmatch');
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
})

const User = mongoose.model("User", userSchema);

module.exports = User;