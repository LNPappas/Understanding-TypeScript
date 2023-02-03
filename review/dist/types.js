"use strict";
var RoleLevel;
(function (RoleLevel) {
    RoleLevel[RoleLevel["ADMIN"] = 0] = "ADMIN";
    RoleLevel[RoleLevel["READ_ONLY"] = 1] = "READ_ONLY";
    RoleLevel["AUTHOR"] = "AUTHOR";
})(RoleLevel || (RoleLevel = {}));
const person = {
    name: "Lauren",
    nickname: "LP",
    hobbies: ["hiking", "travel", "cooking"],
    role: [2, "software engineer"],
    roleLevel: RoleLevel.AUTHOR,
};
person.hobbies.map((hobby) => {
    console.log(hobby.toUpperCase());
});
console.log(`the id# for ${person.role[1]} is: ${person.role[0]}`);
// can still push numbers and strings to role
person.role.push("wait what?");
person.role.push(27);
person.role.map((r) => {
    console.log(r);
});
console.log(person.roleLevel);
console.log(RoleLevel.ADMIN);
// union types
var resultType;
(function (resultType) {
    resultType[resultType["NUMBER"] = 0] = "NUMBER";
    resultType[resultType["TEXT"] = 1] = "TEXT";
    resultType[resultType["NUMBER_AS_TEXT"] = 0] = "NUMBER_AS_TEXT";
})(resultType || (resultType = {}));
const combine = (input1, input2, resultType) => {
    let result;
    switch (resultType) {
        case 0:
            result = +input1 + +input2;
            break;
        case 1:
            result = input1.toString() + input2.toString();
            break;
        default:
            result = "default";
    }
    return result;
};
console.log(combine(30, 36, resultType.NUMBER));
console.log(combine("L", "P", resultType.TEXT));
console.log(combine("45", "27", resultType.NUMBER_AS_TEXT));
// function types
const addFunc = (n1, n2) => {
    return n1 + n2;
};
const printAdd = (num) => {
    console.log("Result: " + num);
};
// Can save either addFunc or printAdd here
let addValues;
// can only save printAdd here
let printValues;
addValues = addFunc;
printValues = printAdd;
const result = addValues(1, 2);
printValues(result);
addValues = printAdd;
addValues(10);
const combineFunc = (n1, n2, cb) => {
    let res = n1 + n2;
    cb(res);
};
const cb = (num) => {
    console.log("Callback Result: " + num);
    return num;
};
combineFunc(3, 4, cb);
// unknown type
let userInput;
let userName;
userInput = 5;
userInput = "LP";
// cannot store string to unknown without type check
if (typeof userInput === "string") {
    userName = userInput;
}
// never (never returns anything)
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code,
    };
}
generateError("Server Error", 500);
