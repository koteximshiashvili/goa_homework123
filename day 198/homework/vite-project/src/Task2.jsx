import React, { useEffect, useState } from 'react'

const colors = ["red", "green", "yellow", "blue"];
const Task2 = () => {
    const [color, setColor] = useState("red");
    useEffect(() => {
    const click = () => {
        setColor(colors[Math.floor(Math.random() * 4)]);
    };

    document.addEventListener("click", click);

    return () => {
        document.removeEventListener("click", click);
    };
}, []);


  return (
    <div>
        <button style={{background: `${color}`}}>Hello</button>
    </div>
  )
}

export default Task2