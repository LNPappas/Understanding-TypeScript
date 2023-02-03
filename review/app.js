// run npm init for package.json
// npm install --save-dev lite-server
// add "start": "lite-server" in package.json, now run npm start
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("Server Error", 501);
