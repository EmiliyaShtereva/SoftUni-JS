function autoCompany(arr) {
    let carBrands = {};

    for (const el of arr) {
        let [carBrand, carModel, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);

        if (!carBrands.hasOwnProperty(carBrand)) {
            carBrands[carBrand] = {};
        }

        if (!carBrands[carBrand].hasOwnProperty(carModel)) {
            carBrands[carBrand][carModel] = producedCars;
        } else {
            carBrands[carBrand][carModel] += producedCars;
        }
    }
    for (let brand in carBrands) {
        console.log(brand);
        for (let model in carBrands[brand]) {
            console.log(`###${model} -> ${carBrands[brand][model]}`)
        }
    }
}

autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])