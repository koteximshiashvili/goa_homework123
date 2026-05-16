import { useState, useRef } from "react";

const UseRefVar = () => {
      let count = useRef(0);
      const [render, setRender] = useState(0)
      function incrementCount(){
          count.current++;
          console.log(count);
          setRender(prev => prev + 1);
      }
    return (
      <div>
          <p>{count.current}</p>
          <button onClick={incrementCount}>Increment</button>
      </div>
    )
}

export default UseRefVar;