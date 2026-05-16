import React from 'react'

const Products = () => {
  return (
    <>
        {Array.from({ length: 10000 }, (_, i) => (
            <p key={i}>Product {i + 1}</p>
        ))}
    </>
  )
}

export default Products