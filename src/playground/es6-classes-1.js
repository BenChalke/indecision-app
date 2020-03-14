class Person {
    constructor(name = 'anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
} 

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);

        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasLocation()) {
            greeting += ` I'm visting from ${this.location}`
        }

        return greeting;

    }
}

const me = new Traveler('Benjamin', 21, 'Sydney');
const me2 = new Traveler('Benjamin', 21);

console.log(me);
console.log(me.hasLocation());
console.log(me.getGreeting());
console.log(me2);
console.log(me2.hasLocation());
console.log(me2.getGreeting());
