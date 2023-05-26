function theLift(array) {
 
    let waitingPeople = Number(array[0]);
    let liftArray = array[1].split(' ').map(Number);
    let isEmptySpace = false;
 
    for (let i = 0; i < liftArray.length; i++) {
 
        let countElement = liftArray[i];
 
        if (countElement >= 4) {
            continue;
 
        } else {
 
            let diff = 4 - countElement;
 
            if (diff > waitingPeople) {
                let result = countElement + waitingPeople;
                liftArray.splice(i, 1, result);
                waitingPeople = 0;
 
                isEmptySpace = true;
 
                break;
            }
 
            if (waitingPeople > 0 && diff <= waitingPeople) {
                waitingPeople -= diff;
                let result = countElement + diff;
                liftArray.splice(i, 1, result);
            }
        }
    }
 
    function checkAndPrintResult(boolean, array, people){

        if (boolean) {
            console.log(`The lift has empty spots!`);
            console.log(array.join(' '));
     
        } else if (people > 0) {
            console.log(`There isn't enough space! ${people} people in a queue!`);
            console.log(array.join(' '));
     
        } else {
            console.log(array.join(' '));
        }
    }

    checkAndPrintResult(isEmptySpace, liftArray, waitingPeople);
}
 
theLift(["15", "0 0 0 0 0"]);
// theLift(["20","0 2 0"]);