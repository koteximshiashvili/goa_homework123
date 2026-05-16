import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = new Database("tasks.db");

db.prepare(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER
  )`).run();


app.get("/tasks", (req, res) => {
  try {
    const tasks = db.prepare("SELECT * FROM tasks").all();
    const formatted = tasks.map(task => ({
      id: task.id,
      title: task.title,
      completed: task.completed === 1
    }));

    res.json(formatted);
  } catch (err) {
    res.json({ error: err.message });
  }
});
app.post("/tasks", (req, res) => {
  try {
    const { title } = req.body;
    const result = db.prepare("INSERT INTO tasks (title, completed) VALUES (?, ?)").run(title, 0);

    res.json({
      id: result[result.length - 1],
      title,
      completed: false
    });
  } catch (err) {
    res.json({ error: err.message });
  }
});
app.put("/tasks/:id", (req, res) => {
  try {
    const { id } = req.params;
    const task = db.prepare("SELECT completed FROM tasks WHERE id = ?").get(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const newValue = task.completed === 1 ? 0 : 1;

    db.prepare(
      "UPDATE tasks SET completed = ? WHERE id = ?"
    ).run(newValue, id);

    res.json({ success: true });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.delete("/tasks/:id", (req, res) => {
  try {
    const { id } = req.params;
    db.prepare("DELETE FROM tasks WHERE id = ?").run(id);
    res.json({ success: true });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});