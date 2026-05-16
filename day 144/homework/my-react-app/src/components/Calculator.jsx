import { useState } from "react";
function Calculator(){
   const [count, setCount] = useState(0);
   const [numberOne, setNumberOne] = useState(0);
   const [numberTwo, setNumberTwo] = useState(0);
   function changeNumberOne(event){
    if(event.target.value === ""){
        setNumberOne(0)
    }
    else{
        setNumberOne(parseFloat(event.target.value));
    };
   };
   function changeNumberTwo(event){
    if(event.target.value === ""){
        setNumberTwo(0)
    }
    else{
        setNumberTwo(parseFloat(event.target.value));
    };
   };
   return (
    <>
      <p className='font-bold text-8xl'>Answer: {count}</p>
      <input type="text"  placeholder="Enter a number:" onChange={(event) => changeNumberOne(event)} value={numberOne}/>
      <input type="text"  placeholder="Enter a number:" onChange={(event) => changeNumberTwo(event)} value={numberTwo}/>
      <div className='flex space-x-2'>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(n => numberOne + numberTwo)}>+</button>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(n => numberOne - numberTwo)}>-</button>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(n => numberOne * numberTwo)}>*</button>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(n => numberOne / numberTwo)}>/</button>
      <button className='w-[100px] h-[40px] bg-[#7d89ff] rounded text-2xl font-bold' onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}
export default Calculator