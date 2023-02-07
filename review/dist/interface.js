"use strict";
const addFn = (a, b) => {
    console.log(`addFN result: ${a + b}`);
};
addFn(1, 2);
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    greet(phrase) { }
}
const user1 = {
    // name: "Jerry",
    age: 2,
    greet(phrase) {
        console.log(`${phrase} ${this.name ? this.name : ""}?`);
    },
};
const user2 = {
    name: "Jerry",
    age: 57,
    greet(phrase) {
        console.log(`${phrase} ${this.name}!`);
    },
};
user1.greet("How's it goin'");
user2.greet("Hi");
