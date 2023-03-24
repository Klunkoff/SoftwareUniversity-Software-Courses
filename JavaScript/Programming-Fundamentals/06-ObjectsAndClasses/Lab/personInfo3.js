function personInfo(firstName, lastName, age) {

    let objectPerson = {

        firstName,
        lastName,
        age
    };

    return objectPerson;
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith","18"));