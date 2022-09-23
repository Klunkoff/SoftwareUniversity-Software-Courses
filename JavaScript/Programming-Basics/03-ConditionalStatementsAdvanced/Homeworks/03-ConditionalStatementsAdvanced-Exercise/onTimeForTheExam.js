function solve(input) {

    let hoursExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hoursArrival = Number(input[2]);
    let minutesArrival = Number(input[3]);

    let timeExamMin = hoursExam * 60 + minutesExam;
    let timeArrivalMin = hoursArrival * 60 + minutesArrival;

    let difference = Math.abs(timeArrivalMin - timeExamMin);
    let h = Math.floor(difference / 60);
    let m = difference % 60;

    if (timeArrivalMin > timeExamMin) {
        console.log(`Late`);

        if (difference >= 60) {

            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }

        } else {
            console.log(`${m} minutes after the start`);
        }

    } else if (timeArrivalMin === timeExamMin || difference <= 30) {
        console.log(`On time`);

        if (difference > 0) {
            console.log(`${m} minutes before the start`);
        }

    } else {
        console.log(`Early`);

        if (difference >= 60) {

            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }

        } else {
            console.log(`${m} minutes before the start`);
        }
    }
}

solve(['16', '00', '15', '00']);