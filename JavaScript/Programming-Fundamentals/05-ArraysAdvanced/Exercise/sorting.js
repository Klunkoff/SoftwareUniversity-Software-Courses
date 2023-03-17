function sorting(array) {
 
    let increasingArray = array.slice().sort((a, b) => a - b);
    let modifiedArray = [];
 
    for (let i = 0; i < array.length / 2; i++) {
 
        modifiedArray.push(increasingArray.pop());
        modifiedArray.push(increasingArray.shift());
    }
 
    console.log(modifiedArray.join(' '));
}
 
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);