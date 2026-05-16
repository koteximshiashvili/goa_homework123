const Database = require("better-sqlite3");

const db = new Database("devnotes.db");

db.exec(`
    
    CREATE TABLE IF NOT EXISTS notes (
    id INTEGER,
    title TEXT,
    content TEXT,
    category TEXT,
    difficulty TEXT,
    created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
    );
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    FOREIGN KEY (id) REFERENCES notes(id)
    );
`);

module.exports = db;