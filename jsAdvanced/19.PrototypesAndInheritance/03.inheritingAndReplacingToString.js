function toStringExtension() { 
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
            this.text = `name: ${this.name}, email: ${this.email}`
        }
        toString() {
            return `Person (${this.text})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject, text) {
            super(name, email, text);
            this.subject = subject;
        }
        toString() {
            let text = super.toString();
            return `Teacher (${this.text}, subject: ${this.subject})`;
        }
    }
    
    class Student extends Person {
        constructor(name, email, course, text) {
            super(name, email, text);
            this.course = course;
        }
        toString() {
            let text = super.toString();
            return `Student (${this.text}, course: ${this.course})`;
        }
    }
    
    return { 
        Person, 
        Teacher, 
        Student 
    } 
}

let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan",'ivan@ivan.com',"Graphics");
// expect(t.toString()).to.equal('Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)');