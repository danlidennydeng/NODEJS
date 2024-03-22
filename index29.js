const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
  //2 bytes at a time in the stream buffer, default is 64 kilobytes
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });
