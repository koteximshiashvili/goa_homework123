import { useRef, useEffect } from 'react';

const Form = () => {
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    function check(){
        if(!inputRef.current?.value){
            inputRef.current?.focus();
        }
        else if(!inputRef1.current?.value){
            inputRef1.current?.focus();
        }
    }
    useEffect(check, []);
  return (
    <>
        <input className='w-40 h-7 shadow-2xl shadow-black border rounded-2xl font-bold p-4 mt-2 font-mono' type="text" ref={inputRef} />
        <input className='w-40 h-7 shadow-2xl shadow-black border rounded-2xl font-bold p-4 mt-2 font-mono' type="number" ref={inputRef1} />
        <button className='w-40 h-7 shadow-2xl shadow-black border rounded-2xl font-bold bg-green-400 text-white mt-2 font-mono' type='submit' onClick={check}>Submit</button>
    </>
  )
}

export default Form