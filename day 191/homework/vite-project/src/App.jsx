import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <p>Please log in or register</p>
      <Link
        to="/form"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Go to Form
      </Link>
    </div>
  );
};

export default App;
