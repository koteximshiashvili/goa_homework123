import React, { useState } from 'react'

const Task3 = () => {
    const [state, setState] = useState("");
  return (
    <div>
      <textarea value={state} onChange={e => {
        if(state.length === 100){
            alert("Limit reached");
        }
        else{
            setState(e.target.value);
        }
      }}></textarea>
    </div>
  )
}

export default Task3
