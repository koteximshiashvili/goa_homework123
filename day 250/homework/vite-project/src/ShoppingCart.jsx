import React from "react";
import { useCartStore } from "./customHooks/CartStore";

export default function ShoppingCart() {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const products = ["Apple", "Banana", "Orange"];

  return (
    <div style={{ padding: 20, background: "#fff3e0", borderRadius: 8 }}>
      <h2>Shopping Cart</h2>
      {products.map((p) => (
        <div key={p}>
          {p}
          <button onClick={() => addToCart(p)}>Add</button>
          <button onClick={() => removeFromCart(p)}>Remove</button>
        </div>
      ))}
      <h3>Cart:</h3>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
