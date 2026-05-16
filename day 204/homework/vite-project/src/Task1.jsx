import React, { useEffect, useState } from 'react'

const Task1 = () => {
    const [number, setNumber] = useState("");
    const [formatted, setFormatted] = useState("");
    useEffect(() => {
        let res = "+995 ";
        for(let i = 0; i < number.length; i++){
            if((i + 1) % 3 === 0 && i !== number.length - 1){
                res += number[i] + " "
                continue
            }
            res += number[i]
        }
        setFormatted(res)
    }, [number])
  return (
    <div>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <p>{formatted}</p>
    </div>
  )
}

export default Task1
