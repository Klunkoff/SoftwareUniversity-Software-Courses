
let proba = [1, 2, 4, 5, 6];

(function arrayExtension() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (number) {

        if (this[number] || number == 0) {

            let result = this.slice(number);
            return result;
        }
    }

    Array.prototype.take = function (number) {

        if (this[number] || number == 0) {

            let result = this.slice(0, number);
            return result;
        }
    }

    Array.prototype.sum = function () {

        let result = 0;
        this.forEach((el) => result += el);
        return result;
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }

})()

console.log(proba.last());
console.log(proba.skip(3));
console.log(proba.take(3));
console.log(proba.sum());
console.log(proba.average());

