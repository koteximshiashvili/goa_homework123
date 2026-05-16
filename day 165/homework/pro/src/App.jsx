import Card from "./components/Card";
import { data } from "./Data/data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [search, setSearch] = useState("");

  function updateList(filteredData) {
    const filtered = filteredData.filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setPeople(filtered);
  }

  function searchChange(e) {
    const val = e.target.value;
    setSearch(val);

    if (val === "") {
      updateList(data);
    } else {
      updateList(data);
    }
  }

  function sort() {
    setPeople(prev =>
      [...prev].sort((a, b) =>
        a.name[0].toLowerCase().localeCompare(b.name[0].toLowerCase())
      )
    );
  }

  function check() {
    setPeople(data.filter(el => el.isFavorite));
  }

  function check1() {
    setPeople(data.filter(el => !el.isFavorite));
  }

  function showAll() {
    setPeople(data);
  }

  return (
    <>
      <div className="flex gap-4 p-4">
        <input type="text" value={search} onChange={(e) => searchChange(e)} className="border border-gray-400 rounded" />
        <button className="bg-purple-600 text-white rounded" onClick={sort}>sort</button>
        <button className="bg-blue-500 text-white rounded" onClick={check}>Show Favorites</button>
        <button className="bg-gray-500 text-white rounded" onClick={check1}>Show Not Favorites</button>
        <button className="bg-green-500 text-white rounded" onClick={showAll}>Show All</button>
      </div>
      <div className="flex flex-wrap">
        {people.map(el => (
          <Card key={el.id} setPeople={setPeople} profile={el} />
        ))};
      </div>
    </>
  );
}

export default App;
