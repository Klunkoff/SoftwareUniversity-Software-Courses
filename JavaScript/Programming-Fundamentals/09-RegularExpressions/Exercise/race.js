function race(raceDataArray) {
 
    let racerArray = raceDataArray.shift().split(', ');
    let patternName = /[A-Za-z]+/g;
    let patternDistance = /[0-9]+/g;
    let raceObject = {};
 
    let command = raceDataArray.shift();
 
    while (command != 'end of race') {
 
        let currentName = command.match(patternName).join('');
        let currentDistance = command.match(patternDistance).join('');
 
        if (racerArray.includes(currentName)) {
 
            let distance = 0;
 
            for (let digits of currentDistance) {
 
                distance += Number(digits);
            }
 
            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = distance;
 
            } else {
                raceObject[currentName] += distance;
            }
        }
 
        command = raceDataArray.shift();
    }
 
    let sortedRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);
 
    let firstRacer = sortedRacers.shift().shift();
    let secondRacer = sortedRacers.shift().shift();
    let thirdRacer = sortedRacers.shift().shift();
 
    console.log(`1st place: ${firstRacer}`);
    console.log(`2nd place: ${secondRacer}`);
    console.log(`3rd place: ${thirdRacer}`);
}
 
// race(['George, Peter, Bill, Tom',
// 'G4e@55or%6g6!68e!!@ ',
// 'R1@!3a$y4456@',
// 'B5@i@#123ll',
// 'G@e54o$r6ge#',
// '7P%et^#e5346r',
// 'T$o553m&6',
// 'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);