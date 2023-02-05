const button = document.querySelector("button")!;

let count = 0;

const clickHandler = (): void => {
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

const newPerson = { ...me };

console.log(me);
console.log(newPerson);
newPerson.username = "Lauren";
me.role = "Full Stack Engineer";
console.log(newPerson);
console.log(me);

const reduceNumbers = (...numbers: number[]) => {
  return numbers.reduce((cRes, cVal) => {
    return cRes + cVal;
  }, 0);
};
console.log(reduceNumbers(24, 32, 67));

const [hiking, ...additionalHobbies] = hobbies;
console.log(hiking, additionalHobbies);

const { username: first, ...personAttributes } = newPerson;
console.log(first, personAttributes);
