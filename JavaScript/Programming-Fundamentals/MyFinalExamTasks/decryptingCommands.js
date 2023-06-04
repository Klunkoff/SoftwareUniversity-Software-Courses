function decryptingCommands(inputArray) {

    let message = inputArray.shift();
    let command = inputArray.shift();

    while (command !== 'Finish') {

        let currentCommandArray = command.split(' ');
        let currentCommand = currentCommandArray[0];

        switch (currentCommand) {

            case 'Replace':

                let currentChar = currentCommandArray[1];
                let newChar = currentCommandArray[2];

                while (message.includes(currentChar)) {

                    message = message.replace(currentChar, newChar);
                }

                console.log(message);

                break;

            case 'Cut':

                let cutStartIndex = Number(currentCommandArray[1]);
                let cutEndIndex = Number(currentCommandArray[2]);
                let isIndexesInRange = cutStartIndex >= 0 && cutStartIndex < message.length && cutEndIndex >= 0 && cutEndIndex < message.length;

                if (isIndexesInRange) {

                    let firstPart = message.substring(0, cutStartIndex);
                    let secondPart = message.substring(cutEndIndex + 1);

                    message = firstPart + secondPart;

                    console.log(message);

                } else {

                    console.log(`Invalid indices!`);
                }

                break;

            case 'Make':

                let makeCommand = currentCommandArray[1];

                if (makeCommand == 'Upper') {

                    message = message.toUpperCase();

                } else if (makeCommand == 'Lower') {

                    message = message.toLowerCase();
                }

                console.log(message);

                break;

            case 'Check':

                let checkedString = currentCommandArray[1];

                if (message.includes(checkedString)) {

                    console.log(`Message contains ${checkedString}`);

                } else {

                    console.log(`Message doesn't contain ${checkedString}`);
                }

                break;

            case 'Sum':

                let sumStartIndex = Number(currentCommandArray[1]);
                let sumEndIndex = Number(currentCommandArray[2]);

                if (sumStartIndex < 0 || sumStartIndex >= message.length || sumEndIndex < 0 || sumEndIndex >= message.length) {

                    console.log(`Invalid indices!`);

                } else {

                    let string = message.substring(sumStartIndex, sumEndIndex + 1);
                    let sum = 0;

                    for (let char of string) {

                        let digit = char.charCodeAt(0);
                        sum += digit;
                    }

                    console.log(sum);
                }
        }

        command = inputArray.shift();
    }
}

decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"]);
// decryptingCommands(["HappyNameDay",
// "Replace p r",
// "Make Lower",
// "Cut 2 23",
// "Sum -2 2",
// "Finish"]);