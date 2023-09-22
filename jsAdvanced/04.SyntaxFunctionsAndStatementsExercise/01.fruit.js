function fruit(fruit, weight, money) {
    let weightInKilos = weight/1000;
    let price = weightInKilos * money;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80);