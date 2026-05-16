

function App() {
  let arr = [Array(100)];
  let arr1 = []
  for(let i = 0; i < 100; i++){
    arr1.push(i)
  }
  let arr2 = [Array(50)]
  return (
    <>
      {arr.map((el, index) => <div key={index}>{el}</div>)}
      {arr1.map((el, index) => <div key={index}>{el}</div>)}
      {arr2.map((el, index) => index % 2 === 0 ? <div key={index} className="bg-blue-500">{el}</div> : <div key={index}>{el}</div>)}
      {arr.fill(<div style={{background: "red"}}></div>)}
    </>
  )
}

export default App
