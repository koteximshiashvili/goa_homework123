import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(`${API_URL}/tasks`);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post(`${API_URL}/tasks`, { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/tasks/${id}`);
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.put(`${API_URL}/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        background: "#1e293b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}>
      <div style={{
          width: "100%",
          maxWidth: 420,
          background: "#020617",
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          color: "white"
        }}>
        <div style={{
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 16
          }}>
          Todo List
        </div>

        <div style={{
            display: "flex",
            gap: 8,
            marginBottom: 16
          }}>
          <input value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New task"
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid #1e293b",
              background: "#020617",
              color: "white",
              outline: "none"
            }}/>
          <button onClick={addTask}
            style={{
              padding: "10px 16px",
              borderRadius: 12,
              border: "none",
              background: "#4f46e5",
              color: "white",
              fontWeight: 500,
              cursor: "pointer"
            }}>
            Add
          </button>
        </div>

        <ul style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}>
          {tasks.map((task) => (
            <li key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#020617",
                border: "1px solid #1e293b",
                borderRadius: 12,
                padding: "10px 14px"
              }}
            >
              <span
                onClick={() => toggleTask(task.id)}
                style={{
                  cursor: "pointer",
                  fontSize: 14,
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#94a3b8" : "white"
                }}
              >
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#f87171",
                  cursor: "pointer",
                  fontSize: 16
                }}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}