import React, { useState, useEffect } from "react"
import axios from "axios"

function App() {
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [analytics, setAnalytics] = useState([])
    const [summary, setSummary] = useState({})
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState("")

    const loadAnalytics = async () => {
        setLoading(true)
        const res = await axios.get("http://localhost:5006/analytics", {
            params: { sort }
        })
        setAnalytics(res.data)
        setLoading(false)
    }

    const loadSummary = async () => {
        const res = await axios.get("http://localhost:5006/summary")
        setSummary(res.data)
    }

    const addManual = async () => {
        if (!category || !amount) return alert("Enter category and amount")

        await axios.post("http://localhost:5006/add", {
            category,
            amount: Number(amount)
        })
        setCategory("")
        setAmount("")
        loadAnalytics()
        loadSummary()
    }

    const addRandom = async () => {
        await axios.post("http://localhost:5006/random")
        loadAnalytics()
        loadSummary()
    }

    const deleteCategory = async (name) => {
        await axios.delete(`http://localhost:5006/category/${name}`)
        loadAnalytics()
        loadSummary()
    }

    useEffect(() => {
        loadAnalytics()
        loadSummary()
    }, [])

    return (
        <div style={styles.container}>

            <div style={styles.summary}>
                <div>Total Transactions: {summary?.transactions ?? 0}</div>
                <div>Total: ${summary?.total ?? 0}</div>
            </div>

            <div style={styles.controls}>
                <input
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    placeholder="Category"
                />
                <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <button onClick={addManual}>Save</button>
                <button onClick={addRandom}>Generate 10</button>
            </div>

            <div style={styles.filters}>
                <select onChange={e => setSort(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="total">Total</option>
                    <option value="average">Average</option>
                </select>
                <button onClick={loadAnalytics}>Apply</button>
            </div>

            {loading ? <p>Loading...</p> :
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Transactions</th>
                            <th>Total</th>
                            <th>Average</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analytics.map((item, index) => (
                            <tr key={index}>
                                <td>{item.category}</td>
                                <td>{item.total_transactions}</td>
                                <td>${item.total}</td>
                                <td>${Number(item.average_amount).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => deleteCategory(item.category)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

const styles = {
    container: { padding: 30, fontFamily: "Arial" },
    summary: { display: "flex", gap: 40, marginBottom: 20, fontWeight: "bold" },
    controls: { display: "flex", gap: 10, marginBottom: 20 },
    filters: { display: "flex", gap: 10, marginBottom: 20 },
    table: { borderCollapse: "collapse", width: "100%", border: "1px solid #ccc" }
}

export default App