const Accessory = require('./../models/Accessory');

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find().lean();

exports.getWithoutOwned = (accessoryId) => {
    // nin = not in
    return Accessory.find({_id: {$nin: accessoryId}}).lean();
}