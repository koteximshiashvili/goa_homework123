import React, { useEffect, useState } from 'react'
import useDebounce from './Hooks/useDebounce';

const Task3 = () => {
    const [state, setState] = useState("");
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");
    const deBouncedState = useDebounce(state, 500);
    useEffect(() => {
        if (!deBouncedState) return;

        const fetchJoke = async () => {
            try {
                const res = await fetch("https://official-joke-api.appspot.com/random_joke");
                const data = await res.json();
                setSetup(data.setup);
                setPunchline(data.punchline);
            } catch (err) {
                console.error(err);
            }
        };
        fetchJoke();
    }, [deBouncedState]);

  return (
    <div>
      <input type="text" value={deBouncedState} onChange={e => setState(e.target.value)} />
      <p>{setup} {punchline}</p>
    </div>
  )
}

export default Task3
