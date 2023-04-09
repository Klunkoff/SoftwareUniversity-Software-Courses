function meetingsWithMap(arrayInfo) {

    let scheduleMap = new Map();

    for (let element of arrayInfo) {

        [currentDay, currentName] = element.split(' ');

        if (!scheduleMap.has(currentDay)) {
            scheduleMap.set(currentDay, currentName);
            console.log(`Scheduled for ${currentDay}`);

        } else {
            console.log(`Conflict on ${currentDay}!`);
        }
    }

    for (let [day, name] of scheduleMap) {

        console.log(`${day} -> ${name}`);
    }
}

meetingsWithMap(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
// meetingsWithMap(['Friday Bob',
//     'Saturday Ted',
//     'Monday Bill',
//     'Monday John',
//     'Wednesday George']);