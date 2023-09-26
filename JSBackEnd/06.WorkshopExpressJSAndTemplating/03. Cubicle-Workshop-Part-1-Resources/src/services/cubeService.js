const fs = require("fs/promises");
const uniqid = require('uniqid');

exports.create = async (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };
    const data = await fs.readFile('src/config/database.json');
    const jsonData = JSON.parse(data);

    jsonData.cubes.push(newCube);
    await fs.writeFile('src/config/database.json', JSON.stringify(jsonData));

    return newCube;
};

exports.getAll = async (search, from, to) => {
    const data = await fs.readFile('src/config/database.json');
    const jsonData = JSON.parse(data);
    let filterCubes = [...jsonData.cubes];

    if (search) {
      filterCubes = filterCubes.filter((cube) => 
        cube.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (from) {
      filterCubes = filterCubes.filter((cube) => 
        cube.difficultyLevel >= Number(from)
      );
    }

    if (to) {
      filterCubes = filterCubes.filter((cube) => 
        cube.difficultyLevel <= Number(to)
      );
    }
    return filterCubes;
};

exports.getSingleCube = async (id) => {
  const data = await fs.readFile('src/config/database.json');
    const jsonData = JSON.parse(data);
    let cubes = jsonData.cubes;
  return cubes.find((cube) => cube.id === id);
};