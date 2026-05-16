const express = require("express")
const Database = require("better-sqlite3")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = new Database("analytics.db")

db.prepare(`
    CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT NOT NULL,
        amount INTEGER NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
`).run()

app.post("/add", (req, res) => {
    const { category, amount } = req.body

    if (!category || !amount) {
        return res.status(400).json({ error: "Missing fields" })
    }

    db.prepare(`
        INSERT INTO sales (category, amount)
        VALUES (?, ?)
    `).run(category, amount)

    res.json({ status: "ok" })
})

app.post("/random", (req, res) => {
    const categories = ["Food", "Tech", "Books", "Clothes"]
    const insert = db.prepare(`
        INSERT INTO sales (category, amount)
        VALUES (?, ?)
    `)

    for (let i = 0; i < 10; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)]
        const amount = Math.floor(Math.random() * 500) + 1
        insert.run(category, amount)
    }

    res.json({ status: "ok" })
})

app.delete("/category/:name", (req, res) => {
    db.prepare(`DELETE FROM sales WHERE category = ?`).run(req.params.name)
    res.json({ status: "deleted" })
})

app.get("/analytics", (req, res) => {
    const { sort } = req.query
    let query = `
        SELECT
            category,
            COUNT(*) AS total_transactions,
            SUM(amount) AS total,
            AVG(amount) AS average_amount
        FROM sales
        GROUP BY category
    `

    if (sort === "total") query += " ORDER BY total DESC"
    if (sort === "average") query += " ORDER BY average_amount DESC"

    const data = db.prepare(query).all()
    res.json(data)
})

app.get("/summary", (req, res) => {
    const result = db.prepare(`
        SELECT
            COUNT(*) as transactions,
            SUM(amount) as total
        FROM sales
    `).get()

    res.json({
        transactions: result.transactions,
        total: result.total
    })
})

app.listen(5006, () => console.log("Server running on 5006"))