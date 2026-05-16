import { useState } from "react";

export default function Changination({ user, onLogout, onDelete }) {
  const [username, setUsername] = useState(user.username);

  const update = () => {
    const updatedUser = { ...user, username };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("daapdeitda");
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Welcome {user.username}</h2>
      <input className="w-full p-2 mb-3 border border-gray-300 rounded" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <div className="flex flex-col gap-2">
        <button onClick={update} className="flex-1 bg-yellow-400 text-white p-2 rounded hover:bg-yellow-500 transition">Update</button>
        <button onClick={onLogout} className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Logout</button>
        <button onClick={onDelete} className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">Delete Account</button>
      </div>
    </div>
  );
}
