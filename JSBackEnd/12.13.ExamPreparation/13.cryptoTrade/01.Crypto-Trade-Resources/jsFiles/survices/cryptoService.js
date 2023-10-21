const Crypto = require("../models/Crypto.js");

exports.create = (createData) => Crypto.create(createData);

exports.getAll = () => Crypto.find().lean();

exports.singleCrypto = (cryptoId) => Crypto.findById(cryptoId).lean();

exports.update = (cryptoId, createData) => Crypto.findByIdAndUpdate(cryptoId, createData);

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.addBoughtTocrypto = async (cryptoId, userId) => {
    const crypto = await Crypto.findById(cryptoId);
    const isExistingInBought = crypto.bought.some((b) => b?.toString() === userId);
    if (isExistingInBought) {
        return;
    };
    crypto.bought.push(userId);
    return crypto.save();
}