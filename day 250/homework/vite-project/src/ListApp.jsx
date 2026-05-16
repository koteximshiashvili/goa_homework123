import React, { useState } from "react";
import { useListStore } from "./customHooks/listStore";

export default function ListApp() {
  const [input, setInput] = useState("");
  const { list, addItem } = useListStore();

  return (
    <div style={{ padding: 20, background: "#e0f7fa", borderRadius: 8 }}>
      <h2>List App</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type..." />
      <button
        onClick={() => {
          if (input.trim() === "") return;
          addItem(input);
          setInput("");
        }}
      >
        Add
      </button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
