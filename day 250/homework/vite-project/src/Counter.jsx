import React from "react";
import { useCounterStore } from "./customHooks/CounterStore";

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div style={{ padding: 20, background: "#f5f5f5", borderRadius: 8 }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
