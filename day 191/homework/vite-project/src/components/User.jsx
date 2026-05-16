import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.id.toString() === id);

  if (!user) return <p className="p-6">User not found</p>;

  return (
    <div className="p-6 bg-white max-w-md shadow rounded">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700">Gender: {user.gender}</p>
      <p className="text-gray-700 mt-2">Description: {user.description}</p>
    </div>
  );
};

export default User;
