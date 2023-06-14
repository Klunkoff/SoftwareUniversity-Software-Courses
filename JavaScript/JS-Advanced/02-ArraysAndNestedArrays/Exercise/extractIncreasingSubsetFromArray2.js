function extractIncreasingSubsetFromArray2(arrayOfNums) {
 
    let maxElement = Number.MIN_SAFE_INTEGER;
    
    let result = arrayOfNums.filter((a) => {
 
        if (a >= maxElement) {
 
            maxElement = a;
            return true;
        } 
 
        return false;
    });
 
    return result;
}
 
console.log(extractIncreasingSubsetFromArray2([1, 3, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArray2([1, 2, 3, 4]));
console.log(extractIncreasingSubsetFromArray2([20, 3, 2, 15, 6, 1]));
console.log(extractIncreasingSubsetFromArray2([1, 1, 2, 2]));