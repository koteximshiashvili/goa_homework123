import { useState } from "react"
function Counter(){
const [count, setCount] = useState(0)
  return (
    <>
      <p className='font-bold text-8xl'>{count}</p>
      <div className='flex space-x-2'>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(c => c + 1)}>Add</button>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(c => c - 1)}>Decrease</button>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}
export default Counter