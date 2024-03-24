const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("readFile 1");
});

process.nextTick(() => console.log("tick 1"));

Promise.resolve().then(() => console.log("promise 1"));

setTimeout(() => console.log("timeout 1"), 0);

for (let i = 0; i < 2000000000; i++) {}
