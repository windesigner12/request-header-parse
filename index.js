// index.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const cors = require("cors");

// enable CORS (so FCC can remotely test the API)
app.use(cors({ optionsSuccessStatus: 200 }));

// serve static files
app.use(express.static("public"));

// default route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// First test endpoint
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

// WHOAMI endpoint (main requirement)
app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip, // client IP
    language: req.headers["accept-language"], // preferred language
    software: req.headers["user-agent"], // software info
  });
});

// Listen on port
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
