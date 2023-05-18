function arrayModifier(array) {

    let newArray = array.slice();
    let workingArray = newArray
        .shift()
        .split(' ')
        .map(Number);

    let index = 0;
    let commandWithAction = newArray[index];
    index++;

    while (commandWithAction != 'end') {

        let countArray = commandWithAction.split(' ');
        let command = countArray[0];
        let index1 = Number(countArray[1]);
        let index2 = Number(countArray[2]);

        switch (command) {

            case 'swap':

                let biggestIndex = Math.max(index1, index2);
                let smallestIndex = Math.min(index1, index2);

                let firstElementToTake = Number(workingArray.splice(biggestIndex, 1));
                let secondElementToTake = Number(workingArray.splice(smallestIndex, 1));

                workingArray.splice(smallestIndex, 0, firstElementToTake);
                workingArray.splice(biggestIndex, 0, secondElementToTake);

                break;

            case 'multiply':

                let firstMultiplier = workingArray[index1];
                let secondMultiplier = workingArray[index2];
                let result = firstMultiplier * secondMultiplier;
                workingArray.splice(index1, 1, result);

                break;

            case 'decrease':

                let mappedArray = workingArray.map((a) => a - 1);
                workingArray = mappedArray;

                break;
        }

        commandWithAction = newArray[index];
        index++;
    }

    console.log(workingArray.join(', '));
}

// arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0',
//     'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
arrayModifier(['1 2 3 4','swap 0 1','swap 1 2','swap 2 3','multiply 1 2',
'decrease','end']);