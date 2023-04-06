function schoolRegister(inputArray) {
 
    let schoolObject = {};
 
    for (let student of inputArray) {
 
        let currentStudentArray = student.split(', ');
        let name = currentStudentArray[0].split(': ')[1];
        let grade = Number(currentStudentArray[1].split(': ')[1]);
        let score = Number(currentStudentArray[2].split(': ')[1]);
 
        if (score >= 3) {
 
            if (!schoolObject.hasOwnProperty(grade)) {
                schoolObject[grade] = { name: [name], score: [score] };
 
            } else if (schoolObject.hasOwnProperty(grade)) {
                schoolObject[grade].name.push(name);
                schoolObject[grade].score.push(score);
            }
        }
    }
 
    // let sortedKeys = Object.keys(schoolObject).sort((a, b) => a - b);
    // sorting is not necessary in this case, because the object sorts automatically a number property
    
    for (let key in schoolObject) {
 
        let currentGradeScores = schoolObject[key].score;
        let allCurrentGradeScores = 0;
        currentGradeScores.forEach(element => allCurrentGradeScores += element);
        let currentAverageGradeScore = allCurrentGradeScores / currentGradeScores.length;
 
        console.log(`${Number(key) + 1} Grade`);
        console.log(`List of students: ${schoolObject[key].name.join(', ')}`);
        console.log(`Average annual score from last year: ${currentAverageGradeScore.toFixed(2)}`);
        console.log(``);
    }
}
 
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
// schoolRegister([
//     'Student George,  5, score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
//     ]);