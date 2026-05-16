import React from 'react'
import { Link } from 'react-router'
const NavBar = () => {
  return (
    <div>
         <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link to="/home" className="hover:text-blue-400 transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-blue-400 transition-colors">Settings</Link>
        </li>
        <li>
          <Link to="/users" className="hover:text-blue-400 transition-colors">Users</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar