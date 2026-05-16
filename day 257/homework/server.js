const express = require("express");
const Database = require("better-sqlite3");

const app = express();
const db = new Database("database.db");

app.use(express.json());

db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
  )
`).run();

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  db.prepare(
    "INSERT INTO users (username, password) VALUES (?, ?)"
  ).run(username, password);

  res.json({ message: "User created" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const users = db.prepare("SELECT * FROM users").all();

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid" });
  }

  res.json({ message: "Login successful" });
});

app.get("/users", (req, res) => {
  const users = db.prepare("SELECT * FROM users").all();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
