function companyUsers(array) {

    let companyObject = {};

    for (let element of array) {

        let [currentCompany, currentID] = element.split(' -> ');

        if (!companyObject.hasOwnProperty(currentCompany)) {
            companyObject[currentCompany] = [currentID];

        } else {
            let companyIDArray = companyObject[currentCompany];

            if (!companyIDArray.includes(currentID)) {
                companyIDArray.push(currentID);
            }
        }
    }

    let sortedEntries = Object.entries(companyObject).sort((a, b) => (a[0]).localeCompare(b[0]));

    for (let entry of sortedEntries) {

        console.log(entry[0]);

        let employeeIDArray = entry[1];

        for (let employeeID of employeeIDArray) {

            console.log(`-- ${employeeID}`);
        }
    }
}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);