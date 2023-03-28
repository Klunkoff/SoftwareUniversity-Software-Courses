function employees(arrayOfNames) {

    let employeeObject = {};

    for (let name of arrayOfNames) {

        employeeObject.employeeName = name;
        employeeObject.personalNumber = name.length;

        console.log(`Name: ${employeeObject.employeeName} -- Personal Number: ${employeeObject.personalNumber}`);
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