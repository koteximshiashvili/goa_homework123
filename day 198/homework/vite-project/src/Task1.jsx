import React, { useState } from 'react'

const Task1 = () => {
    const [state, setState] = useState("");
  return (
    <div>
        <input type='text' value={state} onChange={e => setState(e.target.value)} />
        <p>{state}</p>
    </div>
  )
}

export default Task1