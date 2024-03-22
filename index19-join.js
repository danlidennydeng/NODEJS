const path = require("node:path");

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));

console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));

console.log(path.join(__dirname, "data.json"));
