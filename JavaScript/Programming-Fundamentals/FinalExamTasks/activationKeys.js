function activationKeys(inputArray) {
 
    let activationKey = inputArray.shift();
 
    while (inputArray[0] != 'Generate') {
 
        let commandArray = inputArray.shift().split('>>>');
        let currentCommand = commandArray[0];
        let firstParameter = commandArray[1];
        let secondParameter = commandArray[2];
        let thirdParameter = commandArray[3];
 
        if (currentCommand == 'Contains') {
            contains(activationKey, firstParameter);
 
        } else if (currentCommand == 'Flip') {
            activationKey = flip(activationKey, firstParameter, secondParameter, thirdParameter);
 
        } else if (currentCommand == 'Slice') {
            activationKey = slice(activationKey, firstParameter, secondParameter);
        }
    }
 
    function contains(key, parameter) {
 
        if (key.includes(parameter)) {
            console.log(`${key} contains ${parameter}`);
 
        } else {
            console.log(`Substring not found!`);
        }
    }
 
    function flip(key, parameter1, parameter2, parameter3) {
 
        let changeCase = parameter1;
        let startIndex = Number(parameter2);
        let endIndex = Number(parameter3);
        let firstPart = key.substring(0, startIndex);
        let secondPart = key.substring(endIndex);
        let changingPart = key.substring(startIndex, endIndex);
 
        if (changeCase == 'Upper') {
            changingPart = changingPart.toUpperCase();
 
        } else if (changeCase == 'Lower') {
            changingPart = changingPart.toLowerCase();
        }
 
        let result = firstPart + changingPart + secondPart;
 
        console.log(result);
 
        return result;
    }
 
    function slice(key, parameter1, parameter2) {
 
        let startIndex = Number(parameter1);
        let endIndex = Number(parameter2);
 
        let firstPart = key.substring(0, startIndex);
        let secondPart = key.substring(endIndex);
 
        let result = firstPart + secondPart;
 
        console.log(result);
 
        return result;
    }
 
    console.log(`Your activation key is: ${activationKey}`);
}
 
// activationKeys(["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"]);
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);