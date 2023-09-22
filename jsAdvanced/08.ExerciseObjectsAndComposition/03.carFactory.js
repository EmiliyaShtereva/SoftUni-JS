function carFactory(requarements) {
    let car = {};
    car.model = requarements.model;
    if (requarements.power <= 90) {
        car.engine = {power: 90, volume: 1800};
    } else if (requarements.power <= 120) {
        car.engine = {power: 120, volume: 2400};
    } else if (requarements.power <= 200) {
        car.engine = {power: 200, volume: 3500};
    }
    car.carriage = {};
    car.carriage.type = requarements.carriage;
    car.carriage.color = requarements.color;

    car.wheels = [];
    if (requarements.wheelsize % 2 === 0) {
        requarements.wheelsize -= 1;
    }

    for (let i = 0; i < 4; i++) {
        car.wheels.push(requarements.wheelsize);
    }
    return car
}

// // { model: 'VW Golf II',
// engine: { power: 90,
//     volume: 1800 },
//     carriage: { type: 'hatchback',
//     color: 'blue' },
//     wheels: [13, 13, 13, 13] }

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })