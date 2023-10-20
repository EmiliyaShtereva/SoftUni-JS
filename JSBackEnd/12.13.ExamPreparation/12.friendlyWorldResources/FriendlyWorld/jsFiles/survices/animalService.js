const Animal = require("../models/Animal.js");

exports.create = (createData) => Animal.create(createData);

exports.getAll = () => Animal.find().lean();

exports.singleAnimal = (animalId) => Animal.findById(animalId).lean();

exports.addDonationsToAnimal = async (animalId, userId) => {
    const animal = await Animal.findById(animalId);
    const isExistingInDonations = animal.donations.some((d) => d?.toString() === userId);
    if (isExistingInDonations) {
        return;
    };
    animal.donations.push(userId);
    return animal.save();
}