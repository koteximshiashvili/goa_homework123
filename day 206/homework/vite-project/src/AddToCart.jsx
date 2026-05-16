import { useContext } from "react";
import { CartContext } from "./CartProvider";

const AddToCart = () => {
  const { addProduct } = useContext(CartContext);


  return <button onClick={() => addProduct("product")}>Add Product</button>;
};

export default AddToCart;
