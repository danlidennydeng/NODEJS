const fs = require("node:fs");

setTimeout(() => console.log("Timeout 1"), 3);

fs.readFile(__filename, () => {
  console.log("readFile 1");
});
