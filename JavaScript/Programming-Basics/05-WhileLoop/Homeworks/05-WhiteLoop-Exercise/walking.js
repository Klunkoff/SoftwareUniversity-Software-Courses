function solve(input) {

    let index = 0;
    let entryData = input[index];
    index++;

    let stepsSum = 0;

    while (stepsSum < 10000) {

        if (entryData !== 'Going home') {

            entryData = Number(entryData);
            stepsSum += entryData;
            entryData = input[index];
            index++;

        } else {

            entryData = input[index];
            entryData = Number(entryData);
            stepsSum += entryData;

            break;
        }
    }

    let result = Math.abs(stepsSum - 10000);

    if (stepsSum >= 10000) {

        console.log(`Goal reached! Good job!`);
        console.log(`${result} steps over the goal!`);

    } else {

        console.log(`${result} more steps to reach goal.`);
    }
}

// solve(["1000","1500","2000","6500"]);
// solve(["1500","3000","250","1548","2000","Going home","2000"]);
// solve(["1500","300","2500","3000","Going home","200"]);
solve(["125", "250", "4000", "30", "2678", "4682"]);