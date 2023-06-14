function extractIncreasingSubsetFromArray(arrayOfNums) {
 
    let result = [arrayOfNums[0]];
 
    for (let i = 1; i < arrayOfNums.length; i++) {
 
        let element = arrayOfNums[i];
 
        if (element >= result[result.length - 1]) {
            result.push(element);
        }
    }
 
    return result;
}
 
console.log(extractIncreasingSubsetFromArray([1, 3, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
console.log(extractIncreasingSubsetFromArray([1, 1, 2, 2]));