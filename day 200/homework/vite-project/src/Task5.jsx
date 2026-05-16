import React, { useState } from 'react';

const Task5 = () => {
  const products = [
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Banana', price: 2 },
    { id: 3, name: 'Orange', price: 3 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div>
      <h3>Products</h3>
      {products.map(el => (
        <div key={el.id}>
          <span>{el.name}: ${el.price}</span>
          <button onClick={() => addToCart(el)}>add to cart</button>
        </div>
      ))}

      <h3>Cart</h3>
      <ul>
        {cart.map(el => (
          <li key={el.id}>
            {el.name} — ${el.price}
            <button onClick={() => removeFromCart(el.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task5;
