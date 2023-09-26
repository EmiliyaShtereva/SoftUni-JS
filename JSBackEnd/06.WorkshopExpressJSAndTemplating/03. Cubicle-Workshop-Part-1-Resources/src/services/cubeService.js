const uniqid = require('uniqid');
const cubes = [
    {
        id: '39h212bslmx4iew6',
        name: 'ema crow',
        description: 'asdasd',
        imageUrl: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk3MDg5MjU5NDA3MDI1MjM1/rubik-cube-algorithms.png',
        difficultyLevel: 1
      },
      {
        id: '39h212bslmx4iobm',
        name: 'Easy Lasagna2',
        description: 'gsgsgs',
        imageUrl: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk3MDg5MjU5NDA3MDI1MjM1/rubik-cube-algorithms.png',
        difficultyLevel: 3
      },
      {
        id: '39h215dklmx4o1v6',
        name: 'cube3',
        description: 'n/a',
        imageUrl: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk3MDg5MjU5NDA3MDI1MjM1/rubik-cube-algorithms.png',
        difficultyLevel: 1
      }
];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
};

exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes];

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

exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};