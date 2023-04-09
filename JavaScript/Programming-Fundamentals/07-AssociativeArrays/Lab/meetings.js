function meetings(arrayInfo) {

    let scheduleObject = {};

    for (let element of arrayInfo) {

        let [currentDay, currentName] = element.split(' ');

        if (!scheduleObject.hasOwnProperty(currentDay)) {
            scheduleObject[currentDay] = currentName;
            console.log(`Scheduled for ${currentDay}`);

        } else {
            console.log(`Conflict on ${currentDay}!`);
        }
    }

    for (let day in scheduleObject) {

        console.log(`${day} -> ${scheduleObject[day]}`);
    }
}

// meetings(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);