import create from "zustand";

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (item) =>
    set((state) => {
      const newCart = [...state.cart, item];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),
  removeFromCart: (item) =>
    set((state) => {
      const index = state.cart.indexOf(item);
      if (index === -1) return state;
      const newCart = [...state.cart];
      newCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),
}));
