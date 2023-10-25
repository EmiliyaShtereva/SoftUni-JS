const Electronic = require("../models/Electronic.js");

exports.create = (createData) => Electronic.create(createData);

exports.getAll = () => Electronic.find().lean();

exports.singleElectronic = (electronicId) => Electronic.findById(electronicId).lean();

exports.update = (electronicId, createData) => Electronic.findByIdAndUpdate(electronicId, createData);

exports.delete = (electronicId) => Electronic.findByIdAndDelete(electronicId);

exports.addBoughtToElectronic = async (electronicId, userId) => {
    const electronic = await Electronic.findById(electronicId);
    const isExistingInBought = electronic.buyingList.some((b) => b?.toString() === userId);
    if (isExistingInBought) {
        return;
    };
    electronic.buyingList.push(userId);
    return electronic.save();
}