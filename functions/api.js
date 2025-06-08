const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

// Your existing routes from server.js will go here
router.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
