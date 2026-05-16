import React from 'react'
import Component2 from './Component2'
const Component1 = () => {
  return (
    <div className='bg-amber-300 p-4 m-auto'>
        <h1 className='font-bold text-2xl'>Component 1</h1>
        <Component2 />
    </div>
  )
}

export default Component1