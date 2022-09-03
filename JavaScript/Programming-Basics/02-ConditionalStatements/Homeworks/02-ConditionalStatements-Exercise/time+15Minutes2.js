function solve(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = (hours * 60) + (minutes + 15);

    let newHour = Math.floor(totalMinutes / 60);
    let newminutes = (totalMinutes % 60);

    if (newHour > 23) {

        newHour = 0;
    }

    if (newminutes < 10) {

        console.log(`${newHour}:0${newminutes}`);

    } else {

        console.log(`${newHour}:${newminutes}`);
    }
}

solve(['23', '47']);