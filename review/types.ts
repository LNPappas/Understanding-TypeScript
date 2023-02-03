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
