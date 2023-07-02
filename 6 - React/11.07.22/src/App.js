import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Item from './Components/Item';
import { selectorProducts } from './Store/Reducers/productReducer';
import {addNewProduct} from './Store/Reducers/productReducer'

function App() {
  const products = useSelector(selectorProducts)
  const dispatch = useDispatch()
  console.log(products)

  const handleNewProduct = (e) => {
    e.preventDefault()

    const nameProduct = e.target.elements.nameProduct.value;
    const priceProduct = e.target.elements.priceProduct.value;
    const sizeProduct = e.target.elements.sizeProduct.value;
    const colorProduct = e.target.elements.colorProduct.value;
    console.log(nameProduct, priceProduct, sizeProduct, colorProduct)
  }

  return (
    <div className="App">
      <form onSubmit={handleNewProduct}>
        <input type="text" name="nameProduct" placeholder="Add a name product"/>
        <input type="number" name="priceProduct" placeholder="Add a price product"/>
        <input type="text" name="sizeProduct" placeholder="Add a size product"/>
        <input type="text" name="colorProduct" placeholder="Add a color product"/>
        <button type="submit">Add</button>
      </form>
      <div className="gridProducts">
      {products.map((item) => {
        return (
          <Item item={item}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
