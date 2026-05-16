import { useState } from "react"

const UseStateVar = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => {
            setCount(prev => {
                let updated = prev + 1;
                console.log(updated);
                return updated;
            });
        }}>Increment</button>
    </div>
  )
}

export default UseStateVar