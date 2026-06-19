const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sql = require("./db.cjs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  const todos = await sql`SELECT * FROM todos ORDER BY id DESC`;
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const { title } = req.body;

  const [todo] = await sql`
    INSERT INTO todos (title)
    VALUES (${title})
    RETURNING *
  `;

  res.json(todo);
});

app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const [updated] = await sql`
    UPDATE todos
    SET 
      completed = COALESCE(${completed}, completed)
    WHERE id = ${id}
    RETURNING *
  `;

  res.json(updated);
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  await sql`DELETE FROM todos WHERE id = ${id}`;

  res.json({ ok: true });
});

app.listen(4968, () => {
  console.log("Server running");
});