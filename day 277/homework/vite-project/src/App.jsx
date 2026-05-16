import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [tasks,setTasks]=useState([])
  const [title,setTitle]=useState("")

  const load=()=>{
    axios.get("http://localhost:6967/tasks").then(r=>setTasks(r.data))
  }

  useEffect(load,[])

  const add=()=>{
    axios.post("http://localhost:6967/tasks",{title}).then(()=>{
      setTitle("")
      load()
    })
  }

  const complete=t=>{
    axios.put(`http://localhost:6967/tasks/${t.id}`,{title:t.title,status:"completed"}).then(load)
  }

  const remove=id=>{
    axios.delete(`http://localhost:6967/tasks/${id}`).then(load)
  }

  return(
    <div style={{padding:40}}>
      <h1>todo</h1>
      <input value={title} onChange={e=>setTitle(e.target.value)} />
      <button onClick={add}>add</button>
      <ul>
        {tasks.map(t=>(
          <li key={t.id}>
            {t.title}
            <button onClick={()=>complete(t)}>done</button>
            <button onClick={()=>remove(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App