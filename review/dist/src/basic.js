"use strict";
const add = (n1, n2, showResult, phrase) => {
    console.log(typeof n1, typeof n2);
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase, result);
    }
    return result;
};
const number1 = "5";
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const newNum = add(+number1, number2, printResult, resultPhrase);
