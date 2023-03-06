function pointsValidation(arrayOfNumbers) {

    let x1 = arrayOfNumbers[0];
    let y1 = arrayOfNumbers[1];
    let x2 = arrayOfNumbers[2];
    let y2 = arrayOfNumbers[3];

    let firstCheckResult = calculateFirstDistance(x1, y1);
    let secondCheckResult = calculateSecondDistance(x2, y2);
    let thirdCheckResult = calculateThirdDistance(x1, y1, x2, y2);

    checkAndPrintResult(firstCheckResult, secondCheckResult, thirdCheckResult);

    function calculateFirstDistance(x, y) {
        let result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        return result;
    }

    function calculateSecondDistance(x, y) {
        let result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        return result;
    }

    function calculateThirdDistance(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        return result;
    }

    function checkAndPrintResult(firstCheck, secondCheck, thirdCheck) {
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
}

// pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);