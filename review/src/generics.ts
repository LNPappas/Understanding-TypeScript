//  generic type Array can take multiple types
const names: Array<string | number> = [];

// generic type Promise can set type to promise
const promise: Promise<string> = new Promise((resolve, reject) => {
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
function merge<T, U>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  };
}
const mergedObj = merge({ name: "Freddie" }, { age: 1 });
console.log(mergedObj.age);

// extend object to use object constructor
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Freddie" }, { age: 1 });
console.log(mergedObj2.age);

// merge and merge2 do the same thing

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T) {
  const description = `The element's length is: ${element.length}`;
  return [element, description];
}

const [description] = countAndDescribe(["zero", "one", "two"]);
console.log(description);

// can extend key of object
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Cookie" }, "name");

// generic classes can extend primitive values
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
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
const textStorage = new DataStorage<string>();
const numStorage = new DataStorage<number>();

textStorage.addItem("zero");
textStorage.addItem("one");

numStorage.addItem(0);
numStorage.addItem(1);

// generic utility types

// Partial Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {
    title,
    description,
  };
  // maybe there's a condition that requires this to be added later
  courseGoal.completeUntil = date;
  // must cast Partial as Type
  return courseGoal as CourseGoal;
}

// Readonly cannot add to array
const names2: Readonly<string[]> = ["Fabio", "Dulce"];
