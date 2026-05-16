import React, { useState } from 'react';

const Task3 = () => {
  const products = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  const [search, setSearch] = useState('');

  const filtered = products.filter(el =>
    el.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {filtered.map((el, i) => <li key={i}>{el}</li>)}
      </ul>
    </div>
  );
};

export default Task3;
