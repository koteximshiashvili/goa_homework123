import { useEffect, useState } from 'react'

const Task1 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const AddToCount = () => setCount(prev => prev + 1);
        window.addEventListener('click', AddToCount);
        return () => window.removeEventListener('click', AddToCount);
    }, []);
  return (
    <div className='font-bold text-2xl'>{count}</div>
  )
}

export default Task1