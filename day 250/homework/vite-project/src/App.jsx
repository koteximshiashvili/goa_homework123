import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Counter from "./Counter";
import ListApp from "./ListApp";
import ShoppingCart from "./ShoppingCart";
import NotesApp from "./NotesApp";

export default function App() {
  return (
    <div>

      <div style={{ marginBottom: 40 }}>
        <ThemeSwitcher />
      </div>

      <div style={{ marginBottom: 40 }}>
        <Counter />
      </div>

      <div style={{ marginBottom: 40 }}>
        <ListApp />
      </div>

      <div style={{ marginBottom: 40 }}>
        <ShoppingCart />
      </div>

      <div>
        <NotesApp />
      </div>
    </div>
  );
}
