function palindromeIntegers(originalArray) {

    let backwardNumArray = [];

    createBackwardNumArray(originalArray);
    checkArraysForEqualNum(originalArray, backwardNumArray);

    function createBackwardNumArray(array) {

        for (let i = 0; i < array.length; i++) {

            let countNum = String(array[i]);
            let convertedNum = "";

            for (let j = countNum.length - 1; j >= 0; j--) {

                let counter = (countNum[j]);
                convertedNum += counter;
            }

            backwardNumArray.push(convertedNum);
        }
    }

    function checkArraysForEqualNum(firstArray, secondArray) {

        for (let k = 0; k < firstArray.length; k++) {

            let checkNumFirstArray = firstArray[k];
            let checkNumSecondArray = secondArray[k];

            if (checkNumFirstArray == checkNumSecondArray) {
                console.log(`true`);

            } else {
                console.log(`false`);
            }
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32,2,232,1010]);