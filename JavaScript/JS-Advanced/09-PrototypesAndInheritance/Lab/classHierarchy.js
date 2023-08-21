function classHierarchy() {

    class Figure {

        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(unit) {

            let unitsObject = {
                m : 'm', cm : 'cm', mm : 'mm'
            }

            this.units = unitsObject[unit];
        }

        metricConversion(value) {

            if (this.units == 'mm') {
                return value * 10;

            } else if (this.units == 'm') {
                return value / 10;

            } else {
                return value;
            }
        }

        toString() {
            
            if (this.constructor.name == 'Circle') {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
            }

            if (this.constructor.name == 'Rectangle') {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            }
        }
    }

    class Circle extends Figure {

        constructor(radius, units) {

            super(units);
            this._radius = radius;
        }

        get area() {

            this.radius = this.metricConversion(this._radius);

            let result = Math.PI * this.radius * this.radius;
            return result;
        }
    }

    class Rectangle extends Figure {

        constructor(width, height, units) {

            super(units);

            this._width = width;
            this._height = height;
        }

        get area() {

            this.width = this.metricConversion(this._width);
            this.height = this.metricConversion(this._height);

            let result = this.width * this.height;
            return result;
        }
    }

    return {

        Figure,
        Circle,
        Rectangle,
    }
}

let classes = classHierarchy();
let Figure = classes.Figure;
let Circle = classes.Circle;
let Rectangle = classes.Rectangle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50