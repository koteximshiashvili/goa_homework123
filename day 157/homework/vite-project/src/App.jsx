import { parts } from "./data/data.js";
import { Parts } from "./components/Parts.jsx";
import { useState } from "react";

function App() {
  console.log(<h1 id="hello"><p>hello</p></h1>)
  const [cart, setCart] = useState([]);

  function getTotal() {
    return cart.reduce((el, prev) => el + prev, 0);
  }

  function AddToCart(id) {
    setCart(prev => [...prev, getElementPrice(id)]);
  }

  function RemoveFromCart(id) {
    const priceToRemove = getElementPrice(id);
    setCart(prev => {
      const index = prev.indexOf(priceToRemove);
      if (index > -1) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      }
      return prev;
    });
  }

  function getElementPrice(id) {
    for (const i of parts) {
      if (i.id === id) {
        return i.price;
      }
    }
  }

  function clearCart(){
    setCart([])
    alert("bought")
  }
  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-white shadow rounded p-4 mb-6">
        <h1 className="text-xl font-semibold mb-3">🛒 Cart</h1>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-medium">Total: ${getTotal()}</span>
          <button onClick={clearCart} className="bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Buy
          </button>
        </div>
        <ul className="text-gray-800 list-disc pl-5">
          {cart.map((price, index) => (
            <li key={index}>Item {index + 1} - ${price}</li>
          ))}
        </ul>
      </div>

      <Parts parts={parts} addToCart={AddToCart} removeFromCart={RemoveFromCart} />
    </div>
  );
}

export default App;
