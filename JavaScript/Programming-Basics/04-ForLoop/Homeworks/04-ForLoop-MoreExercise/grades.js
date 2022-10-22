function solve(input) {

    let index = 0;
    let studentsNum = Number(input[index]);
    index++;

    let topStudents = 0;
    let nearTopStudents = 0;
    let averageStudents = 0;
    let failStudents = 0;
    let averageGrade = 0;

    for (let i = 1; i <= studentsNum; i++) {

        let countGrade = Number(input[index]);
        index++;
        averageGrade += countGrade;

        if (countGrade < 3) {
            failStudents++;
        } else if (countGrade < 4) {
            averageStudents++;
        } else if (countGrade < 5) {
            nearTopStudents++;
        } else {
            topStudents++;
        }
    }

    let percentTopStudents = (topStudents / studentsNum) * 100;
    let percentnearTopStudents = (nearTopStudents / studentsNum) * 100;
    let percentAverageStudents = (averageStudents / studentsNum) * 100;
    let percentFailStudents = (failStudents / studentsNum) * 100;
    let resultAverageGrade = averageGrade / studentsNum;

    console.log(`Top students: ${percentTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentnearTopStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentAverageStudents.toFixed(2)}%`);
    console.log(`Fail: ${percentFailStudents.toFixed(2)}%`);
    console.log(`Average: ${resultAverageGrade.toFixed(2)}`);
}

solve(["10", '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);
// solve(["6", '2', '3', '4', '5', '6', '2.2']);