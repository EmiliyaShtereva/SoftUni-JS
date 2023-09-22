function createHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() { }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`
        }

        get _divideValue() {
            switch(this.units) {
                case 'cm': return 1;
                case 'mm': return 0.1;
                case 'm': return 100;
            }
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius() {
            return this._radius / this._divideValue;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            let baseToString = super.toString();
            return `${baseToString} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }


        get width() {
            return this._width / this._divideValue;
        }

        get height() {
            return this._height / this._divideValue;
        }

        get area() {
            let area = this.width * this.height;
            return area;
        }

        toString() {
            let baseToString = super.toString();
            return `${baseToString} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}