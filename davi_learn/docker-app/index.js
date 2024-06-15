const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Arsh",
    },
    {
      id: 2,
      name: "Rakesh",
    },
  ]);
});

app.listen(5500, (req, res) => {
  console.log("server is listening");
});
