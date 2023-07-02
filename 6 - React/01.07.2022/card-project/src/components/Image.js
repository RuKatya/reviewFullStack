import React from 'react'

const Image = ({width}) => {
  const computerImage = "/Images/image-product-desktop.jpg"
  const phoneImage = "/Images/image-product-mobile.jpg"

  return (

    
    <div>
      <img src={width < 700 ? phoneImage : computerImage} alt="image"/>
    </div>
  )
}

export default Image