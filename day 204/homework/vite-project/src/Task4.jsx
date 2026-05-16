import React, { useEffect, useState } from 'react'

const Task4 = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");
    useEffect(() => {
        if(count < 0){
            setColor("red");
        }
        else if(count > 5){
            setColor("green");
        }
        else{
            setColor("black")
        }
    }, [count])
  return (
    <div>
      <p style={{color, fontSize: 24}}>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default Task4
