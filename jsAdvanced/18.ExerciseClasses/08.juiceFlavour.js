function juiceFlaveors(arr) {
    let juiceQuantities = {};
    let bottles = {};

    for (let i = 0; i < arr.length; i++) {
        let juiceData = arr[i].split(' => ');
        let juiceName = juiceData[0];
        let quantity = Number(juiceData[1]);

        if (!juiceQuantities.hasOwnProperty(juiceName)) {
            juiceQuantities[juiceName] = quantity;
        } else {
            juiceQuantities[juiceName] += quantity;
        }

        while (juiceQuantities[juiceName] >= 1000) {
            if (!bottles.hasOwnProperty(juiceName)) {
                bottles[juiceName] = 1;
            } else {
                bottles[juiceName] += 1;
            }
            juiceQuantities[juiceName] -= 1000;
        }
    }

    for (let juice in bottles) {
        return `${juice} => ${bottles[juice]}`;
    }
}