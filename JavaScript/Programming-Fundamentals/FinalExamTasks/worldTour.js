function worldTour(inputArray) {

    let tourString = inputArray.shift();
    let command = inputArray.shift();

    while (command !== 'Travel') {

        let currentCommandArray = command.split(':');
        let currentCommand = currentCommandArray[0];
        let firstPartTourString = '';
        let secondPartTourString = '';

        switch (currentCommand) {

            case 'Add Stop':

                let addStopIndex = Number(currentCommandArray[1]);
                let addStopString = currentCommandArray[2];

                if (tourString.indexOf(addStopIndex)) {
                    firstPartTourString = tourString.substring(0, addStopIndex);
                    secondPartTourString = tourString.substring(addStopIndex);
                    tourString = firstPartTourString + addStopString + secondPartTourString;
                }

                console.log(tourString);

                break;

            case 'Remove Stop':

                let startIndex = Number(currentCommandArray[1]);
                let endIndex = Number(currentCommandArray[2]);
                let isIndexesInRange = startIndex >= 0 && startIndex < tourString.length && endIndex >= 0 && endIndex < tourString.length;

                if (isIndexesInRange) {
                    firstPartTourString = tourString.substring(0, startIndex);
                    secondPartTourString = tourString.substring(endIndex + 1);
                    tourString = firstPartTourString + secondPartTourString;
                }

                console.log(tourString);

                break;

            case 'Switch':

                let oldString = currentCommandArray[1];
                let newString = currentCommandArray[2];

                if (tourString.includes(oldString)) {
                    tourString = tourString.split(oldString).join(newString);
                }

                console.log(tourString);

                break;
        }

        command = inputArray.shift();
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