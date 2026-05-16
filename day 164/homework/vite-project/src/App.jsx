import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0);
  // const [theme, setTheme] = useState("blue")
  // function IncrementCount(){
  //   setCount(prevCount => prevCount + 1) // აქ ვუმატებთ ახლანდელ სტეიტს ერთს
  // }
  // function DecrementCount(){
  //   setCount(prevCount => prevCount - 1) // აქ ვაკლებთ ახლანდელ სტეიტს ერთს
  //   setTheme("red") // აქ ვცვლით სტეიტს blueდან redზე
  // }
  // return (
  //   <>
  //     <button onClick={DecrementCount}>-</button>
  //     <p>{count}</p>
  //     <p>{theme}</p>
  //     <button onClick={IncrementCount}>+</button>
  //   </>
  // )
    const [red, setRed] = useState(100);
    const [green, setGreen] = useState(100);
    const [blue, setBlue] = useState(100);

    const bgColor = `rgb(${red}, ${green}, ${blue})`;

    return (
      <div className="bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="w-full bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Color Picker</h2>

          <div className="w-full h-40 rounded-lg mb-6 border" style={{ backgroundColor: bgColor }}></div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-red-500 mb-1">Red: {red}</label>
              <input type="range" min="0" max="255" value={red} onChange={(e) => setRed(Number(e.target.value))} className="w-full"/>
            </div>

            <div>
              <label className="text-sm font-medium text-green-600 mb-1">Green: {green}</label>
              <input type="range" min="0" max="255" value={green} onChange={(e) => setGreen(Number(e.target.value))} className="w-full"/>
            </div>

            <div>
              <label className="text-sm font-medium text-blue-600 mb-1">Blue: {blue}</label>
              <input type="range"  min="0" max="255" value={blue} onChange={(e) => setBlue(Number(e.target.value))} className="w-full"/>
            </div>
          </div>

          <p className="mt-6 text-center text-gray-700">
            color: <span className="font-semibold">{bgColor}</span>
          </p>
        </div>
      </div>
    );
}


export default App
