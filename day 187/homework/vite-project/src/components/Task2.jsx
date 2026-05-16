import React, { useState, useTransition } from 'react'
import Products from './Products';
import Home from './Home';
const Task2 = () => {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const switchTab = (newTab) => {
    startTransition(() => {
      setTab(newTab);
    });
  };

  return (
    <div>
      <button onClick={() => switchTab("home")}>Home</button>
      <button onClick={() => switchTab("products")}>Products</button>

      {isPending && <p>Loading...</p>}

      <div>
        {tab === "home" && <Home />}
        {tab === "products" && <Products />}
      </div>
    </div>
  );
}

export default Task2