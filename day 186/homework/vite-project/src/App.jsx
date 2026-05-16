import { useState, createContext } from 'react'
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import Extensions from './components/Extensions';
export const Theme = createContext();
function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <div className={theme === 'dark' ? 'w-[90%] h-10 bg-[#1f2535] flex items-center justify-between p-2 rounded-2xl' : 'bg-[#fcfdff] w-[90%] h-10 flex items-center justify-between p-2 rounded-2xl'}>
        <div className='flex'>
            <img src="/assets/images/logo.svg" alt="logo" width={130} height={130}/>
            {theme === "dark" ? <p className="absolute left-27 top-3.5 text-white font-bold text-[18px]">Extensions</p> : <p></p>}
        </div>
        <button className={theme === 'dark' ? 'flex items-center justify-center w-7 h-7 bg-[#596077] rounded cursor-pointer' : ' rounded cursor-pointer bg-[#d9d9d8] flex items-center justify-center w-7 h-7'} onClick={() => setTheme(prev => prev == 'dark' ? 'light' : 'dark')}>{theme != 'dark' ? <FaRegMoon /> : <CiSun className='text-white' />}</button>
      </div>
      <Theme.Provider value={theme}>
      <Extensions />
      </Theme.Provider>
    </>
  )
}

export default App
