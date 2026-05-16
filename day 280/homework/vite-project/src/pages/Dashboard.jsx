import {useEffect,useState} from "react"
import {getNotes} from "../api"
import StatsCard from "../components/StatsCard"

export default function Dashboard(){

    const [notes,setNotes]=useState([])

    useEffect(()=>{
        load()
    },[])

    async function load(){
    const data=await getNotes()
    setNotes(data)
    }

    const easy=notes.filter(n=>n.difficulty==="Easy").length
    const medium=notes.filter(n=>n.difficulty==="Medium").length
    const hard=notes.filter(n=>n.difficulty==="Hard").length

    return(

        <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
            Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4">

        <StatsCard title="Total Notes" value={notes.length}/>
        <StatsCard title="Easy" value={easy}/>
        <StatsCard title="Medium" value={medium}/>
        <StatsCard title="Hard" value={hard}/>

        </div>

        </div>

)
}