import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());



let users = [];

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ error: "User already exists" });
  }

  users.push({ username, password, score: 0 });
  return res.json({ success: true });
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  return res.json({ success: true, username });
});

app.post("/score", (req, res) => {
  const { username, score } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ error: "User not found" });

  user.score = Math.max(user.score, score);
  return res.json({ success: true });
});
app.get("/leaderboard", (req, res) => {
  const sorted = [...users]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  res.json(sorted);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
