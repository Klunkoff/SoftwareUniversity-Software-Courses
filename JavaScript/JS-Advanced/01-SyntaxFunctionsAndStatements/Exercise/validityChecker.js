function validityChecker(x1, y1, x2, y2) {
 
    let firstCheck = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let secondCheck = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let thirdCheck = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
 
    if (firstCheck == parseInt(firstCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (secondCheck == parseInt(secondCheck)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (thirdCheck == parseInt(thirdCheck)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
 
// validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);
validityChecker(3.3, 0, 0, 4);