enum RoleLevel {
  ADMIN,
  READ_ONLY,
  AUTHOR = "AUTHOR",
}

type PersonType = {
  name: string;
  nickname: string;
  hobbies: string[];
  role: [number, string];
  roleLevel: RoleLevel;
};

const person: PersonType = {
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
enum resultType {
  NUMBER,
  TEXT,
  NUMBER_AS_TEXT = 0,
}

type Combinable = number | string;

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultType: resultType
) => {
  let result: Combinable;
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
const addFunc = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printAdd = (num: number): void => {
  console.log("Result: " + num);
};

// Can save either addFunc or printAdd here
let addValues: Function;

// can only save printAdd here
let printValues: (num: number) => void;
addValues = addFunc;
printValues = printAdd;

const result = addValues(1, 2);
printValues(result);

addValues = printAdd;
addValues(10);

type CallBackType = (num: number) => number;

const combineFunc = (n1: number, n2: number, cb: CallBackType): void => {
  let res = n1 + n2;
  cb(res);
};

const cb = (num: number): number => {
  console.log("Callback Result: " + num);
  return num;
};

combineFunc(3, 4, cb);

// unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "LP";

// cannot store string to unknown without type check
if (typeof userInput === "string") {
  userName = userInput;
}

// never (never returns anything)
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError("Server Error", 500);
