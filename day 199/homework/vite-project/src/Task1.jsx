import React, { useState } from "react";

export default function Task1() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoadUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setUsers(data);
    } catch {
      setError("Failed to fetch data ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleLoadUsers}>Load Users</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
