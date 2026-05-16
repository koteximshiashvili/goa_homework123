import React, { useReducer, useState } from 'react'

function tasksReducer(state, action){
    switch(action.type){
        case "add":
            return [...state, action.newTask];
        case "remove":
            return state.filter((_, index) => action.index != index);
        default:
            return state;
    }
}

const Task1 = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <div>
      <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
      <button onClick={() => tasksDispatch({ type: "add", newTask })}>Add</button>
      {tasks.map((i, ind) => (
        <div key={ind}>
            <p>{i}</p>
            <button onClick={() => tasksDispatch({ type: "remove", index: ind })}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Task1
