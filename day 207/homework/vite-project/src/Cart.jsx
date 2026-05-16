import { useContext } from "react";
import { CartContext } from "./CartProvider";

const Cart = () => {
  const { products } = useContext(CartContext);

  return <p>Cart: {products.length}</p>;
};

export default Cart;
