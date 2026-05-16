const express = require("express");
const cors = require("cors");
const db = require("./db.cjs");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/notes", (req, res) => {
  const notes = db.prepare("SELECT * FROM notes ORDER BY id DESC").all();
  res.json(notes);
});
app.post("/notes", (req, res) => {
  try {
    console.log("notes body:", req.body);

    const { id, title, content, category, difficulty } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    const noteCategory = category || "";
    const noteDifficulty = difficulty || "Easy";

    const smth = db.prepare(
      "INSERT INTO notes (title, content, category, difficulty, created_at) VALUES (?, ?, ?, ?, datetime('now'))"
    );
    const result = smth.run(title, content, noteCategory, noteDifficulty);

    res.json({ id: result.lastInsertRowid });
  } catch (err) {
    console.error(err);
  }
});

app.put("/notes/:id", (req, res) => {
  const { title, content, category, difficulty } = req.body;

  db.prepare(`
    UPDATE notes
    SET title=?, content=?, category=?, difficulty=?
    WHERE id=?
  `).run(title, content, category, difficulty, req.params.id);

  res.json({ success: true });
});

app.delete("/notes/:id", (req, res) => {
  db.prepare("DELETE FROM notes WHERE id=?").run(req.params.id);
  res.json({ success: true });
});


app.get("/categories", (req, res) => {
  const cats = db.prepare("SELECT * FROM categories").all();
  res.json(cats);
});

app.post("/categories", (req, res) => {
  const { name } = req.body;

  const result = db
    .prepare("INSERT INTO categories (name) VALUES (?)")
    .run(name);

  res.json({ id: result[result.length-1].id });
});

app.delete("/categories/:id", (req, res) => {
  db.prepare("DELETE FROM categories WHERE id=?").run(req.params.id);
  res.json({ success: true });
});

app.listen(5002, () => {
  console.log("Server running on port 5002");
});