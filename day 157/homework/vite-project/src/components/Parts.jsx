export const Parts = ({ parts, addToCart, removeFromCart }) => {
  return (
    <div className="grid gap-4">
      {parts.map((el) => (
        <div
          key={el.id}
          className="bg-white shadow rounded p-4 flex flex-col gap-2"
        >
          <h1 className="text-lg font-semibold">{el.name}</h1>
          <p className="text-gray-700">{el.description}</p>
          <span className="text-sm font-medium">
            💵 Price: ${el.price}
          </span>
          <span
            className={`text-sm font-medium ${
              el.inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {el.inStock ? "In Stock ✅" : "Out Of Stock ❌"}
          </span>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => addToCart(el.id)}
              className="bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Add To Cart
            </button>
            <button
              onClick={() => removeFromCart(el.id)}
              className="bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
