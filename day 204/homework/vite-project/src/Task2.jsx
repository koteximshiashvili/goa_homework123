import React, { useState } from 'react'

const Task2 = () => {
    const [state, setState] = useState({name: "", surname: "", email: ""});
    console.log(state);
  return (
    <div>
      <input type="text" value={state.name} onChange={e => setState(prev => ({...prev, name: e.target.value}))}/>
      <input type="text" value={state.surname} onChange={e => setState(prev => ({...prev, surname: e.target.value}))}/>
      <input type="text" value={state.email} onChange={e => setState(prev => ({...prev, email: e.target.value}))}/>
    </div>
  )
}

export default Task2
