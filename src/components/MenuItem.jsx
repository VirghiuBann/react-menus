import React from 'react'

const MenuItem = ({ id, title, price, img, category, desc }) => {
  return (
    <article>
      <div>
        <img src={img} alt={title} />
      </div>
      <header>
        <h3>{title}</h3>
        <div>$ {price}</div>
      </header>
      <div>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default MenuItem
