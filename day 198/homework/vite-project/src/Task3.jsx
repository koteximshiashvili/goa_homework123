import React, { useEffect, useState, useRef } from 'react'

const Task3 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  

  return (
    <div>
      <h1>{seconds}</h1>
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}

export default Task3