function lowestPriceInCities(arr) {
    const prices = {};

    for (let el of arr) {
        let [town, product, price] = el.split(" | ");
        price = Number(price);

        if (!prices[product] || price < prices[product].price) {
            prices[product] = { price: price, town: town };
        }
    }

    for (const product in prices) {
        const { price, town } = prices[product];
        console.log(`${product} -> ${price} (${town})`);
    }
}


// Audi -> 1000 (Mexico City)
// BMW -> 99999 (Mexico City)
// Mitsubishi -> 1000 (New York City)
// Mercedes -> 1000 (Washington City)
// NoOffenseToCarLovers -> 0 (Sofia City)

lowestPriceInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
   'Sofia City | Mitsubishi | 10000',
   'Sofia City | Mercedes | 10000',
   'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
  'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])