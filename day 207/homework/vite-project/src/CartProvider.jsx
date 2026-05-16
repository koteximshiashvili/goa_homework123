import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = product => setProducts(prev => [...prev, product]);

  return (
    <CartContext.Provider value={{ products, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;