function searchForANumber(firstArray, secondArray) {

    let firstArrayManipulator = secondArray[0];
    let secondArrayManipulator = secondArray[1];
    let searchedNum = secondArray[2];

    let searchedNumCount = 0;

    let slicedArray = firstArray.slice(0, firstArrayManipulator);
    slicedArray.splice(0, secondArrayManipulator);

    for (let number of slicedArray) {

        if (number == searchedNum) {
            searchedNumCount++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${searchedNumCount} times.`);
}

// searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);