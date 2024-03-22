const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("readFile 1");
});

process.nextTick(() => console.log("tick 1"));

Promise.resolve().then(() => console.log("promise 1"));
