function solve(input) {

    let index = 0;
    let number = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (number !== 'Stop') {

        let numberCount = Number(number);

        if (numberCount < minNumber) {

            minNumber = numberCount;
        }

        number = input[index];
        index++;
    }

    console.log(minNumber);
}

// solve(["100","99","80","70","Stop"]);
// solve(["-10","20","-30","Stop"]);
// solve(["45","-20","7","99","Stop"]);
// solve(["999","Stop"]);
solve(["-1", "-2", "Stop"]);