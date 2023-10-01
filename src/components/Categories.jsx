import React from 'react'

const Categories = ({ categories, filterByCategory }) => {
  return (
    <nav className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='btn'
            key={index}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </nav>
  )
}

export default Categories
