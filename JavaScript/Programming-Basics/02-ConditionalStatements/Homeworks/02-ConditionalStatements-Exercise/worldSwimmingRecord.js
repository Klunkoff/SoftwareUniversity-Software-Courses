function solve(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsForOneMeters = Number(input[2]);

    let numberSwimDelay = Math.floor(distanceInMeters / 15);
    let overallDelay = numberSwimDelay * 12.5;
    let ivanTempo = (distanceInMeters * secondsForOneMeters) + overallDelay;

    if (ivanTempo < recordInSeconds) {

        console.log(`Yes, he succeeded! The new world record is ${ivanTempo.toFixed(2)} seconds.`);

    } else {

        let result = ivanTempo - recordInSeconds;
        console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`);
    }
}

solve(['10464', '1500', '20']);
solve(['55555.67', '3017', '5.03']);