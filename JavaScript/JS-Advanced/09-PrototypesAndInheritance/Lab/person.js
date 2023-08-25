function createPerson(firstName, lastName) {
 
    let person = {
 
        firstName,
        lastName,
    }
 
    Object.defineProperty(person, 'fullName', {
 
        get() {
 
            let fullName = this.firstName + ' ' + this.lastName;
            return fullName;
        },
 
        set(value) {
 
            if (value.includes(' ')) {
 
                [firstName, lastName] = value.split(' ');
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
    });
 
    return person;
}
 
let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "NikolaTesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla