
(function stringExtension() {

    String.prototype.ensureStart = function (string) {

        let thisToString = this.toString();

        if (!thisToString.startsWith(string)) {

            let newString = string + thisToString;
            return newString;
        }

        return thisToString;
    }


    String.prototype.ensureEnd = function (string) {

        let thisToString = this.toString();

        if (!thisToString.endsWith(string)) {

            let newString = thisToString + string;
            return newString;
        }

        return thisToString;
    }

    String.prototype.isEmpty = function () {

        let thisToString = this.toString();

        if (!thisToString) {

            return true;

        } else {

            return false;
        }
    }

    String.prototype.truncate = function (number) {

        let thisToString = this.toString();

        if (thisToString.length < number) {

            return thisToString;
        }

        if (number < 4) {

            let result = '.'.repeat(number);
            return result;
        }

        if (thisToString.includes(' ')) {

            let splitedString = thisToString.split(' ');
            let result = '';

            for (let i = 0; i < splitedString.length; i++) {

                if (result.length + splitedString[i].length <= number - 3) {

                    result += splitedString[i] + ' ';
                }
            }

            result = result.trimEnd();
            return result + '...';

        } else {

            thisToString = thisToString.slice(0, number - 3) + '...';
            return thisToString;
        }
    }

    String.format = function (string, ...parameters) {

        for (let i = 0; i < parameters.length; i++) {

            string = string.replace(`{${i}}`, parameters[i]);
        }

        return string;
    }

})()

let str = 'my string';
console.log(str.isEmpty())
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);

console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));
str = String.format('jumps {0} {1}',
    'dog');