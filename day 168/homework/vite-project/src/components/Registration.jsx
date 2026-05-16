import { useState } from "react";

export default function Registration({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = {username, password};
    localStorage.setItem("user", JSON.stringify(user));
    onRegister(user);
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <input className="w-full p-2 mb-3 border border-gray-300 rounded" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition" onClick={handleRegister}>Register</button>
    </div>
  );
}
