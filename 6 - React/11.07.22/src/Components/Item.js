import React from 'react'

const Item = ({item}) => {
  return (
    <div className="itemProduct">
    <p>Name of product: {item.name}</p>
    <p>Price of product: {item.price}</p>
    <p>Size of product: {item.size}</p>
    <p>Color of product: {item.color}</p>
    </div>
  )
}

export default Item