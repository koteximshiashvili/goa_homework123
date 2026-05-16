import { useContext } from 'react';
import { Mode } from './App';

const Login = ({ setIsLoggedIn, setCount, username, setUsername, password, setPassword }) => {
    const mode = useContext(Mode);
    const validate = () => {
        const users = localStorage.getItem('users')
        for(let i = 0; i < users.length; i++){
            if(users[i].username === username || localStorage[i].password === password){
                setIsLoggedIn(true);
                setCount(users[i].count);
                break;
            }
        }
    }
  return (
    <div>
        <label className={mode ? 'font-bold text-white text-2xl' : 'font-bold text-2xl'} htmlFor="username">Username:</label>
        <input className={mode ? 'font-bold border text-2xl text-white bg-blue-950' : 'font-bold border text-2xl'} type="text" id='username' value={username} onChange={e => setUsername(e.target.value)} />
        <label className={mode ? 'font-bold text-white text-2xl' : 'font-bold text-2xl'} htmlFor="password">Password:</label>
        <input className={mode ? 'font-bold border text-2xl text-white bg-blue-950' : 'font-bold border text-2xl'} type="password" id='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button className={mode ? 'font-bold text-white bg-blue-950 w-35 h-7' : 'font-bold bg-blue-400 w-35 h-7'} onClick={validate}>Submit</button>
    </div>
  )
}

export default Login