function schoolGrades(array) {

    let studentsMap = new Map();

    for (let element of array) {

        let currentGradeArray = element.split(' ');
        let currentName = currentGradeArray.shift();
        currentGradeArray = currentGradeArray.map(Number);

        if (!studentsMap.has(currentName)) {
            studentsMap.set(currentName, currentGradeArray);

        } else {

            let studentGrades = studentsMap.get(currentName) ;

            for (let grade of currentGradeArray) {
                studentGrades.push(grade);
            }
        }
    }

    let sortedNames = Array.from(studentsMap.keys()).sort((a, b) => a.localeCompare(b));

    for (let name of sortedNames) {

        let gradeSum = 0;
        let allStudentGrades = studentsMap.get(name);

        for (let grade of allStudentGrades) {
            gradeSum += grade;
        }

        let averageGrade = gradeSum / allStudentGrades.length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
// schoolGrades(['Steven 3 5 6 4',
//     'George 4 6',
//     'Tammy 2 5 3',
//     'Steven 6 3']);