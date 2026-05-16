import { useState } from 'react'
import Inputs from './Inputs'

function App() {
  const [symbol, setSymbol] = useState("a")
  const [num, setNum] = useState(1)

  return (
    <>
    <Inputs symbol={symbol} setSymbol={setSymbol} num={num} setNum={setNum}/>
      <div>
        {symbol.repeat(num)}
      </div>
    </>
  )
}

export default App
