const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        // minLength: 2
    },
    image: {
        type: String, 
        required: true,
        // match:[/^http?:\/\/.+/, 'Provide valid creature image link!']
    },
    price: {
        type: Number, 
        required: true,
        // min: 0
    },
    description: {
        type: String, 
        required: true,
        // minLength: 10,
    },
    paymentMethod: {
        type: String, 
        required: true
    },
    bought: [
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

const Crypto = mongoose.model('Crypto', cryptoSchema);
module.exports = Crypto;