function bombNumbers(fieldArray, bombArray) {
 
    let newFieldArray = fieldArray.slice();
    let bombNumber = bombArray[0];
    let bombRange = bombArray[1];
 
    let sumOfFieldElement = 0;
 
    while (newFieldArray.includes(bombNumber)) {
 
        let bombIndex = newFieldArray.indexOf(bombNumber);
        let startPoint = bombIndex - bombRange;
        let elementsToRemove = bombRange * 2 + 1;
 
        if (startPoint < 0) {
            startPoint = 0;
            elementsToRemove += bombIndex;
        }
 
        newFieldArray.splice(startPoint, elementsToRemove);
    }
 
    for (let element of newFieldArray) {
        sumOfFieldElement += element;
    }
 
    console.log(sumOfFieldElement);
}
 
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([2, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// bombNumbers([3, 4, 5, 1, 3, 1, 2], [3, 3]);