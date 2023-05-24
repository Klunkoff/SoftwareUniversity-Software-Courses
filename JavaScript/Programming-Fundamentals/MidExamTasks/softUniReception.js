function softUniReception(array) {

    let newArray = array.slice().map(Number);

    let firstEmployeeEfficiency = newArray.shift();
    let secondEmployeeEfficiency = newArray.shift();
    let thirdEmployeeEfficiency = newArray.shift();
    let students = newArray.shift();

    let totalEmployeeEfficiency = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
    let workingHours = Math.ceil(students / totalEmployeeEfficiency);
    let breakHours = Math.floor(workingHours / 3);
    let result = workingHours + breakHours;

    if (workingHours % 3 === 0 && students > 0) {
        console.log(`Time needed: ${result - 1}h.`);

    } else {
        console.log(`Time needed: ${result}h.`);
    }
}

softUniReception(['5', '4', '1', '0']);
// softUniReception(['1','2','3','45']);
// softUniReception(['3','2','5','40']);