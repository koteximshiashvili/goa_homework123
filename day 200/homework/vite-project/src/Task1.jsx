import React, { useState } from 'react'

const Task1 = () => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div>
        <input type={visible ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default Task1