const expect = require('chai').expect;

const carService = {
    isItExpensive(issue) {
      if (issue === "Engine" || issue === "Transmission") {
        return `The issue with the car is more severe and it will cost more money`;
      } else {
        return `The overall price will be a bit cheaper`;
      }
    },
    discount(numberOfParts, totalPrice) {
      if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
        throw new Error("Invalid input");
      }
  
      let discountPercentage = 0;
  
      if (numberOfParts > 2 && numberOfParts <= 7) {
        discountPercentage = 15;
      } else if (numberOfParts > 7) {
        discountPercentage = 30;
      }
  
      let result = (discountPercentage / 100) * totalPrice;
  
      if (numberOfParts <= 2) {
        return "You cannot apply a discount";
      } else {
        return `Discount applied! You saved ${result}$`;
      }
    },
    partsToBuy(partsCatalog, neededParts) {
      let totalSum = 0;
  
      if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
        throw new Error("Invalid input");
      }
      neededParts.forEach((neededPart) => {
        partsCatalog.map((obj) => {
          if (obj.part === neededPart) {
            totalSum += obj.price;
          }
        });
      });
  
      return totalSum;
    },
  };

describe('carService functionality', function() {
    describe('isItExpensive', function() {
        it('with engine or transmission it should return an issue', function() {
            let issue1 = "Engine";
            let issue2 = "Transmission";

            let result1 = carService.isItExpensive(issue1);
            let result2 = carService.isItExpensive(issue2);

            expect(result1).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(result2).to.equal(`The issue with the car is more severe and it will cost more money`);
        })

        it('issue is not engine or transmission it should return an a cheaper price message', function() {
            let issue1 = "something";
            let issue2 = "else";

            let result1 = carService.isItExpensive(issue1);
            let result2 = carService.isItExpensive(issue2);

            expect(result1).to.equal(`The overall price will be a bit cheaper`);
            expect(result2).to.equal(`The overall price will be a bit cheaper`);
        })
    })

    describe('discount', function() {
        it('throw an error if parts and price are not numbers', function() {
            let parts1 = "20";
            let parts2 = 20;
            let price1 = "50";
            let price2 = 50;

            let result1 = () => carService.discount(parts1, price1);
            let result2 = () => carService.discount(parts1, price2);
            let result3 = () => carService.discount(parts2, price1);

            expect(result1).to.throw(Error, "Invalid input");
            expect(result2).to.throw(Error, "Invalid input");
            expect(result3).to.throw(Error, "Invalid input");
        })

        it('returns a discount if there is one', function() {
            let parts1 = 5;
            let parts2 = 9.5;
            let parts3 = 1;
            let price = 50;

            let result1 = carService.discount(parts1, price);
            let result2 = carService.discount(parts2, price);
            let result3 = carService.discount(parts3, price);

            expect(result1).to.equal(`Discount applied! You saved 7.5$`);
            expect(result2).to.equal(`Discount applied! You saved 15$`);
            expect(result3).to.equal("You cannot apply a discount");
        })
    })

    describe('partsToBuy', function() {
        it('if catalog and parts are not an array it should throw an error', function() {
            let catalog1 = "abc";
            let catalog2 = 20;
            let parts1 = "abc";
            let parts2 = 50;

            let result1 = () => carService.partsToBuy(catalog1, parts1);
            let result2 = () => carService.partsToBuy(catalog1, parts2);
            let result3 = () => carService.partsToBuy(catalog2, parts1);
            let result4 = () => carService.partsToBuy(catalog2, parts2);

            expect(result1).to.throw(Error, "Invalid input");
            expect(result2).to.throw(Error, "Invalid input");
            expect(result3).to.throw(Error, "Invalid input");
            expect(result4).to.throw(Error, "Invalid input");
        })

        it('if catalog is empty it should return a 0 otherwiseit should return the price', function() {
            let catalog1 = [{ part: "injectors", price: 145 }, { part: "coil springs", price: 230 }];
            let catalog2 = [];
            let parts1 = ["blowoff valve", "injectors"];

            let result1 = carService.partsToBuy(catalog1, parts1);
            let result2 = carService.partsToBuy(catalog2, parts1);

            expect(result1).to.equal(145);
            expect(result2).to.equal(0);
        })
    })
})