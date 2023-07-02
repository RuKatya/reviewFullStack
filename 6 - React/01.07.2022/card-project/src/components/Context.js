import React from 'react'

const Context = () => {
  return (
    <div className="cardPage__context">
        <h6>
            Perfume
        </h6>
        <h2 className="nameOfPerfume">
            Gabrielle Essence Eau De Parfum        
        </h2>
        <h5 className="descriptionOfPerfume">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.
        </h5>
        <div className="price">
            <p className="new-price">$149.99</p>
            <p className="old-price">$169.99</p>
        </div>
        <button className="cartBtn">
            <img className="icon" src="/images/icon-cart.svg" alt="iconCart"/>
            Add to Cart
        </button>
    </div>
  )
}

export default Context