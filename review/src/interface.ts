interface AddFn {
  (a: number, b: number): void;
}

const addFn: AddFn = (a, b) => {
  console.log(`addFN result: ${a + b}`);
};
addFn(1, 2);

interface Named {
  readonly name?: string;
}

// you can extend multiple interfaces.
interface Greetable extends Named {
  greet(phrase: string): void;
}
class Person implements Greetable {
  constructor(public age: number, public name?: string) {}

  greet(phrase: string) {}
}

const user1: Person = {
  // name: "Jerry",
  age: 2,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name ? this.name : ""}?`);
  },
};

const user2: Person = {
  name: "Jerry",
  age: 57,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}!`);
  },
};

user1.greet("How's it goin'");
user2.greet("Hi");
