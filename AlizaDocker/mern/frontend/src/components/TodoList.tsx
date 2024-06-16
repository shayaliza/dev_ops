import React, { useState } from "react";
import { Todo } from "../vite-env.d";

interface Props {
  todos: Todo[];
  updateTodo: (id: string, completed: boolean) => void;
  updateTodoTitle: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({
  todos,
  updateTodo,
  updateTodoTitle,
  deleteTodo,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = (id: string, currentTitle: string) => {
    setEditingId(id);
    setNewTitle(currentTitle);
  };

  const handleUpdateTitle = (id: string) => {
    updateTodoTitle(id, newTitle);
    setEditingId(null);
    setNewTitle("");
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id} className="flex items-center justify-between mb-2">
          {editingId === todo._id ? (
            <div className="flex items-center">
              <input
                type="text"
                className="border p-2 mr-2"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button
                className="bg-green-500 text-white p-2 mr-2"
                onClick={() => handleUpdateTitle(todo._id)}
              >
                Update
              </button>
              <button
                className="bg-gray-500 text-white p-2"
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <span
                className={`cursor-pointer ${
                  todo.completed ? "line-through" : ""
                }`}
                onClick={() => updateTodo(todo._id, !todo.completed)}
              >
                {todo.title}
              </span>
              <div>
                <button
                  className="bg-blue-500 text-white p-2 mr-2"
                  onClick={() => handleEdit(todo._id, todo.title)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-2"
                  onClick={() => deleteTodo(todo._id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
