import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
      <ul className="space-y-3">
        {users.map(user => (
          <li 
            key={user.id}
            className="p-4 border rounded shadow hover:bg-gray-50 transition"
          >
            <Link to={`/user/${user.id}`} className="text-blue-600 font-medium">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
