const Counter = ({ count, updateCount, color }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className={`text-6xl font-bold mb-4 transition-colors duration-300 ${color}`}>
        {count}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => updateCount(count + 1)}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Increment
        </button>
        <button
          onClick={() => updateCount(0)}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          Reset
        </button>
        <button
          onClick={() => updateCount(count - 1)}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
