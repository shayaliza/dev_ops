import React, { useState } from "react";

interface Props {
  addTodo: (title: string) => void;
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
