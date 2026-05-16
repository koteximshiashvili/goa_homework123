import { useState } from "react";
import axios from "axios";

export default function Register({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const API = "http://localhost:3020/api";

  const handleRegister = async () => {
    try {
      await axios.post(`${API}/register`, { username, password });
      alert("Registered");
      goToLogin();
    } catch (err) {
      alert(err.response?.data?.message || "Register error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <input style={styles.input} placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button style={styles.button} onClick={handleRegister}>Register</button>
      <p style={styles.link} onClick={goToLogin}>Login</p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: 50, fontFamily: "Arial" },
  input: { display: "block", margin: "10px auto", padding: 10, width: 250 },
  button: { padding: "10px 20px", borderRadius: 6, border: "none", background: "#2196F3", color: "white", cursor: "pointer" },
  link: { marginTop: 15, color: "blue", cursor: "pointer" }
};