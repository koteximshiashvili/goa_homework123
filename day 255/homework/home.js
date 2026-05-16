// SQL Injection არის, როდესაც მომხმარებელი მავნე SQL კოდს აწვდის აპლიკაციას inputის საშუალებით.
// მაგალითად თუ ჩვენ არ გვაქვს დაცული ჩვენი მონაცემთა ბაზა მომხმარებელს შეუძლია წაშალოს ის ამ კოდით ; DROP users
// SQL Injectionის გადაჭრა ხდება prepare მეთოდში სადაც ვთქვათ ამის მაგივრად SELECT * FROM users WHERE username = ${username} AND password = ${password} ვწერთ ამას SELECT * FROM users WHERE username = ? AND password = ?
// ეს მუშაობს რადგან database აღარ ასრულებს inputს როგორც კოდს
const Database = require('better-sqlite3');
const db = new Database('app.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )
`).run();


db.prepare(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER,
    user_id INTEGER,
    title TEXT,
    content TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER,
    post_id INTEGER,
    comment TEXT,
  )
`).run();
