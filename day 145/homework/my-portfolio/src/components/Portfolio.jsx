import { useState } from "react"
function Portfolio(){
    const [text, setText] = useState("Follow me")
    const [bg, setBg] = useState("bg-red-400")
    function change(){
        if (bg === "bg-red-400"){
            setText("Unfollow")
            setBg("bg-white")
        }
        else{
            setText("Follow me")
            setBg("bg-red-400")
        }
    }
    return(
        <div className="w-[350px] h-[450px] rounded-3xl bg-[#f4f4f4] relative flex-col flex items-center">
            <img src="https://www.maketecheasier.com/assets/uploads/2020/02/Lorem-Ipsum-Featured-800x400.jpg" className="w-[100%] h-[100px]"/>
            <img src="https://www.maketecheasier.com/assets/uploads/2020/02/Lorem-Ipsum-Featured-800x400.jpg" className="w-[100px] h-[100px] rounded-[50%] absolute z-10 bottom-[300px] left-[125px] border-6 border-[#f4f4f4]"/>
            <h1 className="relative top-[45px] font-bold text-3xl">Kote</h1>
            <p className="relative top-[45px] font-bold">Hello my name is kote i am 12 years old. i live in georgia, batumi. i like coding. i have many friends. my hobbies are playing chess, playing tennis and coding.</p>
            <span className="relative top-[50px] font-bold text-[19px]">facebook: https:/efhuurfugr</span>
            <p className="relative top-[60px] font-bold text-[19px]">phone number: 123 456 789</p>
            <p className="relative top-[60px] font-bold text-[19px]">email: kotekhimshiashvili@gmail.com</p>
            <button onClick={change} className={`w-[130px] rounded relative top-[75px] font-bold text-[19px] cursor-pointer ${bg}`}>{text}</button>
        </div>
    )
}
export default Portfolio