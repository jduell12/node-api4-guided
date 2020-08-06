const express = require("express");
const helmet = require("helmet");

const apiRouter = require("./api-router.js");

const server = express();

server.use(helmet());

server.use("/api", apiRouter);

server.get("/", (req, res) => {
  const message = process.env.MESSAGE || "Hello World!";
  res.status(200).json({ message });
});

module.exports = server;
