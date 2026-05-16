import React, { useState } from 'react';

const Task2 = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
        <h3>{count}</h3>
        <input type="number" value={step} onChange={e => setStep(Number(e.target.value))} style={{ width: '60px' }} />
        <button onClick={() => setCount(prev => prev - step)}>-</button>
        <button onClick={() => setCount(prev => prev + step)}>+</button>
    </div>
  );
};

export default Task2;
