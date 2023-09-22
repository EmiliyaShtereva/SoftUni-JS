function rectangle(recWidth, recHeight, recColor) {
    let recObj = {
        width: recWidth,
        height: recHeight,
        color: recColor.charAt(0).toUpperCase() + recColor.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    }
    return recObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());