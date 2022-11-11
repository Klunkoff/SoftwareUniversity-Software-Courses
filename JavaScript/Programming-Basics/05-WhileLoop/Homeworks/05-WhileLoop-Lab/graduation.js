function solve(input) {

    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++;

    let averageGrade = 0;
    let badClass = 0;
    let classCount = 1;

    while (classCount <= 12) {

        let gradeCount = Number(grade);

        if (gradeCount >= 4) {

            averageGrade += gradeCount;

        } else {

            badClass++;
        }

        if (badClass > 1) {

            classCount--;
            console.log(`${name} has been excluded at ${classCount} grade`);

            break;
        }

        if (classCount >= 12) {

            averageGrade = averageGrade / 12;
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);

            break;
        }

        classCount++;
        grade = Number(input[index]);
        index++;
    }
}

// solve(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);
solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);