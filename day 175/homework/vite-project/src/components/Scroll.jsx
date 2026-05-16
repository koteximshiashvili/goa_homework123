import { useRef } from "react";

const Scroll = () => {
    const divRef = useRef(null);
  return (
    <>
        <div onClick={() => divRef.current.scrollIntoView({behavior: "smooth"})} className="bg-red-500 w-10 h-10 shadow-2xl rounded-2xl shadow-amber-400 rotate-2 p-2 m-0.5 relative"></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="bg-red-500 w-10 h-10 shadow-2xl rounded-2xl shadow-amber-400 rotate-2 p-2 m-0.5 relative" ref={divRef}></div>
    </>
  )
}

export default Scroll