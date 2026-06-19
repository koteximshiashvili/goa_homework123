const API = "http://localhost:4968";

export const getTodos = () =>
  fetch(`${API}/todos`).then(r => r.json());

export const addTodo = (title) =>
  fetch(`${API}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

export const updateTodo = (id, data) =>
  fetch(`${API}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const deleteTodo = (id) =>
  fetch(`${API}/todos/${id}`, {
    method: "DELETE"
  });