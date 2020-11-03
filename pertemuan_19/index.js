//Class & Constructor

// const Person = {
//     firstName: "Glafert",
//     lastName: "Kapahang",
//     displayFullName: Function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
// };

// Person.displayFullName();

class Person {
    constructor(firstName = firstName) {
        this.firstName = firstName;
        this.lastName = this.lastName;
    }
    displayFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = new Person("Glafert", "Kapahang", 23232424);
console.log(person1);
person1.displayFullName();
const person2 = new Person("Gladrin", "Kapahang", 43343400);
console.log(person2);
person2.displayFullName();
//inheritance
class Student extends Person {
    constructor(firstName, lastName, NIM, Age) {
        super(firstName, lastName);
        this.NIM = NIM;
        this.Age = Age;
    }
 //Static member
 static sayHello (){
     console.log(`Hello World`)
 }
    displayNIM() {
        console.log(`Your NIM is ${Student.NIM}`);
    }

//setter & getter
set studentScore(score) {
    this.score = score;
}

get studentScore() {
    return this.score;
    }
}


const Prigerio = new Student("Prigerio", "Kapahang", 2004040404);
Prigerio.displayFullName();
Prigerio.displayNIM();
Student.sayHello();

Prigerio.studentScore = 90; 
console.log(Prigerio.studentScore)

