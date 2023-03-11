function lastKNumbersSequence(n, k) {
 
    let array = [1];
 
    for (let i = 1; i < n; i++) {
 
        let slicedArray = array.slice(-k);
        let sumSlicedArray = 0;
 
        for (let j of slicedArray) {
            sumSlicedArray += j;
        }
 
        array.push(sumSlicedArray);
    }
 
    console.log(array.join(' '));
}
 
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);