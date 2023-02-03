// run npm init for package.json
// npm install --save-dev lite-server
// add "start": "lite-server" in package.json, now run npm start
var add = function (n1, n2, showResult, phrase) {
    console.log(typeof n1, typeof n2);
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase, result);
    }
    return result;
};
var number1 = "5";
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var newNum = add(+number1, number2, printResult, resultPhrase);
var person = {
    name: "Lauren",
    nickname: "LP"
};
console.log(person.nickname);
