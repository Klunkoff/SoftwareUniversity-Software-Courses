function smallestTwoNumbers(arrayOfNums) {

    let sortedArray = arrayOfNums.sort((a, b) => (a - b));
    let firstTwoSmallElements = sortedArray.slice(0, 2);

    console.log(firstTwoSmallElements.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);