const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = new Database("time_travel.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS agents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  skill INTEGER,
  level INTEGER DEFAULT 1,
  missions_completed INTEGER DEFAULT 0
)`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS missions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  difficulty INTEGER,
  reward INTEGER
)`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  agent_id INTEGER,
  mission_id INTEGER,
  result TEXT,
  timestamp TEXT
)`).run();

const agentCount = db
  .prepare("SELECT COUNT(*) as count FROM agents").count;

if (agentCount === 0) {
  db.prepare(`
    INSERT INTO agents (name, skill) VALUES
    ('Shadow Ninja', 70),
    ('Cyber Robot', 85),
    ('Time Wizard', 60)
  `).run();

  db.prepare(`
    INSERT INTO missions (title, difficulty, reward) VALUES
    ('Stop Dinosaur Rampage 🦖', 50, 100),
    ('Hack Future AI 🤖', 80, 200),
    ('Steal Pirate Treasure 🏴‍☠️', 60, 150)
  `).run();
}

app.get("/agents", (req, res) => {
  const data = db.prepare("SELECT * FROM agents").all();
  res.json(data);
});

app.get("/missions", (req, res) => {
  const data = db.prepare("SELECT * FROM missions").all();
  res.json(data);
});

app.get("/logs", (req, res) => {
  const data = db
    .prepare("SELECT * FROM logs ORDER BY id DESC")
    .all();
  res.json(data);
});

app.post("/agents", (req, res) => {
  const { name, skill } = req.body;

  const result = db
    .prepare("INSERT INTO agents (name, skill) VALUES (?, ?)")
    .run(name, skill);

  res.json({ id: result.lastInsertRowid });
});

app.post("/missions", (req, res) => {
  const { title, difficulty, reward } = req.body;

  const result = db
    .prepare(
      "INSERT INTO missions (title, difficulty, reward) VALUES (?, ?, ?)"
    )
    .run(title, difficulty, reward);

  res.json({ id: result.lastInsertRowid });
});

app.post("/run-mission", (req, res) => {
  const { agent_id, mission_id } = req.body;

  const agent = db
    .prepare("SELECT * FROM agents WHERE id=?")
    .get(agent_id);

  const mission = db
    .prepare("SELECT * FROM missions WHERE id=?")
    .get(mission_id);

  if (!agent || !mission) {
    return res.status(404).send("Agent or mission not found");
  }

  const successChance = agent.skill + agent.level * 5;
  const roll = Math.random() * 100;

  let result = "FAILED";

  if (roll < successChance - mission.difficulty) {
    result = "SUCCESS";

    db.prepare(`
      UPDATE agents
      SET missions_completed = missions_completed + 1,
          level = level + 1
      WHERE id=?
    `).run(agent.id);
  }

  db.prepare(`
    INSERT INTO logs (agent_id, mission_id, result, timestamp)
    VALUES (?, ?, ?, ?)
  `).run(agent.id, mission.id, result, new Date().toISOString());

  res.json({ result, roll });
});

app.listen(4000);