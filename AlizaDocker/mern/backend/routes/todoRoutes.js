import express from "express";
import {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../controller/todoController.js";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
