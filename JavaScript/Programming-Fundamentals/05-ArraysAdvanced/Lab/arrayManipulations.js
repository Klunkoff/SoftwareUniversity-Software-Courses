function arrayManipulations(inputArray) {

    let arrayToManipulate = inputArray
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < inputArray.length; i++) {

        let [command, firstNum, secondNum] = inputArray[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {

            case 'Add': arrayToManipulate.push(firstNum); break;
            case 'Remove': arrayToManipulate = arrayToManipulate.filter(num => num != firstNum); break;
            case 'RemoveAt': arrayToManipulate.splice(firstNum, 1); break;
            case 'Insert': arrayToManipulate.splice(secondNum, 0, firstNum); break;
        }
    }

    console.log(arrayToManipulate.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);