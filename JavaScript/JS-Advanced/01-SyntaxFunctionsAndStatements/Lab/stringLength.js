function stringLength(firstString, secondString, thirdString) {

    let stringsLengthSum = firstString.length + secondString.length + thirdString.length;
    let averageLength = Math.floor(stringsLengthSum / 3);

    console.log(stringsLengthSum);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');