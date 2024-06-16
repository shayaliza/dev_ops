import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
import db from "./utils/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

// db();
app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
