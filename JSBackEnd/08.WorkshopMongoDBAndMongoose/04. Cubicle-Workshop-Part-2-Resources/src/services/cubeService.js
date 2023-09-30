const fs = require("fs/promises");
const Cube = require('./../models/Cube.js');

exports.create = async (cubeData) => {
    // const cube = new Cube(cubeData);
    // await cube.save();

    const cube = await Cube.create(cubeData);
    return cube;
};

exports.getAll = async (search, from, to) => {
    let filterCubes = await Cube.find().lean();

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

exports.getSingleCube = async (id) => Cube.findById(id).lean();