function personInfo(firstName, lastName, age) {

    let objectPerson = {};

    objectPerson.firstName = firstName;
    objectPerson.lastName = lastName;
    objectPerson.age = age;

    return objectPerson;
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith","18"));