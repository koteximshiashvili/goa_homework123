import React from 'react'
import NavBar from './NavBar'
import { users } from '../data.js'
import { Link } from 'react-router'
const Users = () => {

  return (
    <div>
        <NavBar />
        <div>
          {users.map(i => (
            <Link key={i.id} to={`/user/${i.id}`}>
            <div className='p-4 bg-gray-600 m-4 rounded'>
              <h1 className='font-bold text-xl'>{i.name}</h1>
              <p className='font-semibold opacity-60'>{i.description}</p>
            </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Users;