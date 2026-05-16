import React, { useEffect, useRef } from 'react'

const Task5 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        divRef.current.addEventListener("mouseover", () => divRef.current.style.background = "green");
        divRef.current.addEventListener("mouseout", () => divRef.current.style.background = "black")
    }, []);
  return (
    <div ref={divRef} style={{background: "black", width: 200, height: 200}}>
      
    </div>
  )
}

export default Task5
