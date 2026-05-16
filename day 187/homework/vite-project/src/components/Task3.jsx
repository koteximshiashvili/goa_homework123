import React, { useState, useTransition } from 'react'
const arr = Array.from({length: 10000}, (_, index) => `item: ${index + 1}`);
const Task3 = () => {
    const [newArr, setNewArr] = useState(arr);
    const [isPending, startTransition] = useTransition();
    const remove = index => {
        startTransition(() => {
            setNewArr(prev => prev.filter((_,ind) => index !== ind))
        })
        }
  return (
    <div>
        {isPending && <p>Working...</p>}
        {newArr.map((i, index) => (
            <div key={index}>
                <p>{i}</p>
                <button onClick={() => remove(index)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Task3