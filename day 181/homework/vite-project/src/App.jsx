import { useState, useReducer } from 'react';

function tasksReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (action.newTask && action.newTask.trim()) {
        return [...state, action.newTask];
      }
    case 'REMOVE':
      return state.filter((_, ind) => ind !== action.index);
    default:
      return state;
  }
}

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [newTask, setNewTask] = useState('');

  function updateNewTask(e) {
    setNewTask(e.target.value);
  }

  function add() {
    tasksDispatch({ type: 'ADD', newTask });
    setNewTask('');
  }

  function remove(index) {
    tasksDispatch({ type: 'REMOVE', index });
  }

  return (
    <>
      <input className='border w-30 h-7 rounded shadow-2xs shadow-black bg-white' type="text" value={newTask} onChange={e => updateNewTask(e)} />
      <button onClick={add} className='bg-blue-500 text-white font-bold rounded p-[2px]'>Add To List</button>
      <ul className='flex flex-col space-y-2'>
        {tasks.map((el, index) => <li key={index} className='w-44 h-7 bg-[#f4f4f4] font-bold flex justify-between items-center p-4'>{el}<button onClick={() => remove(index)} className='bg-blue-500 text-white font-bold rounded p-[2px]'>Remove</button></li> )}
      </ul>
      <p>useReducer არის Reactის hook რომელიც საშუალებას გვაძლევს რომ ვმართოთ უფრო კომპლექსური stateის ლოგიკა. useReducer იყენებს რედიუსერის ფუნქციას, რომელსაც გადაეცემა პარამეტრად state და action, და აბრუნებს განახლებულ მდგომარეობას actionის მიხედვით. რედიუსერის ფუნქციაში იყენებენ switchს</p>
    </>
  );
}

export default App;
