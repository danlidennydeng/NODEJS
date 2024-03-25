const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home page");
  } else if (req.url === "/slow-page") {
    let j = 0;
    for (let i = 0; i < 6000000000; i++) {
      j++;
    } //simulate CPU work
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`slow page ${j}`);
  }
});

server.listen(8000, () => console.log("server is running on port 8000"));
