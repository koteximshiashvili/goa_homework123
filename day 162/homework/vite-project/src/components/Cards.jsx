import { useState } from "react";

export const Cards = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [cards, setCards] = useState([]);

  function add() {
    if (first.trim() && second.trim()) {
      setCards([...cards, { name: first, description: second }]);
      setFirst("");
      setSecond("");
    }
  }

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="Name" className="p-2 border border-gray-300 rounded" />
        <input type="text" value={second} onChange={(e) => setSecond(e.target.value)} placeholder="Description" className="p-2 border border-gray-300 rounded" />
        <button onClick={add} className="bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      </div>
      <ol className="w-full flex flex-col items-center gap-4">
        {cards.map((el, index) => (
          <div key={index} className="w-full bg-white p-4 rounded shadow">
            <h1 className="text-lg font-semibold">{el.name}</h1>
            <p className="text-gray-700">{el.description}</p>
          </div>
        ))}
      </ol>
    </div>
  );
};
