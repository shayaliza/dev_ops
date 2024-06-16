import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import db from "./utils/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
// db();

// Setup CORS
app.use(cors());

app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
