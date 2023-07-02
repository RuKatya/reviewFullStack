import { useState, useEffect } from 'react';
import Context from '../components/Context';
import Image from '../components/Image';

const Card = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", changeWidth);
    }, []);

    console.log(screenWidth)

  return (
    <div className="cardPage">
        <Image width={screenWidth} />
        <Context />
    </div>
    
  )
}

export default Card