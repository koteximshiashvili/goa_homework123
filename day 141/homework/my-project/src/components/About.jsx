export default function About(){
    return(
        <div className="flex-col flex space-y-2">
        <h1 className="text-5xl font-bold">About</h1>
        <div className="bg-[#f4f4f4] rounded w-[200px] h-[200px] border-4 border-gray-700">
            <p className="font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eligendi fuga natus quasi.</p>
        </div>
        <button className="rounded text-white w-[190px] h-[30px] bg-amber-800 cursor-pointer" onClick={() => console.log("About")}>Show component name</button>
        </div>
    )
}