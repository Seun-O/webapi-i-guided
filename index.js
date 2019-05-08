// Server listens for traffic. Basically a store that

const http = require("http");

const hostname = `127.0.0.1`;
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World, from Node.js");
});

server.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}`);
});

//Express JavaScript frame work that sits on Node.js
