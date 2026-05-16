const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const evaluate = require("./evaluator.cjs");

const app = express();
const db = new Database("db.db");

app.use(cors());
app.use(express.json());

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT,
  xp INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS challenges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  description TEXT,
  difficulty TEXT,
  testInput TEXT,
  expectedOutput TEXT
);
`);

const existing = db.prepare("SELECT COUNT(*) as count FROM challenges").get();

if (existing.count === 0) {
  const insert = db.prepare(`
    INSERT INTO challenges (title, description, difficulty, testInput, expectedOutput)
    VALUES (?, ?, ?, ?, ?)
  `);

  insert.run("Double the Number", "Return input * 2", "Easy", "5", "10");
  insert.run("Square Number", "Return input squared", "Easy", "4", "16");
  insert.run("Reverse String", "Reverse the string", "Easy", "hello", "olleh");
  insert.run("Sum Two Numbers", "Input format: '3,7'", "Medium", "3,7", "10");
  insert.run("Check Even", "Return true if even", "Medium", "8", "true");
  insert.run("Multiply Array", "Multiply all numbers: '2,3,4'", "Hard", "2,3,4", "24");
  insert.run("Factorial", "Return factorial of input", "Medium", "5", "120");
  insert.run("Palindrome Check", "Return true if palindrome", "Medium", "madam", "true");
  insert.run("Find Max", "Input format: '3,9,2'", "Easy", "3,9,2", "9");
  insert.run("Count Vowels", "Return number of vowels", "Hard", "hello", "2");
  insert.run("Fibonacci", "Return nth fibonacci number", "Hard", "7", "13");
}

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Fill all fields" });

  try {
    db.prepare("INSERT INTO users (username, password) VALUES (?, ?)")
      .run(username, password);

    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = db.prepare("SELECT * FROM users WHERE username = ?")
    .get(username);

  if (!user) return res.status(400).json({ message: "User not found" });
  if (user.password !== password)
    return res.status(400).json({ message: "Wrong password" });

  res.json({
    id: user.id,
    username: user.username,
    xp: user.xp
  });
});

app.get("/api/challenges", (req, res) => {
  res.json(db.prepare("SELECT * FROM challenges").all());
});

app.post("/api/submit", (req, res) => {
  const { userId, challengeId, code } = req.body;

  const challenge = db.prepare("SELECT * FROM challenges WHERE id = ?")
    .get(challengeId);

  if (!challenge)
    return res.status(404).json({ message: "Challenge not found" });

  const result = evaluate(code, challenge.testInput, challenge.expectedOutput);

  if (result.success) {
    let xp = challenge.difficulty === "Easy" ? 10 :
             challenge.difficulty === "Medium" ? 20 : 30;

    db.prepare("UPDATE users SET xp = xp + ? WHERE id = ?")
      .run(xp, userId);
  }

  res.json(result);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(
    db.prepare("SELECT username, xp FROM users ORDER BY xp DESC").all()
  );
});

app.listen(3020, () => console.log("Server running on port 3020"));