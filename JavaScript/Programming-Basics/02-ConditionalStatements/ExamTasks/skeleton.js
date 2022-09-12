function solve(input) {

    let controlMinutes = Number(input[0]);
    let controlInSeconds = Number(input[1]);
    let lenghtTrace = Number(input[2]);
    let secondsFor100Meters = Number(input[3]);

    let totalControlInSeconds = (controlMinutes * 60) + controlInSeconds;
    let delayInSeconds = (lenghtTrace / 120) * 2.5;
    let marinTime = ((lenghtTrace / 100) * secondsFor100Meters) - delayInSeconds;

    if (marinTime <= totalControlInSeconds) {

        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinTime.toFixed(3)}.`);

    } else {

        let result = marinTime - totalControlInSeconds;
        console.log(`No, Marin failed! He was ${result.toFixed(3)} second slower.`);
    }
}

solve(["2", "12", "1200", "10"]);
solve(["1", "20", "1546", "12"]);