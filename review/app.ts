// run npm init for package.json
// npm install --save-dev lite-server
// add "start": "lite-server" in package.json, now run npm start

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
