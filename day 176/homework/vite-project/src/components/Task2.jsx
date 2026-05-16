import { useRef } from 'react';

const Task2 = () => {
    const inputRef = useRef(null);
    const SaveToLocalStorage = () => localStorage.setItem("Name", inputRef.current.value);
  return (
    <div>
        <input type="text" ref={inputRef} className='font-bold w-35 h-7 rounded p-[5px]'/>
        <button onClick={SaveToLocalStorage} className='font-bold text-white w-20 h-7 bg-cyan-500 rounded p-[5px]'>Submit</button>
    </div>
  );
};

export default Task2;