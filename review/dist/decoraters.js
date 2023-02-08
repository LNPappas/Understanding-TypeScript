"use strict";
//  decorators - meta: code to be used by other developers
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log(`Logging class ${constructor.name}...`);
}
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
    };
}
function WithTemplate(template, hookId) {
    return function (ogConstructor) {
        return class extends ogConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
// decorator creation is top down
// decorators execution is bottom up
let Per = class Per {
    constructor() {
        this.name = "LP";
        console.log("constructor creating person...");
    }
};
Per = __decorate([
    WithTemplate("<h1></h1>", "app-div"),
    Logger2("LOGGING - PERSON"),
    Logger
], Per);
const per = new Per();
// ----------------------
// property decorator
function Log(target, propertyName) {
    console.log("Log");
    console.log(target, propertyName, propertyName);
}
// accessor decorator
function Log2(target, name, descriptor) {
    console.log("Log2");
    console.log("target: ", target);
    console.log("name: ", name);
    console.log("descriptor: ", descriptor);
    return {};
}
// method descriptor
function Log3(target, name, descriptor) {
    console.log("Log3");
    console.log("target: ", target);
    console.log("name: ", name);
    console.log("descriptor: ", descriptor);
}
// parameter decorator
function Log4(target, nameMethod, position) {
    console.log("Log4");
    console.log("target: ", target);
    console.log("nameMethod: ", nameMethod);
    console.log("position: ", position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw Error("Invalid price - must be positive #!");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPrice(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPrice", null);
const prod = new Product("Glass", 24);
function AutoBind(_, _2, descriptor) {
    // get access to method being called
    const ogMethod = descriptor.value;
    const adjDescriptor = {
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
    constructor() {
        this.message = "This Works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button2 = document.querySelector("button");
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function Validate(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
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
