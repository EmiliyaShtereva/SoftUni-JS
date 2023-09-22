function cityTaxes(cityName, cityPopulation, cityTreasury) {
    let city = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes() {
            Math.floor(this.treasury += this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            Math.floor(this.population += this.population * percentage / 100);
        },
        applyRecession(percentage) {
            Math.floor(this.treasury -= this.treasury * percentage / 100);
        }
    }

    return city;
}

const city =
cityTaxes('Tortuga',
7000,
15000);
console.log(city);