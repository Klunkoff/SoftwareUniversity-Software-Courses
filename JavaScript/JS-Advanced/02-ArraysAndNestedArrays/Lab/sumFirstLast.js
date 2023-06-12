function sumFirstLast(array) {
 
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
 
    let result = firstElement + lastElement;
 
    return result;
}
 
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));