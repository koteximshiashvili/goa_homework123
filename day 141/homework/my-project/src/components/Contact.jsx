export default function Contact(){
    return(
        <div className="flex-col flex space-y-2">
        <h1 className="text-5xl font-bold">Contact</h1>
        <div className="bg-[#f4f4f4] rounded w-[270px] h-[300px] border-4 border-gray-700">
            <h3 className="font-bold text-2xl">My number: 123 456 789</h3>
            <h3 className="font-bold text-2xl">Facebook: loremIpsumDolor</h3>
            <h2 className="font-bold text-3xl">Or send a message</h2>
            <input className="font-bold text-2xl w-[90%] h-[40px] border-4 border-gray-700 rounded" type="email" placeholder="Email: "/>
            <input className="font-bold text-2xl w-[90%] h-[40px] border-4 border-gray-700 rounded" type="text" placeholder="Message: "/><br />
            <button  className="rounded text-white w-[190px] h-[30px] bg-amber-800 cursor-pointer" onClick={() => alert("Sent")}>Send</button>
        </div>
        <button className="rounded text-white w-[190px] h-[30px] bg-amber-800 cursor-pointer" onClick={() => console.log("Contact")}>Show component name</button>
        </div>
    )
}