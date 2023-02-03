// run npm init for package.json
// npm install --save-dev lite-server
// add "start": "lite-server" in package.json, now run npm start
// watch mode so we don't have to compile tsc app.ts every time
// tsc --init
// tsc app.ts -w

const button = document.querySelector("button")!;

let count = 0;

const clickHandler = (): void => {
  count = count + 1;
  console.log(`Clicked ${count} time(s)`);
};

button.addEventListener("click", clickHandler);
