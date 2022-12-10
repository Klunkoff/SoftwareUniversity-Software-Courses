function solve(input) {

    let index = 0;
    let judgeNum = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;

    let allGradeNum = 0;
    let allGrade = 0;

    while (presentationName !== 'Finish') {

        let averageGrade = 0;

        for (i = 1; i <= judgeNum; i++) {

            let countGrade = Number(input[index]);
            index++;
            averageGrade += countGrade;
            allGrade += countGrade;
            allGradeNum++;
        }

        let presentationResult = averageGrade / judgeNum;

        console.log(`${presentationName} - ${presentationResult.toFixed(2)}.`);

        presentationName = input[index];
        index++;
    }

    let finalResult = allGrade / allGradeNum;

    console.log(`Student's final assessment is ${finalResult.toFixed(2)}.`);
}

solve(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
// solve(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"]);
// solve(["2","Objects and Classes","5.77","4.23","Dictionaries","4.62","5.02",
// "RegEx","2.88","3.42","Finish"]);