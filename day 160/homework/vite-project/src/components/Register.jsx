import { useState } from 'react';

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && email) {
      const user = { username, email };
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br />
      <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
