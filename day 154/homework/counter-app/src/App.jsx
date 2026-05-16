import { useState } from "react";
import Counter from "./components/Counter.jsx";
import History from "./components/History.jsx";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("text-black");
  const [history, setHistory] = useState([]);

  const updateCount = (newCount) => {
    if (newCount > count) setColor("text-green-600")
    else if (newCount < count) setColor("text-red-600")
    else setColor("text-black")

    setCount(newCount)
    setHistory((prev) => {
      const updatedHistory = [newCount, ...prev];
      if (updatedHistory.length > 5) updatedHistory.pop();
      return updatedHistory;
    });
  };

  return (
      <>
        <Counter count={count} updateCount={updateCount} color={color} />
        <History history={history} />
      </>
  );
};

export default App;
