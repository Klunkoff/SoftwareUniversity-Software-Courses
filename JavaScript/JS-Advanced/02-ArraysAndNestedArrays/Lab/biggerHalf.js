function biggerHalf(arrayOfNums) {
 
    let sortedArray = arrayOfNums.sort((a, b) => a - b);
    let halfDividor = Math.floor(arrayOfNums.length / 2);
    let result = sortedArray.slice(halfDividor);
 
    return result;
}
 
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));