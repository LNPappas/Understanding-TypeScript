"use strict";
// Intersection Types
const e1 = {
    name: "Albert",
    privileges: ["create-server"],
    startDate: new Date(),
};
const e2 = {
    name: "Constantine",
    startDate: new Date(),
};
const e3 = {
    name: "Sennie",
    privileges: ["create-server"],
};
// Type Guards
function add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const printEmployeeInfo = (emp) => {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ("startDate" in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
};
printEmployeeInfo(e1);
printEmployeeInfo(e2);
printEmployeeInfo(e3);
console.log("");
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Hard Driving...");
    }
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(30000);
    }
};
useVehicle(v1);
console.log("");
useVehicle(v2);
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.groundSpeed;
            break;
    }
    console.log(`This ${animal.type}'s movement speed is: ${speed}`);
};
const b1 = { type: "bird", flyingSpeed: 50 };
const h1 = { type: "horse", groundSpeed: 80 };
moveAnimal(b1);
moveAnimal(h1);
// Type Casting
const paragraph = document.getElementById("message-output");
// casting version 1 (before)
const inputElement = document.getElementById("user-input");
// casting version 2 (after)
const inputElement2 = document.getElementById("user-input");
inputElement.value = "Hi There!";
const errorBag = {
    id: "email error",
    email: "Not a valid Email!",
};
const fetchedUserData = {
    id: "ul",
    name: "Max",
    job: { title: "CEO", description: "Company Owner" },
};
console.log(`User title: ${fetchedUserData.job.title}`);
const userInput2 = undefined;
const storedData = userInput2 !== null && userInput2 !== void 0 ? userInput2 : "DEFAULT";
console.log(storedData);
