function flightSchedule(inputData) {
 
    let allFlights = inputData.shift();
    let changedFlights = inputData.shift();
    let flightStatus = String(inputData.shift());
 
    let allFlightsObjectArray = [];
 
    for (let flight of allFlights) {
 
        let currentFlight = flight.split(' ');
        let currentFlightNumber = currentFlight.shift();
        let currentDestination = currentFlight.join(' ');
 
        let currentObject = {
 
            Number: currentFlightNumber,
            Destination: currentDestination,
            Status: 'Ready to fly',
        }
 
        allFlightsObjectArray.push(currentObject);
    }
 
    for (let flight of changedFlights) {
 
        let currentFlight = flight.split(' ').shift();
 
        for (let flight of allFlightsObjectArray) {
 
            if (flight.Number == currentFlight) {
                flight.Status = 'Cancelled';
            }
        }
    }
 
    for (let flight of allFlightsObjectArray) {
 
        delete flight.Number;
 
        if (flightStatus === 'Cancelled' && flight.Status === 'Cancelled') {
            console.log(flight);
 
        } else if (flightStatus === 'Ready to fly' && flight.Status === 'Ready to fly') {
            console.log(flight);
        }
    }
}
 
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);
// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']
// ]);
