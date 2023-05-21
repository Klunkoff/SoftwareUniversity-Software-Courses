function movingTarget(stringArray) {
 
    let commandArray = stringArray.slice();
    let targetArray = commandArray.shift().split(' ').map(Number);
 
    let index = 0;
    let command = commandArray[index];
    index++;
 
    while (command != 'End') {
 
        let CountCommandArray = command.split(' ');
        let countCommand = CountCommandArray[0];
        let countIndex = Number(CountCommandArray[1]);
        let countManipulator = Number(CountCommandArray[2]);
 
        switch (countCommand) {
 
            case 'Shoot':
 
                if (countIndex >= 0 && countIndex < targetArray.length) {
                    let target = targetArray.splice(countIndex, 1);
                    let result = target - countManipulator;
 
                    if (result > 0) {
                        targetArray.splice(countIndex, 0, result);
                    }
                }
 
                break;
 
            case 'Add':
 
                if (countIndex >= 0 && countIndex < targetArray.length) {
                    targetArray.splice(countIndex, 0, countManipulator);
 
                } else {
                    console.log(`Invalid placement!`);
                }
 
                break;
 
            case 'Strike':
 
                let isInRange = (countIndex + countManipulator) < targetArray.length && (countIndex - countManipulator) >= 0;
 
                if (isInRange) {
                    let startIndex = countIndex - countManipulator;
                    let elementsToMove = (countManipulator * 2) + 1;
 
                    targetArray.splice(startIndex, elementsToMove)
 
                } else {
                    console.log(`Strike missed!`);
                }
 
                break;
        }
 
        command = commandArray[index];
        index++;
    }
 
    console.log(targetArray.join('|'));
}
 
// movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);