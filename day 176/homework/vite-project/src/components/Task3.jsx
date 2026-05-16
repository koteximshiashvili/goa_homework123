import React, { useEffect, useRef, useState } from 'react'

const Task3 = () => {
    const [direction, setDirection] = useState("Up");
    const scroll = useRef(0);
    useEffect(() => {
        const Scroll = () => {
            const currentScroll = window.scrollY;
            if(scroll < currentScroll.current){
                setDirection("Down");
            } else{
                setDirection("Up");
            };
            scroll.current = currentScroll;
        };
        window.addEventListener("scroll", Scroll);
        return () => window.removeEventListener("scroll", Scroll);
    }, []);
  return (
    <div>
        <p className='font-bold text-2xl'>{direction}</p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Task3