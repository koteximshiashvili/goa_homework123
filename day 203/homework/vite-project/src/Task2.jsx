import React, { useReducer } from 'react'

const products = [
  { id: 1, name: "Apple", price: 1 },
  { id: 2, name: "Banana", price: 2 },
  { id: 3, name: "Orange", price: 3 }
]
function cartReducer(state, action){
    switch(action.type){
        case "add":
            return [...state, action.product];
        case "remove":
            return state.filter((_, index) => action.index != index);
        default:
            return state;
    }
}
const Task2 = () => {
    const [tasks, tasksDispatch] = useReducer(cartReducer, []);
    
    return (
        <div>
          {products.map((i) => (
            <div>
                <p>{i.name} {i.price}</p>
                <button onClick={() => tasksDispatch({ type: "add", product: { name: i.name, price: i.price } })}>Add</button>
            </div>
          ))}
          {tasks.map((i, ind) => (
            <div key={ind}>
                <p>{i.name} {i.price}</p>
                <button onClick={() => tasksDispatch({ type: "remove", index: ind })}>Remove</button>
            </div>
          ))}
        </div>
      )
}

export default Task2
