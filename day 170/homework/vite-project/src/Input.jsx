import { useEffect, useState } from "react"

const Input = () => {
    const [text, setText] = useState(localStorage.getItem("text") || "");
    useEffect(() => localStorage.setItem("text", text), [text])
  return (
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
  )
}

export default Input