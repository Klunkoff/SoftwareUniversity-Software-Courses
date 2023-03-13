function bombNumbers(fieldArray, bombArray) {

    let newFieldArray = fieldArray.slice();
    let sumOfFieldElement = 0;

    for (let i = 0; i < newFieldArray.length; i++) {

        let fieldElement = newFieldArray[i];

        if (fieldElement == bombArray[0]) {
            let start = i - bombArray[1];
            let end = bombArray[1] * 2 + 1;

            if (start < 0) {
                start = 0;
                end = bombArray[1] + 1;
            }

            newFieldArray.splice(start, end);
        }
    }

    for (let element of newFieldArray) {
        sumOfFieldElement += element;
    }

    console.log(sumOfFieldElement);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// bombNumbers([3, 4, 5, 1, 3, 1, 2], [3, 3]);