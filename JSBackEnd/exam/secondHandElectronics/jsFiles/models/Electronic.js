const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minLength: 10
    },
    type: {
        type: String, 
        required: true,
        minLength: 2
    },
    production: {
        type: Number, 
        required: true,
        min: 1900,
        max: 2023
    },
    exploitation: {
        type: Number, 
        required: true,
        min: 0
    },
    damages: {
        type: String, 
        required: true,
        minLength: 10
    },
    image: {
        type: String, 
        required: true,
        match:[/^http?:\/\/.+/]
    },
    price: {
        type: Number, 
        required: true,
        min: 0
    },
    description: {
        type: String, 
        required: true,
        minLength: 10,
        maxLength: 200
    },
    buyingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Electronic = mongoose.model('Electronic', electronicSchema);
module.exports = Electronic;