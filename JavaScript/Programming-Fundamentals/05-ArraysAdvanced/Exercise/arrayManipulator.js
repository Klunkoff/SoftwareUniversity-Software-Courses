function arrayManipulator(manipulatorArray, commandArray) {

    let index = 0;
    let commands = commandArray[index];
    index++;

    while (commands != 'print') {

        let countArray = commands.split(' ');
        let countCommand = countArray.shift();
        let countIndex = null;
        let element = null;

        switch (countCommand) {

            case 'add':

                countIndex = Number(countArray.shift());
                element = Number(countArray.shift());
                manipulatorArray.splice(countIndex, 0, element);

                break;

            case 'addMany':

                countIndex = Number(countArray.shift());
                countArray.reverse();

                for (let i = 0; i < countArray.length; i++) {

                    let countNum = Number(countArray[i]);
                    manipulatorArray.splice(countIndex, 0, countNum);
                }

                break;

            case 'contains':

                element = Number(countArray.shift());
                countIndex = manipulatorArray.indexOf(element);
                console.log(countIndex);

                break;

            case 'remove':

                countIndex = Number(countArray.shift());

                if (countIndex >= 0 && countIndex < manipulatorArray.length) {
                    manipulatorArray.splice(countIndex, 1);
                }

                break;

            case 'shift':

                element = Number(countArray.shift());

                for (let i = 0; i < element; i++) {

                    let changeNum = manipulatorArray.shift();
                    manipulatorArray.push(changeNum);
                }

                break;

            case 'sumPairs':

                let iterationNum = Math.ceil(manipulatorArray.length / 2);
                let newArray = [];

                for (let i = 1; i <= iterationNum; i++) {

                    if (manipulatorArray.length <= 1) {
                        let lastDigit = manipulatorArray.shift();
                        newArray.push(lastDigit);

                    } else {
                        let num1 = manipulatorArray.shift();
                        let num2 = manipulatorArray.shift();
                        let newNum = num1 + num2;
                        newArray.push(newNum);
                    }
                }

                manipulatorArray = newArray;
        }

        commands = commandArray[index];
        index++;
    }

    console.log(`[ ${manipulatorArray.join(', ')} ]`);
}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);