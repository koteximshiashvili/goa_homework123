import React,{useState,useEffect} from 'react'

const StopWatch = () => {
    const [time,setTime] = useState(0)
    useEffect(()=>{
        let plus = setInterval(()=>{
            setTime(prev=>prev+1)
            console.log(time)
        } ,1000)
        return () => clearInterval(plus)
    },[])
  return (
    <div>
        <p>{time}</p>
    </div>
  )
}

export default StopWatch