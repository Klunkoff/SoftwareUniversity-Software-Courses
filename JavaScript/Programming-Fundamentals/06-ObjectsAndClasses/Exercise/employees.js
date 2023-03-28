function employees(arrayOfNames) {

    class Employee {

        constructor(name, personalNumber) {

            this.employeeName = name;
            this.employeePersonalNum = personalNumber;
        }

        printEmployee() {

            console.log(`Name: ${this.employeeName} -- Personal Number: ${this.employeePersonalNum}`);
        }
    }

    for (let name of arrayOfNames) {

        let currentPersonalNum = name.length;
        let currentEmployee = new Employee(name, currentPersonalNum);
        currentEmployee.printEmployee();
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