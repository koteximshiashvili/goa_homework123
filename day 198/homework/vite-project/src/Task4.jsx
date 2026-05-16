import React, { useEffect, useState } from 'react';

const Task4 = () => {
  const storedUsers = localStorage.getItem("users");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [users, setUsers] = useState(storedUsers ? JSON.parse(storedUsers) : []);
  useEffect(() => { localStorage.setItem("users", JSON.stringify(users)); }, [users]);
  const validate = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError(true);
      return;
    }
    setError(false);
    setUsers(prev => [...prev, { name, email, password }]);
    setName(""); setEmail(""); setPassword("");
  };
  return (
    <form>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={validate}>Submit</button>
      {error && <p>Fill in all fields</p>}
    </form>
  );
};

export default Task4;
