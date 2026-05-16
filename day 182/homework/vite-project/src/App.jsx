import { useState, useReducer, useEffect } from 'react';

const inputReducer = (state, action) => {
  switch(action.type){
    case "UNDO":
      if(action.payload != 0){
        const newIndex = action.payload - 1
        action.setIndex(newIndex);
        return action.history[newIndex]
      };
      return state 
      case "REDO":
      if(action.payload != action.history.length - 1){
        const newIndex = action.payload + 1
        action.setIndex(newIndex);
        return action.history[newIndex]
      };
      return state 
      case "INPUT":
        return action.payload
      default:
        return state
  }
}
const timeReducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, running: true };
    case 'STOP':
      return { ...state, running: false };
    case 'RESET':
      return { time: 0, running: false };
    case 'TICK':
      return state.running ? { ...state, time: state.time + 1 } : state;
    default:
      return state;
  }
};
function App() {
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(-1);
  const [input, inputDispatch] = useReducer(inputReducer, "");
  const [state, dispatch] = useReducer(timeReducer, {time: 0, running: false,});

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <input className='border w-30 h-7 rounded shadow-2xs shadow-black bg-white' onChange={e => {
        setHistory(prev => [...prev, e.target.value]);
        setIndex(prev => prev + 1);
        inputDispatch({ type: 'INPUT', payload: e.target.value });
        }} value={input}/>
      <button className='bg-blue-500 text-white font-bold rounded p-[2px]' onClick={() => alert(input)}>Submit</button>
      <button className='bg-blue-500 text-white font-bold rounded p-[2px]' onClick={() => inputDispatch({type: "REDO", payload: index, history, setIndex})}>Redo</button>
      <button className='bg-blue-500 text-white font-bold rounded p-[2px]' onClick={() => inputDispatch({type: "UNDO", payload: index, history, setIndex})}>Undo</button>
      <p className='font-bold text-2xl'>{state.time}</p>
      <button className='bg-blue-500 text-white font-bold rounded p-[2px]' onClick={() => dispatch({ type: 'START' })}>Start</button>
      <button className='bg-blue-500 text-white font-bold rounded p-[2px]' onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
      <button className='bg-blue-500 text-white font-bold rounded p-[2px]' onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button className='bg-blue-500 text-white font-bold rounded p-[2px]' onClick={() => dispatch({ type: 'TICK' })}>Tick</button>
    </>
  )
}

export default App
