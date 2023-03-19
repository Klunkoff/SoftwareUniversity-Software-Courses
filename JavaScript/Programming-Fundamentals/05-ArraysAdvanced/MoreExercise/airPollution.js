function airPollution(stringMapArray, commandsArray) {

    let matrixSofiaMap = [];
    let pollutionArray = [];

    let commandObject = {

        'breeze': breeze,
        'gale': gale,
        'smog': smog,
    };

    stringMapArray.forEach((el) => {

        el = el.split(' ').map(Number);
        matrixSofiaMap.push(el);
    });

    for (command of commandsArray) {

        let [currentCommand, currentParameter] = command.split(' ');
        currentParameter = Number(currentParameter);
        let pollutionType = commandObject[currentCommand];
        pollutionType(currentParameter);
    }

    checkPollutedAreas();

    function breeze(index) {

        let breezedRow = matrixSofiaMap[index].map((el) => {

            el -= 15;

            if (el < 0) {
                el = 0;
            }

            return el;
        });

        matrixSofiaMap[index] = breezedRow;
    }

    function gale(index) {

        for (let i = 0; i < matrixSofiaMap.length; i++) {

            matrixSofiaMap[i][index] -= 20;

            if (matrixSofiaMap[i][index] < 0) {
                matrixSofiaMap[i][index] = 0;
            }
        }
    }

    function smog(value) {

        for (let j = 0; j < matrixSofiaMap.length; j++) {

            let smogedArea = matrixSofiaMap[j].map((el) => el += value);
            matrixSofiaMap[j] = smogedArea;
        }
    }

    function checkPollutedAreas() {

        for (let k = 0; k < matrixSofiaMap.length; k++) {

            for (let z = 0; z < matrixSofiaMap.length; z++) {

                let checkedArea = matrixSofiaMap[k][z];

                if (checkedArea >= 50) {
                    pollutionArray.push(`[${k}-${z}]`);
                }
            }
        }
    }

    if (pollutionArray.length == 0) {
        console.log(`No polluted areas`);

    } else {
        console.log(`Polluted areas: ${pollutionArray.join(', ')}`);
    }
}

airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);
airPollution(['5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
airPollution(['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);