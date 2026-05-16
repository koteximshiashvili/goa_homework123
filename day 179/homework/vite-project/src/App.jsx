import { useState, createContext } from 'react'
import Login from './Login';
import Counter from './Counter';

export const Mode = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <button onClick={setDarkMode(prev => !prev)}>Change Mode</button>
      <Mode.Provider value={darkMode}>
      {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} setCount={setCount} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/> : <Counter count={count} setCount={setCount} username={username} password={password}/>}
      </Mode.Provider>
    </>
  )
}

export default App
