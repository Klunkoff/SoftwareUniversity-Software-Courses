function negativeOrPositiveNumbers(array) {
 
    let newArray = [];
 
    for (let element of array) {
 
        let elementToNum = Number(element);
 
        if (elementToNum < 0) {
            newArray.unshift(elementToNum);
 
        } else {
            newArray.push(elementToNum);
        }
    }
 
    console.log(newArray.join('\n'));
}
 
// negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);