function solve(input) {

    let index = 0;
    let entryData = input[index];
    index++;

    let peopleNum = Number(entryData);
    let bestPoints = 0;
    let bestMan = "";

    for (let i = 1; i <= peopleNum; i++) {

        let countName = input[index];
        index++;

        let currentName = countName;
        let peoplePoints = 0;
        let countGrade = countName;

        while (countGrade !== 'Stop') {

            countGrade = Number(input[index]);
            index++;
            peoplePoints += countGrade;
            countGrade = input[index];
        }

        console.log(`${currentName} has ${peoplePoints} points.`);

        if (peoplePoints > bestPoints) {

            bestPoints = peoplePoints;
            bestMan = currentName;

            console.log(`${bestMan} is the new number 1!`);
        }

        countName = input[index];
        index++;
    }

    console.log(`${bestMan} won competition with ${bestPoints} points!`);
}

// solve(["3","Chef Manchev", "10","10","10","10","Stop","Natalie","8","2","9",
// "Stop","George","9","2","4","2","Stop"]);
solve(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10",
    "10", "10", "Stop"]);