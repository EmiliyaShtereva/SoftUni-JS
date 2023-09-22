function cars(arr) {
    let cars = {};
    commandObj = {
        create(name, inherit, parentName) {
            if (inherit) {
                cars[name] = Object.create(cars[parentName]);
            } else {
                cars[name] = {};
            }
        },
        set(name, key, value) {
            cars[name][key] = value;
        },
        print(name) {
            let entry = [];
            for (let key in cars[name]) {
                entry.push(`${key}:${cars[name][key]}`);
            }
            console.log(entry.join(','));
        }
    }

    for (let command of arr) {
        let [commandName, a, b, c] = command.split(' ');
        let action = commandObj[commandName];
        action(a, b, c);
    }

}