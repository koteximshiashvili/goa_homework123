import { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  async function load() {
    const data = await getTodos();
    setTodos(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function createTodo() {
    if (!text) return;

    await addTodo(text);
    setText("");
    load();
  }

  async function toggle(todo) {
    await updateTodo(todo.id, {
      completed: !todo.completed
    });

    load();
  }

  async function remove(id) {
    await deleteTodo(id);
    load();
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={createTodo}>Add</button>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <span onClick={() => toggle(t)}>
              {t.completed ? "✔️" : "⬜"} {t.title}
            </span>

            <button onClick={() => remove(t.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}