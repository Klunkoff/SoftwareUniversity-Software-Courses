function roadRadar(driverSpeed, area) {
 
    areaLimitsObject = {
 
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
 
    let difference = areaLimitsObject[area] - driverSpeed;
 
    if (difference >= 0) {
        console.log(`Driving ${driverSpeed} km/h in a ${areaLimitsObject[area]} zone`);
 
    } else {
        difference = Math.abs(difference);
        let status = statusChecker(difference);
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaLimitsObject[area]} - ${status}`);
    }
 
    function statusChecker(speedDiff) {
 
        if (speedDiff <= 20) {
            return 'speeding';
 
        } else if (speedDiff <= 40) {
            return 'excessive speeding';
 
        } else {
            return 'reckless driving';
        }
    }
}
 
// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
roadRadar(200, 'motorway');