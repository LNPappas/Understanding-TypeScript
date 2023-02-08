"use strict";
//  generic type Array can take multiple types
const names = [];
// generic type Promise can set type to promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is done!");
    }, 2000);
});
promise.then((data) => {
    // can apply string methods to string Promise
    data.split(" ");
});
// Building Generic Types
// T,U are generic types returning T&U (intersection of types)
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: "Freddie" }, { age: 1 });
console.log(mergedObj.age);
// extend object to use object constructor
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "Freddie" }, { age: 1 });
console.log(mergedObj2.age);
function countAndDescribe(element) {
    const description = `The element's length is: ${element.length}`;
    return [element, description];
}
const [description] = countAndDescribe(["zero", "one", "two"]);
console.log(description);
// can extend key of object
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Cookie" }, "name");
// generic classes can extend primitive values
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        // if item not in array return nothing
        if (this.data.indexOf(item) === -1) {
            return;
        }
        return this.data.splice(this.data.indexOf(item), 1); // returns last item if not found
    }
    getItems() {
        return [...this.data];
    }
}
// specify storage types
const textStorage = new DataStorage();
const numStorage = new DataStorage();
textStorage.addItem("zero");
textStorage.addItem("one");
numStorage.addItem(0);
numStorage.addItem(1);
function createCourseGoal(title, description, date) {
    let courseGoal = {
        title,
        description,
    };
    // maybe there's a condition that requires this to be added later
    courseGoal.completeUntil = date;
    // must cast Partial as Type
    return courseGoal;
}
// Readonly cannot add to array
const names2 = ["Fabio", "Dulce"];
