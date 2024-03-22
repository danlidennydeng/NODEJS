const fs = require("node:fs");

console.log("First");
const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContents);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");

fs.writeFileSync("./greet.txt", "new text written by nodejs");

fs.writeFile("./greet.txt", "...dream...", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written by Asyn");
  }
});
