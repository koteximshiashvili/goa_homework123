import {useEffect,useState} from "react"
import {getCategories,createCategory,deleteCategory} from "../api"

export default function Categories(){

    const[categories,setCategories]=useState([])
    const[name,setName]=useState("")

    useEffect(()=>{
    load()
    },[])

    async function load(){
    const data=await getCategories()
    setCategories(data)
    }

    async function add(){
    await createCategory(name)
    setName("")
    load()
    }

    async function remove(id){
    await deleteCategory(id)
    load()
    }

    return(

        <div className="p-8 max-w-md">

        <h1 className="text-3xl font-bold mb-6">
            Categories
        </h1>

        <div className="flex gap-2 mb-6">

        <input
            className="border p-2 rounded w-full"
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder="Category name"
        />

        <button
            className="bg-blue-500 text-white px-4 rounded"
            onClick={add}
        >
        Add
        </button>

        </div>

        <div className="space-y-2">

        {categories.map(c=>(

        <div
            key={c.id}
            className="flex justify-between bg-white p-3 rounded shadow"
        >

        <span>{c.name}</span>

        <button
            className="text-red-500"
            onClick={()=>remove(c.id)}
        >
        Delete
        </button>

        </div>

        ))}

        </div>

        </div>

)
}