function solve(input) {

    let index = 0;
    let numLowGrades = Number(input[index]);
    index++;
    let countProblems = input[index];
    index++;
    let countGrades = input[index];
    index++;

    let averageGrade = 0;
    let badGrade = 0;
    let numProblems = 0;
    let lastProblem = '';
    let isBadGrade = false;

    while (countProblems !== 'Enough') {

        numProblems++;
        lastProblem = countProblems;
        countGrades = Number(countGrades);
        averageGrade += countGrades;

        if (countGrades <= 4) {

            badGrade++;

            if (badGrade >= numLowGrades) {

                isBadGrade = true;

                break;
            }
        }

        countProblems = input[index];
        index++;
        countGrades = Number(input[index]);
        index++;
    }

    if (isBadGrade === true) {

        console.log(`You need a break, ${badGrade} poor grades.`);

    } else {

        console.log(`Average score: ${(averageGrade / numProblems).toFixed(2)}`);
        console.log(`Number of problems: ${numProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

solve(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
// solve(["2","Income","3","Game Info","6","Best Player","4"]);