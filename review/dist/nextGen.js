"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const button = document.querySelector("button");
let count = 0;
const clickHandler = () => {
    count = count + 1;
    console.log(`Clicked ${count} time(s)`);
};
button.addEventListener("click", clickHandler);
button.addEventListener("click", (event) => console.log(event));
const hobbies = ["hiking", "cooking", "gaming"];
const activeHobbies = ["travel"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const me = {
    username: "LP",
    role: "Software Engineer",
    position: "Full Time",
};
const newPerson = Object.assign({}, me);
console.log(me);
console.log(newPerson);
newPerson.username = "Lauren";
me.role = "Full Stack Engineer";
console.log(newPerson);
console.log(me);
const reduceNumbers = (...numbers) => {
    return numbers.reduce((cRes, cVal) => {
        return cRes + cVal;
    }, 0);
};
console.log(reduceNumbers(24, 32, 67));
const [hiking, ...additionalHobbies] = hobbies;
console.log(hiking, additionalHobbies);
const { username: first } = newPerson, personAttributes = __rest(newPerson, ["username"]);
console.log(first, personAttributes);
