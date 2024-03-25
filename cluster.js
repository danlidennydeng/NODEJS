const cluster = require("node:cluster");
const http = require("node:http");

const OS = require("node:os");
console.log(OS.cpus().length);
// above for showing how many cords your machine has

if (cluster.isMaster) {
  console.log(`master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`worker ${process.pid} started`);

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {} //simulate CPU work
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("slow page");
    }
  });

  server.listen(8000, () => console.log("server is running on port 8000"));
}
