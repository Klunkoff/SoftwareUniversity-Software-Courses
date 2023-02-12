function ladybugs(ladybugsArray) {

    let fieldSize = ladybugsArray.shift();
    let ladybugsIndexArray = ladybugsArray.shift().split(' ').map(Number);
    let commandArray = ladybugsArray.slice();
    let fieldArray = [];

    for (let i = 0; i < fieldSize; i++) {
        fieldArray.push(0);
    }

    for (let element of ladybugsIndexArray) {

        if (element >= 0 && element < fieldArray.length) {
            fieldArray.splice(element, 1, 1);
        }
    }

    for (let j = 0; j < commandArray.length; j++) {

        let currentCommandArray = commandArray[j].split(' ');
        let currentLadybugIndex = (Number(currentCommandArray.shift()));
        let currentDirection = currentCommandArray.shift();
        let currentFlyLength = (Number(currentCommandArray.shift()));

        if (currentLadybugIndex >= 0 && currentLadybugIndex < fieldArray.length) {

            let checkForLadybugs = fieldArray[currentLadybugIndex];

            if (checkForLadybugs !== 0) {

                if (currentDirection === 'right') {

                    fieldArray.splice(currentLadybugIndex, 1, 0);

                    for (let k = currentLadybugIndex + currentFlyLength; k < fieldArray.length; k += currentFlyLength) {

                        let currentSpot = fieldArray[k];

                        if (currentSpot === 0) {
                            fieldArray.splice(k, 1, 1);

                            break;
                        }
                    }

                } else if (currentDirection === 'left') {

                    fieldArray.splice(currentLadybugIndex, 1, 0);

                    if (currentFlyLength >= 0) {

                        for (let z = currentLadybugIndex - currentFlyLength; z >= 0; z -= currentFlyLength) {

                            let currentSpot = fieldArray[z];

                            if (currentSpot === 0) {
                                fieldArray.splice(z, 1, 1);

                                break;
                            }
                        }

                    } else {

                        currentFlyLength = Math.abs(currentFlyLength);

                        for (let z = currentLadybugIndex + currentFlyLength; z < fieldArray.length; z += currentFlyLength) {

                            let currentSpot = fieldArray[z];

                            if (currentSpot === 0) {
                                fieldArray.splice(z, 1, 1);

                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(fieldArray.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);