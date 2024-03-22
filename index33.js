const http = require("node:http");

const server = http.createServer((req, res) => {
  const superHero = {
    firstname: "Bruce",
    lastname: "Wayne",
  };

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Denny has a dream...</h1>");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
