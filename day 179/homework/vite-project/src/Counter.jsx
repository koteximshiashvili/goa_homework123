import React, { useEffect, useContext } from 'react'
import { Mode } from './App'
const Counter = ({count, setCount, username, password}) => {
    const mode = useContext(Mode)
    useEffect(() => {
        const users = localStorage.getItem('users')
        for(let i = 0; i < users.length; i++){
            if(users[i].username === username || users[i].password === password){
                localStorage.setItem('users', users.map((item, index) => index === i ? {...item, count} : item))
                break;
            }
        }
    }, [count])
  return (
    <div>
        <p className={mode ? 'font-bold text-white text-2xl' : 'font-bold text-2xl'}>Count: {count}</p>
        <button className={mode ? 'font-bold text-white bg-blue-950 w-35 h-7' : 'font-bold bg-blue-400 w-35 h-7'} onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default Counter