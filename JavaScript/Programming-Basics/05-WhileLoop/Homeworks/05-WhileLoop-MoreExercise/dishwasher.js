function solve(input) {

    let index = 0;
    let bottle = Number(input[index]);
    index++;

    let detergent = bottle * 750;
    let washedDishes = 0;
    let washedPots = 0;
    let countDishes = 0;
    let isDetergentOver = false;

    let entryData = input[index];

    while (entryData !== 'End') {

        let countDetergent = Number(entryData);
        index++;

        countDishes++;

        if (countDishes % 3 === 0) {

            detergent -= countDetergent * 15;
            washedPots += countDetergent;

        } else {

            detergent -= countDetergent * 5;
            washedDishes += countDetergent;
        }

        if (detergent < 0) {

            isDetergentOver = true;

            break;
        }

        entryData = input[index];
    }

    if (isDetergentOver) {

        let result = Math.abs(detergent);

        console.log(`Not enough detergent, ${result} ml. more necessary!`);

    } else {

        console.log(`Detergent was enough!`);
        console.log(`${washedDishes} dishes and ${washedPots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    }
}

solve(["2", "53", "65", "55", "End"]);
// solve(["1", "10", "15", "10", "12", "13", "30"]);