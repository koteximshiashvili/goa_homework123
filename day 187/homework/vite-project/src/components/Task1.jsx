import React, { useState, useTransition } from 'react'
const arr = Array.from({length: 10000}, (_, index) => `item: ${index + 1}`);
const Task1 = () => {
  const [state, setState] = useState("");
    const [newArr, setNewArr] = useState([]);
    const [isPending, startTransition] = useTransition();
    const change = e => {
        const inputValue = e.target.value;
        setState(inputValue);
        startTransition(() => {
            setNewArr(arr.filter(i => i.toLowerCase().includes(inputValue.toLowerCase())));
        });
    }
  return (
    <div>
        <input type="text" value={state} onChange={e => change(e)}/>
        {newArr.map(i => <p>{i}</p>)}
    </div>
  )
}

export default Task1