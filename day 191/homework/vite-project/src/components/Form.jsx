import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    description: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (isSignup) {
      if (users.find(user => user.name === formData.name)) {
        alert('User already exists');
        return;
      }

      users.push({ ...formData, id: Math.floor(Math.random() * 100000000) });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Successfully registered!');
    } else {
      const existing = users.find(
        user => user.name === formData.name && user.password === formData.password
      );
      if (!existing) {
        alert('Invalid name or password');
        return;
      }
      alert('Login successful!');
    }

    navigate('/main');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isSignup ? 'Sign Up' : 'Log In'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          {isSignup && (
            <>
              <input
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                name="description"
                placeholder="Description"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isSignup ? 'Register' : 'Login'}
          </button>
        </form>
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="mt-4 text-sm text-blue-600 underline"
        >
          {isSignup ? 'Already have an account? Log in' : 'No account? Sign up'}
        </button>
      </div>
    </div>
  );
};

export default Form;
