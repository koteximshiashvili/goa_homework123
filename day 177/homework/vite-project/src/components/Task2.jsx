import React, { useEffect, useState } from 'react'

const Task2 = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const keyPress = () => {if (isFocused) setCount(prev => prev + 1)};
        window.addEventListener("keyup", keyPress);
        return () => window.removeEventListener('keyup', keyPress)
    }, [isFocused]);
  return (
    <div>
        <p className='font-bold text-2xl'>{count}</p>
        <input type="text" className='border font-bold w-35 h-7 rounded p-[5px]' onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
    </div>
  )
}

export default Task2