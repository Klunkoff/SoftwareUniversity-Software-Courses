function worldTour(inputArray) {

    let tourString = inputArray.shift();
    let command = inputArray.shift();

    let operationObject = {

        'Add Stop': addStop,
        'Remove Stop': removeStop,
        'Switch': switchF,
    };

    while (command !== 'Travel') {

        let currentCommandArray = command.split(':');
        let currentCommand = currentCommandArray[0];
        let firstParameter = currentCommandArray[1];
        let secondParameter = currentCommandArray[2];

        let operation = operationObject[currentCommand];
        tourString = operation(tourString, firstParameter, secondParameter);

        command = inputArray.shift();
    }
    
    function addStop(tourString, addStopIndex, addStopString) {

        addStopIndex = Number(addStopIndex);

        if (tourString.indexOf(addStopIndex)) {
            firstPartTourString = tourString.substring(0, addStopIndex);
            secondPartTourString = tourString.substring(addStopIndex);
            tourString = firstPartTourString + addStopString + secondPartTourString;
        }

        console.log(tourString);
        return tourString;
    }

    function removeStop(tourString, startIndex, endIndex) {

        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let isIndexesInRange = startIndex >= 0 && startIndex < tourString.length && endIndex >= 0 && endIndex < tourString.length;

        if (isIndexesInRange) {
            firstPartTourString = tourString.substring(0, startIndex);
            secondPartTourString = tourString.substring(endIndex + 1);
            tourString = firstPartTourString + secondPartTourString;
        }

        console.log(tourString);
        return tourString;
    }

    function switchF(tourString, oldString, newString) {

        if (tourString.includes(oldString)) {
            tourString = tourString.split(oldString).join(newString);
        }

        console.log(tourString);
        return tourString;
    }

    console.log(`Ready for world tour! Planned stops: ${tourString}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
    // worldTour(['Albania:Bulgaria:Cyprus:Deuchland',
    //     'Add Stop:3:Nigeria',
    //    'Remove Stop:4:8',
    //     'Switch:Albania: Azərbaycan',
    //     'Travel']);