const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Rohan",
    },
    {
      id: 2,
      name: "Rakesh",
    },
    {
      id: 3,
      name: "Ajay",
    },
    {
      id: 4,
      name: "Akash",
    },
  ]);
});

app.listen(5500, (req, res) => {
  console.log("server is listening");
});
