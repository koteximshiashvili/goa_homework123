import React, { useState } from 'react';

const Task4 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)} style={{
          cursor: 'pointer',
          backgroundColor: isDark ? '#333' : '#ddd',
          color: isDark ? '#fff' : '#000',
          border: 'none'}}>switch to {isDark ? 'Light' : 'Dark'} Mode</button>
    </div>
  );
};

export default Task4;
