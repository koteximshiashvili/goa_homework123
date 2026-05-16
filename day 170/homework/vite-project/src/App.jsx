import { useState, useEffect } from 'react';
import Input from './Input';
import StopWatch from './StopWatch';
function App() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    function cleanUp(){
      window.removeEventListener("resize", handleResize)
    }
    return cleanUp
  },[])

  return (
    <>
      <h1>{width}</h1>
      <Input />
      <StopWatch />
    </>
  )
}

export default App