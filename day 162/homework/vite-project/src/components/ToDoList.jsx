import { useState } from "react";

const Todolist = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState([]);
  const [kote, setKote] = useState(null);
  const [proKote, setProKote] = useState("");

  function AddTodolist() {
    if (value.trim()) {
      setState([...state, value]);
      setValue("");
    }
  }

  function batoni(index) {
    setState((prev) => prev.filter((_, i) => i !== index));
  }

  function knopka(index, value) {
    setKote(index);
    setProKote(value);
  }

  function qalbatoni(index) {
    setState((prev) => prev.map((item, i) => (i === index ? proKote : item)));
    setKote(null);
    setProKote("");
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Todolist</h2>
        <div className="flex gap-2 mb-4">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="flex-1 p-2 border border-gray-300 rounded" placeholder="Enter task" />
          <button onClick={AddTodolist} className="bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Submit</button>
        </div>
        <ol className="space-y-3">
          {state.map((el, index) => (
            <li key={index} className="p-4 bg-gray-200 rounded flex items-center justify-between">
              {kote === index ? (
                <div className="flex w-full gap-2">
                  <input value={proKote} onChange={(e) => setProKote(e.target.value)} className="flex-1 p-2 border border-gray-300 rounded" />
                  <button onClick={() => qalbatoni(index)} className="bg-green-600 text-white rounded hover:bg-green-700">qalbatoni</button>
                </div>
              ) : (
                <>
                  <h1 className="flex-1 text-lg font-medium text-gray-800">{el}</h1>
                  <div className="flex gap-2">
                    <button className="bg-yellow-600 text-white rounded hover:bg-yellow-700" onClick={() => knopka(index, el)}>knopka</button>
                    <button className="bg-red-600 text-white rounded hover:bg-red-700" onClick={() => batoni(index)}>batoni</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todolist;
