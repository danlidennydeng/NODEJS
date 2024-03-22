const crypto = require("node:crypto");

process.env_UV_THREADPOOL_SIZE = 8;
const MAX_CALLS = 8;

// default is 4 threads in power saver mode on my HP Spectre 360.
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// the result is execution time in milisecond. 261 ms
// this is the Sync version of pbkdf2
