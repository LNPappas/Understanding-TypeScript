// Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Albert",
  privileges: ["create-server"],
  startDate: new Date(),
};

const e2: Employee = {
  name: "Constantine",
  startDate: new Date(),
};

const e3: Admin = {
  name: "Sennie",
  privileges: ["create-server"],
};

type Combo = string | number;
type Numeric = number | boolean;
type Universal = Combo | Numeric;

// Type Guards

function add1(a: Combo, b: Combo): Universal {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Function Overloads
// function add1(a: number, b: number): number;
// const res1 = add1(1, 2)
// function add1(a: string, b: string): string;
// const res = add1("Claire", "Dennenball");
// console.log(res);

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
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

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(30000);
  }
};

useVehicle(v1);
console.log("");
useVehicle(v2);

// Discriminated Union
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  groundSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
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

const b1: Bird = { type: "bird", flyingSpeed: 50 };
const h1: Horse = { type: "horse", groundSpeed: 80 };
moveAnimal(b1);
moveAnimal(h1);

// Type Casting

const paragraph = document.getElementById("message-output");

// casting version 1 (before)
const inputElement = <HTMLInputElement>document.getElementById("user-input");

// casting version 2 (after)
const inputElement2 = document.getElementById("user-input") as HTMLInputElement;
inputElement.value = "Hi There!";

interface ErrorContainer {
  id: string;
  // don't know key name, but it must be string and value must be string
  [key: string]: string;
}

const errorBag: ErrorContainer = {
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

const storedData = userInput2 ?? "DEFAULT";

console.log(storedData);
