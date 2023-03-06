function pointsValidation(arrayOfNumbers) {

    let x1 = arrayOfNumbers[0];
    let y1 = arrayOfNumbers[1];
    let x2 = arrayOfNumbers[2];
    let y2 = arrayOfNumbers[3];

    let firstCheckResult = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let secondCheckResult = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let thirdCheckResult = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (firstCheckResult == parseInt(firstCheckResult)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);

    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondCheckResult == parseInt(secondCheckResult)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);

    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdCheckResult == parseInt(thirdCheckResult)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);

    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);