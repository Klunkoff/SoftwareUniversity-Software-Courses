function equalArrays(firstArray, secondArray) {

    let sumFirstArray = 0;
    let lastIndex = 0;
    let isNotEqual = false;

    for (let i = 0; i < firstArray.length; i++) {

        let countNumFirstArray = Number(firstArray[i]);
        let countNumSecondArray = Number(secondArray[i]);

        if (countNumFirstArray == countNumSecondArray) {

            sumFirstArray += countNumFirstArray;

        } else {

            lastIndex = i;
            isNotEqual = true;

            break;
        }
    }

    if (isNotEqual) {

        console.log(`Arrays are not identical. Found difference at ${lastIndex} index`);

    } else {

        console.log(`Arrays are identical. Sum: ${sumFirstArray}`);
    }
}

// equalArrays(['10','20','30'], ['10','20','30']);
// equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);