function solve(input) {

    let record = Number(input[0]);
    let lenght = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let overalTime = timeForMeter * lenght;
    let delay = Math.floor(lenght / 50) * 30;

    let totalTime = overalTime + delay;

    if (totalTime >= record) {

        let result = totalTime - record;
        console.log(`No! He was ${result.toFixed(2)} seconds slower.`)

    } else {

        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }
}

solve(["10164", "1400", "25"]);
solve(["5554.36", "1340", "3.23"]);
solve(["1377", "389", "3"]);