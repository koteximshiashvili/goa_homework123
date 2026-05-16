import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin, switchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/login', { username, password });
      if (res.data && res.data.username) {
        onLogin(res.data.username);
      } else {
        alert(res.data.error || 'Login failed');
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: '60px auto', padding: 20, background: 'rgba(255,255,255,0.04)', borderRadius: 12 }}>
      <h3 style={{ marginBottom: 12 }}>Sign in</h3>
      <form onSubmit={submit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" className="w-full p-2 mb-2" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" className="w-full p-2 mb-4" />
        <button type="submit" className="w-full p-2 bg-indigo-600 rounded" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
      <p style={{ marginTop: 12, textAlign: 'center' }}>
        No account? <button onClick={switchToRegister} className="underline">Create one</button>
      </p>
    </div>
  );
}
