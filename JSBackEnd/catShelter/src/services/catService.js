const Cat = require('./../models/Cat.js');
const Breed = require('./../models/Breed.js');

exports.createCat = async (catData) => {
    const cat = await Cat.create(catData);
    return cat;
}

exports.createBreed = async (breedData) => {
    const breed = await Breed.create(breedData);
    return breed;
}

exports.getAllCats = async (search) => {
    let cats = await Cat.find().lean();

    if (search) {
        cats = cats.filter((cat) => 
          cat.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      
    return cats;
};

exports.getAllBreeds = async () => {
    const breeds = await Breed.find().lean();
    return breeds;
};

exports.editCat = async (catId, catData) => {
    const cat = await Cat.findByIdAndUpdate(catId, {name: catData.name, description: catData.description, imageUrl: catData.imageUrl, breed: catData.breed}).lean();
    return cat;
};

exports.deleteCat = async (catId) => {
    await Cat.findByIdAndDelete(catId).lean();
};

exports.getSingleCat = async (id) => Cat.findById(id).lean();