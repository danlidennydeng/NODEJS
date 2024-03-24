const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("readableStream close");
});

setImmediate(() => console.log("setImmediate 1"));
setTimeout(() => console.log("timeout 1"), 0);

Promise.resolve().then(() => console.log("promise 1"));
process.nextTick(() => console.log("tick 1"));
