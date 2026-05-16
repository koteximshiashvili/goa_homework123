import React, { useRef } from 'react'
import { useParams } from 'react-router';
import { users } from '../data';
const User = () => {
const { id } = useParams();
  const user = users.find(u => u.id.toString() === id);

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.description}</p>
    </div>
  );
}

export default User