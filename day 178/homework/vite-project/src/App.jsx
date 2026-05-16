import { useState, createContext } from 'react'
import Component1 from './components/Component1';

export const ColorContext = createContext();
function App() {
  const [mode, setMode] = useState('dark');

  return (
    <>
      <button className='w-20 h-7 text-xl font-bold bg-blue-400 rounded text-white' onClick={() => setMode(prev => prev === 'dark' ? 'light' : 'dark')}>Change</button>
      <ColorContext.Provider value={mode}>
      <Component1 />
      </ ColorContext.Provider>
      <p>useContext არის ჰუკი რეაქთში რომელიც ამარტივებს მონაცემების გაზიარებას რამოდენიმე კომპონენტს შორის.</p>
    </>
  )
}

export default App
