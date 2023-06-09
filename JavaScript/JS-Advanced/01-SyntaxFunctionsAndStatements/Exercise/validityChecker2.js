function validityChecker2(x1, y1, x2, y2) {
 
    firstChecker(x1, y1);
    secondChecker(x2, y2);
    thirdChecker(x1, y1, x2, y2);
 
    function firstChecker(x, y) {
 
        let firstCheck = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
 
        if (firstCheck == parseInt(firstCheck)) {
            return console.log(`{${x}, ${y}} to {0, 0} is valid`);
        } else {
            return console.log(`{${x}, ${y}} to {0, 0} is invalid`);
        }
    }
 
    function secondChecker(x, y) {
 
        let secondCheck = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
 
        if (secondCheck == parseInt(secondCheck)) {
            return console.log(`{${x}, ${y}} to {0, 0} is valid`);
        } else {
            return console.log(`{${x}, ${y}} to {0, 0} is invalid`);
        }
    }
 
    function thirdChecker(x1, y1, x2, y2) {
 
        let thirdCheck = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
 
        if (thirdCheck == parseInt(thirdCheck)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}
 
// validityChecker2(3, 0, 0, 4);
// validityChecker2(2, 1, 1, 1);
validityChecker2(3.3, 0, 0, 4);