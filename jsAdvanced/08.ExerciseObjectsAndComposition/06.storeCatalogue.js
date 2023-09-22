function storeCatalogue(arr) {
    let catalogue = {};
    for (let el of arr) {
        let [product, price] = el.split(' : ');
        catalogue[product] = Number(price);
    }

    let sorted = Object.keys(catalogue).sort().reduce(
        (obj, key) => {
            obj[key] = catalogue[key];
            return obj;
        }, {}
    );
    
    let letter = '';
    for (let key in sorted) {
        if (letter !== key[0]) {
            letter = key[0];
            console.log(letter);
        }
        console.log(`${key}: ${sorted[key]}`);
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])