function bonusScoringSystem(array) {

    let newArray = array.map(Number);
    let studentsNumber = newArray.shift();
    let lecturesNumber = newArray.shift();
    let additionalBonus = newArray.shift();

    let studentWithMaxBonus = 0;
    let attendedLectures = 0;

    for (let i = 0; i < studentsNumber; i++) {

        let countAttendances = newArray[i];
        let maxBonus = countAttendances / lecturesNumber * (5 + additionalBonus);

        if (maxBonus > studentWithMaxBonus) {
            studentWithMaxBonus = maxBonus;
            attendedLectures = countAttendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(studentWithMaxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(attendedLectures)} lectures.`);
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
bonusScoringSystem(['0', '0', '0', '0']);