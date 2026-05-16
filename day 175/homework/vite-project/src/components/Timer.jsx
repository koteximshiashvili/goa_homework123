import { useRef, useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const timeRef = useRef(null);
    useEffect(() => {
        let timer = setInterval(() => setSeconds(s => s + 1), 1000);
        timeRef.current = timer;
        return () => clearInterval(timeRef.current);
    }, []);
  return (
    <div>
        <h1 className='font-bold text-3xl text-shadow-fuchsia-900 text-shadow-2xs underline relative text-center text-emerald-600 text-pretty bg-amber-300 leading-normal'>{seconds}</h1>
        <button className='w-40 h-7 shadow-2xl shadow-black border rounded-2xl font-bold bg-green-400 text-white mt-2 font-mono' onClick={() => clearInterval(timeRef.current)}>Pause</button>
        <button className='w-40 h-7 shadow-2xl shadow-black border rounded-2xl font-bold bg-green-400 text-white mt-2 font-mono' onClick={() => setSeconds(0)}>Reset</button>
    </div>
  )
}

export default Timer