import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Item from '../Components/Item'
import { newProduct } from '../store/action/productAction'

const Shop = () => {
  const products = useSelector(state => state.product)
  console.log(products)

  const dispatch = useDispatch()

  function handleCreateProduct (event) {
    event.preventDefault()

    const item = event.target.elements.newProduct.value
    dispatch(newProduct(item))
  }

  return (
    <div>
      {products.map(item => {
      return (
        <Item key={item.id} product={item} />
      )
    })}

    <form onSubmit={handleCreateProduct}>
      <input type="text" name="newProduct" placeholder="add a new name of product" />
      <button type="submit">Add</button>
    </form>
    </div>
  )
}

export default Shop;