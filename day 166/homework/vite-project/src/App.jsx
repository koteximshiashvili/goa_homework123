import { useState } from "react";

function App() {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState(0);
  const [carLst, setCarLst] = useState([]);
  function addCar(){
    if (year || brand.trim()){
      setCarLst(prev => [...prev, {brand, year}]);
    }
  }
  return(
    <>
      <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
      <input type="text" value={year} onChange={(e) => setYear(e.target.value)}/>
      <button onClick={addCar}>Submit</button>
      <ol>
        {
          carLst.map((el, index) => <li key={index}>{el.brand}{el.year}</li>)
        }
      </ol>
    </>
  )
}

export default App
