function sumFirstAndLast(array) {
 
    let newArray = array.map(Number);
    let firstElement = newArray.shift();
    let lastElement = newArray.pop();
 
    let result = firstElement + lastElement;
 
    console.log(result);
}
 
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);