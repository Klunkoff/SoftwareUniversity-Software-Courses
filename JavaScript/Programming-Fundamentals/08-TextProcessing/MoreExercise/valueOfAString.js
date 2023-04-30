function valueOfAString(inputArray) {

    let string = inputArray.shift();
    let command = inputArray.shift();

    let commandObject = {

        'LOWERCASE' : lowerCase,
        'UPPERCASE' : upperCase,
    }

    let calculations = commandObject[command];
    let total = calculations(string);

    console.log(`The total sum is: ${total}`);

    function lowerCase(string) {

        let sum = 0;

        for (let char of string) {

            let charIndex = char.charCodeAt(0);

            if (charIndex >= 97 && charIndex <= 122) {
                sum += charIndex;
            }
        }

        return sum;
    }

    function upperCase(string) {

        let sum = 0;

        for (let char of string) {

            let charIndex = char.charCodeAt(0);

            if (charIndex >= 65 && charIndex <= 90) {
                sum += charIndex;
            }
        }

        return sum;
    }
}

// valueOfAString(['HelloFromMyAwesomePROGRAM',
//     'LOWERCASE']);
valueOfAString(['AC/DC',
    'UPPERCASE']);