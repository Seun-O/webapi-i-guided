// Server listens for traffic. Basically a store that
const express = require("express");

const port = 5000;

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World, from Express ");
});

server.get("/hobbits", (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: "Samewise Gamgee"
    },
    {
      id: 2,
      name: "Frodo Baggins"
    },
    {
      id: 3,
      name: "Bilbo Baggins"
    }
  ];

  res.status(200).json(hobbits);
});

server.post("/hobbits", (req, res) => {
  res.status(201).json({ url: "/hobbits", operation: "POST" });
});

server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
});

server.delete("/hobbits", (req, res) => {
  res.send(204);
});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

//Express JavaScript frame work that sits on Node.js
