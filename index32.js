const http = require("node:http");

const server = http.createServer((req, res) => {
  const superHero = {
    firstname: "Bruce",
    lastname: "Wayne",
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
