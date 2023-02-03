// run npm init for package.json
// npm install --save-dev lite-server
// add "start": "lite-server" in package.json, now run npm start
var resultType;
(function (resultType) {
    resultType[resultType["NUMBER"] = 0] = "NUMBER";
    resultType[resultType["TEXT"] = 1] = "TEXT";
    resultType[resultType["NUMBER_AS_TEXT"] = 0] = "NUMBER_AS_TEXT";
})(resultType || (resultType = {}));
var combine = function (input1, input2, resultType) {
    var result;
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
