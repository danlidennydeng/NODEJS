const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
  //2 bytes at a time in the stream buffer, default is 64 kilobytes
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });
