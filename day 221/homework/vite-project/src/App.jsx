import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', marginRight: '10px' }}>+1</button>
      <button onClick={() => setCount(count - 1)} style={{ padding: '10px 20px' }}>-1</button>
      <button onClick={() => setCount(0)} style={{ padding: '10px 20px', marginLeft: '10px' }}>Reset</button>
    </div>
  );
}

export default App;
