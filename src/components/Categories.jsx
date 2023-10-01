import React from 'react'

const Categories = ({ categories }) => {
  return (
    <nav className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button className='btn' key={index}>
            {category}
          </button>
        )
      })}
    </nav>
  )
}

export default Categories
