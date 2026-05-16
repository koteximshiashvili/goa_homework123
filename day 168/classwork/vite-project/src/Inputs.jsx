
const Inputs = ({ symbol, setSymbol, num, setNum }) => {
  return (
    <>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)}/>
        <input type="text" value={num} onChange={(e) => setNum(e.target.value)}/>
    </>
  )
}

export default Inputs