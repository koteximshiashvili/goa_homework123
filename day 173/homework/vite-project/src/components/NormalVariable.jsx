import { useState } from "react";
const NormalVariable = () => {
    let count = 0;
    const [render, setRender] = useState(0)
    function incrementCount(){
        count++;
        console.log(count);
        setRender(prev => prev + 1);
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default NormalVariable;