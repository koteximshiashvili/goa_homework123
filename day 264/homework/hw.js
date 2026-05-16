import Database from 'better-sqlite3';

const db = new Database('data.db');

db.prepare(`
CREATE TABLE IF NOT EXISTS Authors (
    author_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    birth_year INTEGER CHECK (birth_year > 0),
    country TEXT NOT NULL
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS Books (
    book_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    publish_year INTEGER CHECK (publish_year > 0),
    genre TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS Members (
    member_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    join_date TEXT DEFAULT CURRENT_TIMESTAMP
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS Loans (
    loan_id INTEGER PRIMARY KEY,
    book_id INTEGER NOT NULL,
    member_id INTEGER NOT NULL,
    loan_date TEXT DEFAULT CURRENT_TIMESTAMP,
    return_date TEXT
)
`).run();
