import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./vite-env.d";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get("http://localhost:5000/todos");
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    const response = await axios.post("http://localhost:5000/todos", { title });
    setTodos([...todos, response.data]);
  };

  const updateTodo = async (id: string, completed: boolean) => {
    const response = await axios.put(`http://localhost:5000/todos/${id}`, {
      completed,
    });
    setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
  };

  const deleteTodo = async (id: string) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };
  const updateTodoTitle = async (id: string, title: string) => {
    const response = await axios.put(`http://localhost:5000/todos/${id}`, {
      title,
    });
    setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dev Ops Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        updateTodoTitle={updateTodoTitle}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
