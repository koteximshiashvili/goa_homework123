import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [going, setGoing] = useState(true);

  useEffect(() => {
    let interval = null;

    if (going) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [going]);

  const Stop = () => {
    setGoing(false);
  };

  const Resume = () => {
    setGoing(true);
  };

  const Reset = () => {
    setTime(0);
    setGoing(false);
  };

  return (
    <div>
        <h1 className='font-black text-2xl'>{time}</h1>
        <button onClick={Reset} className="rounded-xl border-2 border-black font-black text-[18px]">Reset</button>
        <button onClick={Stop} className="rounded-xl border-2 border-black font-black text-[18px]">Stop</button>
        <button onClick={Resume} className="rounded-xl border-2 border-black font-black text-[18px]">Resume</button>
    </div>
  );
};

export default Timer;
