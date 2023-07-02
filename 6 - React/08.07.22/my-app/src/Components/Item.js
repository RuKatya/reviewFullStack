import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, updateProduct } from '../store/action/productAction'

const Item = ({ product }) => {

  const dispatch = useDispatch()

  const handleUpdateProduct = (event) => {
    event.preventDefault()

    const value = event.target.elements.updateName.value
    dispatch(updateProduct(product.id, value))
  } 

  return (
    <div>
        <p className="item">
          {product.name}
        </p>
        <button onClick={() => {dispatch(deleteProduct(product.id))}} >Delete</button>
        <form onSubmit={handleUpdateProduct}>
          <input type="text" name="updateName" placeholder="enter your new value"/>
          <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default Item