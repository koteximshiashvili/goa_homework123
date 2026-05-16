import { useState } from "react";
import axios from "axios";

export default function Login({ setUser, goToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const API = "http://localhost:3020/api";

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/login`, { username, password });
      setUser({ ...res.data, password });
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input style={styles.input} placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button style={styles.button} onClick={handleLogin}>Login</button>
      <p style={styles.link} onClick={goToRegister}>Register</p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: 50, fontFamily: "Arial" },
  input: { display: "block", margin: "10px auto", padding: 10, width: 250 },
  button: { padding: "10px 20px", borderRadius: 6, border: "none", background: "#4CAF50", color: "white", cursor: "pointer" },
  link: { marginTop: 15, color: "blue", cursor: "pointer" }
};