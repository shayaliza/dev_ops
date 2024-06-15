import express from "express";

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// POST request
app.post("/data", (req, res) => {
  const data = req.body;
  res.send(`Received data: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
