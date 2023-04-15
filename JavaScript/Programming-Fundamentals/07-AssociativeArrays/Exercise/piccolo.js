function piccolo(parkingDataArray) {
 
    let parkingObject = {};
 
    for (let carMoving of parkingDataArray) {
 
        let [currentCommand, currentCar] = carMoving.split(', ');
 
        switch (currentCommand) {
 
            case 'IN':
 
                let value = [];

                let currentValuesArray = currentCar.split('');
                let currentValueDigits = Number(currentValuesArray.splice(2, 4).join(''));
                let currentValueChars = currentValuesArray.join('');
                value.push(currentValueChars, currentValueDigits);
                parkingObject[currentCar] = value;
 
                break;
 
            case 'OUT':
 
                delete parkingObject[currentCar];
 
                break;
        }
    }
 
    let sortedCarArray = Object.entries(parkingObject).sort((a, b) => {

        let array1 = a[1];
        let string1 = array1[0];

        let array2 = b[1];
        let string2 = array2[0];

        let number1 = array1[1];
        let number2 = array2[1];

        return number1 - number2 || string1.localeCompare(string2);
    });
 
    if (sortedCarArray.length == 0) {
        console.log(`Parking Lot is Empty`);
 
    } else {
        
        for (let [key] of sortedCarArray) {
            console.log(key);
        }
    }
}
 
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']);