function lastKNumbersSequence(iterator, number) {
 
    let result = [1];
 
    for (let i = 0; i < iterator - 1; i++) {
 
        let sum = 0;
        let elements = result.slice(-number);
        elements.forEach((a) => sum += a);
 
        result.push(sum);
    }
 
    return result;
}
 
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));