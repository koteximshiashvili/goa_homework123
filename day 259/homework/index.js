const express = require('express')
const Database = require('better-sqlite3')

const app = express()
app.use(express.json())

const db = new Database('db.db')

db.prepare(`
  CREATE TABLE IF NOT EXISTS sentences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  )
`).run()

app.post('/sentence', (req, res) => {
  const { text } = req.body
  if (!text) return res.status(400).json({ error: 'text required' })

  db.prepare('INSERT INTO sentences (text) VALUES (?)').run(text)

  res.json({ ok: true })
})

app.get('/sentence', (req, res) => {
  const { q } = req.query

  let sql = 'SELECT * FROM sentences'
  const args = []

  if (q) {
    sql += ' WHERE text LIKE ?'
    args.push(`%${q}%`)
  }

  const rows = db.prepare(sql).all(...args)
  res.json(rows)
})

app.listen(3000, () => {
  console.log('running on 3000')
})
