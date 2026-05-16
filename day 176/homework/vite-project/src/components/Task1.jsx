import { useEffect, useRef, useState } from 'react'

const Task1 = () => {
    const [count, setCount] = useState(0);
    const prevRef = useRef(null);
    const [text, setText] = useState("Up")
    useEffect(() => {
        prevRef.current = count;
    }, [count]);
    const Increase = () => {
        setCount(prev => prev + 1);
        setText("Up");
    };
    const Decrease = () => {
        setCount(prev => prev - 1);
        setText("Down");
    };
  return (
    <div>
        <p className='font-bold text-2xl'>Count: {count}</p>
        <p className='font-bold text-2xl'>Previous Count: {prevRef.current}</p>
        <div className='font-bold text-2xl'>{text}</div>
        <div className='flex space-x-2'>
            <button onClick={Increase} className='font-bold text-white w-20 h-7 bg-cyan-500 rounded p-[5px] mt-2 cursor-pointer'>Increase</button>
            <button onClick={Decrease} className='font-bold text-white w-20 h-7 bg-cyan-500 rounded p-[5px] mt-2 cursor-pointer'>Decrease</button>
        </div>
    </div>
  );
};

export default Task1;