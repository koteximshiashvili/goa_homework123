// DBMS არის პროგრამული სისტემა რომელიც უზრუნველყოფს მონაცემთა ბაზების შექმნას, მართვას და გამოყენებას. ის მომხმარებელსა და მონაცემთა ბაზას შორის შუამავლად მუშაობს.
// RDBMS არის DBMSის ტიპი რომელიც მონაცემებს ინახავს რელაციური მოდელის მიხედვით, ანუ ცხრილების სახით.
// რელაციური მონაცემთა ბაზა არის მონაცემთა ბაზა, რომელიც აგებულია ცხრილებზე.
// არარელაციური მონაცემთა ბაზები არ იყენებენ ცხრილებს. ისინი შექმნილნი არიან დიდი მოცულობის და სწრაფად ცვალებადი მონაცემებისთვის.
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const FILE = "./todos.json";

function readTodos() {
  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

app.get("/random", (req, res) => {
  const todos = readTodos();

  if (todos.length === 0) {
    return res.json({ message: "No todos available" });
  }

  const randomTodo = todos[Math.floor(Math.random() * todos.length)];
  res.json(randomTodo);
});

app.get("/todos", (req, res) => {
  const todos = readTodos();

  if (todos.length === 0) {
    return res.json({ message: "No todos available" });
  }

  const formatted = todos
    .map((t, i) => `${i + 1}. ${t.title}`)
    .join(" | ");

  res.json({ todos: formatted });
});

app.get("/web", (req, res) => {
  const todos = readTodos();

  const html = `
    <html>
      <body>
        <h1>Todo List</h1>
        <ul>
          ${todos.map(t => `<li>${t.title}</li>`).join("")}
        </ul>
      </body>
    </html>
  `;

  res.json({ html });
});

app.delete("/todo", (req, res) => {
  const todos = readTodos();

  if (todos.length === 0) {
    return res.json({ message: "No todos to delete" });
  }

  const deleted = todos.shift();
  writeTodos(todos);

  res.json({
    message: "First todo deleted",
    deleted
  });
});

app.post("/todo", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    title
  };

  todos.push(newTodo);
  writeTodos(todos);

  res.status(201).json(newTodo);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
