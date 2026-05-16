import {useEffect,useState} from "react"
import {getNotes,deleteNote} from "../api"
import NoteCard from "../components/NoteCard"
import SearchBar from "../components/SearchBar"

export default function Notes(){

    const[notes,setNotes]=useState([])
    const[search,setSearch]=useState("")

    useEffect(()=>{
        load()
    },[])

    async function load(){
    const data=await getNotes()
    setNotes(data)
    }

    async function handleDelete(id){
    await deleteNote(id)
    load()
    }

    const filtered=notes.filter(n=>
    n.title.toLowerCase().includes(search.toLowerCase())
    )

    return(

        <div className="p-8">

        <h1 className="text-3xl font-bold mb-4">
            Notes
        </h1>

        <SearchBar value={search} onChange={setSearch}/>

        <div className="grid gap-4 mt-6">

        {filtered.map(n=>(
            <NoteCard key={n.id} note={n} onDelete={handleDelete}/>
        ))}

        </div>

        </div>

)
}