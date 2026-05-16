import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex gap-4">
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
    <Link to="/main">Users</Link>
  </nav>
);

export default Navbar;
