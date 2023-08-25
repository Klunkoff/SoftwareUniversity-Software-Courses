function inheritsAndReplacingtoString() {

    class Person {

        constructor(name, email) {

            this.name = name;
            this.email = email;
        }

        toString() {

            if (this.constructor.name == 'Person') {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;

            } else if (this.constructor.name == 'Teacher') {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;

            } else if (this.constructor.name == 'Student') {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
            }
        }
    }

    class Teacher extends Person {

        constructor(name, email, subject) {

            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {

        constructor(name, email, course) {

            super(name, email);
            this.course = course;
        }
    }

    return {

        Person,
        Teacher,
        Student,
    };
}

let classes = inheritsAndReplacingtoString();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let proba = new Person("Maria", "maria@yahoo.bg");
console.log(proba.toString());

let person = new Person("Maria", "maria@yahoo.bg");
let teacher = new Teacher("Ivan", "ivan@ivan.bg", "history");
let student = new Student("Pesho", "pesho@gmail.com", "Math");
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());


// let Person = classes.Person;
// let Teacher = classes.Teacher;
// let Student = classes.Student;

// let t = new Teacher("Ivan",'ivan@ivan.com',"Graphics");
// console.log(t.toString()) == 'Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)';