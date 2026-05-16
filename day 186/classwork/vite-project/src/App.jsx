import { useState } from 'react'
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import Extensions from './components/Extensions';
function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <>
      <div className='w-[90%] h-10 bg-[#1f2535] flex items-center justify-between p-2 rounded-2xl'>
        <p className='text-white font-bold'>Extensions</p>
        <button className='flex items-center justify-center w-7 h-7 bg-[#596077] rounded cursor-pointer' onClick={() => setTheme(prev => prev == 'dark' ? 'light' : 'dark')}>{theme != 'dark' ? <FaRegMoon className='text-white' /> : <CiSun className='text-white' />}</button>
      </div>
      <Extensions />
    </>
  )
}

export default App
