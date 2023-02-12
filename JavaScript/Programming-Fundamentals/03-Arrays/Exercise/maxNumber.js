function maxNumber(array) {

    let result = '';
    let newArray = array;
    newArray.push(Number.MIN_SAFE_INTEGER);

    for (let i = 0; i < newArray.length; i++) {

        let firstCountNum = newArray[i];
        let tempBigNum = 0;

        for (let j = i + 1; j < newArray.length; j++) {

            let secondCountNum = newArray[j];

            if (firstCountNum > secondCountNum) {
                tempBigNum = firstCountNum;

            } else {
                break;
            }

            if (j == newArray.length - 1) {
                result += tempBigNum + ' ';
            }
        }
    }
    
    console.log(result);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);