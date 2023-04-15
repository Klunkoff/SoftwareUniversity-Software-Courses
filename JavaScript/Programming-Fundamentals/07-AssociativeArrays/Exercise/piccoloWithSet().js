function piccoloWithSet(parkingArray) {
 
    let parking = new Set();
 
    for (let carMovement of parkingArray) {
 
        let [direction, carNumber] = carMovement.split(', ');
 
        switch (direction) {
 
            case 'IN': parking.add(carNumber); break;
            case 'OUT': parking.delete(carNumber); break;
        }
    }
 
    let sortedParking = Array.from(parking.values()).sort();
 
    if (sortedParking.length === 0) {
        console.log(`Parking Lot is Empty`);
 
    } else {
 
        for (let sortedCars of sortedParking) {
            console.log(sortedCars);
        }
    }
}
 
piccoloWithSet(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccoloWithSet(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);