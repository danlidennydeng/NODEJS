const crypto = require("node:crypto");

const MAX_CALLS = 5; // default is 4 threads
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// the result is execution time in milisecond. 261 ms
// this is the Sync version of pbkdf2
