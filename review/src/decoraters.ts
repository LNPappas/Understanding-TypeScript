//  decorators - meta: code to be used by other developers

function Logger(constructor: Function) {
  console.log(`Logging class ${constructor.name}...`);
}

function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    ogConstructor: T
  ) {
    return class extends ogConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// decorator creation is top down
// decorators execution is bottom up
@WithTemplate("<h1></h1>", "app-div")
@Logger2("LOGGING - PERSON")
@Logger
class Per {
  name = "LP";

  constructor() {
    console.log("constructor creating person...");
  }
}

const per = new Per();

// ----------------------

// property decorator
function Log(target: any, propertyName: string | Symbol) {
  console.log("Log");
  console.log(target, propertyName, propertyName);
}

// accessor decorator
function Log2(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("Log2");
  console.log("target: ", target);
  console.log("name: ", name);
  console.log("descriptor: ", descriptor);
  return {};
}

// method descriptor
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Log3");
  console.log("target: ", target);
  console.log("name: ", name);
  console.log("descriptor: ", descriptor);
}

// parameter decorator
function Log4(target: any, nameMethod: string, position: number) {
  console.log("Log4");
  console.log("target: ", target);
  console.log("nameMethod: ", nameMethod);
  console.log("position: ", position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw Error("Invalid price - must be positive #!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPrice(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const prod = new Product("Glass", 24);

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // get access to method being called
  const ogMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // this refers to object on which getter is defined
      const boundFn = ogMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This Works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button2 = document.querySelector("button");
button2?.addEventListener("click", p.showMessage);

// Validating with Decorators
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function Validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
        case "positive":
          isValid = isValid && obj[prop] > 0;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!Validate(createdCourse)) {
    throw Error("Not a valid course");
  }
  console.log(createdCourse);
});

// index.html needs:
// <div id="app-div"></div>
// <button>Click Me</button>
// <form>
//   <br />
//   <input type="text" placeholder="Course Title" id="title" />
//   <input type="text" placeholder="Course Price" id="price" />
//   <button type="submit">Save</button>
// </form>
