const fs = require("fs/promises");
const uniqid = require('uniqid');

exports.createCat = async (catData) => {
    const newCat = {
        id: uniqid(),
        ...catData,
    }

    const data = await fs.readFile('src/config/catsdata.json');
    const jsonData = JSON.parse(data);

    jsonData.cats.push(newCat);
    await fs.writeFile('src/config/catsdata.json', JSON.stringify(jsonData));

    return newCat;
}

exports.createBreed = async (breedData) => {
    const newBreed = breedData;

    const data = await fs.readFile('src/config/breedsdata.json');
    const jsonData = JSON.parse(data);

    jsonData.breeds.push(newBreed);
    await fs.writeFile('src/config/breedsdata.json', JSON.stringify(jsonData));

    return newBreed;
}

exports.getAllCats = async () => {
    const data = await fs.readFile('src/config/catsdata.json');
    const jsonData = JSON.parse(data);
    let filterCats = [...jsonData.cats];
    return filterCats;
};

exports.getAllBreeds = async () => {
    const data = await fs.readFile('src/config/breedsdata.json');
    const jsonData = JSON.parse(data);
    let filterBreeds = [...jsonData.breeds];
    return filterBreeds;
};

exports.getSingleCat = async (id) => {
    const data = await fs.readFile('src/config/catsdata.json');
    const jsonData = JSON.parse(data);
    let cats = jsonData.cats;
    return cats.find((cat) => cat.id === id);
  };