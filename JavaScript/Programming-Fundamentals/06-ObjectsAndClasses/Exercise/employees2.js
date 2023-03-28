function employees(arrayOfNames) {

    for (let name of arrayOfNames) {

        let personalNumber = name.length;

        let employeeObject = {

            nameOfEmployee: name,
            employeePersonalNum: personalNumber,
        }

        console.log(`Name: ${employeeObject.nameOfEmployee} -- Personal Number: ${employeeObject.employeePersonalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
// employees([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]);