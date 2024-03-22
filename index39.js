const crypto = require("node:crypto");

const start = Date.now();
crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
console.log("Hash: ", Date.now() - start);
// the result is execution time in milisecond. 261 ms
// this is the Sync version of pbkdf2
