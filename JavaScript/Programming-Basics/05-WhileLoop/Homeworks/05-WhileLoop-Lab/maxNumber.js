function solve(input) {

    let index = 0;
    let entryData = input[index];
    let smallestNum = Number.MIN_SAFE_INTEGER;
    let bigNumber = smallestNum;

    while (entryData !== 'Stop') {

        entryData = (input[index]);

        if (entryData > bigNumber) {

            bigNumber = Number(entryData);
        }

        index++;
    }

    console.log(bigNumber);
}

// solve(["100","99","80","70","Stop"]);
solve(["-10", "20", "-30", "Stop"]);
// solve(["45","-20","7","99","Stop"]);
// solve(["999","Stop"]);
// solve(["-1","-2","Stop"]);