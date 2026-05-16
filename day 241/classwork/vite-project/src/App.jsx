import { useStore } from "./store"
import useShallow from "zustand"

function App() {
  const { count, increase, decrease, reset } = useStore(useShallow(s => ({
    count: s.count,
    inc: s.inc,
    dec: s.dec,
    hello: s.hello
  })));

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App
