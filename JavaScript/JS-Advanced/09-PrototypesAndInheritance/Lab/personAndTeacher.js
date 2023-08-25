function inheritsAndReplacingtoString() {
 
    class Person {
    
        constructor (name, email) {
 
            this.name = name;
            this.email = email;
        }
    }
 
    class Teacher extends Person {
 
        constructor (name, email, subject) {
 
            super (name, email);
            
            this.subject = subject;
        }
    }
 
    return {
 
        Person, 
        Teacher,
    };
}

let classes = inheritsAndReplacingtoString();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('pesho','pesho@gmail.com','Mathematics');
console.log(t.name == "pesho");
console.log(t.email == 'pesho@gmail.com');
console.log(t.subject == 'Mathematics');