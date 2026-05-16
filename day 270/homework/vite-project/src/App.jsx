import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";

export default function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selected, setSelected] = useState(null);
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const API = "http://localhost:3020/api";

  useEffect(() => {
    if (user) {
      setPage("play");
      axios.get(`${API}/challenges`)
        .then(res => setChallenges(res.data));
    }
  }, [user]);

  useEffect(() => {
    if (page === "leaderboard") {
      axios.get(`${API}/leaderboard`)
        .then(res => setLeaderboard(res.data));
    }
  }, [page]);

  const submit = async () => {
    if (!selected) return;

    try {
      const res = await axios.post(`${API}/submit`, {
        userId: user.id,
        challengeId: selected.id,
        code
      });

      setFeedback(res.data?.message || "No response");

      const updated = await axios.post(`${API}/login`, {
        username: user.username,
        password: user.password
      });

      setUser({ ...updated.data, password: user.password });

    } catch {
      setFeedback("Server error.");
    }
  };

  if (page === "login")
    return <Login setUser={setUser} goToRegister={() => setPage("register")} />;

  if (page === "register")
    return <Register goToLogin={() => setPage("login")} />;

  if (page === "leaderboard")
    return (
      <div style={styles.leaderboard}>
        <h2>Leaderboard</h2>
        {leaderboard.map((u, i) => (
          <div key={i} style={styles.leaderRow}>
            #{i + 1} — {u.username} ({u.xp} XP)
          </div>
        ))}
        <button style={styles.primaryBtn} onClick={() => setPage("play")}>
          Back
        </button>
      </div>
    );

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={{ marginBottom: 20 }}>CodeArena</h2>

        <div style={styles.userBox}>
          <strong>{user.username}</strong>
          <span>{user.xp} XP</span>
        </div>

        <button style={styles.primaryBtn} onClick={() => setPage("leaderboard")}>
          Leaderboard
        </button>

        <button style={styles.dangerBtn} onClick={() => setUser(null)}>
          Logout
        </button>

        <div style={{ marginTop: 30 }}>
          {challenges.map(c => (
            <div
              key={c.id}
              onClick={() => setSelected(c)}
              style={{
                ...styles.challenge,
                background:
                  selected?.id === c.id
                    ? "#3b82f6"
                    : "rgba(255,255,255,0.05)"
              }}
            >
              {c.title}
              <small style={{ opacity: 0.6 }}>
                {" "}({c.difficulty})
              </small>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.main}>
        {selected ? (
          <>
            <h1>{selected.title}</h1>
            <p style={{ opacity: 0.7 }}>{selected.description}</p>

            <textarea
              style={styles.textarea}
              placeholder="// Write your solution here..."
              onChange={e => setCode(e.target.value)}
            />

            <button style={styles.runBtn} onClick={submit}>
              Run Code
            </button>

            {feedback && (
              <div style={{
                ...styles.feedback,
                color: feedback.includes("Correct")
                  ? "#22c55e"
                  : "#ef4444"
              }}>
                {feedback}
              </div>
            )}
          </>
        ) : (
          <h2>Select a challenge</h2>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    fontFamily: "Inter, sans-serif"
  },

  sidebar: {
    width: 280,
    padding: 25,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    borderRight: "1px solid rgba(255,255,255,0.1)"
  },

  main: {
    flex: 1,
    padding: 50
  },

  userBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    background: "rgba(255,255,255,0.08)",
    borderRadius: 8
  },

  challenge: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    cursor: "pointer",
    transition: "0.2s"
  },

  textarea: {
    width: "100%",
    height: 250,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.2)",
    background: "#0f172a",
    color: "white",
    fontFamily: "monospace",
    fontSize: 14
  },

  runBtn: {
    marginTop: 20,
    padding: "12px 25px",
    borderRadius: 8,
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  },

  primaryBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: 10,
    borderRadius: 8,
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer"
  },

  dangerBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: 8,
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer"
  },

  feedback: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold"
  },

  leaderboard: {
    height: "100vh",
    padding: 60,
    background: "#0f172a",
    color: "white"
  },

  leaderRow: {
    padding: 10,
    marginBottom: 10,
    background: "rgba(255,255,255,0.05)",
    borderRadius: 8
  }
};